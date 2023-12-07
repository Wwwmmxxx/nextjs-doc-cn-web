---
title: 国际化
description: https://nextjs.org/docs/app/building-your-application/routing/internationalization
---

在 Next.js 中, 你可以通过配置内容的路由和渲染来支持多种语言. 使你的网站适应不同的语言环境包括翻译内容(本地化)和国际化路由.

---

## Terminology (术语)

- **Locale(地区):** 一组语言和语言格式化中的标识符, 通常包括用户的首选语言以及可能的地理区域.
  - `en-US`: 美国的英文
  - `nl-NL`: 荷兰的荷兰语
  - `nl`: 未指定地区的荷兰语

---

## Routing Overview (路由简介)

建议使用浏览器中的用户语言首选项来选择要使用哪种语言. 更改首选语言将修改传入应用程序的 `Accept-Language` 头.

比如, 使用下列库, 你可以通过查看到来的 `Request` 对象, 基于 `Headers` 头, 计划支持的本地语言, 默认本地语言, 来决定选择哪个地区.

```ts title="middleware.js"
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-US", "nl-NL", "nl"];
let defaultLocale = "en-US";

match(languages, locales, defaultLocale); // -> 'en-US'
```

路由可以通过子路径 (`/fr/products`) 或域(`my-site.fr/products`)进行国际化. 有了这些信息, 你现在就可以根据 [Middleware(中间件)](https://nextjs.org/docs/app/building-your-application/routing/middleware) 内的地域对用户进行重定向.

```ts title="middleware.js"
let locales = ['en-US', 'nl-NL', 'nl']

// Get the preferred locale, similar to the above or using a library
function getLocale(request) { ... }

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
```

最后, 要确保所有 `app/` 内的文件都要嵌套于 `app/[lang]` 内. 这可以使得 Next.js 路由动态选择不同的路由,将 `lang` 参数传递给每一 page(页) 和每一个 layout(布局). 比如:

```tsx title="app/[lang]/page.js"
// You now have access to the current locale
// e.g. /en-US/products -> `lang` is "en-US"
export default async function Page({ params: { lang } }) {
  return ...
}
```

根布局也可以被嵌套在一个新的文件夹中(如, `app/[lang]/layout.js`).

---

## Localization (本地化)

根据用户偏好的地域或本地化变更显示内容不是 Next.js 独有的功能, 下面描述的模式对任何网络应用程序都适用.

假设我们希望在应用程序中同时支持英语和荷兰语内容. 我们需要维护两个不同的字典对象, 这些对象为我们提供了从某个键到本地化字符串的映射. 例如:

```json title="dictionaries/en.json"
{
  "products": {
    "cart": "Add to Cart"
  }
}
```

```json title="dictionaries/nl.json"
{
  "products": {
    "cart": "Toevoegen aan Winkelwagen"
  }
}
```

然后我们创建一个 `getDictionary` 函数为请求的地区加载这些翻译:

```ts title="app/[lang]/ dictionaries.js"
import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  nl: () => import("./dictionaries/nl.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
```

根据当前选择的语言, 我们可以在布局或页面中获取字段对象.

```tsx title="app/[lang]/page.js"
import { getDictionary } from "./dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang); // en
  return <button>{dict.products.cart}</button>; // Add to Cart
}
```

由于 `app/` 目录中的所有布局和页面都默认为 [Server Components(服务器组件)](https://nextjs.org/docs/app/building-your-application/rendering/server-components), 因此我们无需担心翻译文件的大小会影响客户端内 Javascript 包的大小. 这些代码只会在服务器上运行, 只有生成的 HTML 才会发送到浏览器.

---

## Static Generation (静态生成)

对给定的一组地区生成静态路由, 我们可以在 page(页面) 或 layout(布局) 中使用 `generateStaticParams`函数. 这是全局的, 比如, 在根组件中:

```tsx title="app/[lang]/layout.js"
export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
```

---

## Resources (资源)

- [Minimal i18n routing and translations(最小 i18n 路由和翻译示例)](https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing)
- [`next-intl`](https://next-intl-docs.vercel.app/docs/next-13)
- [`next-international`](https://github.com/QuiiBz/next-international)
- [`next-i18n-router`](https://github.com/i18nexus/next-i18n-router)
