(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[41903],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=u(r),y=a,h=g["".concat(o,".").concat(y)]||g[y]||s[y]||i;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},34818:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={id:"languages",title:"Supported languages"},p={unversionedId:"languages",id:"version-1.4.0/languages",isDocsHomePage:!1,title:"Supported languages",description:"The Playwright API is available in multiple languages.",source:"@site/versioned_docs/version-1.4.0/languages.mdx",sourceDirName:".",slug:"/languages",permalink:"/docs/1.4.0/languages",version:"1.4.0",frontMatter:{id:"languages",title:"Supported languages"},sidebar:"version-1.4.0/docs",previous:{title:"Debugging tools",permalink:"/docs/1.4.0/debug"},next:{title:"Element selectors",permalink:"/docs/1.4.0/selectors"}},o=[{value:"JavaScript and TypeScript",id:"javascript-and-typescript",children:[]},{value:"Python",id:"python",children:[]},{value:"C#",id:"c",children:[]}],u={toc:o};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Playwright API is available in multiple languages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#javascript-and-typescript"},"JavaScript and TypeScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#python"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#c"},"C#"))),(0,i.kt)("h2",{id:"javascript-and-typescript"},"JavaScript and TypeScript"),(0,i.kt)("p",null,"Playwright for JavaScript and TypeScript is generally available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -D playwright\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/playwright"},"Playwright on NPM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"GitHub repo"))),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,"Playwright in Python is available in preview."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install playwright\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/playwright/"},"Playwright on PyPI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"GitHub repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-pytest"},"Pytest integration"))),(0,i.kt)("h2",{id:"c"},"C#"),(0,i.kt)("p",null,"Playwright in C# is available in preview."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet add package PlaywrightSharp\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/PlaywrightSharp/"},"Playwright on NuGet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hardkoded/playwright-sharp"},"GitHub repo"))))}c.isMDXComponent=!0}}]);