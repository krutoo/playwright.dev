(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[28445],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=s(t),d=n,m=k["".concat(p,".").concat(d)]||k[d]||u[d]||o;return t?a.createElement(m,l(l({ref:r},c),{},{components:t})):a.createElement(m,l({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},58215:function(e,r,t){"use strict";t(67294)},41395:function(e,r,t){"use strict";t(67294),t(80944)},79443:function(e,r,t){"use strict";var a=(0,t(67294).createContext)(void 0);r.Z=a},80944:function(e,r,t){"use strict";var a=t(67294),n=t(79443);r.Z=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},94404:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=t(22122),n=t(19756),o=(t(67294),t(3905)),l=(t(41395),t(58215),{id:"class-worker",title:"Worker"}),i={unversionedId:"api/class-worker",id:"api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/docs/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/docs/next/api/class-worker",version:"current",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"api",previous:{title:"WebSocket",permalink:"/docs/next/api/class-websocket"},next:{title:"Android",permalink:"/docs/next/api/class-android"}},p=[{value:"worker.on(&#39;close&#39;)",id:"workeronclose",children:[]},{value:"worker.evaluate(pageFunction, arg)",id:"workerevaluatepagefunction-arg",children:[]},{value:"worker.evaluateHandle(pageFunction, arg)",id:"workerevaluatehandlepagefunction-arg",children:[]},{value:"worker.url()",id:"workerurl",children:[]}],s={toc:p};function c(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Worker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"page.on('worker', worker => {\n  console.log('Worker created: ' + worker.url());\n  worker.on('close', worker => console.log('Worker destroyed: ' + worker.url()));\n});\n\nconsole.log('Current workers:');\nfor (const worker of page.workers())\n  console.log('  ' + worker.url());\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-worker#workeronclose"},"worker.on('close')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-worker#workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-worker#workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-worker#workerurl"},"worker.url()"))),(0,o.kt)("h2",{id:"workeronclose"},"worker.on('close')"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Emitted when this dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is terminated."),(0,o.kt)("h2",{id:"workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Function to be evaluated in the worker context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg")," <",(0,o.kt)("a",{parentName:"li",href:"/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"> Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction"),"."),(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">>")),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction[, arg])")," returns a non-",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction[, arg])")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,o.kt)("h2",{id:"workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Function to be evaluated in the worker context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg")," <",(0,o.kt)("a",{parentName:"li",href:"/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"> Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"pageFunction"),"."),(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),">>")),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"pageFunction")," as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"The only difference between ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction[, arg])")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction[, arg])")," is that ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction[, arg])")," returns ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/class-worker#workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("h2",{id:"workerurl"},"worker.url()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")))}c.isMDXComponent=!0}}]);