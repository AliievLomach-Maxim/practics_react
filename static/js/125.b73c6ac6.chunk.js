"use strict";(self.webpackChunkpractices_react=self.webpackChunkpractices_react||[]).push([[125],{9125:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(4165),c=e(5861),u=e(9439),s=e(2791),a=e(7689),i=e(5218),o=e(2482),f=e(9434),l=e(3101),d=function(n){return n.comments},p=e(4768),h=e(184),v=function(n){var t=n.post,e=t._id,a=t.title,i=t.body,o=(0,f.v9)(l.a).profile,v=(0,f.v9)(d).comments,m=(0,s.useState)(null),x=(0,u.Z)(m,2),j=x[0],b=x[1];(0,s.useEffect)((function(){var n;(null===v||void 0===v||null===(n=v[0])||void 0===n?void 0:n.postId)===e?b(v):b(null)}),[e,v]);var w=(0,f.I0)(),k=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:w((0,p.x)(e));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:a}),(0,h.jsx)("p",{children:i}),!j&&(0,h.jsx)("button",{onClick:k,children:"Show comments"}),j&&j.map((function(n){return(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)("h3",{children:n.creator.firstName}),(0,h.jsx)("p",{children:n.body})]},n._id)})),(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),w((0,p._)({id:e,body:{body:n.target[0].value,userId:o._id}})).unwrap().then((function(){return w((0,p.x)(e))})),n.target.reset()},children:[(0,h.jsx)("textarea",{rows:"2"}),(0,h.jsx)("button",{children:"Add comment"})]})]})},m=function(){var n=(0,s.useState)(null),t=(0,u.Z)(n,2),e=t[0],f=t[1],l=(0,a.UO)().id;(0,s.useEffect)((function(){d(l)}),[l]);var d=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(t){var e,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.C8)(t);case 3:e=n.sent,c=e.posts,f(c),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),i.Am.error(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}();return e&&e.map((function(n){return(0,h.jsx)(v,{post:n},n._id)}))}}}]);
//# sourceMappingURL=125.b73c6ac6.chunk.js.map