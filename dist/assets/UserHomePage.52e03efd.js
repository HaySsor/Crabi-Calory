import{d as u,u as k,a as y,_ as p,b as _,j as e,F as $,x as S,q as U,o as n,g as m,f as l,t as b,p as H,n as N,i as d,e as c,T as P,y as w}from"./index.179807d3.js";const x=u({name:"UserHomePageNavbar",setup(){const s=[{id:1,name:"Add Meal",link:"addMeal",imgSrc:"/icons/salad.png"},{id:2,name:"Weight",link:"weightHistory",imgSrc:"/icons/bars.png"},{id:3,name:"Meal list",link:"mealList",imgSrc:"/icons/book-2.png"},{id:4,name:"Profile",link:"profile",imgSrc:"/icons/user.png"}],t=k(),a=y();function i(){t.singOutUser(),location.reload(),a.push({name:"home"})}return{singOut:i,navbarLinkList:s}}});const g=s=>(H("data-v-1a1c7993"),s=s(),N(),s),C={class:"nav"},I={class:"blur"},O={class:"nav__list"},B=["src"],L={class:"family-Nerko"},M={class:"nav__list-logout"},D=g(()=>e("i",{class:"fas fa-sign-out-alt icon"},null,-1)),F=[D],T=g(()=>e("span",{class:"family-Nerko cypress-log-out"},"LogOut",-1));function V(s,t,a,i,v,f){const r=d("router-link");return n(),_("nav",C,[e("div",I,[e("ul",O,[(n(!0),_($,null,S(s.navbarLinkList,o=>(n(),m(r,{key:o.id,to:{name:o.link},class:"nav__list-item"},{default:l(()=>[e("li",null,[e("img",{src:o.imgSrc,"aria-hidden":"true"},null,8,B),e("span",L,b(o.name),1)])]),_:2},1032,["to"]))),128)),e("li",M,[e("button",{onClick:t[0]||(t[0]=U((...o)=>s.singOut&&s.singOut(...o),["prevent"]))},F),T])])])])}const j=p(x,[["render",V],["__scopeId","data-v-1a1c7993"]]),q=u({name:"UserHomePage",components:{UserHomePageNavbar:j}});const A={class:"wrapper2"},E={class:"home"};function R(s,t,a,i,v,f){const r=d("router-view"),o=d("UserHomePageNavbar");return n(),_("section",null,[e("div",A,[e("div",E,[c(r,null,{default:l(({Component:h})=>[c(P,{name:"fade",mode:"out-in"},{default:l(()=>[(n(),m(w(h)))]),_:2},1024)]),_:1})]),c(o)])])}const z=p(q,[["render",R],["__scopeId","data-v-d50e64c1"]]);export{z as default};