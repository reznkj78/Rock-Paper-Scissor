(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{15:function(e,s,c){"use strict";c.r(s);var t=c(6),a=c(1),i=c(2),n=c(4),r=Object(a.createContext)({setUserSelected:"",setmessage:"",setComputerSelected:""}),j=c(3),o=c(7),l=c(0),d=function(){return Object(l.jsx)(o.CountdownCircleTimer,{isPlaying:!0,duration:2,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],children:function(e){return e.remainingTime}})},b=function(e){e.children;var s=Object(a.useContext)(r),c=s.setUserSelected,t=s.getUserSelected,o=s.setComputerSelected,b=s.getComputerSelected,O=s.getmessage,h=s.setmessage,m=Object(a.useState)(""),u=Object(i.a)(m,2),p=u[0],x=u[1],f=Object(a.useState)(0),N=Object(i.a)(f,2),S=N[0],g=N[1],k=Object(a.useState)(0),y=Object(i.a)(k,2),C=y[0],v=y[1],E=Object(a.useState)(0),I=Object(i.a)(E,2),P=I[0],R=I[1],w=Object(a.useState)(!0),U=Object(i.a)(w,2),T=U[0],W=U[1],A=Object(a.useState)(!1),B=Object(i.a)(A,2),q=B[0],F=B[1];Object(a.useEffect)((function(){switch(Object(n.random)(1,3)){case 1:o("rock");break;case 2:o("paper");break;case 3:o("scissors");break;default:o("scissors")}}),[]);var J=function(e){c(e),W(!1)};return Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:"icon-container-header",children:[Object(l.jsx)("h1",{onClick:function(e){return J("rock")},children:Object(l.jsx)("span",{className:"iconify iconify-hader iconify-header1","data-icon":"la:hand-rock"})}),Object(l.jsx)("h1",{onClick:function(e){return J("paper")},children:Object(l.jsx)("span",{className:"iconify iconify-hader iconify-header2","data-icon":"la:hand-paper"})}),Object(l.jsx)("h1",{onClick:function(e){return J("scissors")},children:Object(l.jsx)("span",{className:"iconify iconify-hader iconify-header3","data-icon":"la:hand-scissors"})})]})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"main-content",children:[Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("h1",{className:"title",children:"user"}),Object(l.jsx)("hr",{className:"hr"}),Object(l.jsxs)("div",{children:["rock"===t?Object(l.jsx)(j.a,{className:"iconify-main",icon:"la:hand-rock"}):"paper"===t?Object(l.jsx)(j.a,{className:"iconify-main",icon:"la:hand-paper-solid"}):"scissors"===t?Object(l.jsx)(j.a,{className:"iconify-main",icon:"la:hand-scissors"}):void 0,Object(l.jsx)("h1",{className:"mood",children:Object(n.isEmpty)(t)?"please CHOOSE":"rock"===t?"ROCK":"paper"===t?"PAPER":"scissors"===t?"SCISSORS":void 0})]})]}),Object(l.jsxs)("p",{className:"line-container",children:[" ",q?Object(l.jsx)(d,{}):Object(l.jsx)("hr",{className:"line"})]}),Object(l.jsxs)("div",{className:"computer",children:[Object(l.jsx)("h1",{className:"title",children:"computer"}),Object(l.jsx)("hr",{className:"hr"}),Object(l.jsxs)("div",{children:["rock"===p?Object(l.jsx)(j.a,{className:"iconify-main",icon:"la:hand-rock"}):"paper"===p?Object(l.jsx)(j.a,{className:"iconify-main",icon:"la:hand-paper-solid"}):"scissors"===p?Object(l.jsx)(j.a,{className:"iconify-main",icon:"la:hand-scissors"}):void 0,Object(l.jsx)("h1",{className:"mood",children:Object(n.isEmpty)(p)&&!q?"... The computer is waiting":"rock"===p?"ROCK":"paper"===p?"PAPER":"scissors"===p?"SCISSORS":void 0})]})]})]}),Object(l.jsx)("button",{onClick:function(){F(!0),x(""),h(""),setTimeout((function(){switch(F(!1),g(S+1),Object(n.random)(1,3)){case 1:o("rock");break;case 2:o("paper");break;case 3:o("scissors");break;default:o("scissors")}"scissors"===b&&"rock"===t||"rock"===b&&"paper"===t||"paper"===b&&"scissors"===t?(h("you WIN"),v(C+1)):b===t?h("game was equal"):(h("computer WIN"),R(P+1)),x(b),console.log(t),console.log(b)}),2e3)},className:"main-btn",disabled:T,children:"GO"}),Object(n.isEmpty)(t)?"":Object(l.jsx)("h1",{className:"you WIN"===O?"message-win":"computer WIN"===O?"message-lose":"message-equal",children:O})]}),Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"situation-container",children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"situation",children:[Object(l.jsxs)("h2",{children:["USER POINT : ",Object(l.jsx)("span",{children:C})]}),Object(l.jsxs)("h2",{children:["ROUND : ",Object(l.jsx)("span",{children:S})]}),Object(l.jsxs)("h2",{children:["COMPUTER POINT : ",Object(l.jsx)("span",{children:P})]})]})]}),Object(l.jsx)("p",{className:"programmer",children:"createBy: @reznkj (tel & instagram)"}),null]})]})},O=function(){return Object(l.jsx)(b,{})},h=function(e){var s=Object(a.useState)(""),c=Object(i.a)(s,2),t=c[0],n=c[1],j=Object(a.useState)(""),o=Object(i.a)(j,2),d=o[0],b=o[1],O=Object(a.useState)(""),h=Object(i.a)(O,2),m=h[0],u=h[1];return Object(l.jsx)(r.Provider,{value:{getUserSelected:t,setUserSelected:n,getmessage:m,setmessage:u,getComputerSelected:d,setComputerSelected:b},children:e.children})};Object(t.render)(Object(l.jsx)(h,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e61023bb.chunk.js.map