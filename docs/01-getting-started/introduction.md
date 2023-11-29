欢迎来到 Next.js 的文档!

---

## What is Next.js(什么是 Next.js)

Next.js 是一个为了构建全栈网站应用的 React 框架. 你可以使用 React 组件构建用户界面, 使用 Next.js 实现附加功能和优化.

在内部, Next.js 抽象并自动配置了 React 所需的工具, 像打包, 编译等. 这样, 你就可以专注于构建应用程序, 不用花时间进行配置各项配置.

无论你是一名个人开发者或组内的成员, Next.js 都能够帮助你构建交互式的, 动态的, 快速的 React 应用.

---

## Main Features(主要功能)

Next.js 一部分的主要功能包括:

| 项目                                                                                           | Value                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Routing(路由)](https://nextjs.org/docs/app/building-your-application/routing)                 | 基于文件系统的路由(建立在 Server Components(服务端组件)上), 支持页面布局, 路由嵌套, 加载状态, 错误处理等功能.                                                                                            |
| [Rendering(编译)](https://nextjs.org/docs/app/building-your-application/rendering)             | 使用 Client Components (客户端组件)和 Server Components (服务端组件)进行客户端和服务端的渲染. 进一步优化服务端上的 Static(静态), Dynamic(动态)渲染. 在 Edge 和 Node.js 运行时, 进行 Streaming(流式处理). |
| [Data Fetching(数据获取)](https://nextjs.org/docs/app/building-your-application/data-fetching) | 通过 Server Components(服务端组件) 的 async/await 简化了数据获取, 并为 `fetch` API 扩展了: request memoization (请求记录), data caching(数据缓存)和 revalidation(重新验证).                              |
| [Styling(样式)](https://nextjs.org/docs/app/building-your-application/styling)                 | 支持你喜欢的样式设计方式, 包括 CSS Modules(模块化 CSS), Tailwind CSS 和 CSS-in-JS                                                                                                                        |
| [Optimizations(优化)](https://nextjs.org/docs/app/building-your-application/optimizing)        | 优化图像, 字体, 脚本, 以提高应用程序的性能和用户体验.                                                                                                                                                    |
| [Typescript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)     | 改进了对 TypeScript 的支持, 包括更好的类型检查和更高效的编译, 以及自定义 TypeScript 插件和类型检查器.                                                                                                    |

---

## How to Use These Docs(怎么使用这些文档)

在屏幕的左侧, 你可以找到文档导航. 文档的每一页都被按顺序, 从简单到进阶排列, 所以你可以参照它们一步一步的构建你的应用. 不过, 你可以按照任何顺序阅读, 也可以跳转到适用于的你使用场景的页面.

在屏幕右侧, 你会看到一个目录, 帮助你更方便地在页面各部分之间进行跳转. 如果你需要快速查找页面, 可以使用顶部的搜索栏或搜索快捷键(Ctrl+K 或 Cmd+K).

开始使用, 查看[安装](https://nextjs.org/docs/getting-started/installation)指南.

## App Router vs Pages Router

---

Next.js 有两个不同的路由: App Router 和 Pages Router. App Router 是最新的, 它允许你使用 React 的最新功能, 像 Server Components(服务端组件)和 Streaming(流式传输). Page Router 是 Next.js 最初的路由, 它允许你构建服务端渲染的 React 应用程序, 并继续为旧版 Next.js 应用程序提供支持.

在侧边栏的顶部, 你可以发现一个下拉菜单, 可以通过它切换并查看 App Router 和 Pages Router 的更能. 由于每个目录都有其独特的功能, 因此你必须确认你选择了哪个选项.

页面顶部的面包屑也会显示你是在查看 App Router 文档还是 Pages Router 文档.

---

## Pre-Requisite Knowledge(预备知识)

虽然我们的文档旨在为初学者提供方便, 但我们需要建立一个基准, 以便文档能始终专注于 Next.js 功能. 我们将确保在引入新构想时提供相关文档的链接.

为从我们的文档获取最多了解, 我们建议你对 HTML,CSS,React 有一个基本了解. 如果你需要补习 React 技能, 请查看我们的 [Next.js 基础课程](https://nextjs.org/learn/foundations/about-nextjs), 它会为你介绍基础知识.

---

## Accessibility(附属)

在使用屏幕阅读器阅读文档时, 为了获得最佳的无障碍环境, 我们建议使用 Firefox 和 NVDA, 或 Safari 和 VoiceOver.

---

## Join our Community(加入我们的社区)

如果你对 Next.js 有任何的疑问, 欢迎到社区中提问, [Github Discussions](https://github.com/vercel/next.js/discussions), [Discord](https://discord.com/invite/bUG2bvbtHy),[twitter](https://twitter.com/nextjs),[Reddit](https://www.reddit.com/r/nextjs)
