(this["webpackJsonpdpg-task"]=this["webpackJsonpdpg-task"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(11),c=n.n(a),i=n(141),l=n(140),u=n(21),s=n(20),d=n(134),f=n(106),j=n(143),b=n(138),m=n(10),p=n(142),x=n(4),h=Object(d.a)((function(){return{root:{marginBottom:"38px"}}})),g=function(){var e=h(),t=Object(m.d)();return Object(x.jsx)(m.a,{name:"Name",control:t.control,defaultValue:"",render:function(t){var n=t.field,r=n.onChange,o=n.value,a=t.fieldState.error;return Object(x.jsx)(p.a,{className:e.root,label:"Name*",type:"text",fullWidth:!0,autoComplete:"on",value:o,onChange:function(e){return r(function(e){var t=e.target.value;return t=t.replace(/[0-9]/g,""),"".concat(t.substr(0,1).toUpperCase()).concat(t.slice(1))}(e))},error:!!a,helperText:a?a.message:""})},rules:{required:"Enter your name"}})},O=Object(d.a)((function(){return{root:{marginBottom:"38px"}}})),v=function(){var e=O(),t=Object(m.d)();return Object(x.jsx)(m.a,{name:"Company",control:t.control,defaultValue:"",render:function(t){var n=t.field,r=n.onChange,o=n.value,a=t.fieldState.error;return Object(x.jsx)(p.a,{className:e.root,label:"Company*",type:"text",fullWidth:!0,autoComplete:"on",value:o,onChange:r,error:!!a,helperText:a?a.message:""})},rules:{required:"Enter Company name"}})},y=Object(d.a)((function(){return{root:{marginBottom:"38px"}}})),C=function(){var e=y(),t=Object(m.d)();return Object(r.useEffect)((function(){var e;(null===(e=t.watch("email"))||void 0===e?void 0:e.length)>0&&t.trigger("email")}),[t.watch("email")]),Object(x.jsx)(m.a,{name:"email",control:t.control,defaultValue:"",render:function(t){var n=t.field,r=n.onChange,o=n.onBlur,a=n.value,c=t.fieldState.error;return Object(x.jsx)(p.a,{className:e.root,label:"Email*",type:"email",fullWidth:!0,autoComplete:"on",value:a,onBlur:o,onChange:function(e){return r(e.target.value.toLowerCase())},error:!!c,helperText:c?c.message:""})},rules:{required:"Enter your Email",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address"}}})},S=Object(d.a)((function(){return{root:{marginBottom:"38px"}}})),w=function(){var e=S(),t=Object(m.d)();return Object(r.useEffect)((function(){var e;(null===(e=t.watch("Phone"))||void 0===e?void 0:e.length)>0&&t.trigger("Phone")}),[t.watch("Phone")]),Object(x.jsx)(m.a,{name:"Phone",control:t.control,defaultValue:"",render:function(t){var n=t.field,r=n.onChange,o=n.value,a=t.fieldState.error;return Object(x.jsx)(p.a,{inputProps:{inputMode:"decimal"},className:e.root,label:"Phone",type:"tel",fullWidth:!0,autoComplete:"on",value:o,onChange:r,error:!!a,helperText:a?a.message:""})},rules:{pattern:{value:/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,message:"Incorrect phone number"}}})},k=Object(d.a)((function(){return{root:{marginBottom:"38px"}}})),B=function(){var e=k(),t=Object(m.d)();return Object(x.jsx)(m.a,{name:"Subject",control:t.control,defaultValue:"",render:function(t){var n=t.field,r=n.onChange,o=n.value,a=t.fieldState.error;return Object(x.jsx)(p.a,{className:e.root,label:"Subject",type:"text",fullWidth:!0,autoComplete:"on",value:o,onChange:r,error:!!a,helperText:a?a.message:""})}})},N=Object(d.a)((function(){return{root:{marginBottom:"30px"}}})),M=function(){var e=N(),t=Object(m.d)();return Object(x.jsx)(m.a,{name:"Message",control:t.control,defaultValue:"",render:function(t){var n=t.field,r=n.onChange,o=n.value,a=t.fieldState.error;return Object(x.jsx)(p.a,{className:e.root,label:"Message*",multiline:!0,rows:"2",rowsMax:"2",type:"text",fullWidth:!0,autoComplete:"on",value:o,onChange:r,error:!!a,helperText:a?a.message:""})},rules:{required:"Enter your message"}})},I=n(144),z=n(137),T=n(67),W=function(e){return Object(x.jsxs)(T.a,Object(u.a)(Object(u.a)({},e),{},{children:[Object(x.jsx)("rect",{width:"31",height:"31",rx:"8",fill:"#2C2F47"}),Object(x.jsx)("path",{opacity:"0.7",d:"M22.5607 10.4296C21.9749 9.85681 21.0254 9.85681 20.4396 10.4296L13.2499 17.4587L10.5604 14.8296C9.97536 14.2569 9.02434 14.2569 8.43932 14.8296C7.85356 15.4024 7.85356 16.3308 8.43932 16.9035L12.1894 20.5703C12.4819 20.857 12.8659 21 13.2499 21C13.634 21 14.018 20.857 14.3105 20.5703L22.5607 12.5035C23.1464 11.9307 23.1464 11.0023 22.5607 10.4296Z"})]}))},E=function(e){return Object(x.jsx)(T.a,Object(u.a)(Object(u.a)({},e),{},{children:Object(x.jsx)("rect",{width:"31",height:"31",rx:"8",fill:"#2C2F47"})}))},P=Object(d.a)((function(){return{root:{width:"100%",display:"flex",alignItems:"center",marginBottom:"30px"},link:{cursor:"pointer",margin:"0 4px",fontWeight:400}}})),F=function(){var e=P(),t=Object(m.d)();return Object(x.jsxs)(j.a,{className:e.root,children:[Object(x.jsx)(m.a,{name:"policy",control:t.control,defaultValue:!1,render:function(e){var t=e.field,n=t.onChange,r=t.value;return Object(x.jsx)(I.a,{icon:Object(x.jsx)(E,{fontSize:"large",viewBox:"0 0 31 31"}),checkedIcon:Object(x.jsx)(W,{fontSize:"large",viewBox:"0 0 31 31"}),checked:r,onChange:function(e){return n(e.target.checked)}})}}),Object(x.jsx)(f.a,{variant:"body2",color:"textSecondary",children:"I accept"}),Object(x.jsx)(z.a,{className:e.link,color:"textSecondary",children:"Terms and Privacy Policy"})]})},L=n(64),q=n.n(L),H=Object(d.a)((function(e){return{header:{marginTop:"30px",marginBottom:"25px"},form:{width:"389px",padding:"41px 45px",marginBottom:"30px",backgroundColor:e.palette.background.default,borderRadius:e.shape.borderRadius,boxShadow:"0px 0px 50px rgba(0, 0, 0, 0.7)",display:"flex",flexDirection:"column",alignItems:"center"},title:{padding:"0 30px",textAlign:"center"},text:{margin:"10px 0"}}})),V=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(m.c)(),c=H();return Object(r.useEffect)((function(){o(!a.watch("policy"))}),[a.watch("policy")]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f.a,{className:c.header,variant:"h1",children:"Hello"}),Object(x.jsx)(m.b,Object(u.a)(Object(u.a)({},a),{},{children:Object(x.jsxs)(j.a,{component:"form",className:c.form,onSubmit:a.handleSubmit((function(e){q.a.post("https://60e02dae6b689e001788c959.mockapi.io/api/request/dpg",e)})),children:[Object(x.jsx)(f.a,{className:c.title,variant:"body1",children:"For business enquiries please use the form below"}),Object(x.jsx)(f.a,{className:c.text,variant:"body2",color:"textSecondary",children:"*Required"}),Object(x.jsx)(g,{}),Object(x.jsx)(v,{}),Object(x.jsx)(C,{}),Object(x.jsx)(w,{}),Object(x.jsx)(B,{}),Object(x.jsx)(M,{}),Object(x.jsx)(F,{}),Object(x.jsx)(b.a,{disabled:n,type:"submit",variant:"contained",color:"primary",children:"Send"})]})}))]})},R=n(65),$=Object(R.a)({breakpoints:{keys:{0:"xs",1:"sm",2:"md",3:"lg",4:"xl"},values:{xs:0,sm:600,md:960,lg:1280,xl:1920}},palette:{primary:{main:"#2C2F47"},secondary:{main:"#ffffff"},error:{main:"#F44336"},background:{default:"#171929"},text:{primary:"#fff",secondary:"#797ea3"}},typography:{h1:{fontSize:"55px",lineHeight:"66px",fontWeight:500,color:"#fff"},body1:{fontSize:"18px",lineHeight:"120%",fontWeight:400,letterSpacing:0},body2:{fontSize:"15px",lineHeight:"120%",fontWeight:300,letterSpacing:0},button:{textTransform:"none",color:"rgba(255, 255, 255, 0.7)",fontSize:"18px",lineHeight:"120%",fontWeight:400}},shadows:["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"],shape:{borderRadius:28},overrides:{MuiButton:{contained:{padding:"11px 40px","&$disabled":{color:"#fff"}}},MuiInputBase:{root:{}},MuiFormHelperText:{root:{marginTop:"0px",lineHeight:"15px"},contained:{marginLeft:"0px",marginRight:"0px"}},MuiFormLabel:{root:{"&$focused":{color:"#fff"}}},MuiSvgIcon:{fontSizeLarge:{fontSize:"31px"}},MuiCssBaseline:{width:"100%",height:"100%"},MuiInput:{underline:{borderBottom:"1px solid #797ea3 !important","&$focused":{borderBottom:"1px solid #fff !important"}}}}}),A=n(139),Z=n.p+"static/media/bg.af2c2a69.webp",D=Object(d.a)((function(){return{root:{backgroundImage:"url(".concat(Z,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",width:"100%",height:"auto"},container:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}})),J=function(e){var t=e.children,n=D();return Object(x.jsx)(j.a,{className:n.root,children:Object(x.jsx)(A.a,{className:n.container,children:t})})};n(102);c.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsxs)(l.a,{theme:$,children:[Object(x.jsx)(i.a,{}),Object(x.jsx)(J,{children:Object(x.jsx)(V,{})})]})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.0bcdcde4.chunk.js.map