/*! For license information please see 7b4de6d5.063ff822.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(1),o=a(9),r=(a(0),a(247)),i=a(248),c=a(262),s={last_modified_on:"2020-04-20",$schema:"/.meta/.schemas/guides.json",title:"The easiest way to deploy microservices",description:"How to deploy microservices in a very simple way",author_github:"https://github.com/evoxmusic",tags:["type: tutorial"],hide_pagination:!0},l={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"The easiest way to deploy microservices",description:"How to deploy microservices in a very simple way",permalink:"/guides/tutorial/the-easiest-way-to-deploy-microservices",readingTime:"6 min read",source:"@site/guides/tutorial/the-easiest-way-to-deploy-microservices.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"}],title:"The easiest way to deploy microservices",truncated:!1,prevItem:{title:"Microservices",permalink:"/guides/advanced/microservices"},nextItem:{title:"URL Shortener API with Kotlin (Part 1/2)",permalink:"/guides/tutorial/url-shortener-api-with-kotlin"}},p=[{value:"Deploying application",id:"deploying-application",children:[]},{value:"Update application",id:"update-application",children:[]},{value:"Application rollback",id:"application-rollback",children:[]},{value:"Staging branch",id:"staging-branch",children:[]},{value:"Feature branch",id:"feature-branch",children:[]},{value:"Database natively supported",id:"database-natively-supported",children:[{value:"What is going on if I create a new branch with a database?",id:"what-is-going-on-if-i-create-a-new-branch-with-a-database",children:[]}]},{value:"Multiple applications and databases in one project",id:"multiple-applications-and-databases-in-one-project",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],b={rightToc:p};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All developers are not equal, some know how to deploy their applications, others don\u2019t. But now it\u2019s over! With ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com"}),"Qovery"),", all developers can deploy their application in the Cloud in just a few seconds."),Object(r.b)("p",null,"Qovery integrates seamlessly with Github and requires no effort from the developer."),Object(r.b)("p",null,"We know how it can be painful for developers to deploy applications, manage staging/development/features environments, synchronize databases and all system stuff - even in the Cloud."),Object(r.b)("p",null,"Developers should spend time doing what they love - developing applications, instead of wasting time on configuring databases, CDN, cache, network... That's why we decided to create Qovery. The first Container as a Service platform that allows any developer (junior, senior, backend, frontend...) to deploy applications in just a few minutes."),Object(r.b)(c.a,{name:"guide",mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have installed the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.qovery.com/extending-qovery/cli"}),"Qovery CLI")),Object(r.b)("li",{parentName:"ul"},"You host your code on Github"))),Object(r.b)("h2",{id:"deploying-application"},"Deploying application"),Object(r.b)("p",null,"Qovery is fully integrated into Github. Basically, you just need to have a ",Object(r.b)("strong",{parentName:"p"},".qovery.yml")," and a ",Object(r.b)("strong",{parentName:"p"},"Dockerfile")," at the root of your project. Once it is done, commit and push your code. You\u2019re done!"),Object(r.b)("p",null,"Generate the ",Object(r.b)("strong",{parentName:"p"},".qovery.yml")," file"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd simple-example-node\n# checkout this sample project\n# https://github.com/Qovery/simple-example-node\n\nqovery init\ncat .qovery.yml\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"application:\n  name: simple-example-node\n  project: simple-example-node\n  cloud_region: aws/eu-west-3\n  publicly_accessible: true\nrouters:\n- name: main\n  routes:\n  - application_name: simple-example-node\n    paths:\n    - /*\n")),Object(r.b)("p",null,"Add your ",Object(r.b)("strong",{parentName:"p"},"Dockerfile")," to the root folder of your project (",Object(r.b)("em",{parentName:"p"},"here is a Dockerfile for my NodeJS project"),")"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"FROM node:13-alpine\nRUN mkdir -p /usr/src/app\nWORKDIR /usr/src/app\nCOPY . .\nRUN npm install\nEXPOSE 3000\nCMD node ./bin/www\n\n")),Object(r.b)("p",null,"Commit and push your code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git add .qovery.yml Dockerfile\ngit commit -m "Add .qovery.yml and Dockerfile"\ngit push -u origin master\n')),Object(r.b)("p",null,"Congratulations, you have deployed your application."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery status --watch\n")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e3a8fab0d886981df6da99d_master%20nodejs.png",alt:"The master branch with its own environment, and a single NodeJS application"}))),Object(r.b)("h2",{id:"update-application"},"Update application"),Object(r.b)("p",null,"You just have modified your app and you want to deploy it? Well, it\u2019s straightforward, just ",Object(r.b)("strong",{parentName:"p"},"commit"),", ",Object(r.b)("strong",{parentName:"p"},"push")," and that\u2019s it!"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git commit -m "my updated code"\ngit push -u origin master\n')),Object(r.b)("h2",{id:"application-rollback"},"Application rollback"),Object(r.b)("p",null,"Oh! you miss something and you need to rollback to a previous version of your application? No worries, it's as simple as one command"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'qovery deploy list\nbranch  date          commit id                                 deployed\nmaster  5 hours ago   2cad27c442e8022677e91a2ad3eb585adc18126a  \u2713\nmaster  5 hours ago   418502a29706fae3fbec94df165cd0f025803ae7  \ud800\udd02\nmaster  21 hours ago  798303330c3789a7a5712350a4b04fa588705157  \ud800\udd02\nmaster  22 hours ago  503e1d942a3dc12093c485bd518d3b3f8803f76b  \ud800\udd02\nmaster  one day ago   c7ef8bdc8074ae18bbd42484e366d956ac3b0c72  \ud800\udd02\nmaster  one day ago   1eb5a515b41b1bce7dfa30bfdc698b7a8a2a9e94  \ud800\udd02\nmaster  2 days ago    d397cbe03be192e54a7233fd71e64728881430d4  \ud800\udd02\nmaster  2 days ago    2e71d7175a1f71bdec7ba29b2f6cb5143d199285  \ud800\udd02\nmaster  2 days ago    a219b603118c1c9cf065af8f2e8cf88506248de2  \ud800\udd02\n\nqovery deploy 418502a29706fae3fbec94df165cd0f025803ae7\ndeployment in progress...\nhint: type "qovery status --watch" to track the progression of deployment\n')),Object(r.b)("h2",{id:"staging-branch"},"Staging branch"),Object(r.b)("p",null,"Sometimes you want to validate your code in a staging environment before putting it in production. That\u2019s why we created the concept of \u201cEnvironment\u201d. Which is having isolated applications and services (databases, brokers, storage) for each branch. There is no risk to impact the production if something bad happens."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e3a8ff19368910953fb88a8_staging%20nodejs.png",alt:"A staging isolated environment"}))),Object(r.b)("p",null,"Having a staging environment is as easy as creating a new branch with the name \u201c",Object(r.b)("strong",{parentName:"p"},"staging"),"\u201d"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git checkout -b staging\ngit push -u origin staging\n")),Object(r.b)("p",null,"That\u2019s it!"),Object(r.b)("p",null,"And obviously, you can track the status of your deployment in real time"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery status --watch\n")),Object(r.b)("h2",{id:"feature-branch"},"Feature branch"),Object(r.b)("p",null,"Same as for the staging branch above, every branch that you create is per default an isolated environment. So just create your branch, and push your changes, a new isolated environment is live in a couple of seconds."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e3a9017d565b245b23b1aaf_feature%20nodejs.png",alt:"A feature isolated environment from the staging environment"}))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git checkout -b feat_x\ngit push -u origin feat_x\n\n# watch status of the feat_x deployment\nqovery status --watch\n")),Object(r.b)("h2",{id:"database-natively-supported"},"Database natively supported"),Object(r.b)("p",null,"Do you need a database? We support the most popular SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Elasticsearch, Redis, Memcached, Cassandra) databases. Thanks to AWS managed services for the reliability and the performances."),Object(r.b)("p",null,"Supporting a database is as simple as updating the ",Object(r.b)("strong",{parentName:"p"},".qovery.yml")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'application:\n  name: simple-example-node\n  project: simple-example-node\n  cloud_region: aws/eu-west-3\n  publicly_accessible: true\n# add this section\ndatabases:\n- type: postgresql\n  version: "11.5"\n  name: my-postgresql-db\n# end\nrouters:\n- name: main\n  routes:\n  - application_name: simple-example-node\n    paths:\n    - /*\n')),Object(r.b)("p",null,"To deploy the PostgreSQL database you need to commit and push the ",Object(r.b)("em",{parentName:"p"},".qovery.yml")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git add .qovery.yml\ngit commit -m "add postgresql database to the project"\ngit push -u origin master\n')),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e3a90dc8ec6e5488ac91d44_master%20node%20pql.png",alt:"The master environment now contains a PostgreSQL database"}))),Object(r.b)("h3",{id:"what-is-going-on-if-i-create-a-new-branch-with-a-database"},"What is going on if I create a new branch with a database?"),Object(r.b)("p",null,"The database and all its data are cloned as well.\nNote: If you don\u2019t want to clone the data, it is as well possible."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e3a91108c461071e0e775ad_feature%20node%20pql.png",alt:"Each branch have their own isolated environment (application + database)"}))),Object(r.b)("h2",{id:"multiple-applications-and-databases-in-one-project"},"Multiple applications and databases in one project"),Object(r.b)("p",null,"Let\u2019s imagine that you need to have a backend API and a frontend website that work together. These 2 apps belong to the same project. Meaning, they need to communicate with each other within the same environment. Obviously, this is natively possible with Qovery."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://uploads-ssl.webflow.com/5de176c0d41c9b4a1dbbb0aa/5e3a915f46ac5798fe3a2918_complete%20env.png",alt:"isolated environments with multiple applications (NodeJS + React) and multiple databases (PostgreSQL + Redis)"}))),Object(r.b)("p",null,"For instance:"),Object(r.b)("p",null,"Repository A is a backend API made with NodeJS -> connected to a PostgreSQL database and Redis key/value store"),Object(r.b)("p",null,"Repository B is a frontend made in React -> connected to the backend API"),Object(r.b)("p",null,"Project A ",Object(r.b)("strong",{parentName:"p"},".qovery.yml")," file"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'application:\n  name: backend-api\n  project: my-multi-apps-project\n  cloud_region: aws/eu-west-3\n  publicly_accessible: true\ndatabases:\n- type: postgresql\n  version: "11.5"\n  name: my-postgresql-db\n- type: redis\n  version: "5.0"\n  name: my-redis\nrouters:\n- name: api\n  routes:\n  - application_name: backend-api\n    paths:\n    - /*\n')),Object(r.b)("p",null,"Project B ",Object(r.b)("strong",{parentName:"p"},".qovery.yml")," file"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"application:\n  name: frontend\n  project: my-multi-apps-project\n  cloud_region: aws/eu-west-3\n  publicly_accessible: true\nrouters:\n- name: web\n  routes:\n  - application_name: frontend\n    paths:\n    - /*\n")),Object(r.b)("p",null,"You can note that they have the same \u201cproject\u201d name. This is the parameter to make them belong to the same project.\nOn the other side, routers have different properties to properly route the traffic according to their application."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"Qovery is the swiss army knife of all developers who want to deploy their application while staying focused on their code. No need to learn how to use AWS to deploy on it. Our goal is to provide the best developer experience ever."),Object(r.b)(i.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}u.isMDXComponent=!0},244:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},246:function(e,t,a){"use strict";var n=a(1),o=a(0),r=a.n(o),i=a(39),c=a(249),s=a(28),l=a.n(s);t.a=function(e){var t,a=e.to,s=e.href,p=a||s,b=Object(c.a)(p),u=Object(o.useRef)(!1),d=l.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,b]),p&&b?r.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(p),u.current=!0)},innerRef:function(e){var a,n;d&&e&&b&&(a=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:p})):r.a.createElement("a",Object(n.a)({},e,{href:p}))}},247:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return a?o.a.createElement(m,c({ref:t},l,{components:a})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},248:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(246),i=a(244),c=a.n(i);a(131);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,s=e.rightIcon,l=e.size,p=e.target,b=e.to,u=c()("jump-to","jump-to--"+l,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return p?o.a.createElement("a",{href:b,target:p,className:u},d):o.a.createElement(r.a,{to:b,className:u},d)}},249:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},251:function(e,t,a){var n=a(26).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},253:function(e,t,a){"use strict";a(255);var n=a(0),o=a.n(n),r=a(244),i=a.n(r);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:i()("feather","icon-"+(r||s))}),t)}},255:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(256)}),a(75)("fill")},256:function(e,t,a){"use strict";var n=a(27),o=a(77),r=a(24);e.exports=function(e){for(var t=n(this),a=r(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,a),s=i>2?arguments[2]:void 0,l=void 0===s?a:o(s,a);l>c;)t[c++]=e;return t}},262:function(e,t,a){"use strict";a(251);var n=a(0),o=a.n(n),r=a(253);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}}}]);