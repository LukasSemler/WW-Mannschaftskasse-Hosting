import{u as m,w as u,k as c,o as w,c as f,e,l as a,v as n,d as g,_ as p,m as x}from"./index-adac0ab1.js";const b={class:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"},v=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[e("img",{class:"mx-auto h-24 w-auto",src:p,alt:"Handball Westwien"}),e("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"}," Anmelden ")],-1),y={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},h={class:"space-y-6",action:"#",method:"POST"},_=e("label",{for:"email",class:"block text-sm font-medium leading-6 text-gray-900"},"Email",-1),k={class:"mt-2"},G=e("div",{class:"flex items-center justify-between"},[e("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Passwort")],-1),j={class:"mt-2"},E={__name:"LoginUserView",setup(B){const l=m(),r=u(),s=c({email:"",password:""});async function d(i){if(i.preventDefault(),s.email!==""&&s.password!==""&&s.email.length>0&&s.password.length>0){const{data:t}=await x.post("/login",{email:s.email,password:s.password});t?(r.setAktivenUser(t),console.log(t),l.push("/")):console.log("Error")}else console.log("Error")}return(i,t)=>(w(),f("div",b,[v,e("div",y,[e("form",h,[e("div",null,[_,e("div",k,[a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.email=o),id:"email",name:"email",type:"email",autocomplete:"email",class:"pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwGreen sm:text-sm sm:leading-6"},null,512),[[n,s.email]])])]),e("div",null,[G,e("div",j,[a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.password=o),id:"password",name:"password",type:"password",autocomplete:"current-password",class:"pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwGreen sm:text-sm sm:leading-6"},null,512),[[n,s.password]])])]),e("div",null,[e("button",{onClick:d,type:"submit",class:"flex w-full justify-center rounded-md bg-wwGreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-wwDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwGreen"}," Sign in ")])]),e("button",{onClick:t[2]||(t[2]=o=>g(l).go(-1)),class:"mt-3 flex w-full justify-center rounded-md bg-wwGray px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-wwDarkGray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwGreen"}," Back ")])]))}};export{E as default};
