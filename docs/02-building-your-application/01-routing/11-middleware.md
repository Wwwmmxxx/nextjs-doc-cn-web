---
title: 中间件
description: https://nextjs.org/docs/app/building-your-application/routing/middleware
---

中间件允许你在请求完成前运行代码. 然后, 你可以根据接收到的请求, 通过重写 / 重定向 / 修改请求 / 修改响应头 / 直接响应等方式修改返回.

中间件在缓存内容和路由匹配前运行. 详情请参阅 [Matching Paths(路径匹配)](https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths).

---

## Convention (文件名协定)

通过在你的项目根目录下创建 `middleware.ts|js` 文件来定义中间件. 比如, 与 `pages(页面)` 或 `app` 处于同一级别, 或在 src 内(如果使用了 src 目录的话).

---

## Example (示例)

```ts title="middleware.ts"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
```

---

## Matching Paths (匹配路径)

中间件会被嵌入到项目中的每一个路由. 一个路由的执行顺序如下:

1. 从 `next.config.js` 中获取 `headers`
2. 从 `next.config.js` 中获取 `redirects`
3. Middleware 中间件( `rewrites`, `redirects`, 等等)
4. 从 `next.config.js` 中获取 `beforeFiles` (`rewrites`)
5. 文件系统路由( `public/`, `_next/static/`, `pages/`, `app/`, 等等)
6. 从 `next.config.js` 中读取 `afterFiles` (`rewrites`)
7. 动态路由( `/blog/[slug]` )
8. 从 `next.config.js` 中读取 `fallback` (`rewrites`)

有两种方式可以定义中间件运行在指定路径:

