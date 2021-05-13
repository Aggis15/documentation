/*! For license information please see 2ed7f69c.95760cfa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),o=(n(0),n(346)),i=n(349),c=n(348),l={last_modified_on:"2021-05-13",title:"Applications",description:"Learn how to configure your Application on Qovery"},p={id:"using-qovery/configuration/applications",title:"Applications",description:"Learn how to configure your Application on Qovery",source:"@site/docs/using-qovery/configuration/applications.md",permalink:"/docs/using-qovery/configuration/applications",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/applications.md",sidebar:"docs",previous:{title:"Projects",permalink:"/docs/using-qovery/configuration/projects"},next:{title:"Databases",permalink:"/docs/using-qovery/configuration/databases"}},b=[{value:"Creating Application",id:"creating-application",children:[]},{value:"Renaming Application",id:"renaming-application",children:[]},{value:"configuration",id:"configuration",children:[{value:"Application build",id:"application-build",children:[]},{value:".qovery.yml",id:"qoveryyml",children:[]}]}],u={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An ",Object(o.b)("strong",{parentName:"p"},"application")," is part of a project and is a container unit. Multiple applications can be part of the same ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/projects/"}),"project"),", be connected to a set of dependencies (databases and other services), and can communicate with other applications within the same project."),Object(o.b)("p",null,"To learn more about Application, read a high-level description of what Application concept means at Qovery."),Object(o.b)(i.a,{to:"/docs/main-concepts/project",mdxType:"Jump"},"Application"),Object(o.b)("h2",{id:"creating-application"},"Creating Application"),Object(o.b)("p",null,"Creating a new project is as simple as choosing its name in your application configs(",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:"{2}","{2}":!0}),"application:\n  name: myApp\n  project: myProject\n")),Object(o.b)("p",null,"Above snippet creates an application ",Object(o.b)("inlineCode",{parentName:"p"},"myApp")," within the project ",Object(o.b)("inlineCode",{parentName:"p"},"myProject"),"."),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Qovery creates the project if it does not exist. If the project exists, Qovery adds your application into it.")),Object(o.b)("h2",{id:"renaming-application"},"Renaming Application"),Object(o.b)("p",null,"To give to your application a new name, just type ",Object(o.b)("inlineCode",{parentName:"p"},"qovery application rename $NEW_NAME"),", where ",Object(o.b)("inlineCode",{parentName:"p"},"$NEW_NAME")," is a placeholder for the new name you want to use.\nAfter it's done, you need to update your ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," configuration file to match your new application name."),Object(o.b)("h2",{id:"configuration"},"configuration"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},".qovery.yml")," file is mandatory to run your Application with Qovery."),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"Dockerfile")," file is non-mandatory if your application is written in Ruby, Java, Node.JS, Python, Golang or PHP. More will be added. Suggest us to support a language ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://roadmap.qovery.com/"}),"here"),". If your language is not in the supported list, then you need to provide a ",Object(o.b)("inlineCode",{parentName:"li"},"Dockerfile"),".")),Object(o.b)("h3",{id:"application-build"},"Application build"),Object(o.b)("h4",{id:"option-1-buildpacks"},"Option 1: Buildpacks"),Object(o.b)("p",null,"To simplify application build for the developer, Qovery supports ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://buildpacks.io"}),"Buildpacks")," out of the box. Buildpacks determine the build process for an app, and which assets and runtimes should be made available to your code at runtime. If your complex apps are running multiple languages, you can also use multiple buildpacks within a single app.\nMeaning, as a developer, you don't need to write a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," to build and run your app. Qovery Buildpacks takes care of everything for you."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Supported languages")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"language"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"version"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ruby"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Java"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Node.JS"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Python"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Javascript"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Typescript"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Python"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Golang"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PHP"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")))),Object(o.b)("p",null,"You don't find a cool language? ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"Suggest us to support it")),Object(o.b)("h4",{id:"option-2-dockerfile"},"Option 2: Dockerfile"),Object(o.b)("p",null,"Qovery runs your application within the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container"}),"Container technology"),". To build and run your application, you need to provide a valid ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder"}),"Dockerfile"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile",metastring:'title="Valid NodeJS Dockerfile"',title:'"Valid',NodeJS:!0,'Dockerfile"':!0}),"FROM node:13-alpine\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\nCOPY . .\nRUN npm install\nEXPOSE 3000\nCMD node ./bin/www\n")),Object(o.b)("p",null,"To validate it you can run ",Object(o.b)("inlineCode",{parentName:"p"},"qovery run")," - Note: you need to have Docker running on your computer."),Object(o.b)("h4",{id:"custom-dockerfile-location"},"Custom Dockerfile location"),Object(o.b)("p",null,"To specify the location of your Dockerfile, use ",Object(o.b)("inlineCode",{parentName:"p"},"dockerfile")," field in your ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:"{5}","{5}":!0}),"application:\n  name: myApp\n  project: myProject\n  cpu: 1\n  dockerfile: my/folder/Dockerfile\n")),Object(o.b)("p",null,"Configuration from above will make Qovery look for the Dockerfile in ",Object(o.b)("inlineCode",{parentName:"p"},"my/folder/Dockerfile")," path of your repository."),Object(o.b)("h3",{id:"qoveryyml"},".qovery.yml"),Object(o.b)("h4",{id:"cpu"},"CPU"),Object(o.b)("p",null,"To configure the number of CPUs that your app needs, you only need to add the ",Object(o.b)("inlineCode",{parentName:"p"},"cpu")," option into the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Default is 256m")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:"{4}","{4}":!0}),"application:\n  name: myApp\n  project: myProject\n  cpu: 1\n")),Object(o.b)("p",null,"Accepted values are Integer and Millis CPU."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'{4} title="2 CPUs requested"',"{4}":!0,title:'"2',CPUs:!0,'requested"':!0}),"application:\n  name: myApp\n  project: myProject\n  cpu: 2\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'{4} title="1/4 of CPU requested"',"{4}":!0,title:'"1/4',of:!0,CPU:!0,'requested"':!0}),"application:\n  name: myApp\n  project: myProject\n  cpu: 250m\n")),Object(o.b)("h4",{id:"ram"},"RAM"),Object(o.b)("p",null,"To configure the RAM that your app needs, you only need to add the ",Object(o.b)("inlineCode",{parentName:"p"},"ram")," property into the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Default is 512MB")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:"{4}","{4}":!0}),"application:\n  name: myApp\n  project: myProject\n  ram: 256MB\n")),Object(o.b)("p",null,"Accepted values are MB (mega bytes) and GB (giga bytes)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'{4} title="1 GB requested"',"{4}":!0,title:'"1',GB:!0,'requested"':!0}),"application:\n  name: myApp\n  project: myProject\n  ram: 1GB\n")),Object(o.b)("h4",{id:"publicly-accessible"},"Publicly accessible"),Object(o.b)("p",null,"To publicly expose your application you need to add the following lines into your ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'{4-11} title="publicly expose my application and route the traffic into it"',"{4-11}":!0,title:'"publicly',expose:!0,my:!0,application:!0,and:!0,route:!0,the:!0,traffic:!0,into:!0,'it"':!0}),"application:\n  name: myApp\n  project: myProject\n  publicly_accessible: true\n  port: 8080\nrouters:\n- name: my-router\n  routes:\n  - application_name: myApp\n    paths:\n    - /\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"See what is a ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/using-qovery/configuration/routing/"}),"router")," to go further.")),Object(o.b)("p",null,"You also need to indicate on which port your application is running."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Option 1")),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"port")," property in your ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," as above."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Option 2")),Object(o.b)("p",null,"Add the ",Object(o.b)("inlineCode",{parentName:"p"},"EXPOSE {port}")," instruction into your ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Dockerfile",metastring:'title="Expose"',title:'"Expose"'}),"...\nEXPOSE 3000\n...\n")),Object(o.b)("p",null,"Your app is now publicly accessible through the auto generated endpoint."),Object(o.b)("h4",{id:"long-startup-time"},"Long startup time"),Object(o.b)("p",null,"Sometimes your application can take some time to start. E.g., when your app is performing database migration.\nBy default, Qovery waits for 15 seconds to check if your app is running correctly. If it's not the case, your environment is rolled-back to the previous working version."),Object(o.b)("p",null,"To prevent this, you can change the startup time:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{5:!0,className:"language-yml",metastring:'{4} title="Change the start timeout to 5 minutes"',"{4}":!0,title:'"Change',the:!0,start:!0,timeout:!0,to:!0,'minutes"':!0}),"application:\n  name: myApp\n  project: myProject\n  start_timeout: 600s\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{5:!0,className:"language-yml",metastring:'{4} title="Change the start timeout to 5 minutes"',"{4}":!0,title:'"Change',the:!0,start:!0,timeout:!0,to:!0,'minutes"':!0}),"application:\n  name: myApp\n  project: myProject\n  start_timeout: 5m\n")),Object(o.b)("p",null,"Seconds (s) and minutes (m) are accepted units."),Object(o.b)("h4",{id:"define-start-order"},"Define start order"),Object(o.b)("p",null,"Qovery gives you the power to have multiple apps within one environment. Sometimes it's necessary to one or multiple apps before others.\nBy using ",Object(o.b)("inlineCode",{parentName:"p"},"depends_on")," property you can declare a list of apps your app is depending on."),Object(o.b)("p",null,"Let's take as example 3 apps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"billing-api"),Object(o.b)("li",{parentName:"ul"},"user-api"),Object(o.b)("li",{parentName:"ul"},"frontend")),Object(o.b)("p",null,"Where:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"frontend")," depends on ",Object(o.b)("strong",{parentName:"li"},"user-api")," and ",Object(o.b)("strong",{parentName:"li"},"billing-api"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml",metastring:'{4-6} title="Declare dependencies"',"{4-6}":!0,title:'"Declare','dependencies"':!0}),"application:\n  name: frontend\n  project: myProject\n  depends_on:\n  - user-api\n    billing-api\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"depends_on")," property, guarantee that your app will never start before others that it depends on."))}s.isMDXComponent=!0},345:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?r.a.createElement(d,c({ref:t},p,{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},347:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(39),c=n(350),l=n(19),p=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,b=n||l,u=Object(c.a)(b),s=Object(r.useRef)(!1),m=p.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&u&&window.docusaurus.prefetch(b),function(){m&&t&&t.disconnect()}}),[b,m,u]),b&&u?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){s.current||(window.docusaurus.preload(b),s.current=!0)},innerRef:function(e){var n,a;m&&e&&u&&(n=e,a=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:b})):o.a.createElement("a",Object(a.a)({},e,{href:b}))}},348:function(e,t,n){"use strict";n(352);var a=n(0),r=n.n(a),o=n(345),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},349:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(347),i=n(345),c=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,i=e.leftIcon,l=e.rightIcon,p=e.size,b=e.target,u=e.to,s=c()("jump-to","jump-to--"+p,n),m=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return b?r.a.createElement("a",{href:u,target:b,className:s},m):r.a.createElement(o.a,{to:u,className:s},m)}},350:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},352:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(355)}),n(75)("fill")},355:function(e,t,n){"use strict";var a=n(27),r=n(76),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,p=void 0===l?n:r(l,n);p>c;)t[c++]=e;return t}}}]);