"use strict";(self.webpackChunkkraiukhin=self.webpackChunkkraiukhin||[]).push([[600],{410:(e,n,t)=>{t.d(n,{m:()=>i});const i=t(574).Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`},714:(e,n,t)=>{t.r(n),t.d(n,{default:()=>z});var i=t(410),r=t(43);const o=t.p+"static/media/wind-in-the-head.484058dac9f8e5a77f23.png",c=t.p+"static/media/gachimuchi.b5bb31edbbe4492eb217.gif";var a=t(574);const s=a.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`,d=a.Ay.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`,l=a.Ay.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  row-gap: 30px;
  column-gap: 30px;
  list-style: none;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
  }
`,x=a.Ay.h2`
  text-align: center;
  font-size: 30px;
  line-height: 1.5;
  color: #bb4646;
`;var p=t(950);const f=a.i7`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,h=a.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.9);
`,u=a.Ay.div`
  width: 60vw;
  padding: 44px 20px 16px;
  border-radius: 20px;
  background-color: #ffffff;
  animation: ${f} 0.3s ease forwards;
  min-width: 300px;
  max-width: 90vw;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform-origin: center center;
`;var m=t(579);const g=document.querySelector("#modal-root");function v(e){let{onOverlayClick:n,children:t}=e;(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.code&&n()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[n]);return(0,p.createPortal)((0,m.jsx)(h,{onClick:e=>{e.target===e.currentTarget&&n()},children:(0,m.jsx)(u,{children:t})}),g)}const y=a.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding: 30px;
`,w=a.Ay.img`
  width: 600px;
  height: 600px;
  padding: 0 0 20px 0;
`;function b(e){let{cover:n,name:t}=e;return(0,m.jsx)(y,{children:(0,m.jsx)(w,{src:n,width:"200",height:"150",alt:t})})}const j=a.Ay.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: 260px;
  transition: 0.25s ease-in-out;

  padding: 20px 30px 10px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.05);
    background: #e0a7a7;
  }
`,k=a.Ay.img`
  padding: 0 0 20px 0;
`,A=a.Ay.span`
  margin-bottom: 16px;
  width: 100%;
  font-size: 20px;
  text-align: center;
  padding: 20px 0 0 0;
  border-top: 2px solid #bb4646;
  text-transform: uppercase;
  color: #bb4646;
`;function C(e){let{name:n,cover:t,onClick:i,onOverlayClick:r,showModal:o,cover2:c}=e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(j,{onClick:i,children:[(0,m.jsx)(k,{src:t,width:"100",height:"200",alt:n}),(0,m.jsx)(A,{children:(0,m.jsx)("strong",{children:n})})]}),o&&(0,m.jsx)(v,{onOverlayClick:r,children:(0,m.jsx)(b,{name:n,cover:c})})]})}const E=[{id:1,name:"\u0412\u0456\u0442\u0435\u0440 \u0443 \u0433\u043e\u043b\u043e\u0432\u0456",cover:o,text:"\u0420\u043e\u043c\u0430\u043d \u043f\u0440\u043e \u043b\u044c\u0432\u0456\u0432\u0441\u044c\u043a\u043e\u0433\u043e \u0432\u0435\u043b\u043e\u043a\u0443\u0440\u2019\u0454\u0440\u0430 \u041c\u0430\u043a\u0441\u0438\u043c\u0430...",cover2:c},{id:2,name:"\u0406\u043d\u0448\u0430 \u043a\u043d\u0438\u0433\u0430",cover:o,text:"\u041e\u043f\u0438\u0441 \u043a\u043d\u0438\u0433\u0438 2...",cover2:c},{id:3,name:"\u0406\u043d\u0448\u0430 \u043a\u043d\u0438\u0433\u0430",cover:o,text:"\u041e\u043f\u0438\u0441 \u043a\u043d\u0438\u0433\u0438 2...",cover2:c},{id:4,name:"\u0406\u043d\u0448\u0430 \u043a\u043d\u0438\u0433\u0430",cover:o,text:"\u041e\u043f\u0438\u0441 \u043a\u043d\u0438\u0433\u0438 2...",cover2:c}];function O(){const[e,n]=(0,r.useState)(!1),t=()=>{n(!0)},i=()=>{n(!1)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(s,{children:[(0,m.jsx)(x,{hidden:!0,children:"\u041c\u043e\u0457 \u043a\u043d\u0438\u0433\u0438"}),(0,m.jsx)(d,{children:(0,m.jsx)(l,{children:E.map((n=>{const{id:r,name:o,cover:c,cover2:a}=n;return(0,m.jsx)(C,{name:o,cover:c,cover2:a,onClick:t,onOverlayClick:i,showModal:e},r)}))})})]})})}function z(){return(0,m.jsx)(i.m,{children:(0,m.jsx)(O,{})})}}}]);
//# sourceMappingURL=600.87c450cc.chunk.js.map