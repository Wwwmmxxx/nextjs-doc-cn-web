"use strict";(self.webpackChunknextjs_cn_doc=self.webpackChunknextjs_cn_doc||[]).push([[98],{2779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(5893),i=t(1151);const a={title:"\u9875\u9762\u548c\u5e03\u5c40",description:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"},o=void 0,r={id:"building-your-application/routing/pages-and-layouts",title:"\u9875\u9762\u548c\u5e03\u5c40",description:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",source:"@site/docs/02-building-your-application/01-routing/02-pages-and-layouts.md",sourceDirName:"02-building-your-application/01-routing",slug:"/building-your-application/routing/pages-and-layouts",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/pages-and-layouts",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-building-your-application/01-routing/02-pages-and-layouts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u9875\u9762\u548c\u5e03\u5c40",description:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"},sidebar:"appRouter",previous:{title:"\u5b9a\u4e49\u8def\u7531",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/defining-routes"},next:{title:"\u94fe\u63a5\u548c\u5bfc\u822a",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/linking-and-navigating"}},l={},d=[{value:"Pages (\u9875\u9762)",id:"pages-\u9875\u9762",level:2},{value:"Layouts (\u5e03\u5c40)",id:"layouts-\u5e03\u5c40",level:2},{value:"Root Layout (Required) (\u6839\u5e03\u5c40(\u5fc5\u987b\u7684))",id:"root-layout-required-\u6839\u5e03\u5c40\u5fc5\u987b\u7684",level:3},{value:"Nesting Layouts (\u5d4c\u5957\u5e03\u5c40)",id:"nesting-layouts-\u5d4c\u5957\u5e03\u5c40",level:3},{value:"Templates (\u6a21\u677f)",id:"templates-\u6a21\u677f",level:2},{value:"Modifying <code>&lt;head&gt;</code> (\u6539\u53d8 <code>&lt;head&gt;</code>\u5c5e\u6027)",id:"modifying-head-\u6539\u53d8-head\u5c5e\u6027",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u5148\u9605\u8bfb\u5b8c",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing",children:"Routing Fundamentals(\u8def\u7531\u57fa\u7840)"}),"\u518d\u7ee7\u7eed"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Next.js13 \u4e2d\u7684 App \u8def\u7531\u5f15\u5165\u4e00\u79cd\u65b0\u7684\u6587\u4ef6\u534f\u5b9a, \u7528\u4e8e\u521b\u5efa ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages",children:"pages(\u9875\u9762)"}),", ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts",children:"shared layouts(\u5171\u4eab\u5e03\u5c40)"}),", ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates",children:"templates(\u6a21\u677f)"}),". \u672c\u9875\u9762\u5c06\u4f1a\u77e5\u9053\u4f60\u5728 Next.js \u5e94\u7528\u4e2d\u600e\u4e48\u4f7f\u7528\u8fd9\u4e9b\u7279\u6b8a\u6587\u4ef6."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"pages-\u9875\u9762",children:"Pages (\u9875\u9762)"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u9875\u9762\u662f\u4e00\u4e2a\u5bfc\u822a\u7684\u552f\u4e00 UI. \u4f60\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4ece ",(0,s.jsx)(n.code,{children:"page.js"})," \u6587\u4ef6\u4e2d\u5bfc\u51fa\u7ec4\u4ef6\u6765\u5b9a\u4e49\u9875\u9762. \u4f7f\u7528\u5d4c\u5957\u6587\u4ef6\u5939\u6765\u5b9a\u4e49\u8def\u7531, \u5e76\u5728\u5176\u4e2d\u521b\u5efa ",(0,s.jsx)(n.code,{children:"page.js"})," \u6587\u4ef6, \u4f7f\u5f97\u8be5\u8def\u7531\u80fd\u591f\u88ab\u516c\u5f00\u8bbf\u95ee."]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u5728 ",(0,s.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u5185\u589e\u52a0 ",(0,s.jsx)(n.code,{children:"page.js"})," \u6587\u4ef6, \u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a\u9875\u9762:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fpage-special-file.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL",alt:"pages_1"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/page.tsx"',children:"// `app/page.tsx` is the UI for the `/` URL\nexport default function Page() {\n  return <h1>Hello, Home page!</h1>;\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/dashboard/page.tsx"',children:"// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL\nexport default function Page() {\n  return <h1>Hello, Dashboard Page!</h1>;\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e00\u4e2a\u9875\u9762\u5e94\u8be5\u603b\u662f",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing#terminology",children:"route subtree(\u8def\u7531\u5b50\u6811)"}),"\u7684",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing#terminology",children:"leaf(\u53f6\u5b50\u7ed3\u70b9)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Pages(\u9875\u9762) \u7684\u6587\u4ef6\u6269\u5c55\u540d\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:".js"}),", ",(0,s.jsx)(n.code,{children:".jsx"})," \u6216 ",(0,s.jsx)(n.code,{children:".tsx"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\u82e5\u60f3\u8981\u4f7f\u5f97\u8def\u7531\u80fd\u591f\u88ab\u516c\u5f00\u8bbf\u95ee, ",(0,s.jsx)(n.code,{children:"page.js"})," \u6587\u4ef6\u662f\u5fc5\u987b\u5b58\u5728\u7684."]}),"\n",(0,s.jsxs)(n.li,{children:["Pages(\u9875\u9762) \u9ed8\u8ba4\u662f ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/server-components",children:"Server Components(\u670d\u52a1\u7aef\u7ec4\u4ef6)"}),", \u4f46\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u6210 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/client-components",children:"Client Components(\u5ba2\u6237\u7aef\u7ec4\u4ef6)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Pages(\u9875\u9762)\u53ef\u4ee5\u83b7\u53d6\u6570\u636e. \u67e5\u770b ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching",children:"Data Fetching(\u6570\u636e\u83b7\u53d6)"}),"\u7ae0\u8282\u6765\u83b7\u5f97\u66f4\u591a\u4fe1\u606f."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"layouts-\u5e03\u5c40",children:"Layouts (\u5e03\u5c40)"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u5e03\u5c40\u5728\u591a\u4e2a\u9875\u9762\u95f4\u662f\u5171\u4eab\u7684. \u5728\u5bfc\u822a\u65f6, \u5e03\u5c40 UI \u4f1a\u4fdd\u6301\u72b6\u6001, \u4fdd\u7559\u4ea4\u4e92\u6027, \u5e76\u4e14\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3. \u5e03\u5c40\u4e5f\u53ef\u4ee5\u662f",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts",children:"nested(\u5d4c\u5957)"}),"\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u4e0b, \u901a\u8fc7\u5728 ",(0,s.jsx)(n.code,{children:"layout.js"})," \u6587\u4ef6\u4e2d\u5bfc\u51fa\u4e00\u4e2a React \u7ec4\u4ef6\u4f5c\u4e3a\u5e03\u5c40 UI. \u8be5\u7ec4\u4ef6\u5e94\u8be5\u63a5\u6536\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"children"})," \u5c5e\u6027, \u8be5\u5c5e\u6027\u5c06\u5728\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u586b\u5145\u5b50\u5e03\u5c40\uff08\u5982\u679c\u5b58\u5728\uff09\u6216\u5b50\u9875\u9762."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Flayout-special-file.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL",alt:"layouts_1"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/dashboard/layout.tsx"',children:"export default function DashboardLayout({\n  children, // will be a page or nested layout\n}: {\n  children: React.ReactNode;\n}) {\n  return (\n    <section>\n      {/* Include shared UI here e.g. a header or sidebar */}\n      <nav></nav>\n\n      {children}\n    </section>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u6700\u9876\u5c42\u7684\u5e03\u5c40\u88ab\u79f0\u4e3a ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required",children:"Root Layout(\u6839\u5e03\u5c40)"}),". \u8be5\u7ec4\u4ef6\u662f\u5fc5\u987b\u5b58\u5728\u7684, \u56e0\u4e3a\u5b83\u4f1a\u88ab\u6574\u4e2a\u5e94\u7528\u5185\u7684\u9875\u9762\u6240\u5171\u540c\u4f7f\u7528. Root Layout(\u6839\u5e03\u5c40)\u5fc5\u987b\u5305\u542b ",(0,s.jsx)(n.code,{children:"html"})," \u548c ",(0,s.jsx)(n.code,{children:"body"})," \u6807\u7b7e."]}),"\n",(0,s.jsxs)(n.li,{children:["\u4efb\u4f55 Route Segment(\u8def\u7531\u6bb5) \u90fd\u53ef\u4ee5\u5b9a\u4e49\u5b83\u81ea\u5df1\u7684 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts",children:"Layout(\u5e03\u5c40 UI)"}),"(\u8fd9\u4e0d\u662f\u5fc5\u987b\u7684). \u8fd9\u4e9b\u5e03\u5c40 UI \u5c06\u4f1a\u5728\u88ab\u8be5\u8def\u7531\u6bb5\u5185\u7684\u9875\u9762\u6240\u5171\u4eab."]}),"\n",(0,s.jsxs)(n.li,{children:["\u8def\u7531\u4e2d\u7684 Layouts(\u5e03\u5c40 UI) \u9ed8\u8ba4\u662f\u5d4c\u5957\u7684. \u6bcf\u4e2a\u7236\u5e03\u5c40\u90fd\u4f1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"children"})," \u5c5e\u6027\u5c06\u5b50\u5e03\u5c40\u5305\u88f9\u5728\u5176\u5185\u90e8."]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-groups",children:"Route Groups(\u8def\u7531\u7ec4)"}),"\u5c06\u7279\u5b9a\u7684\u8def\u7531\u79fb\u5165\u6216\u79fb\u51fa\u5171\u4eab\u7684\u5e03\u5c40 UI."]}),"\n",(0,s.jsxs)(n.li,{children:["Layouts(\u5e03\u5c40 UI) \u9ed8\u8ba4\u662f ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/server-components",children:"Server Components(\u670d\u52a1\u7aef\u7ec4\u4ef6)"}),", \u4f46\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u6210 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/client-components",children:"Client Components(\u5ba2\u6237\u7aef\u7ec4\u4ef6)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Layouts(\u5e03\u5c40 UI) \u53ef\u4ee5\u83b7\u53d6\u6570\u636e. \u67e5\u770b ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching",children:"Data Fetching(\u6570\u636e\u83b7\u53d6)"}),"\u7ae0\u8282\u6765\u83b7\u5f97\u66f4\u591a\u4fe1\u606f."]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u7236\u5e03\u5c40\u4e0e\u5b50\u5e03\u5c40\u4e2d\u4f20\u9012\u6570\u636e\u662f\u884c\u4e0d\u901a\u7684. \u7136\u800c, \u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u591a\u4e2a\u5e03\u5c40\u4e2d\u83b7\u53d6\u76f8\u540c\u7684\u6570\u636e\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898, React \u4f1a ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/caching#request-memoization",children:"automatically dedupe the requests(\u81ea\u52a8\u51cf\u5c11\u91cd\u590d\u8bf7\u6c42)"}),"\u6765\u6d88\u9664\u6027\u80fd\u5f71\u54cd."]}),"\n",(0,s.jsxs)(n.li,{children:["Layouts(\u5e03\u5c40 UI) \u6ca1\u6709\u6743\u9650\u83b7\u53d6\u5176\u4e0b\u7684 Route Segments(\u8def\u7531\u6bb5). \u5982\u679c\u60f3\u8981\u83b7\u53d6\u6240\u6709\u7684 Route Segments(\u8def\u7531\u6bb5) , \u4f60\u53ef\u4ee5\u5728 Client Component(\u5ba2\u6237\u7aef\u7ec4\u4ef6)\u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment",children:"useSelectedLayoutSegment"})," \u6216 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments",children:"useSelectedLayoutSegments"})," \u65b9\u6cd5."]}),"\n",(0,s.jsxs)(n.li,{children:["Layouts(\u5e03\u5c40 UI) \u7684\u6587\u4ef6\u6269\u5c55\u540d\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:".js"}),", ",(0,s.jsx)(n.code,{children:".jsx"})," \u6216 ",(0,s.jsx)(n.code,{children:".tsx"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"layout.js"})," \u548c ",(0,s.jsx)(n.code,{children:"page.js"})," \u53ef\u4ee5\u5b9a\u4e49\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u5939\u4e2d. layout(\u5e03\u5c40) \u4f1a\u5305\u542b page(\u9875\u9762)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"root-layout-required-\u6839\u5e03\u5c40\u5fc5\u987b\u7684",children:"Root Layout (Required) (\u6839\u5e03\u5c40(\u5fc5\u987b\u7684))"}),"\n",(0,s.jsxs)(n.p,{children:["Root Layout(\u6839\u5e03\u5c40) \u5728 ",(0,s.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u5185\u7684\u4e00\u7ea7\u76ee\u5f55\u5185\u5b9a\u4e49, \u5c06\u4f1a\u88ab\u5e94\u7528\u81f3\u6240\u6709\u7684 routes(\u8def\u7531). \u6839\u8def\u7531\u5141\u8bb8\u4f60\u4fee\u6539\u4ece\u670d\u52a1\u7aef\u8fd4\u56de\u7684, \u521d\u59cb\u7684 HTML \u5c5e\u6027."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/layout.tsx"',children:'export default function RootLayout({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  return (\n    <html lang="en">\n      <body>{children}</body>\n    </html>\n  );\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u5fc5\u987b\u5305\u542b root layout(\u6839\u5e03\u5c40)."]}),"\n",(0,s.jsxs)(n.li,{children:["Next.js \u4e0d\u4f1a\u81ea\u52a8\u521b\u5efa ",(0,s.jsx)(n.code,{children:"<html>"})," \u548c ",(0,s.jsx)(n.code,{children:"<body>"}),", \u6240\u4ee5\u6839\u5e03\u5c40\u5fc5\u987b\u5305\u542b\u5b83\u4eec."]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/optimizing/metadata",children:"built-in SEO support(\u5185\u7f6e\u641c\u7d22\u5f15\u64ce\u4f18\u5316\u652f\u6301)"})," \u6765\u7ba1\u7406 HTML \u7684 ",(0,s.jsx)(n.code,{children:"<head>"})," \u6807\u7b7e, \u6bd4\u5982, \u50cf ",(0,s.jsx)(n.code,{children:"<title>"})," \u6807\u7b7e."]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-groups",children:"Route Groups(\u8def\u7531\u7ec4)"})," \u6765\u521b\u5efa\u591a\u4e2a Root Layouts(\u6839\u5e03\u5c40). \u70b9\u51fb\u67e5\u770b",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-groups#creating-multiple-root-layouts",children:"\u793a\u4f8b"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Root Layout(\u6839\u5e03\u5c40) \u9ed8\u8ba4\u662f ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/server-components",children:"Server Components(\u670d\u52a1\u7aef\u7ec4\u4ef6)"}),", \u5e76\u4e14 ",(0,s.jsx)(n.strong,{children:"\u4e0d\u80fd"})," \u88ab\u8bbe\u7f6e\u6210 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/client-components",children:"Client Components(\u5ba2\u6237\u7aef\u7ec4\u4ef6)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"pages"}),"\u76ee\u5f55\u8fc1\u79fb"]}),": Root Layout(\u6839\u5e03\u5c40) \u4ee3\u66ff\u4e86 ",(0,s.jsx)(n.code,{children:"_app.js"})," \u548c ",(0,s.jsx)(n.code,{children:"_document.js"})," \u6587\u4ef6. \u67e5\u770b",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#migrating-_documentjs-and-_appjs",children:"\u8fc1\u79fb\u6307\u5357"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"nesting-layouts-\u5d4c\u5957\u5e03\u5c40",children:"Nesting Layouts (\u5d4c\u5957\u5e03\u5c40)"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6587\u4ef6\u5939 (\u5982 ",(0,s.jsx)(n.code,{children:"app/dashboard/layout.js"}),") \u4e2d\u5b9a\u4e49\u7684\u5e03\u5c40\u9002\u7528\u4e8e\u7279\u5b9a\u7684\u8def\u7531\u6bb5 (\u5982 ",(0,s.jsx)(n.code,{children:"acme.com/dashboard"}),"), \u5e76\u5728\u8fd9\u4e9b\u8def\u7531\u6bb5\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u65f6\u88ab\u6e32\u67d3. \u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u6587\u4ef6\u5c42\u6b21\u7ed3\u6784\u4e2d\u7684\u5e03\u5c40\u662f",(0,s.jsx)(n.strong,{children:"\u5d4c\u5957\u7684"}),", \u8fd9\u610f\u5473\u7740\u5b83\u4eec\u4f1a\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"children"})," \u5c5e\u6027\u5c06\u5b50\u5e03\u5c40\u5305\u88f9\u8d77\u6765."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-layout.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL",alt:"nesting_layouts_1"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/dashboard/layout.tsx"',children:"export default function DashboardLayout({\n  children,\n}: {\n  children: React.ReactNode;\n}) {\n  return <section>{children}</section>;\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u53ea\u6709 Root Layout(\u6839\u8def\u7531) \u53ef\u4ee5\u5305\u542b ",(0,s.jsx)(n.code,{children:"<html>"})," \u548c ",(0,s.jsx)(n.code,{children:"<body>"})," \u6807\u7b7e."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u5c06 Root Layouts(\u6839\u5e03\u5c40) \u548c Nesting Layouts(\u5d4c\u5957\u5e03\u5c40)\u7ed3\u5408\u8d77\u6765, root layout(\u6839\u5e03\u5c40)(",(0,s.jsx)(n.code,{children:"app/layout.js"}),")\u4f1a\u5305\u88f9 Dashboard \u5e03\u5c40(",(0,s.jsx)(n.code,{children:"app/dashboard/layouts.js"}),"), \u5373 Dashboard \u5e03\u5c40\u5c06\u5305\u88f9 ",(0,s.jsx)(n.code,{children:"app/dashboard/*"})," \u5185\u7684\u8def\u7531\u6bb5."]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e24\u4e2a\u5e03\u5c40\u5c06\u4f1a\u50cf\u5982\u4e0b\u5d4c\u5957:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fnested-layouts-ui.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL",alt:"nesting_layouts_2"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-groups",children:"Route Groups(\u8def\u7531\u7ec4)"}),"\u5c06\u7279\u5b9a\u7684\u8def\u7531\u79fb\u5165\u6216\u79fb\u51fa\u5171\u4eab\u7684\u5e03\u5c40 UI."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"templates-\u6a21\u677f",children:"Templates (\u6a21\u677f)"}),"\n",(0,s.jsx)(n.p,{children:"Templates(\u6a21\u677f)\u4e0e Layouts(\u5e03\u5c40)\u6709\u4e00\u70b9\u76f8\u4f3c, \u6bd4\u5982, \u5b83\u4eec\u90fd\u5305\u88f9\u4e86\u5b83\u4eec\u7684\u5b50\u9875\u9762\u548c\u5b50\u5e03\u5c40."}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u662f, \u4e0d\u50cf layouts(\u5e03\u5c40)\u4f1a\u8de8\u8d8a\u8def\u7531\u5730\u4fdd\u5b58\u72b6\u6001, templates(\u6a21\u677f) \u5728\u8def\u7531\u65f6\u5bf9\u4e8e\u5b83\u7684\u6bcf\u4e00\u4e2a\u5b50\u5143\u7d20\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b9e\u4f8b. \u8fd9\u610f\u5473\u7740, \u5f53\u7528\u6237\u5728\u540c\u4e00\u4e2a\u6a21\u677f\u4e0b\u7684\u8def\u7531\u95f4\u5bfc\u822a\u65f6, \u6a21\u7248\u7ec4\u4ef6\u5c06\u4f1a\u52a0\u8f7d\u4e00\u4e2a\u65b0\u7684\u5b9e\u4f8b, DOM \u5143\u7d20\u4f1a\u88ab\u91cd\u65b0\u521b\u5efa, \u72b6\u6001 ",(0,s.jsx)(n.strong,{children:"\u4e0d\u4f1a"})," \u88ab\u4fdd\u7559, \u6548\u679c\u4e5f\u4f1a\u91cd\u65b0\u540c\u6b65."]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u67d0\u4e00\u4e9b\u573a\u666f, \u4f60\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u7279\u5b9a\u7684\u884c\u4e3a, \u90a3\u4e48 templates(\u6a21\u677f) \u4f1a\u6bd4 layouts(\u5e03\u5c40) \u66f4\u5408\u9002. \u6bd4\u5982:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f9d\u8d56\u4e8e ",(0,s.jsx)(n.code,{children:"useEffect"}),"\uff08\u5982\u8bb0\u5f55\u9875\u9762\u6d4f\u89c8\u91cf\uff09\u548c ",(0,s.jsx)(n.code,{children:"useState"}),"\uff08\u5982\u9875\u9762\u53cd\u9988\u8868\u5355\uff09\u7684\u529f\u80fd."]}),"\n",(0,s.jsx)(n.li,{children:"\u6539\u53d8\u6846\u67b6\u7684\u9ed8\u8ba4\u884c\u4e3a. \u6bd4\u5982, \u5e03\u5c40\u5185\u7684 Suspend Boundaries(\u52a0\u8f7d\u754c\u9650) \u53ea\u4f1a\u5728\u9996\u6b21\u52a0\u8f7d\u5e03\u5c40\u65f6\u663e\u793a\u5907\u7528\u754c\u9762, \u800c\u4e0d\u4f1a\u5728\u6bcf\u6b21\u5207\u6362\u9875\u9762\u65f6\u663e\u793a. \u5bf9\u4e8e\u6a21\u677f, \u6bcf\u6b21\u5bfc\u822a\u65f6\u90fd\u4f1a\u5907\u7528\u754c\u9762."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6a21\u677f\u53ef\u4ee5\u901a\u8fc7\u4ece ",(0,s.jsx)(n.code,{children:"template.js"})," \u6587\u4ef6\u4e2d\u5bfc\u51fa\u4e00\u4e2a\u9ed8\u8ba4\u7684 React \u7ec4\u4ef6\u6765\u5b9a\u4e49. \u8be5\u7ec4\u4ef6\u5e94\u63a5\u53d7\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"children"})," \u5c5e\u6027."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Ftemplate-special-file.png&w=1920&q=75&dpl=dpl_GamYTZsC683r4msp4d6ep7hck3zL",alt:"templates_1"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/template.tsx"',children:"export default function Template({ children }: { children: React.ReactNode }) {\n  return <div>{children}</div>;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5d4c\u5957\u671f\u95f4, ",(0,s.jsx)(n.code,{children:"template.js"})," \u4f1a\u5728\u5e03\u5c40\u53ca\u5176\u5b50\u5e03\u5c40\u6e32\u67d3\u4e2d\u95f4\u88ab\u6e32\u67d3. \u4ee5\u4e0b\u662f\u7b80\u5316\u540e\u7684\u8f93\u51fa\u7ed3\u679c\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="Output"',children:'<Layout>\n  {/* Note that the template is given a unique key. */}\n  <template key="{routeParam}">{children}</template>\n</Layout>\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"modifying-head-\u6539\u53d8-head\u5c5e\u6027",children:["Modifying ",(0,s.jsx)(n.code,{children:"<head>"})," (\u6539\u53d8 ",(0,s.jsx)(n.code,{children:"<head>"}),"\u5c5e\u6027)"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u5185, \u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/optimizing/metadata",children:"built-in SEO support(\u5185\u7f6e\u641c\u7d22\u5f15\u64ce\u4f18\u5316\u652f\u6301)"})," \u6765\u4fee\u6539 ",(0,s.jsx)(n.code,{children:"<head>"})," HTML \u5185\u7684\u5143\u7d20, \u50cf",(0,s.jsx)(n.code,{children:"<title>"}),", ",(0,s.jsx)(n.code,{children:"<meta>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Metadata(\u5143\u6570\u636e) \u53ef\u901a\u8fc7\u5728 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/layout",children:"layout.js"})," \u6216 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/page",children:"page.js"})," \u6587\u4ef6\u4e2d\u5bfc\u51fa ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object",children:"metadata object(\u5143\u6570\u636e\u5bf9\u8c61)"})," \u6216 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function",children:"generateMetadata"})," \u51fd\u6570\u6765\u5b9a\u4e49."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/page.tsx"',children:'import { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: "Next.js",\n};\n\nexport default function Page() {\n  return "...";\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),": \u4f60\u4e0d\u5e94\u8be5\u5728 root layout(\u6839\u76ee\u5f55) \u4e0a\u624b\u52a8\u8ffd\u52a0 ",(0,s.jsx)(n.code,{children:"<head>"})," \u6807\u7b7e(\u6bd4\u5982 ",(0,s.jsx)(n.code,{children:"<title>"})," \u548c ",(0,s.jsx)(n.code,{children:"<meta>"}),"). \u53d6\u800c\u4ee3\u4e4b, \u4f60\u5e94\u8be5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/generate-metadata",children:"Metadata API(\u5143\u6570\u636e\u63a5\u53e3)"}),", \u5b83\u80fd\u81ea\u52a8\u5904\u7406\u9ad8\u7ea7\u8981\u6c42, \u5982\u6d41\u5f0f\u4f20\u8f93\u548c\u5220\u9664\u91cd\u590d\u7684 ",(0,s.jsx)(n.code,{children:"<head>"})," \u5143\u7d20."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/generate-metadata",children:"\u6709\u5173 metadata \u7684\u66f4\u591a\u53ef\u7528\u9009\u9879, \u8bf7\u53c2\u9605 API \u76f8\u5173\u8d44\u6599"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(7294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);