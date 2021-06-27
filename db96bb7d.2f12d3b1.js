/*! For license information please see db96bb7d.2f12d3b1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{315:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(342)),i=n(341),l={last_modified_on:"2021-06-26",title:"Deployment Rule",description:"Learn how to configure the lifecycle of your Environments"},c={id:"using-qovery/configuration/deployment-rule",title:"Deployment Rule",description:"Learn how to configure the lifecycle of your Environments",source:"@site/docs/using-qovery/configuration/deployment-rule.md",permalink:"/docs/using-qovery/configuration/deployment-rule",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/deployment-rule.md",sidebar:"docs",previous:{title:"Object Storage",permalink:"/docs/using-qovery/configuration/object-storage"},next:{title:"Cloud Service Provider",permalink:"/docs/using-qovery/configuration/cloud-service-provider"}},u=[{value:"Environment lifecycle",id:"environment-lifecycle",children:[{value:"Start",id:"start",children:[]},{value:"Shutdown",id:"shutdown",children:[]}]},{value:"Why using Deployment Rule?",id:"why-using-deployment-rule",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Branch",id:"branch",children:[]},{value:"Build platform",id:"build-platform",children:[]},{value:"Container registry",id:"container-registry",children:[]},{value:"Environment mode",id:"environment-mode",children:[]},{value:"Cluster",id:"cluster",children:[]},{value:"Monitoring",id:"monitoring",children:[]},{value:"TTL (Time to Live)",id:"ttl-time-to-live",children:[]},{value:"Startup cron",id:"startup-cron",children:[]},{value:"Shutdown cron",id:"shutdown-cron",children:[]},{value:"Manual deployment",id:"manual-deployment",children:[]}]}],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"WORK IN PROGRESS - THIS DOCUMENTATION IS OUTDATED")),Object(o.b)("p",null,"A ",Object(o.b)("strong",{parentName:"p"},"Deployment Rule")," lets you configure the lifecycle of your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environments"),"."),Object(o.b)("h2",{id:"environment-lifecycle"},"Environment lifecycle"),Object(o.b)("h3",{id:"start"},"Start"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"shutdown"},"Shutdown"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"why-using-deployment-rule"},"Why using Deployment Rule?"),Object(o.b)("p",null,"Using the Deployment Rules is a good practice to drastically ",Object(o.b)("strong",{parentName:"p"},"reduce your cost"),". Indeed, Qovery knows how to optimize your Cloud resources\nwhen your applications are not running. Then you can expect to reduce your Cloud cost up to 60% by using the Deployment Rules."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Here is an exhaustive list of available policies options:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"option"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"mandatory"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#branch"}),"branch")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"branch name predicate; can be a list of branches and * is allowed"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#build-platform"}),"build platform")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"build platform to use to build and test the apps from the the environment"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#container-registry"}),"container registry")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"once build, the container image must be pushed into a container registry"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#environment-mode"}),"environment mode")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'what is the mode of the environment ("development" or "production"). This choice affect the kind of resources provisioned'),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#cluster"}),"cluster")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"on which cloud provider and cluster to run the environment"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#monitoring"}),"monitoring")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"what is the monitoring platform to use"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#ttl-time-to-live"}),"TTL (Time To Live)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"set how long the environment can live at maximum"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#startup-cron"}),"startup cron")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"set when an environment must be started"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#shutdown-cron"}),"shutdown cron")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"set when an environment must be shutdown"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/using-qovery/configuration/deployment-rule/#manual-deployment"}),"manual deployment")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"environment has to be manually started"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"no")))),Object(o.b)("p",null,"Those options bring you the ability to compose your deployment flow depending on your business, economic and legal criteria."),Object(o.b)("h3",{id:"branch"},"Branch"),Object(o.b)("p",null,"What is the branch name that must match to apply this deployment rule."),Object(o.b)("p",null,"Examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"master"),": if the branch name is ",Object(o.b)("inlineCode",{parentName:"li"},"master")," then match the deployment rule."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"main"),": if the branch name is ",Object(o.b)("inlineCode",{parentName:"li"},"main")," then match the deployment rule."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dev/*"),": if the branch name starts with ",Object(o.b)("inlineCode",{parentName:"li"},"dev/")," then match the deployment rule (eg. dev/123 , dev/chat)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"feat/*"),": if the branch name starts with ",Object(o.b)("inlineCode",{parentName:"li"},"feat/")," then match the deployment rule (eg. feat/123 , feat/billing)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"*"),": any branch match the deployment rule.")),Object(o.b)("p",null,"One or more branch name per deployment rule can be specified."),Object(o.b)("h3",{id:"build-platform"},"Build platform"),Object(o.b)("p",null,"Which ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/deployment-rule/#build-platform"}),"Build Platform")," do you choose to build and test your apps matching\nthe deployment rule."),Object(o.b)("p",null,"Do you have a CI?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you do, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/deployment-rule/#build-platform"}),"see if Qovery supports your CI"),"."),Object(o.b)("li",{parentName:"ul"},"If you do not, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/using-qovery/addon/continuous-integration/qovery-ci/"}),"Qovery provides a CI of the box")," (default).")),Object(o.b)("h3",{id:"container-registry"},"Container registry"),Object(o.b)("p",null,"In which ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/deployment-rule/#container-registry"}),"Container Registry")," the final container image must be pushed?\nYou can choose the one you want ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/addon/container-registry/"}),"from this list"),". By selecting the one provided by your Cloud\nprovider, you avoid paying for outgoing traffic."),Object(o.b)("h3",{id:"environment-mode"},"Environment mode"),Object(o.b)("p",null,"Choose between ",Object(o.b)("inlineCode",{parentName:"p"},"Production")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Development")," environment mode."),Object(o.b)("h4",{id:"production-mode"},"Production mode"),Object(o.b)("p",null,"A production environment is where the app is configured to be highly performant, and the database highly resilient."),Object(o.b)("p",null,"E.g., If you run a NodeJS app and a PostgreSQL database in production mode:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"3 NodeJS app instances run at minimum and auto-scale according to the CPU and the RAM usage."),Object(o.b)("li",{parentName:"ul"},"for PostgreSQL, a managed database is used to provide the best performance and maximize the availability.")),Object(o.b)("p",null,"However, running in production cost much more than running in development mode."),Object(o.b)("h4",{id:"development-mode"},"Development mode"),Object(o.b)("p",null,"A development environment is where the app, and the database are configured to be cost effective."),Object(o.b)("p",null,"E.g., If you run a NodeJS app and a PostgreSQL database in development mode:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"1 NodeJS app instance run with the minimum CPU and RAM to avoid wasted resources."),Object(o.b)("li",{parentName:"ul"},"for PostgreSQL, a containerized database with local storage to lower the cost at the price of a standard app.")),Object(o.b)("p",null,"However, running in production cost much more than running in development mode."),Object(o.b)("h3",{id:"cluster"},"Cluster"),Object(o.b)("p",null,"In which Cluster your apps must run. If you have multiple clusters across different Cloud provider and regions, you can select the more\nappropriate. For instance, this is common to separate the production from the development applications."),Object(o.b)("p",null,"Go into ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/"}),"Cloud Service Provider")," to configure your clusters."),Object(o.b)("h3",{id:"monitoring"},"Monitoring"),Object(o.b)("p",null,"Qovery allows you to add an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/addon/monitoring/"}),"external monitoring solution")," such as Datadog or Newrelic on the\nenvironment that match the deployment rule. This makes it possible to monitor only what is strictly necessary."),Object(o.b)("h3",{id:"ttl-time-to-live"},"TTL (Time to Live)"),Object(o.b)("p",null,"The Time to Live (TTL) option delete or pause an environment after some time automatically. The minimum value is 1 minute. For instance, you\ncan automatically delete an environment after 2 hours of run if no git event happens in the meantime. This option helps to reduce Cloud\ncost."),Object(o.b)("h3",{id:"startup-cron"},"Startup cron"),Object(o.b)("p",null,"This option wake up an environment at the specific date and time and can be repetitive. For instance, you can automatically start an\nenvironment from Monday to Friday at 8am PST. This option helps to reduce Cloud cost."),Object(o.b)("h3",{id:"shutdown-cron"},"Shutdown cron"),Object(o.b)("p",null,"This option shutdown an environment at the specific date and time and can be repetitive. For instance, you can automatically shutdown an\nenvironment from Monday to Friday at 7pm PST. This option helps to reduce Cloud cost."),Object(o.b)("h3",{id:"manual-deployment"},"Manual deployment"),Object(o.b)("p",null,"This option indicates if you prefer to manually start an environment or not."))}d.isMDXComponent=!0},340:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},341:function(e,t,n){"use strict";n(344);var a=n(0),r=n.n(a),o=n(340),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||c))}),t)}},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,s=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.a.createElement(s,l({ref:t},u,{components:n})):r.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},344:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(348)}),n(75)("fill")},348:function(e,t,n){"use strict";var a=n(26),r=n(76),o=n(25);e.exports=function(e){for(var t=a(this),n=o(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,u=void 0===c?n:r(c,n);u>l;)t[l++]=e;return t}}}]);