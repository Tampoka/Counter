(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,function(e,t,n){e.exports={counterWithSettings:"Counter_counterWithSettings__35Xbr",counter:"Counter_counter__3lf7g",controls:"Counter_controls__mbamk"}},,,function(e,t,n){e.exports={display:"Display_display__2SfNi",error:"Display_error__3idG2",errorMessage:"Display_errorMessage__3Ap_Y"}},,,function(e,t,n){e.exports={control:"Control_control__VL0ah"}},function(e,t,n){e.exports={display:"DisplayWithSettings_display__7_v13"}},function(e,t,n){e.exports={setting:"Input_setting__39zWR"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),r=n.n(s),i=(n(15),n(4)),u=n(3),l=n(5),o=n.n(l),j=n(0),b=function(e){return Object(j.jsx)("div",{className:o.a.display,children:e.error?Object(j.jsx)("div",{className:o.a.errorMessage,children:e.error}):Object(j.jsx)("div",{className:e.count===e.maxValue?o.a.error:"",children:e.count})})},d=n(2),m=n.n(d),x=n(8),O=n.n(x),f=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:e.action,disabled:e.setDisabled(),className:O.a.control,children:e.title})})},p=n(9),h=n.n(p),v=n(10),_=n.n(v),g=function(e){return Object(j.jsxs)("div",{className:_.a.setting,children:[Object(j.jsx)("span",{children:e.label}),Object(j.jsx)("input",{type:"number",onChange:function(t){return e.onChange(Number(t.currentTarget.value))},value:e.value})]})},V=function(e){return Object(j.jsxs)("div",{className:h.a.display,children:[Object(j.jsx)(g,{label:"max value:",onChange:e.setMax,value:e.maxValue}),Object(j.jsx)(g,{label:"min value:",onChange:e.setMin,value:e.minValue})]})},S=function(){var e=Object(a.useState)({maxValue:5,minValue:0}),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({maxValue:5,minValue:0}),r=Object(u.a)(s,2),l=r[0],o=r[1],d=Object(a.useState)(!1),x=Object(u.a)(d,2),O=x[0],p=x[1],h=Object(a.useState)(n.minValue),v=Object(u.a)(h,2),_=v[0],g=v[1],S=Object(a.useState)(""),N=Object(u.a)(S,2),y=N[0],C=N[1];Object(a.useEffect)((function(){var e=localStorage.getItem("counterValues");if(e){var t=JSON.parse(e);console.log(t),o(t),g(t.minValue)}}),[]),Object(a.useEffect)((function(){(l.maxValue<=l.minValue||l.minValue<0)&&(C("Incorrect value!"),p(!0))}),[l]);return Object(j.jsxs)("div",{className:m.a.counterWithSettings,children:[Object(j.jsxs)("div",{className:m.a.counter,children:[Object(j.jsx)(V,{setMax:function(e){o(Object(i.a)(Object(i.a)({},l),{},{maxValue:e})),p(!1),C('enter values and press "set"')},setMin:function(e){o(Object(i.a)(Object(i.a)({},l),{},{minValue:e})),p(!1),C('enter values and press "set"')},maxValue:l.maxValue,minValue:l.minValue}),Object(j.jsx)("div",{className:m.a.controls,children:Object(j.jsx)(f,{title:"Set",count:_,action:function(){localStorage.setItem("counterValues",JSON.stringify(l)),c(l),g(l.minValue),C(""),p(!0)},setDisabled:function(){return O}})})]}),Object(j.jsxs)("div",{className:m.a.counter,children:[Object(j.jsx)(b,{count:_,maxValue:n.maxValue,error:y}),Object(j.jsxs)("div",{className:m.a.controls,children:[Object(j.jsx)(f,{title:"Inc",count:_,action:function(){return g(_+1)},setDisabled:function(){return _===n.maxValue}}),Object(j.jsx)(f,{title:"Reset",count:_,action:function(){return g(n.minValue)},setDisabled:function(){return _===n.minValue}})]})]})]})};n(17);var N=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(S,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),y()}],[[18,1,2]]]);
//# sourceMappingURL=main.4c83454c.chunk.js.map