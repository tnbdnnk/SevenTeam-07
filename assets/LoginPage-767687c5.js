import{r as c,j as e,c as u,e as w,f as y,g as f,b as h,l as k}from"./index-43c7d466.js";import{s as a,a as t}from"./register-page.module-7cf811e2.js";const p={email:"",password:""},S=({onSubmit:o})=>{const[s,r]=c.useState({...p}),n=({target:l})=>{const{name:N,value:b,type:v,checked:I}=l,L=v==="checkbox"?I:b;r({...s,[N]:L})},i=l=>{l.preventDefault(),o({...s}),g()},g=()=>{r({...p})},d=c.useId(),m=c.useId(),{email:x,password:j}=s;return e.jsxs("form",{className:a.registerForm,onSubmit:i,children:[e.jsxs("div",{className:a.block,children:[e.jsx("label",{htmlFor:d}),e.jsx("input",{value:x,className:a.registerInput,onChange:n,type:"email",name:"email",placeholder:"Enter your email",id:d,required:!0})]}),e.jsxs("div",{className:a.block,children:[e.jsx("label",{htmlFor:m}),e.jsx("input",{value:j,className:a.registerInput,onChange:n,type:"password",name:"password",placeholder:"Confirm a password",id:m,required:!0})]}),e.jsx("button",{className:a.btnRegister,type:"submit",children:"Log In Now"})]})},A=()=>{const o=u(w),s=u(y),r=f(),n=i=>{r(k(i))};return e.jsx("div",{className:t.registerWrapper,children:e.jsx("div",{className:t.register,children:e.jsxs("div",{className:t.blockRegister,children:[e.jsxs("div",{className:t.navRegister,children:[e.jsx(h,{to:"/auth/register",className:t.linkRegister,children:"Registration"}),e.jsx(h,{to:"/auth/login",className:t.authActivPage,children:"Log In"})]}),o&&e.jsx("p",{children:"....Login in progress"}),e.jsx(S,{onSubmit:n}),s&&e.jsx("p",{style:{color:"red"},children:s})]})})})};export{A as default};
