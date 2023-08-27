"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{4544:function(n,e,r){r.r(e),r.d(e,{default:function(){return Zn}});var o,a,i,t,d,c,s,p,x,l,u,b,g,f,m,h,v,w,Z,j,k,y,z,C,F,A,O=r(9439),L=r(2791),E=r(3855),N=r(9015),T=r(208),I=function(n){return n.contacts.items},M=function(n){return n.contacts.isLoading},G=function(n){return n.contacts.error},_=function(n){return n.filters},q=r(9195),S=r(9085),B=(r(5462),r(168)),$=r(7686),H=$.Z.button(o||(o=(0,B.Z)(["\n  display: flex;\n  font-size: 16px;\n  font-weight: 700;\n  align-items: center;\n  margin: 15px 5px;\n  color: #f7e32d;\n  padding: 9px;\n  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXq-y8Yv0QvBh-kGT1LOtxiOxN1FRnb4-3gA&usqp=CAU');\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 20px/60px;\n  cursor: pointer;\n  border: 2px dashed #ffb841;\n\n  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);\n\n  :hover,\n  :focus {\n    color: #a2e2f3;\n    border: 2px dashed #e3620c;\n    transform: scale(1.1);\n    background-image: none;\n    background-color: green;\n  }\n"]))),K=r(3329),P=function(){return(0,K.jsx)(H,{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\ud83c\udfb8 "})},R=$.Z.section(a||(a=(0,B.Z)(["\n  background: #74500c;\n  border-radius: 20px/60px;\n  border: 2px dashed #ffb841;\n"]))),D=$.Z.form(i||(i=(0,B.Z)(["\n  display: flex;\n  background-image: url('https://img.freepik.com/free-vector/jeans-texture-background_1053-120.jpg?w=740&t=st=1692460341~exp=1692460941~hmac=8328fc0d4ee8de30fcace9f0f45c61ac624d184733abdaa77901038d0c682448');\n  border-radius: 20px/60px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  width: 800px;\n  justify-content: space-around;\n  padding: 12px 7px;\n"]))),Q=$.Z.label(t||(t=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  margin-top: 9px;\n  margin-left: 7px;\n  font-weight: 600;\n  color: #ebeff6;\n  padding-left: 10px;\n  font-style: italic;\n  border-bottom: none;\n  border-radius: 20px/60px;\n  margin: 5px;\n"]))),U=$.Z.input(d||(d=(0,B.Z)(["\n  border-radius: 20px/60px;\n  width: 200px;\n  padding: 22px 36px;\n  color: #262fd4;\n  background: linear-gradient(\n    90deg,\n    #9dbce6 31%,\n    rgba(160, 211, 241, 1) 66%,\n    rgba(68, 159, 214, 1) 100%\n  );\n  margin-right: 7px;\n  margin-bottom: 7px;\n\n  :placeholder {\n    color: #314286;\n  }\n  &:hover,\n  &:focus {\n    background: linear-gradient(90deg, #dd90e5 31%, #4ba6da 66%, #2b89c3 100%);\n  }\n"]))),X=function(n){var e=n.onCloseModal,r=(0,E.I0)(),o=(0,E.v9)(I);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(S.Ix,{position:"top-left",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),(0,K.jsxs)(D,{onSubmit:function(n){n.preventDefault();var a=n.target,i=a.elements.name.value,t=a.elements.number.value;return o.some((function(n){return n.name===i}))?S.Am.warn("\ud83e\udd41 \u0423\u0432\u0430\u0436\u043d\u0456\u0448\u0435, ".concat(i,"  \u0432\u0436\u0435 \u0404 \u0432 \u043a\u043e\u043d\u0422\u0410\u041a\u0442\u0430\u0445 \ud83e\udd41")):o.some((function(n){return n.number===t}))?S.Am.warn("\ud83e\udd41 \u0423\u0432\u0430\u0436\u043d\u0456\u0448\u0435, ".concat(t,"  \u0432\u0436\u0435 \u0404 \u0432 \u043a\u043e\u043d\u0422\u0410\u041a\u0442\u0430\u0445 \ud83e\udd41")):(r((0,T.uK)({name:i,number:t.toString()})).unwrap().then((function(n){S.Am.success("\ud83e\udd41".concat(n.name," \u0442\u0435\u043f\u0435\u0440 \u0432 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u0445\ud83e\udd41"))})).catch((function(){S.Am.warn("\u26d4\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435, \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430\u26d4")})),e(),void a.reset())},autoComplete:"off",children:[(0,K.jsx)(R,{children:(0,K.jsxs)(Q,{children:["\u0406\u043c'\u044f \ud83d\udccc",(0,K.jsx)(U,{type:"text",name:"name",title:"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448\u0435 \u043b\u0456\u0442\u0435\u0440\u0438, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u0431\u0456\u043b\u0438...",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f...",value:o.name})]})}),(0,K.jsx)(R,{children:(0,K.jsxs)(Q,{children:["\u041d\u043e\u043c\u0435\u0440 \ud83d\udcde",(0,K.jsx)(U,{type:"tel",name:"number",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u0437 \u0446\u0438\u0444\u0440 \u0456 \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043f\u0440\u043e\u0431\u0456\u043b\u0438, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u0456 \u0434\u0443\u0436\u043a\u0438 \u0442\u0430 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044f \u0437 +",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443...",value:o.number})]})}),(0,K.jsx)(P,{})]})]})},Y=r(9994),J=$.Z.section(c||(c=(0,B.Z)(["\n  background: #74500c;\n  border-radius: 20px/60px;\n  border: 2px dashed #ffb841;\n"]))),V=$.Z.label(s||(s=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  margin-top: 9px;\n  margin-left: 7px;\n  font-weight: 600;\n  color: #ebeff6;\n  padding-left: 10px;\n  font-style: italic;\n  border: 2px dashed #ffb841;\n  border-radius: 20px/60px;\n  margin-bottom: 7px;\n  margin-right: 7px;\n"]))),W=$.Z.input(p||(p=(0,B.Z)(["\n  border-radius: 20px/60px;\n  width: 250px;\n  padding: 22px 36px;\n  color: #262fd4;\n  background: linear-gradient(\n    90deg,\n    #9dbce6 31%,\n    rgba(160, 211, 241, 1) 66%,\n    rgba(68, 159, 214, 1) 100%\n  );\n  margin: 5px;\n  margin-right: 15px;\n  border-style: none;\n\n  :placeholder {\n    color: #314286;\n  }\n  &:hover,\n  &:focus {\n    background: linear-gradient(90deg, #dd90e5 31%, #4ba6da 66%, #2b89c3 100%);\n  }\n"]))),nn=function(){var n=(0,E.I0)(),e=(0,E.v9)(_);return(0,K.jsx)(J,{children:(0,K.jsx)(V,{children:(0,K.jsx)(W,{type:"text",name:"filter",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443",value:e,onChange:function(e){var r=e.currentTarget.value.toLowerCase().trim();n((0,Y.p)(r))}})})})},en=r(3433),rn=$.Z.li(x||(x=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n\n  padding: 20px 20px;\n\n  border-radius: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n"]))),on=$.Z.p(l||(l=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  color: #f4e8ac;\n  font-size: 16px;\n  background-color: #c38e2a;\n  border: 2px dashed #ffb841;\n  margin: 0;\n  font-weight: 500;\n  border-radius: 20px/60px;\n  padding: 7px;\n"]))),an=$.Z.p(u||(u=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  color: #665813;\n  font-size: 14px;\n  background-color: #e2b96d;\n  border: 2px dashed #ffb841;\n  margin: 0;\n  font-weight: 500;\n  border-radius: 20px/60px;\n  padding: 7px;\n"]))),tn=$.Z.button(b||(b=(0,B.Z)(["\n  display: flex;\n  font-size: 16px;\n  font-weight: 500;\n  align-items: center;\n  margin: 15px 5px;\n  color: #f7e32d;\n  padding: 5px;\n  background-color: #74500c;\n\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 20px/60px;\n  cursor: pointer;\n  border: 2px dashed #ffb841;\n\n  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);\n\n  :hover,\n  :focus {\n    color: #a2e2f3;\n    border: 2px dashed #e3620c;\n    transform: scale(1.1);\n    background-image: none;\n    background-color: #e11212;\n  }\n"]))),dn=($.Z.button(g||(g=(0,B.Z)(["\n  font-weight: 700;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  padding: 0.563em 1em;\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 8px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n\n    > svg {\n      fill: #000000;\n    }\n  }\n"]))),function(n){var e=n.id,r=n.name,o=n.number,a=(0,E.I0)();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(S.Ix,{position:"top-left",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),(0,K.jsxs)(rn,{children:[(0,K.jsxs)(on,{children:["\ud83d\udcd5",r]}),(0,K.jsxs)(an,{children:["\u260e\ufe0f",o]}),(0,K.jsx)(tn,{onClick:function(){return n=e,void a((0,T.GK)(n)).unwrap().then((function(n){return S.Am.success("\ud83e\udd41".concat(n.name," \u0442\u0435\u043f\u0435\u0440 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e"))})).catch((function(){S.Am.warn("\u26d4\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435, \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u26d4")}));var n},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438\u267b\ufe0f"})]},e)]})}),cn=r(8560),sn=$.Z.p(f||(f=(0,B.Z)(["\n  font-size: 20px;\n  padding: 9px;\n  transform: rotate(-15deg);\n  margin-left: -20px;\n  margin-bottom: -40px;\n  font-weight: 800px;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: #eff0f4;\n  display: inline-block;\n  width: 100px;\n  text-align: center;\n  background-image: url('https://viplabels.ru/images/birki-na-odejdu.jpg');\n  background-size: contain;\n"]))),pn=($.Z.span(m||(m=(0,B.Z)(["\n  background-color: #100f0f;\n  border-radius: 20px/60px;\n  opacity: 0.8;\n"]))),function(){var n=(0,cn.v9)(I);return(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(sn,{children:["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432 \u0432 \u043a\u043d\u0438\u0437\u0456: ",n.length,"\ud83d\udcdd"]})})}),xn=$.Z.ul(h||(h=(0,B.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  background-image: url('https://envato-shoebox-0.imgix.net/twenty20/production/uploads/items/dfa2b296-87db-4e5f-9722-1c5a3c1721ed/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=9170463252986b38ebaf7554e22850ea');\n  border-radius: 20px/60px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  border: 2px dashed #ffb841;\n"]))),ln=function(){var n=(0,E.v9)(I),e=(0,E.v9)(_),r=(0,en.Z)(n.filter((function(n){return n.name.toLowerCase().includes(e)})));return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(pn,{}),(0,K.jsx)(xn,{children:r.map((function(n){var e=n.name,r=n.number,o=n.id;return(0,K.jsx)(dn,{id:o,name:e,number:r},o)}))})]})},un=$.Z.div(v||(v=(0,B.Z)(["\n  padding: 35px 50px;\n"]))),bn=$.Z.div(w||(w=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n"]))),gn=$.Z.div(Z||(Z=(0,B.Z)(["\n  display: flex;\n  margin-left: auto;\n"]))),fn=$.Z.h2(j||(j=(0,B.Z)(["\n  font-weight: 800;\n  color: #444e7b;\n  margin: 0;\n  text-shadow: 2px 2px 2px #c48e06, 0 2px 2px #eee425, -2px 0 2px #ebe413,\n    0 -2px 2px #ead955, 3px 3px 2px #e6db0e, 0 3px 2px #e3cf1a,\n    0 4px 2px #c3a320, -4px 0 2px #e2a115, 0 -4px 2px #daa616;\n"]))),mn=($.Z.form(k||(k=(0,B.Z)([""]))),$.Z.label(y||(y=(0,B.Z)([""]))),$.Z.input(z||(z=(0,B.Z)([""]))),$.Z.button(C||(C=(0,B.Z)(["\n  display: flex;\n  font-size: 18px;\n  font-weight: 700;\n  align-items: center;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  padding: 10px;\n  color: #e9e8e0;\n  text-shadow: 2px 2px 2px #c48e06, 0 2px 2px #d7cd0d, -2px 0 2px #ebe413;\n  background: radial-gradient(\n    circle,\n    rgba(233, 179, 38, 1) 27%,\n    #5e5331 64%,\n    #dcbc6a 100%\n  );\n  margin-left: 15px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  width: 90px;\n  border-radius: 100px/100px;\n  cursor: pointer;\n  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);\n  :hover,\n  :focus {\n    text-shadow: none;\n    background-image: none;\n    background: linear-gradient(90deg, #b6a013 31%, #ecec08 60%, #dfa909 100%);\n    transform: scale(1.05);\n    color: #533505;\n  }\n"])))),hn=$.Z.div(F||(F=(0,B.Z)(["\n  position: fixed;\n  display: flex;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background: radial-gradient(\n    circle,\n    rgba(60, 119, 204, 0.8) 27%,\n    rgba(160, 211, 241, 0.8) 64%,\n    rgba(68, 159, 214, 0.8) 100%\n  );\n  z-index: 666;\n"]))),vn=$.Z.div(A||(A=(0,B.Z)(["\n  border-radius: 20px/60px;\n  overflow: hidden;\n  padding-left: 30px;\n  padding-right: 30px;\n  z-index: 666;\n"]))),wn=function(n){var e=n.children,r=n.onCloseModal;return(0,L.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]),(0,K.jsx)(hn,{onClick:function(n){var e=n.target;n.currentTarget===e&&r()},children:(0,K.jsx)(N.E.div,{exit:{x:-300,opacity:0},className:"box",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.5,ease:[0,.71,.2,1.01]},children:(0,K.jsx)(vn,{children:e})},vn)})},Zn=function(){var n=(0,E.I0)(),e=(0,E.v9)(M),r=(0,E.v9)(G),o=(0,L.useState)(!1),a=(0,O.Z)(o,2),i=a[0],t=a[1];(0,L.useEffect)((function(){n((0,T.yF)())}),[n]);var d=function(){t((function(n){return!n}))};return(0,K.jsx)(N.E.div,{className:"box",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.5,ease:[0,.71,.2,1.01]},children:(0,K.jsxs)(un,{children:[e&&!r&&(0,K.jsx)("b",{className:"loadMesg",children:"\ud83d\ude9b\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u044e...\ud83d\udea7"}),(0,K.jsxs)(q.$,{children:[(0,K.jsxs)(bn,{children:[(0,K.jsx)(fn,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \ud83d\udcd1"}),(0,K.jsxs)(gn,{children:[(0,K.jsx)(nn,{}),(0,K.jsx)(mn,{type:"button",onClick:d,children:"\u041d\u043e\u0432\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u2b50"})]})]}),(0,K.jsx)(ln,{})]}),i&&(0,K.jsx)(wn,{children:(0,K.jsx)(q.$,{title:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:(0,K.jsx)(X,{onCloseModal:d})}),onCloseModal:d})]})})}},9195:function(n,e,r){r.d(e,{$:function(){return p}});var o,a,i=r(168),t=r(7686),d=t.Z.section(o||(o=(0,i.Z)(["\n  margin: auto;\n  padding: 15px 15px;\n  border-radius: 20px/60px;\n  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,\n    10px 10px 10px 2px rgba(34, 60, 80, 0.2);\n  background-image: url('https://img4.cliparto.com/pic/xl/186155/6359708-jeans-torn-denim-texture.jpg');\n  border: 2px dashed #ffb841;\n"]))),c=t.Z.h2(a||(a=(0,i.Z)(["\n  font-weight: 800;\n  font-size: 40px;\n  color: #e3dcea;\n  letter-spacing: 5px;\n  text-shadow: 7px 1px 2px rgba(30, 128, 161, 0.5);\n  font-family: Oswald;\n  text-align: center;\n  margin: 0;\n"]))),s=r(3329),p=function(n){var e=n.title,r=n.children;return(0,s.jsxs)(d,{children:[e&&(0,s.jsx)(c,{children:e}),r]})}}}]);
//# sourceMappingURL=544.b5313690.chunk.js.map