(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{260:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return p})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return g}));var n=t(3),i=t(7),c=(t(0),t(392)),r=t(395),o=t(396),l={id:"navigations",title:"Navigations"},p={unversionedId:"navigations",id:"navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/docs/navigations.mdx",slug:"/navigations",permalink:"/python/docs/next/navigations",version:"current",sidebar:"docs",previous:{title:"Multi-page scenarios",permalink:"/python/docs/next/multi-pages"},next:{title:"Network",permalink:"/python/docs/next/network"}},s=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[]},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[]},{value:"Custom wait",id:"custom-wait",children:[]},{value:"Wait for element",id:"wait-for-element",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[]},{value:"Custom wait",id:"custom-wait-1",children:[]},{value:"Wait for element",id:"wait-for-element-1",children:[]},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[]},{value:"Multiple navigations",id:"multiple-navigations",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],b={toc:s};function g(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#navigation-lifecycle"}),"Navigation lifecycle")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#advanced-patterns"}),"Advanced patterns"))),Object(c.b)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),Object(c.b)("p",null,"Playwright splits the process of showing a new document in a page into ",Object(c.b)("strong",{parentName:"p"},"navigation")," and ",Object(c.b)("strong",{parentName:"p"},"loading"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Navigations")," can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts ",Object(c.b)("strong",{parentName:"p"},"loading")," the document."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageurl"}),"page.url")," is set to the new url"),Object(c.b)("li",{parentName:"ul"},"document content is loaded over network and parsed"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageondomcontentloaded"}),'page.on("domcontentloaded")')," event is fired"),Object(c.b)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageonload"}),'page.on("load")')," event is fired"),Object(c.b)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),Object(c.b)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),Object(c.b)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),Object(c.b)("h3",{id:"auto-wait"},"Auto-wait"),Object(c.b)("p",null,"Navigating to a URL auto-waits for the page to fire the ",Object(c.b)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",Object(c.b)("inlineCode",{parentName:"p"},"load"),", ",Object(c.b)("inlineCode",{parentName:"p"},"page.goto")," will auto-wait for the redirected page to fire the ",Object(c.b)("inlineCode",{parentName:"p"},"load")," event."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Navigate the page\npage.goto("https://example.com")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Navigate the page\nawait page.goto("https://example.com")\n')))),Object(c.b)("h3",{id:"custom-wait"},"Custom wait"),Object(c.b)("p",null,"Override the default behavior to wait until a specific event, like ",Object(c.b)("inlineCode",{parentName:"p"},"networkidle"),"."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Navigate and wait until network is idle\npage.goto("https://example.com", wait_until="networkidle")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Navigate and wait until network is idle\nawait page.goto("https://example.com", wait_until="networkidle")\n')))),Object(c.b)("h3",{id:"wait-for-element"},"Wait for element"),Object(c.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagewait_for_selectorselector-kwargs"}),"page.wait_for_selector(selector, **kwargs)"),". Alternatively, page interactions like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," auto-wait for elements."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Navigate and wait for element\npage.goto("https://example.com")\npage.wait_for_selector("text=example domain")\n\n# Navigate and click element\n# Click will auto-wait for the element\npage.goto("https://example.com")\npage.click("text=example domain")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Navigate and wait for element\nawait page.goto("https://example.com")\nawait page.wait_for_selector("text=example domain")\n\n# Navigate and click element\n# Click will auto-wait for the element\nawait page.goto("https://example.com")\nawait page.click("text=example domain")\n')))),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagegotourl-kwargs"}),"page.goto(url, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagereloadkwargs"}),"page.reload(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagego_backkwargs"}),"page.go_back(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagego_forwardkwargs"}),"page.go_forward(**kwargs)"))),Object(c.b)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),Object(c.b)("p",null,"In the scenarios below, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," initiates a navigation and then waits for the navigation to complete."),Object(c.b)("h3",{id:"auto-wait-1"},"Auto-wait"),Object(c.b)("p",null,"By default, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Click will auto-wait for navigation to complete\npage.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\npage.fill("#username", "John Doe")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Click will auto-wait for navigation to complete\nawait page.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\nawait page.fill("#username", "John Doe")\n')))),Object(c.b)("h3",{id:"custom-wait-1"},"Custom wait"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagewait_for_load_statekwargs"}),"page.wait_for_load_state(**kwargs)")," to wait for a loading event."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.click("button"); # Click triggers navigation\npage.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.click("button"); # Click triggers navigation\nawait page.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n')))),Object(c.b)("h3",{id:"wait-for-element-1"},"Wait for element"),Object(c.b)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagewait_for_selectorselector-kwargs"}),"page.wait_for_selector(selector, **kwargs)"),". Alternatively, page interactions like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," auto-wait for elements."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Click triggers navigation\npage.click("text=Login")\n# Click will auto-wait for the element\npage.wait_for_selector("#username", "John Doe")\n\n# Click triggers navigation\npage.click("text=Login")\n# Fill will auto-wait for element\npage.fill("#username", "John Doe")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Click will auto-wait for the element and trigger navigation\nawait page.click("text=Login")\n# Wait for the element\nawait page.wait_for_selector("#username")\n\n# Click triggers navigation\nawait page.click("text=Login")\n# Fill will auto-wait for element\nawait page.fill("#username", "John Doe")\n')))),Object(c.b)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),Object(c.b)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageexpect_navigationkwargs"}),"page.expect_navigation(**kwargs)"),". For example:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Navigation is triggered from a ",Object(c.b)("inlineCode",{parentName:"li"},"setTimeout")),Object(c.b)("li",{parentName:"ul"},"Page waits for network requests before navigation")),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nwith page.expect_navigation():\n    # Triggers a navigation after a timeout\n    page.click("a")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nasync with page.expect_navigation():\n    # Triggers a navigation after a timeout\n    await page.click("div.delayed-navigation")\n')))),Object(c.b)("h3",{id:"multiple-navigations"},"Multiple navigations"),Object(c.b)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageexpect_navigationkwargs"}),"page.expect_navigation(**kwargs)")," to a specific url. For example:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Client-side redirects issued after the ",Object(c.b)("inlineCode",{parentName:"li"},"load")," event"),Object(c.b)("li",{parentName:"ul"},"Multiple pushes to history state")),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nwith page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    page.click("a")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nasync with page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    await page.click("a")\n')))),Object(c.b)("h3",{id:"loading-a-popup"},"Loading a popup"),Object(c.b)("p",null,"When popup is opened, explicitly calling ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagewait_for_load_statekwargs"}),"page.wait_for_load_state(**kwargs)")," ensures that popup is loaded to the desired state."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'with page.expect_popup() as popup_info:\n    page.click(\'a[target="_blank"]\') # Opens popup\npopup = popup_info.value\npopup.wait_for_load_state("load")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'async with page.expect_popup() as popup_info:\n    await page.click(\'a[target="_blank"]\') # Opens popup\npopup = await popup_info.value\nawait popup.wait_for_load_state("load")\n')))),Object(c.b)("h3",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagewait_for_load_statekwargs"}),"page.wait_for_load_state(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagewait_for_selectorselector-kwargs"}),"page.wait_for_selector(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageexpect_navigationkwargs"}),"page.expect_navigation(**kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagewait_for_functionexpression-kwargs"}),"page.wait_for_function(expression, **kwargs)"))),Object(c.b)("h2",{id:"advanced-patterns"},"Advanced patterns"),Object(c.b)("p",null,"For pages that have complicated loading patterns, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagewait_for_functionexpression-kwargs"}),"page.wait_for_function(expression, **kwargs)")," is a powerful and extensible approach to define a custom wait criteria."),Object(c.b)(r.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.goto("http://example.com")\npage.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\npage.screenshot()\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.goto("http://example.com")\nawait page.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\nawait page.screenshot()\n')))),Object(c.b)("h3",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagewait_for_functionexpression-kwargs"}),"page.wait_for_function(expression, **kwargs)"))))}g.isMDXComponent=!0},391:function(e,a,t){"use strict";function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}a.a=function(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}},392:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return d}));var n=t(0),i=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var a=i.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},b=function(e){var a=s(e.components);return i.a.createElement(p.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},u=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=n,d=b["".concat(r,".").concat(u)]||b[u]||g[u]||c;return t?i.a.createElement(d,o(o({ref:a},p),{},{components:t})):i.a.createElement(d,o({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,r=new Array(c);r[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var p=2;p<c;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},393:function(e,a,t){"use strict";var n=t(0),i=t(394);a.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},394:function(e,a,t){"use strict";var n=t(0),i=Object(n.createContext)(void 0);a.a=i},395:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(393),r=t(391),o=t(53),l=t.n(o),p=37,s=39;a.a=function(e){var a=e.lazy,t=e.block,o=e.defaultValue,b=e.values,g=e.groupId,u=e.className,d=Object(c.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(n.useState)(o),y=O[0],j=O[1],v=n.Children.toArray(e.children);if(null!=g){var w=m[g];null!=w&&w!==y&&b.some((function(e){return e.value===w}))&&j(w)}var h=function(e){j(e),null!=g&&f(g,e)},N=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},u)},b.map((function(e){var a=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===a,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case s:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(N,e.target,e)},onFocus:function(){return h(a)},onClick:function(){h(a)}},t)}))),a?Object(n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},396:function(e,a,t){"use strict";var n=t(3),i=t(0),c=t.n(i);a.a=function(e){var a=e.children,t=e.hidden,i=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:i}),a)}}}]);