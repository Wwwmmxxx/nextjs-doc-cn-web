---
title: 拦截路由
description: https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
---

Intercepting Routes(拦截路由) 可以在当前布局中从你应用程序的其他部分加载一个路由. 当你想在用户不切换到其他上下文的情况下显示路由内容时, 这种路由规范就非常有用.

比如, 当点击 `feed` 内的照片时, 你可以在 modal(拟态窗口) 中展示图片, 覆盖 `feed`. 在这个情况下, Next.js 将会拦截 `photo/123` 路由, 隐藏 URL, 并让其覆盖 `/feed`.

![intercepting_routes_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fintercepting-routes-soft-navigate.png&w=1920&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

然而, 当通过点击一个被共享的 URL 或刷新页面来导航至照片时, 整个 photo 页面会被作为页面渲染而不会使用 modal(拟态窗口). 不会出现拦截路由.

![intercepting_routes_2](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fintercepting-routes-hard-navigate.png&w=1920&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

---

## Convention (文件名协定)

拦截路由使用 `(..)` 作为协定, 它与相对路径 `../` 使用相似, 但是这是在 segments(段) 中使用的.

你可以使用:

- `(.)` 匹配 **same level(同一层)** 的路由
- `(..)` 匹配 **one level above(上一层)** 的路由
- `(..)(..)` 匹配 **two levels above(上两层)** 的路由
- `(...)` 匹配 `app` 目录的 **the root(根)** 目录

例如, 你可以通过创建 `(..)photo` 目录, 从 `feed` 段中 拦截 `photo` 段。

![convention_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fintercepted-routes-files.png&w=1920&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

> 请注意, `(..)` 协定是基于路由段的, 而不是文件系统.

---

## Examples (示例)

### Modal (拟态窗口)

拦截路由可以与 [Parallel Routes(并行路由)](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes) 同时使用来创建 modals(拟态窗口).

使用这种方法来创建 modals(拟态窗口), 可以克服使用 modals(拟态窗口) 时的一些常见难题：

- 使一个 modal(拟态窗口) 能通过一个 URL 共享.
- 刷新页面时, 保留上下文, 不会关闭 modal(拟态窗口).
- 在向后导航时关闭拟态窗口, 而不是跳转到前一个路由.
- 通过向前导航, 重新打开拟态窗口.

![modal_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fintercepted-routes-modal-example.png&w=1920&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

> 在上面的例子中, `photo` 的路由段可以使用 `(..)` 匹配是因为 `@modal` 是一个插槽, 不是一个路由段. 这意味着, 尽管 `photo` 路由的文件系统级别比 `(..)photo` 高出两个级别, 但 `(..)photo` 路由只高出一个级别。

其他例子包括在顶部导航栏中打开一个登录的拟态窗口, 同时也有一个专门的 `/login` 页面, 或者在侧边栏中打开购物车.

查看关于拦截路由和并行路由下拟态窗口 [example(实例)](https://github.com/vercel-labs/nextgram) 的使用.

## Next Steps(下一步)

- [Parallel Routes(并行路由)](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
