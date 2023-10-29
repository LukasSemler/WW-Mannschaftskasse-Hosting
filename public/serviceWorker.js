(function(){"use strict";try{self["workbox:core:7.0.0"]&&_()}catch{}const z=(s,...e)=>{let t=s;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};class l extends Error{constructor(e,t){const n=z(e,t);super(n),this.name=e,this.details=t}}const d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},T=s=>[d.prefix,s,d.suffix].filter(e=>e&&e.length>0).join("-"),J=s=>{for(const e of Object.keys(d))s(e)},g={updateDetails:s=>{J(e=>{typeof s[e]=="string"&&(d[e]=s[e])})},getGoogleAnalyticsName:s=>s||T(d.googleAnalytics),getPrecacheName:s=>s||T(d.precache),getPrefix:()=>d.prefix,getRuntimeName:s=>s||T(d.runtime),getSuffix:()=>d.suffix},Be=null;function S(s,e){const t=e();return s.waitUntil(t),t}try{self["workbox:precaching:7.0.0"]&&_()}catch{}const Y="__WB_REVISION__";function Z(s){if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:s});if(typeof s=="string"){const r=new URL(s,location.href);return{cacheKey:r.href,url:r.href}}const{revision:e,url:t}=s;if(!t)throw new l("add-to-cache-list-unexpected-type",{entry:s});if(!e){const r=new URL(t,location.href);return{cacheKey:r.href,url:r.href}}const n=new URL(t,location.href),a=new URL(t,location.href);return n.searchParams.set(Y,e),{cacheKey:n.href,url:a.href}}class X{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:n})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;n?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return n}}}class ee{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:n})=>{const a=(n==null?void 0:n.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}let m;function te(){if(m===void 0){const s=new Response("");if("body"in s)try{new Response(s.body),m=!0}catch{m=!1}m=!1}return m}async function se(s,e){let t=null;if(s.url&&(t=new URL(s.url).origin),t!==self.location.origin)throw new l("cross-origin-copy-response",{origin:t});const n=s.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=e?e(a):a,i=te()?n.body:await n.blob();return new Response(i,r)}const ne=s=>new URL(String(s),location.href).href.replace(new RegExp(`^${location.origin}`),"");function K(s,e){const t=new URL(s);for(const n of e)t.searchParams.delete(n);return t.href}async function ae(s,e,t,n){const a=K(e.url,t);if(e.url===a)return s.match(e,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),i=await s.keys(e,r);for(const c of i){const o=K(c.url,t);if(a===o)return s.match(c,n)}}class re{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const O=new Set;async function ie(){for(const s of O)await s()}function ce(s){return new Promise(e=>setTimeout(e,s))}try{self["workbox:strategies:7.0.0"]&&_()}catch{}function C(s){return typeof s=="string"?new Request(s):s}class oe{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new re,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=C(e);if(n.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const i=await t.preloadResponse;if(i)return i}const a=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const i of this.iterateCallbacks("requestWillFetch"))n=await i({request:n.clone(),event:t})}catch(i){if(i instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const r=n.clone();try{let i;i=await fetch(n,n.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const c of this.iterateCallbacks("fetchDidSucceed"))i=await c({event:t,request:r,response:i});return i}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:t,originalRequest:a.clone(),request:r.clone()}),i}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=C(e);let n;const{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},r),{cacheName:a});n=await caches.match(i,c);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await o({cacheName:a,matchOptions:r,cachedResponse:n,request:i,event:this.event})||void 0;return n}async cachePut(e,t){const n=C(e);await ce(0);const a=await this.getCacheKey(n,"write");if(!t)throw new l("cache-put-with-no-response",{url:ne(a.url)});const r=await this._ensureResponseSafeToCache(t);if(!r)return!1;const{cacheName:i,matchOptions:c}=this._strategy,o=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),b=h?await ae(o,a.clone(),["__WB_REVISION__"],c):null;try{await o.put(a,h?r.clone():r)}catch(u){if(u instanceof Error)throw u.name==="QuotaExceededError"&&await ie(),u}for(const u of this.iterateCallbacks("cacheDidUpdate"))await u({cacheName:i,oldResponse:b,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let a=e;for(const r of this.iterateCallbacks("cacheKeyWillBeUsed"))a=C(await r({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[n]=a}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const n=this._pluginStateMap.get(t);yield r=>{const i=Object.assign(Object.assign({},r),{state:n});return t[e](i)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&t.status!==200&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=g.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,r=new oe(this,{event:t,request:n,params:a}),i=this._getResponse(r,n,t),c=this._awaitComplete(i,r,n,t);return[i,c]}async _getResponse(e,t,n){await e.runCallbacks("handlerWillStart",{event:n,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new l("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(const i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:n,request:t}),a)break}if(!a)throw r}for(const r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:n,request:t,response:a});return a}async _awaitComplete(e,t,n,a){let r,i;try{r=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:a,request:n,response:r}),await t.doneWaiting()}catch(c){c instanceof Error&&(i=c)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:n,response:r,error:i}),t.destroy(),i)throw i}}class p extends v{constructor(e={}){e.cacheName=g.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(p.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const n=await t.cacheMatch(e);return n||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const a=t.params||{};if(this._fallbackToNetwork){const r=a.integrity,i=e.integrity,c=!i||i===r;n=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?i||r:void 0})),r&&c&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}else throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new l("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,a]of this.plugins.entries())a!==p.copyRedirectedCacheableResponsesPlugin&&(a===p.defaultPrecacheCacheabilityPlugin&&(e=n),a.cacheWillUpdate&&t++);t===0?this.plugins.push(p.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}p.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:s}){return!s||s.status>=400?null:s}},p.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:s}){return s.redirected?await se(s):s}};class he{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new p({cacheName:g.getPrecacheName(e),plugins:[...t,new ee({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const n of e){typeof n=="string"?t.push(n):n&&n.revision===void 0&&t.push(n.url);const{cacheKey:a,url:r}=Z(n),i=typeof n!="string"&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==a)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:a});if(typeof n!="string"&&n.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==n.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(a,n.integrity)}if(this._urlsToCacheKeys.set(r,a),this._urlsToCacheModes.set(r,i),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(c)}}}install(e){return S(e,async()=>{const t=new X;this.strategy.plugins.push(t);for(const[r,i]of this._urlsToCacheKeys){const c=this._cacheKeysToIntegrities.get(i),o=this._urlsToCacheModes.get(r),h=new Request(r,{integrity:c,cache:o,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:i},request:h,event:e}))}const{updatedURLs:n,notUpdatedURLs:a}=t;return{updatedURLs:n,notUpdatedURLs:a}})}activate(e){return S(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),n=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),r=[];for(const i of n)a.has(i.url)||(await t.delete(i),r.push(i.url));return{deletedURLs:r}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n)return(await self.caches.open(this.strategy.cacheName)).match(n)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return n=>(n.request=new Request(e),n.params=Object.assign({cacheKey:t},n.params),this.strategy.handle(n))}}let D;const W=()=>(D||(D=new he),D);try{self["workbox:routing:7.0.0"]&&_()}catch{}const B="GET",x=s=>s&&typeof s=="object"?s:{handle:s};class w{constructor(e,t,n=B){this.handler=x(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=x(e)}}class le extends w{constructor(e,t,n){const a=({url:r})=>{const i=e.exec(r.href);if(i&&!(r.origin!==location.origin&&i.index!==0))return i.slice(1)};super(a,t,n)}}class ue{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,n=this.handleRequest({request:t,event:e});n&&e.respondWith(n)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,n=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const r=new Request(...a);return this.handleRequest({request:r,event:e})}));e.waitUntil(n),e.ports&&e.ports[0]&&n.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const n=new URL(e.url,location.href);if(!n.protocol.startsWith("http"))return;const a=n.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:n});let c=i&&i.handler;const o=e.method;if(!c&&this._defaultHandlerMap.has(o)&&(c=this._defaultHandlerMap.get(o)),!c)return;let h;try{h=c.handle({url:n,request:e,event:t,params:r})}catch(u){h=Promise.reject(u)}const b=i&&i.catchHandler;return h instanceof Promise&&(this._catchHandler||b)&&(h=h.catch(async u=>{if(b)try{return await b.handle({url:n,request:e,event:t,params:r})}catch(Q){Q instanceof Error&&(u=Q)}if(this._catchHandler)return this._catchHandler.handle({url:n,request:e,event:t});throw u})),h}findMatchingRoute({url:e,sameOrigin:t,request:n,event:a}){const r=this._routes.get(n.method)||[];for(const i of r){let c;const o=i.match({url:e,sameOrigin:t,request:n,event:a});if(o)return c=o,(Array.isArray(c)&&c.length===0||o.constructor===Object&&Object.keys(o).length===0||typeof o=="boolean")&&(c=void 0),{route:i,params:c}}return{}}setDefaultHandler(e,t=B){this._defaultHandlerMap.set(t,x(e))}setCatchHandler(e){this._catchHandler=x(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}}let y;const de=()=>(y||(y=new ue,y.addFetchListener(),y.addCacheListener()),y);function E(s,e,t){let n;if(typeof s=="string"){const r=new URL(s,location.href),i=({url:c})=>c.href===r.href;n=new w(i,e,t)}else if(s instanceof RegExp)n=new le(s,e,t);else if(typeof s=="function")n=new w(s,e,t);else if(s instanceof w)n=s;else throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return de().registerRoute(n),n}function fe(s,e=[]){for(const t of[...s.searchParams.keys()])e.some(n=>n.test(t))&&s.searchParams.delete(t);return s}function*pe(s,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:n=!0,urlManipulation:a}={}){const r=new URL(s,location.href);r.hash="",yield r.href;const i=fe(r,e);if(yield i.href,t&&i.pathname.endsWith("/")){const c=new URL(i.href);c.pathname+=t,yield c.href}if(n){const c=new URL(i.href);c.pathname+=".html",yield c.href}if(a){const c=a({url:r});for(const o of c)yield o.href}}class ge extends w{constructor(e,t){const n=({request:a})=>{const r=e.getURLsToCacheKeys();for(const i of pe(a.url,t)){const c=r.get(i);if(c){const o=e.getIntegrityForCacheKey(c);return{cacheKey:c,integrity:o}}}};super(n,e.strategy)}}function me(s){const e=W(),t=new ge(e,s);E(t)}const we="-precache-",ye=async(s,e=we)=>{const n=(await self.caches.keys()).filter(a=>a.includes(e)&&a.includes(self.registration.scope)&&a!==s);return await Promise.all(n.map(a=>self.caches.delete(a))),n};function _e(){self.addEventListener("activate",s=>{const e=g.getPrecacheName();s.waitUntil(ye(e).then(t=>{}))})}function Re(s){W().precache(s)}function be(s,e){Re(s),me(e)}const Ce={cacheWillUpdate:async({response:s})=>s.status===200||s.status===0?s:null};class L extends v{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(Ce),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const n=[],a=[];let r;if(this._networkTimeoutSeconds){const{id:o,promise:h}=this._getTimeoutPromise({request:e,logs:n,handler:t});r=o,a.push(h)}const i=this._getNetworkPromise({timeoutId:r,request:e,logs:n,handler:t});a.push(i);const c=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await i)());if(!c)throw new l("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:n}){let a;return{promise:new Promise(i=>{a=setTimeout(async()=>{i(await n.cacheMatch(e))},this._networkTimeoutSeconds*1e3)}),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:n,handler:a}){let r,i;try{i=await a.fetchAndCachePut(t)}catch(c){c instanceof Error&&(r=c)}return e&&clearTimeout(e),(r||!i)&&(i=await a.cacheMatch(t)),i}}function j(s){s.then(()=>{})}const xe=(s,e)=>e.some(t=>s instanceof t);let F,q;function Ee(){return F||(F=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Te(){return q||(q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H=new WeakMap,k=new WeakMap,V=new WeakMap,P=new WeakMap,U=new WeakMap;function De(s){const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("success",r),s.removeEventListener("error",i)},r=()=>{t(f(s.result)),a()},i=()=>{n(s.error),a()};s.addEventListener("success",r),s.addEventListener("error",i)});return e.then(t=>{t instanceof IDBCursor&&H.set(t,s)}).catch(()=>{}),U.set(e,s),e}function Le(s){if(k.has(s))return;const e=new Promise((t,n)=>{const a=()=>{s.removeEventListener("complete",r),s.removeEventListener("error",i),s.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(s.error||new DOMException("AbortError","AbortError")),a()};s.addEventListener("complete",r),s.addEventListener("error",i),s.addEventListener("abort",i)});k.set(s,e)}let N={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return k.get(s);if(e==="objectStoreNames")return s.objectStoreNames||V.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return f(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function ke(s){N=s(N)}function Pe(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(I(this),e,...t);return V.set(n,e.sort?e.sort():[e]),f(n)}:Te().includes(s)?function(...e){return s.apply(I(this),e),f(H.get(this))}:function(...e){return f(s.apply(I(this),e))}}function Ue(s){return typeof s=="function"?Pe(s):(s instanceof IDBTransaction&&Le(s),xe(s,Ee())?new Proxy(s,N):s)}function f(s){if(s instanceof IDBRequest)return De(s);if(P.has(s))return P.get(s);const e=Ue(s);return e!==s&&(P.set(s,e),U.set(e,s)),e}const I=s=>U.get(s);function Ne(s,e,{blocked:t,upgrade:n,blocking:a,terminated:r}={}){const i=indexedDB.open(s,e),c=f(i);return n&&i.addEventListener("upgradeneeded",o=>{n(f(i.result),o.oldVersion,o.newVersion,f(i.transaction),o)}),t&&i.addEventListener("blocked",o=>t(o.oldVersion,o.newVersion,o)),c.then(o=>{r&&o.addEventListener("close",()=>r()),a&&o.addEventListener("versionchange",h=>a(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}function Ie(s,{blocked:e}={}){const t=indexedDB.deleteDatabase(s);return e&&t.addEventListener("blocked",n=>e(n.oldVersion,n)),f(t).then(()=>{})}const Ae=["get","getKey","getAll","getAllKeys","count"],Me=["put","add","delete","clear"],A=new Map;function $(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(A.get(e))return A.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=Me.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||Ae.includes(t)))return;const r=async function(i,...c){const o=this.transaction(i,a?"readwrite":"readonly");let h=o.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),a&&o.done]))[0]};return A.set(e,r),r}ke(s=>({...s,get:(e,t,n)=>$(e,t)||s.get(e,t,n),has:(e,t)=>!!$(e,t)||s.has(e,t)}));try{self["workbox:expiration:7.0.0"]&&_()}catch{}const Se="workbox-expiration",R="cache-entries",G=s=>{const e=new URL(s,location.href);return e.hash="",e.href};class Ke{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(R,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&Ie(this._cacheName)}async setTimestamp(e,t){e=G(e);const n={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},r=(await this.getDb()).transaction(R,"readwrite",{durability:"relaxed"});await r.store.put(n),await r.done}async getTimestamp(e){const n=await(await this.getDb()).get(R,this._getId(e));return n==null?void 0:n.timestamp}async expireEntries(e,t){const n=await this.getDb();let a=await n.transaction(R).store.index("timestamp").openCursor(null,"prev");const r=[];let i=0;for(;a;){const o=a.value;o.cacheName===this._cacheName&&(e&&o.timestamp<e||t&&i>=t?r.push(a.value):i++),a=await a.continue()}const c=[];for(const o of r)await n.delete(R,o.id),c.push(o.url);return c}_getId(e){return this._cacheName+"|"+G(e)}async getDb(){return this._db||(this._db=await Ne(Se,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class Oe{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new Ke(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName);for(const a of t)await n.delete(a,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,j(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),n=Date.now()-this._maxAgeSeconds*1e3;return t!==void 0?t<n:!0}else return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}function ve(s){O.add(s)}class M{constructor(e={}){this.cachedResponseWillBeUsed=async({event:t,request:n,cacheName:a,cachedResponse:r})=>{if(!r)return null;const i=this._isResponseDateFresh(r),c=this._getCacheExpiration(a);j(c.expireEntries());const o=c.updateTimestamp(n.url);if(t)try{t.waitUntil(o)}catch{}return i?r:null},this.cacheDidUpdate=async({cacheName:t,request:n})=>{const a=this._getCacheExpiration(t);await a.updateTimestamp(n.url),await a.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&ve(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===g.getRuntimeName())throw new l("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new Oe(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(t===null)return!0;const n=Date.now();return t>=n-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),a=new Date(t).getTime();return isNaN(a)?null:a}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}_e(),be([{"revision":null,"url":"assets/AddAmountView-041dcd8f.js"},{"revision":null,"url":"assets/AddAmountView-1387e994.js"},{"revision":null,"url":"assets/AddAmountView-18131b7c.js"},{"revision":null,"url":"assets/AddAmountView-2161230b.js"},{"revision":null,"url":"assets/AddAmountView-2958590f.js"},{"revision":null,"url":"assets/AddAmountView-35226759.js"},{"revision":null,"url":"assets/AddAmountView-62015015.js"},{"revision":null,"url":"assets/AddAmountView-73d40d83.js"},{"revision":null,"url":"assets/AddAmountView-79fbc4e1.js"},{"revision":null,"url":"assets/AddAmountView-800b2608.js"},{"revision":null,"url":"assets/AddAmountView-8362c73d.js"},{"revision":null,"url":"assets/AddAmountView-88676e9b.js"},{"revision":null,"url":"assets/AddAmountView-8a4ad20e.js"},{"revision":null,"url":"assets/AddAmountView-9868e2f1.js"},{"revision":null,"url":"assets/AddAmountView-9b2551cd.js"},{"revision":null,"url":"assets/AddAmountView-9fca4912.js"},{"revision":null,"url":"assets/AddAmountView-b498975d.js"},{"revision":null,"url":"assets/AddAmountView-b565e839.js"},{"revision":null,"url":"assets/AddAmountView-d212dc02.js"},{"revision":null,"url":"assets/AddAmountView-d306883f.js"},{"revision":null,"url":"assets/AddAmountView-dc4f96e2.js"},{"revision":null,"url":"assets/AddAmountView-f45a7cbc.js"},{"revision":null,"url":"assets/AddAmountView-f7277a0f.js"},{"revision":null,"url":"assets/AddAmountView-fd860938.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-10b7c86d.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-11fc71c1.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-4cc7d067.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-55f26fd9.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-5706bedc.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-681e0fb6.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-6eb22c53.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-72dc220c.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-77135357.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-8aa5271c.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-8de09ae2.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-8dfafd49.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-8e624b35.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-9fc692fc.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-a7fb1b12.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-a9e511aa.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-ad1daf7f.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-cef73037.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-e06c9952.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-e54c700f.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-e7c53dcc.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-ff2747d7.js"},{"revision":null,"url":"assets/index-05107369.js"},{"revision":null,"url":"assets/index-0c60e613.js"},{"revision":null,"url":"assets/index-1137c5b9.css"},{"revision":null,"url":"assets/index-1a63d944.js"},{"revision":null,"url":"assets/index-2d224952.css"},{"revision":null,"url":"assets/index-3af70139.js"},{"revision":null,"url":"assets/index-3e03b03a.js"},{"revision":null,"url":"assets/index-413c3d9a.css"},{"revision":null,"url":"assets/index-44015d91.js"},{"revision":null,"url":"assets/index-47afbce0.js"},{"revision":null,"url":"assets/index-48ffb9bd.js"},{"revision":null,"url":"assets/index-56501641.js"},{"revision":null,"url":"assets/index-695b23ed.js"},{"revision":null,"url":"assets/index-6d85f22a.js"},{"revision":null,"url":"assets/index-738d5c8a.js"},{"revision":null,"url":"assets/index-76d35dbf.js"},{"revision":null,"url":"assets/index-8573fe01.js"},{"revision":null,"url":"assets/index-8aa9671e.js"},{"revision":null,"url":"assets/index-9396c517.css"},{"revision":null,"url":"assets/index-9c892d64.js"},{"revision":null,"url":"assets/index-adac0ab1.js"},{"revision":null,"url":"assets/index-b09a1467.js"},{"revision":null,"url":"assets/index-badc2e99.js"},{"revision":null,"url":"assets/index-be7f8085.css"},{"revision":null,"url":"assets/index-cd2f63e2.css"},{"revision":null,"url":"assets/index-cf5ffed8.js"},{"revision":null,"url":"assets/index-d584516f.css"},{"revision":null,"url":"assets/index-e3d1d134.js"},{"revision":null,"url":"assets/index-e86f72d5.js"},{"revision":null,"url":"assets/index-ea0e2642.js"},{"revision":null,"url":"assets/index-ea7ad742.js"},{"revision":null,"url":"assets/index.2ea22126.css"},{"revision":null,"url":"assets/index.8649c9be.js"},{"revision":null,"url":"assets/index.98c10644.css"},{"revision":null,"url":"assets/index.a4df08fb.js"},{"revision":null,"url":"assets/index.ac6be6f1.js"},{"revision":null,"url":"assets/index.b2161da0.js"},{"revision":null,"url":"assets/index.b9b5955d.js"},{"revision":null,"url":"assets/LoginUserView-01c843b3.js"},{"revision":null,"url":"assets/LoginUserView-126c8d78.js"},{"revision":null,"url":"assets/LoginUserView-298cd862.js"},{"revision":null,"url":"assets/LoginUserView-2aab001a.js"},{"revision":null,"url":"assets/LoginUserView-432fa52b.js"},{"revision":null,"url":"assets/LoginUserView-482e9e03.js"},{"revision":null,"url":"assets/LoginUserView-590d35eb.js"},{"revision":null,"url":"assets/LoginUserView-6e4c3241.js"},{"revision":null,"url":"assets/LoginUserView-8001cb4c.js"},{"revision":null,"url":"assets/LoginUserView-8108ac0f.js"},{"revision":null,"url":"assets/LoginUserView-8568615d.js"},{"revision":null,"url":"assets/LoginUserView-8d4826a7.js"},{"revision":null,"url":"assets/LoginUserView-a398e822.js"},{"revision":null,"url":"assets/LoginUserView-a5e2fdc2.js"},{"revision":null,"url":"assets/LoginUserView-a7ffbda2.js"},{"revision":null,"url":"assets/LoginUserView-b6bd8f5c.js"},{"revision":null,"url":"assets/LoginUserView-bd2a5a6f.js"},{"revision":null,"url":"assets/LoginUserView-c8c852ad.js"},{"revision":null,"url":"assets/LoginUserView-db130300.js"},{"revision":null,"url":"assets/LoginUserView-df8abce0.js"},{"revision":null,"url":"assets/LoginUserView-dfcdfe99.js"},{"revision":null,"url":"assets/LoginUserView-e71a5a06.js"},{"revision":null,"url":"assets/LoginUserView-ec69b3e1.js"},{"revision":null,"url":"assets/LoginUserView-fb088326.js"},{"revision":null,"url":"assets/RulesView-0d7698aa.js"},{"revision":null,"url":"assets/RulesView-1531bef9.js"},{"revision":null,"url":"assets/RulesView-391643c1.js"},{"revision":null,"url":"assets/RulesView-3cb93216.js"},{"revision":null,"url":"assets/RulesView-3d6a54a6.js"},{"revision":null,"url":"assets/RulesView-3e27c630.js"},{"revision":null,"url":"assets/RulesView-409e5c08.js"},{"revision":null,"url":"assets/RulesView-4703f399.js"},{"revision":null,"url":"assets/RulesView-50d5e7c3.js"},{"revision":null,"url":"assets/RulesView-5e8f169f.js"},{"revision":null,"url":"assets/RulesView-726d8db5.js"},{"revision":null,"url":"assets/RulesView-7cf2760a.js"},{"revision":null,"url":"assets/RulesView-a8cf2856.js"},{"revision":null,"url":"assets/RulesView-a99aff18.js"},{"revision":null,"url":"assets/RulesView-b3ff83be.js"},{"revision":null,"url":"assets/RulesView-bc0f8958.js"},{"revision":null,"url":"assets/RulesView-c7001252.js"},{"revision":null,"url":"assets/RulesView-c7fa01c3.js"},{"revision":null,"url":"assets/RulesView-cd6daf5c.js"},{"revision":null,"url":"assets/RulesView-cdb1cb76.js"},{"revision":null,"url":"assets/RulesView-d2526450.js"},{"revision":null,"url":"assets/RulesView-d5deacdf.js"},{"revision":null,"url":"assets/RulesView-df546988.js"},{"revision":null,"url":"assets/RulesView-f109ece5.js"},{"revision":null,"url":"assets/StatisticsView-034f9b5a.js"},{"revision":null,"url":"assets/StatisticsView-1379cfa1.js"},{"revision":null,"url":"assets/StatisticsView-1fd35206.js"},{"revision":null,"url":"assets/StatisticsView-20060e06.js"},{"revision":null,"url":"assets/StatisticsView-3e23b269.js"},{"revision":null,"url":"assets/StatisticsView-43dd1a44.js"},{"revision":null,"url":"assets/StatisticsView-47994dd2.js"},{"revision":null,"url":"assets/StatisticsView-4838c898.js"},{"revision":null,"url":"assets/StatisticsView-4edd4ac2.js"},{"revision":null,"url":"assets/StatisticsView-5f18898d.js"},{"revision":null,"url":"assets/StatisticsView-6ced65eb.js"},{"revision":null,"url":"assets/StatisticsView-71a39ad6.js"},{"revision":null,"url":"assets/StatisticsView-7b8b710a.js"},{"revision":null,"url":"assets/StatisticsView-7ebbbba8.js"},{"revision":null,"url":"assets/StatisticsView-87cf4ac3.js"},{"revision":null,"url":"assets/StatisticsView-8d599aa0.js"},{"revision":null,"url":"assets/StatisticsView-a617eca6.js"},{"revision":null,"url":"assets/StatisticsView-b3f1b7e2.js"},{"revision":null,"url":"assets/StatisticsView-b664d789.js"},{"revision":null,"url":"assets/StatisticsView-c0724076.js"},{"revision":null,"url":"assets/StatisticsView-e7da7bac.js"},{"revision":null,"url":"assets/StatisticsView-eaeed037.js"},{"revision":null,"url":"assets/StatisticsView-edbffc43.js"},{"revision":null,"url":"assets/StatPerPlayerView-2cb83f7d.js"},{"revision":null,"url":"assets/StatPerPlayerView-31d88c20.js"},{"revision":null,"url":"assets/StatPerPlayerView-331c2713.js"},{"revision":null,"url":"assets/StatPerPlayerView-332db630.js"},{"revision":null,"url":"assets/StatPerPlayerView-35e6458c.js"},{"revision":null,"url":"assets/StatPerPlayerView-46099741.js"},{"revision":null,"url":"assets/StatPerPlayerView-4756ce45.js"},{"revision":null,"url":"assets/StatPerPlayerView-48b23534.js"},{"revision":null,"url":"assets/StatPerPlayerView-67e20403.js"},{"revision":null,"url":"assets/StatPerPlayerView-68aaaad2.js"},{"revision":null,"url":"assets/StatPerPlayerView-7884e086.js"},{"revision":null,"url":"assets/StatPerPlayerView-7be79a29.js"},{"revision":null,"url":"assets/StatPerPlayerView-81e18037.js"},{"revision":null,"url":"assets/StatPerPlayerView-87b921f7.js"},{"revision":null,"url":"assets/StatPerPlayerView-9287df2b.js"},{"revision":null,"url":"assets/StatPerPlayerView-9b104e51.js"},{"revision":null,"url":"assets/StatPerPlayerView-9e106548.js"},{"revision":null,"url":"assets/StatPerPlayerView-a4af2c18.js"},{"revision":null,"url":"assets/StatPerPlayerView-b8b7b30c.js"},{"revision":null,"url":"assets/StatPerPlayerView-bf1a10f9.js"},{"revision":null,"url":"assets/StatPerPlayerView-dd0b80a6.js"},{"revision":null,"url":"assets/StatPerPlayerView-e5add807.js"},{"revision":null,"url":"assets/SuggestionsView-04063373.js"},{"revision":null,"url":"assets/SuggestionsView-17ea53b8.js"},{"revision":null,"url":"assets/SuggestionsView-19f213cc.js"},{"revision":null,"url":"assets/SuggestionsView-1a634beb.js"},{"revision":null,"url":"assets/SuggestionsView-4a0647c3.js"},{"revision":null,"url":"assets/SuggestionsView-5e265069.js"},{"revision":null,"url":"assets/SuggestionsView-859b108f.js"},{"revision":null,"url":"assets/SuggestionsView-9967990d.js"},{"revision":null,"url":"assets/SuggestionsView-b8a2bb2b.js"},{"revision":null,"url":"assets/SuggestionsView-cc8ac68e.js"},{"revision":null,"url":"assets/SuggestionsView-d4114349.js"},{"revision":null,"url":"assets/SuggestionsView-def844a3.js"},{"revision":null,"url":"assets/SuggestionsView-e3c6fde5.js"},{"revision":null,"url":"assets/SuggestionsView-e6ab06f5.js"},{"revision":null,"url":"assets/SuggestionsView-ee50f2a1.js"},{"revision":null,"url":"assets/SuggestionsView-f00d10d7.js"},{"revision":null,"url":"assets/SuggestionsView-febe9e44.js"},{"revision":null,"url":"assets/vendor.01148ce3.js"},{"revision":null,"url":"assets/vendor.7df8d123.js"},{"revision":null,"url":"assets/vendor.fb7b22b2.js"},{"revision":"3d5ef2bf867c4054a2f336cdbad9e1dc","url":"css/all.min.css"},{"revision":"2f462854cb23cfeb44566def05f2bcd9","url":"index.html"},{"revision":"6d6fdd92b3bed11df7161f3de48c44a7","url":"myNewsSW.js"},{"revision":"ee55de1576ef3e021e451e05e95ef075","url":"registerSW.js"},{"revision":"f5a5c8e024df76b2b3cd5247cffa7dc3","url":"sw.js"},{"revision":null,"url":"workbox-fa446783.js"},{"revision":"9b8f4d0402b1ea2f0582e66287869acc","url":"AppIcons/android-chrome-192x192.png"},{"revision":"8d1d002636c0a8079b1d6135dcca0435","url":"AppIcons/android-chrome-256x256.png"},{"revision":"a46f5df2517bf3be4d2c9197e398cbd7","url":"account.png"},{"revision":"f14e0db2d3d2f3d0e38dcc61311cf300","url":"logo1.png"},{"revision":"55c3f018c690612fa1b36daf38dfaeac","url":"logo2.jpeg"},{"revision":"8e3a10e157f75ada21ab742c022d5430","url":"vite.svg"},{"revision":"3820d269e0b466f7d82be499887ff29d","url":"AppIcons/apple-touch-icon.png"},{"revision":"ba4de351ea55ab72d6cb2689ed8e5c06","url":"AppIcons/favicon-16x16.png"},{"revision":"76fc5eb068144d4c3b53be765a7a9b2f","url":"AppIcons/favicon-32x32.png"},{"revision":"03ecfeadeb70a38ee51b5e9a8f5c30e7","url":"AppIcons/favicon.ico"},{"revision":"43b1b84941ae5559c77e8985c241d3db","url":"AppIcons/mstile-150x150.png"},{"revision":"ca10b9fa5450726321db82cccbec7d04","url":"AppIcons/safari-pinned-tab.svg"},{"revision":"f88d21f11c1d3148d9b33d4dccb66109","url":"PlayerImages/Androsch.jpg"},{"revision":"7ec9efcea141f8e2f93710b15908dc87","url":"PlayerImages/Androsch2.jpg"},{"revision":"02f3df4ec0b386ebfb7bee92c30cc434","url":"PlayerImages/Bachmann.jpg"},{"revision":"b582027b09b2f29d235ca61e4e51c1cb","url":"PlayerImages/Correa.jpg"},{"revision":"022a094d5462b62a3df2b0335c0d4d7c","url":"PlayerImages/Domian.jpg"},{"revision":"12a0b9405bfdb466ac55dbe3bec7fc21","url":"PlayerImages/Florea-1.jpg"},{"revision":"4a5dfbd9bc4936c7a6f51125a0c32209","url":"PlayerImages/Halmer-B.jpg"},{"revision":"1398af551944377b7ff735ab166f096b","url":"PlayerImages/Halmer-E.jpeg"},{"revision":"d1f78c5a7bdd774366700b696589c3e7","url":"PlayerImages/Kutej.jpg"},{"revision":"574346e7978c4e25da23a534b7d56b92","url":"PlayerImages/Musalek.jpg"},{"revision":"4e049840b1b2361ada21d9b5b5ecec87","url":"PlayerImages/Pajer.jpeg"},{"revision":"2ea3d1c19f776a25b66b21a665e39316","url":"PlayerImages/Pantic.jpg"},{"revision":"08bc7b345123059bf8ad0222af30d802","url":"PlayerImages/Prantl.jpg"},{"revision":"c0bf04991672d326a4031f64daab599f","url":"PlayerImages/Reinisch.jpg"},{"revision":"43d2b5238f8acf1a3a0cb29e026ba7fa","url":"PlayerImages/Ruprecht.jpg"},{"revision":"8a55ead5a3dd6eb59f3d9836a5f988b1","url":"PlayerImages/Schmid-Dani.jpeg"},{"revision":"da742daee5a2eec7b718fdb5fd3eb594","url":"PlayerImages/Schmid-S.jpg"},{"revision":"276324ef0776058a0646a51d55d79764","url":"PlayerImages/Semler2.jpg"},{"revision":"9c40d16e2464ccb78a3b49bb6c5e685b","url":"PlayerImages/Steiner.jpg"},{"revision":"f2cfe3d204cea8ad5247611eebae025a","url":"PlayerImages/Wallner.jpg"},{"revision":"d19b53feda0caf8516a251dff3de1ee2","url":"PlayerImages/Wilk.jpg"},{"revision":"4f03ae43d49fd1251544729280805c50","url":"PlayerImages/Wiltschko.jpg"},{"revision":"5e4632926f35d08ac44ba46903c95ece","url":"manifest.webmanifest"}]),self.addEventListener("message",s=>{const{type:e,data:t}=JSON.parse(s.data);console.log(`TYPE: ${e} | DATA: ${t}`),e=="SKIP_WAITING"&&(self.skipWaiting(),console.log("SERVICEWORKER IS ACTIVE")),e=="CLEAR_CACHE"&&(console.log(`Cache: ${t} wurde gelöscht`),caches.delete(t==null?void 0:t.toString()))}),E(({url:s})=>s.pathname.match("/zahlung"),new L({cacheName:"ZahlungenCache",plugins:[new M({maxEntries:60,maxAgeSeconds:30*24*60*60})]})),E(({url:s})=>s.pathname.match("/spieler"),new L({cacheName:"SpielerCache",plugins:[new M({maxEntries:60,maxAgeSeconds:30*24*60*60})]})),E(({url:s})=>s.pathname.match("/ausgaben"),new L({cacheName:"AusgabenCache",plugins:[new M({maxEntries:60,maxAgeSeconds:30*24*60*60})]}))})();
