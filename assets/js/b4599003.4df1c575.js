(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[26578],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,w=g["".concat(p,".").concat(d)]||g[d]||u[d]||o;return n?a.createElement(w,i(i({ref:t},c),{},{components:n})):a.createElement(w,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";n(67294)},41395:function(e,t,n){"use strict";n(67294),n(80944)},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},55541:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=(n(41395),n(58215),{id:"multi-pages",title:"Multi-page scenarios"}),l={unversionedId:"multi-pages",id:"multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window.",source:"@site/docs/multi-pages.mdx",sourceDirName:".",slug:"/multi-pages",permalink:"/docs/next/multi-pages",version:"current",frontMatter:{id:"multi-pages",title:"Multi-page scenarios"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/installation"},next:{title:"Navigations",permalink:"/docs/next/navigations"}},p=[{value:"Multiple contexts",id:"multiple-contexts",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Multiple pages",id:"multiple-pages",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handling new pages",id:"handling-new-pages",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Handling popups",id:"handling-popups",children:[{value:"API reference",id:"api-reference-3",children:[]}]}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple tabs in a browser window."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,o.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts#browser-contexts"},"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n// Create a Chromium browser instance\nconst browser = await chromium.launch();\n\n// Create two isolated browser contexts\nconst userContext = await browser.newContext();\nconst adminContext = await browser.newContext();\n\n// Load user and admin cookies\nawait userContext.addCookies(userCookies);\nawait adminContext.addCookies(adminCookies);\n")),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser#browsernewcontextoptions"},"browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browsercontextaddcookiescookies"},"browserContext.addCookies(cookies)"))),(0,o.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,o.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front is not required."),(0,o.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes, custom network routes or browser locale.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create two pages\nconst pageOne = await context.newPage();\nconst pageTwo = await context.newPage();\n\n// Get pages of a brower context\nconst allPages = context.pages();\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browsercontextnewpage"},"browserContext.newPage()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browsercontextpages"},"browserContext.pages()"))),(0,o.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are created in the context. This can be used to handle new pages opened by ",(0,o.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get page after a specific action (e.g. clicking a link)\nconst [newPage] = await Promise.all([\n  context.waitForEvent('page'),\n  page.click('a[target=\"_blank\"]') // Opens a new tab\n])\nawait newPage.waitForLoadState();\nconsole.log(await newPage.title());\n")),(0,o.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get all new pages (including popups) in the context\ncontext.on('page', async page => {\n  await page.waitForLoadState();\n  console.log(await page.title());\n})\n")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browsercontextonpage"},"browserContext.on('page')"))),(0,o.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,o.kt)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the ",(0,o.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,o.kt)("p",null,"This event is emitted in addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but only for popups relevant to this page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get popup after a specific action (e.g., click)\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\nawait popup.waitForLoadState();\nconsole.log(await popup.title());\n")),(0,o.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get all popups when they open\npage.on('popup', async popup => {\n  await popup.waitForLoadState();\n  await popup.title();\n})\n")),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#pageonpopup"},"page.on('popup')"))))}c.isMDXComponent=!0}}]);