"use strict";(self.webpackChunknextjs_cn_doc=self.webpackChunknextjs_cn_doc||[]).push([[2721],{1325:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(5893),r=s(1151);const i={title:"\u4e2d\u95f4\u4ef6",description:"https://nextjs.org/docs/app/building-your-application/routing/middleware"},d=void 0,o={id:"building-your-application/routing/middleware",title:"\u4e2d\u95f4\u4ef6",description:"https://nextjs.org/docs/app/building-your-application/routing/middleware",source:"@site/docs/02-building-your-application/01-routing/11-middleware.md",sourceDirName:"02-building-your-application/01-routing",slug:"/building-your-application/routing/middleware",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/middleware",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-building-your-application/01-routing/11-middleware.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\u4e2d\u95f4\u4ef6",description:"https://nextjs.org/docs/app/building-your-application/routing/middleware"},sidebar:"appRouter",previous:{title:"\u8def\u7531\u5904\u7406\u5668",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/route-handlers"},next:{title:"\u9879\u76ee\u7ed3\u6784\u548c\u6587\u4ef6\u4f4d\u7f6e",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/project-organization"}},l={},c=[{value:"Convention (\u6587\u4ef6\u540d\u534f\u5b9a)",id:"convention-\u6587\u4ef6\u540d\u534f\u5b9a",level:2},{value:"Example (\u793a\u4f8b)",id:"example-\u793a\u4f8b",level:2},{value:"Matching Paths (\u5339\u914d\u8def\u5f84)",id:"matching-paths-\u5339\u914d\u8def\u5f84",level:2},{value:"Matcher (\u5339\u914d\u5668)",id:"matcher-\u5339\u914d\u5668",level:3},{value:"Conditional Statements (\u6761\u4ef6\u8bed\u53e5)",id:"conditional-statements-\u6761\u4ef6\u8bed\u53e5",level:3},{value:"NextResponse",id:"nextresponse",level:2},{value:"Using Cookies (\u4f7f\u7528 Cookies)",id:"using-cookies-\u4f7f\u7528-cookies",level:2},{value:"Setting Headers (\u8bbe\u7f6e Headers)",id:"setting-headers-\u8bbe\u7f6e-headers",level:2},{value:"Producing a Response (\u751f\u6210\u4e00\u4e2a\u8fd4\u56de)",id:"producing-a-response-\u751f\u6210\u4e00\u4e2a\u8fd4\u56de",level:2},{value:"Advanced Middleware Flags (\u4e2d\u95f4\u4ef6\u9ad8\u7ea7\u6807\u5fd7\u4f4d)",id:"advanced-middleware-flags-\u4e2d\u95f4\u4ef6\u9ad8\u7ea7\u6807\u5fd7\u4f4d",level:2},{value:"Version History (\u7248\u672c\u5386\u53f2)",id:"version-history-\u7248\u672c\u5386\u53f2",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u4e2d\u95f4\u4ef6\u5141\u8bb8\u4f60\u5728\u8bf7\u6c42\u5b8c\u6210\u524d\u8fd0\u884c\u4ee3\u7801. \u7136\u540e, \u4f60\u53ef\u4ee5\u6839\u636e\u63a5\u6536\u5230\u7684\u8bf7\u6c42, \u901a\u8fc7\u91cd\u5199 / \u91cd\u5b9a\u5411 / \u4fee\u6539\u8bf7\u6c42 / \u4fee\u6539\u54cd\u5e94\u5934 / \u76f4\u63a5\u54cd\u5e94\u7b49\u65b9\u5f0f\u4fee\u6539\u8fd4\u56de."}),"\n",(0,t.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\u5728\u7f13\u5b58\u5185\u5bb9\u548c\u8def\u7531\u5339\u914d\u524d\u8fd0\u884c. \u8be6\u60c5\u8bf7\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths",children:"Matching Paths(\u8def\u5f84\u5339\u914d)"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"convention-\u6587\u4ef6\u540d\u534f\u5b9a",children:"Convention (\u6587\u4ef6\u540d\u534f\u5b9a)"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7\u5728\u4f60\u7684\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,t.jsx)(n.code,{children:"middleware.ts|js"})," \u6587\u4ef6\u6765\u5b9a\u4e49\u4e2d\u95f4\u4ef6. \u6bd4\u5982, \u4e0e ",(0,t.jsx)(n.code,{children:"pages(\u9875\u9762)"})," \u6216 ",(0,t.jsx)(n.code,{children:"app"})," \u5904\u4e8e\u540c\u4e00\u7ea7\u522b, \u6216\u5728 src \u5185(\u5982\u679c\u4f7f\u7528\u4e86 src \u76ee\u5f55\u7684\u8bdd)."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"example-\u793a\u4f8b",children:"Example (\u793a\u4f8b)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.ts"',children:'import { NextResponse } from "next/server";\nimport type { NextRequest } from "next/server";\n\n// This function can be marked `async` if using `await` inside\nexport function middleware(request: NextRequest) {\n  return NextResponse.redirect(new URL("/home", request.url));\n}\n\n// See "Matching Paths" below to learn more\nexport const config = {\n  matcher: "/about/:path*",\n};\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"matching-paths-\u5339\u914d\u8def\u5f84",children:"Matching Paths (\u5339\u914d\u8def\u5f84)"}),"\n",(0,t.jsx)(n.p,{children:"\u4e2d\u95f4\u4ef6\u4f1a\u88ab\u5d4c\u5165\u5230\u9879\u76ee\u4e2d\u7684\u6bcf\u4e00\u4e2a\u8def\u7531. \u4e00\u4e2a\u8def\u7531\u7684\u6267\u884c\u987a\u5e8f\u5982\u4e0b:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4ece ",(0,t.jsx)(n.code,{children:"next.config.js"})," \u4e2d\u83b7\u53d6 ",(0,t.jsx)(n.code,{children:"headers"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u4ece ",(0,t.jsx)(n.code,{children:"next.config.js"})," \u4e2d\u83b7\u53d6 ",(0,t.jsx)(n.code,{children:"redirects"})]}),"\n",(0,t.jsxs)(n.li,{children:["Middleware \u4e2d\u95f4\u4ef6( ",(0,t.jsx)(n.code,{children:"rewrites"}),", ",(0,t.jsx)(n.code,{children:"redirects"}),", \u7b49\u7b49)"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4ece ",(0,t.jsx)(n.code,{children:"next.config.js"})," \u4e2d\u83b7\u53d6 ",(0,t.jsx)(n.code,{children:"beforeFiles"})," (",(0,t.jsx)(n.code,{children:"rewrites"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["\u6587\u4ef6\u7cfb\u7edf\u8def\u7531( ",(0,t.jsx)(n.code,{children:"public/"}),", ",(0,t.jsx)(n.code,{children:"_next/static/"}),", ",(0,t.jsx)(n.code,{children:"pages/"}),", ",(0,t.jsx)(n.code,{children:"app/"}),", \u7b49\u7b49)"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4ece ",(0,t.jsx)(n.code,{children:"next.config.js"})," \u4e2d\u8bfb\u53d6 ",(0,t.jsx)(n.code,{children:"afterFiles"})," (",(0,t.jsx)(n.code,{children:"rewrites"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["\u52a8\u6001\u8def\u7531( ",(0,t.jsx)(n.code,{children:"/blog/[slug]"})," )"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4ece ",(0,t.jsx)(n.code,{children:"next.config.js"})," \u4e2d\u8bfb\u53d6 ",(0,t.jsx)(n.code,{children:"fallback"})," (",(0,t.jsx)(n.code,{children:"rewrites"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b9a\u4e49\u4e2d\u95f4\u4ef6\u8fd0\u884c\u5728\u6307\u5b9a\u8def\u5f84:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher",children:"Custom matcher config(\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u914d\u7f6e)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/middleware#conditional-statements",children:"Conditional statements(\u6761\u4ef6\u8bed\u53e5)"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"matcher-\u5339\u914d\u5668",children:"Matcher (\u5339\u914d\u5668)"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"matcher(\u5339\u914d\u5668)"})," \u8fc7\u6ee4\u6307\u5b9a\u8def\u5f84, \u4f7f\u4e2d\u95f4\u4ef6\u5728\u7279\u5b9a\u8def\u5f84\u4e0a\u8fd0\u884c."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.js"',children:'export const config = {\n  matcher: "/about/:path*",\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6570\u7ec4\u6765\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u8def\u5f84."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.js"',children:'export const config = {\n  matcher: ["/about/:path*", "/dashboard/:path*"],\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"matcher(\u5339\u914d\u5668)"})," \u914d\u7f6e\u652f\u6301\u5168\u90e8\u7684 regex, \u6240\u4ee5\u652f\u6301\u53cd\u5411\u67e5\u627e\u6216\u5b57\u7b26\u5339\u914d. \u8fd9\u91cc\u6709\u4e00\u4e2a\u53cd\u5411\u67e5\u627e\u5339\u914d\u9664\u7279\u5b9a\u8def\u5f84\u5916\u6240\u6709\u8def\u5f84\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.js"',children:'export const config = {\n  matcher: [\n    /*\n     * Match all request paths except for the ones starting with:\n     * - api (API routes)\n     * - _next/static (static files)\n     * - _next/image (image optimization files)\n     * - favicon.ico (favicon file)\n     */\n    "/((?!api|_next/static|_next/image|favicon.ico).*)",\n  ],\n};\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),": ",(0,t.jsx)(n.code,{children:"matcher"}),"(\u5339\u914d)\u7684\u503c\u5fc5\u987b\u662f\u5e38\u91cf, \u4ee5\u4fbf\u5728\u6784\u5efa\u65f6\u5bf9\u5176\u8fdb\u884c\u9759\u6001\u5206\u6790. \u53d8\u91cf\u7b49\u52a8\u6001\u503c\u5c06\u88ab\u5ffd\u7565."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u914d\u7f6e matchers(\u5339\u914d\u5668):"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5fc5\u987b\u4ee5 ",(0,t.jsx)(n.code,{children:"/"})," \u5f00\u5934"]}),"\n",(0,t.jsxs)(n.li,{children:["\u53ef\u5305\u542b\u547d\u540d\u53c2\u6570: ",(0,t.jsx)(n.code,{children:"/about/:path"})," \u53ef\u4ee5\u5339\u914d ",(0,t.jsx)(n.code,{children:"/about/a"})," \u548c ",(0,t.jsx)(n.code,{children:"/about/b"}),", \u4f46\u4e0d\u5305\u542b ",(0,t.jsx)(n.code,{children:"/about/a/c"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u53ef\u5bf9\u547d\u540d\u53c2\u6570\u4f7f\u7528\u4fee\u9970\u7b26(\u4ee5 ",(0,t.jsx)(n.code,{children:":"})," \u5f00\u5934): ",(0,t.jsx)(n.code,{children:"/about/:path*"})," \u53ef\u5339\u914d ",(0,t.jsx)(n.code,{children:"/about/a/b/c"}),", \u56e0\u4e3a ",(0,t.jsx)(n.code,{children:"\\*"})," \u8868\u793a\u96f6\u6216\u591a\u4e2a. ",(0,t.jsx)(n.code,{children:"?"})," \u8868\u793a 0 \u6216 1 \u4e2a, ",(0,t.jsx)(n.code,{children:"+"})," \u662f 1 \u6216\u66f4\u591a"]}),"\n",(0,t.jsxs)(n.li,{children:["\u53ef\u4ee5\u4f7f\u7528\u62ec\u53f7\u4e2d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f: ",(0,t.jsx)(n.code,{children:"/about/(._)"})," \u4e0e ",(0,t.jsx)(n.code,{children:"/about/:path_"})," \u4f5c\u7528\u76f8\u540c"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b ",(0,t.jsx)(n.a,{href:"https://github.com/pillarjs/path-to-regexp#path-to-regexp-1",children:"path-to-regexp(\u8def\u5f84\u6b63\u5219\u8868\u8fbe\u5f0f)"})," \u6587\u6863\u9605\u8bfb\u66f4\u591a\u7ec6\u8282."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),": \u4e3a\u4e86\u5411\u540e\u517c\u5bb9, Next.js \u4f1a\u59cb\u7ec8\u5c06 ",(0,t.jsx)(n.code,{children:"/public"})," \u89c6\u4e3a ",(0,t.jsx)(n.code,{children:"/public/index"}),". \u56e0\u6b64, matcher(\u5339\u914d\u5668) \u5185\u7684 ",(0,t.jsx)(n.code,{children:"/public/:path"})," \u5c06\u4e0e\u4e4b\u5339\u914d."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"conditional-statements-\u6761\u4ef6\u8bed\u53e5",children:"Conditional Statements (\u6761\u4ef6\u8bed\u53e5)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.js"',children:'import { NextResponse } from "next/server";\nimport type { NextRequest } from "next/server";\n\nexport function middleware(request: NextRequest) {\n  if (request.nextUrl.pathname.startsWith("/about")) {\n    return NextResponse.rewrite(new URL("/about-2", request.url));\n  }\n\n  if (request.nextUrl.pathname.startsWith("/dashboard")) {\n    return NextResponse.rewrite(new URL("/dashboard/user", request.url));\n  }\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"nextresponse",children:"NextResponse"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NextResponse"})," API \u5141\u8bb8\u4f60:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5c06\u5230\u6765\u7684\u8bf7\u6c42 ",(0,t.jsx)(n.code,{children:"redirect(\u91cd\u5b9a\u5411)"})," \u5230\u4e00\u4e2a\u4e0d\u540c\u7684 URL"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5bf9\u4e00\u4e2a\u7ed9\u5b9a\u7684 URL ",(0,t.jsx)(n.code,{children:"rewrite(\u91cd\u5199)"})," \u8fd4\u56de."]}),"\n",(0,t.jsxs)(n.li,{children:["\u4e3a API Routes(API \u8def\u7531), ",(0,t.jsx)(n.code,{children:"getServerSideProps"})," \u548c ",(0,t.jsx)(n.code,{children:"rewrite(\u91cd\u5199)"})," \u76ee\u7684\u5730, \u8bbe\u7f6e\u8bf7\u6c42\u6807\u5934"]}),"\n",(0,t.jsx)(n.li,{children:"\u8bbe\u7f6e\u8fd4\u56de\u7684 cookies"}),"\n",(0,t.jsx)(n.li,{children:"\u8bbe\u7f6e\u8fd4\u56de\u7684 headers"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u5728 Middleware(\u4e2d\u95f4\u4ef6) \u4e2d\u5236\u9020\u4e00\u4e2a\u8fd4\u56de, \u4f60\u53ef\u4ee5:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4e3a",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts",children:"Page(\u9875\u9762)"}),"\u6216 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers",children:"Route Handler(\u8def\u7531\u5904\u7406\u5668)"})," ",(0,t.jsx)(n.code,{children:"rewrite(\u91cd\u5199)"})," \u5b83\u4eec\u7684\u8fd4\u56de"]}),"\n",(0,t.jsxs)(n.li,{children:["\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"NextResponse"}),". \u67e5\u770b ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/middleware#producing-a-response",children:"Producing a Response(\u5236\u9020\u4e00\u4e2a\u8fd4\u56de)"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"using-cookies-\u4f7f\u7528-cookies",children:"Using Cookies (\u4f7f\u7528 Cookies)"}),"\n",(0,t.jsxs)(n.p,{children:["Cookies \u662f\u5e38\u89c1\u7684 Headers. \u5728 ",(0,t.jsx)(n.code,{children:"Request"})," \u4e0a, \u5b83\u4eec\u88ab\u5b58\u50a8\u5728 ",(0,t.jsx)(n.code,{children:"Cookie"})," \u5934\u4e0a. \u5728 ",(0,t.jsx)(n.code,{children:"Response"})," \u4e0a, \u5b83\u4eec\u5728 ",(0,t.jsx)(n.code,{children:"Set-Cookie"})," \u5934\u4e0a. Next.js \u63d0\u4f9b\u4e86 ",(0,t.jsx)(n.code,{children:"NextRequest"})," \u548c ",(0,t.jsx)(n.code,{children:"NextResponse"})," \u6765\u83b7\u53d6\u548c\u64cd\u63a7\u8fd9\u4e9b cookies."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5bf9\u4e8e\u4f20\u5165\u7684\u8bf7\u6c42, ",(0,t.jsx)(n.code,{children:"cookies"})," \u6709\u4ee5\u4e0b\u65b9\u6cd5: ",(0,t.jsx)(n.code,{children:"get"}),", ",(0,t.jsx)(n.code,{children:"getAll"}),", ",(0,t.jsx)(n.code,{children:"set"})," \u548c ",(0,t.jsx)(n.code,{children:"delete"})," cookies. \u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"has"})," \u65b9\u6cd5\u6765\u68c0\u67e5\u4e00\u4e2a cookie \u662f\u5426\u5b58\u5728, \u6216\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"clear"})," \u65b9\u6cd5\u79fb\u9664\u6240\u6709 cookies."]}),"\n",(0,t.jsxs)(n.li,{children:["\u5bf9\u4e8e\u4f20\u51fa\u7684\u8fd4\u56de, cookie \u6709\u4ee5\u4e0b\u65b9\u6cd5: ",(0,t.jsx)(n.code,{children:"get"}),", ",(0,t.jsx)(n.code,{children:"getAll"}),", ",(0,t.jsx)(n.code,{children:"set"})," \u548c ",(0,t.jsx)(n.code,{children:"delete"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.ts"',children:'import { NextResponse } from "next/server";\nimport type { NextRequest } from "next/server";\n\nexport function middleware(request: NextRequest) {\n  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request\n  // Getting cookies from the request using the `RequestCookies` API\n  let cookie = request.cookies.get("nextjs");\n  console.log(cookie); // => { name: \'nextjs\', value: \'fast\', Path: \'/\' }\n  const allCookies = request.cookies.getAll();\n  console.log(allCookies); // => [{ name: \'nextjs\', value: \'fast\' }]\n\n  request.cookies.has("nextjs"); // => true\n  request.cookies.delete("nextjs");\n  request.cookies.has("nextjs"); // => false\n\n  // Setting cookies on the response using the `ResponseCookies` API\n  const response = NextResponse.next();\n  response.cookies.set("vercel", "fast");\n  response.cookies.set({\n    name: "vercel",\n    value: "fast",\n    path: "/",\n  });\n  cookie = response.cookies.get("vercel");\n  console.log(cookie); // => { name: \'vercel\', value: \'fast\', Path: \'/\' }\n  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.\n\n  return response;\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"setting-headers-\u8bbe\u7f6e-headers",children:"Setting Headers (\u8bbe\u7f6e Headers)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"NextResponse"})," API \u6765\u8bbe\u7f6e\u8bf7\u6c42\u548c\u8fd4\u56de\u7684\u5934(\u8bbe\u7f6e\u8bf7\u6c42\u5934\u4ece Next.js v13.0.0 \u5f00\u59cb\u53ef\u7528)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.ts"',children:'import { NextResponse } from "next/server";\nimport type { NextRequest } from "next/server";\n\nexport function middleware(request: NextRequest) {\n  // Clone the request headers and set a new header `x-hello-from-middleware1`\n  const requestHeaders = new Headers(request.headers);\n  requestHeaders.set("x-hello-from-middleware1", "hello");\n\n  // You can also set request headers in NextResponse.rewrite\n  const response = NextResponse.next({\n    request: {\n      // New request headers\n      headers: requestHeaders,\n    },\n  });\n\n  // Set a new response header `x-hello-from-middleware2`\n  response.headers.set("x-hello-from-middleware2", "hello");\n  return response;\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),": \u907f\u514d\u8bbe\u7f6e\u8fc7\u5927\u7684\u5934, \u56e0\u4e3a\u8fd9\u4f1a\u9020\u6210 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/HTTP/Status/431",children:"431 Request Header Fields Too Large(431 \u8bf7\u6c42\u5934\u5b57\u6bb5\u8fc7\u5927)"})," \u9519\u8bef, \u5177\u4f53\u53d6\u51b3\u4e8e\u540e\u7aef\u7f51\u7edc\u670d\u52a1\u5668\u7684\u914d\u7f6e."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"producing-a-response-\u751f\u6210\u4e00\u4e2a\u8fd4\u56de",children:"Producing a Response (\u751f\u6210\u4e00\u4e2a\u8fd4\u56de)"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"Response"})," \u6216 ",(0,t.jsx)(n.code,{children:"NextResponse"})," \u5b9e\u4f8b\u76f4\u63a5\u4ece\u4e2d\u95f4\u4ef6\u4f5c\u51fa\u54cd\u5e94. (\u8be5\u65b9\u6cd5\u4ece ",(0,t.jsx)(n.a,{href:"https://nextjs.org/blog/next-13-1#nextjs-advanced-middleware",children:"Next.js v13.1.0"}),"\u5f00\u59cb\u53ef\u7528)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.ts"',children:'import { NextRequest } from "next/server";\nimport { isAuthenticated } from "@lib/auth";\n\n// Limit the middleware to paths starting with `/api/`\nexport const config = {\n  matcher: "/api/:function*",\n};\n\nexport function middleware(request: NextRequest) {\n  // Call our authentication function to check the request\n  if (!isAuthenticated(request)) {\n    // Respond with JSON indicating an error message\n    return Response.json(\n      { success: false, message: "authentication failed" },\n      { status: 401 }\n    );\n  }\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"advanced-middleware-flags-\u4e2d\u95f4\u4ef6\u9ad8\u7ea7\u6807\u5fd7\u4f4d",children:"Advanced Middleware Flags (\u4e2d\u95f4\u4ef6\u9ad8\u7ea7\u6807\u5fd7\u4f4d)"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Next.js ",(0,t.jsx)(n.code,{children:"v13.1"})," \u4e2d, ",(0,t.jsx)(n.code,{children:"skipMiddlewareUrlNormalize"})," \u548c ",(0,t.jsx)(n.code,{children:"skipTrailingSlashRedirect"})," \u6807\u8bb0\u88ab\u5f15\u5165\u4e2d\u95f4\u4ef6\u4e2d, \u7528\u6765\u5904\u7406\u9ad8\u7ea7\u4f7f\u7528\u6848\u4f8b."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"skipTrailingSlashRedirect"})," \u7981\u7528 Next.js \u9ed8\u8ba4\u7684\u6dfb\u52a0\u6216\u5220\u9664\u5c3e\u90e8\u659c\u7ebf\u7684\u91cd\u5b9a\u5411, \u5141\u8bb8\u5728\u4e2d\u95f4\u4ef6\u5185\u90e8\u8fdb\u884c\u81ea\u5b9a\u4e49\u5904\u7406, \u8fd9\u6837\u5c31\u53ef\u4ee5\u4e3a\u67d0\u4e9b\u8def\u5f84\u4fdd\u7559\u5c3e\u90e8\u659c\u7ebf, \u800c\u4e0d\u4e3a\u5176\u4ed6\u8def\u5f84\u4fdd\u7559\u5c3e\u90e8\u659c\u7ebf, \u4ece\u800c\u7b80\u5316\u589e\u91cf\u8fc1\u79fb."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="next.config.js"',children:"module.exports = {\n  skipTrailingSlashRedirect: true,\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.js"',children:'const legacyPrefixes = ["/docs", "/blog"];\n\nexport default async function middleware(req) {\n  const { pathname } = req.nextUrl;\n\n  if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {\n    return NextResponse.next();\n  }\n\n  // apply trailing slash handling\n  if (\n    !pathname.endsWith("/") &&\n    !pathname.match(/((?!\\.well-known(?:\\/.*)?)(?:[^/]+\\/)*[^/]+\\.\\w+)/)\n  ) {\n    req.nextUrl.pathname += "/";\n    return NextResponse.redirect(req.nextUrl);\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"skipMiddlewareUrlNormalize"})," \u7981\u7528 Next.js \u4e3a\u5904\u7406\u76f4\u63a5\u8bbf\u95ee\u548c\u5ba2\u6237\u7aef\u8f6c\u6362\u800c\u8fdb\u884c\u7684 URL \u89c4\u8303\u5316. \u5728\u67d0\u4e9b\u9ad8\u7ea7\u60c5\u51b5\u4e0b, \u4f60\u9700\u8981\u4f7f\u7528\u539f\u59cb URL \u8fdb\u884c\u5b8c\u5168\u63a7\u5236, \u901a\u8fc7\u8be5\u9009\u9879\u53ef\u4ee5\u89e3\u9501."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="next.config.js"',children:"module.exports = {\n  skipMiddlewareUrlNormalize: true,\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="middleware.js"',children:"export default async function middleware(req) {\n  const { pathname } = req.nextUrl;\n\n  // GET /_next/data/build-id/hello.json\n\n  console.log(pathname);\n  // with the flag this now /_next/data/build-id/hello.json\n  // without the flag this would be normalized to /hello\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"version-history-\u7248\u672c\u5386\u53f2",children:"Version History (\u7248\u672c\u5386\u53f2)"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version (\u7248\u672c)"}),(0,t.jsx)(n.th,{children:"Changes (\u53d8\u5316)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v13.1.0"})}),(0,t.jsx)(n.td,{children:"\u589e\u52a0 Middleware(\u4e2d\u95f4\u4ef6) \u6807\u5fd7"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v13.0.0"})}),(0,t.jsx)(n.td,{children:"Middleware(\u4e2d\u95f4\u4ef6) \u53ef\u4ee5\u4fee\u6539\u8bf7\u6c42\u5934, \u8fd4\u56de\u5934, \u53d1\u9001\u8fd4\u56de"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v12.2.0"})}),(0,t.jsxs)(n.td,{children:["\u4e2d\u95f4\u4ef6\u662f\u7a33\u5b9a\u7684, \u8bf7\u67e5\u770b",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/messages/middleware-upgrade-guide",children:"upgrade guide(\u5347\u7ea7\u6307\u5357)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v12.0.9"})}),(0,t.jsxs)(n.td,{children:["\u5728 Edge \u8fd0\u884c\u65f6, \u5f3a\u5236\u4f7f\u7528\u7edd\u5bf9 URLs ",(0,t.jsx)(n.a,{href:"https://github.com/vercel/next.js/pull/33410",children:"PR"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"v12.1.0"})}),(0,t.jsx)(n.td,{children:"\u589e\u52a0 Middleware Beta(\u4e2d\u95f4\u4ef6\u6d4b\u8bd5\u7248)"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>d});var t=s(7294);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);