import{L as i,M as t,N as o,C as n,O as u,P as s,Q as c,R as M}from"./index.179807d3.js";let a;t.currentUser&&(a=o(n,"users",t.currentUser.uid));const{user:l,getUserData:m}=u(),g=i("meals",{state:()=>({useDailyMeals:[]}),actions:{async getUserMeal(){if(await m(),l){const e=l.value.meals.map(r=>r);console.log(e),this.useDailyMeals=e}},async addDailyMeal(e){await s(a,{meals:c(e)}),this.getUserMeal()},async removeMealFromDaily(e){await s(a,{meals:M(e)}),this.getUserMeal()},async newDay(){await s(a,{meals:[]}),this.getUserMeal()}}});export{g as u};
