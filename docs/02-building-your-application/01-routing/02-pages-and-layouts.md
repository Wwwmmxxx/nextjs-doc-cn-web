---
title: 页面和布局
description: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
---

> 我们强烈建议你先阅读完[Routing Fundamentals(路由基础)](https://nextjs.org/docs/app/building-your-application/routing)再继续

Next.js13 中的 App 路由引入一种新的文件协定, 用于创建 [pages(页面)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages), [shared layouts(共享布局)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts), [templates(模板)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates). 本页面将会知道你在 Next.js 应用中怎么使用这些特殊文件.

---

## Pages (页面)

一个页面是一个导航的唯一 UI. 你可以通过定从 `page.js` 文件中导出组件来定义页面. 使用嵌套文件夹来定义路由, 并在其中创建 `page.js` 文件, 使得该路由能够被公开访问.

通过在 `app` 目录内增加 `page.js` 文件, 创建你的第一个页面:

![pages_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fpage-special-file.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL)

```tsx title="app/page.tsx"
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return <h1>Hello, Home page!</h1>;
}
```

```tsx title="app/dashboard/page.tsx"
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return <h1>Hello, Dashboard Page!</h1>;
}
```

> **请注意:**
>
> - 一个页面应该总是[route subtree(路由子树)](https://nextjs.org/docs/app/building-your-application/routing#terminology)的[leaf(叶子结点)](https://nextjs.org/docs/app/building-your-application/routing#terminology).
> - Pages(页面) 的文件扩展名可以使用 `.js`, `.jsx` 或 `.tsx`.
> - 若想要使得路由能够被公开访问, `page.js` 文件是必须存在的.
> - Pages(页面) 默认是 [Server Components(服务端组件)](https://nextjs.org/docs/app/building-your-application/rendering/server-components), 但也可以设置成 [Client Components(客户端组件)](https://nextjs.org/docs/app/building-your-application/rendering/client-components).
> - Pages(页面)可以获取数据. 查看 [Data Fetching(数据获取)](https://nextjs.org/docs/app/building-your-application/data-fetching)章节来获得更多信息.

---

## Layouts (布局)

一个布局在多个页面间是共享的. 在导航时, 布局 UI 会保持状态, 保留交互性, 并且不会重新渲染. 布局也可以是[nested(嵌套)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts)的。

默认下, 通过在 `layout.js` 文件中导出一个 React 组件作为布局 UI. 该组件应该接收一个 `children` 属性, 该属性将在渲染过程中填充子布局（如果存在）或子页面.

![layouts_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Flayout-special-file.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL)

```tsx title="app/dashboard/layout.tsx"
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}
```

> **请注意:**
>
> - 最顶层的布局被称为 [Root Layout(根布局)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required). 该组件是必须存在的, 因为它会被整个应用内的页面所共同使用. Root Layout(根布局)必须包含 `html` 和 `body` 标签.
> - 任何 Route Segment(路由段) 都可以定义它自己的 [Layout(布局 UI)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts)(这不是必须的). 这些布局 UI 将会在被该路由段内的页面所共享.
> - 路由中的 Layouts(布局 UI) 默认是嵌套的. 每个父布局都会使用 `children` 属性将子布局包裹在其内部.
> - 你可以使用 [Route Groups(路由组)](https://nextjs.org/docs/app/building-your-application/routing/route-groups)将特定的路由移入或移出共享的布局 UI.
> - Layouts(布局 UI) 默认是 [Server Components(服务端组件)](https://nextjs.org/docs/app/building-your-application/rendering/server-components), 但也可以设置成 [Client Components(客户端组件)](https://nextjs.org/docs/app/building-your-application/rendering/client-components).
> - Layouts(布局 UI) 可以获取数据. 查看 [Data Fetching(数据获取)](https://nextjs.org/docs/app/building-your-application/data-fetching)章节来获得更多信息.
> - 在父布局与子布局中传递数据是行不通的. 然而, 你可以通过在多个布局中获取相同的数据来解决这个问题, React 会 [automatically dedupe the requests(自动减少重复请求)](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)来消除性能影响.
> - Layouts(布局 UI) 没有权限获取其下的 Route Segments(路由段). 如果想要获取所有的 Route Segments(路由段) , 你可以在 Client Component(客户端组件)中使用 [useSelectedLayoutSegment](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment) 或 [useSelectedLayoutSegments](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments) 方法.
> - Layouts(布局 UI) 的文件扩展名可以使用 `.js`, `.jsx` 或 `.tsx`.
> - `layout.js` 和 `page.js` 可以定义在同一个文件夹中. layout(布局) 会包含 page(页面).

### Root Layout (Required) (根布局(必须的))

Root Layout(根布局) 在 `app` 目录内的一级目录内定义, 将会被应用至所有的 routes(路由). 根路由允许你修改从服务端返回的, 初始的 HTML 属性.

```tsx title="app/layout.tsx"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

> **请注意:**
>
> - `app` 目录必须包含 root layout(根布局).
> - Next.js 不会自动创建 `<html>` 和 `<body>`, 所以根布局必须包含它们.
> - 你可以使用 [built-in SEO support(内置搜索引擎优化支持)](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) 来管理 HTML 的 `<head>` 标签, 比如, 像 `<title>` 标签.
> - 你可以使用 [Route Groups(路由组)](https://nextjs.org/docs/app/building-your-application/routing/route-groups) 来创建多个 Root Layouts(根布局). 点击查看[示例](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts).
> - Root Layout(根布局) 默认是 [Server Components(服务端组件)](https://nextjs.org/docs/app/building-your-application/rendering/server-components), 并且 **不能** 被设置成 [Client Components(客户端组件)](https://nextjs.org/docs/app/building-your-application/rendering/client-components).

> **`pages`目录迁移:** Root Layout(根布局) 代替了 `_app.js` 和 `_document.js` 文件. 查看[迁移指南](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#migrating-_documentjs-and-_appjs).

### Nesting Layouts (嵌套布局)

在文件夹 (如 `app/dashboard/layout.js`) 中定义的布局适用于特定的路由段 (如 `acme.com/dashboard`), 并在这些路由段处于活动状态时被渲染. 默认情况下, 文件层次结构中的布局是**嵌套的**, 这意味着它们会通过 `children` 属性将子布局包裹起来.

![nesting_layouts_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-layout.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL)

```tsx title="app/dashboard/layout.tsx"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
```

> **请注意:**
>
> - 只有 Root Layout(根路由) 可以包含 `<html>` 和 `<body>` 标签.

如果你想将 Root Layouts(根布局) 和 Nesting Layouts(嵌套布局)结合起来, root layout(根布局)(`app/layout.js`)会包裹 Dashboard 布局(`app/dashboard/layouts.js`), 即 Dashboard 布局将包裹 `app/dashboard/*` 内的路由段.

这两个布局将会像如下嵌套:

![nesting_layouts_2](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-layouts-ui.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL)

你可以使用 [Route Groups(路由组)](https://nextjs.org/docs/app/building-your-application/routing/route-groups)将特定的路由移入或移出共享的布局 UI.

---

## Templates (模板)

Templates(模板)与 Layouts(布局)有一点相似, 比如, 它们都包裹了它们的子页面和子布局.

但是, 不像 layouts(布局)会跨越路由地保存状态, templates(模板) 在路由时对于它的每一个子元素都会创建一个新的实例. 这意味着, 当用户在同一个模板下的路由间导航时, 模版组件将会加载一个新的实例, DOM 元素会被重新创建, 状态 **不会** 被保留, 效果也会重新同步.

在某一些场景, 你可能需要一些特定的行为, 那么 templates(模板) 会比 layouts(布局) 更合适. 比如:

- 依赖于 `useEffect`（如记录页面浏览量）和 `useState`（如页面反馈表单）的功能.
- 改变框架的默认行为. 比如, 布局内的 Suspend Boundaries(加载界限) 只会在首次加载布局时显示备用界面, 而不会在每次切换页面时显示. 对于模板, 每次导航时都会备用界面.

模板可以通过从 `template.js` 文件中导出一个默认的 React 组件来定义. 该组件应接受一个 `children` 属性.

![templates_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ftemplate-special-file.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL)

```tsx title="app/template.tsx"
export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
```

在嵌套期间, `template.js` 会在布局及其子布局渲染中间被渲染. 以下是简化后的输出结果：

```html title="Output"
<Layout>
  {/* Note that the template is given a unique key. */}
  <template key="{routeParam}">{children}</template>
</Layout>
```

## Modifying `<head>` (改变 `<head>`属性)

在 `app` 目录内, 你可以通过 [built-in SEO support(内置搜索引擎优化支持)](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) 来修改 `<head>` HTML 内的元素, 像`<title>`, `<meta>`.

Metadata(元数据) 可通过在 [layout.js](https://nextjs.org/docs/app/api-reference/file-conventions/layout) 或 [page.js](https://nextjs.org/docs/app/api-reference/file-conventions/page) 文件中导出 [metadata object(元数据对象)](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object) 或 [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function) 函数来定义.

```tsx title="app/page.tsx"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return "...";
}
```

> **请注意:** 你不应该在 root layout(根目录) 上手动追加 `<head>` 标签(比如 `<title>` 和 `<meta>`). 取而代之, 你应该使用 [Metadata API(元数据接口)](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), 它能自动处理高级要求, 如流式传输和删除重复的 `<head>` 元素.

[有关 metadata 的更多可用选项, 请参阅 API 相关资料](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).
