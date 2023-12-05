"use strict";(self.webpackChunknextjs_cn_doc=self.webpackChunknextjs_cn_doc||[]).push([[516],{1559:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=s(5893),r=s(1151);const o={title:"\u8def\u7531\u5904\u7406\u5668",description:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers"},i=void 0,a={id:"building-your-application/routing/route-handlers",title:"\u8def\u7531\u5904\u7406\u5668",description:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers",source:"@site/docs/02-building-your-application/01-routing/10-route-handlers.md",sourceDirName:"02-building-your-application/01-routing",slug:"/building-your-application/routing/route-handlers",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/route-handlers",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-building-your-application/01-routing/10-route-handlers.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u8def\u7531\u5904\u7406\u5668",description:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers"},sidebar:"appRouter",previous:{title:"\u62e6\u622a\u8def\u7531",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/intercepting-routes"},next:{title:"\u4e2d\u95f4\u4ef6",permalink:"/nextjs-doc-cn-web/docs/building-your-application/routing/middleware"}},c={},d=[{value:"Convention (\u6587\u4ef6\u540d\u534f\u5b9a)",id:"convention-\u6587\u4ef6\u540d\u534f\u5b9a",level:2},{value:"Supported HTTP Methods (\u652f\u6301\u7684 HTTP \u65b9\u6cd5)",id:"supported-http-methods-\u652f\u6301\u7684-http-\u65b9\u6cd5",level:3},{value:"Extended <code>NextRequest</code> and <code>NextResponse</code> APIs (\u88ab\u6269\u5c55\u7684 <code>NextRequest</code> \u548c <code>NextResponse</code> API)",id:"extended-nextrequest-and-nextresponse-apis-\u88ab\u6269\u5c55\u7684-nextrequest-\u548c-nextresponse-api",level:3},{value:"Behavior (\u884c\u4e3a)",id:"behavior-\u884c\u4e3a",level:2},{value:"Caching (\u7f13\u5b58)",id:"caching-\u7f13\u5b58",level:3},{value:"Opting out of caching (\u9000\u51fa\u7f13\u5b58)",id:"opting-out-of-caching-\u9000\u51fa\u7f13\u5b58",level:3},{value:"Route Resolution (\u8def\u7531\u89e3\u6790)",id:"route-resolution-\u8def\u7531\u89e3\u6790",level:3},{value:"Examples (\u793a\u4f8b)",id:"examples-\u793a\u4f8b",level:2},{value:"Revalidating Cached Data (\u91cd\u65b0\u9a8c\u8bc1\u7f13\u5b58\u6570\u636e)",id:"revalidating-cached-data-\u91cd\u65b0\u9a8c\u8bc1\u7f13\u5b58\u6570\u636e",level:3},{value:"Dynamic Functions (\u52a8\u6001\u51fd\u6570)",id:"dynamic-functions-\u52a8\u6001\u51fd\u6570",level:3},{value:"Cookies",id:"cookies",level:4},{value:"Headers",id:"headers",level:4},{value:"Redirects (\u91cd\u5b9a\u5411)",id:"redirects-\u91cd\u5b9a\u5411",level:3},{value:"Dynamic Routes Segments (\u52a8\u6001\u8def\u7531\u6bb5)",id:"dynamic-routes-segments-\u52a8\u6001\u8def\u7531\u6bb5",level:3},{value:"URL Query Params (URL Query \u53c2\u6570)",id:"url-query-params-url-query-\u53c2\u6570",level:3},{value:"Streaming(\u6d41)",id:"streaming\u6d41",level:3},{value:"Request Body (\u8bf7\u6c42\u4f53)",id:"request-body-\u8bf7\u6c42\u4f53",level:3},{value:"Request Body FormData (\u8bf7\u6c42\u4f53\u4e2d\u7684 FormData)",id:"request-body-formdata-\u8bf7\u6c42\u4f53\u4e2d\u7684-formdata",level:3},{value:"CORS (\u8de8\u57df)",id:"cors-\u8de8\u57df",level:3},{value:"Edge and Node.js Runtimes (Edge \u548c Node.js \u8fd0\u884c\u73af\u5883)",id:"edge-and-nodejs-runtimes-edge-\u548c-nodejs-\u8fd0\u884c\u73af\u5883",level:3},{value:"Non-UI Response (\u975e UI \u76f8\u5173\u7684\u8fd4\u56de)",id:"non-ui-response-\u975e-ui-\u76f8\u5173\u7684\u8fd4\u56de",level:3},{value:"Segment Config Options (\u6bb5\u914d\u7f6e\u9009\u9879)",id:"segment-config-options-\u6bb5\u914d\u7f6e\u9009\u9879",level:3},{value:"API Reference(API \u6587\u6863)",id:"api-referenceapi-\u6587\u6863",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u5141\u8bb8\u4f60\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/API/Request",children:"Web Request"})," \u548c ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/API/Response",children:"Web Response"})," API \u4e3a\u4e00\u4e2a\u7279\u5b9a\u7684\u8def\u7531\u521b\u5efa\u81ea\u5b9a\u4e49\u8bf7\u6c42\u5904\u7406\u7a0b\u5e8f."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-special-file.png&w=1920&q=75&dpl=dpl_6jgZkA1aPHMzMLgPhXqA9RmLmMXZ",alt:"route_handlers_1"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),": Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u53ea\u80fd\u5728 ",(0,t.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u5185\u5141\u8bb8\u88ab\u4f7f\u7528. \u5b83\u548c ",(0,t.jsx)(n.code,{children:"pages"})," \u76ee\u5f55\u5185\u7684 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/pages/building-your-application/routing/api-routes",children:"API Routes(API \u8def\u7531)"})," \u662f\u540c\u4e00\u4e2a\u4e1c\u897f, \u6240\u4ee5\u4f60\u4e0d\u9700\u8981\u540c\u65f6\u4f7f\u7528 API Routes(API \u8def\u7531) \u548c Route Handler(\u8def\u7531\u5904\u7406\u5668)."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"convention-\u6587\u4ef6\u540d\u534f\u5b9a",children:"Convention (\u6587\u4ef6\u540d\u534f\u5b9a)"}),"\n",(0,t.jsxs)(n.p,{children:["\u901a\u8fc7\u5728 ",(0,t.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u5185\u5b9a\u4e49 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route",children:(0,t.jsx)(n.code,{children:"route.js|ts"})})," \u6587\u4ef6\u6765\u4f7f\u7528 Route Handlers(\u8def\u7531\u5904\u7406\u5668)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/route.ts"',children:"export async function GET(request: Request) {}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"app"})," \u76ee\u5f55\u4e0b\u5d4c\u5957, \u4e0e ",(0,t.jsx)(n.code,{children:"page.js"})," \u548c ",(0,t.jsx)(n.code,{children:"layout.js"})," \u76f8\u4f3c. \u4f46 ",(0,t.jsx)(n.code,{children:"route.js"})," \u6587\u4ef6\u4e0d\u80fd\u5b58\u5728\u4e8e\u4e0e ",(0,t.jsx)(n.code,{children:"page.js"})," \u540c\u4e00\u8def\u7531\u6bb5\u5c42\u7ea7\u7684\u6587\u4ef6\u5939\u4e2d."]}),"\n",(0,t.jsx)(n.h3,{id:"supported-http-methods-\u652f\u6301\u7684-http-\u65b9\u6cd5",children:"Supported HTTP Methods (\u652f\u6301\u7684 HTTP \u65b9\u6cd5)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/HTTP/Methods",children:"HTTP methods(Http \u65b9\u6cd5)"})," \u662f\u88ab\u652f\u6301\u7684: ",(0,t.jsx)(n.code,{children:"GET"}),", ",(0,t.jsx)(n.code,{children:"POST"}),", ",(0,t.jsx)(n.code,{children:"PUT"}),", ",(0,t.jsx)(n.code,{children:"PATCH"}),", ",(0,t.jsx)(n.code,{children:"DELETE"}),", ",(0,t.jsx)(n.code,{children:"HEAD"}),", ",(0,t.jsx)(n.code,{children:"OPTIONS"}),". \u5982\u679c\u88ab\u4e00\u4e2a\u4e0d\u652f\u6301\u7684\u65b9\u6cd5\u8c03\u7528, Next.js \u4f1a\u8fd4\u56de ",(0,t.jsx)(n.code,{children:"405 Method Not Allowed"})," \u8fd4\u56de."]}),"\n",(0,t.jsxs)(n.h3,{id:"extended-nextrequest-and-nextresponse-apis-\u88ab\u6269\u5c55\u7684-nextrequest-\u548c-nextresponse-api",children:["Extended ",(0,t.jsx)(n.code,{children:"NextRequest"})," and ",(0,t.jsx)(n.code,{children:"NextResponse"})," APIs (\u88ab\u6269\u5c55\u7684 ",(0,t.jsx)(n.code,{children:"NextRequest"})," \u548c ",(0,t.jsx)(n.code,{children:"NextResponse"})," API)"]}),"\n",(0,t.jsxs)(n.p,{children:["\u9664\u4e86\u652f\u6301\u539f\u751f\u7684 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/API/Request",children:"Request"})," \u548c ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/API/Response",children:"Response"})," \u5916, Next.js \u8fd8\u6269\u5c55\u4e86\u5b83\u4eec, \u53d8\u4e3a\u4e86 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/next-request",children:"NextRequest"})," \u548c ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/next-response",children:"NextResponse"}),", \u4ee5\u63d0\u9ad8\u5bf9\u9ad8\u7ea7\u7528\u4f8b\u7684\u4fbf\u5229\u4f7f\u7528."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"behavior-\u884c\u4e3a",children:"Behavior (\u884c\u4e3a)"}),"\n",(0,t.jsx)(n.h3,{id:"caching-\u7f13\u5b58",children:"Caching (\u7f13\u5b58)"}),"\n",(0,t.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"GET"})," \u65b9\u6cd5\u8bf7\u6c42 Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u65f6, \u5176 ",(0,t.jsx)(n.code,{children:"Response"})," \u5bf9\u8c61\u4f1a\u88ab\u7f13\u5b58."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/items/route.ts"',children:'export async function GET() {\n  const res = await fetch("https://data.mongodb-api.com/...", {\n    headers: {\n      "Content-Type": "application/json",\n      "API-Key": process.env.DATA_API_KEY,\n    },\n  });\n  const data = await res.json();\n\n  return Response.json({ data });\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Typescript \u8b66\u544a"}),": ",(0,t.jsx)(n.code,{children:"Response.json()"})," \u4ece Typescript 5.2 \u540e\u5f00\u59cb\u624d\u80fd\u4f7f\u7528. \u5982\u679c\u4f60\u4f7f\u7528\u4e86\u66f4\u4f4e\u7248\u672c\u7684 Typescript, \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/next-response#json",children:(0,t.jsx)(n.code,{children:"NextResponse.json()"})})," \u6765\u5b9a\u4e49\u54cd\u5e94."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"opting-out-of-caching-\u9000\u51fa\u7f13\u5b58",children:"Opting out of caching (\u9000\u51fa\u7f13\u5b58)"}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u6765\u4e0d\u4f7f\u7528\u7f13\u5b58:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"GET"})," \u65b9\u6cd5\u5185\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61."]}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u5176\u4ed6 HTTP \u65b9\u6cd5."}),"\n",(0,t.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-functions",children:"Dynamic Functions(\u52a8\u6001\u51fd\u6570)"}),", \u50cf ",(0,t.jsx)(n.code,{children:"cookies"})," \u548c ",(0,t.jsx)(n.code,{children:"headers"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["\u901a\u8fc7",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/route-handlers#segment-config-options",children:"Segment Config Options(\u6bb5\u914d\u7f6e\u9009\u9879)"})," \u624b\u52a8\u6307\u5b9a\u52a8\u6001\u6a21\u5f0f."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6bd4\u5982:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/products/api/route.ts"',children:'export async function GET(request: Request) {\n  const { searchParams } = new URL(request.url);\n  const id = searchParams.get("id");\n  const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {\n    headers: {\n      "Content-Type": "application/json",\n      "API-Key": process.env.DATA_API_KEY,\n    },\n  });\n  const product = await res.json();\n\n  return Response.json({ product });\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53c8\u6bd4\u5982, ",(0,t.jsx)(n.code,{children:"POST"})," \u65b9\u6cd5\u4f1a\u5bfc\u81f4\u8be5\u8def\u7531\u5904\u7406\u5668\u88ab\u8ba4\u4e3a\u662f\u52a8\u6001\u7684."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/items/route.ts"',children:'export async function POST() {\n  const res = await fetch("https://data.mongodb-api.com/...", {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json",\n      "API-Key": process.env.DATA_API_KEY,\n    },\n    body: JSON.stringify({ time: new Date().toISOString() }),\n  });\n\n  const data = await res.json();\n\n  return Response.json(data);\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f"}),": \u4e0e API Routes(API \u8def\u7531) \u4e00\u6837, \u8def\u7531\u5904\u7406\u5668\u4e5f\u53ef\u7528\u4e8e\u5904\u7406\u8868\u5355\u63d0\u4ea4\u7b49\u60c5\u51b5. \u6211\u4eec\u6b63\u5728\u5f00\u53d1\u4e00\u79cd\u4e0e React \u6df1\u5ea6\u7ed3\u5408\u7684, \u7528\u4e8e",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations",children:"handling forms and mutations(\u5904\u7406\u8868\u5355\u548c\u7a81\u53d8)"}),"\u7684\u65b0\u62bd\u8c61."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"route-resolution-\u8def\u7531\u89e3\u6790",children:"Route Resolution (\u8def\u7531\u89e3\u6790)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u8ba4\u4e3a\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"route(\u8def\u7531)"})," \u662f\u6700\u5e95\u5c42\u7ea7\u7684\u539f\u59cb\u8def\u7531."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5b83\u4eec\u4e0d\u4f1a\u50cf ",(0,t.jsx)(n.code,{children:"page"})," \u4e00\u6837\u53c2\u4e0e\u5230 layouts(\u5e03\u5c40) \u548c client-side navigations(\u5ba2\u6237\u7aef\u5bfc\u822a)."]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"page.js"})," \u7684\u76ee\u5f55\u4e0b\u4e0d\u80fd\u6709 ",(0,t.jsx)(n.code,{children:"route.js"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Page(\u9875\u9762)"}),(0,t.jsx)(n.th,{children:"Route(\u8def\u7531)"}),(0,t.jsx)(n.th,{children:"Result(\u7ed3\u679c)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/page.js"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/route.js"})}),(0,t.jsx)(n.td,{children:"Conflict"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/page.js"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/api/route.js"})}),(0,t.jsx)(n.td,{children:"Valid"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/[user]/page.js"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/api/route.js"})}),(0,t.jsx)(n.td,{children:"Valid"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4efb\u4e00 ",(0,t.jsx)(n.code,{children:"route.js"})," \u6216 ",(0,t.jsx)(n.code,{children:"page.js"})," \u6587\u4ef6\u90fd\u4f1a\u63a5\u7ba1\u8be5\u8def\u7531\u7684\u6240\u6709 HTTP \u52a8\u4f5c."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/page.js"',children:"export default function Page() {\n  return <h1>Hello, Next.js!</h1>;\n}\n\n// \u274c Conflict\n// `app/route.js`\nexport async function POST(request) {}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples-\u793a\u4f8b",children:"Examples (\u793a\u4f8b)"}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u5c06\u4f1a\u5411\u4f60\u5c55\u793a\u600e\u4e48\u5c06 Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u4e0e\u5176\u4ed6 Next.js API \u548c Next.js \u529f\u80fd\u76f8\u7ed3\u5408."}),"\n",(0,t.jsx)(n.h3,{id:"revalidating-cached-data-\u91cd\u65b0\u9a8c\u8bc1\u7f13\u5b58\u6570\u636e",children:"Revalidating Cached Data (\u91cd\u65b0\u9a8c\u8bc1\u7f13\u5b58\u6570\u636e)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data",children:(0,t.jsx)(n.code,{children:"next.revalidate"})})," \u9009\u9879\u6765 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data",children:"revalidate cached data (\u91cd\u65b0\u9a8c\u8bc1\u7f13\u5b58\u6570\u636e)"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/items/route.ts"',children:'export async function GET() {\n  const res = await fetch("https://data.mongodb-api.com/...", {\n    next: { revalidate: 60 }, // Revalidate every 60 seconds\n  });\n  const data = await res.json();\n\n  return Response.json(data);\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5907\u9009\u7684, \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsxs)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate",children:[(0,t.jsx)(n.code,{children:"revalidate"})," Segment config option(\u6bb5\u63a7\u5236\u9009\u9879)"]}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export const revalidate = 60;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dynamic-functions-\u52a8\u6001\u51fd\u6570",children:"Dynamic Functions (\u52a8\u6001\u51fd\u6570)"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Next.js \u4e2d, Route Handlers(\u8def\u7531\u5904\u7406\u5668)\u53ef\u4ee5\u4e0e\u52a8\u6001\u51fd\u6570\u4e00\u8d77\u4f7f\u7528, \u50cf ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/cookies",children:(0,t.jsx)(n.code,{children:"cookies"})})," \u548c ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/headers",children:(0,t.jsx)(n.code,{children:"headers"})}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"cookies",children:"Cookies"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4ece ",(0,t.jsx)(n.code,{children:"next/headers"})," \u5305\u4e2d\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/cookies",children:(0,t.jsx)(n.code,{children:"cookies"})})," \u8bfb\u53d6 cookies. \u8be5\u670d\u52a1\u5668\u51fd\u6570\u53ef\u4ee5\u5728 Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u4e2d\u76f4\u63a5\u88ab\u8c03\u7528, \u4e5f\u53ef\u4ee5\u5d4c\u5957\u5728\u5176\u4ed6\u51fd\u6570\u4e2d."]}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5 ",(0,t.jsx)(n.code,{children:"cookies"})," \u5b9e\u4f8b\u662f\u53ea\u8bfb\u7684. \u5982\u679c\u8981\u8bbe\u7f6e cookies, \u4f60\u53ef\u4ee5\u5728\u8fd4\u56de\u4e2d, \u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,t.jsx)(n.code,{children:"Response"})," \u5e76\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie",children:(0,t.jsx)(n.code,{children:"Set-Cookie"})})," \u5934."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/route.ts"',children:'import { cookies } from "next/headers";\n\nexport async function GET(request: Request) {\n  const cookieStore = cookies();\n  const token = cookieStore.get("token");\n\n  return new Response("Hello, Next.js!", {\n    status: 200,\n    headers: { "Set-Cookie": `token=${token.value}` },\n  });\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5907\u9009\u7684, \u4f60\u4e5f\u53ef\u4ee5\u5728\u5e95\u5c42 Web API \u7684\u57fa\u7840\u4e0a\u4f7f\u7528\u62bd\u8c61\u65b9\u6cd5\u6765\u8bfb\u53d6 cookie(",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/next-request",children:(0,t.jsx)(n.code,{children:"NextRequest"})}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/route.ts"',children:'import { type NextRequest } from "next/server";\n\nexport async function GET(request: NextRequest) {\n  const token = request.cookies.get("token");\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"headers",children:"Headers"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4ece ",(0,t.jsx)(n.code,{children:"next/headers"})," \u5305\u7684 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/headers",children:(0,t.jsx)(n.code,{children:"headers"})})," \u65b9\u6cd5\u4e2d\u8bfb\u53d6 headers. \u8be5\u670d\u52a1\u5668\u51fd\u6570\u53ef\u4ee5\u5728 Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u4e2d\u76f4\u63a5\u88ab\u8c03\u7528, \u4e5f\u53ef\u4ee5\u5d4c\u5957\u5728\u5176\u4ed6\u51fd\u6570\u4e2d."]}),"\n",(0,t.jsxs)(n.p,{children:["\u8be5 ",(0,t.jsx)(n.code,{children:"headers"})," \u5b9e\u4f8b\u662f\u53ea\u8bfb\u7684. \u5982\u679c\u8981\u8bbe\u7f6e headers, \u4f60\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.code,{children:"Response"})," \u4e2d\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,t.jsx)(n.code,{children:"headers"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/route.ts"',children:'import { headers } from "next/headers";\n\nexport async function GET(request: Request) {\n  const headersList = headers();\n  const referer = headersList.get("referer");\n\n  return new Response("Hello, Next.js!", {\n    status: 200,\n    headers: { referer: referer },\n  });\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5907\u9009\u7684, \u4f60\u4e5f\u53ef\u4ee5\u5728\u5e95\u5c42 Web API \u7684\u57fa\u7840\u4e0a\u4f7f\u7528\u62bd\u8c61\u65b9\u6cd5\u6765\u8bfb\u53d6 headers(",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/next-request",children:(0,t.jsx)(n.code,{children:"NextRequest"})}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/route.ts"',children:'import { type NextRequest } from "next/server";\n\nexport async function GET(request: NextRequest) {\n  const requestHeaders = new Headers(request.headers);\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"redirects-\u91cd\u5b9a\u5411",children:"Redirects (\u91cd\u5b9a\u5411)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/route.ts"',children:'import { redirect } from "next/navigation";\n\nexport async function GET(request: Request) {\n  redirect("https://nextjs.org/");\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dynamic-routes-segments-\u52a8\u6001\u8def\u7531\u6bb5",children:"Dynamic Routes Segments (\u52a8\u6001\u8def\u7531\u6bb5)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u5efa\u8bae\u60a8\u9605\u8bfb\u5b8c ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/defining-routes",children:"Defining Routes(\u5b9a\u4e49\u8def\u7531)"})," \u540e\u518d\u7ee7\u7eed\u9605\u8bfb."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",children:"Dynamic Segments(\u52a8\u6001\u6bb5)"})," \u6765\u6839\u636e\u52a8\u6001\u7684\u6570\u636e\u521b\u5efa\u8bf7\u6c42\u5904\u7406\u5668."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/items/[slug]/route.ts"',children:"export async function GET(\n  request: Request,\n  { params }: { params: { slug: string } }\n) {\n  const slug = params.slug; // 'a', 'b', or 'c'\n}\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Route(\u8def\u7531)"}),(0,t.jsx)(n.th,{children:"Example URL(URL \u5b9e\u4f8b)"}),(0,t.jsx)(n.th,{children:"params(\u53c2\u6570)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/items/\\[slug\\]/route.js"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/items/a"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{slug:'a'}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/items/\\[slug\\]/route.js"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/items/b"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{slug:'b'}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"app/items/\\[slug\\]/route.js"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/items/c"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"{slug:'c'}"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"url-query-params-url-query-\u53c2\u6570",children:"URL Query Params (URL Query \u53c2\u6570)"}),"\n",(0,t.jsxs)(n.p,{children:["\u88ab\u53d1\u9001\u5230 Route Handler(\u8def\u7531\u5904\u7406\u5668)\u7684\u8bf7\u6c42\u5bf9\u8c61\u662f\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"NextRequest"})," \u5b9e\u4f8b, \u5b83\u6709\u4e00\u4e9b",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/functions/next-request#nexturl",children:"\u989d\u5916\u7684\u4fbf\u6377\u65b9\u6cd5"}),", \u6bd4\u5982\u66f4\u7b80\u5355\u7684\u5904\u7406 query \u53c2\u6570."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/search/route.ts"',children:'import { type NextRequest } from "next/server";\n\nexport function GET(request: NextRequest) {\n  const searchParams = request.nextUrl.searchParams;\n  const query = searchParams.get("query");\n  // query is "hello" for /api/search?query=hello\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"streaming\u6d41",children:"Streaming(\u6d41)"}),"\n",(0,t.jsxs)(n.p,{children:["Streaming(\u6d41) \u7ecf\u5e38\u88ab\u62ff\u6765\u4e0e Large Language Model(LLMs, \u5927\u8bed\u8a00\u6a21\u578b)\u4e00\u8d77\u4f7f\u7528, \u50cf OpenAI, \u7528 AI \u6765\u81ea\u52a8\u751f\u6210\u5185\u5bb9. \u4e86\u89e3\u5173\u4e8e ",(0,t.jsx)(n.a,{href:"https://sdk.vercel.ai/docs",children:"AI SDK"})," \u7684\u66f4\u591a\u77e5\u8bc6."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/chat/route.ts"',children:'import { Configuration, OpenAIApi } from "openai-edge";\nimport { OpenAIStream, StreamingTextResponse } from "ai";\n\nexport const runtime = "edge";\n\nconst apiConfig = new Configuration({\n  apiKey: process.env.OPENAI_API_KEY!,\n});\n\nconst openai = new OpenAIApi(apiConfig);\n\nexport async function POST(req: Request) {\n  // Extract the `messages` from the body of the request\n  const { messages } = await req.json();\n\n  // Request the OpenAI API for the response based on the prompt\n  const response = await openai.createChatCompletion({\n    model: "gpt-3.5-turbo",\n    stream: true,\n    messages: messages,\n    max_tokens: 500,\n    temperature: 0.7,\n    top_p: 1,\n    frequency_penalty: 1,\n    presence_penalty: 1,\n  });\n\n  // Convert the response into a friendly text-stream\n  const stream = OpenAIStream(response);\n\n  // Respond with the stream\n  return new StreamingTextResponse(stream);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e9b\u62bd\u8c61\u4f7f\u7528 Web API \u6765\u521b\u5efa Streaming(\u6d41). \u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5e95\u5c42 Web API."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/route.ts"',children:'// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream\nfunction iteratorToStream(iterator: any) {\n  return new ReadableStream({\n    async pull(controller) {\n      const { value, done } = await iterator.next();\n\n      if (done) {\n        controller.close();\n      } else {\n        controller.enqueue(value);\n      }\n    },\n  });\n}\n\nfunction sleep(time: number) {\n  return new Promise((resolve) => {\n    setTimeout(resolve, time);\n  });\n}\n\nconst encoder = new TextEncoder();\n\nasync function* makeIterator() {\n  yield encoder.encode("<p>One</p>");\n  await sleep(200);\n  yield encoder.encode("<p>Two</p>");\n  await sleep(200);\n  yield encoder.encode("<p>Three</p>");\n}\n\nexport async function GET() {\n  const iterator = makeIterator();\n  const stream = iteratorToStream(iterator);\n\n  return new Response(stream);\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"request-body-\u8bf7\u6c42\u4f53",children:"Request Body (\u8bf7\u6c42\u4f53)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u7684 Web API \u65b9\u6cd5\u6765\u8bfb\u53d6 ",(0,t.jsx)(n.code,{children:"Request"})," body (\u8bf7\u6c42\u4f53)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/items/route.ts"',children:"export async function POST(request: Request) {\n  const res = await request.json();\n  return Response.json({ res });\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"request-body-formdata-\u8bf7\u6c42\u4f53\u4e2d\u7684-formdata",children:"Request Body FormData (\u8bf7\u6c42\u4f53\u4e2d\u7684 FormData)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"request.formData()"})," \u65b9\u6cd5\u6765\u8bfb\u53d6 ",(0,t.jsx)(n.code,{children:"FormData"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/items/route.ts"',children:'export async function POST(request: Request) {\n  const formData = await request.formData();\n  const name = formData.get("name");\n  const email = formData.get("email");\n  return Response.json({ name, email });\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"formData"})," \u6570\u636e\u90fd\u662f\u5b57\u7b26\u4e32, \u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/zod-form-data",children:(0,t.jsx)(n.code,{children:"zod-form-data"})})," \u6765\u9a8c\u8bc1\u8bf7\u6c42, \u5e76\u4ee5\u4f60\u559c\u6b22\u7684\u683c\u5f0f(\u5982\u6570\u5b57)\u83b7\u53d6\u6570\u636e."]}),"\n",(0,t.jsx)(n.h3,{id:"cors-\u8de8\u57df",children:"CORS (\u8de8\u57df)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6 Web API \u65b9\u6cd5\u6765\u5728 ",(0,t.jsx)(n.code,{children:"Response"})," \u4e0a\u8bbe\u7f6e CORS headers."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/api/route.ts"',children:'export async function GET(request: Request) {\n  return new Response("Hello, Next.js!", {\n    status: 200,\n    headers: {\n      "Access-Control-Allow-Origin": "*",\n      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",\n      "Access-Control-Allow-Headers": "Content-Type, Authorization",\n    },\n  });\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"edge-and-nodejs-runtimes-edge-\u548c-nodejs-\u8fd0\u884c\u73af\u5883",children:"Edge and Node.js Runtimes (Edge \u548c Node.js \u8fd0\u884c\u73af\u5883)"}),"\n",(0,t.jsxs)(n.p,{children:["Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u6709\u540c\u6784\u7684 Web API, \u6240\u4ee5\u540c\u65f6\u652f\u6301 Edge \u548c Node.js \u73af\u5883, \u5305\u62ec\u652f\u6301 Streaming(\u6d41). \u7531\u4e8e Route Handler(\u8def\u7531\u5904\u7406\u5668) \u4f7f\u7528\u4e0e\u9875\u9762\u548c\u5e03\u5c40\u76f8\u540c\u7684",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config",children:"route segment configuration(\u8def\u7531\u6bb5\u914d\u7f6e)"}),", \u56e0\u6b64\u5b83\u652f\u6301\u4eba\u4eec\u671f\u5f85\u5df2\u4e45\u7684\u529f\u80fd, \u5982\u901a\u7528 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data",children:"general-purpose statically regenerated(\u901a\u7528\u76ee\u7684\u7684\u9759\u6001\u518d\u751f)"})," Route Handler(\u8def\u7531\u5904\u7406\u5668)."]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a ",(0,t.jsx)(n.code,{children:"runtime"})," \u6bb5\u914d\u7f6e\u9009\u9879\u6765\u6307\u5b9a\u73af\u5883:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export const runtime = \"edge\"; // 'nodejs' is the default\n"})}),"\n",(0,t.jsx)(n.h3,{id:"non-ui-response-\u975e-ui-\u76f8\u5173\u7684\u8fd4\u56de",children:"Non-UI Response (\u975e UI \u76f8\u5173\u7684\u8fd4\u56de)"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u6765\u8fd4\u56de\u4e00\u4e2a\u6ca1\u6709 UI \u7684\u5185\u5bb9. \u8bf7\u6ce8\u610f, Next.js \u5185\u90e8\u652f\u6301\u4e86",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generate-a-sitemap",children:(0,t.jsx)(n.code,{children:"sitemap.xml"})}),", ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file",children:(0,t.jsx)(n.code,{children:"robots.tsx"})}),", ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx",children:(0,t.jsx)(n.code,{children:"app icons"})})," \u548c ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image",children:"open graph images"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/rss.xml/route.ts"',children:'export async function GET() {\n  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n \n<channel>\n  <title>Next.js Documentation</title>\n  <link>https://nextjs.org/docs</link>\n  <description>The React Framework for the Web</description>\n</channel>\n \n</rss>`);\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"segment-config-options-\u6bb5\u914d\u7f6e\u9009\u9879",children:"Segment Config Options (\u6bb5\u914d\u7f6e\u9009\u9879)"}),"\n",(0,t.jsxs)(n.p,{children:["Route Handlers(\u8def\u7531\u5904\u7406\u5668) \u4e0e pages(\u9875\u9762) \u548c layouts(\u5e03\u5c40) \u4f7f\u7528\u76f8\u540c\u7684 ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config",children:"route segment configuration(\u8def\u7531\u6bb5\u914d\u7f6e)"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app/items/route.ts"',children:'export const dynamic = "auto";\nexport const dynamicParams = true;\nexport const revalidate = false;\nexport const fetchCache = "auto";\nexport const runtime = "nodejs";\nexport const preferredRegion = "auto";\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u83b7\u53d6\u66f4\u591a\u7ec6\u8282, \u8bf7\u67e5\u770b ",(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config",children:"API reference"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"api-referenceapi-\u6587\u6863",children:"API Reference(API \u6587\u6863)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://nextjs.org/docs/app/api-reference/file-conventions/route",children:"route.js"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var t=s(7294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);