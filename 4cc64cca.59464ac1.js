(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(889)),o=(n(893),n(894),{id:"screenshots",title:"Screenshots"}),s={unversionedId:"screenshots",id:"version-1.10.0/screenshots",isDocsHomePage:!1,title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/versioned_docs/version-1.10.0/screenshots.mdx",slug:"/screenshots",permalink:"/docs/1.10.0/screenshots",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Page Object Models",permalink:"/docs/1.10.0/pom"},next:{title:"Verification",permalink:"/docs/1.10.0/verification"}},i=[{value:"Full page screenshots",id:"full-page-screenshots",children:[]},{value:"Capture into buffer",id:"capture-into-buffer",children:[]},{value:"Element screenshot",id:"element-screenshot",children:[{value:"API reference",id:"api-reference",children:[]}]}],l={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"await page.screenshot({ path: 'screenshot.png' });\n")),Object(c.b)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#full-page-screenshots"}),"Full page screenshots")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#capture-into-buffer"}),"Capture into buffer")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"#element-screenshot"}),"Element screenshot"))),Object(c.b)("h2",{id:"full-page-screenshots"},"Full page screenshots"),Object(c.b)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"await page.screenshot({ path: 'screenshot.png', fullPage: true });\n")),Object(c.b)("h2",{id:"capture-into-buffer"},"Capture into buffer"),Object(c.b)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const buffer = await page.screenshot();\nconsole.log(buffer.toString('base64'));\n")),Object(c.b)("h2",{id:"element-screenshot"},"Element screenshot"),Object(c.b)("p",null,"Sometimes it is useful to take a screenshot of a single element."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const elementHandle = await page.$('.header');\nawait elementHandle.screenshot({ path: 'screenshot.png' });\n")),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-page#pagescreenshotoptions"}),"page.screenshot([options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.10.0/api/class-elementhandle#elementhandlescreenshotoptions"}),"elementHandle.screenshot([options])"))))}u.isMDXComponent=!0},889:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||f[b]||c;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},890:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},891:function(e,t,n){"use strict";var r=n(0),a=n(892);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},893:function(e,t,n){"use strict";n(0),n(891),n(890),n(55)},894:function(e,t,n){"use strict";n(3),n(0)}}]);