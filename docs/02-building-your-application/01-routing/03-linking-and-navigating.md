---
title: 链接和导航
description: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
---

在 Next.js 中有两种方法进行路由导航:

- 使用 [`<Link>` Component (路由组件)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component)
- 使用 [`useRouter` Hook (useRouter 钩子函数)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook)

本页将介绍如何使用 `<Link>` , `useRouter()` 并深入探讨导航的工作原理.

---

## `<Link>` Component ( `<Link>` 组件)

`<Link>` 是 Next.js 的内置组件, 继承了 HTML 的 `<a>` 标签, 用来提供[prefetching(预获取)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching)和 client-side(客户端)的路由跳转. 这是最 Next.js 中最主要的路由跳转方式.

你可以通过引入 `next/link` 来使用该组件. 该组件需要传递一个 `href` 属性:

```tsx title="app/page.tsx"
import Link from "next/link";

export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>;
}
```

你还可以使用其他可选的属性传递给 `<Link>`. 查看[API 文档](https://nextjs.org/docs/app/api-reference/components/link)获取更多.

### Examples (示例)

#### Linking to Dynamic Segments (链接到动态路由段)

当想要跳转到 [dynamic segments(动态路由段)](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)时, 你可以使用 [template literals and interpolation(模板文字和函数插值法)].(https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals) 生成一系列的链接. 比如, 生成一个博客文章列表:

```tsx title="app/blog/PostList.js"
import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
```

#### Checking Active Links (检查激活的链接)

你可以使用 [usePathname()](https://nextjs.org/docs/app/api-reference/functions/use-pathname)函数来确认链接是否为激活状态. 比如, 在激活的链接上增加一个样式, 通过检查 `pathname` 是否和链接的 `href` 相等:

```tsx title="app/components/links.tsx"
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
```

#### Scrolling to an `id` (滚动到某一 id)

Next.js App Router 的默认行为是滚动到新路由的顶部, 或保持滚动位置于前后导航时的位置.

如果你想要在导航时, 跳转到指定 `id` , 你可以在你的 URL 中添加 `#` 或把含有 `#` 的链接传递到 `href` 属性中, 因为 `<Link>` 标签最终会被渲染成 `<a>` 元素.

```html
<Link href="/dashboard#settings">Settings</Link>

// Output
<a href="/dashboard#settings">Settings</a>
```

#### Disabling scroll restoration (禁止滚动恢复)

Next.js App Router 的默认行为是滚动到新路由的顶部, 或保持滚动位置于前后导航时的位置.

如果你想要取消这个行为, 你可以在 `<Link>` 组件中设置 `scroll={false}` , 或在 `router.push` 中追加 `scroll:false`, 或使用 `router.replace()`.

```html
// next/link
<Link href="/dashboard" scroll={false}>
  Dashboard
</Link>
```

```tsx
// useRouter
import { useRouter } from "next/navigation";

const router = useRouter();

router.push("/dashboard", { scroll: false });
```

---

## `useRouter()` Hook (useRouter()钩子函数)

`useRouter()` 钩子函数允许你通过编程的方式变更路由.

该函数只能在 Client Components(客户端组件) 中使用, 需要从 `next/navigation` 中导入.

```tsx title="app/page.js"
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/dashboard")}>
      Dashboard
    </button>
  );
}
```

获取 `useRouter` 内更多的更多, 请参考 [API 文档](https://nextjs.org/docs/app/api-reference/functions/use-router)

> **建议**: 尽量使用 `<Link>` 组件进行路由间的导航, 除非你有明确的使用需求再用 `useRouter`.

---

## How Routing and Navigation Works (路由及导航是怎么生效的)

App 路由对路由和导航使用了混合方式. 在服务器上, 你的应用程序代码会自动按 route segments(路由段) 进行代码拆分. 在客户端, Next.js 会 [prefetches(预获取)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching) 并 [caches(缓存)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-caching) 这些路由段. 这意味着, 当用户导航到一个新路由时, 浏览器不会重新加载整个 page (页面), 而只会重新渲染发生变化的路由段的 page (页面), 这提升了导航体验和性能.

### 1. Prefetching (预获取)

Prefetching(预获取)是在用户访问某一路由时, 在暗地里预先加载该路由地一种方式.

在 Next.js 中, 路由有两种预获取方式：

- `<Link>` 组件: 路由在用户视图中可见时会自动预获取. 预获取发生在页面首次加载时或通过滚动进入视图时.
- `router.prefetch()`: `useRouter` 钩子函数可以被用来编程式的预获取路由.

`<Link>` 组件额预获取行为与静态或动态路由是不同的:

- [Static Routes(静态路由)](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default): `prefetch(预获取)` 默认是 `true`. 整个路由都会被预获取并缓存下来.
- [Dynamic Routes(动态路由)](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering): `prefetch(预获取)` 默认是自动的. 只有第一个 loading.js 文件之前的共享 layout(布局 UI) 会被预获取并缓存 30 秒. 这不降低了获取整个动态路由的成本, 还意味着你可以显示 [instant loading state(即时加载状态)](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states), 为用户提供更好的视觉反馈.

你可以通过设置 `prefetch` 属性为 `false` 来禁用预获取功能.

查看 [`<Link> API 文档`](https://nextjs.org/docs/app/api-reference/components/link) 来查看更多信息.

> **请注意**:
>
> - Prefetching(预获取)在开发环境是没有开启的, 只有在生产环境开启.

### 2. Caching (缓存)

<!-- TODO: React Server Component Payload是什么? -->

Next.js 有一个名为 [Router Cache (路由器缓存)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data#router-cache) 的 **in-memory client-side cache(内存下的客户端缓存)**. 当用户在应用中导航时, [prefetched(预获取)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching 路由段的 React Server Component Payload(React 服务端组负载) 和访问过的路由都会被存储在缓存中.

这意味着, 在导航时, 缓存会被最大可能的使用, 避免向服务器发送新的请求, 通过减少请求数和数据传输来提升性能.

了解更多关于 [Router Cache(路由缓存)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data)的知识

### 3. Partial Rendering (部分渲染)

部分渲染表示, 只有在导航过程中发生变化的路由段才会在客户端重新渲染, 而任何共享的路由段都会被持久化.

比如, 当在 `/dashboard/settings` 和 `/dashboard/analytics` 间导航时, `settings` 页面和 `analytics` 页面将会被渲染, 共享的 `dashboard` 布局 UI 将会被持久化.

![partial_rendering](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fpartial-rendering.png&w=1920&q=75&dpl=dpl_GBJ5KQetnKuo3B8SJxHn8Jai68Qv)

如果不进行部分渲染, 每次导航都会导致整个页面在服务器上重新渲染. 只渲染发生变化的部分可以减少传输的数据量和执行时间, 从而提高性能.

### 4. Soft Navigation (软路由)

默认情况下, 浏览器会在页面导航时执行硬导航. 这表示, 浏览器会重新加载 page(页面) 并重置 React 状态(如应用中的 `useState` 钩子函数)和浏览器状态(如用户的滚动位置或聚焦元素). 然而, 在 Next.js 中, App 路由使用的是软导航. 这表示, React 不仅会保留 React 和浏览器状态的情况, 还会只渲染发生变化的路由段部分, 不会重新加载整个页面.

### 5. Back and Forward Navigation (后退和前进导航)

默认情况下, Next.js 会保持前后导航的滚动位置, 并重复使用 [Router Cache(路由缓存)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data) 中的路由段.

## Next Steps (下一步)

- [缓存, Next.js 中的缓存机制.](https://nextjs.org/docs/app/building-your-application/caching)
- [TypeScript, Next.js 为你构建 React 应用程序提供了 TypeScript 的开发体验.](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
