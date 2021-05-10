(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{339:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(392)),b=a(395),p=a(396),i={id:"class-keyboard",title:"Keyboard"},c={unversionedId:"api/class-keyboard",id:"version-1.8.0/api/class-keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is keyboard.type(text, **kwargs), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-1.8.0/api/class-keyboard.mdx",slug:"/api/class-keyboard",permalink:"/python/docs/1.8.0/api/class-keyboard",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"JSHandle",permalink:"/python/docs/1.8.0/api/class-jshandle"},next:{title:"Mouse",permalink:"/python/docs/1.8.0/api/class-mouse"}},l=[{value:"keyboard.down(key)",id:"keyboarddownkey",children:[]},{value:"keyboard.insert_text(text)",id:"keyboardinsert_texttext",children:[]},{value:"keyboard.press(key, **kwargs)",id:"keyboardpresskey-kwargs",children:[]},{value:"keyboard.type(text, **kwargs)",id:"keyboardtypetext-kwargs",children:[]},{value:"keyboard.up(key)",id:"keyboardupkey",children:[]}],s={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardtypetext-kwargs"}),"keyboard.type(text, **kwargs)"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),Object(o.b)("p",null,"For finer control, you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboarddownkey"}),"keyboard.down(key)"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"),", and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardinsert_texttext"}),"keyboard.insert_text(text)")," to manually fire events as if they were generated from a real keyboard."),Object(o.b)("p",null,"An example of holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),Object(o.b)(b.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.keyboard.type("Hello World!")\npage.keyboard.press("ArrowLeft")\npage.keyboard.down("Shift")\nfor i in range(6):\n    page.keyboard.press("ArrowLeft")\npage.keyboard.up("Shift")\npage.keyboard.press("Backspace")\n# result text will end up saying "Hello!"\n'))),Object(o.b)(p.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.keyboard.type("Hello World!")\nawait page.keyboard.press("ArrowLeft")\nawait page.keyboard.down("Shift")\nfor i in range(6):\n    await page.keyboard.press("ArrowLeft")\nawait page.keyboard.up("Shift")\nawait page.keyboard.press("Backspace")\n# result text will end up saying "Hello!"\n')))),Object(o.b)("p",null,"An example of pressing uppercase ",Object(o.b)("inlineCode",{parentName:"p"},"A")),Object(o.b)(b.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.keyboard.press("Shift+KeyA")\n# or\npage.keyboard.press("Shift+A")\n'))),Object(o.b)(p.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.keyboard.press("Shift+KeyA")\n# or\nawait page.keyboard.press("Shift+A")\n')))),Object(o.b)("p",null,"An example to trigger select-all with the keyboard"),Object(o.b)(b.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# on windows and linux\npage.keyboard.press("Control+A")\n# on mac_os\npage.keyboard.press("Meta+A")\n'))),Object(o.b)(p.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# on windows and linux\nawait page.keyboard.press("Control+A")\n# on mac_os\nawait page.keyboard.press("Meta+A")\n')))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboarddownkey"}),"keyboard.down(key)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardinsert_texttext"}),"keyboard.insert_text(text)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardpresskey-kwargs"}),"keyboard.press(key, **kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardtypetext-kwargs"}),"keyboard.type(text, **kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"))),Object(o.b)("h2",{id:"keyboarddownkey"},"keyboard.down(key)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Name of the key to press or a character to generate, such as ",Object(o.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(o.b)("inlineCode",{parentName:"li"},"a"),".")),Object(o.b)("p",null,"Dispatches a ",Object(o.b)("inlineCode",{parentName:"p"},"keydown")," event."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"key")," can specify the intended ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," values can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"F1")," - ",Object(o.b)("inlineCode",{parentName:"p"},"F12"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Digit0"),"- ",Object(o.b)("inlineCode",{parentName:"p"},"Digit9"),", ",Object(o.b)("inlineCode",{parentName:"p"},"KeyA"),"- ",Object(o.b)("inlineCode",{parentName:"p"},"KeyZ"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backquote"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Minus"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Equal"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backslash"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backspace"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Tab"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Delete"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Escape"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowDown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"End"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Enter"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Insert"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PageDown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PageUp"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowRight"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),Object(o.b)("p",null,"Following modification shortcuts are also supported: ",Object(o.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Control"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Alt"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),Object(o.b)("p",null,"Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," in the upper case."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",Object(o.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Control"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"),"."),Object(o.b)("p",null,"After the key is pressed once, subsequent calls to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboarddownkey"}),"keyboard.down(key)")," will have ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"}),"repeat")," set to true. To release the key, use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Modifier keys DO influence ",Object(o.b)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))),Object(o.b)("h2",{id:"keyboardinsert_texttext"},"keyboard.insert_text(text)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"text")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Sets input to the specified text value.")),Object(o.b)("p",null,"Dispatches only ",Object(o.b)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",Object(o.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"keyup")," or ",Object(o.b)("inlineCode",{parentName:"p"},"keypress")," events."),Object(o.b)(b.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.keyboard.insert_text("\u55e8")\n'))),Object(o.b)(p.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.keyboard.insert_text("\u55e8")\n')))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Modifier keys DO NOT effect ",Object(o.b)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),Object(o.b)("h2",{id:"keyboardpresskey-kwargs"},"keyboard.press(key, **kwargs)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Name of the key to press or a character to generate, such as ",Object(o.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(o.b)("inlineCode",{parentName:"li"},"a"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time to wait between ",Object(o.b)("inlineCode",{parentName:"li"},"keydown")," and ",Object(o.b)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"key")," can specify the intended ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," values can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"F1")," - ",Object(o.b)("inlineCode",{parentName:"p"},"F12"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Digit0"),"- ",Object(o.b)("inlineCode",{parentName:"p"},"Digit9"),", ",Object(o.b)("inlineCode",{parentName:"p"},"KeyA"),"- ",Object(o.b)("inlineCode",{parentName:"p"},"KeyZ"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backquote"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Minus"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Equal"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backslash"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Backspace"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Tab"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Delete"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Escape"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowDown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"End"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Enter"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Insert"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PageDown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PageUp"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowRight"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),Object(o.b)("p",null,"Following modification shortcuts are also supported: ",Object(o.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Control"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Alt"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),Object(o.b)("p",null,"Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," in the upper case."),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),Object(o.b)("p",null,"Shortcuts such as ",Object(o.b)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When speficied with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(o.b)(b.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page = browser.new_page()\npage.goto("https://keycode.info")\npage.keyboard.press("a")\npage.screenshot(path="a.png")\npage.keyboard.press("ArrowLeft")\npage.screenshot(path="arrow_left.png")\npage.keyboard.press("Shift+O")\npage.screenshot(path="o.png")\nbrowser.close()\n'))),Object(o.b)(p.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page = await browser.new_page()\nawait page.goto("https://keycode.info")\nawait page.keyboard.press("a")\nawait page.screenshot(path="a.png")\nawait page.keyboard.press("ArrowLeft")\nawait page.screenshot(path="arrow_left.png")\nawait page.keyboard.press("Shift+O")\nawait page.screenshot(path="o.png")\nawait browser.close()\n')))),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboarddownkey"}),"keyboard.down(key)")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"),"."),Object(o.b)("h2",{id:"keyboardtypetext-kwargs"},"keyboard.type(text, **kwargs)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"text")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> A text to type into a focused element."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time to wait between key presses in milliseconds. Defaults to 0.")),Object(o.b)("p",null,"Sends a ",Object(o.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(o.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(o.b)("inlineCode",{parentName:"p"},"input"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),Object(o.b)("p",null,"To press a special key, like ",Object(o.b)("inlineCode",{parentName:"p"},"Control")," or ",Object(o.b)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-keyboard#keyboardpresskey-kwargs"}),"keyboard.press(key, **kwargs)"),"."),Object(o.b)(b.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.keyboard.type("Hello") # types instantly\npage.keyboard.type("World", delay=100) # types slower, like a user\n'))),Object(o.b)(p.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.keyboard.type("Hello") # types instantly\nawait page.keyboard.type("World", delay=100) # types slower, like a user\n')))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Modifier keys DO NOT effect ",Object(o.b)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",Object(o.b)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),Object(o.b)("h2",{id:"keyboardupkey"},"keyboard.up(key)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Name of the key to press or a character to generate, such as ",Object(o.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(o.b)("inlineCode",{parentName:"li"},"a"),".")),Object(o.b)("p",null,"Dispatches a ",Object(o.b)("inlineCode",{parentName:"p"},"keyup")," event."))}d.isMDXComponent=!0},391:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},392:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(a),y=n,m=s["".concat(b,".").concat(y)]||s[y]||d[y]||o;return a?r.a.createElement(m,p(p({ref:t},c),{},{components:a})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,b=new Array(o);b[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,b[1]=p;for(var c=2;c<o;c++)b[c]=a[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}y.displayName="MDXCreateElement"},393:function(e,t,a){"use strict";var n=a(0),r=a(394);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},394:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},395:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(393),b=a(391),p=a(53),i=a.n(p),c=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,s=e.values,d=e.groupId,y=e.className,m=Object(o.a)(),u=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(n.useState)(p),h=j[0],k=j[1],f=n.Children.toArray(e.children);if(null!=d){var N=u[d];null!=N&&N!==h&&s.some((function(e){return e.value===N}))&&k(N)}var g=function(e){k(e),null!=d&&O(d,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},y)},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(b.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},396:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);