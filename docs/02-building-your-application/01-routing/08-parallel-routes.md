---
title: 并行路由
description: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
---

Parallel Routing(并行路由) 允许你同时或有条件的在同一个 layout(布局) 中展示一个或多个 page(页面). 对于 app 内高度动态的部分, 像 dashboards(数据表), 社交网站上的信息, Parallel Routing(并行路由) 可以实现复杂的路由模式.

比如, 你可以同时展示渲染小组和分析页面.

![parallel_routes_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

Parallel Routing(并行路由) 允许你为不同的路由定义各自的 error(错误 UI) 和 loading states(加载状态), 因为它们是被分开传输的.

![parallel_routes_2](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-cinematic-universe.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

Parallel Routing(并行路由) 允许你基于一个明确条件的情况下, 渲染一个 slot(插槽), 像权限状态. 这样就可以在同一个 URL 上使用完全不同的的代码.

![parallel_routes_3](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fconditional-routes-ui.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

---

## Convention (文件名协定)

使用 slot(插槽) 来创建 Parallel Routing(并行路由). Slot(插槽) 使用 `@folder` 作为文件名协定, 它会被作为属性传递给同一层的 layout(布局).

> Slots(插槽) 不是路由段的一部分, 它不会影响 URL 结构.文件路径 `/@team/members` 将会被作为 `/members` 进行访问.

比如, 在下述的文件结构中定义了两个插槽: `@analytics` 和 `@team`.

![convention_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-file-system.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

上层的文件夹结构表示 `app/layout.js` 内的组件现在将会接收 `@analytics` 和 `@team` 插槽属性, 并且可以和 `children` 属性被一起并行渲染.

```tsx title="app/layout.tsx"
export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  );
}
```

> **请注意**: `children` 属性是隐式的插槽, 不需要在文件夹中被指定. 这表示, `app/page.js` 与 `app/@children/page.js` 是相同的.

---

## Unmatched Routes (不匹配的路由)

默认情况下, 槽中呈现的内容是与当前 URL 相匹配的.

如果插槽不匹配, Next.js 会根据路由技术和文件夹结构渲染不同的内容.

### `default.js`

你可以定义一个 `default.js` 文件作为备用组件来防止当 Next.js 不能通过当前 URL 恢复一个插槽的激活状态.

看下述的文件结构. `@team` 插槽有一个 `settings` 目录, 但是 `@analytics` 没有.

![default.js_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-unmatched-routes.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

#### Navigation (导航)

在导航时, Next.js 会渲染插槽之前的活动状态, 即使它与当前 URL 不匹配.

#### Reload (重新加载)

在重新加载时, Next.js 将会首先尝试渲染不匹配的插槽的 `default.js` 文件. 如果行不通, 将会产生 404 错误.

<!-- TODO: 这个地方是不是有问题? -->

> 不匹配路由的 404 错误将确保不会意外地渲染(不应该被同时渲染的)路由.

---

## `useSelectedLayoutSegment(s)`

[`useSelectedLayoutSegment`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment) 和 [`useSelectedLayoutSegments`](https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments) 接收一个 `parallelRoutesKey` 作为参数, 通过它可以读取插槽内的路由段.

```tsx title="app/layout.tsx"
"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export default async function Layout(props: {
  //...
  auth: React.ReactNode;
}) {
  const loginSegments = useSelectedLayoutSegment("auth");
  // ...
}
```

当一个用户导航到 `@auth/login`, 或 URL 栏内是 `/login`, `loginSegments` 将会是 `login`.

---

## Examples (示例)

### Modals (拟态窗口)

并行路由可以被用来渲染 Modals(拟态窗口).

![modals_1](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-auth-modal.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

`@auth` 插槽会渲染一个 `<Modal>` 组件, 可以通过导航到匹配的路由(例如 `/login`)来显示.

```tsx title="app/layout.tsx"
export default async function Layout(props: {
  // ...
  auth: React.ReactNode;
}) {
  return (
    <>
      {/* ... */}
      {props.auth}
    </>
  );
}
```

```tsx title="app/@auth/login/page.tsx"
import { Modal } from "components/modal";

export default function Login() {
  return (
    <Modal>
      <h1>Login</h1>
      {/* ... */}
    </Modal>
  );
}
```

为确保在 Modal(拟态窗口) 未激活时不会渲染其中内容, 你可以创建一个 `default.js` 文件并返回 `null`.

```tsx title="app/@auth/default.tsx"
export default function Default() {
  return null;
}
```

#### Dismissing a Modal (解除拟态窗口)

如果拟态窗口是通过客户端导航(如使用 `<Link href="/login">`)启动的, 则可以通过调用 `router.back()` 或使用 `Link` 组件来取消拟态窗口.

```tsx title="app/@auth/login/page.tsx"
"use client";
import { useRouter } from "next/navigation";
import { Modal } from "components/modal";

export default async function Login() {
  const router = useRouter();
  return (
    <Modal>
      <span onClick={() => router.back()}>Close modal</span>
      <h1>Login</h1>
      ...
    </Modal>
  );
}
```

> 在 [Intercepting Routes(拦截路线)](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes) 中查看拟态窗口的更多信息.

如果你想要导航到其他地方并且取消拟态窗口, 你可以使用一个 catch-all(捕捉所有的) 路由.

![dismissing_a_modal](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-catchall.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)

```tsx title="app/@auth/[...catchAll]/page.tsx"
export default function CatchAll() {
  return null;
}
```

<!-- TODO: 这是什么意思? -->

> 捕捉所有的路由优先于 `default.js`.

### Conditional Routes (视情况而定的路由)

Parallel Routes(并行路由) 可以被用来实现 Conditional Routing(视情况而定的路由). 比如, 你可以依赖权限状态来选择渲染 `@dashboard` 还是 `@login`.

```tsx title="app/layout.tsx"
import { getUser } from "@/lib/auth";

export default function Layout({
  dashboard,
  login,
}: {
  dashboard: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = getUser();
  return isLoggedIn ? dashboard : login;
}
```

![conditional_routes](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fconditional-routes-ui.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm)
