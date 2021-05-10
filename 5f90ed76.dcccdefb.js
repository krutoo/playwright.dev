(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{362:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),c=(a(0),a(889)),o=(a(893),a(894),{id:"class-electronapplication",title:"ElectronApplication"}),r={unversionedId:"api/class-electronapplication",id:"version-1.9.0/api/class-electronapplication",isDocsHomePage:!1,title:"ElectronApplication",description:"Electron application representation. You can use electron.launch([options]) to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:",source:"@site/versioned_docs/version-1.9.0/api/class-electronapplication.mdx",slug:"/api/class-electronapplication",permalink:"/docs/1.9.0/api/class-electronapplication",version:"1.9.0",sidebar:"version-1.9.0/api",previous:{title:"Electron",permalink:"/docs/1.9.0/api/class-electron"}},l=[{value:"electronApplication.on(&#39;close&#39;)",id:"electronapplicationonclose",children:[]},{value:"electronApplication.on(&#39;window&#39;)",id:"electronapplicationonwindow",children:[]},{value:"electronApplication.close()",id:"electronapplicationclose",children:[]},{value:"electronApplication.context()",id:"electronapplicationcontext",children:[]},{value:"electronApplication.evaluate(pageFunction, arg)",id:"electronapplicationevaluatepagefunction-arg",children:[]},{value:"electronApplication.evaluateHandle(pageFunction, arg)",id:"electronapplicationevaluatehandlepagefunction-arg",children:[]},{value:"electronApplication.firstWindow()",id:"electronapplicationfirstwindow",children:[]},{value:"electronApplication.waitForEvent(event, optionsOrPredicate)",id:"electronapplicationwaitforeventevent-optionsorpredicate",children:[]},{value:"electronApplication.windows()",id:"electronapplicationwindows",children:[]}],p={toc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Electron application representation. You can use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electron#electronlaunchoptions"}),"electron.launch([options])")," to obtain the application instance. This instance you can control main electron process as well as work with Electron windows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { _electron: electron } = require('playwright');\n\n(async () => {\n  // Launch Electron app.\n  const electronApp = await electron.launch({ args: ['main.js'] });\n\n  // Evaluation expression in the Electron context.\n  const appPath = await electronApp.evaluate(async (electron) => {\n    // This runs in the main Electron process, |electron| parameter\n    // here is always the result of the require('electron') in the main\n    // app script.\n    return electron.getAppPath();\n  });\n\n  // Get the first window that the app opens, wait if necessary.\n  const window = await electronApp.firstWindow();\n  // Print the title.\n  console.log(await window.title());\n  // Capture a screenshot.\n  await window.screenshot({ path: 'intro.png' });\n  // Direct Electron console to Node terminal.\n  window.on('console', console.log);\n  // Click button.\n  await window.click('text=Click me');\n})();\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationonclose"}),"electronApplication.on('close')")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationonwindow"}),"electronApplication.on('window')")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationclose"}),"electronApplication.close()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationcontext"}),"electronApplication.context()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationfirstwindow"}),"electronApplication.firstWindow()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationwaitforeventevent-optionsorpredicate"}),"electronApplication.waitForEvent(event[, optionsOrPredicate])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationwindows"}),"electronApplication.windows()"))),Object(c.b)("h2",{id:"electronapplicationonclose"},"electronApplication.on('close')"),Object(c.b)("p",null,"This event is issued when the application closes."),Object(c.b)("h2",{id:"electronapplicationonwindow"},"electronApplication.on('window')"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"type: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page",title:"Page"}),"Page"),">")),Object(c.b)("p",null,"This event is issued for every window that is created ",Object(c.b)("strong",{parentName:"p"},"and loaded")," in Electron. It contains a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page",title:"Page"}),"Page")," that can be used for Playwright automation."),Object(c.b)("h2",{id:"electronapplicationclose"},"electronApplication.close()"),Object(c.b)("p",null,"Closes Electron application."),Object(c.b)("h2",{id:"electronapplicationcontext"},"electronApplication.context()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">")),Object(c.b)("p",null,"This method returns browser context that can be used for setting up context-wide routing, etc."),Object(c.b)("h2",{id:"electronapplicationevaluatepagefunction-arg"},"electronApplication.evaluate(pageFunction","[, arg]",")"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electron",title:"Electron"}),"Electron"),"> Function to be evaluated in the worker context."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",Object(c.b)("inlineCode",{parentName:"li"},"pageFunction"),"."),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">>")),Object(c.b)("p",null,"Returns the return value of ",Object(c.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(c.b)("p",null,"If the function passed to the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," returns a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),Object(c.b)("p",null,"If the function passed to the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," returns a non-",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," returns ",Object(c.b)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",Object(c.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(c.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(c.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(c.b)("inlineCode",{parentName:"p"},"-Infinity"),"."),Object(c.b)("h2",{id:"electronapplicationevaluatehandlepagefunction-arg"},"electronApplication.evaluateHandle(pageFunction, arg)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-electron",title:"Electron"}),"Electron"),"> Function to be evaluated in the worker context."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]",">"),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(c.b)("p",null,"Returns the return value of ",Object(c.b)("inlineCode",{parentName:"p"},"pageFunction")," as a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(c.b)("p",null,"The only difference between ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatepagefunction-arg"}),"electronApplication.evaluate(pageFunction[, arg])")," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")," is that ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")," returns ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(c.b)("p",null,"If the function passed to the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")," returns a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-electronapplication#electronapplicationevaluatehandlepagefunction-arg"}),"electronApplication.evaluateHandle(pageFunction, arg)")," would wait for the promise to resolve and return its value."),Object(c.b)("h2",{id:"electronapplicationfirstwindow"},"electronApplication.firstWindow()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page",title:"Page"}),"Page"),">>")),Object(c.b)("p",null,"Convenience method that waits for the first application window to be opened. Typically your script will start with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const electronApp = await electron.launch({\n    args: ['main.js']\n  });\n  const window = await electronApp.firstWindow();\n  // ...\n")),Object(c.b)("h2",{id:"electronapplicationwaitforeventevent-optionsorpredicate"},"electronApplication.waitForEvent(event","[, optionsOrPredicate]",")"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"event")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Event name, same one typically passed into ",Object(c.b)("inlineCode",{parentName:"li"},"*.on(event)"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"optionsOrPredicate")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Either a predicate that receives an event or an options object. Optional.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"predicate")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"> receives the event data and resolves to truthy value when the waiting should resolve."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> maximum time to wait for in milliseconds. Defaults to ",Object(c.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(c.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)"),"."))),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>")),Object(c.b)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the application is closed before the event is fired. Returns the event data value."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [window] = await Promise.all([\n  electronApp.waitForEvent('window'),\n  mainWindow.click('button')\n]);\n")),Object(c.b)("h2",{id:"electronapplicationwindows"},"electronApplication.windows()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-page",title:"Page"}),"Page"),">>")),Object(c.b)("p",null,"Convenience method that returns all the opened windows."))}s.isMDXComponent=!0},889:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return O}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,O=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return a?i.a.createElement(O,r(r({ref:t},p),{},{components:a})):i.a.createElement(O,r({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var p=2;p<c;p++)o[p]=a[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},890:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},891:function(e,t,a){"use strict";var n=a(0),i=a(892);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},893:function(e,t,a){"use strict";a(0),a(891),a(890),a(55)},894:function(e,t,a){"use strict";a(3),a(0)}}]);