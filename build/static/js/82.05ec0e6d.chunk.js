"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[82],{9082:(e,l,a)=>{a.r(l),a.d(l,{default:()=>r});var n=a(6213),s=a(5043),i=a(2684),t=a(7149),o=a(579);function r(){var e,l,a,r,u,d,c,v,p;const{singlepurchase:h,fetchSinglePurchase:m}=(0,s.useContext)(i.A),[x,g]=(0,s.useState)(!1),[j,f]=(0,s.useState)(h),[w,y]=(0,s.useState)([]),[N,b]=(0,s.useState)(""),[C,S]=(0,s.useState)(""),[k,E]=(0,s.useState)([]),[F,A]=(0,s.useState)([]),[$,q]=(0,s.useState)([]),L="https://backend-mqr6.onrender.com",[I,D]=(0,s.useState)([]),{userrole:_}=(0,s.useContext)(i.A);(0,s.useEffect)((()=>{(async()=>{try{let e=localStorage.getItem("token");const l=await n.A.get(`${L}/api/product/productnames`,{headers:{authtoken:e}});A(l.data.productNames)}catch(e){console.error("Error fetching products:",e)}})(),(async()=>{try{let e=localStorage.getItem("token");const l=await n.A.get(`${L}/api/supplier/suppliernames`,{headers:{authtoken:e}});y(l.data.supplierNames)}catch(e){console.error("Error fetching suppliers:",e)}})()}),[]),(0,s.useEffect)((()=>{q(N?F.filter((e=>e.toLowerCase().includes(N.toLowerCase()))):[])}),[N,F]),(0,s.useEffect)((()=>{E(C?w.filter((e=>e.toLowerCase().includes(C.toLowerCase()))):[])}),[C,w]);const P=(e,l,a)=>{const{value:n}=e.target,s={...j};if("serialNumbers"===l){const e=n.split(",").map((e=>e.trim()));s.purchase.name[a][l]=e}else s.purchase.name[a][l]=n,"quantity"===l||"rateper"===l?B(a):"amount"===l&&Q(a);f(s)},B=e=>{var l,a;const n={...j},s=parseFloat((null===(l=n.purchase.name[e])||void 0===l?void 0:l.quantity)||0)*parseFloat((null===(a=n.purchase.name[e])||void 0===a?void 0:a.rateper)||0);n.purchase.name[e].amount=s,f(n)},Q=e=>{var l,a;const n={...j},s=parseFloat((null===(l=n.purchase.name[e])||void 0===l?void 0:l.quantity)||0),i=parseFloat((null===(a=n.purchase.name[e])||void 0===a?void 0:a.amount)||0);if(s>0){const l=i/s;n.purchase.name[e].rateper=l}else n.purchase.name[e].rateper="";f(n)},z=async e=>{try{let l=localStorage.getItem("token");await n.A.put(`${L}/api/purchase/updatepurchase/${null===e||void 0===e?void 0:e.purchase._id}`,null===e||void 0===e?void 0:e.purchase,{headers:{authtoken:l}}),alert("Purchase updated successfully"),m(null===e||void 0===e?void 0:e.purchase._id)}catch(l){console.error(l),alert("Error updating purchase"),m(null===e||void 0===e?void 0:e.purchase._id)}},Y=e=>{g(!1),window.confirm("Do you really want to delete?")&&(async e=>{try{let l=localStorage.getItem("token");await n.A.delete(`${L}/api/purchase/deletepurchase/${e}`,{headers:{authtoken:l}}),m(e)}catch(l){console.error(l)}})(e)};let G=null===(l=new Date(null===j||void 0===j||null===(e=j.purchase)||void 0===e?void 0:e.billdate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"}).split("/"))||void 0===l?void 0:l.join("-");return console.log(null===j||void 0===j?void 0:j.purchase),(0,o.jsx)("div",{className:" ",children:(0,o.jsxs)("div",{className:"mt-4 lg:w-full",children:[(0,o.jsxs)("div",{className:"form-inline flex relative justify-between",children:[(0,o.jsx)("div",{className:"w-[33%] font-semibold",children:"Supplier"}),(0,o.jsx)("div",{className:"w-[33%] font-semibold",children:"Bill No"}),(0,o.jsx)("div",{className:"w-[33%] font-semibold",children:"Bill Date"}),(0,o.jsx)("div",{children:_.canEdit&&x?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:async()=>{try{await z(j),g(!1)}catch(e){console.error("Failed to update purchase",e)}},children:(0,o.jsx)(t.Qxc,{})}),(0,o.jsx)("button",{onClick:()=>g(!1),children:"Cancel"})]}):(0,o.jsx)(o.Fragment,{children:_.canEdit&&(0,o.jsx)("button",{onClick:()=>{f(h),g(!0)},children:(0,o.jsx)(t.Yvo,{})})})})]}),(0,o.jsxs)("div",{className:"form-inline flex relative justify-between",children:[(0,o.jsx)("div",{className:"w-[33%]",children:_.canEdit&&x?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"text",value:(null===j||void 0===j||null===(a=j.purchase)||void 0===a?void 0:a.Supplier)||"",onChange:e=>{((e,l)=>{const a=e.target.value;if(w.some((e=>e.toLowerCase().includes(a.toLowerCase())))){const e={...j};e.purchase[l]=a,f(e)}})(e,"Supplier"),S(e.target.value)}}),k.length>0&&(0,o.jsx)("div",{className:"absolute bg-gray-300 px-3 rounded-md",children:(0,o.jsx)("div",{className:"suggestions",children:k.map(((e,l)=>(0,o.jsx)("div",{className:"suggestion cursor-pointer",onClick:()=>(e=>{f({...j,purchase:{...null===j||void 0===j?void 0:j.purchase,Supplier:e}}),E([])})(e),children:e},l)))})})]}):null===h||void 0===h||null===(r=h.purchase)||void 0===r?void 0:r.Supplier}),(0,o.jsx)("div",{className:"w-[33%]",children:x?(0,o.jsx)("input",{type:"text",value:(null===j||void 0===j||null===(u=j.purchase)||void 0===u?void 0:u.billno)||"",onChange:e=>P(e,"billno")}):null===h||void 0===h||null===(d=h.purchase)||void 0===d?void 0:d.billno}),(0,o.jsx)("div",{className:"w-[33%]",children:x?(0,o.jsx)("input",{type:"date",value:null===G||void 0===G||null===(c=G.split("-"))||void 0===c||null===(v=c.reverse())||void 0===v?void 0:v.join("-"),onChange:e=>P(e,"billdate")}):G}),_.canDelete&&(0,o.jsx)("div",{className:"cursor-pointer",onClick:()=>{var e;return Y(null===h||void 0===h||null===(e=h.purchase)||void 0===e?void 0:e._id)},children:(0,o.jsx)(t.b6i,{})})]}),(0,o.jsxs)("div",{className:"form-inline flex relative mt-6 justify-between",children:[(0,o.jsx)("div",{className:"w-[20%] font-semibold",children:"Product Name"}),(0,o.jsx)("div",{className:"w-[20%] font-semibold",children:"Quantity"}),(0,o.jsx)("div",{className:"w-[20%] font-semibold",children:"rateper"}),(0,o.jsx)("div",{className:"w-[20%] font-semibold",children:"Amount"}),(0,o.jsx)("div",{className:"w-[20%] font-semibold",children:"Serial Numbers"})]}),null===h||void 0===h||null===(p=h.purchase)||void 0===p?void 0:p.name.map(((e,l)=>{var a,s,i,t,r,u,d,c,v,p,m,g,w,y,N,C,S,k,E,F,A;return(0,o.jsxs)("div",{className:"form-inline flex relative mt-3 justify-between",children:[(0,o.jsx)("div",{className:"w-[20%]",children:x?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{onFocus:()=>D(l),type:"text",value:(null===j||void 0===j||null===(a=j.purchase)||void 0===a||null===(s=a.name[l])||void 0===s?void 0:s.productname)||"",onChange:e=>{P(e,"productname",l),b(e.target.value)}}),I===l&&$.length>0&&(0,o.jsx)("div",{className:"absolute bg-gray-300 px-3 rounded-md",children:(0,o.jsx)("div",{className:"suggestions bg-gray-300 absolute z-30 h-36 overflow-y-auto",children:$.map(((e,a)=>(0,o.jsx)("div",{className:"suggestion cursor-pointer",onClick:()=>(async(e,l)=>{try{let a=localStorage.getItem("token");const s=(await n.A.get(`${L}/api/product/fetchsingleproduct/${e}`,{headers:{authtoken:a}})).data.othername1,i={...j};i.purchase.name[l]={...i.purchase.name[l],productname:s.name,productid:s._id},f(i),console.log(i),q([])}catch(a){console.error("Error fetching product details:",a)}})(e,l),children:e},a)))})})]}):null===h||void 0===h||null===(i=h.purchase)||void 0===i||null===(t=i.name[l])||void 0===t?void 0:t.productname}),(0,o.jsx)("div",{className:"w-[20%]",children:x?(0,o.jsx)("input",{type:"number",value:(null===j||void 0===j||null===(r=j.purchase)||void 0===r||null===(u=r.name[l])||void 0===u?void 0:u.quantity)||"",onChange:e=>P(e,"quantity",l)}):null===h||void 0===h||null===(d=h.purchase)||void 0===d||null===(c=d.name[l])||void 0===c?void 0:c.quantity}),(0,o.jsx)("div",{className:"w-[20%]",children:x?(0,o.jsx)("input",{type:"number",value:(null===j||void 0===j||null===(v=j.purchase)||void 0===v||null===(p=v.name[l])||void 0===p?void 0:p.rateper)||"",onChange:e=>P(e,"rateper",l)}):null===h||void 0===h||null===(m=h.purchase)||void 0===m||null===(g=m.name[l])||void 0===g?void 0:g.rateper}),(0,o.jsx)("div",{className:"w-[20%]",children:x?(0,o.jsx)("input",{type:"number",value:(null===j||void 0===j||null===(w=j.purchase)||void 0===w||null===(y=w.name[l])||void 0===y?void 0:y.amount)||"",onChange:e=>P(e,"amount",l)}):null===h||void 0===h||null===(N=h.purchase)||void 0===N||null===(C=N.name[l])||void 0===C?void 0:C.amount}),(0,o.jsx)("div",{className:"w-[20%]",children:x?(0,o.jsx)("input",{type:"text",value:(null===j||void 0===j||null===(S=j.purchase)||void 0===S||null===(k=S.name[l])||void 0===k||null===(E=k.serialNumbers)||void 0===E?void 0:E.join(", "))||"",onChange:e=>P(e,"serialNumbers",l)}):((null===h||void 0===h||null===(F=h.purchase)||void 0===F||null===(A=F.name[l])||void 0===A?void 0:A.serialNumbers)||[]).join(", ")})]},l)}))]})})}}}]);
//# sourceMappingURL=82.05ec0e6d.chunk.js.map