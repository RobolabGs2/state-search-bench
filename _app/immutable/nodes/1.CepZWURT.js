import{s as S,e as _,t as f,a as q,c as d,l as g,m as h,f as l,b as x,i as m,o as v,p as $,n as E,q as y}from"../chunks/scheduler.CNnarYU7.js";import{S as C,i as H}from"../chunks/index.D4A_hJtS.js";import{s as P}from"../chunks/entry.jAwds3H5.js";const j=()=>{const s=P;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return j().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=f(r),n=q(),i=_("p"),u=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=x(e),i=d(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return y(s,k,n=>r(0,o=n)),[o]}let F=class extends C{constructor(t){super(),H(this,t,z,w,S,{})}};export{F as component};
