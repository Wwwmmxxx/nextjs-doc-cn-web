---
title: 数据获取模板
description: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
---

在 React 和 Next.js 中对 fetching data(获取数据) 有一些推荐模板和最佳实践. 本页将介绍一些最常见的模式以及如何使用它们.

## Fetching Data on the Server (在服务器端获取数据)

我们建议你任何时候可能的话, 都在服务端获取数据, 这会允许你:

- 与后端数据资源(如, 数据库)进行直接连接.
- 通过阻止敏感信息(如 access token 和 API Keys(API 秘钥)) 暴露给客户端, 保证服务器的安全性.
- 在同一个环境下获取数据和渲染. 这减少了客户端和服务端之间的来回通信, 也减少了客户端[work on the main thread(主线程上的工作)](https://vercel.com/blog/how-react-18-improves-application-performance).
- 只需一次往返即可执行多个数据获取, 无需在客户端上执行多个单独请求.
- 减少 [client-server waterfalls(客户端-服务器瀑布现象)](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-and-sequential-data-fetching).
- 根据你的地区, 数据获取可以在更靠近数据源的地方进行, 从而减少延迟并提高性能.

你可以在 Server Components(服务端组件), [Route Handler(路由处理器)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) 和 [Server Actions(服务端行为)](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations) 中使用 fetch 数据.

---

## Fetching Data Where It's Needed (在需要时获取数据)

如果在一个组件树中的不同组件你需要使用相同数据(比如, 当前用户), 你不需要全局的来获取数据或在组件之间传递数据. 你只需要在(需求统一数据的)组件中使用 `fetch` 或 React `cache` 即可, 不必担心对相同数据进行多次请求会影响性能.

这是由于 `fetch` 请求会被自动记忆. 了解更多 [request memoization(请求记忆)](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)

> **请注意:** 这对 layouts(布局) 也是适用的, 因为父布局无法将数据传递给其子元素.

---

## Streaming (流式传输)

React 功能 Streaming(流式传输) 和 [Suspense(悬挂)](https://react.dev/reference/react/Suspense)允许你逐步渲染和增量式地流式传输已渲染的用户界面单元到客户端.

通过 Server Components(服务端组件) 和 [nested layouts(嵌套布局)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts), 你可以立即渲染页面中不需要数据的部分, 而且, 你可以对页面中需要获取数据的部分展示一个 [loading state(加载状态)](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming). 这意味着, 用户不需要等待整个页面全部加载完成后才能看到页面就可以与页面产生交互.

![streaming_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fserver-rendering-with-streaming.png&w=1920&q=75&dpl=dpl_Fpx7kMYuAx67q69KZVM7W7w2kwd5)

要了解 Streaming(流式传输) 和 Suspense(悬挂) 更多知识, 查看 [Loading UI](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) 和 [Streaming and Suspense(流式传输和悬挂)](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense) 页面.

---

## Parallel and Sequential Data Fetching (并行和顺序数据获取)

在 React 组件中获取数据时, 你需要注意两种数据获取模式: Parallel(并行) 和 Sequential(顺序).

![parallel_and_sequential_data_fetching](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fsequential-parallel-data-fetching.png&w=1920&q=75&dpl=dpl_Fpx7kMYuAx67q69KZVM7W7w2kwd5)

- 使用 sequential data fetching(顺序数据获取)时, 路由中的请求相互依赖, 因此会产生瀑布流. 在某些情况下你可能需要这种模式, 因为一个获取依赖于另一个获取的结果, 或者你希望在下一个获取之前满足一个条件以节省资源. 但是, 这种行为也可能是无意的并导致更长的加载时间.
- 使用 parallel data fetching(并行数据获取)时, 路由中的请求会马上启动, 并同时加载数据. 这就减少了 client-server(客户端-服务器) 的瀑布现象并缩短了加载数据所需的总时间.

### Sequential Data Fetching (顺序数据获取)

如果你有嵌套组件, 并且每个组件都需要获取自己的数据, 如果这些数据请求不同, 数据获取将按顺序进行(这不适用于对相同数据的请求, 因为它们会被自动 [memoized(备忘)](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)).

例如, `Playlists` 组件会在 `Artist` 组件完成数据获取后才开始获取数据, 因为 `Playlists` 依赖于 `artistID` 属性:

```ts title="app/artist/[username]/page.tsx"
// ...

async function Playlists({ artistID }: { artistID: string }) {
  // Wait for the playlists
  const playlists = await getArtistPlaylists(artistID);

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Wait for the artist
  const artist = await getArtist(username);

  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  );
}
```

在这种情况下, 你可以使用 [`loading.js`](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)(用于路由段) 或 [React `<Suspense>`](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense)(用于嵌套组件)来显示 instant loading state(即时加载状态), 同时 React 会将结果流式传入.

这样, 整个路由就不会被数据获取阻塞, 用户可以与页面中未被阻塞的部分进行交互.

> **阻塞的数据请求:**
>
> 防止瀑布流的另一种方法是在应用程序根目录下全局获取数据, 但这将会阻止其下所有路由段的呈现, 用户需要等待数据加载完成. 这可以说是 "全有或全无" 的数据获取. 要么拥有页面或应用程序的全部数据, 要么什么都没有.
>
> 除非使用 `<Suspense>` 边界包裹或使用 `loading.js`, 否则任何带有 `await` 的获取请求都会阻塞其下方整个组件树的渲染和数据获取. 另一种方法是使用 [parallel data fetching(并行数据获取)](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-data-fetching) 或 [preload pattern(预载模式)](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#preloading-data).

### Parallel Data Fetching (并行数据获取)

要并行获取数据, 你可以通过在使用数据的组件外部定义请求, 然后在组件内部调用请求来即时启动请求. 这样可以通过并行启动两个请求来节省时间, 不过, 在两个 `Promises` 都得到完成前, 用户不会看到渲染的结果.

在下面的示例中, `getArtist` 和 `getArtistAlbums` 函数定义在 Page(页面) 组件外部, 然后在组件内部被调用, 最后我们等待这两个 `Promises` 完成:

```ts title="app/artist/[username]/page.tsx"
import Albums from "./albums";

async function getArtist(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}`);
  return res.json();
}

async function getArtistAlbums(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`);
  return res.json();
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Initiate both requests in parallel
  const artistData = getArtist(username);
  const albumsData = getArtistAlbums(username);

  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums}></Albums>
    </>
  );
}
```

为了改善用户体验, 你可以添加一个 [Suspense Boundary](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming) 来中断渲染工作, 并尽快显示部分结果.

---

## Preloading Data (预加载数据)

防止瀑布流的另一种方法是使用 preload pattern(预加载模式). 你可以选择创建一个 `preload` 函数, 以进一步优化并行数据获取. 使用这种方法, 你不必将 `Promises` 作为属性传递下去. `preload` 函数也可以使用任何名称, 因为这是一种模式, 而不是 API.

```ts title="components/Item.tsx"
import { getItem } from "@/utils/get-item";

export const preload = (id: string) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void getItem(id);
};
export default async function Item({ id }: { id: string }) {
  const result = await getItem(id);
  // ...
}
```

```tsx title="app/item/[id]/page.tsx"
import Item, { preload, checkIsAvailable } from "@/components/Item";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  // starting loading item data
  preload(id);
  // perform another asynchronous task
  const isAvailable = await checkIsAvailable();

  return isAvailable ? <Item id={id} /> : null;
}
```

---

## Using React `cache`, server-only and Preload Pattern (使用 React `cache`, `server-only` 和 预加载模式)

你可以将 `cache` 功能, `preload` 模式和 `server-only` 包结合起来, 创建一个可在整个应用程序中使用的数据获取工具.

```ts title="utils/get-item.ts"
import { cache } from "react";
import "server-only";

export const preload = (id: string) => {
  void getItem(id);
};

export const getItem = cache(async (id: string) => {
  // ...
});
```

通过这种方法, 你可以立刻获取数据, 缓存响应, 并保证数据获取[only happens on the server(只发生在服务器上)](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment).

`utils/get-item` 可以被导出在 Layouts(布局), Pages(页面) 或 其他组件中使用, 来控制何时获取项目数据.

> **请注意:**
>
> - 我们建议使用 `server-only` package(包) 来确保客户端不会使用服务端的数据获取功能.
