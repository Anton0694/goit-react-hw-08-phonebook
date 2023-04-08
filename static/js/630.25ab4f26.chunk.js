"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[630],{1630:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,o,i,c,s=t(2791),u=t(9434),l=t(4937),d=function(n){return n.contacts.items},p=function(n){return n.filters.filter},h=function(n){return n.contacts.deletingId},m=t(2419),f=t(9439),x=t(168),b=t(7402),g=b.Z.form(r||(r=(0,x.Z)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 200px;\n"]))),Z=b.Z.input(a||(a=(0,x.Z)(["\nmargin-bottom: 15px;\nbox-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);\nborder-radius: 3px;  \n&:focus {\n    outline: none;\n    border-color: blue;\n    box-shadow: 0 0 10px #0000ff;\n  }\n\n"]))),v=b.Z.label(o||(o=(0,x.Z)(["\nmargin-right: 5px;\n\n"]))),j=b.Z.button(i||(i=(0,x.Z)(["\nmargin-left: auto;\nborder-radius: 5px;\nborder-color: grey;\ncursor: pointer;\n&:hover {\n      background-color: blue;\n  }\n"]))),w=t(3329);function y(){var n=(0,s.useState)(""),e=(0,f.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(""),o=(0,f.Z)(a,2),i=o[0],c=o[1],d=(0,u.I0)(),p=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"phone":c(a);break;default:return}},h=function(){r(""),c("")};return(0,w.jsxs)(g,{onSubmit:function(n){n.preventDefault(),d((0,l.uK)({name:t,phone:i})),h()},children:[(0,w.jsxs)(v,{children:["Name",(0,w.jsx)(Z,{onChange:p,type:"text",value:t,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(v,{children:["Phone number",(0,w.jsx)(Z,{onChange:p,type:"tel",value:i,name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(j,{type:"submit",children:"Add contact"})]})}var k,C,A,F,I=b.Z.input(c||(c=(0,x.Z)(["\nbox-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);\nborder-radius: 3px;  \n&:focus {\n    outline: none;\n    border-color: blue;\n    box-shadow: 0 0 10px #0000ff;\n  }\n\n"]))),z=t(4302),K=function(){var n=(0,u.I0)(),e=(0,u.v9)(p);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("label",{htmlFor:"search",children:" Find contacts by name: "}),(0,w.jsx)(I,{onChange:function(e){n((0,z.T)(e.target.value))},type:"text",id:"search",defaultValue:e})]})},S=b.Z.ul(k||(k=(0,x.Z)(["\nwidth: 350px;\npadding-left: 5px;\n"]))),_=b.Z.li(C||(C=(0,x.Z)(["\ndisplay: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0;\n"]))),D=b.Z.p(A||(A=(0,x.Z)(["\n     margin-top: 0;\n    margin-bottom: 5px;\n    margin-right: 10px;\n"]))),P=b.Z.button(F||(F=(0,x.Z)(["\n    margin-left: auto;\nborder-radius: 5px;\nborder-color: grey;\ncursor: pointer;\n&:hover {\n      background-color: blue;\n  }\n"])));function q(){var n=(0,u.I0)(),e=(0,u.v9)(d),t=(0,u.v9)(p),r=(0,u.v9)(h),a=t?e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):e;return console.log(a),(0,w.jsx)(S,{contact:e,children:a.map((function(e){var t=e.name,a=e.phone,o=e.id;return(0,w.jsxs)(_,{children:[(0,w.jsx)(D,{children:"".concat(t,": ").concat(a)}),(0,w.jsx)(P,{disabled:o===r,type:"button",onClick:function(){return n((0,l.GK)(o))},children:"Delete"})]},o)}))})}function G(){var n=(0,u.I0)(),e=(0,u.v9)(d);(0,s.useEffect)((function(){n((0,l.yF)())}),[n]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(y,{onSubmit:function(t){var r=e.some((function(n){return n.name===t.name}));if(r)alert("".concat(t.name," is already in contacts"));else{var a={id:t.id,name:t.name,phone:t.phone};n((0,l.uK)(a))}}}),(0,w.jsx)(K,{}),(0,w.jsx)(q,{onDeleteContact:function(e){n((0,l.GK)(e))}}),(0,w.jsx)(m.Z,{})]})}}}]);
//# sourceMappingURL=630.25ab4f26.chunk.js.map