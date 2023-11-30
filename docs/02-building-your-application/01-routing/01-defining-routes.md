---
title: 定义路由
description: https://nextjs.org/docs/app/building-your-application/routing/defining-routes
---

> 我们强烈建议你先阅读完[Routing Fundamentals(路由基础)](https://nextjs.org/docs/app/building-your-application/routing)再继续

本页面将会指导你在 Next.js 应用中怎么定义和组织你的路由

---

## Creating Routes (创建路由)

Next.js 使用基于文件系统的路由, 也就是说, 文件夹都被用来定义路由.

每一个文件夹都代表一个映射到 URL 段的路由段. 要创建一个嵌套路由, 你可以在文件夹中进行嵌套.

![creating_routes_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

[`page.js`文件](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)被用来使得当前路由段能够被公开访问.

![creating_routes_2](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fdefining-routes.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

在上面的例子中, `/dashboard/analytics` 由于没有 `page.js` 文件, 所以不能被公开访问. 这个文件夹可以被用来存储组件, 样式, 图片或其他文件.

> 请注意: `.js` , `.jsx` 或者 `.tsx` 文件都可以作用于特殊文件.

---

## Creating UI (创建 UI)

[Special file conventions(特殊文件的协定)](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)被用来为每一个路由段创建 UI. 最常用的有, [pages(页面)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)用以展示每一个路由单独 UI, [layouts(布局)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)用以展示多个路由的共享 UI.

比如, 要创建你的第一个页面, 你可以在 `app` 目录内创建一个 `page.js` 文件, 并导出其中的 React 组件:

```typescript
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

## Next Steps

学习更多关于创建页面和布局.
