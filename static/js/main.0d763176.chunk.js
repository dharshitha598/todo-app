(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),r=n.n(l);n(13);var c=e=>{let{addTodo:t}=e;const[n,l]=Object(a.useState)("");return o.a.createElement("form",{onSubmit:e=>{e.preventDefault(),""!==n.trim()&&(t(n),l(""))}},o.a.createElement("input",{type:"text",value:n,onChange:e=>l(e.target.value),placeholder:"Add a\r\nnew todo"}),o.a.createElement("button",{type:"submit"},"Add Todo"))};var d=e=>{let{todos:t,deleteTodo:n}=e;return o.a.createElement("ul",null,t.map(e=>o.a.createElement("li",{key:e.id},e.text,o.a.createElement("button",{onClick:()=>n(e.id)},"Delete"))))};var u=function(){const[e,t]=Object(a.useState)([]);return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"TODO App"),o.a.createElement(c,{addTodo:n=>{t([...e,{id:Date.now(),text:n}])}}),o.a.createElement(d,{todos:e,deleteTodo:n=>{t(e.filter(e=>e.id!==n))}}))};var i=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then(t=>{let{getCLS:n,getFID:a,getFCP:o,getLCP:l,getTTFB:r}=t;n(e),a(e),o(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null))),i()},4:function(e,t,n){e.exports=n(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.0d763176.chunk.js.map