"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5547],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),h=c(a),d=r,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(g,s(s({ref:e},p),{},{components:a})):n.createElement(g,s({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3811:function(t,e,a){a.d(e,{Z:function(){return c}});var n=a(7294),r=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;function c({children:t,hidden:e,className:a}){return n.createElement("div",((t,e)=>{for(var a in e||(e={}))s.call(e,a)&&l(t,a,e[a]);if(i)for(var a of i(e))o.call(e,a)&&l(t,a,e[a]);return t})({role:"tabpanel"},{hidden:e,className:a}),t)}},3824:function(t,e,a){a.d(e,{Z:function(){return y}});var n=a(7294),r=a(4939),i=a(9670),s=a(6010),o="tabItem_LplD",l=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))h.call(e,a)&&g(t,a,e[a]);if(u)for(var a of u(e))d.call(e,a)&&g(t,a,e[a]);return t};function m(t){var e,a,r;const{lazy:l,block:u,defaultValue:h,values:d,groupId:g,className:m}=t,y=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:y.map((({props:{value:t,label:e,attributes:a}})=>({value:t,label:e,attributes:a}))),b=(0,i.lx)(f,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===h?h:null!=(r=null!=h?h:null==(e=y.find((t=>t.props.default)))?void 0:e.props.value)?r:null==(a=y[0])?void 0:a.props.value;if(null!==v&&!f.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,i.UB)(),[x,T]=(0,n.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:_}=(0,i.o5)();if(null!=g){const t=w[g];null!=t&&t!==x&&f.some((e=>e.value===t))&&T(t)}const P=t=>{const e=t.currentTarget,a=O.indexOf(e),n=f[a].value;n!==x&&(_(e),T(n),null!=g&&N(g,n))},j=t=>{let e=null;switch(t.key){case"ArrowRight":{const a=O.indexOf(t.currentTarget)+1;e=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(t.currentTarget)-1;e=O[a]||O[O.length-1];break}}null==e||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},m)},f.map((({value:t,label:e,attributes:a})=>{return n.createElement("li",(r=k({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:t=>O.push(t),onKeyDown:j,onFocus:P,onClick:P},a),i={className:(0,s.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":x===t})},c(r,p(i))),null!=e?e:t);var r,i}))),l?(0,n.cloneElement)(y.filter((t=>t.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function y(t){const e=(0,r.Z)();return n.createElement(m,k({key:String(e)},t))}},5034:function(t,e,a){a.r(e),a.d(e,{assets:function(){return y},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return f}});var n=a(3905),r=a(3824),i=a(3811),s=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&h(t,a,e[a]);if(c)for(var a of c(e))u.call(e,a)&&h(t,a,e[a]);return t};const g={id:"class-tracing",title:"Tracing"},k=void 0,m={unversionedId:"api/class-tracing",id:"version-1.23/api/class-tracing",title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/versioned_docs/version-1.23/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/python/docs/api/class-tracing",tags:[],version:"1.23",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"api",previous:{title:"Touchscreen",permalink:"/python/docs/api/class-touchscreen"},next:{title:"Video",permalink:"/python/docs/api/class-video"}},y={},f=[{value:"tracing.start(**kwargs)",id:"tracing-start",level:2},{value:"tracing.start_chunk(**kwargs)",id:"tracing-start-chunk",level:2},{value:"tracing.stop(**kwargs)",id:"tracing-stop",level:2},{value:"tracing.stop_chunk(**kwargs)",id:"tracing-stop-chunk",level:2}],b={toc:f};function v(t){var e,a=t,{components:s}=a,h=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&c)for(var n of c(t))e.indexOf(n)<0&&u.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=d(d({},b),h),o(e,l({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/trace-viewer"}),"Trace Viewer")," after Playwright script runs."),(0,n.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'browser = chromium.launch()\ncontext = browser.new_context()\ncontext.tracing.start(screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,n.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'browser = await chromium.launch()\ncontext = await browser.new_context()\nawait context.tracing.start(screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-tracing#tracing-start"}),"tracing.start(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-tracing#tracing-start-chunk"}),"tracing.start_chunk(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-tracing#tracing-stop"}),"tracing.stop(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-tracing#tracing-stop-chunk"}),"tracing.stop_chunk(**kwargs)"))),(0,n.kt)("h2",d({},{id:"tracing-start"}),"tracing.start(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,n.kt)("inlineCode",{parentName:"li"},"traces_dir")," folder specified in ",(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-browsertype#browser-type-launch"}),"browser_type.launch(**kwargs)"),".",(0,n.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"screenshots"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,n.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"snapshots"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," If this option is true tracing will",(0,n.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"capture DOM snapshot on every action"),(0,n.kt)("li",{parentName:"ul"},"record network activity"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sources"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-sources"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">"," Whether to include source files for trace actions.",(0,n.kt)("a",{href:"#tracing-start-option-sources",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"title"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Trace name to be shown in the Trace Viewer.",(0,n.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Start tracing."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\ncontext.tracing.stop(path = "trace.zip")\n'))),(0,n.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\nawait context.tracing.stop(path = "trace.zip")\n')))),(0,n.kt)("h2",d({},{id:"tracing-start-chunk"}),"tracing.start_chunk(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"title"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Trace name to be shown in the Trace Viewer.",(0,n.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),", use ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-tracing#tracing-start"}),"tracing.start(**kwargs)")," once, and then create multiple trace chunks with ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-tracing#tracing-start-chunk"}),"tracing.start_chunk(**kwargs)")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-tracing#tracing-stop-chunk"}),"tracing.stop_chunk(**kwargs)"),"."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = context.new_page()\npage.goto("https://playwright.dev")\n\ncontext.tracing.start_chunk()\npage.click("text=Get Started")\n# Everything between start_chunk and stop_chunk will be recorded in the trace.\ncontext.tracing.stop_chunk(path = "trace1.zip")\n\ncontext.tracing.start_chunk()\npage.goto("http://example.com")\n# Save a second trace file with different actions.\ncontext.tracing.stop_chunk(path = "trace2.zip")\n'))),(0,n.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'await context.tracing.start(name="trace", screenshots=True, snapshots=True)\npage = await context.new_page()\nawait page.goto("https://playwright.dev")\n\nawait context.tracing.start_chunk()\nawait page.click("text=Get Started")\n# Everything between start_chunk and stop_chunk will be recorded in the trace.\nawait context.tracing.stop_chunk(path = "trace1.zip")\n\nawait context.tracing.start_chunk()\nawait page.goto("http://example.com")\n# Save a second trace file with different actions.\nawait context.tracing.stop_chunk(path = "trace2.zip")\n')))),(0,n.kt)("h2",d({},{id:"tracing-stop"}),"tracing.stop(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,n.kt)("a",d({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]",">"," Export trace into the file with the given path.",(0,n.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Stop tracing."),(0,n.kt)("h2",d({},{id:"tracing-stop-chunk"}),"tracing.stop_chunk(**kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,n.kt)("a",d({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]",">"," Export trace collected since the last ",(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-tracing#tracing-start-chunk"}),"tracing.start_chunk(**kwargs)")," call into the file with the given path.",(0,n.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,n.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Stop the trace chunk. See ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-tracing#tracing-start-chunk"}),"tracing.start_chunk(**kwargs)")," for more details about multiple trace chunks."))}v.isMDXComponent=!0}}]);