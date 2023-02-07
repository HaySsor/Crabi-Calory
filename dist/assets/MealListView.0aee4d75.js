import{r as m,E as $,x as T,y as q,_ as g,A,c as h,G as C,a as M,o as d,b as u,e,t as f,f as D,g as S,H as N,h as y,d as x,w as L,i as k,p as B,l as V,F as E,q as j,I as G,j as I,n as b,D as H}from"./index.020b6c41.js";import{u as K}from"./meals.426ac30e.js";async function P(){const s=m([]);return(await $(T(q,"meals"))).forEach(t=>{s.value.push(t.data())}),{mealsList:s}}const U={name:"ModalAddMeal",components:{AppButton:A},props:{picketMeal:{required:!0},closeModal:{required:!0}},setup(s){const o=m(0),t=m(100),a=K(),_=h(()=>{let c=s.picketMeal.kcal;return(parseFloat(c)*(t.value/100)).toFixed(1)}),r=h(()=>{let c=s.picketMeal.carbohydrates;return(parseFloat(c)*(t.value/100)).toFixed(1)}),n=h(()=>{let c=s.picketMeal.protein;return(parseFloat(c)*(t.value/100)).toFixed(1)}),l=h(()=>{let c=s.picketMeal.fat;return(parseFloat(c)*(t.value/100)).toFixed(1)});function i(){if(t.value>0){const c={idD:Math.floor(Math.random()*200),meal:{name:s.picketMeal.name,kcal:_.value,carbohydrates:r.value,protein:n.value,fat:l.value,id:s.picketMeal.id}};console.log(c),o.value=1,a.addDailyMeal(c),setTimeout(()=>{s.closeModal()},500)}else o.value=2}const w=m(null);return C(()=>{w.value.focus()}),{times:t,kcal:_,carb:r,protein:n,fat:l,message:o,addToDailyList:i,inputEl:w}}},p=s=>(B("data-v-8ea81ba7"),s=s(),V(),s),O={class:"modal"},z={class:"form"},J={class:"form__name"},Q={class:"form__box"},R=p(()=>e("span",{class:"form__box-name"},"Calories",-1)),W={class:"form__box-info green"},X={class:"form__box"},Y=p(()=>e("span",{class:"form__box-name"},"Carbohydrates",-1)),Z={class:"form__box-info orange"},ee={class:"form__box"},ae=p(()=>e("span",{class:"form__box-name"},"Protein",-1)),se={class:"form__box-info blue"},te={class:"form__box"},oe=p(()=>e("span",{class:"form__box-name"},"Fat",-1)),le={class:"form__box-info red"},ne=p(()=>e("label",{class:"form__label"}," How many gram ?",-1)),ie={key:0,class:"form__alert"},ce=p(()=>e("span",null,[k("Meal added "),e("i",{class:"fas fa-check-circle"})],-1)),de=[ce],_e={key:1,class:"form__alert form__alert-error"},re=p(()=>e("span",null,[k("Please add gram "),e("i",{class:"far fa-times-circle"})],-1)),me=[re];function ue(s,o,t,a,_,r){const n=M("AppButton");return d(),u("div",O,[e("div",{class:"shadow",onClick:o[0]||(o[0]=(...l)=>t.closeModal&&t.closeModal(...l))}),e("div",z,[e("i",{onClick:o[1]||(o[1]=(...l)=>t.closeModal&&t.closeModal(...l)),class:"fas fa-times-circle form__exit"}),e("h3",J,f(t.picketMeal.name),1),e("div",Q,[R,e("span",W,f(a.kcal),1)]),e("div",X,[Y,e("span",Z,f(a.carb),1)]),e("div",ee,[ae,e("span",se,f(a.protein),1)]),e("div",te,[oe,e("span",le,f(a.fat),1)]),ne,D(e("input",{class:"form__input",type:"text",ref:"inputEl","onUpdate:modelValue":o[2]||(o[2]=l=>a.times=l),onKeyup:o[3]||(o[3]=N((...l)=>a.addToDailyList&&a.addToDailyList(...l),["enter"]))},null,544),[[S,a.times]]),a.message===1?(d(),u("div",ie,de)):y("",!0),a.message===2?(d(),u("div",_e,me)):y("",!0),x(n,{class:"form__add",onClick:a.addToDailyList,disabled:a.message==1},{default:L(()=>[k(" Add ")]),_:1},8,["onClick","disabled"])])])}const pe=g(U,[["render",ue],["__scopeId","data-v-8ea81ba7"]]);const fe={name:"MealListFromFirebaseItem",components:{AppButton:A},props:{meal:{required:!0},openModal:{required:!0}},setup(){}},he={class:"item"};function Me(s,o,t,a,_,r){const n=M("AppButton");return d(),u("li",he,[e("h3",null,f(t.meal.name),1),x(n,{onClick:o[0]||(o[0]=l=>t.openModal(t.meal)),className:"btn"},{default:L(()=>[k("Add meal")]),_:1})])}const be=g(fe,[["render",Me],["__scopeId","data-v-b879f252"]]);const ve={name:"MealListFromFirebase",components:{MealListFromFirebaseItem:be,ModalAddMeal:pe},setup(){const s=m([]);async function o(){const{mealsList:i}=await P();s.value=[...i.value]}C(()=>{o()});const t=m(!1),a=m("");function _(i){a.value=Object.assign(i),t.value=!0}function r(){t.value=!1,a.value=""}const n=m(""),l=h(()=>s.value.filter(i=>i.name.toLowerCase().includes(n.value.toLowerCase())));return{list:s,openModal:_,modal:t,picketMeal:a,closeModal:r,searchMeal:n,filterList:l}}},v=s=>(B("data-v-ec1c44a6"),s=s(),V(),s),ge={class:"box__search"},xe=v(()=>e("i",{class:"fas fa-search icon"},null,-1)),ke={class:"box"},Fe=v(()=>e("img",{src:b,alt:"","aria-hidden":"true",class:"img img1"},null,-1)),ye=v(()=>e("img",{src:b,alt:"","aria-hidden":"true",class:"img img2"},null,-1)),Le=v(()=>e("img",{src:b,alt:"","aria-hidden":"true",class:"img img3"},null,-1)),we=v(()=>e("img",{src:b,alt:"","aria-hidden":"true",class:"img img4"},null,-1));function Ie(s,o,t,a,_,r){const n=M("MealListFromFirebaseItem"),l=M("ModalAddMeal");return d(),u("div",null,[e("div",ge,[xe,D(e("input",{type:"search",placeholder:"Search Meal","onUpdate:modelValue":o[0]||(o[0]=i=>a.searchMeal=i)},null,512),[[S,a.searchMeal]])]),e("div",ke,[x(G,{name:"list-base",tag:"ul",class:"box__list"},{default:L(()=>[(d(!0),u(E,null,j(a.filterList,i=>(d(),I(n,{key:i.name,meal:i,openModal:a.openModal},null,8,["meal","openModal"]))),128))]),_:1}),Fe,ye,Le,we]),a.modal?(d(),I(l,{key:0,picketMeal:a.picketMeal,closeModal:a.closeModal},null,8,["picketMeal","closeModal"])):y("",!0)])}const Ae=g(ve,[["render",Ie],["__scopeId","data-v-ec1c44a6"]]),Ce="/icons/hamburger.png",De="/icons/salad.png";const Se={name:"MealList",components:{MealListFromFirebase:Ae}},Be={class:"meal-list"},Ve=H('<div class="meal-list__top" data-v-bf8cb817><h3 class="meal-list__top-title" data-v-bf8cb817>Meal List</h3><img class="meal-list__top-img hamburger" src="'+Ce+'" alt="" aria-hidden="true" data-v-bf8cb817><img class="meal-list__top-img" src="'+b+'" alt="" aria-hidden="true" data-v-bf8cb817><img class="meal-list__top-img salta" src="'+De+'" alt="" aria-hidden="true" data-v-bf8cb817><div class="meal-list__top-shadow" data-v-bf8cb817></div></div>',1),$e={class:"meal-list__middle"};function Te(s,o,t,a,_,r){const n=M("MealListFromFirebase");return d(),u("div",Be,[Ve,e("div",$e,[x(n)])])}const Ee=g(Se,[["render",Te],["__scopeId","data-v-bf8cb817"]]);export{Ee as default};
