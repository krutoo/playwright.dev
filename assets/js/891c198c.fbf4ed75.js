(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[20249],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=l,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28380:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var n=a(22122),l=a(19756),i=(a(67294),a(3905)),r={id:"input",title:"Input"},o={unversionedId:"input",id:"version-1.5.0/input",isDocsHomePage:!1,title:"Input",description:"- Text input",source:"@site/versioned_docs/version-1.5.0/input.mdx",sourceDirName:".",slug:"/input",permalink:"/docs/1.5.0/input",version:"1.5.0",frontMatter:{id:"input",title:"Input"},sidebar:"version-1.5.0/docs",previous:{title:"Element selectors",permalink:"/docs/1.5.0/selectors"},next:{title:"Device and environment emulation",permalink:"/docs/1.5.0/emulation"}},p=[{value:"Text input",id:"text-input",children:[]},{value:"Checkboxes",id:"checkboxes",children:[]},{value:"Select options",id:"select-options",children:[]},{value:"Mouse click",id:"mouse-click",children:[]},{value:"Type characters",id:"type-characters",children:[]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[]},{value:"Upload files",id:"upload-files",children:[]},{value:"Focus element",id:"focus-element",children:[]}],s={toc:p};function c(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#text-input"},"Text input")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#checkboxes"},"Checkboxes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#select-options"},"Select options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mouse-click"},"Mouse click")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#type-characters"},"Type characters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#keys-and-shortcuts"},"Keys and shortcuts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upload-files"},"Upload files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#focus-element"},"Focus element"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"text-input"},"Text input"),(0,i.kt)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<textarea>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"[contenteditable]")," elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Text input\nawait page.fill('#name', 'Peter');\n\n// Date input\nawait page.fill('#date', '2020-02-02');\n\n// Time input\nawait page.fill('#time', '13-15');\n\n// Local datetime input\nawait page.fill('#local', '2020-03-02T05:15');\n")),(0,i.kt)("h4",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pagefillselector-value-options"},"page.fill(selector, value[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#framefillselector-value-options"},"frame.fill(selector, value[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandlefillvalue-options"},"elementHandle.fill(value[, options])")," \u2014 given element")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"checkboxes"},"Checkboxes"),(0,i.kt)("p",null,"This is the easiest way to check and uncheck a checkbox. This method can be used on the ",(0,i.kt)("inlineCode",{parentName:"p"},"input[type=checkbox]")," and on the ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," associated with that input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Check the checkbox\nawait page.check('#agree');\n\n// Uncheck by input <label>.\nawait page.uncheck('#subscribe-label');\n")),(0,i.kt)("h4",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pagecheckselector-options"},"page.check(selector[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pageuncheckselector-options"},"page.uncheck(selector[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#framecheckselector-options"},"frame.check(selector[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#frameuncheckselector-options"},"frame.uncheck(selector[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandleuncheckoptions"},"elementHandle.check(value[, options])")," \u2014 given element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandleuncheckoptions"},"elementHandle.uncheck(value[, options])")," \u2014 given element")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"select-options"},"Select options"),(0,i.kt)("p",null,"Selects one or multiple options in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<select>")," element.\nYou can specify option ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Single selection matching the value\nawait page.selectOption('select#colors', 'blue');\n\n// Single selection matching the label\nawait page.selectOption('select#colors', { label: 'Blue' });\n\n// Multiple selected items\nawait page.selectOption('select#colors', ['red', 'green', 'blue']);\n\n// Select the option via element handle\nconst option = await page.$('#best-option');\nawait page.selectOption('select#colors', option);\n")),(0,i.kt)("h4",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pageselectoptionselector-values-options"},"page.selectOption(selector, values[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#frameselectoptionselector-values-options"},"frame.selectOption(selector, values[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandleselectoptionvalues-options"},"elementHandle.selectOption(values[, options])")," \u2014 given element")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"mouse-click"},"Mouse click"),(0,i.kt)("p",null,"Performs a simple human click."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Generic click\nawait page.click('button#submit');\n\n// Double click\nawait page.dblclick('#item');\n\n// Right click\nawait page.click('#item', { button: 'right' });\n\n// Shift + click\nawait page.click('#item', { modifiers: ['Shift'] });\n\n// Hover over element\nawait page.hover('#item');\n\n// Click the top left corner\nawait page.click('#item', { position: { x: 0, y: 0} });\n")),(0,i.kt)("p",null,"Under the hood, this and other pointer-related methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),(0,i.kt)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",(0,i.kt)("inlineCode",{parentName:"li"},"display:none"),", no ",(0,i.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,i.kt)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),(0,i.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,i.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),(0,i.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,i.kt)("h4",{id:"forcing-the-click"},"Forcing the click"),(0,i.kt)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.5.0/actionability"},"actionability")," checks and force the click:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.click('button#submit', { force: true });\n")),(0,i.kt)("h4",{id:"programmatic-click"},"Programmatic click"),(0,i.kt)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"},(0,i.kt)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.dispatchEvent('button#submit', 'click');\n")),(0,i.kt)("h4",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pageclickselector-options"},"page.click(selector[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#frameclickselector-options"},"frame.click(selector[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandleclickoptions"},"elementHandle.click([options])")," \u2014 given element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pagedblclickselector-options"},"page.dblclick(selector[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#framedblclickselector-options"},"frame.dblclick(selector[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandledblclickoptions"},"elementHandle.dblclick([options])")," \u2014 given element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pagehoverselector-options"},"page.hover(selector[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#framehoverselector-options"},"frame.hover(selector[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandlehoveroptions"},"elementHandle.hover([options])")," \u2014 given element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pagedispatcheventselector-type-eventinit-options"},"page.dispatchEvent(selector, type)")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#framedispatcheventselector-type-eventinit-options"},"frame.dispatchEvent(selector, type)")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandledispatcheventtype-eventinit"},"elementHandle.dispatchEvent(type)")," \u2014 given element")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"type-characters"},"Type characters"),(0,i.kt)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Type character by character\nawait page.type('#area', 'Hello World!');\n")),(0,i.kt)("p",null,"This method will emit all the necessary keyboard events, with all the ",(0,i.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keyup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE")," that most of the time, ",(0,i.kt)("a",{parentName:"p",href:"#text-input"},(0,i.kt)("inlineCode",{parentName:"a"},"page.fill"))," will just work. You only need to type characters if there is special keyboard handling on the page.")),(0,i.kt)("h4",{id:"api-reference-4"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pagetypeselector-text-options"},"page.type(selector, text[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#frametypeselector-text-options"},"frame.type(selector, text[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandletypetext-options"},"elementHandle.type(text[, options])")," \u2014 given element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-keyboard#keyboardtypetext-options"},"keyboard.type(text[, options])")," \u2014 focused element")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Hit Enter\nawait page.press('#submit', 'Enter');\n\n// Dispatch Control+Right\nawait page.press('#name', 'Control+ArrowRight');\n\n// Press $ sign on keyboard\nawait page.press('#value', '$');\n")),(0,i.kt)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," property of the keyboard events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can alternatively specify a single character you'd like to produce such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"a"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"#"'),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Following modification shortcuts are also supported: ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift, Control, Alt, Meta"),"."))),(0,i.kt)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",(0,i.kt)("inlineCode",{parentName:"p"},'"a"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// <input id=name>\nawait page.press('#name', 'Shift+A');\n\n// <input id=name>\nawait page.press('#name', 'Shift+ArrowLeft');\n")),(0,i.kt)("p",null,"Shortcuts such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"Control+o"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,i.kt)("p",null,"Note that you still need to specify the capital ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",(0,i.kt)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),(0,i.kt)("h4",{id:"api-reference-5"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-page#pagepressselector-key-options"},"page.press(selector, key[, options])")," \u2014 main frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-frame#framepressselector-key-options"},"frame.press(selector, key[, options])")," \u2014 given frame"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-elementhandle#elementhandlepresskey-options"},"elementHandle.press(key[, options])")," \u2014 given element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.5.0/api/class-keyboard#keyboardpresskey-options"},"keyboard.press(key[, options])")," \u2014 focused element")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"upload-files"},"Upload files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Select one file\nawait page.setInputFiles('input#upload', 'myfile.pdf');\n\n// Select multiple files\nawait page.setInputFiles('input#upload', ['file1.txt', 'file2.txt']);\n\n// Remove all the selected files\nawait page.setInputFiles('input#upload', []);\n\n// Upload buffer from memory\nawait page.setInputFiles('input#upload', {\n  name: 'file.txt',\n  mimeType: 'text/plain',\n  buffer: Buffer.from('this is test')\n});\n")),(0,i.kt)("p",null,"You can select input files for upload using the ",(0,i.kt)("inlineCode",{parentName:"p"},"page.setInputFiles")," method. It expects first argument to point to an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element")," with the type ",(0,i.kt)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#process_process_cwd"},"current working directory"),". Empty array clears the selected files."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/docs/examples/upload.js"},"This script")," uploads a file to an ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," element that accepts file uploads."),(0,i.kt)("h4",{id:"api-reference-6"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/blob/master/docs/class-page.mdx#pagesetinputfilesselector-value-options"},"page.setInputFiles(selector, files[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/blob/master/docs/class-frame.mdx#framesetinputfilesselector-value-options"},"frame.setInputFiles(selector, files[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/blob/master/docs/api/class-elementhandle.mdx#elementhandlesetinputfilesfiles-options"},"elementHandle.setInputFiles(files[, options])"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"focus-element"},"Focus element"),(0,i.kt)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.focus('input#name');\n")),(0,i.kt)("h4",{id:"api-reference-7"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/blob/master/docs/api/class-page.mdx#pagefocusselector-options"},"page.focus(selector, [options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/blob/master/docs/api/class-frame.mdx#framefocusselector-options"},"frame.focus(selector, [options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/blob/master/docs/api/class-elementhandle.mdx#elementhandlefocus-options"},"elementHandle.focus([options])"))),(0,i.kt)("br",null))}c.isMDXComponent=!0}}]);