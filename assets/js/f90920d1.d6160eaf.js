"use strict";(self.webpackChunknextjs_cn_doc=self.webpackChunknextjs_cn_doc||[]).push([[6159],{3345:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(5893),i=s(1151);const r={title:"UI \u52a0\u8f7d\u548c\u6d41\u5f0f\u4f20\u8f93",description:"https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"},d=void 0,a={id:"building-your-application/routing/loading-ui-and-streaming",title:"UI \u52a0\u8f7d\u548c\u6d41\u5f0f\u4f20\u8f93",description:"https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming",source:"@site/docs/02-building-your-application/01-routing/06-loading-ui-and-streaming.md",sourceDirName:"02-building-your-application/01-routing",slug:"/building-your-application/routing/loading-ui-and-streaming",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/loading-ui-and-streaming",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-building-your-application/01-routing/06-loading-ui-and-streaming.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"UI \u52a0\u8f7d\u548c\u6d41\u5f0f\u4f20\u8f93",description:"https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"},sidebar:"appRouter",previous:{title:"\u52a8\u6001\u8def\u7531",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/dynamic-routes"},next:{title:"\u9519\u8bef\u5904\u7406\u5668",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/error-handling"}},o={},l=[{value:"Instant Loading States (\u5373\u65f6\u52a0\u8f7d\u72b6\u6001)",id:"instant-loading-states-\u5373\u65f6\u52a0\u8f7d\u72b6\u6001",level:2},{value:"Streaming with Suspense (\u60ac\u6302\u5185\u7684\u6d41\u5f0f\u4f20\u8f93)",id:"streaming-with-suspense-\u60ac\u6302\u5185\u7684\u6d41\u5f0f\u4f20\u8f93",level:2},{value:"What is Streaming (\u4ec0\u4e48\u662f\u6d41\u5f0f\u4f20\u8f93\u7684?)",id:"what-is-streaming-\u4ec0\u4e48\u662f\u6d41\u5f0f\u4f20\u8f93\u7684",level:3},{value:"Example (\u793a\u4f8b)",id:"example-\u793a\u4f8b",level:3},{value:"SEO (\u641c\u7d22\u5f15\u64ce\u4f18\u5316)",id:"seo-\u641c\u7d22\u5f15\u64ce\u4f18\u5316",level:3},{value:"Status Codes (\u72b6\u6001\u7801)",id:"status-codes-\u72b6\u6001\u7801",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u7279\u6b8a\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"loading.js"})," \u5c06\u4f1a\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://react.dev/reference/react/Suspense",children:"React Suspense(React \u60ac\u6302)"})," \u5e2e\u52a9\u4f60\u521b\u5efa\u6709\u610f\u4e49\u7684 Loading UI(\u52a0\u8f7d\u4e2d UI). \u901a\u8fc7\u8fd9\u4e2a\u534f\u5b9a, \u4f60\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u52a0\u8f7d\u67d0\u4e00\u4e2a\u8def\u7531\u7684\u5185\u5bb9\u65f6, \u5c55\u793a\u4e00\u4e2a\u670d\u52a1\u5668\u7684 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states",children:"instant loading state(\u5373\u65f6\u52a0\u8f7d\u72b6\u6001)"}),". \u5f53\u8def\u7531\u6bb5\u7684\u5185\u5bb9\u88ab\u6e32\u67d3\u5b8c\u6210\u540e, \u5c06\u4f1a\u66ff\u6362\u8be5\u5185\u5bb9."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-ui.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe",alt:"loading_ui_and_streaming_1"})}),"\n",(0,t.jsx)(n.h2,{id:"instant-loading-states-\u5373\u65f6\u52a0\u8f7d\u72b6\u6001",children:"Instant Loading States (\u5373\u65f6\u52a0\u8f7d\u72b6\u6001)"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5bfc\u822a\u65f6, Instant Loading States(\u5373\u65f6\u52a0\u8f7d\u72b6\u6001) \u4f1a\u88ab\u4f5c\u4e3a\u5907\u7528 UI \u7acb\u5373\u5c55\u793a. \u4f60\u53ef\u4ee5\u9884\u6e32\u67d3 loading indicators (\u52a0\u8f7d\u4e2d\u7684\u6307\u793a\u5668), \u50cf skeletons(\u9aa8\u67b6), spinners(\u65cb\u8f6c\u56fe\u6848)\u7b49, \u6765\u4e3a\u5373\u5c06\u51fa\u73b0\u5728\u5c4f\u5e55\u4e0a\u7684\u5143\u7d20\u9884\u586b\u5145, \u50cf\u56fe\u7247, \u6807\u9898\u7b49. \u8fd9\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u4e86\u89e3\u5230 app \u6b63\u5728\u88ab\u54cd\u5e94\u4e2d\u4ee5\u63d0\u9ad8\u7528\u6237\u4f53\u9a8c."}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"loading.js"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-special-file.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe",alt:"instant_loading_states_1"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="app/dashboard/loading.tsx"',children:"export default function Loading() {\n  // You can add any UI inside Loading, including a Skeleton.\n  return <LoadingSkeleton />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u5939\u5185, ",(0,t.jsx)(n.code,{children:"loading.js"})," \u4f1a\u88ab\u5d4c\u5957\u5728 ",(0,t.jsx)(n.code,{children:"layout.js"})," \u5185. \u5b83\u4f1a\u81ea\u52a8\u5305\u88f9\u4f4f ",(0,t.jsx)(n.code,{children:"page.js"})," \u6587\u4ef6, \u5176\u5185\u7684\u4efb\u4f55\u5b50\u5143\u7d20\u90fd\u4f1a\u5728 ",(0,t.jsx)(n.code,{children:"<Suspend>"})," \u6807\u7b7e\u5185."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-overview.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe",alt:"instant_loading_state_2"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5bfc\u822a\u662f\u7acb\u5373\u7684, \u5373\u4f7f\u662f\u901a\u8fc7 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works",children:"server-centric routing(\u4e2d\u5fc3\u5316\u670d\u52a1\u7684\u8def\u7531)"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"\u5bfc\u822a\u662f\u53ef\u4ee5\u88ab\u4e2d\u6bb5\u7684, \u8fd9\u8868\u793a, \u5f53\u4ece\u4e00\u4e2a\u8def\u7531\u8df3\u8f6c\u5230\u53e6\u4e00\u4e2a\u8def\u7531\u65f6, \u662f\u4e0d\u9700\u8981\u7b49\u5f85\u9875\u9762\u5b8c\u5168\u52a0\u8f7d\u540e\u518d\u6267\u884c\u7684."}),"\n",(0,t.jsx)(n.li,{children:"Shared layouts(\u5171\u4eab\u7684\u5e03\u5c40) \u5c06\u4f1a\u5728\u65b0\u8def\u7531\u52a0\u8f7d\u65f6, \u4fdd\u6301\u5176\u53ef\u4ea4\u4e92\u6027."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u5efa\u8bae:"})," \u8bf7\u5bf9\u8def\u7531\u6bb5(\u5e03\u5c40\u548c\u9875\u9762)\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"loading.js"}),", \u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"<Suspend>"}),", \u56e0\u4e3a Next.js \u4f18\u5316\u4e86\u8fd9\u4e00\u529f\u80fd."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"streaming-with-suspense-\u60ac\u6302\u5185\u7684\u6d41\u5f0f\u4f20\u8f93",children:"Streaming with Suspense (\u60ac\u6302\u5185\u7684\u6d41\u5f0f\u4f20\u8f93)"}),"\n",(0,t.jsxs)(n.p,{children:["\u9664\u4e86 ",(0,t.jsx)(n.code,{children:"loading.js"})," , \u4f60\u4e5f\u53ef\u4ee5\u4e3a\u4f60\u7684 UI \u7ec4\u4ef6\u624b\u52a8\u521b\u5efa Suspense Boundaries(\u60ac\u6302\u8fb9\u754c). App \u8def\u7531\u652f\u6301 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes",children:"Node.js and Edge runtimes(node.js \u548c edge \u8fd0\u884c\u65f6)"})," \u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://react.dev/reference/react/Suspense",children:"Streaming with Suspense(\u60ac\u6302\u5185\u7684\u6d41\u5f0f\u4f20\u8f93)"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"what-is-streaming-\u4ec0\u4e48\u662f\u6d41\u5f0f\u4f20\u8f93\u7684",children:"What is Streaming (\u4ec0\u4e48\u662f\u6d41\u5f0f\u4f20\u8f93\u7684?)"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u60f3\u77e5\u9053\u5728 React \u548c Next.js \u4e2d\u6d41\u5f0f\u4f20\u8f93\u662f\u600e\u4e48\u5de5\u4f5c\u7684, \u4e86\u89e3 Server Side Rendering(SSR)(\u670d\u52a1\u7aef\u6e32\u67d3) \u53ca\u5176\u9650\u5236\u662f\u5f88\u6709\u5e2e\u52a9\u7684."}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u7528\u6237\u770b\u89c1\u548c\u4f7f\u7528\u4e00\u4e2a\u9875\u9762\u524d, SSR \u8fd8\u5305\u542b\u6709\u4e00\u7cfb\u5217\u7684\u6b65\u9aa4\u9700\u8981\u5b8c\u6210:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u9996\u5148, \u9875\u9762\u5185\u7684\u6240\u6709\u6570\u636e\u90fd\u4f1a\u5728\u670d\u52a1\u5668\u83b7\u53d6."}),"\n",(0,t.jsx)(n.li,{children:"\u7136\u540e, \u670d\u52a1\u5668\u4e3a page(\u9875\u9762) \u6e32\u67d3 HTML."}),"\n",(0,t.jsx)(n.li,{children:"\u5c06\u9875\u9762\u5185\u7684 HTML, CSS, JavaScript \u53d1\u9001\u7ed9\u5ba2\u6237\u7aef."}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u751f\u6210\u597d\u7684 HTML \u548c CSS \u5c55\u793a\u4e00\u4e2a\u4e0d\u80fd\u4ea4\u4e92\u7684\u7528\u6237\u754c\u9762."}),"\n",(0,t.jsxs)(n.li,{children:["\u6700\u7ec8, React \u5bf9\u7528\u6237\u754c\u9762\u8fdb\u884c",(0,t.jsx)(n.a,{href:"https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html",children:"hydrates(\u6c34\u5408\u5904\u7406)"}),", \u4f7f\u5f97\u5176\u5177\u6709\u4ea4\u4e92\u6027."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-without-streaming-chart.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe",alt:"what_is_streaming_1"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u9762\u8fd9\u4e9b\u6b65\u9aa4\u662f\u6309\u7167\u987a\u5e8f\u7684, \u5e76\u4e14\u662f\u963b\u585e\u7684. \u8fd9\u610f\u5473\u7740, \u670d\u52a1\u5668\u53ea\u6709\u5728\u83b7\u53d6\u6570\u636e\u540e\u624d\u80fd\u5f00\u59cb\u4e3a\u9875\u9762\u6e32\u67d3 HTML. \u5728\u5ba2\u6237\u7aef, React \u53ea\u80fd\u5728\u9875\u9762\u5185\u7684\u6240\u6709\u7ec4\u4ef6\u90fd\u88ab\u4e0b\u8f7d\u5b8c\u6210\u540e\u624d\u80fd\u4e3a UI \u8fdb\u884c hydrate(\u6c34\u5408\u5904\u7406)."}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 React \u548c Next.js \u7684 SSR \u53ef\u4ee5\u5c3d\u5feb\u5411\u7528\u6237\u663e\u793a\u975e\u4ea4\u4e92\u5f0f\u9875\u9762, \u4ece\u800c\u5e2e\u52a9\u63d0\u9ad8\u53ef\u88ab\u7528\u6237\u611f\u77e5\u7684\u52a0\u8f7d\u6027\u80fd."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-without-streaming.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe",alt:"what_is_streaming_2"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u800c, \u8fd9\u53ef\u80fd\u8fd8\u662f\u4f1a\u6bd4\u8f83\u7f13\u6162, \u56e0\u4e3a\u5728\u9875\u9762\u80fd\u591f\u5411\u7528\u6237\u5c55\u793a\u524d\u8fd8\u662f\u9700\u8981\u7b49\u5f85\u670d\u52a1\u5668\u83b7\u53d6\u9875\u9762\u5185\u7684\u5168\u90e8\u6570\u636e."}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u6d41\u5f0f\u4f20\u8f93, \u4f60\u53ef\u4ee5\u5c06\u9875\u9762\u7684 HTML \u62c6\u5206\u6210\u8f83\u5c0f\u7684 chunk(\u5757), \u5e76\u9010\u6b65\u5c06\u8fd9\u4e9b\u5757\u4ece\u670d\u52a1\u5668\u53d1\u9001\u5230\u5ba2\u6237\u7aef."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-with-streaming.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe",alt:"what_is_streaming_3"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u5141\u8bb8\u9875\u9762\u5185\u7684\u4e00\u90e8\u5206\u88ab\u7387\u5148\u5c55\u793a, \u800c\u65e0\u9700\u7b49\u5f85\u6240\u6709\u6570\u636e\u52a0\u8f7d\u5b8c\u6bd5\u540e\u624d\u80fd\u6e32\u67d3\u4efb\u4f55\u7528\u6237\u754c\u9762."}),"\n",(0,t.jsx)(n.p,{children:"Streaming(\u6d41\u5f0f\u4f20\u8f93) \u5728 React \u7684\u7ec4\u4ef6\u4e2d\u975e\u5e38\u6709\u6548, \u56e0\u4e3a\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a chunk(\u5757). \u5177\u6709\u66f4\u9ad8\u4f18\u5148\u7ea7\u7684\u7ec4\u4ef6(\u50cf\u751f\u4ea7\u4fe1\u606f)\u6216\u4e0d\u9700\u8981\u4f9d\u8d56\u6570\u636e\u7684\u7ec4\u4ef6(\u50cf\u5e03\u5c40 UI)\u5c06\u88ab\u7b2c\u4e00\u65f6\u95f4\u53d1\u9001\u7ed9\u5ba2\u6237\u7aef, React \u4f1a\u66f4\u65e9\u7684\u5bf9\u4ed6\u4eec\u8fdb\u884c hydrate(\u6c34\u5408\u5904\u7406). \u5177\u6709\u8f83\u4f4e\u4f18\u5148\u7ea7\u7684\u7ec4\u4ef6\u4f1a\u5728\u5b83\u4eec\u9700\u8981\u7684\u6570\u636e\u5728\u670d\u52a1\u5668\u83b7\u53d6\u540e\u88ab\u53d1\u9001\u5230\u5ba2\u6237\u7aef."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fserver-rendering-with-streaming-chart.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe",alt:"what_is_streaming_4"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u4f60\u60f3\u8981\u963b\u6b62\u9875\u9762\u56e0\u4e3a\u5927\u91cf\u6570\u636e\u8bf7\u6c42\u88ab\u963b\u6b62\u6e32\u67d3\u65f6, Streaming(\u6d41\u5f0f\u4f20\u8f93)\u7279\u522b\u6709\u597d\u5904, \u56e0\u4e3a\u4ed6\u80fd\u51cf\u5c11 ",(0,t.jsx)(n.a,{href:"https://web.dev/ttfb/",children:"Time To First Byte(TTFB)"})," \u548c ",(0,t.jsx)(n.a,{href:"https://web.dev/first-contentful-paint/",children:"First Contentful Paint(FCP)"}),". \u5b83\u8fd8\u80fd\u5e2e\u52a9\u63d0\u5347 ",(0,t.jsx)(n.a,{href:"https://developer.chrome.com/en/docs/lighthouse/performance/interactive/",children:"Time To Interactive(TTI)"}),", \u5c24\u5176\u5728\u7f13\u6162\u7684\u8bbe\u5907\u4e0a."]}),"\n",(0,t.jsx)(n.h3,{id:"example-\u793a\u4f8b",children:"Example (\u793a\u4f8b)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<Suspense>"})," \u7684\u5de5\u4f5c\u539f\u7406\u662f\u5c01\u88c5\u4e00\u4e2a\u6267\u884c\u5f02\u6b65\u64cd\u4f5c(\u5982\u83b7\u53d6\u6570\u636e)\u7684\u7ec4\u4ef6, \u5728\u83b7\u53d6\u6570\u636e\u8fc7\u7a0b\u4e2d\u663e\u793a\u5907\u7528 UI(\u5982 skeleton(\u9aa8\u67b6), spinner(\u65cb\u8f6c\u5668)), \u7136\u540e\u5728\u670d\u52a1\u5668\u5c06\u7ec4\u4ef6\u6e32\u67d3\u5b8c\u6210\u540e\u4ea4\u6362\u4f60\u7684\u5907\u7528 UI."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="app/dashboard/page.tsx"',children:'import { Suspense } from "react";\nimport { PostFeed, Weather } from "./Components";\n\nexport default function Posts() {\n  return (\n    <section>\n      <Suspense fallback={<p>Loading feed...</p>}>\n        <PostFeed />\n      </Suspense>\n      <Suspense fallback={<p>Loading weather...</p>}>\n        <Weather />\n      </Suspense>\n    </section>\n  );\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4f7f\u7528 Suspense(\u60ac\u6302), \u4f60\u53ef\u4ee5\u83b7\u5f97\u4ee5\u4e0b\u597d\u5904:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Streaming Server Rendering(\u6d41\u5f0f\u670d\u52a1\u5668\u6e32\u67d3):"})," \u6e10\u8fdb\u5f0f\u7684\u7531\u670d\u52a1\u5668\u5411\u5ba2\u6237\u7aef\u63d0\u4f9b\u6e32\u67d3\u540e\u7684 HTML."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Selective Hydration(\u53ef\u9009\u7684\u6c34\u5408\u5904\u7406):"})," React \u4f1a\u6839\u636e\u7528\u6237\u7684\u4ea4\u4e92\u60c5\u51b5, \u4f18\u5148\u9009\u62e9\u54ea\u4e9b\u7ec4\u4ef6\u8fdb\u884c\u6c34\u5408, \u4f7f\u5176\u5177\u6709\u4ea4\u4e92\u6027."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b\u66f4\u591a Suspense(\u60ac\u6302) \u7684\u793a\u4f8b\u548c\u7528\u6237\u6848\u4f8b, \u8bf7\u67e5\u770b ",(0,t.jsx)(n.a,{href:"https://react.dev/reference/react/Suspense",children:"React \u6587\u6863"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"seo-\u641c\u7d22\u5f15\u64ce\u4f18\u5316",children:"SEO (\u641c\u7d22\u5f15\u64ce\u4f18\u5316)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Next.js \u5c06\u7b49\u5f85 ",(0,t.jsx)(n.code,{children:"generateMetadata"})," \u4e2d\u7684\u6570\u636e\u83b7\u53d6\u5b8c\u6210\u540e, \u518d\u5c06\u7528\u6237\u754c\u9762\u6d41\u5f0f\u4f20\u8f93\u5230\u5ba2\u6237\u7aef. \u8fd9\u5c06\u786e\u4fdd\u6d41\u5f0f\u54cd\u5e94\u7684\u7b2c\u4e00\u90e8\u5206\u5305\u542b ",(0,t.jsx)(n.code,{children:"<head>"})," \u6807\u8bb0."]}),"\n",(0,t.jsxs)(n.li,{children:["\u7531\u4e8e streaming(\u6d41\u5f0f\u4f20\u8f93) \u662f\u7531\u670d\u52a1\u5668\u6e32\u67d3\u7684, \u56e0\u6b64\u4e0d\u4f1a\u5f71\u54cd SEO(\u641c\u7d22\u5f15\u64ce\u4f18\u5316). \u4f60\u53ef\u4ee5\u4f7f\u7528 Google \u7684 ",(0,t.jsx)(n.a,{href:"https://search.google.com/test/mobile-friendly",children:"Mobile Friendly Test Tool(\u79fb\u52a8\u53cb\u597d\u6d4b\u8bd5\u5de5\u5177)"})," \u6765\u67e5\u770b\u4f60\u7684\u9875\u9762\u5728 Google \u7f51\u7edc\u722c\u866b\u773c\u4e2d\u7684\u663e\u793a\u6548\u679c, \u5e76\u67e5\u770b\u5e8f\u5217\u5316 HTML\uff08",(0,t.jsx)(n.a,{href:"https://web.dev/rendering-on-the-web/#seo-considerations",children:"source"}),"\uff09."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"status-codes-\u72b6\u6001\u7801",children:"Status Codes (\u72b6\u6001\u7801)"}),"\n",(0,t.jsx)(n.p,{children:"\u6d41\u5f0f\u4f20\u8f93\u65f6, \u8868\u793a\u8bf7\u6c42\u6210\u529f\u65f6, \u5c06\u8fd4\u56de 200 \u72b6\u6001\u4ee3\u7801."}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u65f6\u670d\u52a1\u5668\u4ecd\u53ef\u80fd\u4f1a\u5728 streamed content(\u6d41\u5f0f\u4f20\u8f93\u7684\u5185\u5bb9) \u4e2d\u5411\u5ba2\u6237\u7aef\u4f20\u8fbe\u9519\u8bef\u6216\u95ee\u9898, \u4f8b\u5982\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/redirect",children:(0,t.jsx)(n.code,{children:"redirect"})})," \u6216 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/not-found",children:(0,t.jsx)(n.code,{children:"notFound"})})," \u65f6. \u7531\u4e8e\u54cd\u5e94\u5934\u5df2\u53d1\u9001\u5230\u5ba2\u6237\u7aef, \u56e0\u6b64\u65e0\u6cd5\u66f4\u65b0\u54cd\u5e94\u7684\u72b6\u6001\u4ee3\u7801. \u8fd9\u4e0d\u4f1a\u5f71\u54cd SEO(\u641c\u7d22\u5f15\u64ce\u4f18\u5316)."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>d});var t=s(7294);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);