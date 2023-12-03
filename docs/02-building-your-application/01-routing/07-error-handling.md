---
title: 错误处理器
description: https://nextjs.org/docs/app/building-your-application/routing/error-handling
---

`error.js` 文件协定允许你优雅的处理 [nested routes(嵌套路由)](https://nextjs.org/docs/app/building-your-application/routing#nested-routes) 内不在预期内的运行时错误.

- [React Error Boundary(React 错误界限)](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) 会自动包裹住 route segment(路由段) 及其内的嵌套子元素.
- 利用文件系统的层次结构来调整 `error.js` 的粒度, 为指定的 segments(段) 创建错误 UI.
- 从受影响的 segments(端) 中隔离错误, 保持应用内剩下的功能.
- 增加在不需要重新加载整个页面的情况下尝试从错误中恢复的功能.

通过在路由段中添加 `error.js` 文件并导出 React 组件来创建错误用户界面:

![error_handling_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ferror-special-file.png&w=1920&q=75&dpl=dpl_8mqvTcfbhtdnPWFJCvFr8naAHAAq)

```tsx title="app/dashboard/error.tsx"
"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

## How `error.js` Works (`error.js`是怎么工作的)

![how_error.js_works_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ferror-overview.png&w=1920&q=75&dpl=dpl_8mqvTcfbhtdnPWFJCvFr8naAHAAq)

- `error.js` 会自动创建一个 [React Error Boundary(React 错误界限)](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary), 它覆盖了包裹了子路由段或 `page.js` 内的组件.
- 从 `error.js` 文件中导出的 React 组件将会被作为 **fallback(备用)** 组件使用.
- 如果一个错误在错误界限内被抛出, 备用组件将会包含该错误, 并被渲染.
- 当备用错误组件被激活, 在错误界限上层的布局 UI 将会保持它们的状态和交互性, 错误组件可以显示恢复功能(从错误中恢复).

## Recovering From Errors (从错误中恢复)

某一些错误的造成可能是暂时的. 在这些案例中, 简单的重试就可以解决问题.

一个错误组件可以使用 `reset()` 方法来提示用户尝试从错误中复原. 当执行时, 该方法会尝试重新渲染错误界限内的内容. 如果成功, 那么 fallback error component(备用错误组件) 将被会重新渲染的内容替代.

```tsx title="app/dashboard/error.tsx"
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

## Nested Routes (嵌套路由)

通过 [special files(特殊文件)](https://nextjs.org/docs/app/building-your-application/routing#file-conventions) 创建的 React 组件将会被渲染为特定的嵌套层次结构.

例如, 一个有两路由段的, 并且都包含 `layout.js` 和 `error.js` 文件的嵌套路由将会被渲染为以下(被简化的)层次结构:

![nested_routes](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-error-component-hierarchy.png&w=1920&q=75&dpl=dpl_8mqvTcfbhtdnPWFJCvFr8naAHAAq)

嵌套组件层次结构会影响整个嵌套路由中 `error.js` 文件的行为:

- 错误会向最近的父错误界限抛出. 这意味着, `error.js` 文件将处理其内部的, 所有嵌套子段的错误. 在路由的嵌套文件夹中的不同层级放置 `error.js` 文件, 可实现更细粒度或更小粒度的错误用户界面.
- 一个 `error.js` 的错误界限不会处理同一段内由 `layout.js` 抛出的错误, 因为该错误界限在 layout 组件内部的.

## Handling Errors in Layouts (在布局中处理错误)

`error.js` 不会捕捉同一段内由 `layout.js` 或 `template.js` 组件抛出的异常. 当发生错误时, 这种有 [intentional hierarchy(有意识的分层结构)](https://nextjs.org/docs/app/building-your-application/routing/error-handling#nested-routes) 将会保持同级路由之间被共享的重要 UI(如导航)的可见性和功能性.

为了处理 layout(布局)和 template(模板)内的错误, 可以在它们的父段上添加 `error.js` 文件.

为了处理 root layout(根部据) 和 root template(根模板)内的错误, 使用一个不同与 `error.js` 的文件, 叫做 `global-error.js`.

## Handling Errors in Root Layouts (在根布局中处理错误)

在根目录下的 `app/error.js` 错误界限不会捕捉根目录下 `app/layout.js` 或者 `app/template.js` 组件抛出的异常.

为了处理根组件们抛出的错误, 使用不同于 `error.js` 的的文件, 叫做 `app/global-error.js`, 它放置于 `app` 的根目录下.

不像根目录下的 `error.js`, `global-error.js`的错误界限将会包裹整个应用程序. 它的 fallback component(备用组件)被激活时, 将会替代 root layout(根布局). 因为这个原因, 需要注意 `global-error.js` 必须定义它自己的 `<html>` 和 `<body>` 标签.

`global-error.js` 是粒度最小的错误界面, 可被视为整个应用程序的错误处理. 它不太可能经常被触发, 因为根组件的动态性通常较低, 其他 `error.js` 界面会捕捉到大多数错误.

即使定义了 `global-error.js`, 我们还是建议你在根目录下定义一个 `error.js` 文件, 它的备用组件将在根布局内被渲染, 其中包括全局的共享 UI.

```tsx title="app/global-error.tsx"
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
```

## Handling Server Errors (处理服务器错误)

如果一个错误在 Server Component(服务端组件)内部被抛出, Next.js 会将一个 Error 对象(在生产中已去除敏感的错误信息)作为错误属性发送到最近的 `error.js` 文件中.

### Securing Sensitive Error Information (保护敏感的错误信息)

在生产环境中, 被转发到客户端的 `Error` 对象将只会包含一个普通的 `message(信息)` 和 `digest` 属性包含一个自动生成的错误哈希值, 可被用来匹配服务器端日志中的相应错误.

在开发过程中, 转发给客户端的 `Error` 对象将被序列化, 并且 `message(信息)` 会包含原始错误信息, 以便于调试.

## Next Steps(下一步)

- [error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error)
