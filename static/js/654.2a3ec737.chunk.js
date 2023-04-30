"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[654],{6654:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,c,o,a,i,s,u,p,d=t(5861),f=t(9439),l=t(7757),h=t.n(l),x=t(2791),g=t(7689),v=t(1087),m=t(7534),b=t(9139),Z=t(168),w=t(6444),j=w.ZP.div(r||(r=(0,Z.Z)(["\n  padding: 40px 120px;\n"]))),k=w.ZP.div(c||(c=(0,Z.Z)(["\n  display: flex;\n  gap: 25px;\n"]))),y=w.ZP.img(o||(o=(0,Z.Z)(["\n  width: 170px;\n  height: 100%;\n"]))),_=w.ZP.h2(a||(a=(0,Z.Z)(["\n  font-size: 30px;\n  margin-bottom: 20px;\n  color: #483d8b;\n"]))),P=w.ZP.p(i||(i=(0,Z.Z)(["\n  font-size: 20px;\n  margin-bottom: 22px;\n  font-weight: 400;\n"]))),U=w.ZP.h3(s||(s=(0,Z.Z)(["\n  font-size: 25px;\n  margin-bottom: 10px;\n  color: #483d8b;\n"]))),S=w.ZP.button(u||(u=(0,Z.Z)(["\n  width: 120px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #483d8b;\n  padding: 10px 15px;\n  background-color: lightgrey;\n  border: 1px solid #483d8b;\n  border-radius: 6px;\n  margin-bottom: 25px;\n  &:hover,\n  &:focus {\n    background-color: #483d8b;\n    color: lightgray;\n  }\n"]))),z=w.ZP.li(p||(p=(0,Z.Z)(["\n  font-size: 25px;\n  font-weight: 400;\n  color: #212121;\n  margin-bottom: 7px;\n"]))),A=t(184),C=function(){var n,e,t=(0,x.useState)({}),r=(0,f.Z)(t,2),c=r[0],o=r[1],a=(0,x.useState)(""),i=(0,f.Z)(a,2),s=i[0],u=i[1],p=(0,x.useState)(!1),l=(0,f.Z)(p,2),Z=l[0],w=l[1],C=(0,g.UO)().movieId,R=(0,g.TH)(),G=(0,x.useRef)(null!==(n=null===(e=R.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");console.log(G),(0,x.useEffect)((function(){w(!0);var n=function(){var n=(0,d.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.kY)(C);case 3:e=n.sent,o(e.data),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u(n.t0.message);case 10:return n.prev=10,w(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[C]);var I=c.poster_path,O=c.title,T=c.vote_average,Y=c.overview,q=c.genres;return(0,A.jsxs)(A.Fragment,{children:[Z&&(0,A.jsx)("p",{children:"...is loading"}),s&&(0,A.jsx)("p",{children:"somthing wrong"}),c&&!s&&(0,A.jsxs)(j,{children:[(0,A.jsxs)(k,{children:[(0,A.jsx)(y,{src:I?"".concat(m.yA).concat(I):"".concat(b),alt:"poster"}),(0,A.jsxs)("div",{children:[(0,A.jsx)(_,{children:O}),(0,A.jsxs)(P,{children:["User score: ",T]}),(0,A.jsx)(U,{children:"Overview"}),(0,A.jsx)(P,{children:Y}),(0,A.jsx)(U,{children:"Genres"}),(0,A.jsx)(P,{children:q&&"".concat(q.map((function(n){return n.name})).join(" "))}),(0,A.jsx)(S,{type:"button",to:G.current,children:"Go back"})]})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(U,{children:"Additional information"}),(0,A.jsxs)("ul",{children:[(0,A.jsx)(z,{children:(0,A.jsx)(v.rU,{state:G,to:"/movies/".concat(C,"/cast"),children:"Cast"})}),(0,A.jsx)(z,{children:(0,A.jsx)(v.rU,{state:G,to:"/movies/".concat(C,"/reviews"),children:"Reviews"})})]}),(0,A.jsx)(g.j3,{})]})]})]})}},7534:function(n,e,t){t.d(e,{Lo:function(){return p},Rl:function(){return h},kT:function(){return f},kY:function(){return d},rc:function(){return l},yA:function(){return u}});var r=t(5861),c=t(7757),o=t.n(c),a=t(1243),i="4ae6168b46e9ef37c5631010b26d05b2",s="https://api.themoviedb.org/3/",u="https://image.tmdb.org/t/p/w500",p=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s,"trending/all/day?api_key=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s,"search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9139:function(n,e,t){n.exports=t.p+"static/media/noImage.e1ce751ef1b590f719f9.jpg"}}]);
//# sourceMappingURL=654.2a3ec737.chunk.js.map