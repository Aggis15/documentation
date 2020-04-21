/*! For license information please see 40366c9d.5c2c510e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),c=(n(0),n(247)),o=n(248),i={last_modified_on:"2020-04-19",title:"Main Concepts",description:"Learn the main concepts behind Qovery",sidebar_label:"hidden",hide_pagination:!0},s={id:"main-concepts",title:"Main Concepts",description:"Learn the main concepts behind Qovery",source:"@site/docs/main-concepts.md",permalink:"/docs/main-concepts",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/main-concepts.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"What's next",permalink:"/docs/getting-started/whats-next"},next:{title:"Application",permalink:"/docs/main-concepts/Application"}},u=[],p={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This section will cover the main concepts behind Qovery:"),Object(c.b)(o.a,{to:"/docs/main-concepts/Application/",mdxType:"Jump"},"Application"),Object(c.b)(o.a,{to:"/docs/main-concepts/Environment/",mdxType:"Jump"},"Environment"),Object(c.b)(o.a,{to:"/docs/main-concepts/Project/",mdxType:"Jump"},"Project"))}l.isMDXComponent=!0},244:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},246:function(e,t,n){"use strict";var r=n(1),a=n(0),c=n.n(a),o=n(39),i=n(249),s=n(28),u=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,p=n||s,l=Object(i.a)(p),m=Object(a.useRef)(!1),f=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!f&&l&&window.docusaurus.prefetch(p),function(){f&&t&&t.disconnect()}}),[p,f,l]),p&&l?c.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(p),m.current=!0)},innerRef:function(e){var n,r;f&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):c.a.createElement("a",Object(r.a)({},e,{href:p}))}},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,d=l["".concat(o,".").concat(f)]||l[f]||m[f]||c;return n?a.a.createElement(d,i({ref:t},u,{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},248:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(246),o=n(244),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.className,r=e.badge,o=e.leftIcon,s=e.rightIcon,u=e.size,p=e.target,l=e.to,m=i()("jump-to","jump-to--"+u,n),f=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},o&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+o})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return p?a.a.createElement("a",{href:l,target:p,className:m},f):a.a.createElement(c.a,{to:l,className:m},f)}},249:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);