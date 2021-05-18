(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[48499],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36124:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"intro",title:"Getting Started"},s={unversionedId:"intro",id:"version-1.0.0/intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/versioned_docs/version-1.0.0/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/1.0.0/intro",version:"1.0.0",frontMatter:{id:"intro",title:"Getting Started"},sidebar:"version-1.0.0/docs",next:{title:"Core concepts",permalink:"/docs/1.0.0/core-concepts"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"System requirements",id:"system-requirements",children:[]},{value:"Debugging scripts",id:"debugging-scripts",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first-script"},"First script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#system-requirements"},"System requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#debugging-scripts"},"Debugging scripts"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Use npm or Yarn to install Playwright in your Node.js project. Playwright requires Node.js 10 or higher."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i playwright\n")),(0,i.kt)("p",null,"During installation, Playwright downloads browser binaries for Chromium, Firefox and WebKit. This sets up your environment for browser automation with just one command. It is possible to modify this default behavior for monorepos and other scenarios. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0.0/installation"},"installation parameters")," for mode details."),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once installed, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," Playwright in a Node.js script, and launch any of the 3 browsers (",(0,i.kt)("inlineCode",{parentName:"p"},"chromium"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"firefox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"webkit"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n")),(0,i.kt)("p",null,"Playwright APIs are asynchronous and return Promise objects. Our code examples use ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"},"the async/await pattern")," to simplify comprehension. The code is wrapped in an unnamed async arrow function which is invoking itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"first-script"},"First script"),(0,i.kt)("p",null,"In our first script, we will navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('http://whatsmyuseragent.org/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n")),(0,i.kt)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"headless: false")," flag while launching the browser. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"firefox.launch({ headless: false, slowMo: 50 });\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"system-requirements"},"System requirements"),(0,i.kt)("p",null,"Playwright requires Node.js version 10.15 or above. The browser binaries for Chromium,\nFirefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Windows"),": Works with Windows and Windows Subsystem for Linux (WSL)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"macOS"),": Requires 10.14 or above."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linux"),": Depending on your Linux distribution, you might need to install additional\ndependencies to run the browsers.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For Ubuntu 18.04, the additional dependencies are defined in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"},"our Docker image"),",\nwhich is based on Ubuntu.")))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"debugging-scripts"},"Debugging scripts"),(0,i.kt)("p",null,"Playwright scripts can be developed just like any other Node.js script. For example, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/debugger.html"},"Node.js debugger")," or ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},"VS Code debugging")," to set breakpoints and get fine grained control over execution."),(0,i.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"300",alt:"Chromium Developer Tools"})),(0,i.kt)("p",null,"It is also possible to open ",(0,i.kt)("strong",{parentName:"p"},"browser developer tools")," during execution, to inspect the DOM tree or network activity."),(0,i.kt)("br",null))}c.isMDXComponent=!0}}]);