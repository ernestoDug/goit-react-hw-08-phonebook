"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[574],{8574:function(n,e,r){r.r(e),r.d(e,{default:function(){return wn}});var o,a,t,i,p,x,c,d,s,l,b,u,g,f,m,h,w,v,Z,k,j,y,z,C,F,A=r(9439),O=r(2791),L=r(3855),T=r(208),E=function(n){return n.contacts.items},I=function(n){return n.contacts.isLoading},_=function(n){return n.contacts.error},G=function(n){return n.filters},M=r(9195),N=r(168),q=r(7686),S=q.Z.section(o||(o=(0,N.Z)(["\n  background: #74500c;\n  border-radius: 20px/60px;\n  border: 2px dashed #ffb841;\n"]))),B=q.Z.form(a||(a=(0,N.Z)(["\n  display: flex;\n  background-image: url('https://img.freepik.com/free-vector/jeans-texture-background_1053-120.jpg?w=740&t=st=1692460341~exp=1692460941~hmac=8328fc0d4ee8de30fcace9f0f45c61ac624d184733abdaa77901038d0c682448');\n  border-radius: 20px/60px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  width: 800px;\n  justify-content: space-around;\n  padding: 12px 7px;\n"]))),$=q.Z.label(t||(t=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  margin-top: 9px;\n  margin-left: 7px;\n  font-weight: 600;\n  color: #ebeff6;\n  padding-left: 10px;\n  font-style: italic;\n  border-bottom: none;\n  border-radius: 20px/60px;\n  margin: 5px;\n"]))),H=q.Z.input(i||(i=(0,N.Z)(["\n  border-radius: 20px/60px;\n  width: 200px;\n  padding: 22px 36px;\n  color: #262fd4;\n  background: linear-gradient(\n    90deg,\n    #9dbce6 31%,\n    rgba(160, 211, 241, 1) 66%,\n    rgba(68, 159, 214, 1) 100%\n  );\n  margin-right: 7px;\n  margin-bottom: 7px;\n\n  :placeholder {\n    color: #314286;\n  }\n  &:hover,\n  &:focus {\n    background: linear-gradient(90deg, #dd90e5 31%, #4ba6da 66%, #2b89c3 100%);\n  }\n"]))),K=q.Z.button(p||(p=(0,N.Z)(["\n  display: flex;\n  font-size: 16px;\n  font-weight: 700;\n  align-items: center;\n  margin: 15px 5px;\n  color: #f7e32d;\n  padding: 9px;\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXq-y8Yv0QvBh-kGT1LOtxiOxN1FRnb4-3gA&usqp=CAU');\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 20px/60px;\n  cursor: pointer;\n  border: 2px dashed #ffb841;\n\n  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);\n\n  :hover,\n  :focus {\n    color: #a2e2f3;\n    border: 2px dashed #e3620c;\n    transform: scale(1.1);\n    background-image: none;\n    background-color: green;\n  }\n"]))),P=r(3329),R=function(){return(0,P.jsxs)(K,{type:"submit",children:["\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\ud83c\udfb8"," "]})},D=r(8174),Q=(r(5462),function(n){var e=n.onCloseModal,r=(0,L.I0)(),o=(0,L.v9)(E);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D.Ix,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),(0,P.jsxs)(B,{onSubmit:function(n){n.preventDefault();var a=n.target,t=n.target.elements.name.value,i=n.target.elements.number.value;o.some((function(n){return n.name===t}))&&D.Am.warn("\ud83e\udd41 \u0423\u0432\u0430\u0436\u043d\u0456\u0448\u0435, ".concat(t,"  \u0432\u0436\u0435 \u0404 \u0432 \u043a\u043e\u043d\u0422\u0410\u041a\u0442\u0430\u0445 \ud83e\udd41")),r((0,T.uK)({name:t,number:i.toString()})).unwrap().then((function(n){D.Am.success("\ud83e\udd41".concat(n.name," \u0442\u0435\u043f\u0435\u0440 \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445\ud83e\udd41"))})).catch((function(){D.Am.warn("\u26d4\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435, \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430\u26d4")})),e(),a.reset()},autoComplete:"off",children:[(0,P.jsx)(S,{children:(0,P.jsxs)($,{children:["\u0406\u043c'\u044f \ud83d\udccc",(0,P.jsx)(H,{type:"text",name:"name",title:"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448\u0435 \u043b\u0456\u0442\u0435\u0440\u0438, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u0431\u0456\u043b\u0438. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0410\u0434\u0440\u0456\u0430\u043d, \u0414\u0436\u0435\u0439\u043a\u043e\u0431 \u041c\u0435\u0440\u0441\u0435\u0440, \u0428\u0430\u0440\u043b\u044c \u0434\u0435 \u0411\u0430\u0446 \u0434\u0435 \u041a\u0430\u0441\u0442\u0435\u043b\u044c\u043c\u043e\u0440 \u0434'\u0410\u0440\u0442\u0430\u043d\u044c\u044f\u043d",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f...",value:o.name})]})}),(0,P.jsx)(S,{children:(0,P.jsxs)($,{children:["\u041d\u043e\u043c\u0435\u0440 \ud83d\udcde",(0,P.jsx)(H,{type:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u0437 \u0446\u0438\u0444\u0440 \u0456 \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043f\u0440\u043e\u0431\u0456\u043b\u0438, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u0456 \u0434\u0443\u0436\u043a\u0438 \u0442\u0430 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044f \u0437 +",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443...",value:o.number})]})}),(0,P.jsx)(R,{})]})]})}),U=r(3985),X=q.Z.section(x||(x=(0,N.Z)(["\nbackground: #74500c;\nborder-radius: 20px/60px;\nborder: 2px dashed #ffb841;\n"]))),Y=q.Z.label(c||(c=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  margin-top: 9px;\n  margin-left: 7px;\n  font-weight: 600;\n  color: #ebeff6;\n  padding-left: 10px;\n  font-style: italic;\n  border: 2px dashed #ffb841;\n  border-radius: 20px/60px;\n  margin-bottom: 7px;\n  margin-right: 7px;\n"]))),J=q.Z.input(d||(d=(0,N.Z)(["\n  border-radius: 20px/60px;\n  width: 250px;\n  padding: 22px 36px;\n  color: #262fd4;\n  background: linear-gradient(\n    90deg,\n    #9dbce6 31%,\n    rgba(160, 211, 241, 1) 66%,\n    rgba(68, 159, 214, 1) 100%\n  );\n  margin: 5px;\n  border-style: none;\n\n  :placeholder {\n    color: #314286;\n  }\n  &:hover, \n  &:focus{\n   background: linear-gradient(\n    90deg,\n    #dd90e5 31%,\n    #4ba6da 66%,\n    #2b89c3 100%\n   )\n  }\n"]))),V=function(){var n=(0,L.I0)(),e=(0,L.v9)(G);return(0,P.jsx)(X,{children:(0,P.jsx)(Y,{children:(0,P.jsx)(J,{type:"text",name:"filter",placeholder:"Enter contact name",value:e,onChange:function(e){var r=e.currentTarget.value.toLowerCase().trim();n((0,U.p)(r))}})})})},W=r(3433),nn=q.Z.li(s||(s=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n\n  padding: 20px 20px;\n\n  border-radius: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n"]))),en=q.Z.p(l||(l=(0,N.Z)(["\n  display: flex;\n  align-items: center;\n  color: #f4e8ac;\n  font-size: 16px;\n  background-color: #c38e2a;\n  border: 2px dashed #ffb841;\n  margin: 0;\n  font-weight: 500;\n  border-radius: 20px/60px;\n  padding: 7px;\n\n"]))),rn=q.Z.p(b||(b=(0,N.Z)(["\n display: flex;\n  align-items: center;\n  color: #665813;\n  font-size: 14px;\n  background-color: #e2b96d;\n  border: 2px dashed #ffb841;\n  margin: 0;\n  font-weight: 500;\n  border-radius: 20px/60px;\n  padding: 7px;\n"]))),on=q.Z.button(u||(u=(0,N.Z)(["\n  display: flex;\n  font-size: 16px;\n  font-weight: 500;\n  align-items: center;\n  margin: 15px 5px;\n  color: #f7e32d;\n  padding: 5px;\nbackground-color: #74500c;\n\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 20px/60px;\n  cursor: pointer;\n  border: 2px dashed #ffb841;\n\n  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);\n\n  :hover,\n  :focus {\n    color: #a2e2f3;\n    border: 2px dashed #e3620c;\n    transform: scale(1.1);\n    background-image: none;\n    background-color: #e11212;\n  }\n"]))),an=(q.Z.button(g||(g=(0,N.Z)(["\n  font-weight: 700;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  padding: 0.563em 1em;\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 8px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n\n    > svg {\n      fill: #000000;\n    }\n  }\n"]))),function(n){var e=n.id,r=n.name,o=n.number,a=(0,L.I0)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D.Ix,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),(0,P.jsxs)(nn,{children:[(0,P.jsxs)(en,{children:["\ud83d\udcd5",r]}),(0,P.jsxs)(rn,{children:["\u260e\ufe0f",o]}),(0,P.jsx)(on,{onClick:function(){return n=e,void a((0,T.GK)(n)).unwrap().then((function(n){return D.Am.success("\ud83e\udd41".concat(n.name," \u0442\u0435\u043f\u0435\u0440 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e"))})).catch((function(){D.Am.warn("\u26d4\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435, \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u26d4")}));var n},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438\u267b\ufe0f"})]},e)]})}),tn=q.Z.ul(f||(f=(0,N.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  background-image: url('https://envato-shoebox-0.imgix.net/twenty20/production/uploads/items/dfa2b296-87db-4e5f-9722-1c5a3c1721ed/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=9170463252986b38ebaf7554e22850ea');\n  border-radius: 20px/60px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 2px dashed #ffb841;\n"]))),pn=r(8560),xn=q.Z.p(m||(m=(0,N.Z)(["\n  font-size: 20px;\n  padding: 9px;\n  transform: rotate(-15deg);\n  margin-left: -20px;\n  margin-bottom: -40px;\n  font-weight: 800px;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: #e7f1e3;\n  display: inline-block;\n  width: 200px;\n  text-align: center;\n  background-image: url('https://bogatyr.club/uploads/posts/2023-06/1688104468_bogatyr-club-p-kozhanaya-zaplatka-foni-pinterest-37.jpg');\n  background-size: contain;\n  border-radius: 20px/60px;\n  border: 2px dashed #ffb841;\n"]))),cn=function(){var n=(0,pn.v9)(E);return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(xn,{children:[" ","\ud83d\udcdd\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 \u0432 \u043a\u043d\u0438\u0437\u0456: ",n.length," "]})})},dn=function(){var n=(0,L.v9)(E),e=(0,L.v9)(G),r=(0,W.Z)(n.filter((function(n){return n.name.toLowerCase().includes(e)})));return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(cn,{}),(0,P.jsx)(tn,{children:r.map((function(n){var e=n.name,r=n.number,o=n.id;return(0,P.jsx)(an,{id:o,name:e,number:r},o)}))})]})},sn=q.Z.div(h||(h=(0,N.Z)(["\n  padding: 35px 50px;\n"]))),ln=q.Z.div(w||(w=(0,N.Z)(["\n  display: flex;\n  align-items: center;\n"]))),bn=q.Z.div(v||(v=(0,N.Z)(["\n  display: flex;\n  margin-left: auto;\n"]))),un=q.Z.h2(Z||(Z=(0,N.Z)(["\n  font-weight: 800;\n  color: #444e7b;\n  margin: 0;\n  text-shadow: 2px 2px 2px #c48e06, 0 2px 2px #eee425, -2px 0 2px #ebe413,\n    0 -2px 2px #ead955, 3px 3px 2px #e6db0e, 0 3px 2px #8c1b21,\n    -3px 0 2px #dcca30, 0 -3px 2px #8c1b21, 4px 4px 2px #8c1b21,\n    0 4px 2px #f6db6d, -4px 0 2px #dcb424, 0 -4px 2px #8c1b21;\n"]))),gn=(q.Z.form(k||(k=(0,N.Z)([""]))),q.Z.label(j||(j=(0,N.Z)([""]))),q.Z.input(y||(y=(0,N.Z)([""]))),q.Z.button(z||(z=(0,N.Z)(["\n  display: flex;\n  font-size: 18px;\n  font-weight: 700;\n  align-items: center;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  padding: 10px;\n  color: #ce9612;\n  text-shadow: 2px 2px 2px #f0f0f0, 0 2px 2px #eee425, -2px 0 2px #ebe413,\n    0 -2px 2px #f4f4ee, 3px 3px 2px #e6db0e, 0 3px 2px #8c1b21,\n    -3px 0 2px #dcca30, 0 -3px 2px #e7d4d5, 4px 4px 2px #8c1b21,\n    0 4px 2px #f6db6d, -4px 0 2px #dcb424, 0 -4px 2px #8c1b21;\n\n  background: radial-gradient(\n    circle,\n    rgba(233, 179, 38, 1) 27%,\n    #5e5331 64%,\n    #dcbc6a 100%\n  );\n  margin-left: 15px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  width: 100px;\n  border-radius: 80px/80px;\n  cursor: pointer;\n\n  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  :hover,\n  :focus {\n    text-shadow: none;\n    color: #533505;\n    background-image: none;\n    background: linear-gradient(90deg, #b6a013 31%, #ecec08 60%, #dfa909 100%);\n    transform: scale(1.1);\n  }\n"])))),fn=q.Z.div(C||(C=(0,N.Z)(["\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background: radial-gradient(\n    circle,\n    rgba(60, 119, 204, 0.8) 27%,\n    rgba(160, 211, 241, 0.8) 64%,\n    rgba(68, 159, 214, 0.8) 100%\n  );\n  z-index: 666;\n"]))),mn=q.Z.div(F||(F=(0,N.Z)(["\n  border-radius: 20px/60px;\n  overflow: hidden;\n  padding-left: 30px;\n  padding-right: 30px;\n  background: radial-gradient(\n    circle,\n    rgba(60, 119, 204, 0.8) 27%,\n    rgba(160, 211, 241, 0.8) 64%,\n    rgba(68, 159, 214, 0.8) 100%\n  );\n  z-index: 666;\n"]))),hn=function(n){var e=n.children,r=n.onCloseModal;return(0,O.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]),(0,P.jsx)(fn,{onClick:function(n){var e=n.target;n.currentTarget===e&&r()},children:(0,P.jsx)(mn,{children:e})})},wn=function(){var n=(0,L.I0)(),e=(0,L.v9)(I),r=(0,L.v9)(_),o=(0,O.useState)(!1),a=(0,A.Z)(o,2),t=a[0],i=a[1];(0,O.useEffect)((function(){n((0,T.yF)())}),[n]);var p=function(){i((function(n){return!n}))};return(0,P.jsxs)(sn,{children:[e&&!r&&(0,P.jsx)("b",{children:"\ud83d\ude9b\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u044e...\ud83d\udea7"}),(0,P.jsxs)(M.$,{children:[(0,P.jsxs)(ln,{children:[(0,P.jsx)(un,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \ud83d\udcd1"}),(0,P.jsxs)(bn,{children:[(0,P.jsx)(V,{}),(0,P.jsx)(gn,{type:"button",onClick:p,children:"\u041d\u043e\u0432\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u2b50"})]})]}),(0,P.jsx)(dn,{})]}),t&&(0,P.jsx)(hn,{children:(0,P.jsx)(M.$,{title:"Add New Contact",children:(0,P.jsx)(Q,{onCloseModal:p})}),onCloseModal:p})]})}},9195:function(n,e,r){r.d(e,{$:function(){return d}});var o,a,t=r(168),i=r(7686),p=i.Z.section(o||(o=(0,t.Z)(["\n  margin: auto;\n  padding: 15px 15px;\n  border-radius: 20px/60px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  background-image: url('https://img4.cliparto.com/pic/xl/186155/6359708-jeans-torn-denim-texture.jpg');\n  border: 2px dashed #ffb841;\n\n"]))),x=i.Z.h2(a||(a=(0,t.Z)(["\n  font-weight: 800;\n  font-size: 40px;\n  color: #e3dcea;\n  letter-spacing: 5px;\n  text-shadow: \n    2px 2px 2px #c48e06, \n    0 2px 2px #8c1b21, \n    -2px 0 2px #8c1b21, \n     0 -2px 2px #8c1b21,    \n    3px 3px 2px #8c1b21, \n    0 3px 2px #8c1b21, \n    -3px 0 2px #8c1b21, \n    0 -3px 2px #8c1b21,\n    4px 4px 2px #8c1b21, \n    0 4px 2px #8c1b21, \n    -4px 0 2px #8c1b21, \n    0 -4px 2px #8c1b21;\n  \n  text-align: center;\n  margin: 0;\n"]))),c=r(3329),d=function(n){var e=n.title,r=n.children;return(0,c.jsxs)(p,{children:[e&&(0,c.jsx)(x,{children:e}),r]})}}}]);
//# sourceMappingURL=574.9f1a1860.chunk.js.map