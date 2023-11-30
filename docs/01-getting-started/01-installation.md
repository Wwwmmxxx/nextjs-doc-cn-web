---
title: 安装
description: https://nextjs.org/docs/getting-started/installation
---

系统环境需求:

- [Node.js 18.17](https://nodejs.org/en) or later.
- 支持 macOS, Windows(包含 WSL), Linux

## 自动安装

建议使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app) 创建 Next.js App, 它会为你自动构建所有工具. 为了创建项目, 你需要执行:

```bash title="Terminal"
npx create-next-app@latest
```

在安装的过程中, 你会看到下列提示:

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias? No / Yes
What import alias would you like configured? @/*
```

提示结束后, `create-next-app` 会根据刚才的选项创建对应项目名称的文件夹和依赖项.

> 请注意:
>
> - Nextjs 默认使用 [Typescript](https://github.com/Wwwmmxxx/nextjs13-document-cn/blob/main/2.%20Building%20Your%20Application/7.%20Configuring.md), [ESLint](https://github.com/Wwwmmxxx/nextjs13-document-cn/blob/main/2.%20Building%20Your%20Application/7.%20Configuring.md), [Tailwind CSS](https://github.com/Wwwmmxxx/nextjs13-document-cn/blob/main/2.%20Building%20Your%20Application/5.%20Styling.md) 配置.
> - 你可以在根目录创建并使用 [`src` 目录](https://nextjs.org/docs/app/building-your-application/configuring/src-directory), 方便区分应用代码和配置文件.

---

## 手动安装

为了能够手动安装 NextJs App, 你需要安装依赖如下:

```bash title="Terminal"
npm install next@latest react@latest react-dom@latest
```

打开 `package.json` 文件, 并追加如下 `scripts`:

```json title="package.json"
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

这些脚本标识应用的不同环境:

- `dev`: 运行 [`next dev`](https://nextjs.org/docs/app/api-reference/next-cli#development), 在开发模式下启动 App.
- `build`: 运行 [`next build`](https://nextjs.org/docs/app/api-reference/next-cli#build), 为生产环境构建应用.
- `start`: 运行 [`next start`](https://nextjs.org/docs/app/api-reference/next-cli#production), 启动生产环境服务器.
- `lint`: 运行 [`next lint`](https://nextjs.org/docs/app/api-reference/next-cli#lint), 启动 NextJs 的 ESLint 配置.

## 创建目录

Next.js 使用文件系统路由, 即文件的目录结构决定了 App 内的路由.

### `app` 目录

对于新开发的 App, 我们建议使用 [App Router](https://nextjs.org/docs/app). 该路由允许你使用 React 的最新功能, 并且该路由是基于 [Page Router](https://nextjs.org/docs/pages) 演变而来的(基于社区反馈).

创建一个 `app/` 文件夹, 在其内增加 `layout.tsx` 和 `page.tsx` 文件. 它们会在用户访问时(`http://127.0.0.1:3000`)被渲染.

![app directory](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fapp-getting-started.png&w=1920&q=75&dpl=dpl_CftdBoMAsScGRzm9xvoMe12PjQyA "app directory")

在 `app/layout.tsx` 中创建 [根布局(root layout)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required), 必须包含 `<html>` 和 `<body>`, 如下:

```typescript title="app/layout.tsx"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

最后, 在 `app.page.tsx` 中增加初始内容, 如下:

```typescript title="app/page.tsx"
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

> **请注意**: 如果你忘记创建 `layout.tsx`, 当你运行 `next dev` 命令时, Next.js 会为你自动创建该文件.

学习更多 [App Router 的使用](https://nextjs.org/docs/app/building-your-application/routing/defining-routes).

### `pages` 目录

如果你更倾向于使用 Pages Router, 而不是 App Router, 那你应该在项目根目录下创建 `pages/` 文件夹.

然后, 在 `pages/` 文件夹内, 增加 `index.tsx` ( 这会是你的根路由, 即 http://127.0.0.1:3000 ), 如下:

```typescript title="index.tsx"
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

接下来, 在 `pages/` 文件夹内, 增加 `_app.tsx` 文件定义全局布局. 学习更多有关于 [custom App file](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)

```typescript title="_app.tsx"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

最后, 在 `pages/` 文件夹内, 增加 `_document.tsx` 文件控制 server 返回的初始 response. 学习更多有关于 [custom Document file](https://nextjs.org/docs/pages/building-your-application/routing/custom-document)

```typescript title="_document.tsx"
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

学习更多有关于 [Pages Router 的使用](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

> **请注意**: 尽管你可以同时使用 App Router 和 Pages Router, App Router 的优先级会高级 Pages Router. 我们建议在项目中仅使用一种 Router 方式, 避免产生混淆.

### `public` 文件夹 (可选的)

在根目录下创建 `public` 文件夹, 用以存储静态资源, 如: 图片, 字体等. `public`目录内的文件可以通过 URL( `/` ) 在代码中被直接使用.

---

## 启动开发服务器

1. 运行 `npm run dev` 启动开发服务器
2. 访问 `http://localhost:3000` 查看应用
3. 编辑 `app/layout.tsx` ( 或 `pages/index.tsx` ) 文件并保存, 在浏览器内查看变化

---

## 下一步

学习 Next.js 项目中的[文件和文件夹](https://nextjs.org/docs/getting-started/project-structure).
