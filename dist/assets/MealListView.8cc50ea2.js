import{r as _,H as j,z as E,C as K,d as g,A as B,c as f,I as D,_ as y,b as m,j as a,t as p,k as V,l as T,J as O,h as I,e as $,f as w,i as h,o as r,m as k,p as q,n as x,K as P,g as A,F as G,x as U,s as M,G as z}from"./index.179807d3.js";import{u as J}from"./meals.1b360ff2.js";async function Q(){const e=_([]);return(await j(E(K,"meals"))).forEach(t=>{e.value.push(t.data())}),{mealsList:e}}const R=g({name:"ModalAddMeal",components:{AppButton:B},props:{picketMeal:{required:!0,type:Object},closeModal:{required:!0,type:Function}},setup(e){const s=_(0),t=_(100),i=J();function d(L){let v=e.picketMeal[L],C=0;return typeof v=="string"?C=parseFloat(v)*(t.value/100):typeof v=="number"&&(C=v*(t.value/100)),C.toFixed(1)}const c=f(()=>d("kcal")),l=f(()=>d("carbohydrates")),o=f(()=>d("protein")),n=f(()=>d("fat"));function N(){if(t.value>0){const L={idD:Math.floor(Math.random()*200),meal:{name:e.picketMeal.name,kcal:parseInt(c.value),carbohydrates:parseInt(l.value),protein:parseInt(o.value),fat:parseInt(n.value),id:e.picketMeal.id}};s.value=1,i.addDailyMeal(L),setTimeout(()=>{e.closeModal()},500)}else s.value=2}const H=()=>{e.closeModal()},F=_();return D(()=>{typeof F!==null&&F.value.focus()}),{times:t,kcal:c,carb:l,protein:o,fat:n,message:s,addToDailyList:N,inputEl:F,handlerCloseModal:H}}});const u=e=>(q("data-v-a48e9a47"),e=e(),x(),e),W={class:"modal"},X={class:"form"},Y={class:"form__name"},Z={class:"form__box"},ee=u(()=>a("span",{class:"form__box-name"},"Calories",-1)),ae={class:"form__box-info green"},se={class:"form__box"},te=u(()=>a("span",{class:"form__box-name"},"Carbohydrates",-1)),oe={class:"form__box-info orange"},le={class:"form__box"},ne=u(()=>a("span",{class:"form__box-name"},"Protein",-1)),ie={class:"form__box-info blue"},de={class:"form__box"},re=u(()=>a("span",{class:"form__box-name"},"Fat",-1)),ce={class:"form__box-info red"},_e=u(()=>a("label",{class:"form__label"}," How many gram ?",-1)),me={key:0,class:"form__alert"},ue=u(()=>a("span",null,[k("Meal added "),a("i",{class:"fas fa-check-circle"})],-1)),pe=[ue],fe={key:1,class:"form__alert form__alert-error"},he=u(()=>a("span",null,[k("Please add gram "),a("i",{class:"far fa-times-circle"})],-1)),Me=[he];function be(e,s,t,i,d,c){const l=h("AppButton");return r(),m("div",W,[a("div",{class:"shadow",onClick:s[0]||(s[0]=(...o)=>e.handlerCloseModal&&e.handlerCloseModal(...o))}),a("div",X,[a("i",{onClick:s[1]||(s[1]=(...o)=>e.handlerCloseModal&&e.handlerCloseModal(...o)),class:"fas fa-times-circle form__exit"}),a("h3",Y,p(e.picketMeal.name),1),a("div",Z,[ee,a("span",ae,p(e.kcal),1)]),a("div",se,[te,a("span",oe,p(e.carb),1)]),a("div",le,[ne,a("span",ie,p(e.protein),1)]),a("div",de,[re,a("span",ce,p(e.fat),1)]),_e,V(a("input",{class:"form__input",type:"text",ref:"inputEl","onUpdate:modelValue":s[2]||(s[2]=o=>e.times=o),onKeyup:s[3]||(s[3]=O((...o)=>e.addToDailyList&&e.addToDailyList(...o),["enter"]))},null,544),[[T,e.times]]),e.message===1?(r(),m("div",me,pe)):I("",!0),e.message===2?(r(),m("div",fe,Me)):I("",!0),$(l,{class:"form__add",onClick:e.addToDailyList,disabled:e.message==1},{default:w(()=>[k(" Add ")]),_:1},8,["onClick","disabled"])])])}const ve=y(R,[["render",be],["__scopeId","data-v-a48e9a47"]]),ge=g({name:"MealListFromFirebaseItem",components:{AppButton:B},props:{meal:{required:!0,type:Object},openModal:{required:!0,type:Function}},setup(e){return{openModalHandler:()=>{e.openModal(e.meal)}}}});const ye={class:"item"};function $e(e,s,t,i,d,c){const l=h("AppButton");return r(),m("li",ye,[a("h3",null,p(e.meal.name),1),$(l,{onClick:e.openModalHandler,className:"btn"},{default:w(()=>[k("Add meal")]),_:1},8,["onClick"])])}const ke=y(ge,[["render",$e],["__scopeId","data-v-0cfb7170"]]),S={fat:0,carbohydrates:0,protein:0,kcal:0,name:""},Fe=g({name:"MealListFromFirebase",components:{MealListFromFirebaseItem:ke,ModalAddMeal:ve},setup(){const e=_();async function s(){const{mealsList:n}=await Q();e.value=[...n.value]}D(()=>{s()});const t=_(!1),i=_(S);function d(n){i.value=Object.assign(n),t.value=!0}function c(){i&&i.value!==null&&i.value!==void 0&&(t.value=!1,i.value=S)}const l=_(""),o=f(()=>{if(e.value)return e.value.filter(n=>n.name.toLowerCase().includes(l.value.toLowerCase()))});return{list:e,openModal:d,modal:t,picketMeal:i,closeModal:c,searchMeal:l,filterList:o}}});const b=e=>(q("data-v-f8fd18f1"),e=e(),x(),e),Le={class:"box__search"},Ce=b(()=>a("i",{class:"fas fa-search icon"},null,-1)),Ie={class:"box"},we=b(()=>a("img",{src:M,alt:"","aria-hidden":"true",class:"img img1"},null,-1)),Ae=b(()=>a("img",{src:M,alt:"","aria-hidden":"true",class:"img img2"},null,-1)),Se=b(()=>a("img",{src:M,alt:"","aria-hidden":"true",class:"img img3"},null,-1)),Be=b(()=>a("img",{src:M,alt:"","aria-hidden":"true",class:"img img4"},null,-1));function De(e,s,t,i,d,c){const l=h("MealListFromFirebaseItem"),o=h("ModalAddMeal");return r(),m("div",null,[a("div",Le,[Ce,V(a("input",{type:"search",placeholder:"Search Meal","onUpdate:modelValue":s[0]||(s[0]=n=>e.searchMeal=n)},null,512),[[T,e.searchMeal]])]),a("div",Ie,[$(P,{name:"list-base",tag:"ul",class:"box__list"},{default:w(()=>[(r(!0),m(G,null,U(e.filterList,n=>(r(),A(l,{key:n.name,meal:n,openModal:e.openModal},null,8,["meal","openModal"]))),128))]),_:1}),we,Ae,Se,Be]),e.modal?(r(),A(o,{key:0,picketMeal:e.picketMeal,closeModal:e.closeModal},null,8,["picketMeal","closeModal"])):I("",!0)])}const Ve=y(Fe,[["render",De],["__scopeId","data-v-f8fd18f1"]]),Te=g({name:"MealList",components:{MealListFromFirebase:Ve}}),qe="/icons/hamburger.png",xe="/icons/salad.png";const Ne={class:"meal-list"},He=z('<div class="meal-list__top" data-v-e4fb81bd><h3 class="meal-list__top-title" data-v-e4fb81bd>Meal List</h3><img class="meal-list__top-img hamburger" src="'+qe+'" alt="" aria-hidden="true" data-v-e4fb81bd><img class="meal-list__top-img" src="'+M+'" alt="" aria-hidden="true" data-v-e4fb81bd><img class="meal-list__top-img salta" src="'+xe+'" alt="" aria-hidden="true" data-v-e4fb81bd><div class="meal-list__top-shadow" data-v-e4fb81bd></div></div>',1),je={class:"meal-list__middle"};function Ee(e,s,t,i,d,c){const l=h("MealListFromFirebase");return r(),m("div",Ne,[He,a("div",je,[$(l)])])}const Pe=y(Te,[["render",Ee],["__scopeId","data-v-e4fb81bd"]]);export{Pe as default};
