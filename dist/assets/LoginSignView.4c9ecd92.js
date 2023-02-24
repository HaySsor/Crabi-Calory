import{L as N}from"./LoadingModal.3f1ef332.js";import{d as V,A,u as q,r as c,w as $,c as E,a as R,_ as L,b as M,e as a,f as b,g as x,h as S,i as d,o as v,j as e,k as y,v as G,l as k,t as P,m as D,p as B,n as F,T as O}from"./index.179807d3.js";function j(o){if(o.sex==="F"){let s=(665+9.6*o.weight+1.8*o.height-4.7*o.age)*1.4;o.goal==="L"?s=s-300:o.goal==="G"&&(s=s+300);let m=s*.3/9,h=s*.2/4,r=s*.5/4;return o.fat=Math.floor(m),o.carbohydrates=Math.floor(r),o.protein=Math.floor(h),o.kcal=Math.floor(s),o}else{let s=(66+13.7*o.weight+5*o.height-6.8*o.age)*1.4;o.goal==="L"?s=s-400:o.goal==="G"&&(s=s+400);let m=s*.3/9,h=s*.2/4,r=s*.5/4;return o.fat=Math.floor(m),o.carbohydrates=Math.floor(r),o.protein=Math.floor(h),o.kcal=Math.floor(s),o}}const H=V({name:"AppRegistration",components:{AppModal:N,AppButton:A},setup(){const o=q(),s=R(),m={name:"required|min:3|max:100|alphaSpaces",email:"required|email",password:"required|min:6|max:100|excluded:password",confirmPassword:"passwordMismatch:@password",age:"required|minVal:16|maxVal:120",height:"required|minVal:30|maxVal:300",weight:"required|minVal:30|maxVal:300"},h={sex:"M",goal:"L"},r=c(!1),_=c(0),t=c(0),n=c(0);$(_,l=>{l<0&&(_.value=0)}),$(t,l=>{l<0&&(t.value=0)}),$(_,l=>{l<0&&(n.value=0)});const u=c("Wait"),g=c(!1),f=c(!1),p=c(!0),C=E(()=>_.value*9+t.value*4+n.value*4);function T(){g.value=!1,s.push({name:"profile"})}async function U(l){console.log(l);const w={name:l.name,email:l.email,password:l.password,age:l.age,weight:l.weight,fat:l.fat,carbohydrates:l.carbohydrates,protein:l.protein,kcal:l.kcal,goal:l.goal,height:l.height,sex:l.sex};if(f.value=!0,g.value=!0,r.value)w.fat=Math.floor(_.value),w.carbohydrates=Math.floor(t.value),w.protein=Math.floor(n.value),w.kcal=Math.floor(C.value),await o.register(w),u.value="Yeey welcome :)",p.value=!1,f.value=!1;else{let W=j(w);console.log(W),await o.register(w),u.value="Yeey welcome :)",p.value=!1,f.value=!1}}return{schema:m,userData:h,advancedOptions:r,fat:_,carbohydrates:t,protein:n,calory:C,closeModal:T,registration:U,message:u,showModal:g,passData:p,regInSubmission:f}}});const i=o=>(B("data-v-b67eae4d"),o=o(),F(),o),z=i(()=>e("h3",{class:"family-Nerko title"},"Registration",-1)),J={class:"form-container"},K={class:"login__form-box"},Q=i(()=>e("label",{class:"login__form-box-label"},"Name",-1)),X={class:"login__form-box"},Z=i(()=>e("label",{class:"login__form-box-label"},"Email",-1)),oo={class:"login__form-box"},eo=i(()=>e("label",{class:"login__form-box-label"},"Password",-1)),so={class:"login__form-box"},ao=i(()=>e("label",{class:"login__form-box-label"},"Confirm Password",-1)),to={class:"input-select"},no=i(()=>e("label",null,"Sex",-1)),lo=i(()=>e("option",{value:"M"},"Male",-1)),io=i(()=>e("option",{value:"F"},"Female",-1)),ro={class:"login__form-box"},co=i(()=>e("label",{class:"login__form-box-label"},"Age",-1)),_o={class:"login__form-box"},mo=i(()=>e("label",{class:"login__form-box-label"},"Height",-1)),po={class:"login__form-box"},uo=i(()=>e("label",{class:"login__form-box-label"},"Weight",-1)),go={class:"input-select"},fo=i(()=>e("label",null,"Your Goal",-1)),ho=i(()=>e("option",{value:"L"},"lost weight",-1)),bo=i(()=>e("option",{value:"M"},"weight maintenance",-1)),vo=i(()=>e("option",{value:"G"},"gain weight",-1)),wo={class:"input-check"},yo=i(()=>e("label",null,"Advanced options",-1)),Mo={key:0,class:"advanced-options"},xo=i(()=>e("label",null,"Your Daily Fat in gram",-1)),$o=i(()=>e("label",null,"Your Carbohydrates in gram",-1)),ko=i(()=>e("label",null,"Your Protein in gram",-1)),So={class:"calory-box"},Vo=i(()=>e("h3",{class:"family-Nerko"},"Your Calory",-1)),Ao={class:"calory"},Lo={class:"login__form-btn"};function Do(o,s,m,h,r,_){const t=d("VeeField"),n=d("ErrorMessage"),u=d("AppButton"),g=d("VeeForm"),f=d("AppModal");return v(),M("div",null,[a(g,{"validation-schema":o.schema,onSubmit:o.registration,"initial-values":o.userData,class:"login__form"},{default:b(()=>[z,e("div",J,[e("div",K,[Q,a(t,{class:"login__form-box-input",name:"name",type:"text"}),a(n,{class:"error",name:"name"})]),e("div",X,[Z,a(t,{class:"login__form-box-input",name:"email",type:"email"}),a(n,{class:"error",name:"email"})]),e("div",oo,[eo,a(t,{class:"login__form-box-input",name:"password",type:"password"}),a(n,{class:"error",name:"password"})]),e("div",so,[ao,a(t,{class:"login__form-box-input",name:"confirmPassword",type:"password"}),a(n,{class:"error",name:"confirmPassword"})]),e("div",to,[no,a(t,{as:"select",name:"sex"},{default:b(()=>[lo,io]),_:1}),a(n,{class:"error",name:"sex"})]),e("div",ro,[co,a(t,{class:"login__form-box-input",name:"age",type:"number"}),a(n,{class:"error",name:"age"})]),e("div",_o,[mo,a(t,{class:"login__form-box-input",name:"height",type:"number"}),a(n,{class:"error",name:"height"})]),e("div",po,[uo,a(t,{class:"login__form-box-input",name:"weight",type:"number"}),a(n,{class:"error",name:"weight"})]),e("div",go,[fo,a(t,{as:"select",name:"goal"},{default:b(()=>[ho,bo,vo]),_:1}),a(n,{class:"error",name:"goal"})]),e("div",wo,[y(e("input",{type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=p=>o.advancedOptions=p)},null,512),[[G,o.advancedOptions]]),yo]),o.advancedOptions?(v(),M("div",Mo,[xo,y(e("input",{type:"number","onUpdate:modelValue":s[1]||(s[1]=p=>o.fat=p)},null,512),[[k,o.fat]]),$o,y(e("input",{type:"number","onUpdate:modelValue":s[2]||(s[2]=p=>o.carbohydrates=p)},null,512),[[k,o.carbohydrates]]),ko,y(e("input",{type:"number","onUpdate:modelValue":s[3]||(s[3]=p=>o.protein=p)},null,512),[[k,o.protein]]),e("div",So,[Vo,e("span",Ao,P(o.calory)+" calories",1)])])):S("",!0)]),e("div",Lo,[a(u,{disabled:o.regInSubmission},{default:b(()=>[D(" Submit ")]),_:1},8,["disabled"])])]),_:1},8,["validation-schema","onSubmit","initial-values"]),o.showModal?(v(),x(f,{key:0,message:o.message,passData:o.passData,showModal:o.showModal,closeModal:o.closeModal},null,8,["message","passData","showModal","closeModal"])):S("",!0)])}const Bo=L(H,[["render",Do],["__scopeId","data-v-b67eae4d"]]),Fo=V({name:"AppLogin",components:{LoadingModal:N,AppButton:A},setup(){const o=q(),s=R(),m=c(!1),h={email:"required|email",password:"required|min:6|max:100"},r=c("Wait"),_=c(!1),t=c(!1),n=c(!0);async function u(f){t.value=!0,_.value=!0,m.value=!1,r.value="Wait",n.value=!0;try{await o.login(f),r.value="Welcome Crab",n.value=!1,t.value=!1}catch{r.value="Email or password is incorrect",n.value=!1,t.value=!1,m.value=!0}}function g(){_.value=!1,m.value!==!0&&s.push({name:"profile"})}return{loginSchema:h,login:u,message:r,showModal:_,regInSubmission:t,passData:n,closeModal:g}}});const I=o=>(B("data-v-1e1482a0"),o=o(),F(),o),Io={class:"box"},Co=I(()=>e("h3",{class:"family-Nerko login__form-title"},"Login",-1)),No={class:"login__form-box"},qo=I(()=>e("label",{class:"login__form-box-label"},"Email",-1)),Eo={class:"login__form-box"},Ro=I(()=>e("label",{class:"login__form-box-label"},"Password",-1)),Po={class:"login__form-btn"};function Yo(o,s,m,h,r,_){const t=d("VeeField"),n=d("ErrorMessage"),u=d("AppButton"),g=d("VeeForm"),f=d("LoadingModal");return v(),M("div",Io,[a(g,{"validation-schema":o.loginSchema,onSubmit:o.login,class:"login__form"},{default:b(()=>[Co,e("div",No,[qo,a(t,{class:"login__form-box-input cypress-login",name:"email",type:"email"}),a(n,{class:"error",name:"email"})]),e("div",Eo,[Ro,a(t,{class:"login__form-box-input cypress-password",name:"password",type:"password"}),a(n,{class:"error",name:"password"})]),e("div",Po,[a(u,{class:"cypress-btn",disabled:o.regInSubmission},{default:b(()=>[D(" Submit ")]),_:1},8,["disabled"])])]),_:1},8,["validation-schema","onSubmit"]),o.showModal?(v(),x(f,{key:0,message:o.message,passData:o.passData,showModal:o.showModal,closeModal:o.closeModal},null,8,["message","passData","showModal","closeModal"])):S("",!0)])}const To=L(Fo,[["render",Yo],["__scopeId","data-v-1e1482a0"]]),Uo=V({name:"LoginSingView",components:{AppRegistration:Bo,AppLogin:To,AppButton:A},setup(){const o=c(!1),s=E(()=>o.value?"Registration":"Login");return{login:o,loginButtonText:s}}});const Y=o=>(B("data-v-647dd293"),o=o(),F(),o),Wo={class:"login"},Go=Y(()=>e("i",{class:"fas fa-arrow-alt-circle-left login__back"},null,-1)),Oo={class:"flex-box"},jo=Y(()=>e("h2",{class:"login__title family-Nerko"},"Craby Family",-1));function Ho(o,s,m,h,r,_){const t=d("router-link"),n=d("AppButton"),u=d("AppRegistration"),g=d("AppLogin");return v(),M("div",Wo,[a(t,{to:{name:"home"}},{default:b(()=>[Go]),_:1}),e("div",Oo,[jo,a(n,{"data-button":"",onClick:s[0]||(s[0]=f=>o.login=!o.login),className:"login__switch"},{default:b(()=>[D(P(o.loginButtonText),1)]),_:1})]),a(O,{name:"fade",mode:"out-in"},{default:b(()=>[o.login?(v(),x(g,{key:1})):(v(),x(u,{key:0}))]),_:1})])}const Ko=L(Uo,[["render",Ho],["__scopeId","data-v-647dd293"]]);export{Ko as default};