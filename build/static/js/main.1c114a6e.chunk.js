(this.webpackJsonphw6=this.webpackJsonphw6||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),s=n(7),c=n.n(s),a=(n(13),n(8)),d=n(2),r=n(3),l=n(5),u=n(4),h=n(0),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(d.a)(this,n),(o=e.call(this,t)).state={newText:t.todo.text,editing:!1},o}return Object(r.a)(n,[{key:"deleteTodo",value:function(){this.props.remove(this.props.todo.id)}},{key:"checkTodoToggle",value:function(){this.props.checkToggle(this.props.todo.id)}},{key:"showEditForm",value:function(){var t=this.state.editing;this.setState({newText:this.props.todo.text,editing:!t})}},{key:"getNewText",value:function(t){var e=t.target.value;this.setState({newText:e})}},{key:"saveEditedValue",value:function(){var t=this.state.newText;this.props.saveEditedValue(this.props.todo.id,t),this.setState({newText:this.props.todo.text,editing:!1})}},{key:"render",value:function(){var t=this,e=this.state.editing,n=this.props.todo;return Object(h.jsxs)("li",{className:"list-group-item list-row "+(n.completed?"done":""),children:[Object(h.jsx)("div",{className:"btn-circle checkbox",onClick:function(){return t.checkTodoToggle()},children:"\u2713"}),Object(h.jsxs)("div",{className:"list-text__container",onDoubleClick:function(){return t.showEditForm()},children:[!e&&Object(h.jsx)("span",{className:"list-text",children:n.text}),e&&Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:n.text,value:this.state.newText,onChange:function(e){return t.getNewText(e)}}),Object(h.jsxs)("div",{className:"input-group-append",children:[Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return t.showEditForm()},children:"\u53d6\u6d88"}),Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return t.saveEditedValue()},children:"\u5b8c\u6210\u7de8\u8f2f"})]})]})]}),Object(h.jsx)("div",{className:"btn-circle delete",onClick:function(){return t.deleteTodo()},children:"\u2715"})]})}}]),n}(i.a.Component),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(d.a)(this,n),(o=e.call(this,t)).state={todos:[{id:1,text:"tip\uff1aclick twice to edit",completed:!1},{id:2,text:"it is done",completed:!0},{id:3,text:":D",completed:!1}],newId:4,newText:""},o}return Object(r.a)(n,[{key:"getNewValue",value:function(t){var e=t.target.value;this.setState({newText:e})}},{key:"addTodo",value:function(t){var e=this.state,n=e.todos,o=e.newText,i=e.newId;o?this.setState({todos:[].concat(Object(a.a)(n),[{id:i,text:o,completed:!1}]),newId:i+1,newText:""}):t.preventDefault()}},{key:"deleteTodo",value:function(t){var e=this.state.todos.filter((function(e){return e.id!==t}));this.setState({todos:e})}},{key:"checkTodoToggle",value:function(t){var e=this.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}));this.setState({todos:e})}},{key:"saveEditedValue",value:function(t,e){var n=this.state.todos.map((function(n){return n.id===t&&(n.text=e),n}));this.setState({todos:n})}},{key:"render",value:function(){var t=this,e=this.state.todos;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("header",{className:"header__container",children:[Object(h.jsx)("h1",{className:"header__site-title",children:"Todo list"}),Object(h.jsx)("p",{className:"header__site-description",children:"\u99ac\u4e0a \u8a18\u4e0b \u60f3\u8981\u505a\u7684\u4efb\u4f55\u4e8b"})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("input",{type:"text",className:"form-control",id:"input-add",placeholder:"I'm gonna do...",value:this.state.newText,onChange:function(e){return t.getNewValue(e)}}),Object(h.jsx)("div",{className:"input-group-append",children:Object(h.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(e){return t.addTodo(e)},children:"add"})})]}),Object(h.jsx)("ul",{className:"list-group list-group-flush",children:e.map((function(e){return Object(h.jsx)(p,{todo:e,remove:function(e){return t.deleteTodo(e)},checkToggle:function(e){return t.checkTodoToggle(e)},saveEditedValue:function(e,n){return t.saveEditedValue(e,n)}},e.id)}))})]})}}]),n}(i.a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),o(t),i(t),s(t),c(t)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.1c114a6e.chunk.js.map