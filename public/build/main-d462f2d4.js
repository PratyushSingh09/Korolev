function e(){}const t=e=>e;function n(e){return e()}function a(){return Object.create(null)}function i(e){e.forEach(n)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e){return null==e?"":e}const c="undefined"!=typeof window;let l=c?()=>window.performance.now():()=>Date.now(),m=c?e=>requestAnimationFrame(e):e;const u=new Set;function p(e){u.forEach((t=>{t.c(e)||(u.delete(t),t.f())})),0!==u.size&&m(p)}function g(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function _(){return b(" ")}function v(){return b("")}function y(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function j(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function A(e,t,n,a){e.style.setProperty(t,n,a?"important":"")}const k=new Set;let N,M=0;function T(e,t,n,a,i,o,s,r=0){const c=16.666/a;let l="{\n";for(let e=0;e<=1;e+=c){const a=t+(n-t)*o(e);l+=100*e+`%{${s(a,1-a)}}\n`}const m=l+`100% {${s(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(m)}_${r}`,p=e.ownerDocument;k.add(p);const g=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild($("style")).sheet),f=p.__svelte_rules||(p.__svelte_rules={});f[u]||(f[u]=!0,g.insertRule(`@keyframes ${u} ${m}`,g.cssRules.length));const d=e.style.animation||"";return e.style.animation=`${d?d+", ":""}${u} ${a}ms linear ${i}ms 1 both`,M+=1,u}function C(e,t){const n=(e.style.animation||"").split(", "),a=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-a.length;i&&(e.style.animation=a.join(", "),M-=i,M||m((()=>{M||(k.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),k.clear())})))}function E(e){N=e}const I=[],L=[],P=[],q=[],G=Promise.resolve();let B=!1;function S(e){P.push(e)}let Z=!1;const z=new Set;function F(){if(!Z){Z=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];E(t),U(t.$$)}for(E(null),I.length=0;L.length;)L.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];z.has(t)||(z.add(t),t())}P.length=0}while(I.length);for(;q.length;)q.pop()();B=!1,Z=!1,z.clear()}}function U(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}let O;function W(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const D=new Set;let R;function H(){R={r:0,c:[],p:R}}function J(){R.r||i(R.c),R=R.p}function Y(e,t){e&&e.i&&(D.delete(e),e.i(t))}function V(e,t,n,a){if(e&&e.o){if(D.has(e))return;D.add(e),R.c.push((()=>{D.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}const X={duration:0};function Q(n,a,s,r){let c=a(n,s),g=r?0:1,f=null,d=null,h=null;function $(){h&&C(n,h)}function w(e,t){const n=e.b-g;return t*=Math.abs(n),{a:g,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function b(a){const{delay:o=0,duration:s=300,easing:r=t,tick:b=e,css:_}=c||X,v={start:l()+o,b:a};a||(v.group=R,R.r+=1),f||d?d=v:(_&&($(),h=T(n,g,a,s,o,r,_)),a&&b(0,1),f=w(v,s),S((()=>W(n,a,"start"))),function(e){let t;0===u.size&&m(p),new Promise((n=>{u.add(t={c:e,f:n})}))}((e=>{if(d&&e>d.start&&(f=w(d,s),d=null,W(n,f.b,"start"),_&&($(),h=T(n,g,f.b,f.duration,0,r,c.css))),f)if(e>=f.end)b(g=f.b,1-g),W(n,f.b,"end"),d||(f.b?$():--f.group.r||i(f.group.c)),f=null;else if(e>=f.start){const t=e-f.start;g=f.a+f.d*r(t/f.duration),b(g,1-g)}return!(!f&&!d)})))}return{run(e){o(c)?(O||(O=Promise.resolve(),O.then((()=>{O=null}))),O).then((()=>{c=c(),b(e)})):b(e)},end(){$(),f=d=null}}}function K(e){e&&e.c()}function ee(e,t,a){const{fragment:s,on_mount:r,on_destroy:c,after_update:l}=e.$$;s&&s.m(t,a),S((()=>{const t=r.map(n).filter(o);c?c.push(...t):i(t),e.$$.on_mount=[]})),l.forEach(S)}function te(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){-1===e.$$.dirty[0]&&(I.push(e),B||(B=!0,G.then(F)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(t,n,o,s,r,c,l=[-1]){const m=N;E(t);const u=n.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:r,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:a(),dirty:l,skip_bound:!1};let g=!1;if(p.ctx=o?o(t,u,((e,n,...a)=>{const i=a.length?a[0]:n;return p.ctx&&r(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),g&&ne(t,e)),n})):[],p.update(),g=!0,i(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&Y(t.$$.fragment),ee(t,n.target,n.anchor),F()}E(m)}class ie{$destroy(){te(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function oe(e){const t=e-1;return t*t*t+1}function se(e,{delay:t=0,duration:n=400,easing:a=oe}){const i=getComputedStyle(e),o=+i.opacity,s=parseFloat(i.height),r=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),l=parseFloat(i.marginTop),m=parseFloat(i.marginBottom),u=parseFloat(i.borderTopWidth),p=parseFloat(i.borderBottomWidth);return{delay:t,duration:n,easing:a,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};height: ${e*s}px;padding-top: ${e*r}px;padding-bottom: ${e*c}px;margin-top: ${e*l}px;margin-bottom: ${e*m}px;border-top-width: ${e*u}px;border-bottom-width: ${e*p}px;`}}function re(e,t,n){const a=e.slice();return a[4]=t[n],a}function ce(e){let t,n,a,i=e[0],o=[];for(let t=0;t<i.length;t+=1)o[t]=le(re(e,i,t));const s=e=>V(o[e],1,1,(()=>{o[e]=null}));return{c(){t=$("nav"),n=$("ul");for(let e=0;e<o.length;e+=1)o[e].c();j(n,"class","svelte-s4ij86"),j(t,"class","svelte-s4ij86")},m(e,i){f(e,t,i),g(t,n);for(let e=0;e<o.length;e+=1)o[e].m(n,null);a=!0},p(e,t){if(7&t){let a;for(i=e[0],a=0;a<i.length;a+=1){const s=re(e,i,a);o[a]?(o[a].p(s,t),Y(o[a],1)):(o[a]=le(s),o[a].c(),Y(o[a],1),o[a].m(n,null))}for(H(),a=i.length;a<o.length;a+=1)s(a);J()}},i(e){if(!a){for(let e=0;e<i.length;e+=1)Y(o[e]);a=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)V(o[e]);a=!1},d(e){e&&d(t),h(o,e)}}}function le(e){let t,n,a,i,s,c,l,m,u=e[4].page+"";return{c(){t=$("li"),n=b(u),a=_(),j(t,"class",i=r(e[2].currentPage==e[4].page?"active":"")+" svelte-s4ij86")},m(i,s){f(i,t,s),g(t,n),g(t,a),c=!0,l||(m=y(t,"click",(function(){o(e[1])&&e[1].apply(this,arguments)})),l=!0)},p(a,o){e=a,(!c||1&o)&&u!==(u=e[4].page+"")&&x(n,u),(!c||5&o&&i!==(i=r(e[2].currentPage==e[4].page?"active":"")+" svelte-s4ij86"))&&j(t,"class",i)},i(e){c||(S((()=>{s||(s=Q(t,se,{},!0)),s.run(1)})),c=!0)},o(e){s||(s=Q(t,se,{},!1)),s.run(0),c=!1},d(e){e&&d(t),e&&s&&s.end(),l=!1,m()}}}function me(e){let t,n,a,i,s,r,c,l,m,u=e[2].showNav&&ce(e);return{c(){t=$("div"),n=w("svg"),a=w("path"),s=_(),u&&u.c(),r=v(),j(a,"d",i=e[2].showNav?"M10 6 L2 16 10 26 M2 16 L30 16":"M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"),j(n,"viewBox","0 0 32 32"),j(n,"width","32"),j(n,"height","32"),j(n,"stroke-width","2"),j(t,"id","nav"),j(t,"class","svelte-s4ij86")},m(i,p){f(i,t,p),g(t,n),g(n,a),f(i,s,p),u&&u.m(i,p),f(i,r,p),c=!0,l||(m=y(n,"click",(function(){o(e[3])&&e[3].apply(this,arguments)})),l=!0)},p(t,[n]){e=t,(!c||4&n&&i!==(i=e[2].showNav?"M10 6 L2 16 10 26 M2 16 L30 16":"M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"))&&j(a,"d",i),e[2].showNav?u?(u.p(e,n),4&n&&Y(u,1)):(u=ce(e),u.c(),Y(u,1),u.m(r.parentNode,r)):u&&(H(),V(u,1,1,(()=>{u=null})),J())},i(e){c||(Y(u),c=!0)},o(e){V(u),c=!1},d(e){e&&d(t),e&&d(s),u&&u.d(e),e&&d(r),l=!1,m()}}}function ue(e,t,n){let{pages:a}=t,{changePage:i}=t,{state:o}=t,{navTog:s}=t;return e.$$set=e=>{"pages"in e&&n(0,a=e.pages),"changePage"in e&&n(1,i=e.changePage),"state"in e&&n(2,o=e.state),"navTog"in e&&n(3,s=e.navTog)},[a,i,o,s]}class pe extends ie{constructor(e){super(),ae(this,e,ue,me,s,{pages:0,changePage:1,state:2,navTog:3})}}function ge(t){let n;return{c(){n=$("section"),n.innerHTML='<div><img src="./assets/logo.svg" alt=""/></div> \n    <div><svg viewBox="0 -56 512 600" height="512" width="512"><defs><clipPath id="2009"><rect y="-16" width="512" height="140"></rect></clipPath><clipPath id="2020"><rect y="350" width="512" height="120"></rect></clipPath><filter id="glow"><feGaussianBlur stdDeviation="5" result="coloredBlur"></feGaussianBlur><feMerge><feMergeNode in="coloredBlur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter><mask id="red-gradient"><linearGradient id="red" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#349"></stop><stop offset="100%" stop-color="#35d"></stop></linearGradient></mask></defs><text font-size="100" fill="url(#red)" filter="url(#glow)"><tspan x="0" font-size="185" y="160" clip-path="url(#2009)">2009</tspan> \n                <tspan x="0" font-size="105" y="220">12 YEARS</tspan> \n                <tspan x="0" font-size="100" dy="100">CELESTIA</tspan> \n                <tspan x="0" font-size="185" dy="120" clip-path="url(#2020)">2020</tspan></text></svg></div>',j(n,"class","svelte-fofleu")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class fe extends ie{constructor(e){super(),ae(this,e,null,ge,s,{})}}var de={team:{mgmt:[{img:"https://pbs.twimg.com/profile_images/1162996912531730433/b08m-caG_400x400.jpg",name:"Hrutwick Sawant",pos:"President"},{img:"https://pbs.twimg.com/profile_images/1162996912531730433/b08m-caG_400x400.jpg",name:"Venu",pos:"Ex Prez"},{img:"https://pbs.twimg.com/profile_images/1162996912531730433/b08m-caG_400x400.jpg",name:"Aditya Majali",pos:"God"},{img:"https://pbs.twimg.com/profile_images/1162996912531730433/b08m-caG_400x400.jpg",name:"Akash Chaudhary",pos:"I'm too teriffied to put something"},{img:"https://pbs.twimg.com/profile_images/1162996912531730433/b08m-caG_400x400.jpg",name:"Nikhil Bisht",pos:"A"},{img:"https://pbs.twimg.com/profile_images/1162996912531730433/b08m-caG_400x400.jpg",name:"Bisht can't be anything",pos:"Other than A."}],leads:[]},facilities:{upcoming:{img:"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTE5NDg0MDU1MTUzMTE2Njg3/alan-turing-9512017-1-402.jpg",title:"SIR ALAN TURING",details:"orem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatibus recusandae, provident fuga error doloribus."},telescopes:[{title:"Dobby AB1CD-EF",img:"https://i.ytimg.com/vi/UiW7rRSApBA/maxresdefault.jpg",star:"f/5"}],opensource:[{img:"https://images-na.ssl-images-amazon.com/images/I/61re-lA-EiL._AC_SL1500_.jpg",title:"TRACKER",details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officiis error nobis dolorem quia culpa neque quidem necessitatibus aliquid impedit?"},{img:"https://images.immediate.co.uk/production/volatile/sites/25/2019/02/Baader-Nano-Tracker-Travelling-Mount-Baader-Nano-Tracker-Travelling-Mount-5d5a2f4.jpg?quality=90&resize=620,413",title:"TRACKER2",details:"Lorem ipsum dolor sit amet adipisicing elit. Nostrum officiis error nobis dolorem quia culpa neque quidem necessitatibus aliquid impedit? Nostrum officiis error nobis dolorem quia culpa neque quidem necessitatibus aliquid impedit?"}]},projects:{going:[{name:"EINSat",icon:"https://pbs.twimg.com/media/ETVfqtTX0AAdrtd.jpg",desc:"We have some madmen on board who want to revive the classical german ideologies",main:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a8b89eb-212e-48ac-b1d8-0554cbe12ff1/d6gmgh6-541b78b7-6f78-4676-a960-187c12f7575d.jpg/v1/fill/w_622,h_350,q_70,strp/ssv_normandy_sr2__chariot_of_the_gods_by_eddy_shinjuku_d6gmgh6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNDQwIiwicGF0aCI6IlwvZlwvNGE4Yjg5ZWItMjEyZS00OGFjLWIxZDgtMDU1NGNiZTEyZmYxXC9kNmdtZ2g2LTU0MWI3OGI3LTZmNzgtNDY3Ni1hOTYwLTE4N2MxMmY3NTc1ZC5qcGciLCJ3aWR0aCI6Ijw9MjU2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.UibCiAXSMF-wv7Hp4GA_N-cjCq0UqQqtz9M6QbDyr4A",more:"Github",moreLink:"https://me.nukes.in"},{name:"Rocketry",icon:"https://i.imgur.com/eum16Uw.jpg",desc:"We have some madmen on board who want to revive the classical german ideologies",main:"https://i.pinimg.com/originals/9b/01/d0/9b01d0fcc29dd6b04e3a9619e6def219.png",more:"500px",moreLink:"https://me.nukes.in"},{name:"Quantum Chess",icon:"https://c4.wallpaperflare.com/wallpaper/627/677/142/shiro-no-game-no-life-sora-no-game-no-life-stephanie-dora-blue-hair-wallpaper-thumb.jpg",desc:"We have some madmen on board who want to revive the classical german ideologies",main:"https://images7.alphacoders.com/740/thumb-1920-740377.png",more:"GitHub",moreLink:"https://me.nukes.in"},{name:"Brain Computer Interface",icon:"https://c4.wallpaperflare.com/wallpaper/627/677/142/shiro-no-game-no-life-sora-no-game-no-life-stephanie-dora-blue-hair-wallpaper-thumb.jpg"},{name:"Binary Calculator"}],past:[{name:"CanSat",img:"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2016/06/electronics_inside_a_cansat/16054362-1-eng-GB/Electronics_inside_a_CanSat_article.jpg"},{},{}]},education:{books:[{name:"Brief History of Time",image:"cdn.waterstones.com/bookjackets/large/9780/8575/9780857501004.jpg",link:"To AMAZON"},{name:"Astrophysics for People in a Hurry",image:"images-na.ssl-images-amazon.com/images/I/91w70Ax2LhL.jpg",link:"To AMAZON"},{name:"Einstien for Everyone",image:"images-na.ssl-images-amazon.com/images/I/915UE-Nq-TL.jpg",link:"To AMAZON"},{name:"Accessory to War NDT",image:"images-na.ssl-images-amazon.com/images/I/81Wed-PV19L.jpg",link:"To AMAZON"},{name:"Principia Mathematica",image:"upload.wikimedia.org/wikipedia/commons/1/17/Prinicipia-title.png",link:"To AMAZON"},{name:"Cosmic Connection",image:"upload.wikimedia.org/wikipedia/en/4/4d/The_Cosmic_Connection_%28book%29.jpg",link:"To AMAZON"},{name:"GEB EGB",image:"images-na.ssl-images-amazon.com/images/I/61x9qySMjzL.jpg",link:"To AMAZON"},{name:"6 Easy Pieces",image:"images-na.ssl-images-amazon.com/images/I/513pj3ro+jL._SX312_BO1,204,203,200_.jpg",link:"To AMAZON"}],yt:[{name:"StarTalk",image:"yt3.ggpht.com/ytc/AAUvwnjjP7Q74FjwiybZTMoamnZIq9t_7ZeCURh0xK1I-cY=s88-c-k-c0x00ffffff-no-rj",channel:"https://www.youtube.com/channel/UCqoAEDirJPjEUFcF2FklnBA"},{name:"SpaceX",image:"yt3.ggpht.com/ytc/AAUvwnifgXHHC6YlnrDKnrMWk23FKLfLYJdSb8Odj1KQ6uI=s88-c-k-c0x00ffffff-no-rj",channel:"https://www.youtube.com/channel/UCtI0Hodo5o5dUb67FeUjDeA"},{name:"MinutePhysics",image:"yt3.ggpht.com/ytc/AAUvwnhz4WmHt4YZriL-WHqEGS-5nf2QY0V5vaTTMFpW=s88-c-k-c0x00ffffff-no-rj",channel:"https://www.youtube.com/channel/UCUHW94eEFW7hkUMVaZz4eDg"}]},frontier:{}};function he(e){let t,n,a;var i=fe;function o(e){return{props:{data:de.home}}}return i&&(t=new i(o())),{c(){t&&K(t.$$.fragment),n=v()},m(e,i){t&&ee(t,e,i),f(e,n,i),a=!0},p(e,a){if(i!==(i=fe)){if(t){H();const e=t;V(e.$$.fragment,1,0,(()=>{te(e,1)})),J()}i?(t=new i(o()),K(t.$$.fragment),Y(t.$$.fragment,1),ee(t,n.parentNode,n)):t=null}},i(e){a||(t&&Y(t.$$.fragment,e),a=!0)},o(e){t&&V(t.$$.fragment,e),a=!1},d(e){e&&d(n),t&&te(t,e)}}}function $e(e){let t,n,a;var i=e[2];function o(e){return{props:{data:de.projects}}}return i&&(t=new i(o())),{c(){t&&K(t.$$.fragment),n=v()},m(e,i){t&&ee(t,e,i),f(e,n,i),a=!0},p(e,a){if(i!==(i=e[2])){if(t){H();const e=t;V(e.$$.fragment,1,0,(()=>{te(e,1)})),J()}i?(t=new i(o()),K(t.$$.fragment),Y(t.$$.fragment,1),ee(t,n.parentNode,n)):t=null}},i(e){a||(t&&Y(t.$$.fragment,e),a=!0)},o(e){t&&V(t.$$.fragment,e),a=!1},d(e){e&&d(n),t&&te(t,e)}}}function we(e){let t,n,a;var i=e[1];function o(e){return{props:{data:de.facilities}}}return i&&(t=new i(o())),{c(){t&&K(t.$$.fragment),n=v()},m(e,i){t&&ee(t,e,i),f(e,n,i),a=!0},p(e,a){if(i!==(i=e[1])){if(t){H();const e=t;V(e.$$.fragment,1,0,(()=>{te(e,1)})),J()}i?(t=new i(o()),K(t.$$.fragment),Y(t.$$.fragment,1),ee(t,n.parentNode,n)):t=null}},i(e){a||(t&&Y(t.$$.fragment,e),a=!0)},o(e){t&&V(t.$$.fragment,e),a=!1},d(e){e&&d(n),t&&te(t,e)}}}function be(e){let t,n,a;var i=e[0];function o(e){return{props:{data:de.team}}}return i&&(t=new i(o())),{c(){t&&K(t.$$.fragment),n=v()},m(e,i){t&&ee(t,e,i),f(e,n,i),a=!0},p(e,a){if(i!==(i=e[0])){if(t){H();const e=t;V(e.$$.fragment,1,0,(()=>{te(e,1)})),J()}i?(t=new i(o()),K(t.$$.fragment),Y(t.$$.fragment,1),ee(t,n.parentNode,n)):t=null}},i(e){a||(t&&Y(t.$$.fragment,e),a=!0)},o(e){t&&V(t.$$.fragment,e),a=!1},d(e){e&&d(n),t&&te(t,e)}}}function _e(e){let t,n,a,i,o,s;t=new pe({props:{pages:e[6],state:e[3],changePage:e[5],navTog:e[4]}});const r=[be,we,$e,he],c=[];function l(e,t){return"Team"==e[3].currentPage?0:"Facilities"==e[3].currentPage?1:"Projects"==e[3].currentPage?2:3}return a=l(e),i=c[a]=r[a](e),{c(){K(t.$$.fragment),n=_(),i.c(),o=v()},m(e,i){ee(t,e,i),f(e,n,i),c[a].m(e,i),f(e,o,i),s=!0},p(e,[n]){const s={};8&n&&(s.state=e[3]),t.$set(s);let m=a;a=l(e),a===m?c[a].p(e,n):(H(),V(c[m],1,1,(()=>{c[m]=null})),J(),i=c[a],i?i.p(e,n):(i=c[a]=r[a](e),i.c()),Y(i,1),i.m(o.parentNode,o))},i(e){s||(Y(t.$$.fragment,e),Y(i),s=!0)},o(e){V(t.$$.fragment,e),V(i),s=!1},d(e){te(t,e),e&&d(n),c[a].d(e),e&&d(o)}}}function ve(e,t,n){let a,i,o;const s=()=>{n(3,c.showNav=!c.showNav,c),a||(import("./team-ec0669e1.js").then((e=>n(0,a=e.default))),import("./facc-eae29063.js").then((e=>n(1,i=e.default))),import("./proj-60f0f6ee.js").then((e=>n(2,o=e.default))))},r=[{page:"Home",component:fe},{page:"Team",component:a},{page:"Facilities",component:i},{page:"Projects",component:o}];let c;return n(3,c={showNav:0,currentPage:"Home"}),[a,i,o,c,s,e=>{s(),n(3,c.currentPage=e.target.innerText,c)},r]}var ye=new class extends ie{constructor(e){super(),ae(this,e,ve,_e,s,{})}}({target:document.getElementsByTagName("main")[0]});export{ie as S,j as a,f as b,_ as c,d,$ as e,A as f,g,x as h,ae as i,K as j,Y as k,V as l,ee as m,e as n,h as o,te as p,ye as q,s,b as t};
