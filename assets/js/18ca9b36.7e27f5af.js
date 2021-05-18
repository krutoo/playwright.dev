(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5462],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},36882:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={id:"multi-pages",title:"Multi-page scenarios"},p={unversionedId:"multi-pages",id:"version-1.6.0/multi-pages",isDocsHomePage:!1,title:"Multi-page scenarios",description:"Playwright can automate scenarios that span multiple browser contexts or multiple",source:"@site/versioned_docs/version-1.6.0/multi-pages.mdx",sourceDirName:".",slug:"/multi-pages",permalink:"/docs/1.6.0/multi-pages",version:"1.6.0",frontMatter:{id:"multi-pages",title:"Multi-page scenarios"},sidebar:"version-1.6.0/docs",previous:{title:"Navigations",permalink:"/docs/1.6.0/navigations"},next:{title:"Authentication",permalink:"/docs/1.6.0/auth"}},l=[{value:"Multiple contexts",id:"multiple-contexts",children:[]},{value:"Multiple pages",id:"multiple-pages",children:[]},{value:"Handling new pages",id:"handling-new-pages",children:[]},{value:"Handling popups",id:"handling-popups",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can automate scenarios that span multiple browser contexts or multiple\ntabs in a browser window."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-contexts"},"Multiple contexts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-pages"},"Multiple pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-new-pages"},"Handling new pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-popups"},"Handling popups"))),(0,o.kt)("h2",{id:"multiple-contexts"},"Multiple contexts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/1.6.0/core-concepts#browser-contexts"},"Browser contexts")," are isolated environments\non a single browser instance. Playwright can create multiple browser contexts\nwithin a single scenario. This is useful when you want to test for\nmulti-user functionality, like chat."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n// Create a Chromium browser instance\nconst browser = await chromium.launch();\n\n// Create two isolated browser contexts\nconst userContext = await browser.newContext();\nconst adminContext = await browser.newContext();\n\n// Load user and admin cookies\nawait userContext.addCookies(userCookies);\nawait adminContext.addCookies(adminCookies);\n")),(0,o.kt)("h4",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-browser#class-browsercontext"},"class ",(0,o.kt)("inlineCode",{parentName:"a"},"BrowserContext"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-browser#browsernewcontextoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"browser.newContext([options])"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-browsercontext#browsercontextaddcookiescookies"},(0,o.kt)("inlineCode",{parentName:"a"},"browserContext.addCookies(cookies)")))),(0,o.kt)("h2",{id:"multiple-pages"},"Multiple pages"),(0,o.kt)("p",null,"Each browser context can host multiple pages (tabs)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each page behaves like a focused, active page. Bringing the page to front\nis not required."),(0,o.kt)("li",{parentName:"ul"},"Pages inside a context respect context-level emulation, like viewport sizes,\ncustom network routes or browser locale.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create two pages\nconst pageOne = await context.newPage();\nconst pageTwo = await context.newPage();\n\n// Get pages of a brower context\nconst allPages = context.pages();\n")),(0,o.kt)("h4",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-page#class-page"},"class ",(0,o.kt)("inlineCode",{parentName:"a"},"Page"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-browsercontext#browsercontextnewpage"},(0,o.kt)("inlineCode",{parentName:"a"},"browserContext.newPage()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-browsercontext#browsercontextpages"},(0,o.kt)("inlineCode",{parentName:"a"},"browserContext.pages()")))),(0,o.kt)("h2",{id:"handling-new-pages"},"Handling new pages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," event on browser contexts can be used to get new pages that are\ncreated in the context. This can be used to handle new pages opened by\n",(0,o.kt)("inlineCode",{parentName:"p"},'target="_blank"')," links."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get page after a specific action (e.g. clicking a link)\nconst [newPage] = await Promise.all([\n  context.waitForEvent('page'),\n  page.click('a[target=\"_blank\"]') // Opens a new tab\n])\nawait newPage.waitForLoadState();\nconsole.log(await newPage.title());\n")),(0,o.kt)("p",null,"If the action that triggers the new page is unknown, the following pattern can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get all new pages (including popups) in the context\ncontext.on('page', async page => {\n  await page.waitForLoadState();\n  await page.title();\n})\n")),(0,o.kt)("h4",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-browsercontext#event-page"},"event: 'page'"))),(0,o.kt)("h2",{id:"handling-popups"},"Handling popups"),(0,o.kt)("p",null,"If the page opens a pop-up, you can get a reference to it by listening to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"popup")," event on the page."),(0,o.kt)("p",null,"This event is emitted in addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"browserContext.on('page')")," event, but\nonly for popups relevant to this page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get popup after a specific action (e.g., click)\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\nawait popup.waitForLoadState();\nawait popup.title();\n")),(0,o.kt)("p",null,"If the action that triggers the popup is unknown, the following pattern can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Get all popups when they open\npage.on('popup', async popup => {\n  await popup.waitForLoadState();\n  await popup.title();\n})\n")),(0,o.kt)("h4",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.6.0/api/class-page#event-popup"},"event: 'popup'"))))}c.isMDXComponent=!0}}]);