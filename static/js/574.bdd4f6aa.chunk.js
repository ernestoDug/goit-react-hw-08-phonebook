"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[574],{8574:function(n,e,r){r.r(e),r.d(e,{default:function(){return vn}});var o,t,i,a,d,c,s,p,l,x,u,b,f,g,m,h,v,w,Z,k,j,y,z,C,F,A=r(9439),O=r(2791),L=r(3855),T=r(1892),E=function(n){return n.contacts.items},I=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},q=function(n){return n.filters},N=r(9195),G=r(168),M=r(7686),S=M.Z.section(o||(o=(0,G.Z)(["\n  background: #74500c;\n  border-radius: 20px/60px;\n  border: 2px dashed #ffb841;\n"]))),B=M.Z.form(t||(t=(0,G.Z)(["\n  display: flex;\n  background-image: url('https://img.freepik.com/free-vector/jeans-texture-background_1053-120.jpg?w=740&t=st=1692460341~exp=1692460941~hmac=8328fc0d4ee8de30fcace9f0f45c61ac624d184733abdaa77901038d0c682448');\n  border-radius: 20px/60px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  width: 800px;\n  justify-content: space-around;\n  padding: 12px 7px;\n"]))),R=M.Z.label(i||(i=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  margin-top: 9px;\n  margin-left: 7px;\n  font-weight: 600;\n  color: #ebeff6;\n  padding-left: 10px;\n  font-style: italic;\n  border-bottom: none;\n  border-radius: 20px/60px;\n  margin: 5px;\n"]))),$=M.Z.input(a||(a=(0,G.Z)(["\n  border-radius: 20px/60px;\n  width: 200px;\n  padding: 22px 36px;\n  color: #262fd4;\n  background: linear-gradient(\n    90deg,\n    #9dbce6 31%,\n    rgba(160, 211, 241, 1) 66%,\n    rgba(68, 159, 214, 1) 100%\n  );\n  margin-right: 7px;\n  margin-bottom: 7px;\n\n  :placeholder {\n    color: #314286;\n  }\n"]))),H=M.Z.button(d||(d=(0,G.Z)(["\n  display: flex;\n  font-size: 16px;\n  font-weight: 700;\n  align-items: center;\n  margin: 15px 5px;\n  color: #f7e32d;\n  padding: 9px;\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXq-y8Yv0QvBh-kGT1LOtxiOxN1FRnb4-3gA&usqp=CAU');\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 20px/60px;\n  cursor: pointer;\n  border: 2px dashed #ffb841;\n\n  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);\n\n  :hover,\n  :focus {\n    color: #a2e2f3;\n    border: 2px dashed #e3620c;\n    transform: scale(1.1);\n    background-image: none;\n    background-color: green;\n  }\n"]))),K=r(3329),P=function(){return(0,K.jsxs)(H,{type:"submit",children:["\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\ud83c\udfb8"," "]})},D=r(8174),Q=(r(5462),function(n){var e=n.onCloseModal,r=(0,L.I0)(),o=(0,L.v9)(E);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(D.Ix,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),(0,K.jsxs)(B,{onSubmit:function(n){n.preventDefault();var t=n.target,i=n.target.elements.name.value,a=n.target.elements.number.value;o.some((function(n){return n.name===i}))&&D.Am.warn("\ud83e\udd41 \u0423\u0432\u0430\u0436\u043d\u0456\u0448\u0435, ".concat(i,"  \u0432\u0436\u0435 \u0404 \u0432 \u043a\u043e\u043d\u0422\u0410\u041a\u0442\u0430\u0445 \ud83e\udd41")),r((0,T.uK)({name:i,number:a.toString()})).unwrap().then((function(n){D.Am.success("\ud83e\udd41".concat(n.name," \u0442\u0435\u043f\u0435\u0440 \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445\ud83e\udd41"))})).catch((function(){D.Am.warn("\u26d4\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435, \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430\u26d4")})),e(),t.reset()},autoComplete:"off",children:[(0,K.jsx)(S,{children:(0,K.jsxs)(R,{children:["\u0406\u043c'\u044f \ud83d\udccc",(0,K.jsx)($,{type:"text",name:"name",title:"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448\u0435 \u043b\u0456\u0442\u0435\u0440\u0438, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u0431\u0456\u043b\u0438. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0410\u0434\u0440\u0456\u0430\u043d, \u0414\u0436\u0435\u0439\u043a\u043e\u0431 \u041c\u0435\u0440\u0441\u0435\u0440, \u0428\u0430\u0440\u043b\u044c \u0434\u0435 \u0411\u0430\u0446 \u0434\u0435 \u041a\u0430\u0441\u0442\u0435\u043b\u044c\u043c\u043e\u0440 \u0434'\u0410\u0440\u0442\u0430\u043d\u044c\u044f\u043d",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f...",value:o.name})]})}),(0,K.jsx)(S,{children:(0,K.jsxs)(R,{children:["\u041d\u043e\u043c\u0435\u0440 \ud83d\udcde",(0,K.jsx)($,{type:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u0437 \u0446\u0438\u0444\u0440 \u0456 \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043f\u0440\u043e\u0431\u0456\u043b\u0438, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u0456 \u0434\u0443\u0436\u043a\u0438 \u0442\u0430 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044f \u0437 +",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443...",value:o.number})]})}),(0,K.jsx)(P,{})]})]})}),U=r(3985),X=M.Z.section(c||(c=(0,G.Z)(["\nbackground: #74500c;\nborder-radius: 20px/60px;\nborder: 2px dashed #ffb841;\n\n"]))),Y=M.Z.label(s||(s=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  margin-top: 9px;\n  margin-left: 7px;\n  font-weight: 600;\n  color: #ebeff6;\n  padding-left: 10px;\n  font-style: italic;\n  border: 2px dashed #ffb841;\n  border-radius: 20px/60px;\n  margin-bottom: 7px;\n  margin-right: 7px;\n"]))),J=M.Z.input(p||(p=(0,G.Z)(["\n  border-radius: 20px/60px;\n  width: 250px;\n  padding: 22px 36px;\n  color: #262fd4;\n  background: linear-gradient(\n    90deg,\n    #9dbce6 31%,\n    rgba(160, 211, 241, 1) 66%,\n    rgba(68, 159, 214, 1) 100%\n  );\n  margin: 5px;\n  border-style: none;\n\n  :placeholder {\n    color: #314286;\n  }\n"]))),V=function(){var n=(0,L.I0)(),e=(0,L.v9)(q);return(0,K.jsx)(X,{children:(0,K.jsx)(Y,{children:(0,K.jsx)(J,{type:"text",name:"filter",placeholder:"Enter contact name",value:e,onChange:function(e){var r=e.currentTarget.value.toLowerCase().trim();n((0,U.p)(r))}})})})},W=r(3433),nn=M.Z.li(l||(l=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n\n  padding: 20px 20px;\n\n  border-radius: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n"]))),en=M.Z.p(x||(x=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  color: #f4e8ac;\n  font-size: 16px;\n  background-color: #c38e2a;\n  border: 2px dashed #ffb841;\n  margin: 0;\n  font-weight: 500;\n  border-radius: 20px/60px;\n  padding: 7px;\n\n"]))),rn=M.Z.p(u||(u=(0,G.Z)(["\n display: flex;\n  align-items: center;\n  color: #665813;\n  font-size: 14px;\n  background-color: #e2b96d;\n  border: 2px dashed #ffb841;\n  margin: 0;\n  font-weight: 500;\n  border-radius: 20px/60px;\n  padding: 7px;\n"]))),on=M.Z.button(b||(b=(0,G.Z)(["\n  display: flex;\n  font-size: 16px;\n  font-weight: 500;\n  align-items: center;\n  margin: 15px 5px;\n  color: #f7e32d;\n  padding: 5px;\nbackground-color: #74500c;\n\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 20px/60px;\n  cursor: pointer;\n  border: 2px dashed #ffb841;\n\n  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);\n\n  :hover,\n  :focus {\n    color: #a2e2f3;\n    border: 2px dashed #e3620c;\n    transform: scale(1.1);\n    background-image: none;\n    background-color: #e11212;\n  }\n"]))),tn=(M.Z.button(f||(f=(0,G.Z)(["\n  font-weight: 700;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  padding: 0.563em 1em;\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 8px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n\n    > svg {\n      fill: #000000;\n    }\n  }\n"]))),function(n){var e=n.id,r=n.name,o=n.number,t=(0,L.I0)();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(D.Ix,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),(0,K.jsxs)(nn,{children:[(0,K.jsxs)(en,{children:["\ud83d\udcd5",r]}),(0,K.jsxs)(rn,{children:["\u260e\ufe0f",o]}),(0,K.jsx)(on,{onClick:function(){return n=e,void t((0,T.GK)(n)).unwrap().then((function(n){return D.Am.success("\ud83e\udd41".concat(n.name," \u0442\u0435\u043f\u0435\u0440 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e"))})).catch((function(){D.Am.warn("\u26d4\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435, \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u26d4")}));var n},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438\u267b\ufe0f"})]},e)]})}),an=M.Z.ul(g||(g=(0,G.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  background-image: url('https://envato-shoebox-0.imgix.net/twenty20/production/uploads/items/dfa2b296-87db-4e5f-9722-1c5a3c1721ed/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=9170463252986b38ebaf7554e22850ea');\n  border-radius: 20px/60px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 2px dashed #ffb841;\n"]))),dn=r(8560),cn=M.Z.p(m||(m=(0,G.Z)(["\n  font-size: 20px;\n  padding: 9px;\n  transform: rotate(-15deg);\n  margin-left: -20px;\n  margin-bottom: -40px;\n  font-weight: 800px;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: #e7f1e3;\n  display: inline-block;\n  width: 200px;\n  text-align: center;\n  background-image: url('https://bogatyr.club/uploads/posts/2023-06/1688104468_bogatyr-club-p-kozhanaya-zaplatka-foni-pinterest-37.jpg');\n  background-size: contain;\n  border-radius: 20px/60px;\n  border: 2px dashed #ffb841;\n"]))),sn=function(){var n=(0,dn.v9)(E);return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(cn,{children:[" ","\ud83d\udcdd\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 \u0432 \u043a\u043d\u0438\u0437\u0456: ",n.length," "]})})},pn=function(){var n=(0,L.v9)(E),e=(0,L.v9)(q),r=(0,W.Z)(n.filter((function(n){return n.name.toLowerCase().includes(e)})));return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(sn,{}),(0,K.jsx)(an,{children:r.map((function(n){var e=n.name,r=n.number,o=n.id;return(0,K.jsx)(tn,{id:o,name:e,number:r},o)}))})]})},ln=M.Z.div(h||(h=(0,G.Z)(["\n  padding: 38px 48px;\n  height: 100vh;\n\n  border-radius: 32px 32px 0 0;\n  background-color: #f9f9f9;\n"]))),xn=M.Z.div(v||(v=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n"]))),un=M.Z.h2(w||(w=(0,G.Z)(["\n  font-weight: 700;\n  font-size: 34px;\n\n  margin: 0;\n"]))),bn=M.Z.div(Z||(Z=(0,G.Z)(["\n  display: flex;\n  margin-left: auto;\n"]))),fn=(M.Z.form(k||(k=(0,G.Z)([""]))),M.Z.label(j||(j=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),M.Z.input(y||(y=(0,G.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),M.Z.button(z||(z=(0,G.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: fit-content;\n\n  padding: 1.063em 1.5em;\n  margin-left: 28px;\n\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 14px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n    > svg {\n      fill: #000000;\n    }\n  }\n"])))),gn=M.Z.div(C||(C=(0,G.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%);\n  z-index: 1200;\n"]))),mn=M.Z.div(F||(F=(0,G.Z)(["\n  border-radius: 25px;\n  overflow: hidden;\n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #f9f9f9;\n"]))),hn=function(n){var e=n.children,r=n.onCloseModal;(0,O.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]);return(0,K.jsx)(gn,{onClick:function(n){var e=n.target;n.currentTarget===e&&r()},children:(0,K.jsx)(mn,{children:e})})},vn=function(){var n=(0,L.I0)(),e=(0,L.v9)(I),r=(0,L.v9)(_),o=(0,O.useState)(!1),t=(0,A.Z)(o,2),i=t[0],a=t[1];(0,O.useEffect)((function(){n((0,T.yF)())}),[n]);var d=function(){a((function(n){return!n}))};return(0,K.jsxs)(ln,{children:[(0,K.jsxs)(N.$,{children:[(0,K.jsxs)(xn,{children:[(0,K.jsx)(un,{children:"Contacts"}),(0,K.jsxs)(bn,{children:[(0,K.jsx)(V,{}),(0,K.jsx)(fn,{type:"button",onClick:d,children:"New Contact"})]})]}),e&&!r&&(0,K.jsx)("b",{children:"Request in progress"}),(0,K.jsx)(pn,{})]}),i&&(0,K.jsx)(hn,{children:(0,K.jsx)(N.$,{title:"Add New Contact",children:(0,K.jsx)(Q,{onCloseModal:d})}),onCloseModal:d})]})}},9195:function(n,e,r){r.d(e,{$:function(){return p}});var o,t,i=r(168),a=r(7686),d=a.Z.section(o||(o=(0,i.Z)(["\n  margin: auto;\n  padding: 26px 0;\n\n  background-color: #f9f9f9;\n"]))),c=a.Z.h2(t||(t=(0,i.Z)(["\n  font-weight: 700;\n  font-size: 34px;\n\n  text-align: center;\n  margin: 0;\n"]))),s=r(3329),p=function(n){var e=n.title,r=n.children;return(0,s.jsxs)(d,{children:[e&&(0,s.jsx)(c,{children:e}),r]})}}}]);
//# sourceMappingURL=574.bdd4f6aa.chunk.js.map