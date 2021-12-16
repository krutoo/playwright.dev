"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3247],{7174:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),s=(n(6396),n(8215),["components"]),i={id:"assertions",title:"Assertions"},c=void 0,o={unversionedId:"assertions",id:"assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/docs/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/dotnet/docs/next/assertions",tags:[],version:"current",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/dotnet/docs/next/actionability"},next:{title:"Authentication",permalink:"/dotnet/docs/next/auth"}},p=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[],level:3}],level:2},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[],level:3}],level:2},{value:"Attribute value",id:"attribute-value",children:[],level:2},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[],level:3}],level:2},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[],level:3}],level:2},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[],level:3}],level:2},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[],level:3}],level:2},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[],level:3}],level:2},{value:"Custom assertions",id:"custom-assertions",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,r.kt)("h2",{id:"text-content"},"Text content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.TextContentAsync("nav:first-child");\nAssert.AreEqual("home", content);\n')),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-text-content"},"Page.TextContentAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-text-content"},"ElementHandle.TextContentAsync()"))),(0,r.kt)("h2",{id:"inner-text"},"Inner text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.InnerTextAsync(".selected");\nAssert.AreEqual("value", content);\n')),(0,r.kt)("h3",{id:"api-reference-1"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-inner-text"},"Page.InnerTextAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.InnerTextAsync()"))),(0,r.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var value = await page.GetAttributeAsync("input", "alt");\nAssert.AreEqual("Text", value);\n')),(0,r.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var checked = await page.IsCheckedAsync("input");\nAssert.True(checked);\n')),(0,r.kt)("h3",{id:"api-reference-2"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-checked"},"Page.IsCheckedAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.IsCheckedAsync()"))),(0,r.kt)("h2",{id:"js-expression"},"JS expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = await page.locator("nav:first-child").TextContentAsync();\nAssert.AreEqual("home", content);\n')),(0,r.kt)("h3",{id:"api-reference-3"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-eval-on-selector"},"Page.EvalOnSelectorAsync(selector, expression, arg, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-jshandle#js-handle-evaluate"},"JsHandle.EvaluateAsync(expression, arg)"))),(0,r.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var html = await page.InnerHTMLAsync("div.result");\nAssert.AreEqual("<p>Result</p>", html);\n')),(0,r.kt)("h3",{id:"api-reference-4"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-inner-html"},"Page.InnerHTMLAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.InnerHTMLAsync()"))),(0,r.kt)("h2",{id:"visibility"},"Visibility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var visibility = await page.IsVisibleAsync("input");\nAssert.True(visibility);\n')),(0,r.kt)("h3",{id:"api-reference-5"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-visible"},"Page.IsVisibleAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-visible"},"ElementHandle.IsVisibleAsync()"))),(0,r.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var enabled = await page.IsEnabledAsync("input");\nAssert.True(enabled);\n')),(0,r.kt)("h3",{id:"api-reference-6"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-page#page-is-enabled"},"Page.IsEnabledAsync(selector, options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/next/api/class-elementhandle#element-handle-is-enabled"},"ElementHandle.IsEnabledAsync()"))),(0,r.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,r.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Assert local storage value\nvar userId = await page.EvaluateAsync<string>("() => window.localStorage.getItem(\'userId\')");\nAssert.NotNull(userId);\n\n// Assert value for input element\nvar value = await page.Locator("#search").InputValueAsync();\nAssert.AreEqual("query", value);\n\n// Assert computed style\nvar fontSize = await page.Locator("div").EvalOnSelectorAsync<string>("el => window.getComputedStyle(el).fontSize");\nAssert.AreEqual("16px", fontSize);\n\n// Assert list length\nvar length = await page.Locator("li.selected").CountAsync();\nAssert.AreEqual(3, length);\n')))}d.isMDXComponent=!0}}]);