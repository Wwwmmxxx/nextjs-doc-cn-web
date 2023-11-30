---
description: https://nextjs.org/docs/app/building-your-application/routing
---

# Routing Fundamentals (路由基础)

每一个 App 的骨架都是路由. 本页面将会向你介绍网页路由的基本概念, 以及如何在 Next.js 中处理路由.

---

## Terminology (术语)

首先, 你会在整个文档中看到下述的数据:

![terminology_1](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fterminology-component-tree.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

- Tree: 一个可视化分层结构. 比如, 一个组件树包含他的父组件和子组件, 一个文件夹结构, 等等.
- Subtree: 树的一部分, 从一个新的根节点到最后的叶子结点
- Root: 树或子树的第一个节点, 比如, root layout(根布局).
- Leaf: 子树上没有子节点的节点, 如 URL 路径中的最后一段.

![terminology_2](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fterminology-url-anatomy.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

- URL Segment: 被反斜杠(/)分开的 URL 路径的一部分
- URL Path: URL 路径内域名后的部分(是 URL Segment 的组合)

---

## The `app` Router (app 路由)

在 Next.js13 中, Next.js 引入了基于[React Server Components(服务端组件)](https://nextjs.org/docs/app/building-your-application/rendering/server-components)的 App 路由, 它支持共享布局, 嵌套路由, 加载状态, 错误处理和其他.

App 路由在 `app` 文件夹内生效. `app` 目录与 `pages` 目录并列, 这使得项目可以渐进式的更新. 你可以选择将一些路由放进 `app` 目录, 保持其他的路由在 `pages` 目录. 如果你的应用使用了 `pages` 目录, 请参考 [Pages 路由](https://nextjs.org/docs/pages/building-your-application/routing)文档.

> 请注意: App 路由的优先级比 Pages 路由的优先级更高. 若在两个目录下存在相同路由, Next.js 会在构建时报错.

![terminology_3](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnext-router-directories.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

在 `app` 内的组件默认都是[React Server Components(服务端组件)](https://nextjs.org/docs/app/building-your-application/rendering/server-components). 这是一种可以让你轻松使用的性能优化, 当然, 你也可以使用[Client Components(客户端组件)](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

> 建议: 如果你对 React Server Components 不清楚, 请查看 [Server](https://nextjs.org/docs/app/building-your-application/rendering/server-components) 页面

---

## Roles of Folders and Files (文件夹和文件的角色)

Next.js 使用了基于文件系统的路由:

- 文件夹被用来定义路由. 路由是由嵌套文件夹组成的单一路径, 按照文件系统的层次结构, 从根文件夹向下延伸至包含 page.js 文件的 Leaf(叶子)文件夹。请参考 [Defining Routes(定义路由)](https://nextjs.org/docs/app/building-your-application/routing/defining-routes).
- 文件用于创建指定路由段的用户界面. 请参考[special files(特殊文件)](https://nextjs.org/docs/app/building-your-application/routing#file-conventions).

---

## Route Segments (路由段)

路由内的每一个文件夹都代表了一个路由段. 每一个路由段都被映射到了一个 URL 路径的相应部分.

![route_segments_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

---

## Nested Routes (嵌套路由)

要创建一个嵌套路由, 你可以在文件夹中创建文件夹. 比如, 你想要创建 `/dashboard/settings` 路由, 那你可以在 `app` 目录内, 嵌套两个新的文件夹.

`/dashboard/settings`路由由三段组成:

- `/` (根路由段)
- `dashboard` (段)
- `settings` (叶子段)

---

## File Conventions (文件协定)

Next.js 提供了一系列的特殊文件用以在嵌套路由中创建特定行为的 UI.

| 文件名                                                                                                | 简述                                                                                                                |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)     | 路由段及其子路由段的共享用户界面                                                                                    |
| [page](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)         | 路由段的独特 UI, 并允许路由被公开访问                                                                               |
| [loading](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)     | 路由段及其子路由段的加载 UI                                                                                         |
| [not-found](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)                     | 路由段及其子路由段的 Not found UI                                                                                   |
| [error](https://nextjs.org/docs/app/building-your-application/routing/error-handling)                 | 路由段及其子路由段的 错误展示 UI                                                                                    |
| [global-error](https://nextjs.org/docs/app/building-your-application/routing/error-handling)          | 全局错误展示 UI                                                                                                     |
| [route](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)                 | 服务端 API 接口                                                                                                     |
| [template](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates) | 指定的预渲染的布局 UI                                                                                               |
| [default](https://nextjs.org/docs/app/api-reference/file-conventions/default)                         | [Paralled Routes(并行路由)](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)的备用 UI |

> 请注意: `.js` , `.jsx` 或者 `.tsx` 文件都可以作用于上述文件.

---

## Component Hierarchy (组件层次结构)

在路由段的特殊文件中定义的 React 组件会以特定的层次结构渲染:

- `layout.js`
- `template.js`
- `error.js` (React 错误边界)
- `loading.js` (React 加载中边界)
- `not-found.js` (React 错误边界)
- `page.js` 或 嵌套的 `layout.js`

![component_hierarchy_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ffile-conventions-component-hierarchy.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

在嵌套路由中, 路由段内的组件将会被嵌套在其父路由段组件内.

![component_hierarchy_2](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-file-conventions-component-hierarchy.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

---

## Colocation (文件存放位置)

除特殊文件外, 你还可以选择将自己的文件(如组件、样式、测试等)放在 `app` 目录下的文件夹中.

这是因为当文件夹定义路由时, 只有 `page.js` 或 `route.js` 内的内容是可以被公开访问的.

![colocation_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-colocation.png&w=1920&q=75&dpl=dpl_9EKEbD7jAviauyTffgoEyAkQSGtP)

学习更多关于 [Project Organization and Colocation(项目文件结构)](https://nextjs.org/docs/app/building-your-application/routing/colocation)

---

## Advanced Routing Patterns (高级路由模式)

App Router(App 路由)也提供了一系列的协定来帮助你实现更高级的路由模办. 包括:

- [Parallel Routes(并行路由)](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes): 允许你在同一页面同时展示两个或更多数量的, 可以被独立导航的页面. 你可以将它们用于有自己子导航的视图, 像 Dashboard (仪表盘).
- [Intercepting Routes(拦截路由)](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes): 允许你截取一条路由, 并在另一个路由中显示它. 当当前页的上下文非常重要时, 你就可以使用该功能. 例如, 在编辑一项任务时查看所有任务, 或动态展开一张照片.

---

## Next Steps (下一步)

既然你已经理解了 Next.js 的路由基础, 跟随以下链接创建你的第一个路由
