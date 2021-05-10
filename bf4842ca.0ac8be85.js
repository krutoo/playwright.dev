(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{680:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(889)),c=(r(893),r(894),{id:"class-worker",title:"Worker"}),i={unversionedId:"api/class-worker",id:"version-1.11.0/api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.11.0/api/class-worker.mdx",slug:"/api/class-worker",permalink:"/docs/api/class-worker",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"WebSocket",permalink:"/docs/api/class-websocket"},next:{title:"Android",permalink:"/docs/api/class-android"}},l=[{value:"worker.on(&#39;close&#39;)",id:"workeronclose",children:[]},{value:"worker.evaluate(pageFunction, arg)",id:"workerevaluatepagefunction-arg",children:[]},{value:"worker.evaluateHandle(pageFunction, arg)",id:"workerevaluatehandlepagefunction-arg",children:[]},{value:"worker.url()",id:"workerurl",children:[]}],p={toc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Worker class represents a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),". ",Object(o.b)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",Object(o.b)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"page.on('worker', worker => {\n  console.log('Worker created: ' + worker.url());\n  worker.on('close', worker => console.log('Worker destroyed: ' + worker.url()));\n});\n\nconsole.log('Current workers:');\nfor (const worker of page.workers())\n  console.log('  ' + worker.url());\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-worker#workeronclose"}),"worker.on('close')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-worker#workerurl"}),"worker.url()"))),Object(o.b)("h2",{id:"workeronclose"},"worker.on('close')"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-worker",title:"Worker"}),"Worker"),">")),Object(o.b)("p",null,"Emitted when this dedicated ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),Object(o.b)("h2",{id:"workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Function to be evaluated in the worker context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">>")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," returns a non-",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),"."),Object(o.b)("h2",{id:"workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Function to be evaluated in the worker context."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"pageFunction")," as a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"The only difference between ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")," is that ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")," returns ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),Object(o.b)("h2",{id:"workerurl"},"worker.url()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")))}s.isMDXComponent=!0},889:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=a,O=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?n.a.createElement(O,i(i({ref:t},p),{},{components:r})):n.a.createElement(O,i({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},890:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},891:function(e,t,r){"use strict";var a=r(0),n=r(892);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},893:function(e,t,r){"use strict";r(0),r(891),r(890),r(55)},894:function(e,t,r){"use strict";r(3),r(0)}}]);