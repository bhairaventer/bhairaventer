"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[257],{9257:(e,o,s)=>{s.r(o),s.d(o,{default:()=>i});var t=s(5475),n=s(3216),r=s(5043),a=s(6213),l=s(579);function i(e){document.body.style.backgroundColor="#31344f";const o="https://backend-mqr6.onrender.com";console.log(o);const s=(0,n.Zp)(),i=localStorage.getItem("token");(0,r.useEffect)((()=>{i&&s("/home")}),[s,i]);const[d,c]=(0,r.useState)((0,l.jsx)("div",{})),[u,m]=(0,r.useState)({password:"",email:""}),g=e=>{m({...u,[e.target.name]:e.target.value})};return i?(0,l.jsx)("div",{className:"text-white text-center",children:"Loading..."}):(0,l.jsx)("div",{className:"flex items-center w-full justify-center h-screen bg-gray-900",children:(0,l.jsxs)("div",{className:"w-full max-w-sm p-8 bg-white rounded-lg shadow-lg",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-center text-gray-800",children:"Login"}),(0,l.jsx)("div",{className:"text-red-500 text-[12px] ",children:d}),(0,l.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const{email:t,password:n}=u;try{const e=(await a.A.post(`${o}/api/auth/login`,{email:t,password:n})).data;console.log(e),e.success?(console.log(e),localStorage.setItem("token",e.authtoken),s("/home")):(c(e.message),console.log(e))}catch(r){console.error("An error occurred during login:",r)}},className:"space-y-4",children:[(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"email",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:g,value:u.email,name:"email",placeholder:"Enter email"})}),(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"password",name:"password",className:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500",onChange:g,value:u.password,id:"Password",placeholder:"Password"})}),(0,l.jsx)("button",{type:"submit",className:"w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:"Submit"}),(0,l.jsx)(t.N_,{to:"/forgotpassword",type:"submit",className:"w-full px-4 py-2   text-red-600 font-semibold rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-500",children:"Forgot password"})]})]})})}}}]);
//# sourceMappingURL=257.1341d78e.chunk.js.map