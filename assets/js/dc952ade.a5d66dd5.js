(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[45724],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return t?n.createElement(g,i(i({ref:a},p),{},{components:t})):n.createElement(g,i({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96175:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var n=t(22122),r=t(19756),l=(t(67294),t(3905)),i={id:"core-concepts",title:"Core concepts"},o={unversionedId:"core-concepts",id:"version-1.4.0/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit",source:"@site/versioned_docs/version-1.4.0/core-concepts.mdx",sourceDirName:".",slug:"/core-concepts",permalink:"/docs/1.4.0/core-concepts",version:"1.4.0",frontMatter:{id:"core-concepts",title:"Core concepts"},sidebar:"version-1.4.0/docs",previous:{title:"Getting Started",permalink:"/docs/1.4.0/intro"},next:{title:"Debugging tools",permalink:"/docs/1.4.0/debug"}},s=[{value:"Browser",id:"browser",children:[]},{value:"Browser contexts",id:"browser-contexts",children:[]},{value:"Pages and frames",id:"pages-and-frames",children:[]},{value:"Selectors",id:"selectors",children:[]},{value:"Auto-waiting",id:"auto-waiting",children:[]},{value:"Execution contexts: Node.js and Browser",id:"execution-contexts-nodejs-and-browser",children:[{value:"Evaluation",id:"evaluation",children:[]}]},{value:"Object &amp; Element handles",id:"object--element-handles",children:[{value:"Handles Lifecycle",id:"handles-lifecycle",children:[]},{value:"Example: ElementHandle",id:"example-elementhandle",children:[]},{value:"Example: JSHandle",id:"example-jshandle",children:[]}]}],c={toc:s};function p(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit\nbrowsers. By using the Playwright API, you can write JavaScript code to create\nnew browser pages, navigate to URLs and then interact with elements on a page."),(0,l.kt)("p",null,"Along with a test runner Playwright can be used to automate user interactions to\nvalidate and test web applications. The Playwright API enables this through\nthe following primitives."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#browser"},"Browser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#browser-contexts"},"Browser contexts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pages-and-frames"},"Pages and frames")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#selectors"},"Selectors")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#auto-waiting"},"Auto-waiting")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#execution-contexts-nodejs-and-browser"},"Execution contexts: Node.js and Browser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#object--element-handles"},"Object & Element handles"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"browser"},"Browser"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-browser#class-browser"},(0,l.kt)("inlineCode",{parentName:"a"},"Browser"))," refers to an instance of Chromium, Firefox\nor WebKit. Playwright scripts generally start with launching a browser instance\nand end with closing the browser. Browser instances can be launched in headless\n(without a GUI) or headful mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\nconst browser = await chromium.launch({ headless: false });\nawait browser.close();\n")),(0,l.kt)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to\nmaximize what a single instance can do through multiple browser contexts."),(0,l.kt)("h4",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser"},"class ",(0,l.kt)("inlineCode",{parentName:"a"},"Browser")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"browser-contexts"},"Browser contexts"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-browsercontext#class-browsercontext"},(0,l.kt)("inlineCode",{parentName:"a"},"BrowserContext"))," is an isolated incognito-alike\nsession within a browser instance. Browser contexts are fast and cheap to create.\nBrowser contexts can be used to parallelize isolated test executions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await chromium.launch();\nconst context = await browser.newContext();\n")),(0,l.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving\nmobile devices, permissions, locale and color scheme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { devices } = require('playwright');\nconst iPhone = devices['iPhone 11 Pro'];\n\nconst context = await browser.newContext({\n  ...iPhone,\n  permissions: ['geolocation'],\n  geolocation: { latitude: 52.52, longitude: 13.39},\n  colorScheme: 'dark',\n  locale: 'de-DE'\n});\n")),(0,l.kt)("h4",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browsercontext"},"class ",(0,l.kt)("inlineCode",{parentName:"a"},"BrowserContext"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-browser#browsernewcontextoptions"},"browser.newContext([options])"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"pages-and-frames"},"Pages and frames"),(0,l.kt)("p",null,"A Browser context can have multiple pages. A ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-page#class-page"},(0,l.kt)("inlineCode",{parentName:"a"},"Page")),"\nrefers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Create a page.\nconst page = await context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com');\n// Fill an input.\nawait page.fill('#search', 'query');\n\n// Navigate implicitly by clicking a link.\nawait page.click('#submit');\n// Expect a new url.\nconsole.log(page.url());\n\n// Page can navigate from the script - this will be picked up by Playwright.\nwindow.location.href = 'https://example.com';\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Read more on ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/navigations"},"page navigation and loading"),".")),(0,l.kt)("p",null,"A page can have one or more ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-frame#class-frame"},"Frame")," objects attached to\nit. Each page has a main frame and page-level interactions (like ",(0,l.kt)("inlineCode",{parentName:"p"},"click"),") are\nassumed to operate in the main frame."),(0,l.kt)("p",null,"A page can have additional frames attached with the ",(0,l.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These\nframes can be accessed for interactions inside the frame."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Get frame using the frame's name attribute\nconst frame = page.frame('frame-login');\n\n// Get frame using frame's URL\nconst frame = page.frame({ url: /.*domain.*/ });\n\n// Get frame using any other selector\nconst frameElementHandle = await page.$('.frame-class');\nconst frame = await frameElementHandle.contentFrame();\n\n// Interact with the frame\nawait frame.fill('#username-input', 'John');\n")),(0,l.kt)("h4",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page"},"class ",(0,l.kt)("inlineCode",{parentName:"a"},"Page"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-frame"},"class ",(0,l.kt)("inlineCode",{parentName:"a"},"Frame"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageframeoptions"},"page.frame(options)"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"selectors"},"Selectors"),(0,l.kt)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),(0,l.kt)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),(0,l.kt)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),(0,l.kt)("p",null,"Learn more about selectors and selector engines ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/selectors"},"here"),"."),(0,l.kt)("p",null,"Some examples below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Using data-test-id= selector engine\nawait page.click('data-test-id=foo');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// CSS and XPath selector engines are automatically detected\nawait page.click('div');\nawait page.click('//html/body/div');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Find node by text substring\nawait page.click('text=Hello w');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Explicit CSS and XPath notation\nawait page.click('css=div');\nawait page.click('xpath=//html/body/div');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Only search light DOM, outside WebComponent shadow DOM:\nawait page.click('css:light=div');\n")),(0,l.kt)("p",null,"Selectors using the same or different engines can be combined using the ",(0,l.kt)("inlineCode",{parentName:"p"},">>")," separator. For example,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Click an element with text 'Sign Up' inside of a #free-month-promo.\nawait page.click('#free-month-promo >> text=Sign Up');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Capture textContent of a section that contains an element with text 'Selectors'.\nconst sectionText = await page.$eval('*css=section >> text=Selectors', e => e.textContent);\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"auto-waiting"},"Auto-waiting"),(0,l.kt)("p",null,"Actions like ",(0,l.kt)("inlineCode",{parentName:"p"},"click")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"fill")," auto-wait for the element to be visible and ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/actionability"},"actionable"),". For example, click will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),(0,l.kt)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",(0,l.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,l.kt)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),(0,l.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,l.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),(0,l.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Playwright waits for #search element to be in the DOM\nawait page.fill('#search', 'query');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Playwright waits for element to stop animating\n// and accept clicks.\nawait page.click('#search');\n")),(0,l.kt)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Wait for #search to appear in the DOM.\nawait page.waitForSelector('#search', { state: 'attached' });\n// Wait for #promo to become visible, for example with `visibility:visible`.\nawait page.waitForSelector('#promo');\n")),(0,l.kt)("p",null,"... or to become hidden or detached"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Wait for #details to become hidden, for example with `display:none`.\nawait page.waitForSelector('#details', { state: 'hidden' });\n// Wait for #promo to be removed from the DOM.\nawait page.waitForSelector('#promo', { state: 'detached' });\n")),(0,l.kt)("h4",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageclickselector-options"},"page.click(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pagefillselector-value-options"},"page.fill(selector, value[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pagewaitforselectorselector-options"},"page.waitForSelector(selector[, options])"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"execution-contexts-nodejs-and-browser"},"Execution contexts: Node.js and Browser"),(0,l.kt)("p",null,"Playwright scripts run in your Node.js environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/docs/api/class-page.mdx#pageevaluatepagefunction-arg"},(0,l.kt)("inlineCode",{parentName:"a"},"page.evaluate"))," API can run a JavaScript function in the context\nof the web page and bring results back to the Node.js environment. Browser globals like\n",(0,l.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,l.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const href = await page.evaluate(() => document.location.href);\n")),(0,l.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const status = await page.evaluate(async () => {\n  const response = await fetch(location.href);\n  return response.status;\n});\n")),(0,l.kt)("h3",{id:"evaluation"},"Evaluation"),(0,l.kt)("p",null,"Functions passed inside ",(0,l.kt)("inlineCode",{parentName:"p"},"page.evaluate")," can accept parameters. These parameters are\nserialized and sent into your web page over the wire. You can pass primitive types, JSON-alike objects and remote object handles received from the page."),(0,l.kt)("p",null,"Right:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const data = { text: 'some data', value: 1 };\n// Pass |data| as a parameter.\nconst result = await page.evaluate(data => {\n  window.myApp.use(data);\n}, data);\n")),(0,l.kt)("p",null,"Wrong:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const data = { text: 'some data', value: 1 };\nconst result = await page.evaluate(() => {\n  // There is no |data| in the web page.\n  window.myApp.use(data);\n});\n")),(0,l.kt)("h4",{id:"api-reference-4"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageevaluatepagefunction-arg"},(0,l.kt)("inlineCode",{parentName:"a"},"page.evaluate(pageFunction[, arg])"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-frame#frameevaluatepagefunction-arg"},(0,l.kt)("inlineCode",{parentName:"a"},"frame.evaluate(pageFunction[, arg])"))),(0,l.kt)("li",{parentName:"ul"},"Evaluation argument ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/evaluationargument#evaluationargument"},"examples"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"object--element-handles"},"Object & Element handles"),(0,l.kt)("p",null,"Playwright can create Node-side handles to the page DOM elements or any other objects inside the page. These handles live in the Node.js process, whereas the actual objects reside in browser."),(0,l.kt)("p",null,"There are two types of handles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-jshandle#class-jshandle"},(0,l.kt)("inlineCode",{parentName:"a"},"JSHandle"))," to reference any JavaScript objects in the page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-elementhandle#class-elementhandle"},(0,l.kt)("inlineCode",{parentName:"a"},"ElementHandle"))," to reference DOM elements in the page")),(0,l.kt)("p",null,"Note that since any DOM element in the page is also a JavaScript object,\nPlaywright's ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-elementhandle"},(0,l.kt)("inlineCode",{parentName:"a"},"ElementHandle"))," extends\n",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-jshandle"},(0,l.kt)("inlineCode",{parentName:"a"},"JSHandle")),"."),(0,l.kt)("h3",{id:"handles-lifecycle"},"Handles Lifecycle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Handles can be acquired using the page methods ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageevaluatehandlepagefunction-arg"},(0,l.kt)("inlineCode",{parentName:"a"},"page.evaluateHandle")),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageselector"},(0,l.kt)("inlineCode",{parentName:"a"},"page.$"))," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageselector-1"},(0,l.kt)("inlineCode",{parentName:"a"},"page.$$"))," or\ntheir frame counterparts ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-frame#frameevaluatehandlepagefunction-arg"},(0,l.kt)("inlineCode",{parentName:"a"},"frame.evaluateHandle")),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-frame#frameselector"},(0,l.kt)("inlineCode",{parentName:"a"},"frame.$"))," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-frame#frameselector-1"},(0,l.kt)("inlineCode",{parentName:"a"},"frame.$$")),"."),(0,l.kt)("li",{parentName:"ul"},"Once created, handles will retain object from ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection"),"."),(0,l.kt)("li",{parentName:"ul"},"Handles will be ",(0,l.kt)("strong",{parentName:"li"},"automatically disposed")," once the page or frame they belong to navigates or closes."),(0,l.kt)("li",{parentName:"ul"},"Handles can be ",(0,l.kt)("strong",{parentName:"li"},"manually disposed")," using ",(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-jshandle#jshandledispose"},(0,l.kt)("inlineCode",{parentName:"a"},"jsHandle.dispose"))," method.")),(0,l.kt)("h3",{id:"example-elementhandle"},"Example: ElementHandle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// The first parameter of the elementHandle.evaluate callback is the element handle points to.\nconst ulElementHandle = await page.$('ul');\nawait ulElementHandle.evaluate(ulElement => getComputedStyle(ulElement).getPropertyValue('display'));\n")),(0,l.kt)("p",null,"Handles can also be passed as arguments to ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.4.0/api/class-page#pageevaluatepagefunction-arg"},(0,l.kt)("inlineCode",{parentName:"a"},"page.evaluate"))," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// In the page API, you can pass handle as a parameter.\nconst ulElementHandle = await page.$('ul');\nawait page.evaluate(uiElement => getComputedStyle(uiElement).getPropertyValue('display'), uiElement);\n")),(0,l.kt)("h3",{id:"example-jshandle"},"Example: JSHandle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Create a new array in the page, write a reference to it in\n// window.myArray and get a handle to it.\nconst myArrayHandle = await page.evaluateHandle(() => {\n  window.myArray = [1];\n  return myArray;\n});\n\n// Get current length of the array using the handle.\nconst length = await page.evaluate(\n  (arg) => arg.myArray.length,\n  { myArray: myArrayHandle }\n);\n\n// Add one more element to the array using the handle\nawait page.evaluate((arg) => arg.myArray.push(arg.newElement), {\n  myArray: myArrayHandle,\n  newElement: 2\n});\n\n// Get current length of the array using window.myArray reference.\nconst newLength = await page.evaluate(() => window.myArray.length);\n\n// Release the object when it's no longer needed.\nawait myArrayHandle.dispose();\n")),(0,l.kt)("h4",{id:"api-reference-5"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-jshandle"},"class ",(0,l.kt)("inlineCode",{parentName:"a"},"JSHandle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-elementhandle"},"class ",(0,l.kt)("inlineCode",{parentName:"a"},"ElementHandle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageevaluatehandlepagefunction-arg"},(0,l.kt)("inlineCode",{parentName:"a"},"page.evaluateHandle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageselector"},(0,l.kt)("inlineCode",{parentName:"a"},"page.$"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-page#pageselector-1"},(0,l.kt)("inlineCode",{parentName:"a"},"page.$$"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.4.0/api/class-jshandle#jshandleevaluatepagefunction-arg"},(0,l.kt)("inlineCode",{parentName:"a"},"jsHandle.evaluate")))))}p.isMDXComponent=!0}}]);