"use strict";(self.webpackChunknextjs_cn_doc=self.webpackChunknextjs_cn_doc||[]).push([[519],{3823:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>j,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var d=n(5893),r=n(1151);const t={title:"\u9879\u76ee\u7ed3\u6784",description:"https://nextjs.org/docs/getting-started/project-structure"},i=void 0,c={id:"getting-started/project-structure",title:"\u9879\u76ee\u7ed3\u6784",description:"https://nextjs.org/docs/getting-started/project-structure",source:"@site/docs/01-getting-started/02-project-structure.md",sourceDirName:"01-getting-started",slug:"/getting-started/project-structure",permalink:"/nextjs-doc-cn-web/docs/getting-started/project-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-getting-started/02-project-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u9879\u76ee\u7ed3\u6784",description:"https://nextjs.org/docs/getting-started/project-structure"},sidebar:"appRouter",previous:{title:"\u5b89\u88c5",permalink:"/nextjs-doc-cn-web/docs/getting-started/installation"},next:{title:"intro",permalink:"/nextjs-doc-cn-web/docs/building-your-application/intro"}},l={},o=[{value:"Top-level folders (\u9876\u5c42\u6587\u4ef6\u5939)",id:"top-level-folders-\u9876\u5c42\u6587\u4ef6\u5939",level:2},{value:"Top-level files (\u9876\u5c42\u6587\u4ef6)",id:"top-level-files-\u9876\u5c42\u6587\u4ef6",level:2},{value:"<code>app</code> Routing Conventions (app Routing \u534f\u5b9a)",id:"app-routing-conventions-app-routing-\u534f\u5b9a",level:2},{value:"Routing Files (\u8def\u7531\u6587\u4ef6)",id:"routing-files-\u8def\u7531\u6587\u4ef6",level:3},{value:"Nested Routes (\u5d4c\u5957\u8def\u7531)",id:"nested-routes-\u5d4c\u5957\u8def\u7531",level:3},{value:"Dynamic Routes (\u52a8\u6001\u8def\u7531)",id:"dynamic-routes-\u52a8\u6001\u8def\u7531",level:3},{value:"Routes Groups and Private Folders (\u8def\u7531\u7ec4\u548c\u79c1\u6709\u6587\u4ef6\u5939)",id:"routes-groups-and-private-folders-\u8def\u7531\u7ec4\u548c\u79c1\u6709\u6587\u4ef6\u5939",level:3},{value:"Parallel and Intercepted Routes (\u5e73\u884c\u8def\u7531\u548c\u62e6\u622a\u8def\u7531)",id:"parallel-and-intercepted-routes-\u5e73\u884c\u8def\u7531\u548c\u62e6\u622a\u8def\u7531",level:3},{value:"Metadata File Convention (\u5143\u6587\u4ef6\u534f\u5b9a)",id:"metadata-file-convention-\u5143\u6587\u4ef6\u534f\u5b9a",level:3},{value:"App Icons (\u5e94\u7528\u56fe\u6807)",id:"app-icons-\u5e94\u7528\u56fe\u6807",level:4},{value:"Open Graph and Twitter Images",id:"open-graph-and-twitter-images",level:4},{value:"SEO",id:"seo",level:4},{value:"<code>pages</code> Routing Convention (pages Router \u534f\u5b9a)",id:"pages-routing-convention-pages-router-\u534f\u5b9a",level:2},{value:"Special Files (\u7279\u6b8a\u6587\u4ef6)",id:"special-files-\u7279\u6b8a\u6587\u4ef6",level:3},{value:"Routes (\u8def\u7531)",id:"routes-\u8def\u7531",level:3},{value:"Folder convention (\u6587\u4ef6\u5939\u65b9\u5f0f)",id:"folder-convention-\u6587\u4ef6\u5939\u65b9\u5f0f",level:4},{value:"File convention(\u6587\u4ef6\u65b9\u5f0f)",id:"file-convention\u6587\u4ef6\u65b9\u5f0f",level:4},{value:"Dynamic Routes (\u52a8\u6001\u8def\u7531)",id:"dynamic-routes-\u52a8\u6001\u8def\u7531-1",level:3},{value:"Folder convention (\u6587\u4ef6\u5939\u65b9\u5f0f)",id:"folder-convention-\u6587\u4ef6\u5939\u65b9\u5f0f-1",level:4},{value:"File convention (\u6587\u4ef6\u65b9\u5f0f)",id:"file-convention-\u6587\u4ef6\u65b9\u5f0f",level:4}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["\u672c\u9875\u6982\u8ff0\u4e86 Next.js \u9879\u76ee\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u7ed3\u6784. \u5185\u5bb9\u5305\u62ec\u9876\u5c42\u6587\u4ef6\u548c\u6587\u4ef6\u5939, \u914d\u7f6e\u6587\u4ef6, ",(0,d.jsx)(s.code,{children:"app"})," \u76ee\u5f55\u548c ",(0,d.jsx)(s.code,{children:"pages"})," \u76ee\u5f55\u7684\u8def\u7531\u7ea6\u5b9a."]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"top-level-folders-\u9876\u5c42\u6587\u4ef6\u5939",children:"Top-level folders (\u9876\u5c42\u6587\u4ef6\u5939)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u5939\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"app"}),(0,d.jsx)(s.td,{children:"App router"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"pages"}),(0,d.jsx)(s.td,{children:"Pages Router"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"public"}),(0,d.jsx)(s.td,{children:"\u9759\u6001\u8d44\u6e90"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"src"}),(0,d.jsx)(s.td,{children:"\u53ef\u9009\u7684\u5e94\u7528\u7a0b\u5e8f\u6e90\u6587\u4ef6\u5939"})]})]})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h2,{id:"top-level-files-\u9876\u5c42\u6587\u4ef6",children:"Top-level files (\u9876\u5c42\u6587\u4ef6)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/next-config-js",children:"next.config.js"})}),(0,d.jsx)(s.td,{children:"Next.js \u7684\u914d\u7f6e\u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/getting-started/installation#manual-installation",children:"package.json"})}),(0,d.jsx)(s.td,{children:"\u9879\u76ee\u4f9d\u8d56\u548c\u811a\u672c"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation",children:"instrument.ts"})}),(0,d.jsx)(s.td,{children:"OpenTelemetry and Instrumentation file"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/middleware",children:"middleware.ts"})}),(0,d.jsx)(s.td,{children:"Next.js \u8bf7\u6c42\u4e2d\u95f4\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/environment-variables",children:".env"})}),(0,d.jsx)(s.td,{children:"\u73af\u5883\u53d8\u91cf"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/environment-variables",children:".env.local"})}),(0,d.jsx)(s.td,{children:"\u672c\u5730\u73af\u5883\u53d8\u91cf"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/environment-variables",children:".env.production"})}),(0,d.jsx)(s.td,{children:"\u751f\u4ea7\u73af\u5883\u53d8\u91cf"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/environment-variables",children:".env.development"})}),(0,d.jsx)(s.td,{children:"\u5f00\u53d1\u73af\u5883\u53d8\u91cf"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/eslint",children:".eslintrc.json"})}),(0,d.jsx)(s.td,{children:"ESLint \u7684\u914d\u7f6e\u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:".gitignore"}),(0,d.jsx)(s.td,{children:"Git \u6587\u4ef6, \u7528\u4ee5\u5ffd\u7565\u6587\u4ef6\u548c\u6587\u4ef6\u5939"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"next-env.d.ts"}),(0,d.jsx)(s.td,{children:"Next.js \u5185\u7684 Typescript \u58f0\u660e\u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"tsconfig.json"}),(0,d.jsx)(s.td,{children:"Typescript \u7684\u914d\u7f6e\u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"jsconfig.json"}),(0,d.jsx)(s.td,{children:"Javascript \u7684\u914d\u7f6e\u6587\u4ef6"})]})]})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h2,{id:"app-routing-conventions-app-routing-\u534f\u5b9a",children:[(0,d.jsx)(s.code,{children:"app"})," Routing Conventions (app Routing \u534f\u5b9a)"]}),"\n",(0,d.jsx)(s.h3,{id:"routing-files-\u8def\u7531\u6587\u4ef6",children:"Routing Files (\u8def\u7531\u6587\u4ef6)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/layout",children:"layout"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u5e03\u5c40"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/page",children:"page"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u9875\u9762"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/loading",children:"loading"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u52a0\u8f7d\u4e2d UI"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/not-found",children:"not-found"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u8def\u7531\u672a\u627e\u5230\u65f6\u7684 UI"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/error",children:"error"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u8def\u7531\u52a0\u8f7d\u9519\u8bef\u65f6\u7684 UI"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs",children:"global-error"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u5168\u5c40\u4e0b, \u8def\u7531\u52a0\u8f7d\u9519\u8bef\u65f6\u7684 UI"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route",children:"route"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})]}),(0,d.jsx)(s.td,{children:"API \u63a5\u53e3"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/template",children:"template"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u9884\u6e32\u67d3\u5e03\u5c40"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/default",children:"default"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".jsx"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u5e76\u884c\u8def\u7531\u7684 fallback page(\u5e94\u53d8\u9875\u9762)"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"nested-routes-\u5d4c\u5957\u8def\u7531",children:"Nested Routes (\u5d4c\u5957\u8def\u7531)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing#route-segments",children:"folder"})}),(0,d.jsx)(s.td,{children:"\u8def\u7531\u7247\u6bb5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing#nested-routes",children:"folder/folder"})}),(0,d.jsx)(s.td,{children:"\u5d4c\u5957\u7684\u8def\u7531\u7247\u6bb5"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"dynamic-routes-\u52a8\u6001\u8def\u7531",children:"Dynamic Routes (\u52a8\u6001\u8def\u7531)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention",children:"[folder]"})}),(0,d.jsx)(s.td,{children:"\u52a8\u6001\u8def\u7531\u7247\u6bb5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments",children:"[...folder]"})}),(0,d.jsx)(s.td,{children:"\u6355\u83b7\u6240\u6709\u7684\u8def\u7531\u6bb5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments",children:"[[...folder]]"})}),(0,d.jsx)(s.td,{children:"\u9009\u62e9\u6027\u7684\u6355\u83b7\u6240\u6709\u7684\u8def\u7531\u6bb5"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"routes-groups-and-private-folders-\u8def\u7531\u7ec4\u548c\u79c1\u6709\u6587\u4ef6\u5939",children:"Routes Groups and Private Folders (\u8def\u7531\u7ec4\u548c\u79c1\u6709\u6587\u4ef6\u5939)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-groups#convention",children:"(folder)"})}),(0,d.jsx)(s.td,{children:"\u4e0d\u5f71\u54cd\u8def\u7531\u7684\u8def\u7531\u7ec4"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders",children:"_folder"})}),(0,d.jsx)(s.td,{children:"\u53ef\u9009\u7684\u6587\u4ef6\u5939, \u6240\u6709\u7684\u5b50\u6587\u4ef6/\u6587\u4ef6\u5939\u90fd\u88ab\u8def\u7531\u6392\u9664\u5728\u5916"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"parallel-and-intercepted-routes-\u5e73\u884c\u8def\u7531\u548c\u62e6\u622a\u8def\u7531",children:"Parallel and Intercepted Routes (\u5e73\u884c\u8def\u7531\u548c\u62e6\u622a\u8def\u7531)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#convention",children:"@folder"})}),(0,d.jsx)(s.td,{children:"\u547d\u540d\u63d2\u69fd"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention",children:"(.)folder"})}),(0,d.jsx)(s.td,{children:"\u62e6\u622a\u540c\u4e00\u6c34\u5e73\u8def\u7531"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention",children:"(..)folder"})}),(0,d.jsx)(s.td,{children:"\u62e6\u622a\u4e0a\u4e00\u7ea7\u8def\u7531"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention",children:"(..)(..)folder"})}),(0,d.jsx)(s.td,{children:"\u62e6\u622a\u4e0a\u4e24\u7ea7\u8def\u7531"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention",children:"(...)folder"})}),(0,d.jsx)(s.td,{children:"\u7531\u6839\u8def\u7531\u5f00\u59cb\u62e6\u622a"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"metadata-file-convention-\u5143\u6587\u4ef6\u534f\u5b9a",children:"Metadata File Convention (\u5143\u6587\u4ef6\u534f\u5b9a)"}),"\n",(0,d.jsx)(s.h4,{id:"app-icons-\u5e94\u7528\u56fe\u6807",children:"App Icons (\u5e94\u7528\u56fe\u6807)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#favicon",children:"favicon"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:".ico"})}),(0,d.jsx)(s.td,{children:"Favicon \u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#icon",children:"icon"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".ico"})," | ",(0,d.jsx)(s.code,{children:".jpg"})," | ",(0,d.jsx)(s.code,{children:".jpeg"})," | ",(0,d.jsx)(s.code,{children:".png"})," | ",(0,d.jsx)(s.code,{children:".svg"})]}),(0,d.jsx)(s.td,{children:"App Icon \u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx",children:"icon"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u751f\u6210\u7684 App Icon \u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#apple-icon",children:"apple-icon"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".jpg"})," | ",(0,d.jsx)(s.code,{children:".jpeg"})," | ",(0,d.jsx)(s.code,{children:".png"})]}),(0,d.jsx)(s.td,{children:"Apple App"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx",children:"apple-icon"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u751f\u6210\u7684 Apple App Icon \u6587\u4ef6"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"open-graph-and-twitter-images",children:"Open Graph and Twitter Images"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#opengraph-image",children:"opengraph-image"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".jpg"})," | ",(0,d.jsx)(s.code,{children:".jpeg"})," | ",(0,d.jsx)(s.code,{children:".png"})," | ",(0,d.jsx)(s.code,{children:".gif"})]}),(0,d.jsx)(s.td,{children:"Open Graph image file"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx",children:"opengraph-image"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"Generated Open Graph image"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#twitter-image",children:"twitter-image"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".jpg"})," | ",(0,d.jsx)(s.code,{children:".jpeg"})," | ",(0,d.jsx)(s.code,{children:".png"})," | ",(0,d.jsx)(s.code,{children:".gif"})]}),(0,d.jsx)(s.td,{children:"Twitter \u56fe\u7247\u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx",children:"twitter-image"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u751f\u6210\u7684 Twitter \u56fe\u7247"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"seo",children:"SEO"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#static-sitemapxml",children:"sitemap"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:".xml"})}),(0,d.jsx)(s.td,{children:"Sitemap file"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generate-a-sitemap",children:"sitemap"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})]}),(0,d.jsx)(s.td,{children:"Generated Sitemap"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#static-robotstxt",children:"robots"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:".txt"})}),(0,d.jsx)(s.td,{children:"Robots file"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file",children:"robots"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})]}),(0,d.jsx)(s.td,{children:"Generated Robots file"})]})]})]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.h2,{id:"pages-routing-convention-pages-router-\u534f\u5b9a",children:[(0,d.jsx)(s.code,{children:"pages"})," Routing Convention (pages Router \u534f\u5b9a)"]}),"\n",(0,d.jsx)(s.h3,{id:"special-files-\u7279\u6b8a\u6587\u4ef6",children:"Special Files (\u7279\u6b8a\u6587\u4ef6)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6\u540d"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/custom-app",children:"_app"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u81ea\u5b9a\u4e49\u7684 App \u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/custom-document",children:"_document"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u81ea\u5b9a\u4e49\u7684 Document \u6587\u4ef6"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/custom-error#more-advanced-error-page-customizing",children:"_error"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u81ea\u5b9a\u4e49\u7684, \u9519\u8bef\u51fa\u73b0\u65f6\u9875\u9762"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/custom-error#404-page",children:"404"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"404 \u9519\u8bef\u51fa\u73b0\u65f6\u7684\u9875\u9762"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/custom-error#500-page",children:"500"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"500 \u9519\u8bef\u51fa\u73b0\u65f6\u7684\u9875\u9762"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"routes-\u8def\u7531",children:"Routes (\u8def\u7531)"}),"\n",(0,d.jsx)(s.h4,{id:"folder-convention-\u6587\u4ef6\u5939\u65b9\u5f0f",children:"Folder convention (\u6587\u4ef6\u5939\u65b9\u5f0f)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6/\u6587\u4ef6\u5939\u540d"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes",children:"index"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u4e3b\u9875"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes",children:"folder/index"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u5d4c\u5957\u9875\u9762"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"file-convention\u6587\u4ef6\u65b9\u5f0f",children:"File convention(\u6587\u4ef6\u65b9\u5f0f)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6/\u6587\u4ef6\u5939\u540d"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#index-routes",children:"index"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u4e3b\u9875"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts",children:"file"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u5d4c\u5957\u9875\u9762"})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"dynamic-routes-\u52a8\u6001\u8def\u7531-1",children:"Dynamic Routes (\u52a8\u6001\u8def\u7531)"}),"\n",(0,d.jsx)(s.h4,{id:"folder-convention-\u6587\u4ef6\u5939\u65b9\u5f0f-1",children:"Folder convention (\u6587\u4ef6\u5939\u65b9\u5f0f)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6/\u6587\u4ef6\u5939"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes",children:"[folder]/index"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u52a8\u6001\u8def\u7531\u7247\u6bb5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments",children:"[...folder]/index"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u6355\u83b7\u6240\u6709\u7684\u8def\u7531\u7247\u6bb5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments",children:"[[...folder]]/index"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u53ef\u9009\u7684, \u6355\u83b7\u6240\u6709\u7684\u8def\u7531\u7247\u6bb5"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"file-convention-\u6587\u4ef6\u65b9\u5f0f",children:"File convention (\u6587\u4ef6\u65b9\u5f0f)"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"\u6587\u4ef6/\u6587\u4ef6\u5939"}),(0,d.jsx)(s.th,{children:"\u540e\u7f00\u540d"}),(0,d.jsx)(s.th,{children:"\u7b80\u8ff0"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes",children:"[file]"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u52a8\u6001\u8def\u7531\u7247\u6bb5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments",children:"[...file]"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u6355\u83b7\u6240\u6709\u7684\u8def\u7531\u7247\u6bb5"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments",children:"[[...file]]"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:".js"})," | ",(0,d.jsx)(s.code,{children:".ts"})," | ",(0,d.jsx)(s.code,{children:".tsx"})]}),(0,d.jsx)(s.td,{children:"\u53ef\u9009\u7684, \u6355\u83b7\u6240\u6709\u7684\u8def\u7531\u7247\u6bb5"})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>i});var d=n(7294);const r={},t=d.createContext(r);function i(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);