(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[235],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,g=m["".concat(s,".").concat(k)]||m[k]||d[k]||i;return a?n.createElement(g,l(l({ref:t},o),{},{components:a})):n.createElement(g,l({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),r=a(944),i=a(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,p=39;var o=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,d=e.values,m=e.groupId,k=e.className,g=(0,r.Z)(),h=g.tabGroupChoices,N=g.setTabGroupChoices,u=(0,n.useState)(o),f=u[0],b=u[1],v=n.Children.toArray(e.children),y=[];if(null!=m){var w=h[m];null!=w&&w!==f&&d.some((function(e){return e.value===w}))&&b(w)}var Y=function(e){var t=e.currentTarget,a=y.indexOf(t),n=d[a].value;b(n),null!=m&&(N(m,n),setTimeout((function(){var e,a,n,r,i,l,s,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,p=l.innerWidth,a>=0&&i<=p&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},_=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},k)},d.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:_,onFocus:Y,onClick:Y},a)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7284:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return o}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=(a(1395),a(8215),{id:"actionability",title:"Auto-waiting"}),c={unversionedId:"actionability",id:"version-1.8.0/actionability",isDocsHomePage:!1,title:"Auto-waiting",description:"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.",source:"@site/versioned_docs/version-1.8.0/actionability.mdx",sourceDirName:".",slug:"/actionability",permalink:"/python/docs/1.8.0/actionability",version:"1.8.0",frontMatter:{id:"actionability",title:"Auto-waiting"},sidebar:"version-1.8.0/docs",previous:{title:"Supported languages",permalink:"/python/docs/1.8.0/languages"},next:{title:"Assertions",permalink:"/python/docs/1.8.0/assertions"}},s=[{value:"Forcing actions",id:"forcing-actions",children:[]},{value:"Assertions",id:"assertions",children:[]},{value:"Attached",id:"attached",children:[]},{value:"Visible",id:"visible",children:[]},{value:"Stable",id:"stable",children:[]},{value:"Enabled",id:"enabled",children:[]},{value:"Editable",id:"editable",children:[]},{value:"Receives Events",id:"receives-events",children:[]}],p={toc:s};function o(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout"),", action fails with the ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeoutError"),"."),(0,i.kt)("p",null,"For example, for ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.8.0/api/class-page#pageclickselector-kwargs"},"page.click(selector, **kwargs)"),", Playwright will ensure that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#attached",title:"Attached"},"Attached")," to the DOM"),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#visible",title:"Visible"},"Visible")),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#stable",title:"Stable"},"Stable"),", as in not animating or completed animation"),(0,i.kt)("li",{parentName:"ul"},"element ",(0,i.kt)("a",{parentName:"li",href:"#receives-events",title:"Receives Events"},"Receives Events"),", as in not obscured by other elements"),(0,i.kt)("li",{parentName:"ul"},"element is ",(0,i.kt)("a",{parentName:"li",href:"#enabled",title:"Enabled"},"Enabled"))),(0,i.kt)("p",null,"Here is the complete list of actionability checks performed for each action:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Action"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#attached",title:"Attached"},"Attached")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#visible",title:"Visible"},"Visible")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#stable",title:"Stable"},"Stable")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#receives-events",title:"Receives Events"},"Receives Events")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#enabled",title:"Enabled"},"Enabled")),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"#editable",title:"Editable"},"Editable")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"check"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"click"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dblclick"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tap"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"uncheck"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"hover"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"scrollIntoViewIfNeeded"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"screenshot"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"fill"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selectText"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dispatchEvent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"focus"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"getAttribute"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"innerText"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"innerHTML"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"press"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"setInputFiles"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"selectOption"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textContent"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"forcing-actions"},"Forcing actions"),(0,i.kt)("p",null,"Some actions like ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.8.0/api/class-page#pageclickselector-kwargs"},"page.click(selector, **kwargs)")," support ",(0,i.kt)("inlineCode",{parentName:"p"},"force")," option that disables non-essential actionability checks, for example passing truthy ",(0,i.kt)("inlineCode",{parentName:"p"},"force")," to ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.8.0/api/class-page#pageclickselector-kwargs"},"page.click(selector, **kwargs)")," method will not check that the target element actually receives click events."),(0,i.kt)("h2",{id:"assertions"},"Assertions"),(0,i.kt)("p",null,"You can check the actionability state of the element using one of the following methods as well. This is typically not necessary, but it helps writing assertive tests that ensure that after certain actions, elements reach actionable state:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-elementhandle#element_handleis_checked"},"element_handle.is_checked()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-elementhandle#element_handleis_disabled"},"element_handle.is_disabled()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-elementhandle#element_handleis_editable"},"element_handle.is_editable()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-elementhandle#element_handleis_enabled"},"element_handle.is_enabled()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-elementhandle#element_handleis_hidden"},"element_handle.is_hidden()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-elementhandle#element_handleis_visible"},"element_handle.is_visible()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-page#pageis_checkedselector-kwargs"},"page.is_checked(selector, **kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-page#pageis_disabledselector-kwargs"},"page.is_disabled(selector, **kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-page#pageis_editableselector-kwargs"},"page.is_editable(selector, **kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-page#pageis_enabledselector-kwargs"},"page.is_enabled(selector, **kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-page#pageis_hiddenselector-kwargs"},"page.is_hidden(selector, **kwargs)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/python/docs/1.8.0/api/class-page#pageis_visibleselector-kwargs"},"page.is_visible(selector, **kwargs)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"attached"},"Attached"),(0,i.kt)("p",null,"Element is considered attached when it is ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected"},"connected")," to a Document or a ShadowRoot."),(0,i.kt)("h2",{id:"visible"},"Visible"),(0,i.kt)("p",null,"Element is considered visible when it has non-empty bounding box and does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"visibility:hidden")," computed style. Note that elements of zero size or with ",(0,i.kt)("inlineCode",{parentName:"p"},"display:none")," are not considered visible."),(0,i.kt)("h2",{id:"stable"},"Stable"),(0,i.kt)("p",null,"Element is considered stable when it has maintained the same bounding box for at least two consecutive animation frames."),(0,i.kt)("h2",{id:"enabled"},"Enabled"),(0,i.kt)("p",null,"Element is considered enabled when it is not a ",(0,i.kt)("inlineCode",{parentName:"p"},"<button>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<select>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<textarea>")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," property set."),(0,i.kt)("h2",{id:"editable"},"Editable"),(0,i.kt)("p",null,"Element is considered editable when it is ",(0,i.kt)("a",{parentName:"p",href:"#enabled",title:"Enabled"},"enabled")," and does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly")," property set."),(0,i.kt)("h2",{id:"receives-events"},"Receives Events"),(0,i.kt)("p",null,"Element is considered receiving pointer events when it is the hit target of the pointer event at the action point. For example, when clicking at the point ",(0,i.kt)("inlineCode",{parentName:"p"},"(10;10)"),", Playwright checks whether some other element (usually an overlay) will instead capture the click at ",(0,i.kt)("inlineCode",{parentName:"p"},"(10;10)"),"."),(0,i.kt)("p",null,"For example, consider a scenario where Playwright will click ",(0,i.kt)("inlineCode",{parentName:"p"},"Sign Up")," button regardless of when the ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.8.0/api/class-page#pageclickselector-kwargs"},"page.click(selector, **kwargs)")," call was made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"page is checking that user name is unique and ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is disabled;"),(0,i.kt)("li",{parentName:"ul"},"after checking with the server, the disabled ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign Up")," button is replaced with another one that is now enabled.")))}o.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);