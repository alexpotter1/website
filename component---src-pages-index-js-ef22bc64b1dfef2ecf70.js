(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5,6,11,13,14],{"/3Zf":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("BmFx"),i=n.n(l);t.default=function(){return a.a.createElement("a",{className:"cv-link",href:i.a,download:!0},"Download CV")}},"0EVK":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=n("TGva"),c=n("wd/R"),o=n.n(c),u=function(e){var t=e.name,n=e.publisher,r=e.releaseDate,c=e.url,u=e.summary;return Object(l.a)(t)||Object(l.a)(n)?null:a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("div",{className:"spaced-list"},a.a.createElement("h4",null,t),Object(l.a)(r)?null:a.a.createElement("time",{dateTime:r},o()(r).format(i.a))),a.a.createElement("div",{className:"spaced-list"},Object(l.a)(n)?null:a.a.createElement("span",null,"Published by ",a.a.createElement("strong",null,n)),Object(l.a)(c)?null:a.a.createElement("a",{href:c},c))),Object(l.a)(u)?null:u)};t.default=function(e){var t=e.publications;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"publications"},a.a.createElement("h3",null,"Publications"),a.a.createElement("div",{className:"stack"},t.map((function(e){return a.a.createElement(u,Object.assign({key:e.releaseDate},e))}))))}},"1KCs":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=n("TGva"),c=n("wd/R"),o=n.n(c),u=function(e){var t=e.name,n=e.icon,r=e.startDate,c=e.endDate,u=e.position,f=e.url,m=e.summary,d=e.highlights;return Object(l.a)(t)||Object(l.a)(u)?null:a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("div",{className:"spaced-list"},a.a.createElement("div",{className:"institution-container"},Object(l.a)(n)?null:a.a.createElement("img",{src:n,alt:"institution icon"}),a.a.createElement("h4",null,t)),a.a.createElement("span",null,a.a.createElement("time",{dateTime:r},o()(r).format(i.a))," -",Object(l.a)(c)?" Present":a.a.createElement("time",{dateTime:c}," "+o()(c).format(i.a)))),a.a.createElement("div",{className:"spaced-list"},a.a.createElement("strong",null,u),Object(l.a)(f)?null:a.a.createElement("a",{href:f},f)),Object(l.a)(m)?null:m),a.a.createElement(s,{highlights:d}))},s=function(e){var t=e.highlights;return 0===t.length?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",null,"Highlights"),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",null,e)}))))};t.default=function(e){var t=e.volunteer;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"volunteer"},a.a.createElement("h3",null,"Volunteer"),a.a.createElement("div",{className:"stack"},t.map((function(e){return a.a.createElement(u,Object.assign({key:e.name},e))}))))}},"4irz":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=function(e){var t=e.text,n=e.value;return a.a.createElement("div",null,a.a.createElement("h4",null,t),n)},c=function(e){var t=e.text,n=e.value,r=e.isEmail;return a.a.createElement("div",null,a.a.createElement("h4",null,t),a.a.createElement("a",{href:r?"mailto:"+n:n},n))};t.default=function(e){var t,n,r=e.email,o=e.phone,u=e.website,s=null;return Object(l.a)(r)||(t=a.a.createElement(c,{text:"Email",value:r,isEmail:!0})),Object(l.a)(o)||(n=a.a.createElement(i,{text:"Phone",value:o})),Object(l.a)(u)||(s=a.a.createElement(c,{text:"Website",value:u,isEmail:!1})),null===t&&null===n&&null===s?null:a.a.createElement("section",{id:"contact"},a.a.createElement("h3",null,"Contact"),a.a.createElement("div",{className:"grid-list"},t,n,s))}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),l=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var o,u=[];function s(){o=e(u.map((function(e){return e.props}))),f.canUseDOM?t(o):n&&(o=n(o))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return o},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=o;return o=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return l.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},BmFx:function(e,t,n){e.exports=n.p+"static/resume-92397b1b026bd2c236f77ea6736b5381.pdf"},"I2+H":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=function(e){var t=e.name,n=e.keywords;return Object(l.a)(t)||Object(l.a)(n)?null:a.a.createElement("div",null,a.a.createElement("h4",null,t),n.length>0?a.a.createElement("ul",{className:"tag-list"},n.map((function(e){return a.a.createElement("li",{key:e},e)}))):null)};t.default=function(e){var t=e.skills;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"skills"},a.a.createElement("h3",null,"Skills"),a.a.createElement("div",{className:"grid-list"},t.map((function(e){return a.a.createElement(i,Object.assign({key:e.name},e))}))))}},IJih:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=function(e){var t=e.name,n=e.keywords;return Object(l.a)(t)||Object(l.a)(n)?null:a.a.createElement("div",null,a.a.createElement("h4",null,t),n.length>0?a.a.createElement("ul",{className:"tag-list"},n.map((function(e){return a.a.createElement("li",{key:e},e)}))):null)};t.default=function(e){var t=e.interests;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"interests"},a.a.createElement("h3",null,"Interests"),a.a.createElement("div",{className:"grid-list"},t.map((function(e){return a.a.createElement(i,Object.assign({key:e.name},e))}))))}},IRsI:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=n("/3Zf"),c=function(e){var t=e.name,n=e.label;return Object(l.a)(t)||Object(l.a)(n)?null:a.a.createElement("div",{className:"me"},a.a.createElement("h1",null,t),a.a.createElement("h2",null,n))},o=function(e){var t=e.image_url;return Object(l.a)(t)?null:a.a.createElement("div",{className:"me-photo"},a.a.createElement("img",{className:"photo",src:t,alt:"profile"}))};t.default=function(e){return a.a.createElement("header",{className:"masthead"},a.a.createElement(c,e),a.a.createElement(o,{image_url:e.image}),a.a.createElement(i.default,null))}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("qhky"),i=n("IRsI"),c=n("u1/G"),o=n("4irz"),u=n("ffKS"),s=n("lZa2"),f=n("1KCs"),m=n("t5UN"),d=n("0EVK"),p=n("I2+H"),h=n("eXmO"),E=n("IJih");t.default=function(e){var t=e.data.cvJson;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,null,a.a.createElement("meta",{charset:"utf-8"}),a.a.createElement("meta",{name:"description",content:"{{resume.basics.summary}}"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("title",null,t.basics.name),a.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato:400,700"})),a.a.createElement("div",{className:"resume-container"},a.a.createElement(i.default,t.basics),a.a.createElement(c.default,{summary:t.basics.summary}),a.a.createElement(o.default,{email:t.basics.email,phone:t.basics.phone,website:t.basics.website}),a.a.createElement(u.default,{profiles:t.basics.profiles}),a.a.createElement(m.default,{education:t.education}),a.a.createElement(s.default,{work:t.work}),a.a.createElement(f.default,{volunteer:t.volunteer}),a.a.createElement(d.default,{publications:t.publications}),a.a.createElement(p.default,{skills:t.skills}),a.a.createElement(h.default,{languages:t.languages}),a.a.createElement(E.default,{interests:t.interests})))}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,l="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,o,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(o=c;0!=o--;)if(!e(t[o],i[o]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(o=s.next()).done;)if(!i.has(o.value[0]))return!1;for(s=t.entries();!(o=s.next()).done;)if(!e(o.value[1],i.get(o.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(o=s.next()).done;)if(!i.has(o.value[0]))return!1;return!0}if(l&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(o=c;0!=o--;)if(t[o]!==i[o])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(o=c;0!=o--;)if(!Object.prototype.hasOwnProperty.call(i,u[o]))return!1;if(n&&t instanceof Element)return!1;for(o=c;0!=o--;)if(("_owner"!==u[o]&&"__v"!==u[o]&&"__o"!==u[o]||!t.$$typeof)&&!e(t[u[o]],i[u[o]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},eXmO:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=function(e){var t=e.language,n=e.fluency;return Object(l.a)(t)?null:a.a.createElement("div",null,a.a.createElement("h4",null,t),Object(l.a)(n)?null:n)};t.default=function(e){var t=e.languages;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"languages"},a.a.createElement("h3",null,"Languages"),a.a.createElement("div",{className:"grid-list"},t.map((function(e){return a.a.createElement(i,Object.assign({key:e.language},e))}))))}},ffKS:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=function(e){var t=e.network,n=e.username,r=e.url,i=e.icon,c=!Object(l.a)(n),o=!Object(l.a)(r),u=!Object(l.a)(i);return Object(l.a)(t)?null:a.a.createElement("div",{className:"profileItem"},u?a.a.createElement("img",{className:"profileIcon",src:i,alt:"profile icon"}):a.a.createElement("h4",null,t),o&&c?a.a.createElement("a",{href:r},n):c?{username:n}:o?a.a.createElement("a",{href:r},r):null)};t.default=function(e){var t=e.profiles;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"profiles"},a.a.createElement("h3",null,"Profiles"),a.a.createElement("div",{className:"grid-list"},t.map((function(e){return a.a.createElement(i,{key:e.network,network:e.network,username:e.username,url:e.url,icon:e.icon})}))))}},lZa2:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=n("TGva"),c=n("wd/R"),o=n.n(c),u=function(e){var t=e.company,n=e.icon,r=e.startDate,c=e.endDate,u=e.position,f=e.website,m=e.summary,d=e.highlights;return Object(l.a)(t)||Object(l.a)(u)?null:a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("div",{className:"spaced-list"},a.a.createElement("div",{className:"institution-container"},Object(l.a)(n)?null:a.a.createElement("img",{src:n,alt:"institution icon"}),a.a.createElement("h4",null,t)),a.a.createElement("span",null,a.a.createElement("time",{dateTime:r},o()(r).format(i.a))," -",Object(l.a)(c)?" Present":a.a.createElement("time",{dateTime:c}," "+o()(c).format(i.a)))),a.a.createElement("div",{className:"spaced-list"},a.a.createElement("strong",null,u),Object(l.a)(f)?null:a.a.createElement("a",{href:f},f)),Object(l.a)(m)?null:m),a.a.createElement(s,{highlights:d}))},s=function(e){var t=e.highlights;return 0===t.length?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",null,"Highlights"),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},e)}))))};t.default=function(e){var t=e.work;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"work"},a.a.createElement("h3",null,"Work"),a.a.createElement("div",{className:"stack"},t.map((function(e){return a.a.createElement(u,Object.assign({key:e.name},e))}))))}},qhky:function(e,t,n){"use strict";(function(e){n("E9XD");var r,a,l,i,c=n("17x9"),o=n.n(c),u=n("8+s/"),s=n.n(u),f=n("bmMU"),m=n.n(f),d=n("q1tI"),p=n.n(d),h=n("YVoz"),E=n.n(h),v="bodyAttributes",b="htmlAttributes",y="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),O="cssText",w="href",j="http-equiv",k="innerHTML",A="itemprop",C="name",S="property",I="rel",N="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",q="defer",B="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",D=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),_=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=$(e,g.TITLE),n=$(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},J=function(e){return $(e,M)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a].toLowerCase();if(-1!==e.indexOf(l)&&n[l])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,l=Object.keys(e),i=0;i<l.length;i++){var c=l[i],o=c.toLowerCase();-1===t.indexOf(o)||n===I&&"canonical"===e[n].toLowerCase()||o===I&&"stylesheet"===e[o].toLowerCase()||(n=o),-1===t.indexOf(c)||c!==k&&c!==O&&c!==A||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(a),i=0;i<l.length;i++){var c=l[i],o=E()({},r[c],a[c]);r[c]=o}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,le=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,o=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,m=e.titleAttributes;oe(g.BODY,r),oe(g.HTML,a),ce(f,m);var d={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,l),metaTags:ue(g.META,i),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,s)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),o(e,p,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),oe(g.TITLE,t)},oe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],l=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var o=i[c],u=t[o]||"";n.getAttribute(o)!==u&&n.setAttribute(o,u),-1===a.indexOf(o)&&a.push(o);var s=l.indexOf(o);-1!==s&&l.splice(s,1)}for(var f=l.length-1;f>=0;f--)n.removeAttribute(l[f]);a.length===l.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),l=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):l.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:l}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[p.a.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),l=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(l,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===k||n===O){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===k||e===O)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),l=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+l+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,i=e.metaTags,c=e.noscriptTags,o=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,m=e.titleAttributes;return{base:me(g.BASE,t,r),bodyAttributes:me(v,n,r),htmlAttributes:me(b,a,r),link:me(g.LINK,l,r),meta:me(g.META,i,r),noscript:me(g.NOSCRIPT,c,r),script:me(g.SCRIPT,o,r),style:me(g.STYLE,u,r),title:me(g.TITLE,{title:f,titleAttributes:m},r)}},pe=s()((function(e){return{baseTag:X([w,P],e),bodyAttributes:W(v,e),defer:$(e,q),encode:$(e,B),htmlAttributes:W(b,e),linkTags:Z(g.LINK,[I,w],e),metaTags:Z(g.META,[C,T,j,S,A],e),noscriptTags:Z(g.NOSCRIPT,[k],e),onChangeClientState:J(e),scriptTags:Z(g.SCRIPT,[N,k],e),styleTags:Z(g.STYLE,[O],e),title:G(e),titleAttributes:W(y,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){le(e,(function(){ae=null}))})):(le(e),ae=null)}),de)((function(){return null})),he=(a=pe,i=l=function(e){function t(){return F(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return K({},r,((t={})[n.type]=[].concat(r[n.type]||[],[K({},a,this.mapNestedChildrenToProps(n,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return K({},a,((t={})[r.type]=i,t.titleAttributes=K({},l),t));case g.BODY:return K({},a,{bodyAttributes:K({},l)});case g.HTML:return K({},a,{htmlAttributes:K({},l)})}return K({},a,((n={})[r.type]=K({},l),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=K({},t);return Object.keys(e).forEach((function(t){var r;n=K({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,l),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=K({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),l.propTypes={base:o.a.object,bodyAttributes:o.a.object,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),defaultTitle:o.a.string,defer:o.a.bool,encodeSpecialCharacters:o.a.bool,htmlAttributes:o.a.object,link:o.a.arrayOf(o.a.object),meta:o.a.arrayOf(o.a.object),noscript:o.a.arrayOf(o.a.object),onChangeClientState:o.a.func,script:o.a.arrayOf(o.a.object),style:o.a.arrayOf(o.a.object),title:o.a.string,titleAttributes:o.a.object,titleTemplate:o.a.string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=a.peek,l.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.a=he}).call(this,n("yLpj"))},t5UN:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk"),i=n("TGva"),c=n("wd/R"),o=n.n(c),u=function(e){var t=e.institution,n=e.icon,r=e.startDate,c=e.endDate,u=e.title,f=e.website,m=e.studyType,d=e.score,p=e.courses;return Object(l.a)(t)||Object(l.a)(u)?null:a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("div",{className:"spaced-list"},a.a.createElement("div",{className:"institution-container"},Object(l.a)(n)?null:a.a.createElement("img",{src:n,alt:"institution icon"}),a.a.createElement("h4",null,t)),a.a.createElement("span",null,a.a.createElement("time",{dateTime:r},o()(r).format(i.a))," -",Object(l.a)(c)?" Present":a.a.createElement("time",{dateTime:c}," "+o()(c).format(i.a)))),a.a.createElement("div",{className:"spaced-list"},a.a.createElement("h5",null,u),Object(l.a)(f)?null:a.a.createElement("a",{href:f},f)),a.a.createElement("div",{className:"spaced-list"},a.a.createElement("h6",null,Object(l.a)(m)?null:m),Object(l.a)(d)?null:a.a.createElement("strong",null,d))),a.a.createElement(s,{courses:p}))},s=function(e){var t=e.courses;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("h5",null,"Courses"),a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},e)}))))};t.default=function(e){var t=e.education;return 0===(null==t?void 0:t.length)||void 0===(null==t?void 0:t.length)?null:a.a.createElement("section",{id:"education"},a.a.createElement("h3",null,"Education"),a.a.createElement("div",{className:"stack"},t.map((function(e){return a.a.createElement(u,Object.assign({key:e.startDate},e))}))))}},"u1/G":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("f4Bk");t.default=function(e){var t=e.summary;return Object(l.a)(t)?null:a.a.createElement("section",{id:"about"},a.a.createElement("h3",null,"About"),a.a.createElement("article",null,t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ef22bc64b1dfef2ecf70.js.map