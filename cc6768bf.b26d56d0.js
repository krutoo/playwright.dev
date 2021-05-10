(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{724:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(889)),i=(a(893),a(894),{id:"dialogs",title:"Dialogs"}),c={unversionedId:"dialogs",id:"version-1.8.0/dialogs",isDocsHomePage:!1,title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/versioned_docs/version-1.8.0/dialogs.mdx",slug:"/dialogs",permalink:"/docs/1.8.0/dialogs",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Authentication",permalink:"/docs/1.8.0/auth"},next:{title:"Downloads",permalink:"/docs/1.8.0/downloads"}},l=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"beforeunload dialog",id:"beforeunload-dialog",children:[]}],p={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can interact with the web page dialogs such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"}),Object(o.b)("inlineCode",{parentName:"a"},"alert")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"}),Object(o.b)("inlineCode",{parentName:"a"},"confirm")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"}),Object(o.b)("inlineCode",{parentName:"a"},"prompt"))," as well as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"}),Object(o.b)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#alert-confirm-prompt-dialogs"}),"alert(), confirm(), prompt() dialogs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#beforeunload-dialog"}),"beforeunload dialog"))),Object(o.b)("h2",{id:"alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs"),Object(o.b)("p",null,"You can register a dialog handler before the action that triggers the dialog to accept or decline it."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('dialog', dialog => dialog.accept());\nawait page.click('button');\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If your action, be it ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")," or any other, results in a dialog, the action will stall until the dialog is handled. That's because dialogs in Web are modal and block further page execution until they are handled."))),Object(o.b)("p",null,"As a result, following snippet will never resolve:"),Object(o.b)("p",null,":::warn\nWRONG!\n:::"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button'); // Will hang here\npage.on('dialog', dialog => dialog.accept())\n")),Object(o.b)("p",null,":::warn\nWRONG!\n:::"),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("inlineCode",{parentName:"li"},"Dialog"),"]"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-dialog#dialogacceptprompttext"}),"dialog.accept([promptText])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-dialog#dialogdismiss"}),"dialog.dismiss()"))),Object(o.b)("h2",{id:"beforeunload-dialog"},"beforeunload dialog"),Object(o.b)("p",null,"When ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pagecloseoptions"}),"page.close([options])")," is invoked with the truthy ",Object(o.b)("inlineCode",{parentName:"p"},"runBeforeUnload")," value, it page runs its unload handlers. This is the only case when ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pagecloseoptions"}),"page.close([options])")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),Object(o.b)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('dialog', async dialog => {\n  assert(dialog.type() === 'beforeunload');\n  await dialog.dismiss();\n});\nawait page.close({runBeforeUnload: true});\n")))}s.isMDXComponent=!0},889:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),u=n,g=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(g,c(c({ref:t},p),{},{components:a})):r.a.createElement(g,c({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},890:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},891:function(e,t,a){"use strict";var n=a(0),r=a(892);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},892:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},893:function(e,t,a){"use strict";a(0),a(891),a(890),a(55)},894:function(e,t,a){"use strict";a(3),a(0)}}]);