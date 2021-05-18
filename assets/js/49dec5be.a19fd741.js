(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[44739],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),h=a,m=f["".concat(i,".").concat(h)]||f[h]||p[h]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";n(67294)},41395:function(e,t,n){"use strict";n(67294),n(80944)},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},44840:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s=(n(41395),n(58215),{id:"screenshots",title:"Screenshots"}),c={unversionedId:"screenshots",id:"screenshots",isDocsHomePage:!1,title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/docs/screenshots.mdx",sourceDirName:".",slug:"/screenshots",permalink:"/docs/next/screenshots",version:"current",frontMatter:{id:"screenshots",title:"Screenshots"},sidebar:"docs",previous:{title:"Page Object Models",permalink:"/docs/next/pom"},next:{title:"Verification",permalink:"/docs/next/verification"}},i=[{value:"Full page screenshots",id:"full-page-screenshots",children:[]},{value:"Capture into buffer",id:"capture-into-buffer",children:[]},{value:"Element screenshot",id:"element-screenshot",children:[{value:"API reference",id:"api-reference",children:[]}]}],l={toc:i};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.screenshot({ path: 'screenshot.png' });\n")),(0,o.kt)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#full-page-screenshots"},"Full page screenshots")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#capture-into-buffer"},"Capture into buffer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#element-screenshot"},"Element screenshot"))),(0,o.kt)("h2",{id:"full-page-screenshots"},"Full page screenshots"),(0,o.kt)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.screenshot({ path: 'screenshot.png', fullPage: true });\n")),(0,o.kt)("h2",{id:"capture-into-buffer"},"Capture into buffer"),(0,o.kt)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const buffer = await page.screenshot();\nconsole.log(buffer.toString('base64'));\n")),(0,o.kt)("h2",{id:"element-screenshot"},"Element screenshot"),(0,o.kt)("p",null,"Sometimes it is useful to take a screenshot of a single element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const elementHandle = await page.$('.header');\nawait elementHandle.screenshot({ path: 'screenshot.png' });\n")),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#pagescreenshotoptions"},"page.screenshot([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/api/class-elementhandle#elementhandlescreenshotoptions"},"elementHandle.screenshot([options])"))))}u.isMDXComponent=!0}}]);