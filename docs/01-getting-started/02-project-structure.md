---
title: 项目结构
description: https://nextjs.org/docs/getting-started/project-structure
---

本页概述了 Next.js 项目的文件和文件夹结构. 内容包括顶层文件和文件夹, 配置文件, `app` 目录和 `pages` 目录的路由约定.

---

## Top-level folders (顶层文件夹)

| 文件夹名 | 简述                   |
| -------- | ---------------------- |
| app      | App router             |
| pages    | Pages Router           |
| public   | 静态资源               |
| src      | 可选的应用程序源文件夹 |

---

## Top-level files (顶层文件)

<!-- TODO: OpenTelemetry and Instrumentation file翻译-->

| 文件名                                                                                                      | 简述                                   |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [next.config.js](https://nextjs.org/docs/app/api-reference/next-config-js)                                  | Next.js 的配置文件                     |
| [package.json](https://nextjs.org/docs/getting-started/installation#manual-installation)                    | 项目依赖和脚本                         |
| [instrument.ts](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation)           | OpenTelemetry and Instrumentation file |
| [middleware.ts](https://nextjs.org/docs/app/building-your-application/routing/middleware)                   | Next.js 请求中间件                     |
| [.env](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)             | 环境变量                               |
| [.env.local](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)       | 本地环境变量                           |
| [.env.production](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)  | 生产环境变量                           |
| [.env.development](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables) | 开发环境变量                           |
| [.eslintrc.json](https://nextjs.org/docs/app/building-your-application/configuring/eslint)                  | ESLint 的配置文件                      |
| .gitignore                                                                                                  | Git 文件, 用以忽略文件和文件夹         |
| next-env.d.ts                                                                                               | Next.js 内的 Typescript 声明文件       |
| tsconfig.json                                                                                               | Typescript 的配置文件                  |
| jsconfig.json                                                                                               | Javascript 的配置文件                  |

---

## `app` Routing Conventions (app Routing 协定)

### Routing Files (路由文件)

| 文件名                                                                                          | 后缀名                    | 简述                               |
| ----------------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------- |
| [layout](https://nextjs.org/docs/app/api-reference/file-conventions/layout)                     | `.js` \| `.jsx` \| `.tsx` | 布局                               |
| [page](https://nextjs.org/docs/app/api-reference/file-conventions/page)                         | `.js` \| `.jsx` \| `.tsx` | 页面                               |
| [loading](https://nextjs.org/docs/app/api-reference/file-conventions/loading)                   | `.js` \| `.jsx` \| `.tsx` | 加载中 UI                          |
| [not-found](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)               | `.js` \| `.jsx` \| `.tsx` | 路由未找到时的 UI                  |
| [error](https://nextjs.org/docs/app/api-reference/file-conventions/error)                       | `.js` \| `.jsx` \| `.tsx` | 路由加载错误时的 UI                |
| [global-error](https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs) | `.js` \| `.jsx` \| `.tsx` | 全局下, 路由加载错误时的 UI        |
| [route](https://nextjs.org/docs/app/api-reference/file-conventions/route)                       | `.js` \| `.jsx`           | API 接口                           |
| [template](https://nextjs.org/docs/app/api-reference/file-conventions/template)                 | `.js` \| `.jsx` \| `.tsx` | 预渲染布局                         |
| [default](https://nextjs.org/docs/app/api-reference/file-conventions/default)                   | `.js` \| `.jsx` \| `.tsx` | 并行路由的 fallback page(应变页面) |

### Nested Routes (嵌套路由)

| 文件名                                                                                       | 简述           |
| -------------------------------------------------------------------------------------------- | -------------- |
| [folder](https://nextjs.org/docs/app/building-your-application/routing#route-segments)       | 路由片段       |
| [folder/folder](https://nextjs.org/docs/app/building-your-application/routing#nested-routes) | 嵌套的路由片段 |

### Dynamic Routes (动态路由)

| 文件名                                                                                                                        | 简述                       |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [\[folder\]](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention)                         | 动态路由片段               |
| [\[...folder\]](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)              | 捕获所有的路由片段         |
| [\[\[...folder\]\]](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments) | 可选的, 捕获所有的路由片段 |

### Routes Groups and Private Folders (路由组和私有文件夹)

| 文件名                                                                                               | 简述                                              |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [(folder)](https://nextjs.org/docs/app/building-your-application/routing/route-groups#convention)    | 不影响路由的路由组                                |
| [\_folder](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders) | 可选的文件夹, 所有的子文件/文件夹都被路由排除在外 |

### Parallel and Intercepted Routes (平行路由和拦截路由)

| 文件名                                                                                                         | 简述             |
| -------------------------------------------------------------------------------------------------------------- | ---------------- |
| [@folder](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#convention)            | 命名插槽         |
| [(.)folder](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention)      | 拦截同一水平路由 |
| [(..)folder](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention)     | 拦截上一级路由   |
| [(..)(..)folder](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention) | 拦截上两级路由   |
| [(...)folder](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention)    | 由根路由开始拦截 |

### Metadata File Convention (元文件协定)

<!-- TODO: Metadata File Convention内三小节翻译补全 -->

#### App Icons (应用图标)

| 文件名                                                                                                                          | 后缀名                                          | 简述                       |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | -------------------------- |
| [favicon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon)                                | `.ico`                                          | Favicon 文件               |
| [icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#icon)                                      | `.ico` \| `.jpg` \| `.jpeg` \| `.png` \| `.svg` | App Icon 文件              |
| [icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx)       | `.js` \| `.ts` \| `.tsx`                        | 生成的 App Icon 文件       |
| [apple-icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#apple-icon)                          | `.jpg` \| `.jpeg` \| `.png`                     | Apple App                  |
| [apple-icon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx) | `.js` \| `.ts` \| `.tsx`                        | 生成的 Apple App Icon 文件 |

#### Open Graph and Twitter Images

| 文件名                                                                                                                                      | 后缀名                                | 简述                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------------------------- |
| [opengraph-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#opengraph-image)                      | `.jpg` \| `.jpeg` \| `.png` \| `.gif` | Open Graph image file      |
| [opengraph-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx) | `.js` \| `.ts` \| `.tsx`              | Generated Open Graph image |
| [twitter-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#twitter-image)                          | `.jpg` \| `.jpeg` \| `.png` \| `.gif` | Twitter 图片文件           |
| [twitter-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx)   | `.js` \| `.ts` \| `.tsx`              | 生成的 Twitter 图片        |

#### SEO

| 文件名                                                                                                      | 后缀名         | 简述                  |
| ----------------------------------------------------------------------------------------------------------- | -------------- | --------------------- |
| [sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#static-sitemapxml)    | `.xml`         | Sitemap file          |
| [sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generate-a-sitemap)   | `.js` \| `.ts` | Generated Sitemap     |
| [robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#static-robotstxt)       | `.txt`         | Robots file           |
| [robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file) | `.js` \| `.ts` | Generated Robots file |

---

## `pages` Routing Convention (pages Router 协定)

### Special Files (特殊文件)

| 文件名                                                                                                                       | 后缀名                   | 简述                     |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| [\_app](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)                                          | `.js` \| `.ts` \| `.tsx` | 自定义的 App 文件        |
| [\_document](https://nextjs.org/docs/pages/building-your-application/routing/custom-document)                                | `.js` \| `.ts` \| `.tsx` | 自定义的 Document 文件   |
| [\_error](https://nextjs.org/docs/pages/building-your-application/routing/custom-error#more-advanced-error-page-customizing) | `.js` \| `.ts` \| `.tsx` | 自定义的, 错误出现时页面 |
| [404](https://nextjs.org/docs/pages/building-your-application/routing/custom-error#404-page)                                 | `.js` \| `.ts` \| `.tsx` | 404 错误出现时的页面     |
| [500](https://nextjs.org/docs/pages/building-your-application/routing/custom-error#500-page)                                 | `.js` \| `.ts` \| `.tsx` | 500 错误出现时的页面     |

### Routes (路由)

#### Folder convention (文件夹方式)

| 文件/文件夹名                                                                                                  | 后缀名                   | 简述     |
| -------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| [index](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes)        | `.js` \| `.ts` \| `.tsx` | 主页     |
| [folder/index](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes) | `.js` \| `.ts` \| `.tsx` | 嵌套页面 |

#### File convention(文件方式)

| 文件/文件夹名                                                                                           | 后缀名                   | 简述     |
| ------------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| [index](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes) | `.js` \| `.ts` \| `.tsx` | 主页     |
| [file](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)               | `.js` \| `.ts` \| `.tsx` | 嵌套页面 |

### Dynamic Routes (动态路由)

#### Folder convention (文件夹方式)

| 文件/文件夹                                                                                                                           | 后缀名                   | 简述                       |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------- |
| [\[folder\]/index](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)                                    | `.js` \| `.ts` \| `.tsx` | 动态路由片段               |
| [\[...folder\]/index](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments)              | `.js` \| `.ts` \| `.tsx` | 捕获所有的路由片段         |
| [\[\[...folder\]\]/index](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments) | `.js` \| `.ts` \| `.tsx` | 可选的, 捕获所有的路由片段 |

#### File convention (文件方式)

| 文件/文件夹                                                                                                                   | 后缀名                   | 简述                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------- |
| [\[file\]](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)                                    | `.js` \| `.ts` \| `.tsx` | 动态路由片段               |
| [\[...file\]](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments)              | `.js` \| `.ts` \| `.tsx` | 捕获所有的路由片段         |
| [\[\[...file\]\]](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments) | `.js` \| `.ts` \| `.tsx` | 可选的, 捕获所有的路由片段 |
