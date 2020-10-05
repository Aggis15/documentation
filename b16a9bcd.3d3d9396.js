/*! For license information please see b16a9bcd.3d3d9396.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{263:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return O}));var n=a(1),r=a(9),c=(a(0),a(329)),b=a(331),l=a(336),i={last_modified_on:"2020-10-05",title:"Amazon Web Services (AWS)",description:"Learn how to configure and plug your Amazon Web Services (AWS) account"},o={id:"using-qovery/configuration/business/cloud-account/amazon-web-services",title:"Amazon Web Services (AWS)",description:"Learn how to configure and plug your Amazon Web Services (AWS) account",source:"@site/docs/using-qovery/configuration/business/cloud-account/amazon-web-services.md",permalink:"/docs/using-qovery/configuration/business/cloud-account/amazon-web-services",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/business/cloud-account/amazon-web-services.md",sidebar:"docs",previous:{title:"Cloud Account",permalink:"/docs/using-qovery/configuration/business/cloud-account"},next:{title:"Azure",permalink:"/docs/using-qovery/configuration/business/cloud-account/azure"}},u=[{value:"Getting started",id:"getting-started",children:[{value:"Link your AWS account",id:"link-your-aws-account",children:[]},{value:"Remove your AWS account",id:"remove-your-aws-account",children:[]}]},{value:"Best practices",id:"best-practices",children:[]},{value:"Regions",id:"regions",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"FAQ",id:"faq",children:[{value:"How to choose a region?",id:"how-to-choose-a-region",children:[]},{value:"I don&#39;t find a region that is provided by AWS",id:"i-dont-find-a-region-that-is-provided-by-aws",children:[]},{value:"Migrate between Cloud providers and regions",id:"migrate-between-cloud-providers-and-regions",children:[]}]}],s={rightToc:u};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Qovery lets you quickly deploy applications to your ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com"}),"Amazon Web Services (AWS)")," account. No knowledge is needed, and it takes less than 20 minutes to install Qovery on your AWS account."),Object(c.b)(b.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"Do you want to know more about how Qovery works on your AWS account? ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/useful-links/faq/#how-qovery-works-under-the-hood"}),"Here")," is explained how Qovery works under the hood.")),Object(c.b)("h2",{id:"getting-started"},"Getting started"),Object(c.b)(l.a,{mdxType:"Assumptions"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"You have a ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/interface/"}),"Qovery")," account"),Object(c.b)("li",{parentName:"ul"},"You have created an ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/business/organization/"}),"Organization")))),Object(c.b)("h3",{id:"link-your-aws-account"},"Link your AWS account"),Object(c.b)("p",null,"TODO"),Object(c.b)("h4",{id:"required-iam-permissions"},"Required IAM permissions"),Object(c.b)("p",null,"Qovery required IAM permissions to work. Get the list of permissions ",Object(c.b)("a",{href:"/files/qovery-iam-aws.json"},"here"),"."),Object(c.b)("h3",{id:"remove-your-aws-account"},"Remove your AWS account"),Object(c.b)("p",null,"TODO"),Object(c.b)("h2",{id:"best-practices"},"Best practices"),Object(c.b)("p",null,"TODO"),Object(c.b)("h2",{id:"regions"},"Regions"),Object(c.b)("p",null,"Qovery supports the following AWS regions:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"supported"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-west-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US West (Oregon)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-east-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US East (Ohio)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-east-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US East (N. Virginia)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-west-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US West (N. California)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddff\ud83c\udde6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/af-south-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Africa (Cape Town)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udded\ud83c\uddf0"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-east-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Hong Kong)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddf3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-south-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Mumbai)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddef\ud83c\uddf5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Tokyo)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf0\ud83c\uddf7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Seoul)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddef\ud83c\uddf5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Osaka)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf8\ud83c\uddec"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-southeast-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Singapore)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde6\ud83c\uddfa"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-southeast-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Sydney)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde8\ud83c\udde6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ca-central-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Canada (Central)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde9\ud83c\uddea"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-central-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Frankfurt)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddea"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Ireland)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (London)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddeb\ud83c\uddf7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Paris)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddf9"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-south-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Milan)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf8\ud83c\uddea"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-north-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Stockholm)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde7\ud83c\udded"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/me-south-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Middle East (Bahrain)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde7\ud83c\uddf7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/sa-east-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"South America (S\xe3o Paulo)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(c.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(c.b)("p",null,"TODO"),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"how-to-choose-a-region"},"How to choose a region?"),Object(c.b)("p",null,"Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency."),Object(c.b)("h3",{id:"i-dont-find-a-region-that-is-provided-by-aws"},"I don't find a region that is provided by AWS"),Object(c.b)("p",null,"We are probably testing the support of this region, please ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"contact us")," to know what's the status"),Object(c.b)("h3",{id:"migrate-between-cloud-providers-and-regions"},"Migrate between Cloud providers and regions"),Object(c.b)("p",null,"Today, you can't migrate an environment from one region to another after it has been created. Vote ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"here")," if you need this feature."))}O.isMDXComponent=!0},328:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var b=r.apply(null,n);b&&e.push(b)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=u(a),p=n,d=s["".concat(b,".").concat(p)]||s[p]||O[p]||c;return a?r.a.createElement(d,l({ref:t},o,{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},331:function(e,t,a){"use strict";a(335);var n=a(0),r=a.n(n),c=a(328),b=a.n(c);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,c=e.icon,l=e.type,i=null;switch(l){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return r.a.createElement("div",{className:b()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==c}),role:"alert"},!1!==c&&r.a.createElement("i",{className:b()("feather","icon-"+(c||i))}),t)}},334:function(e,t,a){var n=a(24).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},335:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(339)}),a(75)("fill")},336:function(e,t,a){"use strict";a(334);var n=a(0),r=a.n(n),c=a(331);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(c.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},339:function(e,t,a){"use strict";var n=a(27),r=a(76),c=a(26);e.exports=function(e){for(var t=n(this),a=c(t.length),b=arguments.length,l=r(b>1?arguments[1]:void 0,a),i=b>2?arguments[2]:void 0,o=void 0===i?a:r(i,a);o>l;)t[l++]=e;return t}}}]);