var le=Object.defineProperty,ie=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var Q=(t,a,n)=>a in t?le(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,d=(t,a)=>{for(var n in a||(a={}))K.call(a,n)&&Q(t,n,a[n]);if(T)for(var n of T(a))Y.call(a,n)&&Q(t,n,a[n]);return t},b=(t,a)=>ie(t,me(a));var Z=(t,a)=>{var n={};for(var r in t)K.call(t,r)&&a.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&T)for(var r of T(t))a.indexOf(r)<0&&Y.call(t,r)&&(n[r]=t[r]);return n};import{R as e,B as O,C as y,a as s,b as l,r as p,c as ue,u as de,d as pe,e as ge,f as I,F as i,I as g,L as B,S as Ee,T as fe,P as he,g as be,M as Ne,h as ye,O as X,N as S,i as D,j as ve,k as E,l as R,m as we,n as Pe,o as xe,p as Ce}from"./vendor.ee08ccf5.js";const ke=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};ke();const _e={backgroundColor:"#fff"},C=t=>{const{text:a}=t,n=t.style||{},r=(t.className||"")+" rounded-pill pe-2 ps-2 p-1";return e.createElement(O,b(d({},t),{style:d(d({},_e),n),className:r}),a)},Ie={background:"#0BA55D",height:"110vh"},Be={fontSize:"3em",fontWeight:"bold",color:"white"},J=t=>e.createElement(y,{style:Ie,fluid:!0},e.createElement(s,{className:"pt-5"})," ",e.createElement(s,null,e.createElement(l,{className:"text-center"},e.createElement("h1",{style:Be},"Matchsic"))),t.children),U=t=>{const[a,n]=p.exports.useState(t);return[a,r=>{n(b(d({},a),{[r.target.id]:r.target.value}))}]},Se="_registerLink_1fax8_1",Fe="_invalidFeedback_1fax8_15";var j={registerLink:Se,invalidFeedback:Fe};const $="192.168.1.140",ee="3000",te={server:{address:$,port:ee,baseURL:`http://${$}:${ee}`}},v=ue.create({baseURL:te.server.baseURL,withCredentials:!0}),Me=(t,a)=>new Promise((n,r)=>{v.post("login",{user:{username:t,password:a}}).then(()=>{n()}).catch(()=>{r("Nombre de usuario o contrase\xF1a incorrectos")})}),Ae=()=>v.get("/logout"),Le=()=>v.get("/user/data"),Ge=t=>new Promise((a,n)=>{v.post("user",{user:b(d({},t),{description:"Aqu\xED puedes poner tu descripci\xF3n",musicPreference:["Rock","Pop"],socialNetwork:["Twitter","Telegram"]})}).then(()=>{a()}).catch(()=>{n("Problema al registrar")})}),Te=async()=>(await v.get("/am-i-logged-in")).data,De=t=>new Promise((a,n)=>{v.patch("/user/data",{user:d({},t)}).then(()=>{a()}).catch(()=>{n("Problema al actualizar")})}),Re=async()=>(await v.get("/near-users")).data.nearUsers,He=async t=>v.patch("/user/active-data",{activeData:t}),ze=async()=>new Promise((t,a)=>{navigator||a("Allow browser to get your location"),navigator.geolocation.getCurrentPosition(({coords:n})=>{t({coordinates:{latitude:n.latitude,longitude:n.longitude}})},n=>a(n))}),Oe=()=>{window.location.href=te.server.baseURL+"/music/login"},f={login:Me,logout:Ae,getData:Le,register:Ge,update:De,amILoggedIn:Te,getNearUsers:Re,updateActiveData:He,getLocationFromBrowser:ze,connectSpotify:Oe},F=()=>pe(),k=de,Ue={userProfile:{name:"",username:"",description:"",musicPreference:[],socialNetwork:[]},userSession:{username:"Lena_00",profileLink:"",music:{trackName:"The Rover",authorsNames:["Led Zeppelin"],coverImage:{url:"https://extrachill.com/wp-content/uploads/2021/03/led-zeppelin-logos.jpeg",width:0,height:0},status:"stopped"},location:{coordinates:{latitude:28.47762873997604,longitude:-16.312475617040874}}},nearUsers:[],notifications:[],userIsLoggedIn:!1},ae=ge({name:"matchsic",initialState:Ue,reducers:{sayHi(t){return console.log("Hi!"),t},userDataFetched(t,a){const{username:n,name:r,description:o,socialNetwork:c,musicPreference:m}=a.payload;t.userSession.username=n,t.userProfile.name=r,t.userProfile.username=n,t.userProfile.description=o,t.userProfile.musicPreference=m,t.userProfile.socialNetwork=c},loggedIn(t){t.userIsLoggedIn=!0},loggedOut(t){t.userSession.username="",t.userProfile.name="",t.userIsLoggedIn=!1},updateUser(t,a){const{username:n,name:r,description:o,musicPreference:c}=a.payload;t.userSession.username=n,t.userProfile.name=r,t.userProfile.username=n,t.userProfile.description=o,t.userProfile.musicPreference=c},setNearUsers(t,a){t.nearUsers=a.payload},updateSession(t,a){t.userSession=a.payload}}}),{sayHi:je,loggedIn:ne,loggedOut:Ve,updateUser:qe,userDataFetched:re,setNearUsers:We,updateSession:Ke}=ae.actions;var Ye=ae.reducer;const Qe={color:"#0BA55D",borderRadius:"100px",border:"none",width:"8em",height:"3em",fontWeight:"bold"},Ze=t=>{const[a,n]=p.exports.useState(!1),[r,o]=p.exports.useState({message:"Completa este campo",fromServer:!1}),c=I(),[m,h]=U({username:"",password:""});p.exports.useEffect(()=>{f.amILoggedIn().then(u=>{N(ne()),N(re(u.userData))}).catch(()=>{})},[]);const w=u=>{o(b(d({},r),{fromServer:!1})),n(!1),h(u)},N=F(),_=u=>{const L=u.target;if(u.preventDefault(),n(!0),!L.checkValidity())return;const{username:G,password:P}=m;f.login(G,P).then(()=>{f.getData().then(x=>{console.log(x.data),N(ne()),N(re(x.data)),c("/home")}).catch(x=>{console.log(x)})}).catch(x=>{o({message:x,fromServer:!0})})},z=()=>{if(a&&!m.username)return"Completa este campo";if(r.fromServer&&m.usernamme)return"";if(a&&r.fromServer)return r.message};return e.createElement(J,null,e.createElement(s,{className:"pt-5"})," ",e.createElement(s,{className:"pt-5"})," ",e.createElement(s,{className:"pt-5 ps-3 pe-3"},e.createElement(l,{className:"text-center"},e.createElement(i,{onSubmit:_,noValidate:!0},e.createElement(i.Group,{className:"mb-5",controlId:"username"},e.createElement(g,{hasValidation:!0,id:"usernameInputGroup"},e.createElement(i.Control,{required:!0,type:"text",placeholder:"Nombre de usuario",isInvalid:a&&(!m.username||r.fromServer),onChange:w}),e.createElement(i.Control.Feedback,{type:"invalid",className:j.invalidFeedback},z()))),e.createElement(i.Group,{className:"mb-5",controlId:"password"},e.createElement(g,{hasValidation:!0,id:"passwordInputGroup"},e.createElement(i.Control,{required:!0,type:"password",placeholder:"Contrase\xF1a",isInvalid:a&&!m.password,onChange:w}),e.createElement(i.Control.Feedback,{type:"invalid",className:j.invalidFeedback},"Completa este campo"))),e.createElement(C,{text:"Entrar",id:"loginButton",style:Qe,type:"submit"})))),e.createElement(s,{className:"pt-5"})," ",e.createElement(s,{className:"pt-5"},e.createElement(l,{className:"text-center"},e.createElement(B,{to:"/register",className:j.registerLink},"Registrarme"))))},Xe="_Background_uwbw1_1",Je="_BackgroundTopProfile_uwbw1_13",$e="_mainFrame_uwbw1_25",et="_ButtonEditProfile_uwbw1_37",tt="_ButtonConnectSpotify_uwbw1_59",at="_MusicalRound_uwbw1_97",nt="_ProfileCard_uwbw1_115",rt="_ProfileCardImage_uwbw1_127",ot="_TextMuted_uwbw1_149",st="_TextBold_uwbw1_159";var H={Background:Xe,BackgroundTopProfile:Je,mainFrame:$e,ButtonEditProfile:et,ButtonConnectSpotify:tt,MusicalRound:at,ProfileCard:nt,ProfileCardImage:rt,TextMuted:ot,TextBold:st};const ct={backgroundColor:"#fff"},lt=t=>{const{text:a,linkto:n}=t,r=t.style||{},o=(t.className||"")+" rounded-pill pe-2 ps-2 p-1";return e.createElement(B,{to:n},e.createElement(O,b(d({},t),{style:d(d({},ct),r),className:o}),a))},it={width:"7rem",height:"7rem",border:"3px white solid",borderRadius:"60px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},oe=t=>e.createElement("img",b(d({},t),{style:it})),mt=t=>{const{music:a}=t;let n;switch(a){case"Pop":n="#D166EE";break;case"Rock":n="#3D7CC9";break;default:n="#EEC566";break}const r={backgroundColor:n,border:"2px rgb(0, 0, 0) solid",borderRadius:"15px",textAlign:"center",margin:"5px",boxShadow:"0 5px 10px 0 rgba(0, 0, 0, 0.2)"};return e.createElement(l,{style:r},a)},ut={fontWeight:"400",color:"hsl(0, 0%, 59%)"},V={fontSize:"18px",fontWeight:"700"},dt=t=>{const{user:a}=t;return e.createElement(e.Fragment,null,e.createElement(s,{style:V},a.name),e.createElement(s,{style:ut},a.username),e.createElement(s,null,a.description),e.createElement(s,{style:V},"Gustos musicales"),e.createElement(s,null,a.musicPreference.map((n,r)=>e.createElement(mt,{music:n,key:r}))),e.createElement(s,{style:V},"Redes sociales"),e.createElement(s,null,a.socialNetwork.map((n,r)=>e.createElement(l,{key:r}," ",n))))},pt=()=>{const{userProfile:t}=k(a=>a.matchsic);return e.createElement(y,{className:H.mainFrame,fluid:!0},e.createElement(s,{className:H.BackgroundTopProfile},e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"},e.createElement(l,{className:"ps-4"},e.createElement(oe,{alt:"User Image",src:"https://thispersondoesnotexist.com/image"})),e.createElement(l,{className:"ps-4"},e.createElement(lt,{linkto:"/editprofile",text:"Editar Perfil",className:H.ButtonEditProfile})))),e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"}),e.createElement(s,null,e.createElement(l,null),e.createElement(l,{xs:10},e.createElement(dt,{user:t}),e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"})),e.createElement(l,null,e.createElement(C,{text:"Conectar Spotify",className:H.ButtonConnectSpotify,onClick:()=>{f.connectSpotify()}}))))},gt={color:"#0BA55D",borderRadius:"100px",border:"none",width:"8em",height:"3em",fontWeight:"bold"},Et=()=>{const t=I(),[a,n]=U({username:"",password:"",name:"",secondName:"",email:"",birthDate:""}),r=c=>{n(c)},o=c=>{c.preventDefault(),console.log(a),f.register(a).then(()=>{t("/login")}).catch(m=>{console.log(m)})};return e.createElement(J,null,e.createElement(s,{className:"pt-5"})," ",e.createElement(s,{className:"ps-3 pe-3"},e.createElement(l,{className:"text-center"},e.createElement(i,{onSubmit:o},e.createElement(i.Group,{className:"mb-5",controlId:"name"},e.createElement(g,{hasValidation:!0,id:"nameInputGroup"},e.createElement(i.Control,{type:"text",placeholder:"Nombre",onChange:r}))),e.createElement(i.Group,{className:"mb-5",controlId:"secondName"},e.createElement(g,{hasValidation:!0,id:"secondNameInputGroup"},e.createElement(i.Control,{type:"text",placeholder:"Apellidos",onChange:r}))),e.createElement(i.Group,{className:"mb-5",controlId:"birthDate"},e.createElement(g,{hasValidation:!0,id:"secondNameInputGroup"},e.createElement(i.Control,{type:"date",placeholder:"Fecha de Nacimiento",onChange:r}))),e.createElement(i.Group,{className:"mb-5",controlId:"username"},e.createElement(g,{hasValidation:!0,id:"usernameInputGroup"},e.createElement(i.Control,{type:"text",placeholder:"Nombre de usuario",onChange:r}))),e.createElement(i.Group,{className:"mb-5",controlId:"email"},e.createElement(g,{hasValidation:!0,id:"emailInputGroup"},e.createElement(i.Control,{type:"email",placeholder:"Correo electr\xF3nico",onChange:r}))),e.createElement(i.Group,{className:"mb-5",controlId:"password"},e.createElement(g,{hasValidation:!0,id:"passwordInputGroup"},e.createElement(i.Control,{type:"password",placeholder:"Contrase\xF1a",onChange:r}))),e.createElement(i.Group,{className:"mb-5",controlId:"checkPassword"},e.createElement(g,{hasValidation:!0,id:"CheckpasswordInputGroup"},e.createElement(i.Control,{type:"password",placeholder:"Confirmar contrase\xF1a",onChange:r}))),e.createElement(C,{text:"Registrarme",style:gt,type:"submit"})))))},ft="_Background_1tfv3_1",ht="_BackgroundTopProfile_1tfv3_13",bt="_mainFrame_1tfv3_25",Nt="_ButtonEditProfile_1tfv3_37",yt="_MusicalRound_1tfv3_67",vt="_ProfileCard_1tfv3_85",wt="_ProfileCardImage_1tfv3_97",Pt="_TextMuted_1tfv3_119",xt="_TextBold_1tfv3_129",Ct="_AcceptBtn_1tfv3_139";var q={Background:ft,BackgroundTopProfile:ht,mainFrame:bt,ButtonEditProfile:Nt,MusicalRound:yt,ProfileCard:vt,ProfileCardImage:wt,TextMuted:Pt,TextBold:xt,AcceptBtn:Ct};const kt=()=>{const{userProfile:t}=k(u=>u.matchsic),a=I(),n=F(),r=[{value:"Pop",label:"Pop"},{value:"Rock",label:"Rock"},{value:"Heavy",label:"Heavy"},{value:"Cl\xE1sica",label:"Cl\xE1sica"}],o=t.musicPreference.map(u=>({value:u,label:u})),[c,m]=p.exports.useState(o),[h,w]=U({username:t.username,description:t.description,name:t.name}),N=u=>{u.preventDefault();let L=[];c.forEach(P=>{L.push(P.value)});const G=b(d({},h),{musicPreference:L});f.update(G).then(P=>{console.log(P),a("/profile"),n(qe(G))}).catch(P=>{console.log(P)})},_=u=>{w(u)},z=u=>{m(u)};return e.createElement(y,{className:q.mainFrame,fluid:!0},e.createElement(i,{onSubmit:N},e.createElement(s,{className:q.BackgroundTopProfile},e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"},e.createElement(l,{className:"ps-4"},e.createElement(oe,{alt:"User Image",src:"https://thispersondoesnotexist.com/image"})),e.createElement(l,{className:"ps-4"},e.createElement(C,{text:"Aceptar cambios",className:q.AcceptBtn,type:"submit"})))),e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"}),e.createElement(s,null,e.createElement(l,null),e.createElement(l,{xs:10},e.createElement(i.Group,{className:"mb-5",controlId:"name"},e.createElement(g,{hasValidation:!0,id:"nameInputGroup"},e.createElement(i.Control,{type:"textarea",placeholder:"Nombre: "+t.name,onChange:_}))),e.createElement(i.Group,{className:"mb-5",controlId:"username"},e.createElement(g,{hasValidation:!0,id:"nameInputGroup"},e.createElement(i.Control,{type:"text",placeholder:"Nombre de usuario: "+t.username,onChange:_}))),e.createElement(i.Group,{className:"mb-5",controlId:"description"},e.createElement(g,{hasValidation:!0,id:"nameInputGroup"},e.createElement(i.Control,{as:"textarea",placeholder:"Descripci\xF3n: "+t.description,onChange:_}))),e.createElement(Ee,{isMulti:!0,name:"color",options:r,value:c,onChange:z}),e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5"})),e.createElement(l,null))))},_t="_mainFrame_g0zun_1",It="_senderProfilePicture_g0zun_8",Bt="_notificationPayloadText_g0zun_14",St="_button_g0zun_18";var M={mainFrame:_t,senderProfilePicture:It,notificationPayloadText:Bt,button:St};const Ft=t=>{const c=t,{handleGoToMap:a}=c,n=Z(c,["handleGoToMap"]),{sender:r}=t,o=()=>e.createElement("span",null,e.createElement("strong",null,e.createElement("a",{href:r.profileLink},r.username))," te ha dado un toque");return e.createElement("div",d({},n),e.createElement(s,null,e.createElement(l,{className:"col-2"}," ",e.createElement("img",{className:[M.senderProfilePicture].join(" "),src:"https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",alt:"Sender profile picture"})),e.createElement(l,{className:"ms-3 me-3"},e.createElement(s,{className:"mb-2"}," ",e.createElement(l,null,o())),e.createElement(s,null,e.createElement("span",{className:M.notificationPayloadText},t.payload)))),e.createElement(s,{className:"mt-2"},e.createElement(l,{className:"offset-2"},e.createElement(C,{className:`${M.button} border-0`,text:"Ir al mapa",onClick:a})),e.createElement(l,null,e.createElement(C,{className:`${M.button} border-0`,text:"Devolver"}))))},Mt=()=>{k(o=>{var c;return(c=o.matchsic.userSession)==null?void 0:c.username});const t=F(),a=I(),n=o=>c=>{a("/home"),console.log(`Went to home and focused on ${o}`)},r=()=>[{sender:{username:"Lena_00",profileLink:"sender/profile.com"},payload:"Hola, \xBFAlguna playlist que me recomiendes?",handleGoToMap:()=>t(je())},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])},{sender:{username:"Fire_21",profileLink:"sender/profile.com"},payload:"Hey, What's up?",handleGoToMap:n([28.556347,-16.336054])}].map((o,c)=>e.createElement(Ft,b(d({},o),{id:`notification${c}`})));return e.createElement(y,{className:`${M.mainFrame}`,fluid:!0},e.createElement(s,{className:"pt-5"}),e.createElement(s,{className:"pt-5 ps-4"},e.createElement(l,{className:"text-center col-sm-12 col-md-5 offset-sm-0 offset-md-1"},r().map(o=>e.createElement(s,{className:"mb-3",key:o.props.id},e.createElement(l,null,o))))))},At="_map_45kjr_2",Lt="_gray_background_45kjr_13";var se={map:At,gray_background:Lt};const Gt="_controlContainer_t1np4_1",Tt="_controlLogo_t1np4_10";var ce={controlContainer:Gt,controlLogo:Tt},Dt="data:image/png;base64,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";const Rt=t=>{const a=k(r=>r.matchsic.userSession.location.coordinates),n=()=>{!t.map||t.map.setView({lat:a.latitude,lng:a.longitude},15)};return e.createElement("div",{className:"leaflet-bottom leaflet-right",onClick:n},e.createElement("div",{className:"leaflet-control "+ce.controlContainer},e.createElement("img",{className:ce.controlLogo,src:Dt})))},Ht=()=>{const t={accessToken:"pk.eyJ1IjoibW9yZG9yMTExMCIsImEiOiJja3QwNDVpaDkyc3MzMnBwbng5Zm9razA4In0.DsMnEHEZiiPkEeyfjATGwA",url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',id:"mapbox/streets-v11",maxZoom:20,tileSize:512,zoomOffset:-1},{accessToken:a,url:n,attribution:r,id:o,maxZoom:c,tileSize:m,zoomOffset:h}=t;return e.createElement(fe,{accessToken:a,url:n,id:o,maxZoom:c,tileSize:m,zoomOffset:h})},zt="_userIcon_jc7sv_1";var Ot={userIcon:zt};const Ut="_popupContainer_19cqw_1",jt="_coverImage_19cqw_6",Vt="_username_19cqw_12",qt="_listeningTag_19cqw_17",Wt="_trackContent_19cqw_22";var A={popupContainer:Ut,coverImage:jt,username:Vt,listeningTag:qt,trackContent:Wt};const Kt=t=>`${Math.min(15,t.length*.8).toFixed(2)}rem`,Yt=t=>{const{username:a,music:n}=t.user,r=`${n.trackName}, ${n.authorsNames.join(", ")}`,o=Kt(r);return e.createElement(he,null,e.createElement(y,{className:"p-0 "+A.popupContainer,style:{width:o}},e.createElement(s,null,e.createElement(l,{className:"mb-2"},e.createElement("span",{className:"h6 "+A.username},a))),e.createElement(s,null,e.createElement(l,{className:"p-0",xs:3},e.createElement("img",{className:A.coverImage,src:n.coverImage.url})),e.createElement(l,{className:"p-0",xs:9},e.createElement(s,null,e.createElement(l,null,e.createElement("span",{className:A.listeningTag},"Escuchando:"))),e.createElement(s,null,e.createElement(l,null,e.createElement("span",{className:A.trackContent},n.trackName,", ",n.authorsNames.join(", "))))))))},Qt=t=>{const{location:a,music:n}=t.user,r=be.icon({iconUrl:n.coverImage.url,iconSize:[55,55],iconAnchor:[27,27],className:Ot.userIcon}),o=[a.coordinates.latitude,a.coordinates.longitude];return e.createElement(Ne,{icon:r,position:o},e.createElement(Yt,{user:t.user}))},Zt=()=>{let t=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${t}px`);const{nearUsers:a,userSession:{username:n}}=k(m=>m.matchsic),r=F(),[o,c]=p.exports.useState(null);return p.exports.useEffect(()=>{setInterval(async()=>{f.getLocationFromBrowser().then(m=>{f.updateActiveData({location:m}).then(()=>{f.getNearUsers().then(h=>{const w=h.findIndex(N=>N.username===n);w!==-1&&r(Ke(h[w])),r(We(h))})})})},5e3)},[]),e.createElement(y,{fluid:!0},e.createElement(s,null,e.createElement(l,{className:"text-center "+se.gray_background},e.createElement(ye,{center:(o==null?void 0:o.getCenter())||[28.47762873997604,-16.312475617040874],zoom:13,scrollWheelZoom:!0,className:se.map,whenCreated:m=>c(m)},e.createElement(Ht,null),a.map(m=>e.createElement(Qt,{user:m,key:m.username})),e.createElement(Rt,{map:o})))))},Xt=()=>e.createElement(p.exports.Fragment,null,e.createElement(X,null));var Jt="/assets/Home.41ef54b1.svg",$t="/assets/notificacion.a33cc099.svg",ea="/assets/Perfil.e69e6d52.svg";const ta={background:"#FFFF",bottom:0,right:0,left:0},W={background:"#5cb85c",borderRadius:10,flex:1,width:50,height:50,resizeMode:"contain"},aa=()=>e.createElement(S,{className:"fixed-bottom",style:ta},e.createElement(y,null,e.createElement(B,{to:"/home"},e.createElement(S.Brand,null,e.createElement("img",{style:W,src:Jt}))),e.createElement(B,{to:"/notifications"},e.createElement(S.Brand,null,e.createElement("img",{style:W,src:$t}))),e.createElement(B,{to:"/profile"},e.createElement(S.Brand,null,e.createElement("img",{style:W,src:ea}))))),na={background:"#0BA55D"},ra={color:"#FFFFFF",backgroundColor:"transparent",border:"none"},oa=()=>{const[t,a]=p.exports.useState(!1),n=()=>a(!1),r=()=>a(!0),o=I(),c=F(),m=()=>{f.logout().then(()=>{c(Ve()),o("/login")}).catch(()=>{alert("Something went wrong!")})};return e.createElement(S,{className:"fixed-top",style:na},e.createElement(y,null,e.createElement("a",{onClick:r},e.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg"})),e.createElement(D,{show:t,onHide:n},e.createElement(D.Header,{closeButton:!0},e.createElement(D.Title,null,"Menu")),e.createElement(D.Body,null,"Options of menu")),e.createElement(O,{style:ra,onClick:m},"Salir")))},sa=()=>e.createElement(p.exports.Fragment,null,e.createElement(oa,null),e.createElement("div",{className:"pt-5"},e.createElement(X,null)),e.createElement(aa,null));function ca(){const{userIsLoggedIn:t}=k(a=>a.matchsic);return e.createElement(ve,null,t?e.createElement(p.exports.Fragment,null,e.createElement(E,{path:"/",element:e.createElement(sa,null)},e.createElement(E,{path:"/home",element:e.createElement(Zt,null)}),e.createElement(E,{path:"/profile",element:e.createElement(pt,null)}),e.createElement(E,{path:"/notifications",element:e.createElement(Mt,null)}),e.createElement(E,{path:"/editprofile",element:e.createElement(kt,null)}),e.createElement(E,{path:"",element:e.createElement(R,{to:"/home"})})," // Default",e.createElement(E,{path:"*",element:e.createElement(R,{to:"/home"})})," // Default")):e.createElement(p.exports.Fragment,null,e.createElement(E,{path:"/",element:e.createElement(Xt,null)},e.createElement(E,{path:"/login",element:e.createElement(Ze,null)}),e.createElement(E,{path:"/register",element:e.createElement(Et,null)}),e.createElement(E,{path:"*",element:e.createElement(R,{to:"/login"})})," // Default",e.createElement(E,{path:"",element:e.createElement(R,{to:"/login"})})," // Default")))}const la=we({reducer:{matchsic:Ye}});Pe.render(e.createElement(e.StrictMode,null,e.createElement(xe,null,e.createElement(Ce,{store:la},e.createElement(ca,null)))),document.getElementById("root"));
