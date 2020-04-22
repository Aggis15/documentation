/*! For license information please see 8d1c77c1.0815b584.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(256)),i=n(263),c={last_modified_on:"2020-04-21",title:"Integration",description:"Useful integrations to improve your Qovery workflow",sidebar_label:"hidden",hide_pagination:!0},s={id:"using-qovery/integration",title:"Integration",description:"Useful integrations to improve your Qovery workflow",source:"@site/docs/using-qovery/integration.md",permalink:"/docs/using-qovery/integration",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/integration.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Routing",permalink:"/docs/using-qovery/configuration/network/routing"},next:{title:"IDE Plugins",permalink:"/docs/using-qovery/integration/ide-plugins"}},u=[],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Qovery integrations are made to improve developers experience with Qovery and make their lives easier."),Object(a.b)("p",null,"This section shows several Qovery integrations. Some of them are maintained by the Qovery community and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/qovery"}),"open sourced"),"."),Object(a.b)(i.a,{to:"/docs/using-qovery/integration/ide-plugins/",mdxType:"Jump"},"Ide plugins"))}p.isMDXComponent=!0},255:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return n?o.a.createElement(d,c({ref:t},u,{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},257:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(39),c=n(264),s=n(28),u=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,l=n||s,p=Object(c.a)(l),f=Object(o.useRef)(!1),m=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(l),function(){m&&t&&t.disconnect()}}),[l,m,p]),l&&p?a.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var n,r;m&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):a.a.createElement("a",Object(r.a)({},e,{href:l}))}},263:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(257),i=n(255),c=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,p=e.to,f=c()("jump-to","jump-to--"+u,n),m=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?o.a.createElement("a",{href:p,target:l,className:f},m):o.a.createElement(a.a,{to:p,className:f},m)}},264:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);