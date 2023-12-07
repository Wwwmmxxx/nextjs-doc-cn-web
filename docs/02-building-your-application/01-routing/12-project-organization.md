---
title: 项目结构和文件位置
description: https://nextjs.org/docs/app/building-your-application/routing/colocation
---

除了 [routing folder and file conventions(路由文件夹和文件名协定)](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions) 外, Next.js 不会对你项目中的文件进行限制.

本页面将会向你展示默认行为和可用于组织管理你的项目的功能.

- [Safe colocation by default(默认安全放置)](https://nextjs.org/docs/app/building-your-application/routing/colocation#safe-colocation-by-default)
- [Project organization features(项目文件管理功能)](https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-features)
- [Project organization strategies(项目文件管理策略)](https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-strategies)

## Safe colocation by default (默认安全放置)

在 `app` 目录内, [nested folder hierarchy(嵌套的文件夹层次结构)](https://nextjs.org/docs/app/building-your-application/routing#route-segments) 定义了路由结构.

每一个文件夹都代表了一个路由段, 也都被映射到了一个相对应的 URL 段.

然而, 即使我们通过文件夹定义了路由结构, 这个文件夹内如果没有 `page.js` 或 `route.js`, 那么该路由段也是无法被公开访问的.

![safe_colocation_by_default_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-not-routable.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

并且, 即使一个路由可以被公开访问了, 也只有 `page.js` 或 `route.js` 内的返回内容会被发送给客户端.

![safe_colocation_by_default_2](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-routable.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

这表示, 项目内的文件可以安全地放置在 `app` 目录中的路由段内, 而不会意外变为可路由的.

![safe_colocation_by_default_3](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-colocation.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

> **请注意:**
>
> - 这与 `pages` 目录不同, `pages` 内的任何文件都会被视为一个路由.
> - 你可以将项目文件放在 `app` 目录中, 但你也可以不这样做, 如果你愿意, 可以将它们[keep them outside the `app` directory(放在 `app` 目录外)](https://nextjs.org/docs/app/building-your-application/routing/colocation#store-project-files-outside-of-app).

---

## Project organization features ( 项目结构功能 )

Next.js 为你通过了多种功能来管理你的项目.

### Private Folders (隐私文件夹)

Private folders(隐私文件夹)通过在文件夹前加入下划线来创建: `_folderName`

这表明, 该文件夹是一个私有的细节实现, 路由系统不应考虑它, 因此该文件夹及其所有子文件夹都不在路由内.

![private_folders_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-private-folders.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

因为 `app` 目录下的文件是 [safely colocated by default(默认安全放置)](https://nextjs.org/docs/app/building-your-application/routing/colocation#safe-colocation-by-default)的, 所以, 可以不使用 private folders(私有文件夹). 然而, 它们可以被用于:

- 从路由逻辑内剥离出 UI 逻辑.
- 在整个项目和 Next.js 生态系统中持续整理内部文件.
- 在代码编辑器中编排和整理文件.
- 避免与未来 Next.js 文件协定产生潜在的命名冲突.

> **请注意:**
>
> - 虽然这不是一个框架协定, 但你也可以考虑使用相同的下划线模式将私人文件夹之外的文件标记为 "私人" 文件.
> - 你可以在文件夹名称前加上 `%5F` (下划线的 URL 编码形式), 创建以下划线开头的 URL 段: `%5FfolderName`.
> - 如果你不想使用 private folders(私有文件夹), 为了避免和 Next.js 内的特殊文件产生冲突, 请了解 [special file convention(特殊文件协定)](https://nextjs.org/docs/getting-started/project-structure#routing-files).

### Route Groups (路由组)

路由组通过在文件夹内使用括号来创建: `(folderName)`

这表示该文件夹是用于结构化的目的, 不应包含在路由的 URL 路径中.

![route_groups_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-route-groups.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

Route Groups(路由组)对以下会有所帮助:

- 以站点的各部分 / 意图 / 工作小组 [Organizing routes into groups(对路由组进行分组)].
- 在同一路由段层级中开启嵌套布局:
  - [Creating multiple nested layouts in the same segments, including multiple root layouts(在同一段中创建不同的嵌套布局, 甚至是多个根布局)](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts)
  - [Adding a layout to a subset of routes in a common segment(为一个共享段的子路由添加一个布局)](https://nextjs.org/docs/app/building-your-application/routing/route-groups#opting-specific-segments-into-a-layout)

### `src` Directory (`src` 目录)

Next.js 支持在可选的 [`src` 目录](https://nextjs.org/docs/app/building-your-application/configuring/src-directory) 中存储应用程序代码(包括 `app`). 这就将应用程序代码与项目配置文件分离开来, 后者大多位于项目根目录中.

![src_directory](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-src-directory.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

### Module Path Aliases (模块化路径别名)

Next.js 支持模块化路径别名, 这使得在深度嵌套的项目文件中读取和维护导入更容易.

```tsx title="app/dashboard/settings/analytics/page.js"
// before
import { Button } from "../../../components/button";

// after
import { Button } from "@/components/button";
```

---

## Project organization Strategies (项目结果策略)

在 Next.js 项目中组织管理自己的文件和文件夹没有 "对 "或 "错 "之分.

下一节列出了常见策略的概述. 最简单的方法就是选择一种适合你和你团队的策略, 并在整个项目中保持一致.

> **请注意:** 在下面的示例中, 我们使用 `components` 和 `lib` 文件夹作为通用的占位符, 它们的命名没有特殊的框架意义, 你的项目可能会使用其他文件夹, 如 `ui`, `utils`, `hooks`, `styles` 等.

### Store project files outside of `app` (在 `app` 外存储项目文件)

这种策略将所有应用程序代码都存储在项目根目录下的共享文件夹中, 而 `app` 目录则纯粹用于路由目的.

![store_project_files_outside_of_app_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-project-root.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

### Store project files in top-level folders inside of `app` (在 `app` 顶层目录内存储项目文件)

该策略将所有应用程序代码存储在 `app` 目录根目录下的共享文件夹中.

![store_project_files_in_top-level_folders_inside_of_app_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-app-root.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

### Split project files by feature or route (通过功能或路由分割项目文件)

这种策略将全局共享的应用程序代码存储在 `app` 根目录中, 并将更具体的应用程序代码分割到使用它们的路由段中.

![split_project_files_by_feature_or_route](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-app-root-split.png&w=1920&q=75&dpl=dpl_FMGsYbamaCihTR7jyf43krGr3wQk)

---

## Next Step (下一步)

- [Defining Routes(定义路由)](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
- [Route Groups(路由组)](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [src Directory(src 目录)](https://nextjs.org/docs/app/building-your-application/configuring/src-directory)
- [Absolute Imports and Module Path Aliases](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases)
