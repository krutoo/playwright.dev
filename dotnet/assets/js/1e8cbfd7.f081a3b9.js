"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8270],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(r),h=o,m=f["".concat(l,".").concat(h)]||f[h]||p[h]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},378:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))i.call(t,r)&&u(e,r,t[r]);return e};const f={id:"screenshots",title:"Screenshots"},h=void 0,m={unversionedId:"screenshots",id:"version-1.22/screenshots",title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/versioned_docs/version-1.22/screenshots.mdx",sourceDirName:".",slug:"/screenshots",permalink:"/dotnet/docs/1.22/screenshots",tags:[],version:"1.22",frontMatter:{id:"screenshots",title:"Screenshots"},sidebar:"docs",previous:{title:"Page Object Models",permalink:"/dotnet/docs/1.22/pom"},next:{title:"Selectors",permalink:"/dotnet/docs/1.22/selectors"}},d={},y=[{value:"Full page screenshots",id:"full-page-screenshots",level:2},{value:"Capture into buffer",id:"capture-into-buffer",level:2},{value:"Element screenshot",id:"element-screenshot",level:2}],b={toc:y};function g(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),u),a(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),(0,n.kt)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#full-page-screenshots"}),"Full page screenshots")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#capture-into-buffer"}),"Capture into buffer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#element-screenshot"}),"Element screenshot"))),(0,n.kt)("h2",p({},{id:"full-page-screenshots"}),"Full page screenshots"),(0,n.kt)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),(0,n.kt)("h2",p({},{id:"capture-into-buffer"}),"Capture into buffer"),(0,n.kt)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),"var bytes = await page.ScreenshotAsync();\n")),(0,n.kt)("h2",p({},{id:"element-screenshot"}),"Element screenshot"),(0,n.kt)("p",null,"Sometimes it is useful to take a screenshot of a single element."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'await page.Locator(".header").ScreenshotAsync(new LocatorScreenshotOptions { Path = "screenshot.png" });\n')))}g.isMDXComponent=!0}}]);