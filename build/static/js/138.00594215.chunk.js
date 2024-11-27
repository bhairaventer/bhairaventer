"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[138],{3138:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var l=r(6213),s=r(5043),a=r(5475),i=r(7149),o=r(2684),d=r(5369),c=r(579);function n(e){var t,r,n;const[x,p]=(0,s.useState)(""),[h,u]=(0,s.useState)(""),m="https://backend-mqr6.onrender.com",{updateOrderStatus:b,setexceldata:v,setsingleorderid:N,userrole:w}=(0,s.useContext)(o.A),[j,g]=(0,s.useState)(""),[f,y]=(0,s.useState)(""),[k,S]=(0,s.useState)(!1),[C,_]=(0,s.useState)(1),[D,A]=(0,s.useState)(""),[I,P]=(0,s.useState)(!0),[$,L]=(0,s.useState)(!0),[O,T]=(0,s.useState)([]),[Q,R]=(0,s.useState)(null);let[E,z]=(0,s.useState)({billno:"",billdate:"",LRNO:"",shippingcharges:"",Trackingid:"",Courier:"",Deliverybydate:""});(0,s.useEffect)((()=>{B(C)}),[]);const M=()=>{C>1&&_((e=>{const t=e-1;return B(t),t}))},W=()=>{Math.ceil(D/10),I&&_((e=>{const t=e+1;return B(t),t}))},B=async e=>{let t=localStorage.getItem("token");try{const s=await l.A.get(`${m}/api/order/fetchallordersforadmin/RTD/${e}`,{method:"GET",headers:{authtoken:t}});var r;if(A(s.data.totalOrder),0===s.data.orders.length)P(!1),T(s.data);else await v(null===s||void 0===s||null===(r=s.data)||void 0===r?void 0:r.orders),T(s.data),P(!0);L(!1)}catch(Q){R(Q),L(!1)}},q=Math.ceil(D/10),F=(0,s.useRef)(null),[G,K]=(0,s.useState)(0),[U,H]=(0,s.useState)(null);let J=(e,t)=>{g(e),y(t),S(!0)};const V=async()=>{let e=localStorage.getItem("token");try{var t,r;const s=await l.A.get(`${m}/api/order/trackingid/${h}`,{params:{status:"Shipped"},headers:{authtoken:e}});console.log("API Response:",s.data),await p(s.data),await b("Shipped",null===s||void 0===s||null===(t=s.data)||void 0===t||null===(r=t.order)||void 0===r?void 0:r._id,E),B(C)}catch(Q){console.error("Error fetching data:",Q)}};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:" ",children:[(0,c.jsxs)("div",{className:"mt-2 space-x-2",children:[(0,c.jsx)("input",{type:"text",name:"name",onChange:e=>{u(e.target.value)},value:h,onKeyDown:e=>{"Enter"===e.key&&V()},placeholder:"Scan to Shipped",className:" px-3 py-1 border-black border-[2px] outline-none rounded-md"}),(0,c.jsx)("button",{onClick:()=>{V()},className:"bg-blue-500 rounded-md px-2 uppercase text-white border-black border-[1px] ",children:"Search"})]}),(0,c.jsx)("div",{className:"text-red-600 text-[12px]",children:null===x||void 0===x?void 0:x.error}),(0,c.jsxs)("div",{className:"  mt-3 w-[1450px] h-[510px]",children:[(0,c.jsxs)("div",{className:"bg-[#464646] flex sticky top-3 z-20  text-white mb-2  px-2 items-center lg: ",children:[(0,c.jsx)("div",{className:"  w-[100px]  px-3 py-1 ",children:"Bill No"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[110px]  px-3 py-1 ",children:"Order Id"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Product"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Quntity"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Amount"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"State"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Platform"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[180px]  px-3 py-1 ",children:"Dispatch by date"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[180px]  px-3 py-1 ",children:"Courier"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[140px]  px-3 py-1 ",children:"Tracking ID"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"LR NO."})]}),null===O||void 0===O||null===(t=O.orders)||void 0===t?void 0:t.map((e=>{let t=new Date(e.Dispatchbydate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"});return t=t.split("/").join("-"),(0,c.jsxs)("div",{className:"bg-[#f2f2f2] flex  cursor-pointer text-black   px-2 items-center ",children:[(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Billno}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[110px] overflow-x-auto px-3 py-1 ",children:e.OrderId}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Product}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Quntity}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Salesamount}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.State}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Platform.name}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[180px] overflow-x-auto px-3 py-1 ",children:t}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[180px] overflow-x-auto px-3 py-1 ",children:e.courier}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[140px] overflow-x-auto px-3 py-1 ",children:e.trackingnumber}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>N(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Lrno}),U===e._id&&(0,c.jsx)("div",{className:" sticky right-0 flex gap-2     z-10",children:(0,c.jsxs)("div",{className:" top-[-19px]  absolute right-28  bg-white  border-black border-[1px] p-2  ",children:[(0,c.jsxs)("div",{className:"opstion  ",children:[(0,c.jsx)("option",{className:`text-[12px] cursor-pointer ${"Shipped"==j&&"bg-blue-400"}`,onClick:()=>{J("Shipped",e._id)},value:"pending",children:"Shipped"}),(0,c.jsx)("option",{className:`text-[12px] cursor-pointer ${"Not Sent"==j&&"bg-blue-400"}`,onClick:()=>{J("Not Sent",e._id)},value:"delivered",children:"Not Sent"}),(0,c.jsx)("option",{className:`text-[12px] cursor-pointer ${"Cancel"==j&&"bg-blue-400"}`,onClick:()=>{J("Cancel",e._id)},value:"canceled",children:"Cancel"})]}),(0,c.jsx)("div",{className:"flex justify-center mt-1",children:(0,c.jsx)("button",{className:"text-[10px] bg-blue-600 rounded-full   items-center   text-white px-2  ",onClick:()=>{(async(e,t)=>{await b(e,t,E),B(C)})(j,f)},children:"Update"})})]})}),(0,c.jsx)("div",{className:" sticky right-0 flex gap-2  bottom-2 z-10",children:(0,c.jsx)("div",{className:"bg-black rounded-full w-6 h-6 flex justify-center items-center  absolute bottom-3 right-16 text-white     text-[16px]  ",onClick:()=>(e=>{H((t=>t===e?null:e))})(e._id),children:(0,c.jsx)(i.Qxc,{})})})]},e._id)}))]}),(0,c.jsxs)("div",{className:"    absolute md:w-[80%]  lg:w-[85%]   w-[90%] mt-10    ",children:[(0,c.jsxs)("div",{className:"text-white w-[100%] pb-5 flex gap-10 justify-center ",children:[1!==C?(0,c.jsxs)("button",{onClick:()=>{M()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(d.vpL,{})," Previous"]})]}):(0,c.jsxs)("button",{disabled:!0,onClick:()=>{M()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(d.vpL,{})," Previous"]})]}),(0,c.jsx)("div",{className:"text-black border-black border-[1px] px-2 rounded-md",children:C}),C!==Math.ceil(D/10)?(0,c.jsxs)("button",{onClick:()=>{W()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,c.jsx)(d.QyA,{})]})," "]}):(0,c.jsxs)("button",{disabled:!0,onClick:()=>{W()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,c.jsx)(d.QyA,{})]})," "]})]}),(0,c.jsx)("div",{className:"w-[100%] pb-5 flex gap-10  justify-center ",children:(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)("button",{onClick:()=>{if(F.current){const e=G-50;K(e),F.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 mb-2 py-1 rounded-md mr-2",disabled:G<=0,children:"<"}),(0,c.jsx)("div",{ref:F,className:"relative overflow-x-auto hide-scrollbar",style:{maxWidth:"150px",whiteSpace:"nowrap"},children:(0,c.jsx)("div",{className:"flex gap-2",children:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const l=[];for(let s=e;s<t;s+=r)l.push(s);return l}(1,q+1).map((e=>(0,c.jsx)("div",{onClick:()=>{(e=>{I&&_((t=>{const r=e;return B(r),r}))})(e)},className:"border-black text-center cursor-pointer border-[1px] px-2",style:{width:50},children:e},e)))})}),(0,c.jsx)("button",{onClick:()=>{if(F.current){const e=G+50;K(e),F.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 mb-2 rounded-md ml-2",disabled:G>=(null===(r=F.current)||void 0===r?void 0:r.scrollWidth)-(null===(n=F.current)||void 0===n?void 0:n.clientWidth),children:">"})]})})]})]})})}}}]);
//# sourceMappingURL=138.00594215.chunk.js.map