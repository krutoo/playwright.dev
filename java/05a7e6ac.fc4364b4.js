(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{269:function(e,a,t){"use strict";function r(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(n&&(n+=" "),n+=a);return n}},270:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return j}));var r=t(0),n=t.n(r);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),b=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=b(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},d=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,j=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return t?n.a.createElement(j,i(i({ref:a},s),{},{components:t})):n.a.createElement(j,i({ref:a},s))}));function j(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},271:function(e,a,t){"use strict";var r=t(0),n=t(272);a.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},272:function(e,a,t){"use strict";var r=t(0),n=Object(r.createContext)(void 0);a.a=n},273:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(271),l=t(269),i=t(53),c=t.n(i),s=37,b=39;a.a=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,p=e.values,u=e.groupId,d=e.className,j=Object(o.a)(),m=j.tabGroupChoices,O=j.setTabGroupChoices,f=Object(r.useState)(i),v=f[0],h=f[1],k=r.Children.toArray(e.children);if(null!=u){var w=m[u];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&h(w)}var g=function(e){h(e),null!=u&&O(u,e)},N=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var a=e.value,t=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===a,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case b:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(N,e.target,e)},onFocus:function(){return g(a)},onClick:function(){g(a)}},t)}))),a?Object(r.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},k.map((function(e,a){return Object(r.cloneElement)(e,{key:a,hidden:e.props.value!==v})}))))}},274:function(e,a,t){"use strict";var r=t(3),n=t(0),o=t.n(n);a.a=function(e){var a=e.children,t=e.hidden,n=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),a)}},74:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return b}));var r=t(3),n=t(7),o=(t(0),t(270)),l=(t(273),t(274),{id:"class-worker",title:"Worker"}),i={unversionedId:"api/class-worker",id:"api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/docs/api/class-worker.mdx",slug:"/api/class-worker",permalink:"/java/docs/next/api/class-worker",version:"current",sidebar:"api",previous:{title:"WebSocketFrame",permalink:"/java/docs/next/api/class-websocketframe"}},c=[{value:"Worker.onClose(handler)",id:"workeronclosehandler",children:[]},{value:"Worker.evaluate(expression, arg)",id:"workerevaluateexpression-arg",children:[]},{value:"Worker.evaluateHandle(expression, arg)",id:"workerevaluatehandleexpression-arg",children:[]},{value:"Worker.url()",id:"workerurl",children:[]},{value:"Worker.waitForClose(options, callback)",id:"workerwaitforcloseoptions-callback",children:[]}],s={toc:c};function b(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Worker class represents a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),". ",Object(o.b)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",Object(o.b)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'page.onWorker(worker -> {\n  System.out.println("Worker created: " + worker.url());\n  worker.onClose(worker1 -> System.out.println("Worker destroyed: " + worker1.url()));\n});\nSystem.out.println("Current workers:");\nfor (Worker worker : page.workers())\n  System.out.println("  " + worker.url());\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-worker#workeronclosehandler"}),"Worker.onClose(handler)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-worker#workerevaluateexpression-arg"}),"Worker.evaluate(expression[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-worker#workerevaluatehandleexpression-arg"}),"Worker.evaluateHandle(expression[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-worker#workerurl"}),"Worker.url()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-worker#workerwaitforcloseoptions-callback"}),"Worker.waitForClose([options], callback)"))),Object(o.b)("h2",{id:"workeronclosehandler"},"Worker.onClose(handler)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-worker",title:"Worker"}),"Worker"),">")),Object(o.b)("p",null,"Emitted when this dedicated ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),Object(o.b)("h2",{id:"workerevaluateexpression-arg"},"Worker.evaluate(expression","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expression")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"}),"Object"),">")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluateexpression-arg"}),"Worker.evaluate(expression[, arg])")," returns a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluateexpression-arg"}),"Worker.evaluate(expression[, arg])")," would wait for the promise to resolve and return its value."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluateexpression-arg"}),"Worker.evaluate(expression[, arg])")," returns a non-",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluateexpression-arg"}),"Worker.evaluate(expression[, arg])")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),"."),Object(o.b)("h2",{id:"workerevaluatehandleexpression-arg"},"Worker.evaluateHandle(expression","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expression")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"expression")," as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"The only difference between ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluateexpression-arg"}),"Worker.evaluate(expression[, arg])")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluatehandleexpression-arg"}),"Worker.evaluateHandle(expression[, arg])")," is that ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluatehandleexpression-arg"}),"Worker.evaluateHandle(expression[, arg])")," returns ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluatehandleexpression-arg"}),"Worker.evaluateHandle(expression[, arg])")," returns a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/java/docs/next/api/class-worker#workerevaluatehandleexpression-arg"}),"Worker.evaluateHandle(expression[, arg])")," would wait for the promise to resolve and return its value."),Object(o.b)("h2",{id:"workerurl"},"Worker.url()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),Object(o.b)("h2",{id:"workerwaitforcloseoptions-callback"},"Worker.waitForClose(","[options]",", callback)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options")," <",Object(o.b)("inlineCode",{parentName:"li"},"Worker.WaitForCloseOptions"),">",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setTimeout")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),"> Maximum time to wait for in milliseconds. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(o.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"}),"BrowserContext.setDefaultTimeout(timeout)"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"callback")," <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"}),"Runnable"),"> Callback that performs the action triggering the event."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/java/docs/next/api/class-worker",title:"Worker"}),"Worker"),">")),Object(o.b)("p",null,"Performs action and waits for the Worker to close."))}b.isMDXComponent=!0}}]);