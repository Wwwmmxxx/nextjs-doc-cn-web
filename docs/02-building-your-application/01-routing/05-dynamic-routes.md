---
title: 动态路由
description: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
---

当你不知道确切的路由段名称, 又想用动态数据创建路由时, 你可以使用 Dynamic Segments(动态段), 它会在请求时被填写或在构建时被预渲染.

---

## Convention (文件名协定)

用方括号括起文件夹名称, 即可创建动态段, 如: `[文件夹名称]`. 比如, `[id]` 或 `[slug]`.

Dynamic Segments(动态段) 会被作为 `params` 参数传递给 [`layout`](https://nextjs.org/docs/app/api-reference/file-conventions/layout), [`page`](https://nextjs.org/docs/app/api-reference/file-conventions/page), [`route`](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) 和 [`generateMetadata`](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function) 函数

---

## Example (示例)

比如, 一个 blog 可以包含以下路径 `app/blog/[slug]/page.js`, 其中 `[slug]` 是 blog 文章的 Dynamic Segment(动态段).

```tsx title="app/blog/[slug]/page.tsx"
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
```

| Route(路径)               | Example URL (URL 示例) | `params`(参数) |
| ------------------------- | ---------------------- | -------------- |
| `app/blog/[slug]/page.js` | `/blog/a`              | \{slug:'a'\}   |
| `app/blog/[slug]/page.js` | `/blog/b`              | \{slug:'b'\}   |
| `app/blog/[slug]/page.js` | `/blog/c`              | \{slug:'c'\}   |

查看 [generateStaticParams()](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params) 页面来学习怎么为段生成参数.

> **请注意**: Dynamic Segments(动态段) 与 `pages` 目录内的[Dynamic Routes(动态路由)](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) 是相同的.

---

## Generating Static Params (生成静态参数)

`generateStaticParam` 函数可被用来与 [dynamic route segments(动态路由段)](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes) 相结合, 用来在应用构建时[statically generate(静态生成)](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default)路由, 而不是在每次请求时动态生成.

```tsx title="app/blog/[slug]/page.tsx"
export async function generateStaticParams() {
  const posts = await fetch("https://.../posts").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

`generateStaticParams`函数最主要的好处是, 它能够自动检索数据. 如果在 `generateStaticParams` 函数中时使用了 `fetch` 获取了内容, 那么请求会被 [automatically memoized(自动记录)](https://nextjs.org/docs/app/building-your-application/caching#request-memoization). 这意味着, 在多个使用了 `generateStaticParams`的 Layouts(布局) 和 Pages(页面) 中使用相同参数的 `fetch` 请求只会发出一次, 这会缩短构建时间.

如果你正在从 `pages` 目录迁移, 请参考 [migration guide(迁移指南)](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#dynamic-paths-getstaticpaths).

查看 [`generateStaticParams` server function documentation(generateStaticParams 服务端函数文档)](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)获取更多信息和使用案例.

---

## Catch-all Segments (捕获所有的路由段)

通过在括号 `[...folderName]` 内添加省略号, 可将动态段扩展为捕获所有的路由段.

比如, `app/shop/[...slug]/page.js` 会匹配 `/shop/clothes`, 同样也会匹配 `/shop/clothes/tops`, `shop/clothes/tops/t-shirts` 等.

| Route(路径)                  | Example URL (示例 URL) | params (参数)             |
| ---------------------------- | ---------------------- | ------------------------- |
| `app/shop/[...slug]/page.js` | /shop/a                | \{slug: \['a'\]\}         |
| `app/shop/[...slug]/page.js` | /shop/a/b              | \{slug: \['a','b'\]\}     |
| `app/shop/[...slug]/page.js` | /shop/a/b/c            | \{slug: \['a','b','c'\]\} |

---

## Optional Catch-all Segments (选择性的捕获所有的路由段)

通过将参数置于双方括号内, 可将 Catch-all Segments(捕获所有的段) 变为拥有可选性的路由段：`[[...folderName]]`.

比如, `app/shop/[[...slug]]/page.js` 不仅会匹配 `/shop`, 也会匹配 `/shop/clothes`, `/shop/clothes/tops`, `/shop/clothes/tops/t-shirts`.

**cath-all segments(捕获所有的段)** 和 **optional catch-all segments(选择性的捕获所有的路由段)** 的不同在于, 在 optional catch-all segments(选择性的捕获所有的路由段) 中会匹配 `/shop`.

| Route(路径)                    | Example URL (示例 URL) | params (参数)             |
| ------------------------------ | ---------------------- | ------------------------- |
| `app/shop/[[...slug]]/page.js` | /shop                  | \{\}                      |
| `app/shop/[[...slug]]/page.js` | /shop/a                | \{slug: \['a'\]\}         |
| `app/shop/[[...slug]]/page.js` | /shop/a/b              | \{slug: \['a','b'\]\}     |
| `app/shop/[[...slug]]/page.js` | /shop/a/b/c            | \{slug: \['a','b','c'\]\} |

---

## TypeScript

当你使用 Typescript 时, 你可以为配置好的路由段添加 `params` 类型.

```tsx title="app/blog/[slug]/page.tsx"
export default function Page({ params }: { params: { slug: string } }) {
  return <h1>My Page</h1>;
}
```

| Route(路由)                         | `params`类型定义                       |
| ----------------------------------- | -------------------------------------- |
| `app/blog/[slug]/page.js`           | \{slug: string\}                       |
| `app/shop/[...slug]/page.js`        | \{slug: string\[\]\}                   |
| `app/[categoryId]/[itemId]/page.js` | \{categoryId: string, itemId: string\} |

> **请注意**: 在未来, 这或许可以通过 [Typescript plugin(Typescript 插件)](https://nextjs.org/docs/app/building-your-application/configuring/typescript#typescript-plugin) 自动完成.

# Next Steps

获取更多信息, 我们建议你查看下列章节.

- [Linking and Navigating(链接和导航)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
