(this.webpackJsonpforum_page=this.webpackJsonpforum_page||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),l=n(7),u=n(11),i=n.n(u),s=n(17);function m(){return(m=Object(s.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:n,mode:"cors",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,fetch(t,r);case 4:return c=e.sent,e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return","Connection error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}var E=function(e,t,n){return m.apply(this,arguments)},p=n(6);var h=function(e){var t=e.title,n=e.author,a=e.id;return r.a.createElement("section",null,r.a.createElement(p.b,{to:"/"+a},r.a.createElement("h2",null,t),r.a.createElement("h3",null,"W\u0105tek stworzony przez u\u017cytkownika ",n),r.a.createElement("hr",null)))};n(30);var f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){E(window.location.origin+"/posts","GET").then((function(e){var t=e.posts.map((function(e){var t=e.author,n=e.title,a=e.id;return r.a.createElement(h,{author:t,title:n,id:a,key:a})}));c(t)}))})),r.a.createElement("div",{className:"Sections"},r.a.createElement(p.b,{to:"/newPost",id:"createPost"},"Utw\xf3rz post"),n)},v=n(1);n(31);var d=function(){var e=Object(a.useState)(r.a.createElement("h1",null,"\u0141adowanie")),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),i=u[0],s=u[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),f=h[0],d=h[1],b=Object(v.g)().id;return Object(a.useEffect)((function(){E(window.location.origin+"/posts/"+b,"GET").then((function(e){var t=e.title,n=e.author,a=e.text,o=e.answers.map((function(e,t){var n=e.author,a=e.text;return r.a.createElement("section",{key:t},r.a.createElement("h2",null," ",n," "),r.a.createElement("p",null," ",a," "))}),[]);c(r.a.createElement("div",{className:"PostPage"},r.a.createElement(p.b,{to:"/",id:"back"},"Powr\xf3t"),r.a.createElement("h1",null,t),r.a.createElement("section",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)),o,r.a.createElement("section",null,r.a.createElement("h2",null,"Twoje imie"),r.a.createElement("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("h2",null,"Tekst"),r.a.createElement("textarea",{value:f,onChange:function(e){return d(e.target.value)}}),r.a.createElement("div",{className:"addAnswer",onClick:function(){return function(){var e={author:i,text:f};E(window.location.origin+"/posts/"+b,"POST",e).then((function(){return window.location.reload(!1)}))}()}},"Dodaj odpowied\u017a"),r.a.createElement("div",{style:{clear:"both"}}))))}))})),n};n(32);var b=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),i=u[0],s=u[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),f=h[0],d=h[1],b=Object(v.f)();return r.a.createElement("div",{className:"NewPost"},r.a.createElement(p.b,{to:"/",id:"back"},"Powr\xf3t"),r.a.createElement("h1",null,"Stw\xf3rz nowy post"),r.a.createElement("section",null,r.a.createElement("h2",null,"Temat"),r.a.createElement("input",{type:"text",value:f,onChange:function(e){return d(e.target.value)}}),r.a.createElement("h2",null,"Tekst"),r.a.createElement("textarea",{value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("h2",null,"Twoje imie"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement("div",{className:"createPost",onClick:function(){return function(){var e={author:n,text:i,title:f};E(window.location.origin+"/posts/","POST",e).then((function(){return b.push("/")}))}()}},"Utw\xf3rz"),r.a.createElement("div",{style:{clear:"both"}})))};n(33);var w=function(){return r.a.createElement(p.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:f}),r.a.createElement(v.a,{path:"/newPost",component:b}),r.a.createElement(v.a,{path:"/:id",component:d})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.015b5e0d.chunk.js.map