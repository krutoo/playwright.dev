(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{324:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(392)),c=a(395),o=a(396),l={id:"class-playwright",title:"Playwright"},s={unversionedId:"api/class-playwright",id:"version-1.8.0/api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.8.0/api/class-playwright.mdx",slug:"/api/class-playwright",permalink:"/python/docs/1.8.0/api/class-playwright",version:"1.8.0",sidebar:"version-1.8.0/api",next:{title:"Accessibility",permalink:"/python/docs/1.8.0/api/class-accessibility"}},p=[{value:"playwright.stop()",id:"playwrightstop",children:[]},{value:"playwright.chromium",id:"playwrightchromium",children:[]},{value:"playwright.devices",id:"playwrightdevices",children:[]},{value:"playwright.firefox",id:"playwrightfirefox",children:[]},{value:"playwright.selectors",id:"playwrightselectors",children:[]},{value:"playwright.webkit",id:"playwrightwebkit",children:[]}],b={toc:p};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),Object(i.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    chromium = playwright.chromium # or "firefox" or "webkit".\n    browser = chromium.launch()\n    page = browser.new_page()\n    page.goto("http://example.com")\n    # other actions...\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),Object(i.b)(o.a,{value:"async",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    chromium = playwright.chromium # or "firefox" or "webkit".\n    browser = await chromium.launch()\n    page = await browser.new_page()\n    await page.goto("http://example.com")\n    # other actions...\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-playwright#playwrightstop"}),"playwright.stop()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-playwright#playwrightchromium"}),"playwright.chromium")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-playwright#playwrightdevices"}),"playwright.devices")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-playwright#playwrightfirefox"}),"playwright.firefox")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-playwright#playwrightselectors"}),"playwright.selectors")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-playwright#playwrightwebkit"}),"playwright.webkit"))),Object(i.b)("h2",{id:"playwrightstop"},"playwright.stop()"),Object(i.b)("p",null,"Terminates this instance of Playwright in case it was created bypassing the Python context manager. This is useful in REPL applications."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'>>> from playwright.sync_api import sync_playwright\n\n>>> playwright = sync_playwright().start()\n\n>>> browser = playwright.chromium.launch()\n>>> page = browser.new_page()\n>>> page.goto("http://whatsmyuseragent.org/")\n>>> page.screenshot(path="example.png")\n>>> browser.close()\n\n>>> playwright.stop()\n')),Object(i.b)("h2",{id:"playwrightchromium"},"playwright.chromium"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ","[ChromiumBrowser]","."),Object(i.b)("h2",{id:"playwrightdevices"},"playwright.devices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),">")),Object(i.b)("p",null,"Returns a dictionary of devices to be used with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-browser#browsernew_pagekwargs"}),"browser.new_page(**kwargs)"),"."),Object(i.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\ndef run(playwright):\n    webkit = playwright.webkit\n    iphone = playwright.devices["iPhone 6"]\n    browser = webkit.launch()\n    context = browser.new_context(**iphone)\n    page = context.new_page()\n    page.goto("http://example.com")\n    # other actions...\n    browser.close()\n\nwith sync_playwright() as playwright:\n    run(playwright)\n'))),Object(i.b)(o.a,{value:"async",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def run(playwright):\n    webkit = playwright.webkit\n    iphone = playwright.devices["iPhone 6"]\n    browser = await webkit.launch()\n    context = await browser.new_context(**iphone)\n    page = await context.new_page()\n    await page.goto("http://example.com")\n    # other actions...\n    await browser.close()\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\nasyncio.run(main())\n')))),Object(i.b)("h2",{id:"playwrightfirefox"},"playwright.firefox"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ","[FirefoxBrowser]","."),Object(i.b)("h2",{id:"playwrightselectors"},"playwright.selectors"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-selectors",title:"Selectors"}),"Selectors"),">")),Object(i.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.8.0/selectors"}),"Working with selectors")," for more information."),Object(i.b)("h2",{id:"playwrightwebkit"},"playwright.webkit"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"type: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ","[WebKitBrowser]","."))}u.isMDXComponent=!0},391:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},392:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},y=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),y=r,h=b["".concat(c,".").concat(y)]||b[y]||u[y]||i;return a?n.a.createElement(h,o(o({ref:t},s),{},{components:a})):n.a.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}y.displayName="MDXCreateElement"},393:function(e,t,a){"use strict";var r=a(0),n=a(394);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},394:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},395:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(393),c=a(391),o=a(53),l=a.n(o),s=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,u=e.groupId,y=e.className,h=Object(i.a)(),w=h.tabGroupChoices,m=h.setTabGroupChoices,g=Object(r.useState)(o),f=g[0],d=g[1],O=r.Children.toArray(e.children);if(null!=u){var j=w[u];null!=j&&j!==f&&b.some((function(e){return e.value===j}))&&d(j)}var v=function(e){d(e),null!=u&&m(u,e)},x=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},y)},b.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},396:function(e,t,a){"use strict";var r=a(3),n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:a,className:n}),t)}}}]);