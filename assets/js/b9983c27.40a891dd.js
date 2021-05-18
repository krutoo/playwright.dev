(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[82190],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return u}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(t),u=i,m=g["".concat(p,".").concat(u)]||g[u]||d[u]||o;return t?n.createElement(m,r(r({ref:a},c),{},{components:t})):n.createElement(m,r({ref:a},c))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},15273:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=t(22122),i=t(19756),o=(t(67294),t(3905)),r={id:"loading",title:"Navigation and loading"},l={unversionedId:"loading",id:"version-1.1.0/loading",isDocsHomePage:!1,title:"Navigation and loading",description:"Playwright logically splits the process of showing a new document in the page into navigation and loading.",source:"@site/versioned_docs/version-1.1.0/loading.mdx",sourceDirName:".",slug:"/loading",permalink:"/docs/1.1.0/loading",version:"1.1.0",frontMatter:{id:"loading",title:"Navigation and loading"},sidebar:"version-1.1.0/docs",previous:{title:"Scraping and verification",permalink:"/docs/1.1.0/verification"},next:{title:"Continuous Integration",permalink:"/docs/1.1.0/ci"}},p=[{value:"Navigation",id:"navigation",children:[]},{value:"Loading",id:"loading",children:[]},{value:"Common scenarios",id:"common-scenarios",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[{value:"Unusual client-side redirects",id:"unusual-client-side-redirects",children:[]},{value:"Click triggers navigation after a timeout",id:"click-triggers-navigation-after-a-timeout",children:[]},{value:"Unpredictable patterns",id:"unpredictable-patterns",children:[]},{value:"Lazy loading, hydration",id:"lazy-loading-hydration",children:[]}]}],s={toc:p};function c(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright logically splits the process of showing a new document in the page into ",(0,o.kt)("strong",{parentName:"p"},"navigation")," and ",(0,o.kt)("strong",{parentName:"p"},"loading"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#navigation"},"Navigation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#loading"},"Loading")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#common-scenarios"},"Common scenarios")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#loading-a-popup"},"Loading a popup"))),(0,o.kt)("h2",{id:"navigation"},"Navigation"),(0,o.kt)("p",null,"Page navigation can be either initiated by the Playwright call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Load a page\nawait page.goto('https://example.com');\n\n// Reload a page\nawait page.reload();\n\n// Click a link\nawait page.click('text=\"Continue\"');\n")),(0,o.kt)("p",null,"or by the page itself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Programmatic navigation\nwindow.location.href = 'https://example.com';\n\n// Single page app navigation\nhistory.pushState({}, 'title', '#deep-link');\n")),(0,o.kt)("p",null,"Navigation intent may result in being canceled, for example transformed into a download or hitting an unresolved DNS address. Only when the navigation succeeds, page starts ",(0,o.kt)("strong",{parentName:"p"},"loading")," the document."),(0,o.kt)("h2",{id:"loading"},"Loading"),(0,o.kt)("p",null,"Page load takes time retrieving the response body over the network, parsing, executing the scripts and firing the events. Typical load scenario goes through the following load states:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-page#pageurl"},(0,o.kt)("inlineCode",{parentName:"a"},"page.url()"))," is set to the new url"),(0,o.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-page#event-domcontentloaded"},(0,o.kt)("inlineCode",{parentName:"a"},"domcontentloaded"))," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.1.0/api/class-page#event-load"},(0,o.kt)("inlineCode",{parentName:"a"},"load"))," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired - no new network requests made for at least ",(0,o.kt)("inlineCode",{parentName:"li"},"500")," ms")),(0,o.kt)("h2",{id:"common-scenarios"},"Common scenarios"),(0,o.kt)("p",null,"By default, Playwright handles navigations seamlessly so that you did not need to think about them. Consider the following scenario, where everything is handled by Playwright behind the scenes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.goto('http://example.com');\n// If the page does a client-side redirect to 'http://example.com/login'.\n// Playwright will automatically wait for the login page to load.\n\n// Playwright waits for the lazy loaded #username and #password inputs\n// to appear before filling the values.\nawait page.fill('#username', 'John Doe');\nawait page.fill('#password', '********');\n\n// Playwright waits for the login button to become enabled and clicks it.\nawait page.click('text=Login');\n// Clicking the button navigates to the logged-in page and Playwright\n// automatically waits for that.\n")),(0,o.kt)("p",null,"Explicit loading handling may be required for more complicated scenarios though."),(0,o.kt)("h2",{id:"loading-a-popup"},"Loading a popup"),(0,o.kt)("p",null,"When popup is opened, explicitly calling ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/class-page#pagewaitforloadstatestate-options"},(0,o.kt)("inlineCode",{parentName:"a"},"page.waitForLoadState()"))," ensures that popup is loaded to the desired state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [ popup ] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('a[target=\"_blank\"]'),  // <-- opens popup\n]);\nawait popup.waitForLoadState('load');\nawait popup.evaluate(() => window.globalVariableInitializedByOnLoadHandler);\n")),(0,o.kt)("h3",{id:"unusual-client-side-redirects"},"Unusual client-side redirects"),(0,o.kt)("p",null,"Usually, the client-side redirect happens before the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event, and ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto()")," method automatically waits for the redirect. However, when redirecting from a link click or after the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event, it would be easier to explicitly ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/class-page#pagewaitfornavigationoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForNavigation()"))," to a specific url."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Promise.all([\n  page.waitForNavigation({ url: '**/login' }),\n  page.click('a'), // Triggers a navigation with a script redirect.\n]);\n")),(0,o.kt)("p",null,"Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all")," to click and wait for navigation. Awaiting these methods one after the other is racy, because navigation could happen too fast."),(0,o.kt)("h3",{id:"click-triggers-navigation-after-a-timeout"},"Click triggers navigation after a timeout"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"onclick")," handler triggers a navigation from a ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout"),", use an explicit ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/class-page#pagewaitfornavigationoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForNavigation()"))," call as a last resort."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Promise.all([\n  page.waitForNavigation(), // Waits for the next navigation.\n  page.click('a'), // Triggers a navigation after a timeout.\n]);\n")),(0,o.kt)("p",null,"Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all")," to click and wait for navigation. Awaiting these methods one after the other is racy, because navigation could happen too fast."),(0,o.kt)("h3",{id:"unpredictable-patterns"},"Unpredictable patterns"),(0,o.kt)("p",null,"When the page has a complex loading pattern, the custom waiting function is most reliable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await page.goto('http://example.com');\nawait page.waitForFunction(() => window.amILoadedYet());\n// Ready to take a screenshot, according to the page itself.\nawait page.screenshot();\n")),(0,o.kt)("p",null,"When clicking on a button triggers some asynchronous processing, issues a couple GET requests and pushes a new history state multiple times, explicit ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.1.0/api/class-page#pagewaitfornavigationoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForNavigation()"))," to a specific url is the most reliable option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"await Promise.all([\n  page.waitForNavigation({ url: '**/invoice#processed' }),\n  page.click('text=Process the invoice'), // Triggers some complex handling.\n]);\n")),(0,o.kt)("h3",{id:"lazy-loading-hydration"},"Lazy loading, hydration"),(0,o.kt)("p",null,"TBD"))}c.isMDXComponent=!0}}]);