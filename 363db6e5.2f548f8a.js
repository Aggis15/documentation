/*! For license information please see 363db6e5.2f548f8a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(9),o=(r(0),r(342)),i=r(341),c={last_modified_on:"2021-06-26",title:"Ambassador",description:"Be a community ambassador and get highly rewarded"},s={id:"community/reward/ambassador",title:"Ambassador",description:"Be a community ambassador and get highly rewarded",source:"@site/docs/community/reward/ambassador.md",permalink:"/docs/community/reward/ambassador",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/community/reward/ambassador.md",sidebar:"docs",previous:{title:"Write Content",permalink:"/docs/community/reward/write-content"},next:{title:"Security and Compliance",permalink:"/docs/security-and-compliance"}},l=[{value:"What is an ambassador?",id:"what-is-an-ambassador",children:[]},{value:"How to become an ambassador?",id:"how-to-become-an-ambassador",children:[]},{value:"What are the benefits?",id:"what-are-the-benefits",children:[]}],u={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"WORK IN PROGRESS - THIS DOCUMENTATION IS OUTDATED")),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"what-is-an-ambassador"},"What is an ambassador?"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"how-to-become-an-ambassador"},"How to become an ambassador?"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"what-are-the-benefits"},"What are the benefits?"),Object(o.b)("p",null,"TODO"))}d.isMDXComponent=!0},340:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},341:function(e,t,r){"use strict";r(344);var n=r(0),a=r.n(n),o=r(340),i=r.n(o);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.a.createElement("div",{className:i()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||s))}),t)}},342:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?a.a.createElement(b,c({ref:t},l,{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},344:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(348)}),r(75)("fill")},348:function(e,t,r){"use strict";var n=r(26),a=r(76),o=r(25);e.exports=function(e){for(var t=n(this),r=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,r),s=i>2?arguments[2]:void 0,l=void 0===s?r:a(s,r);l>c;)t[c++]=e;return t}}}]);