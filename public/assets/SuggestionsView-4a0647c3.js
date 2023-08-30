import{o as a,c as i,e,u as B,w as R,p as A,k as N,I as H,m as _,a as n,b as o,d as t,ab as L,F as h,r as x,aa as T,ac as z,ad as E,ae as W,j as p,l as F,v as I,ah as O,n as b,t as d,f as k,R as X,T as Y,h as q,y as J,M as K,X as G,g as P,i as Q,Y as Z,V as ee,ai as te,_ as S}from"./index-cf5ffed8.js";function se(C,m){return a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M18.905 12.75a1.25 1.25 0 01-2.5 0v-7.5a1.25 1.25 0 112.5 0v7.5zM8.905 17v1.3c0 .268-.14.526-.395.607A2 2 0 015.905 17c0-.995.182-1.948.514-2.826.204-.54-.166-1.174-.744-1.174h-2.52c-1.242 0-2.26-1.01-2.146-2.247.193-2.08.652-4.082 1.341-5.974C2.752 3.678 3.833 3 5.005 3h3.192a3 3 0 011.342.317l2.733 1.366A3 3 0 0013.613 5h1.292v7h-.963c-.684 0-1.258.482-1.612 1.068a4.012 4.012 0 01-2.165 1.73c-.433.143-.854.386-1.012.814-.16.432-.248.9-.248 1.388z"})])}function ne(C,m){return a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"})])}const ae=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),oe={class:"fixed inset-0 z-10 overflow-y-auto"},ie={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},le={class:"text-center sm:mt-5"},re={class:"text-left"},ce=e("label",{for:"suggestion",class:"block text-sm font-medium leading-6 text-gray-900"},"Vorschlag:",-1),de={class:"mt-2"},ue={class:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"},ge={class:"min-h-full"},me={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},he={class:"flex h-20 items-center justify-between"},fe={class:"flex items-center"},we=e("div",{class:"flex-shrink-0"},[e("img",{class:"block h-16 w-auto lg:hidden",src:S,alt:"Westwien Logo"}),e("img",{class:"hidden h-16 w-auto lg:block",src:S,alt:"Westwien Logo"})],-1),xe={class:"hidden md:block"},pe={class:"ml-10 flex items-baseline space-x-4"},ve=["onClick","aria-current"],_e={class:"hidden md:block"},ye={class:"ml-4 flex items-center md:ml-6"},be=e("span",{class:"absolute -inset-1.5"},null,-1),ke=e("span",{class:"sr-only"},"Open user menu",-1),Ge=["src"],Ce={class:"-mr-2 flex md:hidden"},De=e("span",{class:"absolute -inset-0.5"},null,-1),Ve=e("span",{class:"sr-only"},"Open main menu",-1),$e={class:"space-y-1 px-2 pb-3 pt-2 sm:px-3"},Ae={key:0,class:"border-t border-wwDarkGreen pb-3 pt-4"},Le={class:"flex items-center px-5"},ze={class:"flex-shrink-0"},Se=["src"],Ue={class:"ml-3"},Me={class:"text-base font-medium text-white"},je={class:"mt-3 space-y-1 px-2"},Be={class:"bg-white shadow"},Re={class:"flex mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 justify-between"},Ne=e("h1",{class:"text-3xl font-bold leading-tight tracking-tight text-gray-900"},"Vorschläge",-1),He={class:"mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"},Te=e("p",{class:"mx-5 mb-7"}," Hier könnt ihr Vorschläge was wir am Ende der Saison mit dem ganzen Geld machen könnten. Wenn ihr einen Vorschlag habt, schreibt ihn einfach rein. Ihr könnt dann für die anderen Vorschläge abstimmen, ob sie euch gefallen oder nicht ",-1),Ee={key:0,role:"list",class:"divide-y divide-gray-100 ml-5 mr-4"},We={class:"flex-auto"},Fe={class:"flex justify-between gap-x-4"},Ie={class:"text-sm font-semibold leading-6 text-gray-900 mb-3"},Oe=["onClick"],Xe=["onClick"],Ye={class:"mt-1 text-sm leading-6 text-gray-600"},qe={key:1,class:"text-center text-xl font-bold mt-7"},Ke={__name:"SuggestionsView",setup(C){const m=B(),u=R(),y=A([]);let g=A(!1);const f=N({sug:""});H(async()=>{await v()});async function v(){const{data:c}=await _.get("/suggestions");console.log(c),y.value=c}async function U(c){await _.patch(`/suggestionsL/${c.sg_id}`),await v()}async function M(c){await _.patch(`/suggestionsD/${c.sg_id}`),await v()}async function j(c){c.preventDefault(),f.sug.length>0&&(await _.post("/suggestions",{suggestion:f.sug}),await v(),D())}function D(){f.sug="",g.value=!1}const V=[{name:"Home",path:"/",current:!1},{name:"Regeln",path:"/rules",current:!1},{name:"Statistik",path:"/stats",current:!1},{name:"Suggestions",path:"/suggestions",current:!0}],$=[{name:"Sign out",href:"#"}];return(c,r)=>(a(),i(h,null,[n(t(O),{as:"template",show:t(g)},{default:o(()=>[n(t(T),{as:"div",class:"relative z-10",onClose:r[1]||(r[1]=l=>L(g)?g.value=!0:g=!0)},{default:o(()=>[n(t(z),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[ae]),_:1}),e("div",oe,[e("div",ie,[n(t(z),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[n(t(E),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:o(()=>[e("div",null,[e("div",le,[n(t(W),{as:"h1",class:"font-semibold leading-6 text-gray-900 text-xl mb-5"},{default:o(()=>[p("Neuer Vorschlag")]),_:1}),e("div",re,[ce,e("div",de,[F(e("textarea",{"onUpdate:modelValue":r[0]||(r[0]=l=>f.sug=l),rows:"4",name:"suggestion",id:"suggestion",class:"pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwGreen sm:text-sm sm:leading-6"},null,512),[[I,f.sug]])])])])]),e("div",ue,[e("button",{type:"button",class:"inline-flex w-full justify-center rounded-md bg-wwGreen px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwGreen sm:col-start-2",onClick:j}," Hinzufügen "),e("button",{type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0",onClick:D,ref:"cancelButtonRef"}," Cancel ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]),e("div",ge,[n(t(ee),{as:"nav",class:"bg-wwGreen"},{default:o(({open:l})=>[e("div",me,[e("div",he,[e("div",fe,[we,e("div",xe,[e("div",pe,[(a(),i(h,null,x(V,s=>e("a",{key:s.name,onClick:w=>t(m).push(s.path),class:b([s.current?"bg-wwDarkGreen text-white":"text-white hover:bg-wwLightGreen hover:bg-opacity-75","rounded-md px-3 py-2 text-sm font-medium"]),"aria-current":s.current?"page":void 0},d(s.name),11,ve)),64))])])]),e("div",_e,[e("div",ye,[t(u).getAktiverUser?(a(),k(t(K),{key:0,as:"div",class:"relative ml-3"},{default:o(()=>[e("div",null,[n(t(X),{class:"relative flex max-w-xs items-center rounded-full bg-wwGreen text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wwDarkGreen"},{default:o(()=>[be,ke,e("img",{class:"h-8 w-8 rounded-full",src:t(u).getAktiverUser.profilbild_url,alt:""},null,8,Ge)]),_:1})]),n(Y,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[n(t(q),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:o(()=>[(a(),i(h,null,x($,s=>n(t(J),{onClick:t(u).deleteAktivenUser,key:s.name},{default:o(({active:w})=>[e("a",{class:b([w?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},d(s.name),3)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})]),_:1})):(a(),i("button",{key:1,type:"button",class:"rounded-md bg-wwGray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGray",onClick:r[2]||(r[2]=s=>t(m).push("/login"))}," Login "))])]),e("div",Ce,[n(t(G),{class:"relative inline-flex items-center justify-center rounded-md bg-wwGreen p-2 text-indigo-200 hover:bg-wwLightGreen hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-wwDarkGreen"},{default:o(()=>[De,Ve,l?(a(),k(t(Q),{key:1,class:"block h-6 w-6 text-wwGray","aria-hidden":"true"})):(a(),k(t(P),{key:0,class:"block h-6 w-6 text-wwGray","aria-hidden":"true"}))]),_:2},1024)])])]),n(t(Z),{class:"md:hidden"},{default:o(()=>[e("div",$e,[(a(),i(h,null,x(V,s=>n(t(G),{key:s.name,as:"a",onClick:w=>t(m).push(s.path),class:b([s.current?"bg-wwDarkGreen text-white":"text-white hover:bg-wwLightGreen hover:bg-opacity-75","block rounded-md px-3 py-2 text-base font-medium"]),"aria-current":s.current?"page":void 0},{default:o(()=>[p(d(s.name),1)]),_:2},1032,["onClick","class","aria-current"])),64))]),t(u).getAktiverUser?(a(),i("div",Ae,[e("div",Le,[e("div",ze,[e("img",{class:"h-10 w-10 rounded-full",src:t(u).getAktiverUser.profilbild_url,alt:""},null,8,Se)]),e("div",Ue,[e("div",Me,d(t(u).getAktiverUser.vorname)+" "+d(t(u).getAktiverUser.nachname),1)])]),e("div",je,[(a(),i(h,null,x($,s=>n(t(G),{key:s.name,as:"a",onClick:t(u).deleteAktivenUser,class:"block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-wwLightGreen hover:bg-opacity-75"},{default:o(()=>[p(d(s.name),1)]),_:2},1032,["onClick"])),64))])])):(a(),i("button",{key:1,type:"button",class:"rounded-md bg-wwGray px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wwDarkGray m-5",onClick:r[3]||(r[3]=s=>t(m).push("/login"))}," Login "))]),_:1})]),_:1}),e("header",Be,[e("div",Re,[Ne,e("button",{onClick:r[4]||(r[4]=l=>L(g)?g.value=!0:g=!0),type:"button",class:"mx-3 rounded-full bg-wwGreen p-2 text-white shadow-sm hover:bg-wwDarkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwDarkGreen"},[n(t(te),{class:"h-5 w-5","aria-hidden":"true"})])])]),e("main",null,[e("div",He,[Te,y.value.length>0?(a(),i("ul",Ee,[(a(!0),i(h,null,x(y.value,(l,s)=>(a(),i("li",{key:s,class:"flex gap-x-4 py-5"},[e("div",We,[e("div",Fe,[e("p",Ie,[e("span",{onClick:w=>U(l),class:"mr-3 inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700"},[n(t(ne),{class:"h-5 w-5"}),p(" "+d(l.likes),1)],8,Oe),e("span",{onClick:w=>M(l),class:"inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700"},[n(t(se),{class:"h-5 w-5"}),p(" "+d(l.dislikes),1)],8,Xe)])]),e("p",Ye,d(l.suggestion),1)])]))),128))])):(a(),i("h1",qe," Es sind noch keine Vorschläge vorhanden "))])])])],64))}};export{Ke as default};
