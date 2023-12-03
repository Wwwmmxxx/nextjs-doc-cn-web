---
title: UI 加载和流式传输
description: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
---

特殊文件 `loading.js` 将会使用 [React Suspense(React 悬挂)](https://react.dev/reference/react/Suspense) 帮助你创建有意义的 Loading UI(加载中 UI). 通过这个协定, 你可以在服务器加载某一个路由的内容时, 展示一个服务器的 [instant loading state(即时加载状态)](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states). 当路由段的内容被渲染完成后, 将会替换该内容.

![loading_ui_and_streaming_1](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-ui.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

## Instant Loading States (即时加载状态)

在导航时, Instant Loading States(即时加载状态) 会被作为备用 UI 立即展示. 你可以预渲染 loading indicators (加载中的指示器), 像 skeletons(骨架), spinners(旋转图案)等, 来为即将出现在屏幕上的元素预填充, 像图片, 标题等. 这可以帮助用户了解到 app 正在被响应中以提高用户体验.

在文件夹中创建一个 `loading.js`:

![instant_loading_states_1](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-special-file.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

```tsx title="app/dashboard/loading.tsx"
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />;
}
```

在同一个文件夹内, `loading.js` 会被嵌套在 `layout.js` 内. 它会自动包裹住 `page.js` 文件, 其内的任何子元素都会在 `<Suspend>` 标签内.

![instant_loading_state_2](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-overview.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

> **请注意**:
>
> - 导航是立即的, 即使是通过 [server-centric routing(中心化服务的路由)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works).
> - 导航是可以被中段的, 这表示, 当从一个路由跳转到另一个路由时, 是不需要等待页面完全加载后再执行的.
> - Shared layouts(共享的布局) 将会在新路由加载时, 保持其可交互性.

<!-- TODO: 猜测: 下述是建议不要直接使用 `<Suspend>`  -->

> **建议**: 请对路由段(布局和页面)使用 `loading.js`, 而不是直接使用 `<Suspend>`, 因为 Next.js 优化了这一功能.

---

## Streaming with Suspense (悬挂内的流式传输)

除了 `loading.js` , 你也可以为你的 UI 组件手动创建 Suspense Boundaries(悬挂边界). App 路由支持 [Node.js and Edge runtimes(node.js 和 edge 运行时)](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes) 使用 [Streaming with Suspense(悬挂内的流式传输)](https://react.dev/reference/react/Suspense).

### What is Streaming (什么是流式传输的?)

要想知道在 React 和 Next.js 中流式传输是怎么工作的, 了解 Server Side Rendering(SSR)(服务端渲染) 及其限制是很有帮助的.

在用户看见和使用一个页面前, SSR 还包含有一系列的步骤需要完成:

1. 首先, 页面内的所有数据都会在服务器获取.
2. 然后, 服务器为 page(页面) 渲染 HTML.
3. 将页面内的 HTML, CSS, JavaScript 发送给客户端.
4. 使用生成好的 HTML 和 CSS 展示一个不能交互的用户界面.
5. 最终, React 对用户界面进行[hydrates(水合处理)](https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html), 使得其具有交互性.

![what_is_streaming_1](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-without-streaming-chart.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

上面这些步骤是按照顺序的, 并且是阻塞的. 这意味着, 服务器只有在获取数据后才能开始为页面渲染 HTML. 在客户端, React 只能在页面内的所有组件都被下载完成后才能为 UI 进行 hydrate(水合处理).

使用 React 和 Next.js 的 SSR 可以尽快向用户显示非交互式页面, 从而帮助提高可被用户感知的加载性能.

![what_is_streaming_2](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-without-streaming.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

然而, 这可能还是会比较缓慢, 因为在页面能够向用户展示前还是需要等待服务器获取页面内的全部数据.

通过流式传输, 你可以将页面的 HTML 拆分成较小的 chunk(块), 并逐步将这些块从服务器发送到客户端.

![what_is_streaming_3](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-with-streaming.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

这允许页面内的一部分被率先展示, 而无需等待所有数据加载完毕后才能渲染任何用户界面.

Streaming(流式传输) 在 React 的组件中非常有效, 因为每一个组件都可以被认为是一个 chunk(块). 具有更高优先级的组件(像生产信息)或不需要依赖数据的组件(像布局 UI)将被第一时间发送给客户端, React 会更早的对他们进行 hydrate(水合处理). 具有较低优先级的组件会在它们需要的数据在服务器获取后被发送到客户端.

![what_is_streaming_4](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-with-streaming-chart.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

当你想要阻止页面因为大量数据请求被阻止渲染时, Streaming(流式传输)特别有好处, 因为他能减少 [Time To First Byte(TTFB)](https://web.dev/ttfb/) 和 [First Contentful Paint(FCP)](https://web.dev/first-contentful-paint/). 它还能帮助提升 [Time To Interactive(TTI)](https://developer.chrome.com/en/docs/lighthouse/performance/interactive/), 尤其在缓慢的设备上.

### Example (示例)

`<Suspense>` 的工作原理是封装一个执行异步操作(如获取数据)的组件, 在获取数据过程中显示备用 UI(如 skeleton(骨架), spinner(旋转器)), 然后在服务器将组件渲染完成后交换你的备用 UI.

```tsx title="app/dashboard/page.tsx"
import { Suspense } from "react";
import { PostFeed, Weather } from "./Components";

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
```

通过使用 Suspense(悬挂), 你可以获得以下好处:

- **Streaming Server Rendering(流式服务器渲染)**: 渐进式的由服务器向客户端提供渲染后的 HTML.
- **Selective Hydration(可选的水合处理)**: React 会根据用户的交互情况, 优先选择哪些组件进行水合, 使其具有交互性.

查看更多 Suspense(悬挂) 的示例和用户案例, 请查看 [React 文档](https://react.dev/reference/react/Suspense).

### SEO (搜索引擎优化)

- Next.js 将等待 `generateMetadata` 中的数据获取完成后, 再将用户界面流式传输到客户端. 这将确保流式响应的第一部分包含 `<head>` 标记.
- 由于 streaming(流式传输) 是由服务器渲染的, 因此不会影响 SEO(搜索引擎优化). 你可以使用 Google 的 [Mobile Friendly Test Tool(移动友好测试工具)](https://search.google.com/test/mobile-friendly) 来查看你的页面在 Google 网络爬虫眼中的显示效果, 并查看序列化 HTML（[source](https://web.dev/rendering-on-the-web/#seo-considerations)）.

### Status Codes (状态码)

流式传输时, 表示请求成功时, 将返回 200 状态代码.

此时服务器仍可能会在 streamed content(流式传输的内容) 中向客户端传达错误或问题, 例如使用 [`redirect`](https://nextjs.org/docs/app/api-reference/functions/redirect) 或 [`notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found) 时. 由于响应头已发送到客户端, 因此无法更新响应的状态代码. 这不会影响 SEO(搜索引擎优化).
