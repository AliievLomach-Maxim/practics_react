"use strict";(self.webpackChunkpractices_react=self.webpackChunkpractices_react||[]).push([[880],{6713:function(n,r,t){t.d(r,{C8:function(){return i},M_:function(){return s},Rf:function(){return o},_8:function(){return p},qz:function(){return u}});var e=t(4165),a=t(5861),c=t(1243);c.Z.defaults.baseURL="https://dummyjson.com/users";var o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r,t){var a,o;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("?skip=".concat(r,"&limit=").concat(t));case 2:return a=n.sent,o=a.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("/".concat(r));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r,t,a){var o,s;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search?q=".concat(r,"&skip=").concat(t,"&limit=").concat(a));case 2:return o=n.sent,s=o.data,n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})));return function(r,t,e){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("".concat(r,"/posts"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("".concat(r,"/todos"));case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},3535:function(n,r,t){t.d(r,{Z:function(){return s}});var e,a=t(168),c=t(6444).ZP.button(e||(e=(0,a.Z)(["\n    cursor: pointer;\n    min-width: 120px;\n    padding: 10px;\n    background-color: burlywood;\n    border-radius: 8px;\n    display: block;\n    margin-top: 10px;\n"]))),o=t(184),s=function(n){var r=n.handleClick,t=n.text;return(0,o.jsx)(c,{type:"button",onClick:r,children:t})}},3458:function(n,r,t){t.d(r,{Z:function(){return g}});var e,a,c,o,s,u=t(7689),i="Section_baseSection__lX1iS",p="Section_superSection__qKemp Section_baseSection__lX1iS",d=t(184),l=function(n){var r=n.title,t=n.children;return(0,d.jsxs)("section",{className:r?p:i,children:[r&&(0,d.jsx)("h1",{children:r}),t]})},x=t(168),h=t(1087),f=t(6444),Z=f.ZP.h2(e||(e=(0,x.Z)(["\n    color: red;\n    text-shadow: 1px 1px 2px teal;\n    &:hover {\n        text-shadow: 1px 1px 0.5em teal;\n        cursor: pointer;\n    }\n"]))),m=f.ZP.p(a||(a=(0,x.Z)(["\n    color: teal;\n    text-shadow: 0 0 2px white;\n"]))),v=f.ZP.span(c||(c=(0,x.Z)(["\n    color: ",";\n    ",":hover & {\n        text-shadow: 1px 1px 0.5em teal;\n    }\n"])),(function(n){return n.isEndedBiz?"red":"yellow"}),m),b=f.ZP.button(o||(o=(0,x.Z)(["\n    cursor: pointer;\n    min-width: 120px;\n    padding: 10px;\n    background-color: burlywood;\n    border-radius: 8px;\n    display: block;\n    margin-top: 10px;\n"]))),w=(0,f.ZP)(h.rU)(s||(s=(0,x.Z)(["\n    cursor: pointer;\n    width: 120px;\n    padding: 10px;\n    background-color: burlywood;\n    text-align: center;\n    border-radius: 8px;\n    display: block;\n    margin-top: 10px;\n    text-decoration: none;\n    color: black;\n    box-shadow: 0 0 12px black;\n    &:hover {\n        box-shadow: 0 0 18px black;\n    }\n"]))),g=function(n){var r=n.user,t=r.id,e=r.firstName,a=r.image,c=r.email,o=r.phone,s=n.isDetails,i=(0,u.s0)(),p=(0,u.TH)(),x=function(n){i(n,{state:p.state})},h="/"===p.pathname?"/users":p.pathname;return(0,d.jsxs)(d.Fragment,{children:[!s&&(0,d.jsx)(b,{onClick:function(){return x(p.state)},children:"<"}),(0,d.jsxs)(l,{children:[(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:a,alt:"Avatar",width:"200px"}),(0,d.jsx)(Z,{children:e}),(0,d.jsxs)(m,{children:["Phone: ",(0,d.jsx)(v,{children:o})]}),(0,d.jsxs)(m,{children:["Email:",(0,d.jsx)(v,{children:c})]}),s?(0,d.jsx)(w,{to:"".concat(h,"/").concat(t),state:p,children:"Show Details"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b,{onClick:function(){return x("posts")},children:"Posts"}),(0,d.jsx)(b,{onClick:function(){return x("todos")},children:"Todos"})]})]}),(0,d.jsx)(u.j3,{})]})]})}},3768:function(n,r,t){var e=t(3458),a=t(184);r.Z=function(n){var r=n.users,t=n.isDetails;return(0,a.jsx)("ul",{children:r.map((function(n){return(0,a.jsx)(e.Z,{user:n,isDetails:t},n.id)}))})}},7880:function(n,r,t){t.r(r),t.d(r,{default:function(){return v}});var e,a=t(4165),c=t(3433),o=t(5861),s=t(9439),u=t(2791),i=t(9014),p=t(1087),d=t(6713),l=t(3535),x=t(168),h=t(6444).ZP.form(e||(e=(0,x.Z)(["\n    display: flex;\n    justify-content: center;\n    padding: 12px;\n    input {\n        padding: 12px;\n        width: 300px;\n        font-weight: bold;\n        font-size: 18px;\n        border-radius: 8px;\n        margin-right: 12px;\n    }\n    button {\n        cursor: pointer;\n        width: 120px;\n        padding: 10px;\n        background-color: burlywood;\n        border-radius: 8px;\n        font-weight: 400;\n        font-size: 18px;\n    }\n"]))),f=t(184),Z=function(n){var r=n.handleSearchQuery,t=n.setSearchParams,e=n.searchQuery;return(0,f.jsxs)(h,{onSubmit:function(n){n.preventDefault(),r()},children:[(0,f.jsx)("input",{type:"search",placeholder:"Search user by name",value:e,onChange:function(n){var r=n.target.value;return t({search:r})}}),(0,f.jsx)("button",{children:"Search"})]})},m=t(3768),v=function(){var n=(0,u.useState)(null),r=(0,s.Z)(n,2),t=r[0],e=r[1],x=(0,u.useState)(1),h=(0,s.Z)(x,2),v=h[0],b=h[1],w=(0,u.useState)(""),g=(0,s.Z)(w,2),j=g[0],k=g[1],y=(0,p.lr)(),S=(0,s.Z)(y,2),_=S[0],P=S[1],C=(0,u.useMemo)((function(){var n;return null!==(n=_.get("search"))&&void 0!==n?n:""}),[_]);(0,u.useEffect)((function(){!C&&P({})}),[C,P]);var D=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(r,t){var o,s,u,p,l;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=10*t-10,s=i.Am.loading("Loading..."),n.prev=2,n.next=5,(0,d.qz)(r,o,10);case 5:u=n.sent,p=u.users,(l=u.total)?(e((function(n){return n?[].concat((0,c.Z)(n),(0,c.Z)(p)):(0,c.Z)(p)})),i.Am.success("Finned ".concat(l," users"),{id:s})):i.Am.error("Not found",{id:s}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),i.Am.error(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(r,t){return n.apply(this,arguments)}}();(0,u.useEffect)((function(){1===v&&e(null),j&&D(j,v)}),[j,v]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Z,{handleSearchQuery:function(){b(1),k(C)},searchQuery:C,setSearchParams:P}),t&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.Z,{users:t,isDetails:!0}),t.length>10&&(0,f.jsx)(l.Z,{handleClick:function(){return b((function(n){return n+1}))},text:"more..."})]})]})}}}]);
//# sourceMappingURL=880.db823eec.chunk.js.map