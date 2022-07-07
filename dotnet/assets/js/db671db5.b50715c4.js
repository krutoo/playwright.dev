"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2066],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=s,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return k}});var a=n(3905),s=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const u={id:"class-consolemessage",title:"ConsoleMessage"},g=void 0,d={unversionedId:"api/class-consolemessage",id:"version-1.23/api/class-consolemessage",title:"ConsoleMessage",description:"ConsoleMessage] objects are dispatched by page via the [event Page.Console event. For each console messages logged in the page there will be corresponding event in the Playwright context.",source:"@site/versioned_docs/version-1.23/api/class-consolemessage.mdx",sourceDirName:"api",slug:"/api/class-consolemessage",permalink:"/dotnet/docs/api/class-consolemessage",tags:[],version:"1.23",frontMatter:{id:"class-consolemessage",title:"ConsoleMessage"},sidebar:"api",previous:{title:"BrowserType",permalink:"/dotnet/docs/api/class-browsertype"},next:{title:"Dialog",permalink:"/dotnet/docs/api/class-dialog"}},f={},k=[{value:"ConsoleMessage.Args",id:"console-message-args",level:2},{value:"ConsoleMessage.Location",id:"console-message-location",level:2},{value:"ConsoleMessage.Text",id:"console-message-text",level:2},{value:"ConsoleMessage.Type",id:"console-message-type",level:2}],h={toc:k};function y(e){var t,n=e,{components:s}=n,p=((e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),p),o(t,r({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")," objects are dispatched by page via the ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-console"}),"event Page.Console")," event. For each console messages logged in the page there will be corresponding event in the Playwright context."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-csharp"}),'// Listen for all System.out.printlns\npage.Console += (_, msg) => Console.WriteLine(msg.Text);\n\n// Listen for all console events and handle errors\npage.Console += (_, msg) =>\n{\n    if ("error".Equals(msg.Type))\n        Console.WriteLine("Error text: " + msg.Text);\n};\n\n// Get the next System.out.println\nvar waitForMessageTask = page.WaitForConsoleMessageAsync();\nawait page.EvaluateAsync("console.log(\'hello\', 42, { foo: \'bar\' });");\nvar message = await waitForMessageTask;\n// Deconstruct console.log arguments\nawait message.Args.ElementAt(0).JsonValueAsync<string>(); // hello\nawait message.Args.ElementAt(1).JsonValueAsync<int>(); // 42\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/api/class-consolemessage#console-message-args"}),"ConsoleMessage.Args")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/api/class-consolemessage#console-message-location"}),"ConsoleMessage.Location")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/api/class-consolemessage#console-message-text"}),"ConsoleMessage.Text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/api/class-consolemessage#console-message-type"}),"ConsoleMessage.Type"))),(0,a.kt)("h2",m({},{id:"console-message-args"}),"ConsoleMessage.Args"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-args-return"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.ienumerable",title:"IEnumerable"}),"IEnumerable"),"<",(0,a.kt)("a",m({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",">",(0,a.kt)("a",{href:"#console-message-args-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"List of arguments passed to a ",(0,a.kt)("inlineCode",{parentName:"p"},"console")," function call. See also ",(0,a.kt)("a",m({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-event-console"}),"event Page.Console"),"."),(0,a.kt)("h2",m({},{id:"console-message-location"}),"ConsoleMessage.Location"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-location-return"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#console-message-location-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"URL of the resource followed by 0-based line and column numbers in the resource formatted as ",(0,a.kt)("inlineCode",{parentName:"p"},"URL:line:column"),"."),(0,a.kt)("h2",m({},{id:"console-message-text"}),"ConsoleMessage.Text"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-text-return"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#console-message-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"The text of the console message."),(0,a.kt)("h2",m({},{id:"console-message-type"}),"ConsoleMessage.Type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-type-return"})," ","<",(0,a.kt)("a",m({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#console-message-type-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"One of the following values: ",(0,a.kt)("inlineCode",{parentName:"p"},"'log'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'debug'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'info'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'error'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'warning'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'dir'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'dirxml'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'table'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'trace'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'clear'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'startGroup'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'endGroup'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'assert'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'profile'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'count'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}y.isMDXComponent=!0}}]);