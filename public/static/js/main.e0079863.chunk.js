(this["webpackJsonpto-do-ui"]=this["webpackJsonpto-do-ui"]||[]).push([[0],{10:function(e,t,n){var a=[{date:(new Date).toLocaleDateString(),text:"My first task",isComplete:!1},{date:(new Date).toLocaleDateString(),text:"My second task should start completed",isComplete:!0}];e.exports.uriBase="sn-todo.herokuapp.com",e.exports.currentApi="/tasks",e.exports.userApi="/users",e.exports.JWT_KEY="abc123",e.exports.DUMMY_DATA=a},129:function(e,t,n){e.exports=n(253)},134:function(e,t,n){},135:function(e,t,n){},143:function(e,t){},145:function(e,t){},183:function(e,t){},184:function(e,t){},253:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(32),c=n.n(r),l=(n(134),n(135),n(40)),i=n(26),u=n(5),s=n(10),m=function(e,t){console.log("Create new User",e);var n={};return n.doc=e,fetch("".concat(s.userApi,"/create"),{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error("CreateNewUser Failed");return console.log("createNewUser",e.json()),e.json()})).catch((function(e){console.log(e)}))},d=function(e,t){return console.log("deleteUser user._id",e._id),fetch("".concat(s.userApi,"/delete/").concat(e._id),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()}))},f=function(e,t,n){return console.log("updateUser user",t),fetch("".concat(s.userApi,"/update/").concat(e),{method:"PATCH",headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Could not update user");return e.json()})).catch((function(e){console.log(e)}))},p=function(e,t){var n={};return typeof t==typeof!0?n={isComplete:!t}:"string"==typeof t&&(n={text:t}),fetch("".concat(s.currentApi,"/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error("Could not update with edit");return e})).catch((function(e){console.log(e)}))},h=n(268),E=n(121),g=n.n(E),b=n(269),k=n(120),v=n.n(k),w=n(267);function y(e){var t=o.a.useState(e.task.isComplete),n=Object(u.a)(t,2),a=n[0],r=n[1],c=o.a.useState(a?{textDecorationLine:"line-through"}:{}),l=Object(u.a)(c,2),i=l[0],m=l[1],d=o.a.useState(a),f=Object(u.a)(d,2),E=f[0],k=f[1],y=function(){a?(m({}),r(!1),k(!1)):(m({textDecorationLine:"line-through"}),r(!0),k(!0))};return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(w.a,{container:!0,spacing:0,justify:"center",alignItems:"baseline"},o.a.createElement(w.a,{item:!0,xs:!0}),o.a.createElement(w.a,{item:!0,xs:!0},o.a.createElement(h.a,{checked:E,onChange:function(e){return k(e.target.checked)},color:"primary",onClick:function(){y(),p(e.task._id,a).then((function(t){r(t.isComplete),e.refresh()})).catch((function(e){console.log(e)}))}})),o.a.createElement(w.a,{item:!0,xs:!0},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("div",{style:i},"".concat(e.task.text)))),o.a.createElement(w.a,{item:!0,xs:!0},o.a.createElement(b.a,{"aria-label":"edit",onClick:function(){e.setIsEdit(!0),e.setText(e.task.text),e.setEditId(e.task._id)}},o.a.createElement(v.a,{fontSize:"small"})),o.a.createElement(b.a,{"aria-label":"delete",onClick:function(){var t,n=e.task;(t=n._id,fetch("".concat(s.currentApi,"/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()}))).then((function(t){e.refresh()})).then((function(e){y()})).catch((function(e){console.log(e)}))}},o.a.createElement(g.a,{fontSize:"small"}))),o.a.createElement(w.a,{item:!0,xs:!0}))))}function C(e){var t=function(t){e.setText(t.target.value),13===t.keyCode&&e.onClickAdd(t)};return o.a.createElement("div",{style:{backgroundColor:"lightblue",padding:"10px",height:"50px"}},e.isEdit?"Edit Task:":"New Task:",o.a.createElement("input",{style:{margin:"5px",height:"50%",width:"35%",fontSize:"16px"},type:"text",onChange:t,value:e.text,onKeyUp:t}),e.isEdit?o.a.createElement("button",{onClick:e.onClickEdit},"Edit"):o.a.createElement("button",{onClick:e.onClickAdd},"Add"))}var j=o.a.createContext({}),O=function(e){var t=o.a.useState(!1),n=Object(u.a)(t,2),a=n[0],r=n[1],c=o.a.useState(""),l=Object(u.a)(c,2),i=l[0],s=l[1],m=o.a.useState(!1),d=Object(u.a)(m,2),f=d[0],p=d[1];return o.a.createElement("div",null,o.a.createElement(j.Provider,{value:{loggedIn:a,setLoggedIn:r,token:i,setToken:s,admin:f,setAdmin:p}},e.children))},x=j.Consumer,T=n(122),S=n.n(T);var A={listStyleType:"none"},N={listStyleType:"none",backgroundColor:"lightBlue"};function L(e){var t=o.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1],c=o.a.useState([]),l=Object(u.a)(c,2),i=l[0],m=l[1],d=o.a.useState(""),f=Object(u.a)(d,2),h=f[0],E=f[1],g=o.a.useState(!1),b=Object(u.a)(g,2),k=b[0],v=b[1],w=o.a.useState(""),O=Object(u.a)(w,2),x=O[0],T=O[1],L=o.a.useContext(j),D=L.setLoggedIn,I=L.token,B=L.admin,_=L.setAdmin,U=function(){(function(e,t){return new Promise((function(n,a){S.a.verify(e,t,(function(e,t){null!==e?a(e):n(t)}))}))})(I,s.JWT_KEY).then((function(e){return e.user})).then((function(e){r(e),_(e.admin),function(e){return fetch("".concat(s.currentApi,"/").concat(e._id),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()})).catch((function(e){console.log(e)}))}(e).then((function(e){m(e)}))})).catch((function(t){console.log(t),e.history.push("/")}))};o.a.useEffect((function(){U()}),[]);var P=new Date(0);return o.a.createElement("div",null,o.a.createElement("h4",null,"".concat(a.firstName," ").concat(a.lastName,"'s Tasks:")),o.a.createElement("div",null,o.a.createElement("ul",{style:{padding:0}},function(e){return e.reduce((function(e,t){return new Date(t.date).toLocaleDateString()!==new Date(P).toLocaleDateString()?(P=t.date,e.push(P),e.push(t)):e.push(t),e}),[]).map((function(e,t){return e.text?o.a.createElement("li",{style:A,key:t},o.a.createElement(y,{task:e,refresh:U,setIsEdit:v,setText:E,setEditId:T})):o.a.createElement("li",{style:N,key:t},"***** ".concat(new Date(e).toLocaleDateString()," *****"))}))}(i))),o.a.createElement("div",null,o.a.createElement(C,{text:h,setText:E,onClickAdd:function(e){if(""===h)return alert("Task cannot be empty");(function(e){return console.log("createNewTask",e),fetch("".concat(s.currentApi),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()})).catch((function(e){console.log(e)}))})({date:new Date,text:h,isComplete:!1,userId:a._id}).then((function(e){U()})),E("")},refresh:U,isEdit:k,setIsEdit:v,onClickEdit:function(){v(!1),""!==x?p(x,h).then((function(e){U(),E("")})).catch((function(e){console.log(e)})):alert("Cannot Edit")}})),o.a.createElement("button",{onClick:function(){D(!1)}},"LOGOUT"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",null,B?o.a.createElement("button",{onClick:function(){e.history.push("/create-user")}},"Admin Page"):null))}var D=n(123),I=n.n(D);var B=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(""),i=Object(u.a)(l,2),m=i[0],d=i[1],f=Object(a.useContext)(j),p=f.setLoggedIn,h=f.setToken,E=f.token,g=function(e){switch(e.target.name){case"email":c(e.target.value);break;case"password":d(e.target.value)}};return Object(a.useEffect)((function(t){(t=I.a.parseUrl(window.location.href)).query.token&&(console.log("useEffect",t.query.token),p(!0),h(t.query.token),e.history.push("/tasks"))})),o.a.createElement("div",null,"Email:",o.a.createElement("input",{type:"email",name:"email",onChange:g,value:r}),o.a.createElement("br",null),"Password:",o.a.createElement("input",{type:"password",name:"password",onChange:g,value:m}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){var t={email:r,password:m};fetch("".concat(s.uriBase).concat(s.userApi,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Could not get user");return console.log("httpresult"),e.json()})).then((function(t){""!==t.token&&(console.log(E),p(!0),h(t.token)),e.history.push("/tasks")})).catch((function(e){console.error(e.name,e.message)}))}},"Log In"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:"".concat(s.userApi,"/auth/google/login")},"LOGIN WITH GOOGLE"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:"".concat(s.userApi,"/auth/facebook/login")},"LOGIN WITH FACEBOOK"))},_=n(125);function U(e){var t=e.component,n=Object(_.a)(e,["component"]);return o.a.createElement(x,null,(function(e){var a=e.loggedIn;return o.a.createElement(i.b,Object.assign({render:function(e){return a?o.a.createElement(t,e):o.a.createElement(i.a,{to:"/"})}},n))}))}var P=function(e){return o.a.createElement("div",null,"This is protected")},J=n(28),G=n.n(J),z=n(50),M=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),p=Object(u.a)(i,2),E=p[0],g=p[1],b=Object(a.useState)(""),k=Object(u.a)(b,2),v=k[0],w=k[1],y=Object(a.useState)(""),C=Object(u.a)(y,2),O=C[0],x=C[1],T=Object(a.useState)(""),S=Object(u.a)(T,2),A=S[0],N=S[1],L=Object(a.useState)(!1),D=Object(u.a)(L,2),I=(D[0],D[1]),B=Object(a.useState)(!1),_=Object(u.a)(B,2),U=_[0],P=_[1],J=o.a.useState(!1),M=Object(u.a)(J,2),W=M[0],F=M[1],H=o.a.useState(""),K=Object(u.a)(H,2),q=K[0],R=K[1],Y=o.a.useContext(j),$=Y.setLoggedIn,Q=Y.token,V=function(){g(""),w(""),x(""),N(""),I(!1),P(!1),F(!1),R("")},X=function(e){var t=e.target.name,n=e.target.value;switch(t){case"firstName":g(n);break;case"lastName":w(n);break;case"email":x(n);break;case"password":N(n)}},Z=function(){var e=Object(z.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={firstName:E,lastName:v,email:O,password:A,admin:U},e.next=3,m(t,Q);case 3:V(),ae();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(z.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),n={firstName:E,lastName:v,email:O,password:A,admin:U},console.log(q,n),e.next=5,f(q,n,Q);case 5:V(),ae();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e){var t=e.target.name,n=r[t];g(n.firstName),w(n.lastName),x(n.email),P(n.admin),N(n.password),F(!0),R(n._id)},ne=function(){var e=Object(z.a)(G.a.mark((function e(t){var n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,a=r[n],e.next=4,d(a,Q);case 4:V(),ae();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){(function(e){return console.log("getAllUsers",e),fetch("".concat(s.userApi),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("Bad response");return e.json()})).catch((function(e){console.log(e)}))})(Q).then((function(e){c(e)}))};Object(a.useEffect)((function(){ae()}),[]);return o.a.createElement("div",null,"Create New Account ",o.a.createElement("br",null),o.a.createElement("div",null,"First Name:",o.a.createElement("input",{type:"text",name:"firstName",onChange:X,value:E}),o.a.createElement("br",null),"Last Name:",o.a.createElement("input",{type:"text",name:"lastName",onChange:X,value:v}),o.a.createElement("br",null),"Email:",o.a.createElement("input",{type:"email",name:"email",onChange:X,value:O}),o.a.createElement("br",null),"Password:",o.a.createElement("input",{type:"password",name:"password",onChange:X,value:A}),o.a.createElement("br",null),o.a.createElement(h.a,{checked:U,onChange:function(){P(!U)},value:U})," Admin ",o.a.createElement("br",null),W?o.a.createElement("button",{onClick:ee},"Edit"):o.a.createElement("button",{onClick:Z},"Add New")),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){$(!1)}},"LOGOUT"),o.a.createElement("t",null),o.a.createElement(l.b,{to:"/tasks"},"Tasks"),o.a.createElement("button",{onClick:ae},"Refresh"),o.a.createElement("button",{onClick:V},"CLEAR FORM")),o.a.createElement("div",{style:{float:"left",textAlign:"left"}},o.a.createElement("ul",null,r.map((function(e,t){return o.a.createElement("li",{key:t},"".concat(e.email," || ").concat(e.admin?"Admin":"Not admin"," ||"),o.a.createElement("button",{onClick:ne,name:t},"Delete"),o.a.createElement("button",{onClick:te,name:t},"Edit"))})))))};function W(e){return o.a.createElement("div",{style:{backgroundColor:"lightblue",padding:"10px"}},o.a.createElement("h1",null,"Task Manager"))}var F=function(e){return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement(O,null,o.a.createElement(W,null),o.a.createElement(i.d,null,o.a.createElement(U,{path:"/protected",component:P}),o.a.createElement(U,{path:"/tasks",component:L}),o.a.createElement(U,{path:"/create-user",component:M}),o.a.createElement(i.b,{path:"/",component:B})))))};var H=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.e0079863.chunk.js.map