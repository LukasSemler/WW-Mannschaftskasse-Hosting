(function(){"use strict";try{self["workbox:core:7.0.0"]&&_()}catch{}const I=(a,...e)=>{let t=a;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};class l extends Error{constructor(e,t){const s=I(e,t);super(s),this.name=e,this.details=t}}const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},k=a=>[f.prefix,a,f.suffix].filter(e=>e&&e.length>0).join("-"),O=a=>{for(const e of Object.keys(f))a(e)},R={updateDetails:a=>{O(e=>{typeof a[e]=="string"&&(f[e]=a[e])})},getGoogleAnalyticsName:a=>a||k(f.googleAnalytics),getPrecacheName:a=>a||k(f.precache),getPrefix:()=>f.prefix,getRuntimeName:a=>a||k(f.runtime),getSuffix:()=>f.suffix},oe=null;function L(a,e){const t=e();return a.waitUntil(t),t}try{self["workbox:precaching:7.0.0"]&&_()}catch{}const v="__WB_REVISION__";function A(a){if(!a)throw new l("add-to-cache-list-unexpected-type",{entry:a});if(typeof a=="string"){const c=new URL(a,location.href);return{cacheKey:c.href,url:c.href}}const{revision:e,url:t}=a;if(!t)throw new l("add-to-cache-list-unexpected-type",{entry:a});if(!e){const c=new URL(t,location.href);return{cacheKey:c.href,url:c.href}}const s=new URL(t,location.href),n=new URL(t,location.href);return s.searchParams.set(v,e),{cacheKey:s.href,url:n.href}}class S{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const n=t.originalRequest.url;s?this.notUpdatedURLs.push(n):this.updatedURLs.push(n)}return s}}}class M{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:s})=>{const n=(s==null?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=e}}let g;function W(){if(g===void 0){const a=new Response("");if("body"in a)try{new Response(a.body),g=!0}catch{g=!1}g=!1}return g}async function D(a,e){let t=null;if(a.url&&(t=new URL(a.url).origin),t!==self.location.origin)throw new l("cross-origin-copy-response",{origin:t});const s=a.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},c=e?e(n):n,r=W()?s.body:await s.blob();return new Response(r,c)}const q=a=>new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),"");function T(a,e){const t=new URL(a);for(const s of e)t.searchParams.delete(s);return t.href}async function F(a,e,t,s){const n=T(e.url,t);if(e.url===n)return a.match(e,s);const c=Object.assign(Object.assign({},s),{ignoreSearch:!0}),r=await a.keys(e,c);for(const i of r){const o=T(i.url,t);if(n===o)return a.match(i,s)}}class H{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const j=new Set;async function B(){for(const a of j)await a()}function $(a){return new Promise(e=>setTimeout(e,a))}try{self["workbox:strategies:7.0.0"]&&_()}catch{}function C(a){return typeof a=="string"?new Request(a):a}class V{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new H,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=C(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const r=await t.preloadResponse;if(r)return r}const n=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const r of this.iterateCallbacks("requestWillFetch"))s=await r({request:s.clone(),event:t})}catch(r){if(r instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:r.message})}const c=s.clone();try{let r;r=await fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const i of this.iterateCallbacks("fetchDidSucceed"))r=await i({event:t,request:c,response:r});return r}catch(r){throw n&&await this.runCallbacks("fetchDidFail",{error:r,event:t,originalRequest:n.clone(),request:c.clone()}),r}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=C(e);let s;const{cacheName:n,matchOptions:c}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},c),{cacheName:n});s=await caches.match(r,i);for(const o of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await o({cacheName:n,matchOptions:c,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=C(e);await $(0);const n=await this.getCacheKey(s,"write");if(!t)throw new l("cache-put-with-no-response",{url:q(n.url)});const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:r,matchOptions:i}=this._strategy,o=await self.caches.open(r),h=this.hasCallback("cacheDidUpdate"),m=h?await F(o,n.clone(),["__WB_REVISION__"],i):null;try{await o.put(n,h?c.clone():c)}catch(u){if(u instanceof Error)throw u.name==="QuotaExceededError"&&await B(),u}for(const u of this.iterateCallbacks("cacheDidUpdate"))await u({cacheName:r,oldResponse:m,newResponse:c.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let n=e;for(const c of this.iterateCallbacks("cacheKeyWillBeUsed"))n=C(await c({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[s]=n}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield c=>{const r=Object.assign(Object.assign({},c),{state:s});return t[e](r)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const n of this.iterateCallbacks("cacheWillUpdate"))if(t=await n({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&t.status!==200&&(t=void 0),t}}class K{constructor(e={}){this.cacheName=R.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,n="params"in e?e.params:void 0,c=new V(this,{event:t,request:s,params:n}),r=this._getResponse(c,s,t),i=this._awaitComplete(r,c,s,t);return[r,i]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let n;try{if(n=await this._handle(t,e),!n||n.type==="error")throw new l("no-response",{url:t.url})}catch(c){if(c instanceof Error){for(const r of e.iterateCallbacks("handlerDidError"))if(n=await r({error:c,event:s,request:t}),n)break}if(!n)throw c}for(const c of e.iterateCallbacks("handlerWillRespond"))n=await c({event:s,request:t,response:n});return n}async _awaitComplete(e,t,s,n){let c,r;try{c=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:c}),await t.doneWaiting()}catch(i){i instanceof Error&&(r=i)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:c,error:r}),t.destroy(),r)throw r}}class d extends K{constructor(e={}){e.cacheName=R.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(d.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const n=t.params||{};if(this._fallbackToNetwork){const c=n.integrity,r=e.integrity,i=!r||r===c;s=await t.fetch(new Request(e,{integrity:e.mode!=="no-cors"?r||c:void 0})),c&&i&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new l("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==d.copyRedirectedCacheableResponsesPlugin&&(n===d.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);t===0?this.plugins.push(d.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}d.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:a}){return!a||a.status>=400?null:a}},d.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:a}){return a.redirected?await D(a):a}};class G{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new d({cacheName:R.getPrecacheName(e),plugins:[...t,new M({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:n,url:c}=A(s),r=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(c)&&this._urlsToCacheKeys.get(c)!==n)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(c),secondEntry:n});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(n)&&this._cacheKeysToIntegrities.get(n)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:c});this._cacheKeysToIntegrities.set(n,s.integrity)}if(this._urlsToCacheKeys.set(c,n),this._urlsToCacheModes.set(c,r),t.length>0){const i=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(i)}}}install(e){return L(e,async()=>{const t=new S;this.strategy.plugins.push(t);for(const[c,r]of this._urlsToCacheKeys){const i=this._cacheKeysToIntegrities.get(r),o=this._urlsToCacheModes.get(c),h=new Request(c,{integrity:i,cache:o,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:h,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}})}activate(e){return L(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),s=await t.keys(),n=new Set(this._urlsToCacheKeys.values()),c=[];for(const r of s)n.has(r.url)||(await t.delete(r),c.push(r.url));return{deletedURLs:c}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let P;const N=()=>(P||(P=new G),P);try{self["workbox:routing:7.0.0"]&&_()}catch{}const E="GET",b=a=>a&&typeof a=="object"?a:{handle:a};class p{constructor(e,t,s=E){this.handler=b(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=b(e)}}class z extends p{constructor(e,t,s){const n=({url:c})=>{const r=e.exec(c.href);if(r&&!(c.origin!==location.origin&&r.index!==0))return r.slice(1)};super(n,t,s)}}class J{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(n=>{typeof n=="string"&&(n=[n]);const c=new Request(...n);return this.handleRequest({request:c,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:c,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let i=r&&r.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let h;try{h=i.handle({url:s,request:e,event:t,params:c})}catch(u){h=Promise.reject(u)}const m=r&&r.catchHandler;return h instanceof Promise&&(this._catchHandler||m)&&(h=h.catch(async u=>{if(m)try{return await m.handle({url:s,request:e,event:t,params:c})}catch(x){x instanceof Error&&(u=x)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw u})),h}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const c=this._routes.get(s.method)||[];for(const r of c){let i;const o=r.match({url:e,sameOrigin:t,request:s,event:n});if(o)return i=o,(Array.isArray(i)&&i.length===0||o.constructor===Object&&Object.keys(o).length===0||typeof o=="boolean")&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t=E){this._defaultHandlerMap.set(t,b(e))}setCatchHandler(e){this._catchHandler=b(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}}let w;const Q=()=>(w||(w=new J,w.addFetchListener(),w.addCacheListener()),w);function y(a,e,t){let s;if(typeof a=="string"){const c=new URL(a,location.href),r=({url:i})=>i.href===c.href;s=new p(r,e,t)}else if(a instanceof RegExp)s=new z(a,e,t);else if(typeof a=="function")s=new p(a,e,t);else if(a instanceof p)s=a;else throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return Q().registerRoute(s),s}function Y(a,e=[]){for(const t of[...a.searchParams.keys()])e.some(s=>s.test(t))&&a.searchParams.delete(t);return a}function*Z(a,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={}){const c=new URL(a,location.href);c.hash="",yield c.href;const r=Y(c,e);if(yield r.href,t&&r.pathname.endsWith("/")){const i=new URL(r.href);i.pathname+=t,yield i.href}if(s){const i=new URL(r.href);i.pathname+=".html",yield i.href}if(n){const i=n({url:c});for(const o of i)yield o.href}}class X extends p{constructor(e,t){const s=({request:n})=>{const c=e.getURLsToCacheKeys();for(const r of Z(n.url,t)){const i=c.get(r);if(i){const o=e.getIntegrityForCacheKey(i);return{cacheKey:i,integrity:o}}}};super(s,e.strategy)}}function ee(a){const e=N(),t=new X(e,a);y(t)}const te="-precache-",se=async(a,e=te)=>{const s=(await self.caches.keys()).filter(n=>n.includes(e)&&n.includes(self.registration.scope)&&n!==a);return await Promise.all(s.map(n=>self.caches.delete(n))),s};function ae(){self.addEventListener("activate",a=>{const e=R.getPrecacheName();a.waitUntil(se(e).then(t=>{}))})}function ne(a){N().precache(a)}function re(a,e){ne(a),ee(e)}const ce={cacheWillUpdate:async({response:a})=>a.status===200||a.status===0?a:null};class U extends K{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(ce),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],n=[];let c;if(this._networkTimeoutSeconds){const{id:o,promise:h}=this._getTimeoutPromise({request:e,logs:s,handler:t});c=o,n.push(h)}const r=this._getNetworkPromise({timeoutId:c,request:e,logs:s,handler:t});n.push(r);const i=await t.waitUntil((async()=>await t.waitUntil(Promise.race(n))||await r)());if(!i)throw new l("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,logs:t,handler:s}){let n;return{promise:new Promise(r=>{n=setTimeout(async()=>{r(await s.cacheMatch(e))},this._networkTimeoutSeconds*1e3)}),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:n}){let c,r;try{r=await n.fetchAndCachePut(t)}catch(i){i instanceof Error&&(c=i)}return e&&clearTimeout(e),(c||!r)&&(r=await n.cacheMatch(t)),r}}ae(),re([{"revision":null,"url":"assets/AddAmountView-18131b7c.js"},{"revision":null,"url":"assets/AddAmountView-2161230b.js"},{"revision":null,"url":"assets/AddAmountView-25db8dc3.js"},{"revision":null,"url":"assets/AddAmountView-35226759.js"},{"revision":null,"url":"assets/AddAmountView-535ff2e5.js"},{"revision":null,"url":"assets/AddAmountView-73d40d83.js"},{"revision":null,"url":"assets/AddAmountView-79fbc4e1.js"},{"revision":null,"url":"assets/AddAmountView-800b2608.js"},{"revision":null,"url":"assets/AddAmountView-88676e9b.js"},{"revision":null,"url":"assets/AddAmountView-9868e2f1.js"},{"revision":null,"url":"assets/AddAmountView-9b2551cd.js"},{"revision":null,"url":"assets/AddAmountView-9fca4912.js"},{"revision":null,"url":"assets/AddAmountView-b498975d.js"},{"revision":null,"url":"assets/AddAmountView-b565e839.js"},{"revision":null,"url":"assets/AddAmountView-d212dc02.js"},{"revision":null,"url":"assets/AddAmountView-dc4f96e2.js"},{"revision":null,"url":"assets/AddAmountView-f45a7cbc.js"},{"revision":null,"url":"assets/AddAmountView-f7277a0f.js"},{"revision":null,"url":"assets/AddAmountView-fd860938.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-11fc71c1.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-55f26fd9.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-5706bedc.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-6eb22c53.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-72dc220c.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-77135357.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-8de09ae2.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-8dfafd49.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-8e624b35.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-9fc692fc.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-a7fb1b12.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-c073ee33.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-c860af9f.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-cef73037.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-e06c9952.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-e54c700f.js"},{"revision":null,"url":"assets/CurrencyEuroIcon-ff2747d7.js"},{"revision":null,"url":"assets/index-0c60e613.js"},{"revision":null,"url":"assets/index-1137c5b9.css"},{"revision":null,"url":"assets/index-1450ae74.js"},{"revision":null,"url":"assets/index-1a63d944.js"},{"revision":null,"url":"assets/index-2d224952.css"},{"revision":null,"url":"assets/index-3e03b03a.js"},{"revision":null,"url":"assets/index-40c1bd12.js"},{"revision":null,"url":"assets/index-413c3d9a.css"},{"revision":null,"url":"assets/index-44015d91.js"},{"revision":null,"url":"assets/index-47afbce0.js"},{"revision":null,"url":"assets/index-48ffb9bd.js"},{"revision":null,"url":"assets/index-56501641.js"},{"revision":null,"url":"assets/index-695b23ed.js"},{"revision":null,"url":"assets/index-738d5c8a.js"},{"revision":null,"url":"assets/index-76d35dbf.js"},{"revision":null,"url":"assets/index-8573fe01.js"},{"revision":null,"url":"assets/index-8aa9671e.js"},{"revision":null,"url":"assets/index-9396c517.css"},{"revision":null,"url":"assets/index-adac0ab1.js"},{"revision":null,"url":"assets/index-badc2e99.js"},{"revision":null,"url":"assets/index-be7f8085.css"},{"revision":null,"url":"assets/index-cd2f63e2.css"},{"revision":null,"url":"assets/index-cf5ffed8.js"},{"revision":null,"url":"assets/index-d584516f.css"},{"revision":null,"url":"assets/index-e86f72d5.js"},{"revision":null,"url":"assets/index-ea0e2642.js"},{"revision":null,"url":"assets/index.2ea22126.css"},{"revision":null,"url":"assets/index.8649c9be.js"},{"revision":null,"url":"assets/index.98c10644.css"},{"revision":null,"url":"assets/index.a4df08fb.js"},{"revision":null,"url":"assets/index.ac6be6f1.js"},{"revision":null,"url":"assets/index.b2161da0.js"},{"revision":null,"url":"assets/index.b9b5955d.js"},{"revision":null,"url":"assets/LoginUserView-01c843b3.js"},{"revision":null,"url":"assets/LoginUserView-117ccb64.js"},{"revision":null,"url":"assets/LoginUserView-126c8d78.js"},{"revision":null,"url":"assets/LoginUserView-298cd862.js"},{"revision":null,"url":"assets/LoginUserView-2aab001a.js"},{"revision":null,"url":"assets/LoginUserView-432fa52b.js"},{"revision":null,"url":"assets/LoginUserView-482e9e03.js"},{"revision":null,"url":"assets/LoginUserView-8001cb4c.js"},{"revision":null,"url":"assets/LoginUserView-8108ac0f.js"},{"revision":null,"url":"assets/LoginUserView-8568615d.js"},{"revision":null,"url":"assets/LoginUserView-8d4826a7.js"},{"revision":null,"url":"assets/LoginUserView-a398e822.js"},{"revision":null,"url":"assets/LoginUserView-a7ffbda2.js"},{"revision":null,"url":"assets/LoginUserView-b59ac0ef.js"},{"revision":null,"url":"assets/LoginUserView-bd2a5a6f.js"},{"revision":null,"url":"assets/LoginUserView-db130300.js"},{"revision":null,"url":"assets/LoginUserView-df8abce0.js"},{"revision":null,"url":"assets/LoginUserView-e71a5a06.js"},{"revision":null,"url":"assets/LoginUserView-fb088326.js"},{"revision":null,"url":"assets/RulesView-0d7698aa.js"},{"revision":null,"url":"assets/RulesView-391643c1.js"},{"revision":null,"url":"assets/RulesView-3cb93216.js"},{"revision":null,"url":"assets/RulesView-3d6a54a6.js"},{"revision":null,"url":"assets/RulesView-4703f399.js"},{"revision":null,"url":"assets/RulesView-50d5e7c3.js"},{"revision":null,"url":"assets/RulesView-5e8f169f.js"},{"revision":null,"url":"assets/RulesView-726d8db5.js"},{"revision":null,"url":"assets/RulesView-a8cf2856.js"},{"revision":null,"url":"assets/RulesView-a99aff18.js"},{"revision":null,"url":"assets/RulesView-b18e51ae.js"},{"revision":null,"url":"assets/RulesView-bc0f8958.js"},{"revision":null,"url":"assets/RulesView-bc70d5da.js"},{"revision":null,"url":"assets/RulesView-c7001252.js"},{"revision":null,"url":"assets/RulesView-c7fa01c3.js"},{"revision":null,"url":"assets/RulesView-cdb1cb76.js"},{"revision":null,"url":"assets/RulesView-d2526450.js"},{"revision":null,"url":"assets/RulesView-d5deacdf.js"},{"revision":null,"url":"assets/RulesView-df546988.js"},{"revision":null,"url":"assets/StatisticsView-034f9b5a.js"},{"revision":null,"url":"assets/StatisticsView-1379cfa1.js"},{"revision":null,"url":"assets/StatisticsView-1fd35206.js"},{"revision":null,"url":"assets/StatisticsView-20746148.js"},{"revision":null,"url":"assets/StatisticsView-47994dd2.js"},{"revision":null,"url":"assets/StatisticsView-4838c898.js"},{"revision":null,"url":"assets/StatisticsView-4edd4ac2.js"},{"revision":null,"url":"assets/StatisticsView-5344e5de.js"},{"revision":null,"url":"assets/StatisticsView-5f18898d.js"},{"revision":null,"url":"assets/StatisticsView-6ced65eb.js"},{"revision":null,"url":"assets/StatisticsView-71a39ad6.js"},{"revision":null,"url":"assets/StatisticsView-7b8b710a.js"},{"revision":null,"url":"assets/StatisticsView-7ebbbba8.js"},{"revision":null,"url":"assets/StatisticsView-87cf4ac3.js"},{"revision":null,"url":"assets/StatisticsView-b3f1b7e2.js"},{"revision":null,"url":"assets/StatisticsView-b664d789.js"},{"revision":null,"url":"assets/StatisticsView-eaeed037.js"},{"revision":null,"url":"assets/StatisticsView-edbffc43.js"},{"revision":null,"url":"assets/StatPerPlayerView-09f35353.js"},{"revision":null,"url":"assets/StatPerPlayerView-35e6458c.js"},{"revision":null,"url":"assets/StatPerPlayerView-4756ce45.js"},{"revision":null,"url":"assets/StatPerPlayerView-48b23534.js"},{"revision":null,"url":"assets/StatPerPlayerView-7884e086.js"},{"revision":null,"url":"assets/StatPerPlayerView-7be79a29.js"},{"revision":null,"url":"assets/StatPerPlayerView-7e4cab38.js"},{"revision":null,"url":"assets/StatPerPlayerView-81e18037.js"},{"revision":null,"url":"assets/StatPerPlayerView-87b921f7.js"},{"revision":null,"url":"assets/StatPerPlayerView-9287df2b.js"},{"revision":null,"url":"assets/StatPerPlayerView-9b104e51.js"},{"revision":null,"url":"assets/StatPerPlayerView-9e106548.js"},{"revision":null,"url":"assets/StatPerPlayerView-a4af2c18.js"},{"revision":null,"url":"assets/StatPerPlayerView-b8b7b30c.js"},{"revision":null,"url":"assets/StatPerPlayerView-bf1a10f9.js"},{"revision":null,"url":"assets/StatPerPlayerView-dd0b80a6.js"},{"revision":null,"url":"assets/StatPerPlayerView-e5add807.js"},{"revision":null,"url":"assets/SuggestionsView-04063373.js"},{"revision":null,"url":"assets/SuggestionsView-17ea53b8.js"},{"revision":null,"url":"assets/SuggestionsView-19f213cc.js"},{"revision":null,"url":"assets/SuggestionsView-4a0647c3.js"},{"revision":null,"url":"assets/SuggestionsView-5e265069.js"},{"revision":null,"url":"assets/SuggestionsView-b070e2cd.js"},{"revision":null,"url":"assets/SuggestionsView-b8a2bb2b.js"},{"revision":null,"url":"assets/SuggestionsView-cb20c786.js"},{"revision":null,"url":"assets/SuggestionsView-d4114349.js"},{"revision":null,"url":"assets/SuggestionsView-def844a3.js"},{"revision":null,"url":"assets/SuggestionsView-e3c6fde5.js"},{"revision":null,"url":"assets/SuggestionsView-e6ab06f5.js"},{"revision":null,"url":"assets/vendor.01148ce3.js"},{"revision":null,"url":"assets/vendor.7df8d123.js"},{"revision":null,"url":"assets/vendor.fb7b22b2.js"},{"revision":"3d5ef2bf867c4054a2f336cdbad9e1dc","url":"css/all.min.css"},{"revision":"323dbb41b64f01d5236df1a273e55d5d","url":"index.html"},{"revision":"6d6fdd92b3bed11df7161f3de48c44a7","url":"myNewsSW.js"},{"revision":"ee55de1576ef3e021e451e05e95ef075","url":"registerSW.js"},{"revision":"f5a5c8e024df76b2b3cd5247cffa7dc3","url":"sw.js"},{"revision":null,"url":"workbox-fa446783.js"},{"revision":"9b8f4d0402b1ea2f0582e66287869acc","url":"AppIcons/android-chrome-192x192.png"},{"revision":"8d1d002636c0a8079b1d6135dcca0435","url":"AppIcons/android-chrome-256x256.png"},{"revision":"a46f5df2517bf3be4d2c9197e398cbd7","url":"account.png"},{"revision":"f14e0db2d3d2f3d0e38dcc61311cf300","url":"logo1.png"},{"revision":"55c3f018c690612fa1b36daf38dfaeac","url":"logo2.jpeg"},{"revision":"8e3a10e157f75ada21ab742c022d5430","url":"vite.svg"},{"revision":"3820d269e0b466f7d82be499887ff29d","url":"AppIcons/apple-touch-icon.png"},{"revision":"ba4de351ea55ab72d6cb2689ed8e5c06","url":"AppIcons/favicon-16x16.png"},{"revision":"76fc5eb068144d4c3b53be765a7a9b2f","url":"AppIcons/favicon-32x32.png"},{"revision":"03ecfeadeb70a38ee51b5e9a8f5c30e7","url":"AppIcons/favicon.ico"},{"revision":"43b1b84941ae5559c77e8985c241d3db","url":"AppIcons/mstile-150x150.png"},{"revision":"ca10b9fa5450726321db82cccbec7d04","url":"AppIcons/safari-pinned-tab.svg"},{"revision":"f1ab6fe4c9f5738edca42ac081ec2da8","url":"PlayerImages/Androsch.jpg"},{"revision":"c41b0ccac2960f6c34422aba0831ffb4","url":"PlayerImages/Bachmann.jpg"},{"revision":"bdf9b91ddc53ac36e2c7aa7d32602536","url":"PlayerImages/Correa.jpg"},{"revision":"022a094d5462b62a3df2b0335c0d4d7c","url":"PlayerImages/Domian.jpg"},{"revision":"4b20a03a88bf5e5347b3bd2754f05ad9","url":"PlayerImages/Florea-1.jpg"},{"revision":"547450477cf344696f3b1a0efb46b23d","url":"PlayerImages/Halmer-B.jpg"},{"revision":"1398af551944377b7ff735ab166f096b","url":"PlayerImages/Halmer-E.jpeg"},{"revision":"d43aaaca6f44bca290ff9bd7f5b4e454","url":"PlayerImages/Halmer-Eli.jpeg"},{"revision":"2b05c7d0671b7558f2efa7e1001ebec6","url":"PlayerImages/Kutej.jpg"},{"revision":"4e049840b1b2361ada21d9b5b5ecec87","url":"PlayerImages/Pajer.jpeg"},{"revision":"2ea3d1c19f776a25b66b21a665e39316","url":"PlayerImages/Pantic.jpg"},{"revision":"08bc7b345123059bf8ad0222af30d802","url":"PlayerImages/Prantl.jpg"},{"revision":"c0bf04991672d326a4031f64daab599f","url":"PlayerImages/Reinisch.jpg"},{"revision":"74005febff4824fbbd79db4112538e7a","url":"PlayerImages/Ruprecht.jpg"},{"revision":"8a55ead5a3dd6eb59f3d9836a5f988b1","url":"PlayerImages/Schmid-Dani.jpeg"},{"revision":"71b448c7fb611851dec2b63d643c04bc","url":"PlayerImages/Schmid-S.jpg"},{"revision":"9853b457e1d26e9dbf0d308352ee86f5","url":"PlayerImages/Semler2.jpg"},{"revision":"b304d0f5a9590e484bb004b2d79d5411","url":"PlayerImages/Steiner.jpg"},{"revision":"81362282108e75fafa57686c51a7eea3","url":"PlayerImages/Wallner.jpg"},{"revision":"d19b53feda0caf8516a251dff3de1ee2","url":"PlayerImages/Wilk.jpg"},{"revision":"4f03ae43d49fd1251544729280805c50","url":"PlayerImages/Wiltschko.jpg"},{"revision":"5e4632926f35d08ac44ba46903c95ece","url":"manifest.webmanifest"}]),self.addEventListener("message",a=>{const{type:e,data:t}=JSON.parse(a.data);console.log(`TYPE: ${e} | DATA: ${t}`),e=="SKIP_WAITING"&&(self.skipWaiting(),console.log("SERVICEWORKER IS ACTIVE")),e=="CLEAR_CACHE"&&(console.log(`Cache: ${t} wurde gelöscht`),caches.delete(t==null?void 0:t.toString()))}),y(({url:a})=>a.pathname.match("/zahlung"),new U({cacheName:"ZahlungenCache"})),y(({url:a})=>a.pathname.match("/spieler"),new U({cacheName:"SpielerCache"})),y(({url:a})=>a.pathname.match("/ausgaben"),new U({cacheName:"AusgabenCache"})),y(({url:a})=>a.pathname.match("/.*/"),new U({cacheName:"ApplicationCache"}))})();