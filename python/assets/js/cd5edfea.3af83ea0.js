(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3476],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return u}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(t),u=r,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||l;return t?n.createElement(m,s(s({ref:a},p),{},{components:t})):n.createElement(m,s({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=h;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8215:function(e,a,t){"use strict";var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},1395:function(e,a,t){"use strict";t.d(a,{Z:function(){return p}});var n=t(7294),r=t(944),l=t(6010),s="tabItem_1uMI",o="tabItemActive_2DSg";var i=37,c=39;var p=function(e){var a=e.lazy,t=e.block,p=e.defaultValue,d=e.values,h=e.groupId,u=e.className,m=(0,r.Z)(),y=m.tabGroupChoices,f=m.setTabGroupChoices,g=(0,n.useState)(p),v=g[0],k=g[1],_=n.Children.toArray(e.children),b=[];if(null!=h){var w=y[h];null!=w&&w!==v&&d.some((function(e){return e.value===w}))&&k(w)}var x=function(e){var a=e.currentTarget,t=b.indexOf(a),n=d[t].value;k(n),null!=h&&(f(h,n),setTimeout((function(){var e,t,n,r,l,s,i,c;(e=a.getBoundingClientRect(),t=e.top,n=e.left,r=e.bottom,l=e.right,s=window,i=s.innerHeight,c=s.innerWidth,t>=0&&l<=c&&r<=i&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(o),setTimeout((function(){return a.classList.remove(o)}),2e3))}),150))},N=function(e){var a,t;switch(e.keyCode){case c:var n=b.indexOf(e.target)+1;t=b[n]||b[0];break;case i:var r=b.indexOf(e.target)-1;t=b[r]||b[b.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},u)},d.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":v===a}),key:a,ref:function(e){return b.push(e)},onKeyDown:N,onFocus:x,onClick:x},t)}))),a?(0,n.cloneElement)(_.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},_.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==v})}))))}},9443:function(e,a,t){"use strict";var n=(0,t(7294).createContext)(void 0);a.Z=n},944:function(e,a,t){"use strict";var n=t(7294),r=t(9443);a.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9493:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=t(2122),r=t(9756),l=(t(7294),t(3905)),s=t(1395),o=t(8215),i={id:"handles",title:"Handles"},c={unversionedId:"handles",id:"handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/docs/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/python/docs/next/handles",version:"current",frontMatter:{id:"handles",title:"Handles"}},p=[{value:"API reference",id:"api-reference",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Handles as parameters",id:"handles-as-parameters",children:[]},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],d={toc:p};function h(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,l.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,l.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,l.kt)("p",null,"Here is the easiest way to obtain a ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"js_handle = page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n"))),(0,l.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"js_handle = await page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n")))),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"ul_element_handle = page.wait_for_selector('ul')\n#  Use ul_element_handle for actions and evaluation.\n"))),(0,l.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"ul_element_handle = await page.wait_for_selector('ul')\n#  Use ul_element_handle for actions and evaluation.\n")))),(0,l.kt)("h2",{id:"element-handles"},"Element Handles"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#pageclickselector-kwargs"},"page.click(selector, **kwargs)")," rather than using the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),(0,l.kt)("p",null,"When ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#pagewait_for_selectorselector-kwargs"},"page.wait_for_selector(selector, **kwargs)")," or ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-frame#framewait_for_selectorselector-kwargs"},"frame.wait_for_selector(selector, **kwargs)")," methods. These APIs wait for the element to be attached and visible."),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n"))),(0,l.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = await element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = await element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n")))),(0,l.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,l.kt)("p",null,"Handles can be passed into the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#pageevaluateexpression-kwargs"},"page.evaluate(expression, **kwargs)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Create new array in page.\nmy_array_handle = page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\npage.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nmy_array_handle.dispose()\n'))),(0,l.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'# Create new array in page.\nmy_array_handle = await page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = await page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\nawait page.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nawait my_array_handle.dispose()\n')))),(0,l.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,l.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#pageevaluate_handleexpression-kwargs"},"page.evaluate_handle(expression, **kwargs)"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#pagequery_selectorselector"},"page.query_selector(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#pagequery_selector_allselector"},"page.query_selector_all(selector)")," or their frame counterparts ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-frame#frameevaluate_handleexpression-kwargs"},"frame.evaluate_handle(expression, **kwargs)"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-frame#framequery_selectorselector"},"frame.query_selector(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-frame#framequery_selector_allselector"},"frame.query_selector_all(selector)"),". Once created, handles will retain object from ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-jshandle#js_handledispose"},"js_handle.dispose()")," method."),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element_handlebounding_box"},"element_handle.bounding_box()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element_handleget_attributename"},"element_handle.get_attribute(name)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element_handleinner_text"},"element_handle.inner_text()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element_handleinner_html"},"element_handle.inner_html()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-elementhandle#element_handletext_content"},"element_handle.text_content()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-jshandle#js_handleevaluateexpression-kwargs"},"js_handle.evaluate(expression, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#pageevaluate_handleexpression-kwargs"},"page.evaluate_handle(expression, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#pagequery_selectorselector"},"page.query_selector(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#pagequery_selector_allselector"},"page.query_selector_all(selector)"))))}h.isMDXComponent=!0},6010:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function r(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}t.d(a,{Z:function(){return r}})}}]);