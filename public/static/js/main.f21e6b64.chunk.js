(this["webpackJsonpto-do-ui"]=this["webpackJsonpto-do-ui"]||[]).push([[0],{155:function(e,t,n){e.exports=n(279)},160:function(e,t,n){},161:function(e,t,n){},166:function(e,t){},168:function(e,t){},206:function(e,t){},207:function(e,t){},279:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),l=(n(160),n(161),n(32)),i=n(35),s=n(25),u=n(9),m=n(85),d=n.n(m),f=n(138),h=n(8),p=n(60),E=n.n(p),g=function(e,t){var n={};return typeof t==typeof!0?n={isComplete:!t}:"string"==typeof t&&(n={text:t}),fetch("".concat(h.uriBase).concat(h.currentApi,"/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error("Could not update with edit");return e.json()})).catch((function(e){console.log(e)}))},b=function(e){return fetch("".concat(h.uriBase).concat(h.currentApi,"/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()}))},v=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.sign({email:"spencernelson144@gmail.com"},h.JWT_KEY);case 2:return n=e.sent,(a={}).doc=t,e.abrupt("return",fetch("".concat(h.uriBase).concat(h.userApi),{method:"POST",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(!e.ok)throw new Error("CreateNewUser Failed");return e.json()})).catch((function(e){console.log(e)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(312),y=n(140),w=n.n(y),C=n(308),j=n(139),O=n.n(j),x=n(304);var S=r.a.createContext({}),T=function(e){var t=r.a.useState(!1),n=Object(u.a)(t,2),a=n[0],o=n[1],c=r.a.useState(window.localStorage.getItem("token")),l=Object(u.a)(c,2),i=l[0],s=l[1],m=r.a.useState(!1),d=Object(u.a)(m,2),f=d[0],p=d[1],g=r.a.useState({}),b=Object(u.a)(g,2),v=b[0],k=b[1];return r.a.useEffect((function(){i&&function(e,t){return new Promise((function(n,a){E.a.verify(e,t,(function(e,t){null!==e?a(e):n(t)}))})).catch((function(e){console.log(e)}))}(i,h.JWT_KEY).then((function(e){k(e.user)})).catch((function(e){s(""),o(!1),window.localStorage.removeItem("token"),console.log("AuthContext",e)}))}),[i]),r.a.createElement("div",null,r.a.createElement(S.Provider,{value:{loggedIn:a,setLoggedIn:o,token:i,setToken:s,admin:f,setAdmin:p,user:v,setUser:k}},e.children))},N=S.Consumer,A=r.a.createContext({}),B=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)([]),i=Object(u.a)(l,2),s=i[0],m=i[1],d=Object(a.useState)([]),f=Object(u.a)(d,2),p=f[0],E=f[1],g=Object(a.useContext)(S),b=g.user,v=g.token;return Object(a.useEffect)((function(){(function(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=!1);return t})(b)||(function(e,t){return console.log("fetch",e._id),fetch("".concat(h.uriBase).concat(h.currentApi,"/?userId=").concat(e._id),{method:"GET",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()})).catch((function(e){console.log(e)}))}(b,v).then((function(e){c(e)})),b.admin&&(function(e){return fetch("".concat(h.uriBase).concat(h.userApi),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()})).catch((function(e){console.log(e)}))}(v).then((function(e){m(e)})).catch((function(e){console.log(e)})),function(e){return fetch("".concat(h.uriBase).concat(h.currentApi),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}(v).then((function(e){E(e)}))))}),[b,v]),r.a.createElement("div",null,r.a.createElement(A.Provider,{value:{tasks:o,setTasks:c,users:s,setUsers:m,allTasks:p,setAllTasks:E}},e.children))};A.Consumer;function L(e){var t=r.a.useState(e.task.isComplete),n=Object(u.a)(t,2),a=n[0],o=n[1],c=r.a.useState(a?{textDecorationLine:"line-through"}:{extDecorationLine:"none"}),l=Object(u.a)(c,2),i=l[0],m=l[1],d=r.a.useState(a),f=Object(u.a)(d,2),h=f[0],p=f[1],E=r.a.useContext(A),v=E.tasks,y=E.setTasks,j=function(){a?(m({textDecorationLine:"none"}),o(!1),p(!1)):(m({textDecorationLine:"line-through"}),o(!0),p(!0))};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(x.a,{container:!0,spacing:0,justify:"center",alignItems:"baseline"},r.a.createElement(x.a,{item:!0,xs:!0}),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(k.a,{checked:h,onChange:function(e){return p(e.target.checked)},color:"primary",onClick:function(){g(e.task._id,a).then((function(t){if(1===t.n){var n=Object(s.a)(v),a=!0,r=!1,o=void 0;try{for(var c,l=n[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var i=c.value;i._id===e.task._id&&(i.complete=!i.complete)}}catch(u){r=!0,o=u}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}y(n),j()}})).catch((function(e){console.log(e)}))}})),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:i},"".concat(e.task.text)))),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(C.a,{"aria-label":"edit",onClick:function(){e.setIsEdit(!0),e.setText(e.task.text),e.setEditId(e.task._id)}},r.a.createElement(O.a,{fontSize:"small"})),r.a.createElement(C.a,{"aria-label":"delete",onClick:function(){var t=e.task;b(t._id).then((function(e){if(1===e.n){var n,a=Object(s.a)(v),r=!0,o=!1,c=void 0;try{for(var l,i=v[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value;u._id===t._id&&(n=v.indexOf(u))}}catch(m){o=!0,c=m}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}a.splice(n,1),y(a).then(j())}})).catch((function(e){console.log(e)}))}},r.a.createElement(w.a,{fontSize:"small"}))),r.a.createElement(x.a,{item:!0,xs:!0}))))}function I(e){var t=function(t){e.setText(t.target.value),13===t.keyCode&&e.onClickAdd(t)};return r.a.createElement("div",{style:{backgroundColor:"lightblue",padding:"10px",height:"50px"}},e.isEdit?"Edit Task:":"New Task:",r.a.createElement("input",{className:"taskText",style:{margin:"5px",height:"50%",width:"35%",fontSize:"16px"},type:"text",onChange:t,value:e.text,onKeyUp:t}),e.isEdit?r.a.createElement("button",{className:"editButton",onClick:e.onClickEdit},"Edit"):r.a.createElement("button",{className:"addButton",onClick:e.onClickAdd},"Add"))}var _={listStyleType:"none"},D={listStyleType:"none",backgroundColor:"lightBlue"};function P(e){var t=r.a.useState(""),n=Object(u.a)(t,2),a=n[0],o=n[1],c=r.a.useState(!1),l=Object(u.a)(c,2),i=l[0],m=l[1],d=r.a.useState(""),f=Object(u.a)(d,2),p=f[0],E=f[1],b=r.a.useContext(S),v=b.setLoggedIn,k=b.user,y=b.setUser,w=r.a.useContext(A),C=w.tasks,j=w.setTasks,O=new Date;return r.a.createElement("div",null,r.a.createElement("h4",null,"".concat(k.firstName," ").concat(k.lastName,"'s Tasks:")),r.a.createElement("div",null,r.a.createElement("ul",{style:{padding:0}},function(e){return e.reduce((function(e,t){return new Date(t.date).toLocaleDateString()!==new Date(O).toLocaleDateString()?(O=t.date,e.push(O),e.push(t)):e.push(t),e}),[]).map((function(e,t){return e.text?r.a.createElement("li",{style:_,key:t},r.a.createElement(L,{task:e,setIsEdit:m,setText:o,setEditId:E})):r.a.createElement("li",{style:D,key:t},"***** ".concat(new Date(e).toLocaleDateString()," *****"))}))}(C))),r.a.createElement("div",null,r.a.createElement(I,{text:a,setText:o,onClickAdd:function(e){if(""===a)return alert("Task cannot be empty");(function(e){return fetch("".concat(h.uriBase).concat(h.currentApi),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()})).catch((function(e){console.log(e)}))})({date:new Date,text:a,isComplete:!1,userId:k._id}).then((function(e){var t=[].concat(Object(s.a)(C),[e]);j(t)})).then(o(""))},isEdit:i,setIsEdit:m,onClickEdit:function(){m(!1),""!==p?g(p,a).then((function(e){var t=Object(s.a)(C),n=!0,r=!1,c=void 0;try{for(var l,i=C[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var u=l.value;u._id===p&&(u.text=a)}}catch(m){r=!0,c=m}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}j(t),o("")})).catch((function(e){console.log(e)})):alert("Cannot Edit")}})),r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("token"),v(!1),j([]),y({})}},"LOGOUT"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,k.admin?r.a.createElement("button",{onClick:function(){e.history.push("/create-user")}},"Admin Page"):null))}var U=n(141),J=n.n(U),z=n(309);var q=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),m=s[0],d=s[1],f=Object(a.useContext)(S),p=f.loggedIn,E=f.setLoggedIn,g=f.setToken,b=function(e){switch(e.target.name){case"email":c(e.target.value);break;case"password":d(e.target.value)}};return Object(a.useEffect)((function(t){(t=J.a.parseUrl(window.location.href)).query.token&&(E(!0),g(t.query.token),window.localStorage.setItem("token",t.query.token),e.history.push("/tasksList"));var n=window.localStorage.getItem("token");n&&(E(!0),g(n))}),[]),r.a.createElement("div",null,"Email:",r.a.createElement("input",{type:"email",name:"email",onChange:b,value:o}),r.a.createElement("br",null),"Password:",r.a.createElement("input",{type:"password",name:"password",onChange:b,value:m}),r.a.createElement("br",null),r.a.createElement(z.a,{onClick:function(){var t={email:o,password:m};fetch("".concat(h.uriBase).concat(h.userApi,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Could not get user");return e.json()})).then((function(t){""!==t.token&&(E(!0),g(t.token),window.localStorage.setItem("token",t.token)),e.history.push("/tasksList")})).catch((function(e){console.error(e.name,e.message)}))}},"Log In"),r.a.createElement(z.a,{component:l.b,to:"/signup"},"Sign Up!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"".concat(h.uriBase).concat(h.userApi,"/auth/google/login")},r.a.createElement("img",{src:"".concat(h.uriBase,"/img/google_login.png"),alt:"Google Login",height:"45",width:"190"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"".concat(h.uriBase).concat(h.userApi,"/auth/facebook/login")},r.a.createElement("img",{src:"".concat(h.uriBase,"/img/facebook_login.png"),alt:"Facebook Login",height:"45",width:"190"})),r.a.createElement("br",null),r.a.createElement("br",null),p?r.a.createElement(l.b,{to:"/tasksList"},"To Tasks"):null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://www.termsfeed.com/privacy-policy/8f4f66fa4c830b22fc9a54a9b3601b26"},"Privacy Policy"))},M=n(143);function F(e){var t=e.component,n=Object(M.a)(e,["component"]);return r.a.createElement(N,null,(function(e){var a=e.loggedIn;return r.a.createElement(i.b,Object.assign({render:function(e){return a?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/"})}},n))}))}var G=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),m=Object(u.a)(i,2),d=m[0],f=m[1],p=Object(a.useState)(""),E=Object(u.a)(p,2),g=E[0],v=E[1],y=Object(a.useState)(""),w=Object(u.a)(y,2),C=w[0],j=w[1],O=Object(a.useState)(!1),x=Object(u.a)(O,2),T=x[0],N=x[1],B=r.a.useState(!1),L=Object(u.a)(B,2),I=L[0],_=L[1],D=r.a.useState(""),P=Object(u.a)(D,2),U=P[0],J=P[1],z=r.a.useContext(S),q=z.setToken,M=z.token,F=z.setLoggedIn,G=z.setUser,W=r.a.useContext(A),K=W.setTasks,Y=W.users,H=W.setUsers,R=W.allTasks,$=W.setAllTasks,Q=function(){c(""),f(""),v(""),j(""),N(!1),_(!1),J("")},V=function(e){var t=e.target.name,n=e.target.value;switch(t){case"firstName":c(n);break;case"lastName":f(n);break;case"email":v(n);break;case"password":j(n)}},X=function(e){var t=e.target.name,n=Y[t];c(n.firstName),f(n.lastName),v(n.email),N(n.admin),j(n.password),_(!0),J(n._id)},Z=function(){(function(e,t){var n={};return n.doc=e,fetch("".concat(h.uriBase).concat(h.userApi),{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error("CreateNewUser Failed");return e.json()})).catch((function(e){console.log(e)}))})({firstName:o,lastName:d,email:g,password:C,admin:T},M).then((function(e){var t=Object(s.a)(Y);t.push(e),H(t)})),Q()},ee=function(e){var t={firstName:o,lastName:d,email:g,password:C,admin:T};(function(e,t,n){return fetch("".concat(h.uriBase).concat(h.userApi,"/").concat(e),{method:"PATCH",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Could not update user");return e.json()})).catch((function(e){console.log(e)}))})(U,t,M).then((function(e){if(1===e.nModified){var n=Object(s.a)(Y),a=!0,r=!1,o=void 0;try{for(var c,l=n[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var i=c.value;if(i._id===U){for(var u in i)i[u]=t[u];H(n)}}}catch(m){r=!0,o=m}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}}})),Q()},te=function(e){var t=e.target.name;(function(e,t){return fetch("".concat(h.uriBase).concat(h.userApi,"/").concat(e._id),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()}))})(Y[t],M).then((function(e){if(1===e.deletedCount){var n=Object(s.a)(Y);n.splice(t,1),H(n)}}))},ne=function(e){var t=e.target.value;b(t).then((function(e){if(1===e.deletedCount){var n,a=Object(s.a)(R),r=!0,o=!1,c=void 0;try{for(var l,i=a[Symbol.iterator]();!(r=(l=i.next()).done);r=!0){var u=l.value;u._id===t&&(n=a.indexOf(u))}}catch(m){o=!0,c=m}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}a.splice(n,1),$(a)}})).catch((function(e){console.log(e)}))};return r.a.createElement("div",null,"Create New Account ",r.a.createElement("br",null),r.a.createElement("div",null,"First Name:",r.a.createElement("input",{type:"text",name:"firstName",onChange:V,value:o}),r.a.createElement("br",null),"Last Name:",r.a.createElement("input",{type:"text",name:"lastName",onChange:V,value:d}),r.a.createElement("br",null),"Email:",r.a.createElement("input",{type:"email",name:"email",onChange:V,value:g}),r.a.createElement("br",null),"Password:",r.a.createElement("input",{type:"password",name:"password",onChange:V,value:C}),r.a.createElement("br",null),r.a.createElement(k.a,{checked:T,onChange:function(){N(!T)},value:T})," Admin ",r.a.createElement("br",null),I?r.a.createElement("button",{onClick:ee},"Edit"):r.a.createElement("button",{onClick:Z},"Add New")),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("token"),q(""),F(!1),K([]),G({})}},"LOGOUT"),r.a.createElement(l.b,{to:"/tasks"},"Tasks"),r.a.createElement("button",{onClick:Q},"CLEAR FORM")),r.a.createElement("div",{style:{float:"left",textAlign:"left"}},r.a.createElement("h2",null,"Users:"),r.a.createElement("ul",null,Y.map((function(e,t){return r.a.createElement("li",{key:e._id},"".concat(e._id," ||").concat(e.firstName," || ").concat(e.email," || ").concat(e.admin?"Admin":"Not admin"," ||"),r.a.createElement("button",{onClick:te,name:t},"Delete"),r.a.createElement("button",{onClick:X,name:t},"Edit"))}))),r.a.createElement("h2",null,"Tasks Without Users:"),r.a.createElement("ul",null,R.filter((function(e){var t=!0;return Y.forEach((function(n){e.userId===n._id&&(t=!1)})),t})).map((function(e,t){return r.a.createElement("li",{key:t},"".concat(e.text," || ").concat(e.userId),r.a.createElement("button",{onClick:ne,value:e._id},"DELETE"))})))))};function W(e){return r.a.createElement("div",{style:{backgroundColor:"lightblue",padding:"10px"}},r.a.createElement("h1",null,"Task Manager"))}var K=n(144),Y=n(311),H=n(310);var R=function(e){var t=Object(a.useState)({firstName:"",lastName:"",email:"",password:""}),n=Object(u.a)(t,2),o=n[0],c=n[1],l=function(e){var t=Object(K.a)({},o);switch(e.target.id){case"firstName":t.firstName=e.target.value;break;case"lastName":t.lastName=e.target.value;break;case"email":t.email=e.target.value;break;case"password":t.password=e.target.value}c(t)};return r.a.createElement("div",null,r.a.createElement(H.a,{elevation:3,style:{padding:16,margin:"25%"}},r.a.createElement("div",null,r.a.createElement(Y.a,{required:!0,id:"firstName",label:"First Name",value:o.firstName,onChange:l})),r.a.createElement("div",null,r.a.createElement(Y.a,{required:!0,id:"lastName",label:"Last Name",value:o.lastName,onChange:l})),r.a.createElement("div",null,r.a.createElement(Y.a,{required:!0,id:"email",label:"Email",value:o.email,onChange:l})),r.a.createElement("div",null,r.a.createElement(Y.a,{required:!0,id:"password",label:"Password",type:"password",value:o.password,onChange:l})),r.a.createElement("br",null),r.a.createElement(z.a,{variant:"contained",color:"primary",onClick:function(){for(var t in o)if(""===o[t])return alert("Please fill out all fields."),null;var n={firstName:o.firstName,lastName:o.lastName,email:o.email,password:o.password,admin:!1};console.log(n),v(n).then((function(t){alert("User Created!"),e.history.push("/")})).catch((function(e){alert("Creation failed")}))}},"Sign Up!"),r.a.createElement(z.a,{color:"secondary",onClick:function(){e.history.push("/")}},"Cancel")))};var $=function(e){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(T,null,r.a.createElement(B,null,r.a.createElement(W,null),r.a.createElement(i.d,null,r.a.createElement(F,{path:"/tasksList",component:P}),r.a.createElement(F,{path:"/create-user",component:G}),r.a.createElement(i.b,{path:"/signup",component:R}),r.a.createElement(i.b,{path:"/",component:q}))))))};var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){var a=[{date:(new Date).toLocaleDateString(),text:"My first task",isComplete:!1},{date:(new Date).toLocaleDateString(),text:"My second task should start completed",isComplete:!0}];e.exports.uriBase="",e.exports.currentApi="/tasks",e.exports.userApi="/users",e.exports.JWT_KEY="abc123",e.exports.DUMMY_DATA=a}},[[155,1,2]]]);
//# sourceMappingURL=main.f21e6b64.chunk.js.map