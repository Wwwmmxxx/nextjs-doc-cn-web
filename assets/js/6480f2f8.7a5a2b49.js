"use strict";(self.webpackChunknextjs_cn_doc=self.webpackChunknextjs_cn_doc||[]).push([[62],{6780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=t(5893),s=t(1151);const o={title:"\u5e76\u884c\u8def\u7531",description:"https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"},i=void 0,a={id:"building-your-application/routing/parallel-routes",title:"\u5e76\u884c\u8def\u7531",description:"https://nextjs.org/docs/app/building-your-application/routing/parallel-routes",source:"@site/docs/02-building-your-application/01-routing/08-parallel-routes.md",sourceDirName:"02-building-your-application/01-routing",slug:"/building-your-application/routing/parallel-routes",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/parallel-routes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-building-your-application/01-routing/08-parallel-routes.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u5e76\u884c\u8def\u7531",description:"https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"},sidebar:"appRouter",previous:{title:"\u9519\u8bef\u5904\u7406\u5668",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/error-handling"},next:{title:"\u62e6\u622a\u8def\u7531",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/intercepting-routes"}},r={},c=[{value:"Convention (\u6587\u4ef6\u540d\u534f\u5b9a)",id:"convention-\u6587\u4ef6\u540d\u534f\u5b9a",level:2},{value:"Unmatched Routes (\u4e0d\u5339\u914d\u7684\u8def\u7531)",id:"unmatched-routes-\u4e0d\u5339\u914d\u7684\u8def\u7531",level:2},{value:"<code>default.js</code>",id:"defaultjs",level:3},{value:"Navigation (\u5bfc\u822a)",id:"navigation-\u5bfc\u822a",level:4},{value:"Reload (\u91cd\u65b0\u52a0\u8f7d)",id:"reload-\u91cd\u65b0\u52a0\u8f7d",level:4},{value:"<code>useSelectedLayoutSegment(s)</code>",id:"useselectedlayoutsegments",level:2},{value:"Examples (\u793a\u4f8b)",id:"examples-\u793a\u4f8b",level:2},{value:"Modals (\u62df\u6001\u7a97\u53e3)",id:"modals-\u62df\u6001\u7a97\u53e3",level:3},{value:"Dismissing a Modal (\u89e3\u9664\u62df\u6001\u7a97\u53e3)",id:"dismissing-a-modal-\u89e3\u9664\u62df\u6001\u7a97\u53e3",level:4},{value:"Conditional Routes (\u89c6\u60c5\u51b5\u800c\u5b9a\u7684\u8def\u7531)",id:"conditional-routes-\u89c6\u60c5\u51b5\u800c\u5b9a\u7684\u8def\u7531",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Parallel Routing(\u5e76\u884c\u8def\u7531) \u5141\u8bb8\u4f60\u540c\u65f6\u6216\u6709\u6761\u4ef6\u7684\u5728\u540c\u4e00\u4e2a layout(\u5e03\u5c40) \u4e2d\u5c55\u793a\u4e00\u4e2a\u6216\u591a\u4e2a page(\u9875\u9762). \u5bf9\u4e8e app \u5185\u9ad8\u5ea6\u52a8\u6001\u7684\u90e8\u5206, \u50cf dashboards(\u6570\u636e\u8868), \u793e\u4ea4\u7f51\u7ad9\u4e0a\u7684\u4fe1\u606f, Parallel Routing(\u5e76\u884c\u8def\u7531) \u53ef\u4ee5\u5b9e\u73b0\u590d\u6742\u7684\u8def\u7531\u6a21\u5f0f."}),"\n",(0,l.jsx)(n.p,{children:"\u6bd4\u5982, \u4f60\u53ef\u4ee5\u540c\u65f6\u5c55\u793a\u6e32\u67d3\u5c0f\u7ec4\u548c\u5206\u6790\u9875\u9762."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm",alt:"parallel_routes_1"})}),"\n",(0,l.jsx)(n.p,{children:"Parallel Routing(\u5e76\u884c\u8def\u7531) \u5141\u8bb8\u4f60\u4e3a\u4e0d\u540c\u7684\u8def\u7531\u5b9a\u4e49\u5404\u81ea\u7684 error(\u9519\u8bef UI) \u548c loading states(\u52a0\u8f7d\u72b6\u6001), \u56e0\u4e3a\u5b83\u4eec\u662f\u88ab\u5206\u5f00\u4f20\u8f93\u7684."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-cinematic-universe.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm",alt:"parallel_routes_2"})}),"\n",(0,l.jsx)(n.p,{children:"Parallel Routing(\u5e76\u884c\u8def\u7531) \u5141\u8bb8\u4f60\u57fa\u4e8e\u4e00\u4e2a\u660e\u786e\u6761\u4ef6\u7684\u60c5\u51b5\u4e0b, \u6e32\u67d3\u4e00\u4e2a slot(\u63d2\u69fd), \u50cf\u6743\u9650\u72b6\u6001. \u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a URL \u4e0a\u4f7f\u7528\u5b8c\u5168\u4e0d\u540c\u7684\u7684\u4ee3\u7801."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fconditional-routes-ui.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm",alt:"parallel_routes_3"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"convention-\u6587\u4ef6\u540d\u534f\u5b9a",children:"Convention (\u6587\u4ef6\u540d\u534f\u5b9a)"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528 slot(\u63d2\u69fd) \u6765\u521b\u5efa Parallel Routing(\u5e76\u884c\u8def\u7531). Slot(\u63d2\u69fd) \u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"@folder"})," \u4f5c\u4e3a\u6587\u4ef6\u540d\u534f\u5b9a, \u5b83\u4f1a\u88ab\u4f5c\u4e3a\u5c5e\u6027\u4f20\u9012\u7ed9\u540c\u4e00\u5c42\u7684 layout(\u5e03\u5c40)."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Slots(\u63d2\u69fd) \u4e0d\u662f\u8def\u7531\u6bb5\u7684\u4e00\u90e8\u5206, \u5b83\u4e0d\u4f1a\u5f71\u54cd URL \u7ed3\u6784.\u6587\u4ef6\u8def\u5f84 ",(0,l.jsx)(n.code,{children:"/@team/members"})," \u5c06\u4f1a\u88ab\u4f5c\u4e3a ",(0,l.jsx)(n.code,{children:"/members"})," \u8fdb\u884c\u8bbf\u95ee."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6bd4\u5982, \u5728\u4e0b\u8ff0\u7684\u6587\u4ef6\u7ed3\u6784\u4e2d\u5b9a\u4e49\u4e86\u4e24\u4e2a\u63d2\u69fd: ",(0,l.jsx)(n.code,{children:"@analytics"})," \u548c ",(0,l.jsx)(n.code,{children:"@team"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-file-system.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm",alt:"convention_1"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0a\u5c42\u7684\u6587\u4ef6\u5939\u7ed3\u6784\u8868\u793a ",(0,l.jsx)(n.code,{children:"app/layout.js"})," \u5185\u7684\u7ec4\u4ef6\u73b0\u5728\u5c06\u4f1a\u63a5\u6536 ",(0,l.jsx)(n.code,{children:"@analytics"})," \u548c ",(0,l.jsx)(n.code,{children:"@team"})," \u63d2\u69fd\u5c5e\u6027, \u5e76\u4e14\u53ef\u4ee5\u548c ",(0,l.jsx)(n.code,{children:"children"})," \u5c5e\u6027\u88ab\u4e00\u8d77\u5e76\u884c\u6e32\u67d3."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="app/layout.tsx"',children:"export default function Layout(props: {\n  children: React.ReactNode;\n  analytics: React.ReactNode;\n  team: React.ReactNode;\n}) {\n  return (\n    <>\n      {props.children}\n      {props.team}\n      {props.analytics}\n    </>\n  );\n}\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),": ",(0,l.jsx)(n.code,{children:"children"})," \u5c5e\u6027\u662f\u9690\u5f0f\u7684\u63d2\u69fd, \u4e0d\u9700\u8981\u5728\u6587\u4ef6\u5939\u4e2d\u88ab\u6307\u5b9a. \u8fd9\u8868\u793a, ",(0,l.jsx)(n.code,{children:"app/page.js"})," \u4e0e ",(0,l.jsx)(n.code,{children:"app/@children/page.js"})," \u662f\u76f8\u540c\u7684."]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"unmatched-routes-\u4e0d\u5339\u914d\u7684\u8def\u7531",children:"Unmatched Routes (\u4e0d\u5339\u914d\u7684\u8def\u7531)"}),"\n",(0,l.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u69fd\u4e2d\u5448\u73b0\u7684\u5185\u5bb9\u662f\u4e0e\u5f53\u524d URL \u76f8\u5339\u914d\u7684."}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u63d2\u69fd\u4e0d\u5339\u914d, Next.js \u4f1a\u6839\u636e\u8def\u7531\u6280\u672f\u548c\u6587\u4ef6\u5939\u7ed3\u6784\u6e32\u67d3\u4e0d\u540c\u7684\u5185\u5bb9."}),"\n",(0,l.jsx)(n.h3,{id:"defaultjs",children:(0,l.jsx)(n.code,{children:"default.js"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"default.js"})," \u6587\u4ef6\u4f5c\u4e3a\u5907\u7528\u7ec4\u4ef6\u6765\u9632\u6b62\u5f53 Next.js \u4e0d\u80fd\u901a\u8fc7\u5f53\u524d URL \u6062\u590d\u4e00\u4e2a\u63d2\u69fd\u7684\u6fc0\u6d3b\u72b6\u6001."]}),"\n",(0,l.jsxs)(n.p,{children:["\u770b\u4e0b\u8ff0\u7684\u6587\u4ef6\u7ed3\u6784. ",(0,l.jsx)(n.code,{children:"@team"})," \u63d2\u69fd\u6709\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"settings"})," \u76ee\u5f55, \u4f46\u662f ",(0,l.jsx)(n.code,{children:"@analytics"})," \u6ca1\u6709."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-unmatched-routes.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm",alt:"default.js_1"})}),"\n",(0,l.jsx)(n.h4,{id:"navigation-\u5bfc\u822a",children:"Navigation (\u5bfc\u822a)"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u5bfc\u822a\u65f6, Next.js \u4f1a\u6e32\u67d3\u63d2\u69fd\u4e4b\u524d\u7684\u6d3b\u52a8\u72b6\u6001, \u5373\u4f7f\u5b83\u4e0e\u5f53\u524d URL \u4e0d\u5339\u914d."}),"\n",(0,l.jsx)(n.h4,{id:"reload-\u91cd\u65b0\u52a0\u8f7d",children:"Reload (\u91cd\u65b0\u52a0\u8f7d)"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u91cd\u65b0\u52a0\u8f7d\u65f6, Next.js \u5c06\u4f1a\u9996\u5148\u5c1d\u8bd5\u6e32\u67d3\u4e0d\u5339\u914d\u7684\u63d2\u69fd\u7684 ",(0,l.jsx)(n.code,{children:"default.js"})," \u6587\u4ef6. \u5982\u679c\u884c\u4e0d\u901a, \u5c06\u4f1a\u4ea7\u751f 404 \u9519\u8bef."]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e0d\u5339\u914d\u8def\u7531\u7684 404 \u9519\u8bef\u5c06\u786e\u4fdd\u4e0d\u4f1a\u610f\u5916\u5730\u6e32\u67d3(\u4e0d\u5e94\u8be5\u88ab\u540c\u65f6\u6e32\u67d3\u7684)\u8def\u7531."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"useselectedlayoutsegments",children:(0,l.jsx)(n.code,{children:"useSelectedLayoutSegment(s)"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment",children:(0,l.jsx)(n.code,{children:"useSelectedLayoutSegment"})})," \u548c ",(0,l.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments",children:(0,l.jsx)(n.code,{children:"useSelectedLayoutSegments"})})," \u63a5\u6536\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"parallelRoutesKey"})," \u4f5c\u4e3a\u53c2\u6570, \u901a\u8fc7\u5b83\u53ef\u4ee5\u8bfb\u53d6\u63d2\u69fd\u5185\u7684\u8def\u7531\u6bb5."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="app/layout.tsx"',children:'"use client";\n\nimport { useSelectedLayoutSegment } from "next/navigation";\n\nexport default async function Layout(props: {\n  //...\n  auth: React.ReactNode;\n}) {\n  const loginSegments = useSelectedLayoutSegment("auth");\n  // ...\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5f53\u4e00\u4e2a\u7528\u6237\u5bfc\u822a\u5230 ",(0,l.jsx)(n.code,{children:"@auth/login"}),", \u6216 URL \u680f\u5185\u662f ",(0,l.jsx)(n.code,{children:"/login"}),", ",(0,l.jsx)(n.code,{children:"loginSegments"})," \u5c06\u4f1a\u662f ",(0,l.jsx)(n.code,{children:"login"}),"."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"examples-\u793a\u4f8b",children:"Examples (\u793a\u4f8b)"}),"\n",(0,l.jsx)(n.h3,{id:"modals-\u62df\u6001\u7a97\u53e3",children:"Modals (\u62df\u6001\u7a97\u53e3)"}),"\n",(0,l.jsx)(n.p,{children:"\u5e76\u884c\u8def\u7531\u53ef\u4ee5\u88ab\u7528\u6765\u6e32\u67d3 Modals(\u62df\u6001\u7a97\u53e3)."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-auth-modal.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm",alt:"modals_1"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"@auth"})," \u63d2\u69fd\u4f1a\u6e32\u67d3\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"<Modal>"})," \u7ec4\u4ef6, \u53ef\u4ee5\u901a\u8fc7\u5bfc\u822a\u5230\u5339\u914d\u7684\u8def\u7531(\u4f8b\u5982 ",(0,l.jsx)(n.code,{children:"/login"}),")\u6765\u663e\u793a."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="app/layout.tsx"',children:"export default async function Layout(props: {\n  // ...\n  auth: React.ReactNode;\n}) {\n  return (\n    <>\n      {/* ... */}\n      {props.auth}\n    </>\n  );\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="app/@auth/login/page.tsx"',children:'import { Modal } from "components/modal";\n\nexport default function Login() {\n  return (\n    <Modal>\n      <h1>Login</h1>\n      {/* ... */}\n    </Modal>\n  );\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u786e\u4fdd\u5728 Modal(\u62df\u6001\u7a97\u53e3) \u672a\u6fc0\u6d3b\u65f6\u4e0d\u4f1a\u6e32\u67d3\u5176\u4e2d\u5185\u5bb9, \u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"default.js"})," \u6587\u4ef6\u5e76\u8fd4\u56de ",(0,l.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="app/@auth/default.tsx"',children:"export default function Default() {\n  return null;\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"dismissing-a-modal-\u89e3\u9664\u62df\u6001\u7a97\u53e3",children:"Dismissing a Modal (\u89e3\u9664\u62df\u6001\u7a97\u53e3)"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u62df\u6001\u7a97\u53e3\u662f\u901a\u8fc7\u5ba2\u6237\u7aef\u5bfc\u822a(\u5982\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:'<Link href="/login">'}),")\u542f\u52a8\u7684, \u5219\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,l.jsx)(n.code,{children:"router.back()"})," \u6216\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"Link"})," \u7ec4\u4ef6\u6765\u53d6\u6d88\u62df\u6001\u7a97\u53e3."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="app/@auth/login/page.tsx"',children:'"use client";\nimport { useRouter } from "next/navigation";\nimport { Modal } from "components/modal";\n\nexport default async function Login() {\n  const router = useRouter();\n  return (\n    <Modal>\n      <span onClick={() => router.back()}>Close modal</span>\n      <h1>Login</h1>\n      ...\n    </Modal>\n  );\n}\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5728 ",(0,l.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes",children:"Intercepting Routes(\u62e6\u622a\u8def\u7ebf)"})," \u4e2d\u67e5\u770b\u62df\u6001\u7a97\u53e3\u7684\u66f4\u591a\u4fe1\u606f."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u60f3\u8981\u5bfc\u822a\u5230\u5176\u4ed6\u5730\u65b9\u5e76\u4e14\u53d6\u6d88\u62df\u6001\u7a97\u53e3, \u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a catch-all(\u6355\u6349\u6240\u6709\u7684) \u8def\u7531."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fparallel-routes-catchall.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm",alt:"dismissing_a_modal"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="app/@auth/[...catchAll]/page.tsx"',children:"export default function CatchAll() {\n  return null;\n}\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6355\u6349\u6240\u6709\u7684\u8def\u7531\u4f18\u5148\u4e8e ",(0,l.jsx)(n.code,{children:"default.js"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"conditional-routes-\u89c6\u60c5\u51b5\u800c\u5b9a\u7684\u8def\u7531",children:"Conditional Routes (\u89c6\u60c5\u51b5\u800c\u5b9a\u7684\u8def\u7531)"}),"\n",(0,l.jsxs)(n.p,{children:["Parallel Routes(\u5e76\u884c\u8def\u7531) \u53ef\u4ee5\u88ab\u7528\u6765\u5b9e\u73b0 Conditional Routing(\u89c6\u60c5\u51b5\u800c\u5b9a\u7684\u8def\u7531). \u6bd4\u5982, \u4f60\u53ef\u4ee5\u4f9d\u8d56\u6743\u9650\u72b6\u6001\u6765\u9009\u62e9\u6e32\u67d3 ",(0,l.jsx)(n.code,{children:"@dashboard"})," \u8fd8\u662f ",(0,l.jsx)(n.code,{children:"@login"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",metastring:'title="app/layout.tsx"',children:'import { getUser } from "@/lib/auth";\n\nexport default function Layout({\n  dashboard,\n  login,\n}: {\n  dashboard: React.ReactNode;\n  login: React.ReactNode;\n}) {\n  const isLoggedIn = getUser();\n  return isLoggedIn ? dashboard : login;\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fconditional-routes-ui.png&w=3840&q=75&dpl=dpl_3h1BESzeFKFcy7pGi2Svm9s7FMVm",alt:"conditional_routes"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var l=t(7294);const s={},o=l.createContext(s);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);