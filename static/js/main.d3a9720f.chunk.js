(this["webpackJsonpmy-multi-step-form"]=this["webpackJsonpmy-multi-step-form"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c(0),s=c.n(i),n=c(24),l=c.n(n),r=(c(31),c(32),c(2)),j=c(16),o=c(5),b=c(20),u=c(9),h=c(19),d=s.a.createContext();function m(e){var t=Object(i.useState)(""),c=Object(u.a)(t,2),s=c[0],n=c[1],l=Object(i.useState)(""),r=Object(u.a)(l,2),j=r[0],h=r[1],m=Object(i.useState)({name:"",email:"",twitter:"",facebook:""}),O=Object(u.a)(m,2),x=O[0],f=O[1];return Object(a.jsx)(d.Provider,{value:{handleProfileInfo:function(e){h(e)},profileInfo:j,handleSocialInfo:function(e){n(e)},socialInfo:s,handleFormSubmit:function(){f({name:"",email:"",twitter:"",facebook:""}),h(""),n("")},handleInput:function(e){var t=e.name,c=e.value;f((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(o.a)({},t,c))}))},input:x},children:e.children})}var O=function(e){var t=e.children;return Object(a.jsx)(h.a.div,{style:{position:"absolute"},initial:{x:300,scale:.8,opacity:0},animate:{x:"10%",scale:1,opacity:1},exit:{x:-300,scale:.8,opacity:0},children:t})};var x=function(){var e=Object(j.a)(),t=e.register,c=e.handleSubmit,s=e.errors,n=Object(r.f)(),l=Object(i.useContext)(d),o=l.handleProfileInfo,b=l.handleInput,u=l.input;function h(e){b(e.target)}return Object(a.jsx)(O,{children:Object(a.jsx)("div",{className:"form",children:Object(a.jsxs)("form",{onSubmit:c((function(e){o(e),n.push("/social")})),children:[Object(a.jsx)("h2",{children:"Tell Us About Yourself"}),Object(a.jsx)("input",{type:"text",name:"name",placeholder:"What's your name?",ref:t({required:!0}),value:u.name,onChange:h}),s.name&&Object(a.jsx)("h5",{children:"A Name is required."}),Object(a.jsx)("input",{type:"text",name:"email",placeholder:"What's your email ?",ref:t({required:!0,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}),value:u.email,onChange:h}),s.email&&Object(a.jsx)("h5",{children:"An valid email is required"}),"pattern"===s.type&&Object(a.jsx)("h5",{children:"An valid email is required"}),Object(a.jsx)("input",{type:"submit",value:"Next",className:"button"})]})})})},f=c(15);var p=function(){var e=Object(j.a)(),t=e.register,c=e.handleSubmit,i=e.errors,s=Object(f.useContext)(d),n=s.handleSocialInfo,l=s.handleInput,o=s.input,b=Object(r.f)();function u(e){l(e.target)}return Object(a.jsx)(O,{children:Object(a.jsx)("div",{className:"form",children:Object(a.jsxs)("form",{onSubmit:c((function(e){n(e),b.push("/review")})),children:[Object(a.jsx)("h2",{children:"How Can we find you on Social ?"}),Object(a.jsx)("input",{type:"text",name:"twitter",placeholder:"What's your Twitter?",ref:t({required:!0}),value:o.twitter,onChange:u}),i.twitter&&Object(a.jsx)("h5",{children:"This field is required"}),Object(a.jsx)("input",{type:"text",name:"facebook",placeholder:"What's your Facebook?",ref:t({required:!0}),value:o.facebook,onChange:u}),i.facebook&&Object(a.jsx)("h5",{children:"This field is required"}),Object(a.jsx)("input",{type:"submit",value:"Next",className:"button"})]})})})};var v=function(){var e=Object(f.useContext)(d),t=e.profileInfo,c=e.socialInfo,i=e.handleFormSubmit,s=Object(r.f)();return Object(a.jsx)(O,{children:Object(a.jsx)("div",{className:"form review",children:Object(a.jsxs)("form",{onSubmit:function(e){s.push("/"),alert("You have successfully submitted your information!"),i()},children:[Object(a.jsx)("h2",{children:"Review All Your Info"}),Object(a.jsxs)("h5",{children:["Name : ",t.name]}),Object(a.jsxs)("h5",{children:["Email : ",t.email]}),Object(a.jsxs)("h5",{children:["Twitter : ",c.twitter]}),Object(a.jsxs)("h5",{children:["Facebook : ",c.facebook]}),Object(a.jsx)("input",{type:"submit",value:"Submit All your info",className:"button"})]})})})};var N=function(){var e=Object(r.g)(),t=Object(i.useContext)(d),c=t.profileInfo,s=t.socialInfo;return Object(a.jsxs)("div",{className:"main-container",children:[Object(a.jsxs)("div",{children:[c?Object(a.jsxs)("span",{className:"profile label",children:[Object(a.jsx)("i",{class:"ri-heart-fill fill"}),"Profile"]}):Object(a.jsxs)("span",{className:"profile label",children:[" ",Object(a.jsx)("i",{class:"ri-heart-line"}),"Profile"]}),"/social"==e.pathname&&""==s?Object(a.jsxs)("span",{className:"social label",children:[Object(a.jsx)("i",{class:"ri-heart-line"}),"Social"]}):s?Object(a.jsxs)("span",{className:"social label",children:[Object(a.jsx)("i",{class:"ri-heart-fill fill"}),"Social"]}):Object(a.jsx)("span",{className:"social label",children:"Social"}),Object(a.jsx)("span",{className:"review label",children:"Review"})]}),Object(a.jsxs)("div",{className:"line",children:["/"==e.pathname?Object(a.jsx)("div",{className:"c1 circle active"}):Object(a.jsx)("div",{className:"c1 circle"}),"/social"==e.pathname?Object(a.jsx)("div",{className:"c2 circle active"}):Object(a.jsx)("div",{className:"c2 circle"}),"/review"==e.pathname?Object(a.jsx)("div",{className:"c3 circle active"}):Object(a.jsx)("div",{className:"c3 circle"}),Object(a.jsx)("hr",{})]}),Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",children:Object(a.jsx)(x,{})}),Object(a.jsx)(r.a,{path:"/social",children:Object(a.jsx)(p,{})}),Object(a.jsx)(r.a,{path:"/review",children:Object(a.jsx)(v,{})})]})]})},y=c(11);l.a.render(Object(a.jsx)(m,{children:Object(a.jsx)(y.a,{children:Object(a.jsx)(N,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d3a9720f.chunk.js.map