(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"C/zs":function(t,e,n){"use strict";n.r(e),n.d(e,"scopeCss",(function(){return j}));var r=n("mrSG"),s=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+s,"gim"),c=new RegExp("(-shadowcsscontext"+s,"gim"),a=new RegExp("(-shadowcssslotted"+s,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,l=/:host/gim,p=/::slotted/gim,f=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,v=function(t,e){var n=_(t),r=0;return n.escapedString.replace(m,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=n.blocks[r++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:o,content:c},h=e(u);return""+t[1]+h.selector+t[3]+i+h.content+a}))},_=function(t){for(var e=t.split(w),n=[],r=[],s=0,o=[],c=0;c<e.length;c++){var a=e[c];"}"===a&&s--,s>0?o.push(a):(o.length>0&&(r.push(o.join("")),n.push("%BLOCK%"),o=[]),n.push(a)),"{"===a&&s++}return o.length>0&&(r.push(o.join("")),n.push("%BLOCK%")),{escapedString:n.join(""),blocks:r}},b=function(t,e,n){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var r=t[2].split(","),s=[],o=0;o<r.length;o++){var c=r[o].trim();if(!c)break;s.push(n("-shadowcsshost-no-combinator",c,t[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},x=function(t,e,n){return t+e.replace("-shadowcsshost","")+n},O=function(t,e,n){return e.indexOf("-shadowcsshost")>-1?x(t,e,n):t+e+n+", "+e+" "+t+n},W=function(t,e,n,r,s){return v(t,(function(t){var s=t.selector,o=t.content;return"@"!==t.selector[0]?s=function(t,e,n,r){return t.split(",").map((function(t){return r&&t.indexOf("."+r)>-1?t.trim():function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)}(t,e)?function(t,e,n){for(var r,s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e[0]}))),o=function(t){var r=t.trim();if(!r)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)r=function(t,e,n){if(h.lastIndex=0,h.test(t)){var r="."+n;return t.replace(i,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,n,s){return e+r+n+s}))})).replace(h,r+" ")}return e+" "+t}(t,e,n);else{var o=t.replace(h,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(r=c[1]+s+c[2]+c[3])}}return r},c=function(t){var e=[],n=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,r){var s="__ph-"+n+"__";return e.push(r),n++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,r,s){var o="__ph-"+n+"__";return e.push(s),n++,r+o})),placeholders:e}}(t),a="",u=0,l=/( |>|\+|~(?!=))\s*/g,p=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(r=l.exec(t));){var f=r[1],d=t.slice(u,r.index).trim();a+=((p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?o(d):d)+" "+f+" ",u=l.lastIndex}var g,m=t.substring(u);return a+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?o(m):m,g=c.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,e){return g[+e]}))}(t,e,n).trim():t.trim()})).join(", ")}(t.selector,e,n,r):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=W(t.content,e,n,r)),{selector:s.replace(/\s{2,}/g," ").trim(),content:o}}))},j=function(t,e,n){var s=e+"-h",i=e+"-s",h=t.match(g)||[];t=function(t){return t.replace(d,"")}(t);var m=[];if(n){var w=function(t){var e="/*!@___"+m.length+"___*/";return m.push({placeholder:e,comment:"/*!@"+t.selector+"*/"}),t.selector=e+t.selector,t};t=v(t,(function(t){return"@"!==t.selector[0]?w(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=v(t.content,w),t):t}))}var _=function(t,e,n,r,s){return t=function(t){return u.reduce((function(t,e){return t.replace(e," ")}),t)}(t=function(t,e){return t.replace(a,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(t[2]){var r=t[2].trim(),s=t[3],o="."+e+" > "+r+s;return o}return"-shadowcsshost-no-combinator"+t[3]}))}(t=function(t){return b(t,c,O)}(t=function(t){return b(t,o,x)}(t=t.replace(f,"-shadowcsscontext").replace(l,"-shadowcsshost").replace(p,"-shadowcssslotted"))),r)),e&&(t=W(t,e,n,r)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+n)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()}(t,e,s,i);return t=Object(r.j)([_],h).join("\n"),n&&m.forEach((function(e){t=t.replace(e.placeholder,e.comment)})),t}}}]);