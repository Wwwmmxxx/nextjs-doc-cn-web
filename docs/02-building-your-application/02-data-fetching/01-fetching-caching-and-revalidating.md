---
title: 获取, 缓存和重新验证
description: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
---

Data Fetching(数据获取) 是应用程序的核心部分. 本页面将会带你了解在 Next.js 和 React 中获取数据, 缓存数据和重新验证数据.

你可以使用四种方法来获取数据:

- [在服务器端, 使用 `fetch`](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch)
- [在服务器端, 使用第三方库](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-third-party-libraries)
- [在客户端, 访问 Route Handler(路由处理器)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-route-handlers)
- [在客户端, 使用第三方库](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-route-handlers)

---

## Fetching Data on the Server with `fetch` (通过 `fetch` 在服务器端获取数据)

Next.js 扩展了原生的 [`fetch` Web API](https://developer.mozilla.org/docs/Web/API/Fetch_API), 允许你为服务器端上的每个 `fetch` 请求配置[cache(缓存)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data)和[revalidating(重新验证)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data)行为. React 对 `fetch` 进行了扩展, 以便在渲染 React 组件树时自动[memoize(记忆)](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#fetching-data-where-its-needed) fetch 请求.

你可以在 Server Component(服务端组件)/Route Handlers(路由处理器)/Server Actions(服务端行为)中通过 `async/await` 来使用 `fetch`.

比如:

```ts title="app/page.tsx"
async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main></main>;
}
```

> **请注意:**
>
> - Next.js 在 Server Components(服务端组件)中为你提供了一些获取数据时有用的函数, 比如 [cookie](https://nextjs.org/docs/app/api-reference/functions/cookies) 和 [headers](https://nextjs.org/docs/app/api-reference/functions/headers). 这会导致该路由变为动态渲染(因为它们依赖于请求时间信息).
> - 在 Route Handlers(路由处理器)中, `fetch` 请求不会被自动记忆, 因为 Route Handlers(路由处理器) 不是 React 组件树的一部分.
> - 为了在 Server Components(服务端组件) 中通过 Typescript 使用 `async/await`, 你需要 Typescript `5.1.3` 版本或更高版本, `@types/react` `18.2.8` 或更高版本.

### Caching Data (缓存数据)

缓存获取的数据, 这样每次请求时就无需从数据源重新获取数据.

默认情况下, Next.js 会自动将 `fetch` 的返回值缓存到服务器上的[Data Cache(数据缓存)](https://nextjs.org/docs/app/building-your-application/caching#data-cache)中. 这意味着数据会在构建时或请求时获取并缓存, 并在该数据重新请求时重复使用.

```ts
// 'force-cache' is the default, and can be omitted
fetch("https://...", { cache: "force-cache" });
```

使用 `POST` 方法的 `fetch` 请求也会被自动缓存. 在 Route Handlers(路由处理器) 中在使用 `POST` 方法是不会被缓存的.

> **什么是 Data Cache(数据缓存)?**
>
> 数据缓存是一种持久化的 [HTTP 缓存](https://developer.mozilla.org/docs/Web/HTTP/Caching). 根据平台的不同，缓存可自动扩展并[在多个区域共享](https://vercel.com/docs/infrastructure/data-cache).
>
> 了解有关[数据缓存](https://nextjs.org/docs/app/building-your-application/caching#data-cache)的更多信息.

### Revalidating Data (数据重新验证)

数据重新验证是清理 Data Cache(数据缓存) 并重新获取最新数据的过程. 当您的数据发生变化, 并希望确保显示最新信息时, 这种方法非常有用.

缓存的数据会在下面两种方式下被重新验证:

- **Time-based revalidation(基于时间的重新验证):** 在一定时间后自动重新验证数据. 这对于变化不频繁, 实时性要求不高的数据非常有用.
- **On-demand revalidation(基于需求的重新验证):** 基于事件(像表单提交), 手动重新验证数据. 按需重新验证可以使用基于标签或路径的方法来一次性重新验证一组数据. 当你想确保尽快显示最新数据时(例如, 当无 head 内容管理系统的内容更新时), 这种方法非常有用.

#### Time-based Revalidation (基于时间的重新验证)

为了间隔性的重新验证数据, 你可以在 `fetch` 中使用 `next.revalidate` 选项来设置缓存资源的生命周期(通过秒数设置).

```ts
fetch("https://...", { next: { revalidate: 3600 } });
```

另外, 如果要在一个路由段中重新验证所有的 `fetch` 请求, 你可以使用 [Segment Config Options(段配置选项)](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config).

```ts title="layout.js | page.js"
export const revalidate = 3600; // revalidate at most every hour
```

如果在一个静态渲染的路由中有多个 `fetch` 请求, 且每个请求的重新验证频率不同. 所有请求都将使用最低时间. 对于动态渲染的路由, 每个 `fetch` 请求都将独立重新验证.

了解更多关于 [time-based revalidation(基于时间的重新验证)](https://nextjs.org/docs/app/building-your-application/caching#time-based-revalidation).

#### On-demand Revalidation (基于需求的重新验证)

数据可根据路径( [`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)) 或 [Server Action(服务器行为)](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations) / [Route Handler(路由处理器)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)的缓存标签([`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag))来按需求重新验证.

Next.js 有一个缓存标记系统, 用于使跨路由的 `fetch` 请求无效.

1. 当使用 `fetch` 时, 你使用一个或多个标记来标记缓存条目.
2. 然后, 你可以调用 `revalidateTag` 来重新获取该标记下的所有缓存条目.

比如, 在下面的 `fetch` 请求中增加 `collection` 缓存标记:

```ts title="app/page.tsx"
export default async function Page() {
  const res = await fetch("https://...", { next: { tags: ["collection"] } });
  const data = await res.json();
  // ...
}
```

然后, 你可以通过 Server Action(服务器行为) 中调用 `revalidateTag` 来重新验证这个带有 `collection` 标记的获取调用:

```tsx title="app/actions.ts"
"use server";

import { revalidateTag } from "next/cache";

export default async function action() {
  revalidateTag("collection");
}
```

了解更多关于 [on-demand revalidation(基于需求的重新验证)](https://nextjs.org/docs/app/building-your-application/caching#on-demand-revalidation).

#### Error handling and revalidation (错误处理和重新验证)

如果在尝试重新验证数据时发生错误, 将使用缓存中上次成功生成的数据. 在下一个后续请求中, Next.js 将尝试重新验证数据.

### Opting out of Data Caching (退出数据缓存)

`fetch` 请求在以下情况下不会被缓存:

- 在 `fetch` 请求中增加 `cache:'no-store'`.
- 在 `fetch` 请求中增加 `revalidate: 0` 选项.
- 在 Router Handler(路由处理器) 中使用 `fetch` 请求, 并且是 `POST` 方法.
- 在使用 `headers` 或 `cookie` 后, 发出 `fetch` 请求.
- 使用了 `const dynamic='force-dynamic'` Route Segment Option(段路由配置),
- 默认情况下, 配置了 `fetchCache` Route Segment Option(段路由配置) 将跳过缓存.
- `fetch` 请求中使用了 `Authorization` 或 `Cookie` 头, 然后在组件树中, 它的上层组件有一个未缓存的请求.

#### Individual `fetch` Requests (私有的 `fetch` 请求)

要选择不对单个 `fetch` 请求进行缓存, 可以将 `fetch` 中的 `cache` 选项设置为 `'no-cache'`. 这将在每次请求时动态获取数据.

```ts title="layout.js | page.js"
fetch("https://...", { cache: "no-store" });
```

在 [`fetch` API 文档](https://nextjs.org/docs/app/api-reference/functions/fetch) 中查看更多可用的 `cache` 选项.

#### Multiple `fetch` Requests (多个 `fetch` 请求)

如果路由段(如 Layout(布局), Page(页面))中有多个 `fetch`请求, 你可以使用 [Segment Config Options(段配置选项)](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config) 为所有数据请求配置缓存行为.

然而, 我们还是更建议你为每一个 `fetch` 请求单独配置. 这会给你为缓存行为带来更细力度的控制.

---

## Fetching data on the Server with third-party libraries (在服务器端使用第三方库获取数据)

在使用不支持或不公开支持的 `fetch` 的第三方库时(例如数据库, CMS(内容管理系统), ORM 客户端)的情况下, 你可以使用 [Route Segment Config Option(路由段配置选项)](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config) 和 React 的 `cache` 功能来配置这些请求的缓存和重新验证行为.

数据是否会被缓存取决于该路由段是 [statically or dynamically rendered(静态或动态渲染)](https://nextjs.org/docs/app/building-your-application/rendering/server-components#server-rendering-strategies) 的. 如果路由段是静态的(默认情况下), 请求的输出将作为路由段的一部分被缓存和重新验证. 如果路由段时动态的, 请求的输出将不会被缓存, 数据将在路由段渲染时被每次重新抓取.

你也可以使用目前正处于实验中的 [`unstable_cache` API](https://nextjs.org/docs/app/api-reference/functions/unstable_cache)

### Example (示例)

在如下的实例中:

- `revalidate` 选项被设置为 `3600`, 表示数据会被缓存并每隔一个小时重新验证.
- React `cache` 函数被用来 [memoize(记忆)](https://nextjs.org/docs/app/building-your-application/caching#request-memoization) 数据请求.

```ts title="utils/get-items.ts"
import { cache } from "react";

export const revalidate = 3600; // revalidate the data at most every hour

export const getItem = cache(async (id: string) => {
  const item = await db.item.findUnique({ id });
  return item;
});
```

尽管 `getItem` 函数被调用了两次, 但只有一个查询会被提交到数据库.

```tsx title="app/item/[id]/layout.tsx"
import { getItem } from "@/utils/get-item";

export default async function Layout({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await getItem(id);
  // ...
}
```

```tsx title="app/item/[id]/page.tsx"
import { getItem } from "@/utils/get-item";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await getItem(id);
  // ...
}
```

---

## Fetching Data on the Client with Route Handlers (在客户端访问路由处理器获取数据)

如果需要在客户端组件中获取数据, 可以在客户端中访问 [Route Handlers(路由处理器)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers). 路由处理器在服务端上执行, 并将数据返回给客户端. 这在不想向客户端暴露敏感信息(如 API tokens)时非常有用.

查看 [Route Handlers(路由处理器)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) 获取更多示例.

> **Server Components(服务端组件) 和 Route Handlers(路由处理器)**
>
> 由于服务端组件是在服务器上渲染的, 因此不用在 Server Components(服务端组件) 中调用 Route Handler(路由处理器) 来获取数据. 相反, 你可以直接在服务端组件中获取数据.

---

## Fetching Data on the Client with third-party libraries (在客户端使用第三方库获取数据)

你也可以使用像 [SWR](https://swr.vercel.app/) 或 [React Query](https://tanstack.com/query/latest) 等第三方库在客户端获取数据. 这些库提供了自己的 API, 用于对请求记忆, 对数据进行缓存, 重新验证和更改.

> **未来的 APIs:**
>
> `use` 是一个 React 函数, 用于返回一个接受和处理 Promise 的函数. 目前在客户端组件中不推荐使用 `use` 封装 fetch, 这可能会触发多次重新渲染. 有关 `use` 的更多信息, 请参阅 [React 文档](https://react.dev/reference/react/use).
