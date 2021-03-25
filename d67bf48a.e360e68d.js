/*! For license information please see d67bf48a.e360e68d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(336)),i=n(338),c=n(349),s={last_modified_on:"2021-03-25",title:"Domains",description:"Learn how to configure custom Domains on Qovery"},l={id:"using-qovery/configuration/domains",title:"Domains",description:"Learn how to configure custom Domains on Qovery",source:"@site/docs/using-qovery/configuration/domains.md",permalink:"/docs/using-qovery/configuration/domains",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/domains.md",sidebar:"docs",previous:{title:"Secrets",permalink:"/docs/using-qovery/configuration/secrets"},next:{title:"Storage",permalink:"/docs/using-qovery/configuration/storage"}},u=[{value:"Qovery Domains (default)",id:"qovery-domains-default",children:[]},{value:"Custom Domains",id:"custom-domains",children:[]}],m={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"qovery-domains-default"},"Qovery Domains (default)"),Object(o.b)("p",null,"Your application is publicly accessible via a Qovery domain as soon as you define it to be publicly accessible in ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-title=".qovery.yml"',metastring:"{4}","{4}":!0}),"application:\n  name: myapp\n  project: test\n  publicly_accessible: true\n")),Object(o.b)("p",null,"To get the domain that was assigned to your application, use the CLI:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ qovery status\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"BRANCHES NAME   STATUS          ENDPOINTS                       APPLICATIONS    DATABASES   BROKERS STORAGE\nmaster          up and running  https://xxx-main-gtw.qovery.io  1               1           0       0\n\nAPPLICATIONS NAME   STATUS          ENDPOINTS                       DATABASES   BROKERS STORAGE\nsimple-example      up and running  https://yyy-xxx-app.qovery.io   1           0       0\n")),Object(o.b)("h2",{id:"custom-domains"},"Custom Domains"),Object(o.b)("p",null,"You can use a custom domain name for any of your applications. Additionally, the domain name can be different in each environment (branch)."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Currently, if you want to have several domains on a same branch, it is not supported. The workaround is to have a second router.")),Object(o.b)("p",null,"Here is the overview of the process in order to give you the big picture. Each step is then totally detailed on the next sections."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a Qovery custom domain --\x3e To be done on Qovery"),Object(o.b)("li",{parentName:"ul"},"Retrieve Qovery validation domain  --\x3e To be done on Qovery"),Object(o.b)("li",{parentName:"ul"},"Create CNAME record on the DNS  --\x3e To be done on your DNS provider"),Object(o.b)("li",{parentName:"ul"},'Check verification status of the Qovery custom domain is "live" --\x3e To be done on Qovery side')),Object(o.b)("p",null,"So basically you do not have to make any complicated configuration on your end, Qovery handles almost everything, except for the CNAME record to create on your DNS provider."),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("h3",Object(r.a)({parentName:"li"},{id:"create-a-qovery-custom-domain"}),"Create a Qovery custom domain"),Object(o.b)("p",{parentName:"li"},"You will have to specify your custom domain in your qovery.yml file:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml" {4-6}',title:'".qovery.yml"',"{4-6}":!0}),"...\nrouters:\n- name: main\n  custom_domains:\n  - branch: master\n    domain: my.domain.tld\n  routes:\n  - application_name: simple-example-node-with-postgresql\n    paths:\n    - /\n")),Object(o.b)("p",{parentName:"li"},"Adding the highlighted lines like in the configuration file above exposes your application using your domain. Now commit and push your changes."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",{parentName:"li"},"Do not forget to commit and push your ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," changes to use your domain"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("h3",Object(r.a)({parentName:"li"},{id:"retrieve-qovery-validation-domain"}),"Retrieve Qovery validation domain"),Object(o.b)("p",{parentName:"li"},"In order to see the custom domain you just created, execute the command ",Object(o.b)("inlineCode",{parentName:"p"},"qovery domain list")," to list all domains of your ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environment"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="List domains"',title:'"List','domains"':!0}),"qovery domain list\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"BRANCH | DOMAIN                                      | STATUS             | VALIDATION DOMAIN    | ROUTER NAME\nmaster | my.domain.tld                               | validation pending | xxx-yyy-zzz.acme.com | main\nmaster | https://main-yenr7erjbs87dk4m-gtw.qovery.io | live               | none                 | my-second-router\n")),Object(o.b)("p",{parentName:"li"},'As you can see, your newly created domain is in status "validation pending".\nIn order for it to be live and be able to use it, you have to confirm that it is yours, and create a CNAME record on your DNS provider.\nFor this you will need the VALIDATION DOMAIN value, in our case: xxx-yyy-zzz.acme.com.')),Object(o.b)("li",{parentName:"ol"},Object(o.b)("h3",Object(r.a)({parentName:"li"},{id:"create-cname-record-on-the-dns"}),"Create CNAME record on the DNS"),Object(o.b)("p",{parentName:"li"},"Please go to your DNS provider interface and add a ",Object(o.b)("inlineCode",{parentName:"p"},"CNAME")," record that is targeting the ",Object(o.b)("inlineCode",{parentName:"p"},"VALIDATION DOMAIN")," - ",Object(o.b)("inlineCode",{parentName:"p"},"xxx-yyy-zzz.acme.com")," you just retrieved before.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("h3",Object(r.a)({parentName:"li"},{id:"check-verification-status-of-the-qovery-custom-domain"}),"Check verification status of the Qovery custom domain"),Object(o.b)("p",{parentName:"li"},"After you added the CNAME record on your DNS, it takes Qovery a few minutes to verify and complete the process.\nIn order to know if your custom domain is live or not, you  can check the verification status using ",Object(o.b)("inlineCode",{parentName:"p"},"qovery domain list"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="List domains"',title:'"List','domains"':!0}),"qovery domain list\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-plain",metastring:'title="OUTPUT"',title:'"OUTPUT"'}),"BRANCH | DOMAIN                                      | STATUS             | VALIDATION DOMAIN    | ROUTER NAME\nmaster | my.domain.tld                               | live               | xxx-yyy-zzz.acme.com | main\nmaster | https://main-yenr7erjbs87dk4m-gtw.qovery.io | live               | none                 | my-second-router\n")),Object(o.b)("p",{parentName:"li"},"If the status is live, then you are all set!"),Object(o.b)("p",{parentName:"li"},'Please note that from the Web UI you can find the custom domains associated to your app by going to the Summary tab of the concerned application page.\nThey will be listed in the "Custom domains" section:'),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/application-custom-domains.png",alt:"Custom domains list"}))))))}p.isMDXComponent=!0},335:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},336:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},338:function(e,t,n){"use strict";n(342);var r=n(0),a=n.n(r),o=n(335),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||s))}),t)}},342:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(345)}),n(75)("fill")},345:function(e,t,n){"use strict";var r=n(27),a=n(76),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,l=void 0===s?n:a(s,n);l>c;)t[c++]=e;return t}},346:function(e,t,n){"use strict";var r=n(351),a=n(53);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},349:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(335),n(346)),i=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(s),u=Object(r.useState)(null),m=u[0],p=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!m&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==m&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},351:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);