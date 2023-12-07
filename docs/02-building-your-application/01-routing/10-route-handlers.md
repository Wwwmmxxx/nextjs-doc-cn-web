---
title: 路由处理器
description: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
---

Route Handlers(路由处理器) 允许你使用 [Web Request](https://developer.mozilla.org/docs/Web/API/Request) 和 [Web Response](https://developer.mozilla.org/docs/Web/API/Response) API 为一个特定的路由创建自定义请求处理程序.

![route_handlers_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-special-file.png&w=1920&q=75&dpl=dpl_6jgZkA1aPHMzMLgPhXqA9RmLmMXZ)

> **请注意:** Route Handlers(路由处理器) 只能在 `app` 目录内允许被使用. 它和 `pages` 目录内的 [API Routes(API 路由)](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) 是同一个东西, 所以你不需要同时使用 API Routes(API 路由) 和 Route Handler(路由处理器).

---

## Convention (文件名协定)

通过在 `app` 目录内定义 [`route.js|ts`](https://nextjs.org/docs/app/api-reference/file-conventions/route) 文件来使用 Route Handlers(路由处理器).

```ts title="app/api/route.ts"
export async function GET(request: Request) {}
```

Route Handlers(路由处理器) 可以在 `app` 目录下嵌套, 与 `page.js` 和 `layout.js` 相似. 但 `route.js` 文件不能存在于与 `page.js` 同一路由段层级的文件夹中.

### Supported HTTP Methods (支持的 HTTP 方法)

以下 [HTTP methods(Http 方法)](https://developer.mozilla.org/docs/Web/HTTP/Methods) 是被支持的: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`. 如果被一个不支持的方法调用, Next.js 会返回 `405 Method Not Allowed` 返回.

### Extended `NextRequest` and `NextResponse` APIs (被扩展的 `NextRequest` 和 `NextResponse` API)

除了支持原生的 [Request](https://developer.mozilla.org/docs/Web/API/Request) 和 [Response](https://developer.mozilla.org/docs/Web/API/Response) 外, Next.js 还扩展了它们, 变为了 [NextRequest](https://nextjs.org/docs/app/api-reference/functions/next-request) 和 [NextResponse](https://nextjs.org/docs/app/api-reference/functions/next-response), 以提高对高级用例的便利使用.

---

## Behavior (行为)

### Caching (缓存)

默认情况下, 使用 `GET` 方法请求 Route Handlers(路由处理器) 时, 其 `Response` 对象会被缓存.

```ts title="app/items/route.ts"
export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
```

> **Typescript 警告:** `Response.json()` 从 Typescript 5.2 后开始才能使用. 如果你使用了更低版本的 Typescript, 你可以使用 [`NextResponse.json()`](https://nextjs.org/docs/app/api-reference/functions/next-response#json) 来定义响应.

### Opting out of caching (退出缓存)

你可以使用以下方式来不使用缓存:

- 在 `GET` 方法内使用 `Request` 对象.
- 使用其他 HTTP 方法.
- 使用 [Dynamic Functions(动态函数)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-functions), 像 `cookies` 和 `headers`.
- 通过[Segment Config Options(段配置选项)](https://nextjs.org/docs/app/building-your-application/routing/route-handlers#segment-config-options) 手动指定动态模式.

比如:

```ts title="app/products/api/route.ts"
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const product = await res.json();

  return Response.json({ product });
}
```

又比如, `POST` 方法会导致该路由处理器被认为是动态的.

```ts title="app/items/route.ts"
export async function POST() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  });

  const data = await res.json();

  return Response.json(data);
}
```

> **请注意:** 与 API Routes(API 路由) 一样, 路由处理器也可用于处理表单提交等情况. 我们正在开发一种与 React 深度结合的, 用于[handling forms and mutations(处理表单和突变)](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)的新抽象.

### Route Resolution (路由解析)

你可以认为一个 `route(路由)` 是最底层级的原始路由.

- 它们不会像 `page` 一样参与到 layouts(布局) 和 client-side navigations(客户端导航).
- 在 `page.js` 的目录下不能有 `route.js`.

| Page(页面)           | Route(路由)        | Result(结果) |
| -------------------- | ------------------ | ------------ |
| `app/page.js`        | `app/route.js`     | Conflict     |
| `app/page.js`        | `app/api/route.js` | Valid        |
| `app/[user]/page.js` | `app/api/route.js` | Valid        |

任一 `route.js` 或 `page.js` 文件都会接管该路由的所有 HTTP 动作.

```ts title="app/page.js"
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}

// ❌ Conflict
// `app/route.js`
export async function POST(request) {}
```

---

## Examples (示例)

以下示例将会向你展示怎么将 Route Handlers(路由处理器) 与其他 Next.js API 和 Next.js 功能相结合.

### Revalidating Cached Data (重新验证缓存数据)

你可以使用 [`next.revalidate`](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data) 选项来 [revalidate cached data (重新验证缓存数据)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data):

```ts title="app/items/route.ts"
export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });
  const data = await res.json();

  return Response.json(data);
}
```

备选的, 你可以使用 [`revalidate` Segment config option(段控制选项)](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate):

```ts
export const revalidate = 60;
```

### Dynamic Functions (动态函数)

在 Next.js 中, Route Handlers(路由处理器)可以与动态函数一起使用, 像 [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies) 和 [`headers`](https://nextjs.org/docs/app/api-reference/functions/headers).

#### Cookies

你可以从 `next/headers` 包中使用 [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies) 读取 cookies. 该服务器函数可以在 Route Handlers(路由处理器) 中直接被调用, 也可以嵌套在其他函数中.

该 `cookies` 实例是只读的. 如果要设置 cookies, 你可以在返回中, 创建一个新的 `Response` 并使用 [`Set-Cookie`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie) 头.

```ts title="app/api/route.ts"
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token.value}` },
  });
}
```

备选的, 你也可以在底层 Web API 的基础上使用抽象方法来读取 cookie([`NextRequest`](https://nextjs.org/docs/app/api-reference/functions/next-request)):

```ts title="app/api/route.ts"
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token");
}
```

#### Headers

你可以从 `next/headers` 包的 [`headers`](https://nextjs.org/docs/app/api-reference/functions/headers) 方法中读取 headers. 该服务器函数可以在 Route Handlers(路由处理器) 中直接被调用, 也可以嵌套在其他函数中.

该 `headers` 实例是只读的. 如果要设置 headers, 你可以在 `Response` 中返回一个新的 `headers`.

```ts title="app/api/route.ts"
import { headers } from "next/headers";

export async function GET(request: Request) {
  const headersList = headers();
  const referer = headersList.get("referer");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { referer: referer },
  });
}
```

备选的, 你也可以在底层 Web API 的基础上使用抽象方法来读取 headers([`NextRequest`](https://nextjs.org/docs/app/api-reference/functions/next-request)):

```ts title="app/api/route.ts"
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
}
```

### Redirects (重定向)

```ts title="app/api/route.ts"
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  redirect("https://nextjs.org/");
}
```

### Dynamic Routes Segments (动态路由段)

> 我们建议您阅读完 [Defining Routes(定义路由)](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) 后再继续阅读.

Route Handlers(路由处理器) 可以使用 [Dynamic Segments(动态段)](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) 来根据动态的数据创建请求处理器.

```ts title="app/items/[slug]/route.ts"
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'a', 'b', or 'c'
}
```

| Route(路由)                   | Example URL(URL 实例) | params(参数) |
| ----------------------------- | --------------------- | ------------ |
| `app/items/\[slug\]/route.js` | `/items/a`            | `{slug:'a'}` |
| `app/items/\[slug\]/route.js` | `/items/b`            | `{slug:'b'}` |
| `app/items/\[slug\]/route.js` | `/items/c`            | `{slug:'c'}` |

### URL Query Params (URL Query 参数)

被发送到 Route Handler(路由处理器)的请求对象是一个 `NextRequest` 实例, 它有一些[额外的便捷方法](https://nextjs.org/docs/app/api-reference/functions/next-request#nexturl), 比如更简单的处理 query 参数.

```ts title="app/api/search/route.ts"
import { type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  // query is "hello" for /api/search?query=hello
}
```

### Streaming(流)

Streaming(流) 经常被拿来与 Large Language Model(LLMs, 大语言模型)一起使用, 像 OpenAI, 用 AI 来自动生成内容. 了解关于 [AI SDK](https://sdk.vercel.ai/docs) 的更多知识.

```ts title="app/api/chat/route.ts"
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(apiConfig);

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messages,
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
```

这些抽象使用 Web API 来创建 Streaming(流). 你也可以直接使用底层 Web API.

```ts title="app/api/route.ts"
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const encoder = new TextEncoder();

