/*! For license information please see 641e5700.aba05ca3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),o=(n(0),n(328)),i=(n(348),n(342),n(335)),c=n(330),l={last_modified_on:"2021-01-26",$schema:"/.meta/.schemas/guides.json",title:"Custom routes",description:"How to set up custom routes in your project",author_github:"https://github.com/evoxmusic",tags:["type: guide"]},s={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Custom routes",description:"How to set up custom routes in your project",permalink:"/guides/advanced/custom-routes",readingTime:"5 min read",source:"@site/guides/advanced/custom-routes.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"}],title:"Custom routes",truncated:!1,prevItem:{title:"Create a blazingly fast REST API in Rust (Part 1/2)",permalink:"/guides/tutorial/create-a-blazingly-fast-api-in-rust-part-1"},nextItem:{title:"Deploy Django with PostgreSQL with Qovery",permalink:"/guides/tutorial/deploy-django-with-postgresql"}},u=[{value:"FAQ",id:"faq",children:[{value:"Why you should use it",id:"why-you-should-use-it",children:[]},{value:"Why you should not use it",id:"why-you-should-not-use-it",children:[]}]},{value:"Concepts",id:"concepts",children:[{value:"Router",id:"router",children:[]},{value:"Route",id:"route",children:[]},{value:"Multiple routes",id:"multiple-routes",children:[]},{value:"Custom domains",id:"custom-domains",children:[]}]},{value:"The e-commerce website",id:"the-e-commerce-website",children:[{value:"Web interface",id:"web-interface",children:[]},{value:"Order service",id:"order-service",children:[]},{value:"Billing service",id:"billing-service",children:[]}]}],p={rightToc:u};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Qovery allows you to define the routes used in your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environments"),"."),Object(o.b)("p",null,"A route describes how an incoming HTTP request is going to be processed by Qovery. The routes are defined using .qovery.yml file in your application repository."),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"No network knowledge is required to create your custom routes")),Object(o.b)(i.a,{mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have installed the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/guides/getting-started/deploy-your-first-application/"}),"Qovery CLI")),Object(o.b)("li",{parentName:"ul"},"You need to deploy more than one application (e.g backend and frontend)"))),Object(o.b)("h2",{id:"faq"},"FAQ"),Object(o.b)("p",null,"Before digging deeper into this guide, I would explain why you should not or why you should use it."),Object(o.b)("h3",{id:"why-you-should-use-it"},"Why you should use it"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You need to expose your application publicly through HTTPS"),Object(o.b)("li",{parentName:"ul"},"You need to have one endpoint (foo.com) targeting multiple backend applications")),Object(o.b)("h3",{id:"why-you-should-not-use-it"},"Why you should not use it"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You only have one application within your ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/main-concepts/environment/"}),"environment")),Object(o.b)("li",{parentName:"ul"},"You are not sure why you should use it (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://discord.qovery.com"}),"ask us"),")")),Object(o.b)("h2",{id:"concepts"},"Concepts"),Object(o.b)("h3",{id:"router"},"Router"),Object(o.b)("p",null,'Qovery has the concept of "',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/routing/"}),"router"),'" which is where the traffic transit from the World and your application.\nEach application that needs to be accessible from outside - needs to be attached to at least one router.'),Object(o.b)("p",null,"An application can be attached to 0 to n routers. It's up to you and depends on your use case."),Object(o.b)("p",null,"A router is defined by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a name (must be unique through the project)"),Object(o.b)("li",{parentName:"ul"},"0 to n custom domains"),Object(o.b)("li",{parentName:"ul"},"1 to n routes")),Object(o.b)("p",null,"Here is a configuration example of a router:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml" {6-15}',title:'".qovery.yml"',"{6-15}":!0}),"application:\n  name: my-app-1\n  project: my-project\n  publicly_accessible: true\n  port: 8080\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-1\n    paths:\n    - /\n")),Object(o.b)("h3",{id:"route"},"Route"),Object(o.b)("p",null,'A "',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/routing/"}),"route"),'" is a concept to connect a "router" to an application. An application can have 0 to n routes.'),Object(o.b)("p",null,"A route is defined by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a path"),Object(o.b)("li",{parentName:"ul"},"an application name")),Object(o.b)("p",null,"Here is a configuration example of a route:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml" {11-15}',title:'".qovery.yml"',"{11-15}":!0}),"application:\n  name: my-app-1\n  project: my-project\n  publicly_accessible: true\n  port: 8080\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-1\n    paths:\n    - /\n")),Object(o.b)("h3",{id:"multiple-routes"},"Multiple routes"),Object(o.b)("p",null,"As explained above, each router can have multiple routes targeting different applications.\n",Object(o.b)("strong",{parentName:"p"},"Each application can use the same router by using the same router name within the same project.")),Object(o.b)("p",null,"Here is an example with two applications, which each of them have their own ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{1:!0,className:"language-yaml",metastring:'title="Application 1 - .qovery.yml"',title:'"Application',"-":!0,'.qovery.yml"':!0}),"application:\n  name: my-app-1\n  project: my-project\n  publicly_accessible: true\n  port: 8080\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-1\n    paths:\n    - /\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{2:!0,className:"language-yaml",metastring:'title="Application 2 - .qovery.yml"',title:'"Application',"-":!0,'.qovery.yml"':!0}),"application:\n  name: my-app-2\n  project: my-project\n  publicly_accessible: true\n  port: 8080\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-2\n    paths:\n    - /app2/\n")),Object(o.b)("p",null,"Behind the scene Qovery will merge the two .qovery.yml into a single one. Which gives a router that will look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Merged router" {8-13}',title:'"Merged','router"':!0,"{8-13}":!0}),"...\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.tld.com\n  routes:\n  - application_name: my-app-1\n    paths:\n    - /\n  - application_name: my-app-2\n    paths:\n    - /app2/\n")),Object(o.b)("p",null,"Meaning, traffic with a route starting with the URL ",Object(o.b)("inlineCode",{parentName:"p"},"https://my.tld.com/app2")," is routed on ",Object(o.b)("inlineCode",{parentName:"p"},"my-app-2"),", and the remaining traffic is routed on ",Object(o.b)("inlineCode",{parentName:"p"},"my-app-1"),"."),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Qovery takes care of duplicated routes and deny the latest created one to avoid unintended overrides.")),Object(o.b)("h3",{id:"custom-domains"},"Custom domains"),Object(o.b)("p",null,'A custom domain can be attached (optional) to a "router" and an ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environment"),". Then, multiple application can benefit from the same domain."),Object(o.b)(c.a,{type:"success",mdxType:"Alert"},Object(o.b)("p",null,"Every router on Qovery automatically gets a free ",Object(o.b)("inlineCode",{parentName:"p"},"qovery.io")," address which does not change per branch.")),Object(o.b)("h1",{id:"example"},"Example"),Object(o.b)("p",null,"Here is a concrete example to show how custom routes could be your best friend in a real-world application."),Object(o.b)("h2",{id:"the-e-commerce-website"},"The e-commerce website"),Object(o.b)("p",null,"Let's imagine that we have to build an e-commerce website which gives the possibility to order shoes. This website must be able to take orders and provide an invoice for each order. Our system has one web interface, one order service, and one billing service that is for each of them an independent application."),Object(o.b)("p",null,"What do we want?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("strong",{parentName:"li"},"web interface")," must be available through ",Object(o.b)("strong",{parentName:"li"},"shopping.com")," and ",Object(o.b)("strong",{parentName:"li"},"www.shopping.com")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("strong",{parentName:"li"},"order")," service must be available through ",Object(o.b)("strong",{parentName:"li"},"api.shopping.com/order")),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("strong",{parentName:"li"},"billing")," service must be available through ",Object(o.b)("strong",{parentName:"li"},"api.shopping.com/billing")," as well"),Object(o.b)("li",{parentName:"ul"},"The traffic coming on ",Object(o.b)("inlineCode",{parentName:"li"},"api.shopping.com")," and not covered by the two rules above must be routed on ",Object(o.b)("strong",{parentName:"li"},"order"))),Object(o.b)("p",null,"This is what the custom routing definition looks like for each of them"),Object(o.b)("h3",{id:"web-interface"},"Web interface"),Object(o.b)("p",null,"Here is what the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," looks like for the web interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml web interface" {7-16}',title:'".qovery.yml',web:!0,'interface"':!0,"{7-16}":!0}),"application:\n  name: web-interface\n  project: my-ecommerce-project\n  publicly_accessible: true\nrouters:\n- name: frontend\n  custom_domains:\n  - branch: master\n    domain: shopping.com\n  - branch: master\n    domain: www.shopping.com\n  routes:\n  - application_name: web-interface\n    paths:\n    - /\n")),Object(o.b)("h3",{id:"order-service"},"Order service"),Object(o.b)("p",null,"Here is what the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," looks like for the order service:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml order service" {7-16}',title:'".qovery.yml',order:!0,'service"':!0,"{7-16}":!0}),"application:\n  name: order-service\n  project: my-ecommerce-project\n  publicly_accessible: true\nrouters:\n- name: backend\n  custom_domains:\n  - branch: master\n    domain: api.shopping.com\n  routes:\n  - application_name: order-service\n    paths:\n    - /\n    - /order/\n")),Object(o.b)("h3",{id:"billing-service"},"Billing service"),Object(o.b)("p",null,"Here is what the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," looks like for the billing service:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml billing service" {7-15}',title:'".qovery.yml',billing:!0,'service"':!0,"{7-15}":!0}),"application:\n  name: billing-service\n  project: my-ecommerce-project\n  publicly_accessible: true\nrouters:\n- name: backend\n  custom_domains:\n  - branch: master\n    domain: api.shopping.com\n  routes:\n  - application_name: billing-service\n    paths:\n    - /billing/\n")),Object(o.b)("p",null,"At the end, ",Object(o.b)("inlineCode",{parentName:"p"},"api.shopping.com"),", ",Object(o.b)("inlineCode",{parentName:"p"},"shopping.com")," and ",Object(o.b)("inlineCode",{parentName:"p"},"www.shopping.com")," work as expected.\nHappy custom routing."))}m.isMDXComponent=!0},327:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},330:function(e,t,n){"use strict";n(334);var r=n(0),a=n.n(r),o=n(327),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},333:function(e,t,n){var r=n(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},334:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(337)}),n(75)("fill")},335:function(e,t,n){"use strict";n(333);var r=n(0),a=n.n(r),o=n(330);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},337:function(e,t,n){"use strict";var r=n(27),a=n(76),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>c;)t[c++]=e;return t}},338:function(e,t,n){"use strict";var r=n(343),a=n(53);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},342:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(327),n(338)),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(r.useState)(null),p=u[0],m=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return m("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},343:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);