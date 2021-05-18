(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[33782],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return c},kt:function(){return d}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||l;return n?t.createElement(m,o(o({ref:a},c),{},{components:n})):t.createElement(m,o({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},23031:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var t=n(22122),r=n(19756),l=(n(67294),n(3905)),o={id:"verification",title:"Scraping and verification"},i={unversionedId:"verification",id:"version-1.0.0/verification",isDocsHomePage:!1,title:"Scraping and verification",description:"Contents",source:"@site/versioned_docs/version-1.0.0/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/docs/1.0.0/verification",version:"1.0.0",frontMatter:{id:"verification",title:"Scraping and verification"},sidebar:"version-1.0.0/docs",previous:{title:"Network",permalink:"/docs/1.0.0/network"},next:{title:"Navigation and loading",permalink:"/docs/1.0.0/loading"}},p=[{value:"Evaluating JavaScript",id:"evaluating-javascript",children:[]},{value:"Capturing screenshot",id:"capturing-screenshot",children:[]},{value:"Page events",id:"page-events",children:[]},{value:"Handling exceptions",id:"handling-exceptions",children:[]}],s={toc:p};function c(e){var a=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,t.Z)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"contents"},"Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#evaluating-javascript"},"Evaluating JavaScript")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#capturing-screenshot"},"Capturing screenshot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#page-events"},"Page events")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handling-exceptions"},"Handling exceptions"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"evaluating-javascript"},"Evaluating JavaScript"),(0,l.kt)("p",null,"Execute JavaScript function in the page:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const href = await page.evaluate(() => document.location.href);\n")),(0,l.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const status = await page.evaluate(async () => {\n  const response = await fetch(location.href);\n  return response.status;\n});\n")),(0,l.kt)("p",null,"Get object handle and use it in multiple evaluations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Create a new array in the page, write a reference to it in\n// window.myArray and get a handle to it.\nconst myArrayHandle = await page.evaluateHandle(() => {\n  window.myArray = [1];\n  return myArray;\n});\n\n// Get current length of the array using the handle.\nconst length = await page.evaluate(\n  (arg) => arg.myArray.length,\n  { myArray: myArrayHandle }\n);\n\n// Add one more element to the array using the handle\nawait page.evaluate((arg) => arg.myArray.push(arg.newElement), {\n  myArray: myArrayHandle,\n  newElement: 2\n});\n\n// Get current length of the array using window.myArray reference.\nconst newLength = await page.evaluate(() => window.myArray.length);\n\n// Release the object when it's no longer needed.\nawait myArrayHandle.dispose();\n")),(0,l.kt)("h4",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#pageselector"},"page.$(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#pageselector-1"},"page.$$(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#pageevalselector-pagefunction-arg"},"page.$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#pageevalselector-pagefunction-arg-1"},"page.$$eval(selector, pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#pageevaluatepagefunction-arg"},"page.evaluate(pageFunction[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#pageevaluatehandlepagefunction-arg"},"page.evaluateHandle(pageFunction[, arg])"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"capturing-screenshot"},"Capturing screenshot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Save to file\nawait page.screenshot({path: 'screenshot.png'});\n\n// Capture full page\nawait page.screenshot({path: 'screenshot.png', fullPage: true});\n\n// Capture into buffer\nconst buffer = await page.screenshot();\nconsole.log(buffer.toString('base64'));\n\n// Capture given element\nconst elementHandle = await page.$('.header');\nawait elementHandle.screenshot({ path: 'screenshot.png' });\n")),(0,l.kt)("h4",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#pagescreenshotoptions"},"page.screenshot([options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-elementhandle#elementhandlescreenshotoptions"},"elementHandle.screenshot([options])"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"page-events"},"Page events"),(0,l.kt)("p",null,"You can listen for various events on the ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," object. Following are just some of the examples of the events you can assert and handle:"),(0,l.kt)("h4",{id:"console---get-all-console-messages-from-the-page"},(0,l.kt)("inlineCode",{parentName:"h4"},'"console"')," - get all console messages from the page"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"page.on('console', msg => {\n  // Handle only errors.\n  if (msg.type() !== 'error')\n    return;\n  console.log(`text: \"${msg.text()}\"`);\n});\n")),(0,l.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,l.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"page.on('dialog', dialog => {\n  dialog.accept();\n});\n")),(0,l.kt)("h4",{id:"popup---handle-popup-windows"},(0,l.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\n")),(0,l.kt)("h4",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-consolemessage#class-consolemessage"},"class: ConsoleMessage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#class-page"},"class: Page")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#event-console"},"event: 'console'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#event-dialog"},"event: 'dialog'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-page#event-popup"},"event: 'popup'"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"handling-exceptions"},"Handling exceptions"),(0,l.kt)("p",null,"Listen uncaught exceptions in the page:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Log all uncaught errors to the terminal\npage.on('pageerror', exception => {\n  console.log(`Uncaught exception: \"${exception}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n")),(0,l.kt)("h4",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0.0/api/class-browsercontext#event-pageerror"},"event: 'pageerror'"))),(0,l.kt)("br",null))}c.isMDXComponent=!0}}]);