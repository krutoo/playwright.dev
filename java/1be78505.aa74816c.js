(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{276:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return s}));n(277);var u=n(283),r=n.n(u),a=["en"],c=!1,o="e666dac7",i=10,s=50},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var u=n(275),r=n(279);function a(e,t,n){for(var c,o=[],i=Object(u.a)(t);!(c=i()).done;){var s=c.value,l=e.toLowerCase().indexOf(s);if(l>=0){l>0&&o.push(a(e.substr(0,l),t)),o.push("<mark>"+Object(r.a)(e.substr(l,s.length))+"</mark>");var h=l+s.length;h<e.length&&o.push(a(e.substr(h),t));break}}return 0===o.length?n?"<mark>"+Object(r.a)(e)+"</mark>":Object(r.a)(e):o.join("")}},279:function(e,t,n){"use strict";function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,"a",(function(){return u}))},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var u=n(281),r=n.n(u),a=n(275),c=n(282),o=n(277),i=n.n(o),s=n(276);function l(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(t){var n,u,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+s.b);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,u=n.map((function(e,t){var n=e.documents,u=e.index;return{type:t,documents:n,index:i.a.Index.load(u)}})),c=n.reduce((function(e,t){for(var n,u=Object(a.a)(t.index.invertedIndex);!(n=u()).done;){var r=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(r[0][0])&&e.add(r[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:u,zhDictionary:Array.from(c)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},286:function(e,t,n){"use strict";function u(e,t){for(var n=[],u=0,r=Object.values(e);u<r.length;u++){var a=r[u];a[t]&&n.push.apply(n,a[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,"a",(function(){return u}))},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var u=n(0),r=n.n(u),a=n(284),c=n(55),o=n.n(c);function i(e){var t=e.className;return r.a.createElement("div",{className:Object(a.a)(o.a.loadingRing,t)},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var u=n(275),r=n(277),a=n.n(r);var c=n(276);function o(e,t,n){return function(t,r){var o=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return a.a[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(t,c.c);if(0!==o.length){var i,s=[{tokens:i=o,term:i.map((function(e){return{value:e,presence:a.a.Query.presence.REQUIRED,wildcard:a.a.Query.wildcard.LEADING|a.a.Query.wildcard.TRAILING}}))}],l=[],h=function(){for(var t,r=d.value,a=r.term,c=r.tokens,o=function(){var r=t.value,o=r.documents,i=r.index,s=r.type;if(l.push.apply(l,i.query((function(e){for(var t,n=Object(u.a)(a);!(t=n()).done;){var r=t.value;e.term(r.value,{wildcard:r.wildcard,presence:r.presence})}})).slice(0,n).filter((function(e){return!l.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-l.length).map((function(t){var n=o.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:s,page:0!==s&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:c,score:t.score}}))),l.length>=n)return{v:"break|search"}},i=Object(u.a)(e);!(t=i()).done;){var s=o();if("object"==typeof s)return s.v}};e:for(var d,p=Object(u.a)(s);!(d=p()).done;){if("break|search"===h())break e}var f=l.filter((function(e){return"/docs/api"!==e.document.u}));!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var u=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,r=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===u&&(u=t.index),-1===r&&(r=n.index),u===r?0===t.type?-1:0===n.type?1:t.index-n.index:u-r}))}(f),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(f),r(f)}else r([])}}},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var u=n(279),r=n(278),a=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function c(e){for(var t=[],n=0,u=e;u.length>0;){var r=u.match(a);if(!r){t.push(u);break}r.index>0&&t.push(u.substr(0,r.index)),t.push(r[0]),n+=r.index+r[0].length,u=e.substr(n)}return t}var o=n(276);function i(e,t,n,u){void 0===u&&(u=o.e);for(var r={chunkIndex:-1},a=s(e,t,n,0,0,r),c=a.slice(0,r.chunkIndex),i=a[r.chunkIndex],l=[i.html],h=a.slice(r.chunkIndex+1),d=i.textLength,p=0,f=0,D=!1,v=!1;d<u;)if((p<=f||0===h.length)&&c.length>0){var g=c.pop();d+g.textLength<=u?(l.unshift(g.html),p+=g.textLength,d+=g.textLength):(D=!0,c.length=0)}else{if(!(h.length>0))break;var F=h.shift();d+F.textLength<=u?(l.push(F.html),f+=F.textLength,d+=F.textLength):(v=!0,h.length=0)}return(D||c.length>0)&&l.unshift("\u2026"),(v||h.length>0)&&l.push("\u2026"),l.join("")}function s(e,t,n,a,o,i){var l=[],h=t[a],d=h[0],p=h[1];if(d<o)(a+=1)<t.length&&l.push.apply(l,s(e,t,n,a,o));else{d>o&&l.push.apply(l,c(e.substring(o,d)).map((function(e){return{html:Object(u.a)(e),textLength:e.length}}))),i&&(i.chunkIndex=l.length),l.push({html:Object(r.a)(e.substr(d,p),n,!0),textLength:p});var f=d+p;(a+=1)<t.length?l.push.apply(l,s(e,t,n,a,f)):f<e.length&&l.push.apply(l,c(e.substr(f)).map((function(e){return{html:Object(u.a)(e),textLength:e.length}})))}return l}},295:function(e,t,n){"use strict";var u=n(276),r=n(281),a=n.n(r),c=n(275),o=n(282),i=n(0),s=n.n(i),l=n(284),h=n(21),d=n(10),p=n(291),f=n(285),D=n(288),v=n(278),g=n(290),F=n(286),m=n(54),b=n.n(m);function x(e){var t=e.document,n=e.type,u=e.page,r=e.metadata,a=e.tokens,c=e.isInterOfTree,o=e.isLastOfTree,i=0===n,s=1===n,l=[];c?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):o&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+b.a.hitTree+'">'+e+"</span>"})),d='<span class="'+b.a.hitIcon+'">'+(i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+b.a.hitTitle+'">'+Object(g.a)(t.t,Object(F.a)(r,"t"),a)+"</span>"];i||p.push('<span class="'+b.a.hitPath+'">'+Object(v.a)(u.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),a)+"</span>");var f='<span class="'+b.a.hitAction+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>';return[].concat(h,[d,'<span class="'+b.a.hitWrapper+'">'],p,["</span>",f]).join("")}function C(){return'<span class="'+b.a.noResults+'"><span class="'+b.a.noResultsIcon+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>No results.</span></span>'}var k=n(287);function j(){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(198),n.e(201)]).then(n.t.bind(null,360,7));case 2:return(t=e.sent).noConflict(),e.abrupt("return",t.default);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";t.a=function(e){var t,n=e.handleSearchBarToggle,r=Object(h.default)().siteConfig.baseUrl,v=Object(p.useHistory)(),g=Object(p.useLocation)(),F=Object(i.useRef)(null),m=Object(i.useRef)("empty"),A=Object(i.useRef)(!1),E=Object(i.useState)(!1),w=E[0],y=E[1],I=Object(i.useState)(!1),L=I[0],B=I[1],S=Object(i.useCallback)(Object(o.a)(a.a.mark((function e(){var t,n,o,i,s,l,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===m.current){e.next=2;break}return e.abrupt("return");case 2:return m.current="loading",y(!0),e.next=6,Promise.all([Object(f.a)(r),j()]);case 6:t=e.sent,n=t[0],o=n.wrappedIndexes,i=n.zhDictionary,s=t[1],l=s(F.current,{hint:!1,autoselect:!0,cssClasses:{root:b.a.searchBar,noPrefix:!0,dropdownMenu:b.a.dropdownMenu,input:b.a.input,hint:b.a.hint,suggestions:b.a.suggestions,suggestion:b.a.suggestion,cursor:b.a.cursor,dataset:b.a.dataset,empty:b.a.empty}},[{source:Object(D.a)(o,i,u.f),templates:{suggestion:x,empty:C,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),u=r+"search?q="+encodeURIComponent(t);n.href=u,n.textContent="See all results",n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),v.push(u))}));var a=document.createElement("div");return a.className=b.a.hitFooter,a.appendChild(n),a}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,r=n.u,a=n.h,o=t.tokens,i=r;if(u.a&&o.length>0){for(var s,l=new URLSearchParams,h=Object(c.a)(o);!(s=h()).done;){var d=s.value;l.append(O,d)}i+="?"+l.toString()}a&&(i+=a),v.push(i)})),m.current="done",y(!1),A.current&&((h=F.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[r,v]);Object(i.useEffect)((function(){if(u.a){var e=d.a.canUseDOM?new URLSearchParams(g.search).getAll(O):[];if(0!==e.length){var t=document.querySelector("article");if(t)new u.a(t).mark(e)}}}),[g.search]);var M=Object(i.useCallback)((function(){A.current=!0,S(),n(!0)}),[n,S]),R=Object(i.useCallback)((function(){n(!1)}),[n]),z=Object(i.useCallback)((function(){S()}),[S]),H=Object(i.useCallback)((function(e){e.target.value&&B(!0)}),[]);return s.a.createElement("div",{className:Object(l.a)("navbar__search",b.a.searchBarContainer,(t={},t[b.a.searchIndexLoading]=w&&L,t))},s.a.createElement("input",{placeholder:"Search","aria-label":"Search",className:"navbar__search-input",onMouseEnter:z,onFocus:M,onBlur:R,onChange:H,ref:F}),s.a.createElement(k.a,{className:b.a.searchBarLoadingRing}))}},300:function(e,t,n){"use strict";var u=n(7),r=n(0),a=n.n(r),c=n(269),o=n(280),i=(n(56),n(57)),s=n.n(i);t.a=function(e){return function(t){var n,r=t.id,i=Object(u.a)(t,["id"]),l=Object(o.useThemeConfig)().navbar.hideOnScroll;if(!r)return a.a.createElement(e,i);return a.a.createElement(e,i,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",(n={},n[s.a.enhancedAnchor]=!l,n)),id:r}),i.children,a.a.createElement("a",{className:"hash-link",href:"#"+r,onClick:function(e){e.preventDefault();var t=new URL(e.target.href);t.search="",history.pushState("",document.title,t.toString())},title:"Direct link to heading"},"#"))}}}}]);