(this["webpackJsonpreact-simple"]=this["webpackJsonpreact-simple"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),o=n.n(r),c=n(7),u=n(4),i=n(1),s=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:e.savePost},l.a.createElement("h1",null,"Create New Post"),l.a.createElement("input",{type:"text",onChange:e.savePostTitleToState,placeholder:"title",size:"39",required:!0,ref:e.getTitle}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("textarea",{onChange:e.savePostContentToState,placeholder:"contents",rows:"8",cols:"41",required:!0,ref:e.getContent}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",null,"Save Post")))},m=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",null,l.a.createElement("h1",null,"Modify Post"),l.a.createElement("input",{defaultValue:e.title,onChange:e.savePostTitleToState,text:!0,placeholder:"title",size:"39"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("textarea",{defaultValue:e.content,placeholder:"contents",onChange:e.savePostContentToState,rows:"8",cols:"41"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:e.updatePost},"Update Post")))},E=function(e){var t=e.title,n=e.content,a=e.editPost,r=e.id,o=e.deletePost;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement("h3",null,t),l.a.createElement("p",null," ",n),l.a.createElement("button",{onClick:function(){return a(r)}},"Edit"),l.a.createElement("button",{onClick:function(){return o(r)}},"Delete")))},f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),f=Object(i.a)(o,2),b=f[0],d=f[1],v=Object(a.useState)([]),h=Object(i.a)(v,2),g=h[0],p=h[1],P=Object(a.useState)(!1),j=Object(i.a)(P,2),O=j[0],S=j[1],C=Object(a.useState)(!1),T=Object(i.a)(C,2),w=T[0],k=T[1],F=Object(a.useState)(""),x=Object(i.a)(F,2),y=x[0],D=x[1],q=Object(a.useRef)(),z=Object(a.useRef)(),B=function(e){r(e.target.value),console.log(n)},J=function(e){d(e.target.value),console.log(b)},M=function(){S(!O)},N=function(){k(!w)},R=function(e){D(e),N()},V=function(e){var t=g.filter((function(t){return t.id!==e}));p(t)};if(O)return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{savePostTitleToState:B,savePostContentToState:J,getTitle:q,getContent:z,savePost:function(e){e.preventDefault(),p([].concat(Object(c.a)(g),[{title:n,content:b}])),console.log(g),q.current.value="",z.current.value="",M()}}));if(w){var W=g.find((function(e){return e.id===y}));return l.a.createElement(m,{title:W.title,content:W.content,updatePost:function(e){e.preventDefault();var t=g.map((function(e){return e.id===y?Object(u.a)(Object(u.a)({},e),{},{title:n||e.title,content:b||e.content}):e}));p(t),N()},savePostTitleToState:B,savePostContentToState:J})}return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"All Posts"),g.length?g.map((function(e){return l.a.createElement(E,{id:e.id,key:e.id,title:e.title,content:e.content,editPost:R,deletePost:V})})):l.a.createElement("div",null,l.a.createElement("h3",null,"There is nothing to see here!")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:M},"Create New"))},b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.edeb078f.chunk.js.map