1. [Custom matcher config(自定义匹配器配置)](https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher)
2. [Conditional statements(条件语句)](https://nextjs.org/docs/app/building-your-application/routing/middleware#conditional-statements)

### Matcher (匹配器)

通过 `matcher(匹配器)` 过滤指定路径, 使中间件在特定路径上运行.

```ts title="middleware.js"
export const config = {
  matcher: "/about/:path*",
};
```

你可以使用数组来匹配一个或多个路径.

```ts title="middleware.js"
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
```

`matcher(匹配器)` 配置支持全部的 regex, 所以支持反向查找或字符匹配. 这里有一个反向查找匹配除特定路径外所有路径的示例：

```ts title="middleware.js"
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
```

> **请注意**: `matcher`(匹配)的值必须是常量, 以便在构建时对其进行静态分析. 变量等动态值将被忽略.

配置 matchers(匹配器):

1. 必须以 `/` 开头
2. 可包含命名参数: `/about/:path` 可以匹配 `/about/a` 和 `/about/b`, 但不包含 `/about/a/c`
3. 可对命名参数使用修饰符(以 `:` 开头): `/about/:path*` 可匹配 `/about/a/b/c`, 因为 `\*` 表示零或多个. `?` 表示 0 或 1 个, `+` 是 1 或更多
4. 可以使用括号中的正则表达式: `/about/(._)` 与 `/about/:path_` 作用相同

查看 [path-to-regexp(路径正则表达式)](https://github.com/pillarjs/path-to-regexp#path-to-regexp-1) 文档阅读更多细节.

> **请注意**: 为了向后兼容, Next.js 会始终将 `/public` 视为 `/public/index`. 因此, matcher(匹配器) 内的 `/public/:path` 将与之匹配.

### Conditional Statements (条件语句)

```ts title="middleware.js"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/about-2", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}
```

---

## NextResponse

`NextResponse` API 允许你:

- 将到来的请求 `redirect(重定向)` 到一个不同的 URL
- 对一个给定的 URL `rewrite(重写)` 返回.
- 为 API Routes(API 路由), `getServerSideProps` 和 `rewrite(重写)` 目的地, 设置请求标头
- 设置返回的 cookies
- 设置返回的 headers

要在 Middleware(中间件) 中制造一个返回, 你可以:

1. 为[Page(页面)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)或 [Route Handler(路由处理器)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) `rewrite(重写)` 它们的返回
2. 直接返回一个 `NextResponse`. 查看 [Producing a Response(制造一个返回)](https://nextjs.org/docs/app/building-your-application/routing/middleware#producing-a-response)

---

## Using Cookies (使用 Cookies)

Cookies 是常见的 Headers. 在 `Request` 上, 它们被存储在 `Cookie` 头上. 在 `Response` 上, 它们在 `Set-Cookie` 头上. Next.js 提供了 `NextRequest` 和 `NextResponse` 来获取和操控这些 cookies.

1. 对于传入的请求, `cookies` 有以下方法: `get`, `getAll`, `set` 和 `delete` cookies. 你可以通过 `has` 方法来检查一个 cookie 是否存在, 或使用 `clear` 方法移除所有 cookies.
2. 对于传出的返回, cookie 有以下方法: `get`, `getAll`, `set` 和 `delete`.

```ts title="middleware.ts"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get("nextjs");
  console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has("nextjs"); // => true
  request.cookies.delete("nextjs");
  request.cookies.has("nextjs"); // => false

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();
  response.cookies.set("vercel", "fast");
  response.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/",
  });
  cookie = response.cookies.get("vercel");
  console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

  return response;
}
```

---

## Setting Headers (设置 Headers)

你可以通过 `NextResponse` API 来设置请求和返回的头(设置请求头从 Next.js v13.0.0 开始可用).

```ts title="middleware.ts"
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-hello-from-middleware1", "hello");

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set("x-hello-from-middleware2", "hello");
  return response;
}
```

> **请注意**: 避免设置过大的头, 因为这会造成 [431 Request Header Fields Too Large(431 请求头字段过大)](https://developer.mozilla.org/docs/Web/HTTP/Status/431) 错误, 具体取决于后端网络服务器的配置.

---

## Producing a Response (生成一个返回)

您可以通过返回 `Response` 或 `NextResponse` 实例直接从中间件作出响应. (该方法从 [Next.js v13.1.0](https://nextjs.org/blog/next-13-1#nextjs-advanced-middleware)开始可用)

```ts title="middleware.ts"
import { NextRequest } from "next/server";
import { isAuthenticated } from "@lib/auth";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: "/api/:function*",
};

export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: "authentication failed" },
      { status: 401 }
    );
  }
}
```

---

## Advanced Middleware Flags (中间件高级标志位)

在 Next.js `v13.1` 中, `skipMiddlewareUrlNormalize` 和 `skipTrailingSlashRedirect` 标记被引入中间件中, 用来处理高级使用案例.

`skipTrailingSlashRedirect` 禁用 Next.js 默认的添加或删除尾部斜线的重定向, 允许在中间件内部进行自定义处理, 这样就可以为某些路径保留尾部斜线, 而不为其他路径保留尾部斜线, 从而简化增量迁移.

```ts title="next.config.js"
module.exports = {
  skipTrailingSlashRedirect: true,
};
```

```ts title="middleware.js"
const legacyPrefixes = ["/docs", "/blog"];

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  // apply trailing slash handling
  if (
    !pathname.endsWith("/") &&
    !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
  ) {
    req.nextUrl.pathname += "/";
    return NextResponse.redirect(req.nextUrl);
  }
}
```

`skipMiddlewareUrlNormalize` 禁用 Next.js 为处理直接访问和客户端转换而进行的 URL 规范化. 在某些高级情况下, 你需要使用原始 URL 进行完全控制, 通过该选项可以解锁.

```ts title="next.config.js"
module.exports = {
  skipMiddlewareUrlNormalize: true,
};
```

```ts title="middleware.js"
export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  // GET /_next/data/build-id/hello.json

  console.log(pathname);
  // with the flag this now /_next/data/build-id/hello.json
  // without the flag this would be normalized to /hello
}
```

---

## Version History (版本历史)

| Version (版本) | Changes (变化)                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| `v13.1.0`      | 增加 Middleware(中间件) 标志                                                                               |
| `v13.0.0`      | Middleware(中间件) 可以修改请求头, 返回头, 发送返回                                                        |
| `v12.2.0`      | 中间件是稳定的, 请查看[upgrade guide(升级指南)](https://nextjs.org/docs/messages/middleware-upgrade-guide) |
| `v12.0.9`      | 在 Edge 运行时, 强制使用绝对 URLs [PR](https://github.com/vercel/next.js/pull/33410)                       |
| `v12.1.0`      | 增加 Middleware Beta(中间件测试版)                                                                         |
