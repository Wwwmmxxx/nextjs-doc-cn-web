"use strict";(self.webpackChunknextjs_cn_doc=self.webpackChunknextjs_cn_doc||[]).push([[756],{8849:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var n=s(5893),i=s(1151);const r={description:"https://nextjs.org/docs"},o=void 0,d={id:"getting-started/intro",title:"intro",description:"https://nextjs.org/docs",source:"@site/docs/01-getting-started/intro.md",sourceDirName:"01-getting-started",slug:"/getting-started/intro",permalink:"/nextjs-doc-cn-web/docs/getting-started/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-getting-started/intro.md",tags:[],version:"current",frontMatter:{description:"https://nextjs.org/docs"},sidebar:"appRouter",next:{title:"\u5b89\u88c5",permalink:"/nextjs-doc-cn-web/docs/getting-started/installation"}},c={},a=[{value:"What is Next.js(\u4ec0\u4e48\u662f Next.js)",id:"what-is-nextjs\u4ec0\u4e48\u662f-nextjs",level:2},{value:"Main Features(\u4e3b\u8981\u529f\u80fd)",id:"main-features\u4e3b\u8981\u529f\u80fd",level:2},{value:"How to Use These Docs(\u600e\u4e48\u4f7f\u7528\u8fd9\u4e9b\u6587\u6863)",id:"how-to-use-these-docs\u600e\u4e48\u4f7f\u7528\u8fd9\u4e9b\u6587\u6863",level:2},{value:"App Router vs Pages Router",id:"app-router-vs-pages-router",level:2},{value:"Pre-Requisite Knowledge(\u9884\u5907\u77e5\u8bc6)",id:"pre-requisite-knowledge\u9884\u5907\u77e5\u8bc6",level:2},{value:"Accessibility(\u9644\u5c5e)",id:"accessibility\u9644\u5c5e",level:2},{value:"Join our Community(\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a)",id:"join-our-community\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u6b22\u8fce\u6765\u5230 Next.js \u7684\u6587\u6863!"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"what-is-nextjs\u4ec0\u4e48\u662f-nextjs",children:"What is Next.js(\u4ec0\u4e48\u662f Next.js)"}),"\n",(0,n.jsx)(t.p,{children:"Next.js \u662f\u4e00\u4e2a\u4e3a\u4e86\u6784\u5efa\u5168\u6808\u7f51\u7ad9\u5e94\u7528\u7684 React \u6846\u67b6. \u4f60\u53ef\u4ee5\u4f7f\u7528 React \u7ec4\u4ef6\u6784\u5efa\u7528\u6237\u754c\u9762, \u4f7f\u7528 Next.js \u5b9e\u73b0\u9644\u52a0\u529f\u80fd\u548c\u4f18\u5316."}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u5185\u90e8, Next.js \u62bd\u8c61\u5e76\u81ea\u52a8\u914d\u7f6e\u4e86 React \u6240\u9700\u7684\u5de5\u5177, \u50cf\u6253\u5305, \u7f16\u8bd1\u7b49. \u8fd9\u6837, \u4f60\u5c31\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f, \u4e0d\u7528\u82b1\u65f6\u95f4\u8fdb\u884c\u914d\u7f6e\u5404\u9879\u914d\u7f6e."}),"\n",(0,n.jsx)(t.p,{children:"\u65e0\u8bba\u4f60\u662f\u4e00\u540d\u4e2a\u4eba\u5f00\u53d1\u8005\u6216\u7ec4\u5185\u7684\u6210\u5458, Next.js \u90fd\u80fd\u591f\u5e2e\u52a9\u4f60\u6784\u5efa\u4ea4\u4e92\u5f0f\u7684, \u52a8\u6001\u7684, \u5feb\u901f\u7684 React \u5e94\u7528."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"main-features\u4e3b\u8981\u529f\u80fd",children:"Main Features(\u4e3b\u8981\u529f\u80fd)"}),"\n",(0,n.jsx)(t.p,{children:"Next.js \u4e00\u90e8\u5206\u7684\u4e3b\u8981\u529f\u80fd\u5305\u62ec:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u9879\u76ee"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/routing",children:"Routing(\u8def\u7531)"})}),(0,n.jsx)(t.td,{children:"\u57fa\u4e8e\u6587\u4ef6\u7cfb\u7edf\u7684\u8def\u7531(\u5efa\u7acb\u5728 Server Components(\u670d\u52a1\u7aef\u7ec4\u4ef6)\u4e0a), \u652f\u6301\u9875\u9762\u5e03\u5c40, \u8def\u7531\u5d4c\u5957, \u52a0\u8f7d\u72b6\u6001, \u9519\u8bef\u5904\u7406\u7b49\u529f\u80fd."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/rendering",children:"Rendering(\u7f16\u8bd1)"})}),(0,n.jsx)(t.td,{children:"\u4f7f\u7528 Client Components (\u5ba2\u6237\u7aef\u7ec4\u4ef6)\u548c Server Components (\u670d\u52a1\u7aef\u7ec4\u4ef6)\u8fdb\u884c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684\u6e32\u67d3. \u8fdb\u4e00\u6b65\u4f18\u5316\u670d\u52a1\u7aef\u4e0a\u7684 Static(\u9759\u6001), Dynamic(\u52a8\u6001)\u6e32\u67d3. \u5728 Edge \u548c Node.js \u8fd0\u884c\u65f6, \u8fdb\u884c Streaming(\u6d41\u5f0f\u5904\u7406)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/data-fetching",children:"Data Fetching(\u6570\u636e\u83b7\u53d6)"})}),(0,n.jsxs)(t.td,{children:["\u901a\u8fc7 Server Components(\u670d\u52a1\u7aef\u7ec4\u4ef6) \u7684 async/await \u7b80\u5316\u4e86\u6570\u636e\u83b7\u53d6, \u5e76\u4e3a ",(0,n.jsx)(t.code,{children:"fetch"})," API \u6269\u5c55\u4e86: request memoization (\u8bf7\u6c42\u8bb0\u5f55), data caching(\u6570\u636e\u7f13\u5b58)\u548c revalidation(\u91cd\u65b0\u9a8c\u8bc1)."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/styling",children:"Styling(\u6837\u5f0f)"})}),(0,n.jsx)(t.td,{children:"\u652f\u6301\u4f60\u559c\u6b22\u7684\u6837\u5f0f\u8bbe\u8ba1\u65b9\u5f0f, \u5305\u62ec CSS Modules(\u6a21\u5757\u5316 CSS), Tailwind CSS \u548c CSS-in-JS"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/optimizing",children:"Optimizations(\u4f18\u5316)"})}),(0,n.jsx)(t.td,{children:"\u4f18\u5316\u56fe\u50cf, \u5b57\u4f53, \u811a\u672c, \u4ee5\u63d0\u9ad8\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/app/building-your-application/configuring/typescript",children:"Typescript"})}),(0,n.jsx)(t.td,{children:"\u6539\u8fdb\u4e86\u5bf9 TypeScript \u7684\u652f\u6301, \u5305\u62ec\u66f4\u597d\u7684\u7c7b\u578b\u68c0\u67e5\u548c\u66f4\u9ad8\u6548\u7684\u7f16\u8bd1, \u4ee5\u53ca\u81ea\u5b9a\u4e49 TypeScript \u63d2\u4ef6\u548c\u7c7b\u578b\u68c0\u67e5\u5668."})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"how-to-use-these-docs\u600e\u4e48\u4f7f\u7528\u8fd9\u4e9b\u6587\u6863",children:"How to Use These Docs(\u600e\u4e48\u4f7f\u7528\u8fd9\u4e9b\u6587\u6863)"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u5c4f\u5e55\u7684\u5de6\u4fa7, \u4f60\u53ef\u4ee5\u627e\u5230\u6587\u6863\u5bfc\u822a. \u6587\u6863\u7684\u6bcf\u4e00\u9875\u90fd\u88ab\u6309\u987a\u5e8f, \u4ece\u7b80\u5355\u5230\u8fdb\u9636\u6392\u5217, \u6240\u4ee5\u4f60\u53ef\u4ee5\u53c2\u7167\u5b83\u4eec\u4e00\u6b65\u4e00\u6b65\u7684\u6784\u5efa\u4f60\u7684\u5e94\u7528. \u4e0d\u8fc7, \u4f60\u53ef\u4ee5\u6309\u7167\u4efb\u4f55\u987a\u5e8f\u9605\u8bfb, \u4e5f\u53ef\u4ee5\u8df3\u8f6c\u5230\u9002\u7528\u4e8e\u7684\u4f60\u4f7f\u7528\u573a\u666f\u7684\u9875\u9762."}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u5c4f\u5e55\u53f3\u4fa7, \u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u76ee\u5f55, \u5e2e\u52a9\u4f60\u66f4\u65b9\u4fbf\u5730\u5728\u9875\u9762\u5404\u90e8\u5206\u4e4b\u95f4\u8fdb\u884c\u8df3\u8f6c. \u5982\u679c\u4f60\u9700\u8981\u5feb\u901f\u67e5\u627e\u9875\u9762, \u53ef\u4ee5\u4f7f\u7528\u9876\u90e8\u7684\u641c\u7d22\u680f\u6216\u641c\u7d22\u5feb\u6377\u952e(Ctrl+K \u6216 Cmd+K)."}),"\n",(0,n.jsxs)(t.p,{children:["\u5f00\u59cb\u4f7f\u7528, \u67e5\u770b",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/getting-started/installation",children:"\u5b89\u88c5"}),"\u6307\u5357."]}),"\n",(0,n.jsx)(t.h2,{id:"app-router-vs-pages-router",children:"App Router vs Pages Router"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Next.js \u6709\u4e24\u4e2a\u4e0d\u540c\u7684\u8def\u7531: App Router \u548c Pages Router. App Router \u662f\u6700\u65b0\u7684, \u5b83\u5141\u8bb8\u4f60\u4f7f\u7528 React \u7684\u6700\u65b0\u529f\u80fd, \u50cf Server Components(\u670d\u52a1\u7aef\u7ec4\u4ef6)\u548c Streaming(\u6d41\u5f0f\u4f20\u8f93). Page Router \u662f Next.js \u6700\u521d\u7684\u8def\u7531, \u5b83\u5141\u8bb8\u4f60\u6784\u5efa\u670d\u52a1\u7aef\u6e32\u67d3\u7684 React \u5e94\u7528\u7a0b\u5e8f, \u5e76\u7ee7\u7eed\u4e3a\u65e7\u7248 Next.js \u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u652f\u6301."}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u4fa7\u8fb9\u680f\u7684\u9876\u90e8, \u4f60\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e2a\u4e0b\u62c9\u83dc\u5355, \u53ef\u4ee5\u901a\u8fc7\u5b83\u5207\u6362\u5e76\u67e5\u770b App Router \u548c Pages Router \u7684\u66f4\u80fd. \u7531\u4e8e\u6bcf\u4e2a\u76ee\u5f55\u90fd\u6709\u5176\u72ec\u7279\u7684\u529f\u80fd, \u56e0\u6b64\u4f60\u5fc5\u987b\u786e\u8ba4\u4f60\u9009\u62e9\u4e86\u54ea\u4e2a\u9009\u9879."}),"\n",(0,n.jsx)(t.p,{children:"\u9875\u9762\u9876\u90e8\u7684\u9762\u5305\u5c51\u4e5f\u4f1a\u663e\u793a\u4f60\u662f\u5728\u67e5\u770b App Router \u6587\u6863\u8fd8\u662f Pages Router \u6587\u6863."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"pre-requisite-knowledge\u9884\u5907\u77e5\u8bc6",children:"Pre-Requisite Knowledge(\u9884\u5907\u77e5\u8bc6)"}),"\n",(0,n.jsx)(t.p,{children:"\u867d\u7136\u6211\u4eec\u7684\u6587\u6863\u65e8\u5728\u4e3a\u521d\u5b66\u8005\u63d0\u4f9b\u65b9\u4fbf, \u4f46\u6211\u4eec\u9700\u8981\u5efa\u7acb\u4e00\u4e2a\u57fa\u51c6, \u4ee5\u4fbf\u6587\u6863\u80fd\u59cb\u7ec8\u4e13\u6ce8\u4e8e Next.js \u529f\u80fd. \u6211\u4eec\u5c06\u786e\u4fdd\u5728\u5f15\u5165\u65b0\u6784\u60f3\u65f6\u63d0\u4f9b\u76f8\u5173\u6587\u6863\u7684\u94fe\u63a5."}),"\n",(0,n.jsxs)(t.p,{children:["\u4e3a\u4ece\u6211\u4eec\u7684\u6587\u6863\u83b7\u53d6\u6700\u591a\u4e86\u89e3, \u6211\u4eec\u5efa\u8bae\u4f60\u5bf9 HTML,CSS,React \u6709\u4e00\u4e2a\u57fa\u672c\u4e86\u89e3. \u5982\u679c\u4f60\u9700\u8981\u8865\u4e60 React \u6280\u80fd, \u8bf7\u67e5\u770b\u6211\u4eec\u7684 ",(0,n.jsx)(t.a,{href:"https://nextjs.org/learn/foundations/about-nextjs",children:"Next.js \u57fa\u7840\u8bfe\u7a0b"}),", \u5b83\u4f1a\u4e3a\u4f60\u4ecb\u7ecd\u57fa\u7840\u77e5\u8bc6."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"accessibility\u9644\u5c5e",children:"Accessibility(\u9644\u5c5e)"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u4f7f\u7528\u5c4f\u5e55\u9605\u8bfb\u5668\u9605\u8bfb\u6587\u6863\u65f6, \u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u7684\u65e0\u969c\u788d\u73af\u5883, \u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Firefox \u548c NVDA, \u6216 Safari \u548c VoiceOver."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"join-our-community\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a",children:"Join our Community(\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a)"}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u5bf9 Next.js \u6709\u4efb\u4f55\u7684\u7591\u95ee, \u6b22\u8fce\u5230\u793e\u533a\u4e2d\u63d0\u95ee, ",(0,n.jsx)(t.a,{href:"https://github.com/vercel/next.js/discussions",children:"Github Discussions"}),", ",(0,n.jsx)(t.a,{href:"https://discord.com/invite/bUG2bvbtHy",children:"Discord"}),",",(0,n.jsx)(t.a,{href:"https://twitter.com/nextjs",children:"twitter"}),",",(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/nextjs",children:"Reddit"})]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>o});var n=s(7294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);