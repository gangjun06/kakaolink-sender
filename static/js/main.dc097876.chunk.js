(this["webpackJsonpkakao-utils"]=this["webpackJsonpkakao-utils"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(0),r=n.n(a),i=n(9),o=n.n(i),j=(n(80),n(135)),s=n(138),l=n(111),b=n(139),d=n(149),u=function(){return Object(c.jsx)(j.a,{position:"static",children:Object(c.jsxs)(s.a,{className:"flex justify-between",children:[Object(c.jsx)(l.a,{variant:"h6",children:"Kakaolink Sender"}),Object(c.jsx)("div",{children:Object(c.jsx)(b.a,{color:"inherit",startIcon:Object(c.jsx)(d.a,{}),children:"Source Code"})})]})})},O=n(141),h=n(60),x=function(e){var t=e.children;return Object(a.useEffect)((function(){var e=window.Kakao;e.init(h.a),console.log(e.isInitialized())}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{id:"app-container",children:t})})]})},f=n(45),p=n(11),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},m=n(16),g=n(20),w=n(32),k=n(142),U=n(143),y=n(147),C=n(144),S=n(148),T=n(145),I=function(){var e={validators:["required"],errorMessages:["\uc774 \ud544\ub4dc\ub294 \ud544\uc218\uc785\ub2c8\ub2e4"],fullWidth:!0},t={title:"",description:"",imageUrl:"",link:{webUrl:""}},n=Object(a.useState)(t),r=Object(g.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(!1),s=Object(g.a)(j,2),d=s[0],u=s[1],O=function(e){return e.value};Object(a.useEffect)((function(){}),[]);return Object(c.jsx)(w.ValidatorForm,{onSubmit:function(){!function(e){window.Kakao.Link.sendDefault(e)}({objectType:"feed",content:Object(m.a)(Object(m.a)({},i),{},{link:{webUrl:"".concat(document.URL,"Redirect?href=").concat(window.btoa(i.link.webUrl))}})})},children:Object(c.jsxs)(k.a,{children:[Object(c.jsxs)(U.a,{children:[Object(c.jsx)(l.a,{variant:"h6",component:"h2",children:"\uce74\uce74\uc624 \ub9c1\ud06c \ubcf4\ub0b4\uae30"}),Object(c.jsxs)(y.a,{mt:2,children:[Object(c.jsx)(w.TextValidator,Object(m.a)({label:"\uc81c\ubaa9",name:"title",onChange:function(e){var t=e.target;return o(Object(m.a)(Object(m.a)({},i),{},{title:O(t)}))},value:i.title},e)),Object(c.jsx)("br",{}),Object(c.jsx)(w.TextValidator,Object(m.a)({label:"\uc124\uba85",name:"description",onChange:function(e){var t=e.target;return o(Object(m.a)(Object(m.a)({},i),{},{description:O(t)}))},value:i.description},e)),Object(c.jsx)("br",{}),Object(c.jsxs)(y.a,{flex:"row",children:[Object(c.jsx)(C.a,{control:Object(c.jsx)(S.a,{checked:d,onChange:function(e,t){return u(t)},name:"useImage",color:"primary"}),label:"\uc774\ubbf8\uc9c0 \uc0ac\uc6a9"}),d&&Object(c.jsx)(w.TextValidator,Object(m.a)({label:"\uc774\ubbf8\uc9c0 URL",name:"imageURL",onChange:function(e){var t=e.target;return o(Object(m.a)(Object(m.a)({},i),{},{imageUrl:O(t)}))},value:i.imageUrl},e))]}),Object(c.jsx)("br",{}),Object(c.jsx)(w.TextValidator,Object(m.a)({label:"\ub9c1\ud06c",name:"url",onChange:function(e){var t=e.target;return o(Object(m.a)(Object(m.a)({},i),{},{link:{webUrl:O(t)}}))},value:i.link.webUrl},e))]})]}),Object(c.jsxs)(T.a,{children:[Object(c.jsx)(b.a,{variant:"contained",color:"primary",type:"submit",children:"Send"}),Object(c.jsx)(b.a,{variant:"outlined",color:"secondary",onClick:function(){o(t)},children:"Reset"})]})]})})},L=n(62),R=n.n(L),F=function(){var e=Object(p.e)();return Object(a.useEffect)((function(){var t=R.a.parse(e.location.search).href;t?window.location.href=window.encodeURI(window.atob(Array.isArray(t)?t[0]:t)):e.push("/")}),[]),Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"30px"},children:"\ud574\ub2f9 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9 \uc911\uc785\ub2c8\ub2e4"})})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f.a,{children:Object(c.jsxs)(x,{children:[Object(c.jsx)(p.a,{exact:!0,path:"/",component:I}),Object(c.jsx)(p.a,{exact:!0,path:"/redirect",component:F})]})})}),document.getElementById("root")),v()},60:function(e){e.exports=JSON.parse('{"a":"b8c3f7c293116fb7013ad1024d180782"}')},80:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.dc097876.chunk.js.map