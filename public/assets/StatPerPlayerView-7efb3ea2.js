import{o as a,c as n,e,u as j,w as z,k as C,J as B,m as A,a as i,b as r,d as t,F as h,r as g,n as f,t as l,f as w,R as U,T as M,h as V,y as R,M as N,X as b,g as P,i as O,Y as F,j as S,V as W,ak as L,_ as $}from"./index-c24f07d2.js";import{r as D,a as T}from"./CurrencyEuroIcon-9baf06d8.js";function E(v,d){return a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"})])}function H(v,d){return a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])}const I={class:"min-h-full"},J={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},X={class:"flex h-20 items-center justify-between"},Y={class:"flex items-center"},q=e("div",{class:"flex-shrink-0"},[e("img",{class:"block h-16 w-auto lg:hidden",src:$,alt:"Westwien Logo"}),e("img",{class:"hidden h-16 w-auto lg:block",src:$,alt:"Westwien Logo"})],-1),K={class:"hidden md:block"},Q={class:"ml-10 flex items-baseline space-x-4"},Z=["onClick","aria-current"],ee={class:"hidden md:block"},te={class:"ml-4 flex items-center md:ml-6"},se=e("span",{class:"absolute -inset-1.5"},null,-1),ae=e("span",{class:"sr-only"},"Open user menu",-1),ne=["src"],oe={class:"-mr-2 flex md:hidden"},re=e("span",{class:"absolute -inset-0.5"},null,-1),le=e("span",{class:"sr-only"},"Open main menu",-1),ie={class:"space-y-1 px-2 pb-3 pt-2 sm:px-3"},ce={key:0,class:"border-t border-wwDarkGreen pb-3 pt-4"},de={class:"flex items-center px-5"},ue={class:"flex-shrink-0"},me=["src"],he={class:"ml-3"},ge={class:"text-base font-medium text-white"},pe={class:"mt-3 space-y-1 px-2"},we=e("header",{class:"bg-white shadow"},[e("div",{class:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between"},[e("h1",{class:"text-3xl font-bold leading-tight tracking-tight text-gray-900"}," Statistik pro Spieler ")])],-1),xe={class:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"},_e=e("h3",{class:"text-xl font-semibold leading-6 text-gray-900 ml-2"},"Total",-1),fe={class:"flex flex-row justify-center w-full mb-12"},be={class:"mt-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2"},ve={class:"absolute rounded-md bg-wwGreen p-3"},ye={class:"ml-16 truncate text-sm font-medium text-gray-500"},ke={class:"ml-16 flex items-baseline pb-6 sm:pb-7"},Ge={class:"text-2xl font-semibold text-gray-900"},Ce=e("hr",null,null,-1),Ae=e("h3",{class:"text-xl font-semibold leading-6 text-gray-900 ml-2 mt-5"},"Summe",-1),Se={class:"flex flex-row justify-center w-full mb-12"},Le={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2"},$e={class:"absolute rounded-md bg-wwGreen p-3"},De={class:"ml-16 truncate text-sm font-medium text-gray-500"},Te={class:"ml-16 flex items-baseline pb-6 sm:pb-7"},je={class:"text-2xl font-semibold text-gray-900"},Ue={__name:"StatPerPlayerView",setup(v){const d=j(),c=z(),y=d.currentRoute.value.params.id,p=C([{id:1,name:"Anzahl Überwiesen",stat:"0",icon:D},{id:2,name:"Anzahl Bar bekommen",stat:"0",icon:T},{id:3,name:"Offen",stat:"0",icon:H},{id:3,name:"Total",stat:"0",icon:E}]),x=C([{id:1,name:"Summe Überwiesen",stat:"0",icon:D},{id:2,name:"Summe Bar bekommen",stat:"0",icon:T}]);B(async()=>{const{data:m}=await A.get(`/paymentTypePlayer/${y}`);console.log(m),p[0].stat=m[0].karte,p[1].stat=m[0].barzahlung,p[2].stat=m[0].offen,p[3].stat=m[0].total;const{data:u}=await A.get(`/sumTypePlayer/${y}`);x[0].stat=u[0].karte,x[1].stat=u[0].barzahlung});const k=[{name:"Home",path:"/",current:!1},{name:"Regeln",path:"/rules",current:!1},{name:"Statistik",path:"/stats",current:!0},{name:"Suggestions",path:"/suggestions",current:!1}],G=[{name:"Sign out",href:"#"}];return(m,u)=>(a(),n("div",I,[i(t(W),{as:"nav",class:"bg-wwGreen"},{default:r(({open:o})=>[e("div",J,[e("div",X,[e("div",Y,[q,e("div",K,[e("div",Q,[(a(),n(h,null,g(k,s=>e("a",{key:s.name,onClick:_=>t(d).push(s.path),class:f([s.current?"bg-wwDarkGreen text-white":"text-white hover:bg-wwLightGreen hover:bg-opacity-75","rounded-md px-3 py-2 text-sm font-medium"]),"aria-current":s.current?"page":void 0},l(s.name),11,Z)),64))])])]),e("div",ee,[e("div",te,[t(c).getAktiverUser?(a(),w(t(N),{key:0,as:"div",class:"relative ml-3"},{default:r(()=>[e("div",null,[i(t(U),{class:"relative flex max-w-xs items-center rounded-full bg-wwGreen text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wwDarkGreen"},{default:r(()=>[se,ae,e("img",{class:"h-8 w-8 rounded-full",src:t(c).getAktiverUser.profilbild_url,alt:""},null,8,ne)]),_:1})]),i(M,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[i(t(V),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:r(()=>[(a(),n(h,null,g(G,s=>i(t(R),{onClick:t(c).deleteAktivenUser,key:s.name},{default:r(({active:_})=>[e("a",{class:f([_?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},l(s.name),3)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})]),_:1})):(a(),n("button",{key:1,type:"button",class:"rounded-md bg-wwGray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGray",onClick:u[0]||(u[0]=s=>t(d).push("/login"))}," Login "))])]),e("div",oe,[i(t(b),{class:"relative inline-flex items-center justify-center rounded-md bg-wwGreen p-2 text-indigo-200 hover:bg-wwLightGreen hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wwDarkGreen"},{default:r(()=>[re,le,o?(a(),w(t(O),{key:1,class:"block h-6 w-6 text-wwGray","aria-hidden":"true"})):(a(),w(t(P),{key:0,class:"block h-6 w-6 text-wwGray","aria-hidden":"true"}))]),_:2},1024)])])]),i(t(F),{class:"md:hidden"},{default:r(()=>[e("div",ie,[(a(),n(h,null,g(k,s=>i(t(b),{key:s.name,as:"a",onClick:_=>t(d).push(s.path),class:f([s.current?"bg-wwDarkGreen text-white":"text-white hover:bg-wwLightGreen hover:bg-opacity-75","block rounded-md px-3 py-2 text-base font-medium"]),"aria-current":s.current?"page":void 0},{default:r(()=>[S(l(s.name),1)]),_:2},1032,["onClick","class","aria-current"])),64))]),t(c).getAktiverUser?(a(),n("div",ce,[e("div",de,[e("div",ue,[e("img",{class:"h-10 w-10 rounded-full",src:t(c).getAktiverUser.profilbild_url,alt:""},null,8,me)]),e("div",he,[e("div",ge,l(t(c).getAktiverUser.vorname)+" "+l(t(c).getAktiverUser.nachname),1)])]),e("div",pe,[(a(),n(h,null,g(G,s=>i(t(b),{key:s.name,as:"a",onClick:t(c).deleteAktivenUser,class:"block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-wwLightGreen hover:bg-opacity-75"},{default:r(()=>[S(l(s.name),1)]),_:2},1032,["onClick"])),64))])])):(a(),n("button",{key:1,type:"button",class:"rounded-md bg-wwGray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGray m-5",onClick:u[1]||(u[1]=s=>t(d).push("/login"))}," Login "))]),_:1})]),_:1}),we,e("main",null,[e("div",xe,[e("div",null,[_e,e("div",fe,[e("dl",be,[(a(!0),n(h,null,g(p,o=>(a(),n("div",{key:o.id,class:"relative overflow-hidden rounded-lg bg-white px-4 pb-1 pt-5 shadow sm:px-6 sm:pt-6 mx-12 mt-3"},[e("dt",null,[e("div",ve,[(a(),w(L(o.icon),{class:"h-6 w-6 text-white","aria-hidden":"true"}))]),e("p",ye,l(o.name),1)]),e("dd",ke,[e("p",Ge,l(o.stat),1)])]))),128))])]),Ce,Ae,e("div",Se,[e("dl",Le,[(a(!0),n(h,null,g(x,o=>(a(),n("div",{key:o.id,class:"relative overflow-hidden rounded-lg bg-white px-4 pb-1 pt-5 shadow sm:px-6 sm:pt-6 mx-12"},[e("dt",null,[e("div",$e,[(a(),w(L(o.icon),{class:"h-6 w-6 text-white","aria-hidden":"true"}))]),e("p",De,l(o.name),1)]),e("dd",Te,[e("p",je,l(o.stat)+"€",1)])]))),128))])])])])])]))}};export{Ue as default};
