(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9122],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";n(67294)},41395:function(e,t,n){"use strict";n(67294),n(80944)},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),i=n(79443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},34022:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=(n(41395),n(58215),{id:"events",title:"Events"}),s={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/docs/events.mdx",sourceDirName:".",slug:"/events",permalink:"/docs/next/events",version:"current",frontMatter:{id:"events",title:"Events"},sidebar:"docs",previous:{title:"Emulation",permalink:"/docs/next/emulation"},next:{title:"Extensibility",permalink:"/docs/next/extensibility"}},l=[{value:"Waiting for event",id:"waiting-for-event",children:[]},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[]},{value:"Adding one-off listeners",id:"adding-one-off-listeners",children:[{value:"API reference",id:"api-reference",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#waiting-for-event"},"Waiting for event")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#addingremoving-event-listener"},"Adding/removing event listener")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adding-one-off-listeners"},"Adding one-off listeners"))),(0,a.kt)("h2",{id:"waiting-for-event"},"Waiting for event"),(0,a.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,a.kt)("p",null,"Wait for a request with the specified url:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the request.\nconst [request] = await Promise.all([\n  page.waitForRequest('**/*logo*.png'),\n  // This action triggers the request\n  page.goto('https://wikipedia.org')\n]);\nconsole.log(request.url());\n")),(0,a.kt)("p",null,"Wait for popup window:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Note that Promise.all prevents a race condition\n// between clicking and waiting for the popup.\nconst [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  // This action triggers the popup\n  page.evaluate('window.open()')\n]);\nawait popup.goto('https://wikipedia.org');\n")),(0,a.kt)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),(0,a.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"page.on('request', request => console.log(`Request sent: ${request.url()}`));\nconst listener = request => console.log(`Request finished: ${request.url()}`);\npage.on('requestfinished', listener);\nawait page.goto('https://wikipedia.org');\n\npage.off('requestfinished', listener);\nawait page.goto('https://www.openstreetmap.org/');\n")),(0,a.kt)("h2",{id:"adding-one-off-listeners"},"Adding one-off listeners"),(0,a.kt)("p",null,"If certain event needs to be handled once, there is a convenience API for that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"page.once('dialog', dialog => dialog.accept(\"2021\"));\nawait page.evaluate(\"prompt('Enter a number:')\");\n")),(0,a.kt)("h3",{id:"api-reference"},"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-browser",title:"Browser"},"Browser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-page",title:"Page"},"Page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-worker",title:"Worker"},"Worker"))))}c.isMDXComponent=!0}}]);