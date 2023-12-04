---
title: 路由组
description: https://nextjs.org/docs/app/building-your-application/routing/route-groups
---

在 `app` 目录中, 嵌套文件夹通常被映射为 URL 路径. 不过, 你可以通过将文件夹标记为 Route Group (路由组), 来防止文件夹被包含在 URL 路径中.

这样就可以在不影响 URL 路径结构的情况下, 将路由段和项目文件放进一个逻辑上的分组.

Route groups(路由组)对以下情况会有帮助:

- 按站点, 按意图或按团队, [Organizing routes into groups(将路由分成多个组)](https://nextjs.org/docs/app/building-your-application/routing/route-groups#organize-routes-without-affecting-the-url-path).
- 在同一层级的路由段中允许 [nested layouts(嵌套布局)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)：
  - [Creating multiple nested layouts in the same segment, including multiple root layouts(在同一段内, 创建多个不同的嵌套布局, 甚至是多个不同的根布局)](https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts)
  - [Adding a layout to a subset of routes in a common segment(为共同段中的路由子集添加同一个布局)](https://nextjs.org/docs/app/building-your-application/routing/route-groups#opting-specific-segments-into-a-layout)

---

## Convention (文件名协定)

用括号括起文件夹名称, 即可创建路由组, 如: `(folderName)`

---

## Examples (示例)

### Organize routes without affecting the URL path (在不影响 URL 路径的情况下进行分组路由)

要在不影响 URL 的情况下进行路由分组, 可创建一个组, 将相关路由集中在一起. 括号中的文件夹将在 URL 中被忽略(比如 `(marketing)` 或 `(shop)` ).

![example_1_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-organisation.png&w=1920&q=75&dpl=dpl_A5LhRZU7CiHuU4wcVEzVnuYFVuZS)

即使 `(marketing)` 或 `(shop)` 中的路由共享了同一个 URL 层级, 你也可以在它们各自的文件夹中添加 `layout.js` 来为它们创建不同的布局.

![example_1_2](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-multiple-layouts.png&w=1920&q=75&dpl=dpl_A5LhRZU7CiHuU4wcVEzVnuYFVuZS)

### Opting specific segments into a layout (部分路由使用一个 layout)

要对部分路由指定一个布局, 你可以创建一个新的路由组(如 `shop` ), 并将使用该布局的路由移入该组中( 如 `account` 和 `cart` ). 在组外的路由将不会使用它们的布局(如 `checkout` ).

![example_2_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-opt-in-layouts.png&w=1920&q=75&dpl=dpl_A5LhRZU7CiHuU4wcVEzVnuYFVuZS)

### Creating multiple root layouts (创建多个根布局)

要创建多个 [root layouts(根布局)](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required), 可移除顶层的 `layout.js` 文件, 并在每个路由组内添加一个 `layout.js` 文件. 这对于将应用程序划分为具有完全不同的用户界面或体验非常有用. 每个根布局都需要添加 `<html>` 和 `<body>` 标记。

![example_3_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-multiple-root-layouts.png&w=1920&q=75&dpl=dpl_A5LhRZU7CiHuU4wcVEzVnuYFVuZS)

在上面的例子中, `(marketing)` 和 `(shop)` 都有他们各自的根布局

---

> **请注意**:
>
> - 路由组的命名除了用于组织管理外没有其他特殊意义. 它们不会影响 URL 路径.
> - 路由组内路由生成的 URL 不应与其他路由的 URL 路径相同. 例如, 由于路由组不影响 URL 结构, `(marketing)/about/page.js` 和 `(shop)/about/page.js` 都会被解析为 `/about`, 从而导致错误.
> - 如果你使用了多个根布局, 但在最顶层没有 `layout.js` 文件, 那么你应该在其中任一一个路由组内定义一个主页 `page.js` 页面. 比如: `app/(marketing)/page.js`.
> - 跨多个根布局间的导航将会导致全部页面的加载(与客户端导航相反). 例如, 从 `app/(shop)/layout.js` 的 `/cart` 导航到 `app/(marketing)/layout.js` 的 `/blog` 将导致全页面加载. 这仅适用于多个根布局的情况.
