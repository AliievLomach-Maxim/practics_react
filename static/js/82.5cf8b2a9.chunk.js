"use strict";(self.webpackChunkpractices_react=self.webpackChunkpractices_react||[]).push([[82],{1082:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var i,t,o,s,a,x=r(7689),c=r(3101),l=r(168),p=r(1087),d=r(6444),h=(0,d.ZP)(p.OL)(i||(i=(0,l.Z)(["\n    color: white;\n    text-decoration: none;\n    &.active {\n        text-shadow: 0px 0px 18px red;\n    }\n    &:hover {\n        text-shadow: 0px 0px 18px black;\n    }\n"]))),f=d.ZP.a(t||(t=(0,l.Z)(["\n    cursor: pointer;\n    color: white;\n    text-decoration: none;\n    &:hover {\n        text-shadow: 0px 0px 18px black;\n    }\n"]))),u=d.ZP.ul(o||(o=(0,l.Z)(["\n    display: flex;\n    padding: 0 24px;\n\n    & li {\n        list-style-type: none;\n        margin: 0 24px;\n        font-size: 30px;\n    }\n"]))),g=r(9434),j=r(8453),m=r(2366),k=r(184),v=function(){var n=(0,g.v9)(c.a).token,e=(0,g.I0)();return(0,k.jsx)("nav",{children:(0,k.jsxs)(u,{children:[(0,k.jsx)("li",{children:(0,k.jsx)(h,{to:"/",children:"Home"})}),(0,k.jsx)("li",{children:(0,k.jsx)(h,{to:"/users",children:"Users"})}),(0,k.jsx)("li",{children:n?(0,k.jsx)(f,{onClick:function(){e((0,j.n)()),(0,m.b9)(),localStorage.removeItem("token")},children:"Log Out"}):(0,k.jsx)(h,{to:"/signin",children:"Log In"})})]})})},b=d.ZP.header(s||(s=(0,l.Z)(["\n    padding: 4px;\n    background: #004143;\n"]))),w=r(2791),Z=r(9269),y=d.ZP.div(a||(a=(0,l.Z)(["\n    cursor: pointer;\n    position: fixed;\n    left: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n    box-shadow: 0 0 16px gray;\n    border-radius: 24px;\n    margin: 0 0 0 24px;\n    padding: 12px 24px;\n\n    img {\n        box-shadow: 0 0 12px inset gray;\n    }\n\n    figcaption {\n        text-align: center;\n\n        font-size: 30px;\n        font-weight: 600;\n        margin-bottom: 48px;\n    }\n\n    p {\n        box-shadow: 0 0 6px gray;\n        border-radius: 12px;\n        padding: 12px;\n    }\n"]))),P=function(n){var e=n.profile,r=e.image,i=e.firstName,t=e.lastName,o=e.phone,s=e.gender,a=e.email,c=(0,x.s0)();return(0,k.jsxs)(y,{onClick:function(){return c("/profile")},children:[(0,k.jsxs)("figure",{children:[(0,k.jsx)("img",{src:r,alt:"Avatar"}),(0,k.jsxs)("figcaption",{children:[i,t]})]}),(0,k.jsxs)("p",{children:["Gender: ",s]}),(0,k.jsxs)("p",{children:["Phone: ",o]}),(0,k.jsxs)("p",{children:["Email: ",a]})]})},C=function(){var n=(0,g.v9)(c.a),e=n.token,r=n.profile,i=localStorage.getItem("token"),t=(0,g.I0)();return(0,w.useEffect)((function(){!e&&i&&t((0,Z.xC)(i))}),[t,i,e]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b,{children:(0,k.jsx)(v,{})}),r&&(0,k.jsx)(P,{profile:r}),(0,k.jsx)("main",{children:(0,k.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=82.5cf8b2a9.chunk.js.map