async function* makeIterator() {
  yield encoder.encode("<p>One</p>");
  await sleep(200);
  yield encoder.encode("<p>Two</p>");
  await sleep(200);
  yield encoder.encode("<p>Three</p>");
}

export async function GET() {
  const iterator = makeIterator();
  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
```

### Request Body (请求体)

你可以使用标准的 Web API 方法来读取 `Request` body (请求体).

```ts title="app/items/route.ts"
export async function POST(request: Request) {
  const res = await request.json();
  return Response.json({ res });
}
```

### Request Body FormData (请求体中的 FormData)

你可以通过 `request.formData()` 方法来读取 `FormData`:

```ts title="app/items/route.ts"
export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  return Response.json({ name, email });
}
```

由于 `formData` 数据都是字符串, 你可能需要使用 [`zod-form-data`](https://www.npmjs.com/zod-form-data) 来验证请求, 并以你喜欢的格式(如数字)获取数据.

### CORS (跨域)

你可以使用标准 Web API 方法来在 `Response` 上设置 CORS headers.

```ts title="app/api/route.ts"
export async function GET(request: Request) {
  return new Response("Hello, Next.js!", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
```

### Edge and Node.js Runtimes (Edge 和 Node.js 运行环境)

<!-- TODO: general-purpose statically regenerated 是什么? -->

Route Handlers(路由处理器) 有同构的 Web API, 所以同时支持 Edge 和 Node.js 环境, 包括支持 Streaming(流). 由于 Route Handler(路由处理器) 使用与页面和布局相同的[route segment configuration(路由段配置)](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config), 因此它支持人们期待已久的功能, 如通用 [general-purpose statically regenerated(通用目的的静态再生)](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data) Route Handler(路由处理器).

你可以通过指定 `runtime` 段配置选项来指定环境:

```ts
export const runtime = "edge"; // 'nodejs' is the default
```

### Non-UI Response (非 UI 相关的返回)

你可以使用 Route Handlers(路由处理器) 来返回一个没有 UI 的内容. 请注意, Next.js 内部支持了[`sitemap.xml`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generate-a-sitemap), [`robots.tsx`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file), [`app icons`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx) 和 [open graph images](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).

```ts title="app/rss.xml/route.ts"
export async function GET() {
  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
 
<channel>
  <title>Next.js Documentation</title>
  <link>https://nextjs.org/docs</link>
  <description>The React Framework for the Web</description>
</channel>
 
</rss>`);
}
```

### Segment Config Options (段配置选项)

Route Handlers(路由处理器) 与 pages(页面) 和 layouts(布局) 使用相同的 [route segment configuration(路由段配置)](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config).

```ts title="app/items/route.ts"
export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
```

获取更多细节, 请查看 [API reference](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config).

## API Reference(API 文档)

- [route.js](https://nextjs.org/docs/app/api-reference/file-conventions/route)
