(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),u=n(8),o=n.n(u),a=n(31),s=n(1),j=function(e){var t=e.step,n=e.onIncrement,c=e.onDecrement;return Object(s.jsxs)("div",{className:"Counter__controls",children:[Object(s.jsxs)("button",{type:"button",onClick:n,children:["\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 ",t]}),Object(s.jsxs)("button",{type:"button",onClick:c,children:["\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 ",t]})]})},i=n(9),b=(n(26),function(e){var t=e.value;return Object(s.jsx)("span",{className:"Counter__value",children:t})});var l=Object(i.b)((function(e){return{step:e.counter.step,value:e.counter.state}}),(function(e){return{onIncrement:function(t){return e(function(e){return{type:"counter/Increment",payload:e}}(t))},onDecrement:function(t){return e(function(e){return{type:"counter/Decrement",payload:e}}(t))}}}))((function(e){var t=e.value,n=e.step,c=e.onIncrement,r=e.onDecrement;return Object(s.jsxs)("div",{className:"Counter",children:[Object(s.jsx)(b,{value:t}),Object(s.jsx)(j,{step:n,onIncrement:function(){return c(n)},onDecrement:function(){return r(n)}}),"Counter"]})}));function O(){return Object(s.jsx)(l,{})}var p=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(a.b,{children:Object(s.jsx)(a.a,{path:"/counter",children:Object(s.jsx)(O,{})})})})},d=n(5),m=n(16),v={counterValue:0},f=Object(m.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"counter/Increment":return Object(d.a)(Object(d.a)({},e),{},{counter:Object(d.a)(Object(d.a)({},e.counter),{},{value:e.counterValue+c})});case"counter/Decrement":return Object(d.a)(Object(d.a)({},e),{},{counter:Object(d.a)(Object(d.a)({},e.counter),{},{value:e.counterValue-c})});default:return e}})),h=f;o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(i.a,{store:h,children:Object(s.jsx)(p,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.99d46ed2.chunk.js.map