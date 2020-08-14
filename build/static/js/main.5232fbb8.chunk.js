(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),i=t.n(r),c=t(20),l=(t(92),t(10)),m=t(152),s=t(80),d=Object(s.a)({palette:{common:{yellow:"".concat("#f7da1e"),black:"".concat("#000000")},primary:{main:"".concat("#f7da1e")},secondary:{main:"".concat("#000000")},background:{default:"".concat("#f7da1e"),paper:"#000"}},typography:{tab:{fontFamily:"Raleway",textTransform:"none",fontWeight:700,fontSize:"1rem"},estimate:{fontFamily:"Pacifico",fontSize:"1rem",textTransform:"none",color:"white"},h2:{fontFamily:"Raleway",fontWeight:700,fontSize:"3.5em",color:"#000000",lineHeight:"1.5em"},h3:{fontFamily:"Pacifico",fontSize:"2.5em",color:"#000000"},h4:{fontFamily:"Raleway",fontSize:"1.75rem",color:"#f7da1e",fontWeight:700},subtitle1:{fontSize:"1.25rem",fontWeight:300,color:"#868686"},subtitle2:{color:"white",fontSize:"1.25rem",fontWeight:300},learnButton:{borderColor:"#f7da1e",color:"#f7da1e",borderWidth:2,textTransform:"none",borderRadius:50,fontFamily:"Roboto",fontWeight:"bold"}},overrides:{MuiListItemText:{root:{fontSize:"2em"}}}}),p=t(140),u=(t(95),t(26)),f=t(66),b=t.n(f),g=t(142),h=t(67),y=t.n(h),E=t(138),k=t(154),v=t(17),j=t(65),S=t.n(j),w=t(53),x=t(23),O=Object(E.a)((function(e){var a;return{menuContainer:{backgroundColor:e.palette.secondary.light,height:"100vH"},manuOptions:(a={color:e.palette.primary.main,fontWeight:700,transition:"color 1s","&:hover":{color:e.palette.secondary.light}},Object(v.a)(a,e.breakpoints.down("sm"),{marginTop:"10px",fontSize:"4em"}),Object(v.a)(a,e.breakpoints.down("xs"),{marginTop:"10px",fontSize:"2em"}),a),menuBtn:{transition:"background-color 1s","&:hover":{backgroundColor:e.palette.primary.light}}}}));function N(e){var a=O();return Object(n.useEffect)((function(){x.a.timeline().fromTo("#modal",{xPercent:100,yPercent:-100,opacity:0,scale:0},{xPercent:0,yPercent:0,duration:3,opacity:1,scale:1,ease:"elastic"},0)}),[]),o.a.createElement(p.a,{id:"modal",container:!0,direction:"column",className:a.menuContainer},o.a.createElement(p.a,{item:!0,container:!0,direction:"row",justify:"flex-end"},o.a.createElement(g.a,{disableRipple:!0,onClick:function(){return e.setModal(!1)}},o.a.createElement(S.a,{color:"primary"}))),o.a.createElement(p.a,{item:!0,container:!0,direction:"column"},[{name:"Intro",to:"/"},{name:"Portfolio",to:"/mywork"},{name:"Skill Stack",to:"/skills"},{name:"Contact",to:"/contact"}].map((function(t){return o.a.createElement(g.a,{key:t.name,component:c.b,to:t.to,className:a.menuBtn,onClick:function(){return e.setModal(!1)}},o.a.createElement(w.a,{variant:"h1",className:a.manuOptions},t.name))}))))}var C=Object(E.a)((function(e){return{homeContainer:{}}}));function T(e){var a=C(),t=Object(n.useState)(!1),r=Object(u.a)(t,2),i=r[0],l=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{container:!0,direction:"row",className:a.homeContainer,justify:"space-between"},o.a.createElement(g.a,{component:c.b,to:"/"},o.a.createElement(b.a,{color:"secondary"})),o.a.createElement(g.a,{onClick:function(){return l(!0)}},o.a.createElement(y.a,{color:"secondary"}))),o.a.createElement(k.a,{open:i,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},o.a.createElement("div",null,o.a.createElement(N,{setModal:l}))))}var P=Object(E.a)((function(e){var a,t;return{homeContainer:{},intro:(a={},Object(v.a)(a,e.breakpoints.down("md"),{fontSize:"4em"}),Object(v.a)(a,e.breakpoints.down("sm"),{paddingTop:"1em",fontSize:"3em"}),a),introSub:{fontSize:".5em"},stackBtn:{marginTop:"2em",fontFamily:"roboto",overflow:"hidden",backgroundColor:"#000000",color:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.secondary.light,color:e.palette.primary.light}},introskill:(t={},Object(v.a)(t,e.breakpoints.down("md"),{fontSize:"2.5em"}),Object(v.a)(t,e.breakpoints.down("sm"),{fontSize:"1.5em"}),t)}}));function F(e){var a=P();return Object(n.useEffect)((function(){x.a.timeline().fromTo("#name",{x:-1e3,opacity:0},{x:0,duration:2,opacity:1,ease:"elastic"},0).fromTo("#react",{x:1e3,opacity:0},{x:0,duration:1.5,opacity:1,ease:"elastic"},.5).fromTo("#javascript",{x:"100%",opacity:0},{x:0,duration:1.5,opacity:1,ease:"elastic"},.5).fromTo("#python",{x:"-100%",opacity:0},{x:0,duration:1.5,opacity:1,ease:"elastic"},.5).fromTo("#stackBtn",{y:500,opacity:0},{y:0,duration:2,opacity:1,ease:"elastic"},2)}),[]),o.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:a.homeContainer},o.a.createElement(w.a,{variant:"h1",align:"center",id:"name",className:a.intro},"Hi, I am Gagan",o.a.createElement("br",null),"I am Full Stack Developer",o.a.createElement("br",null),o.a.createElement("span",{className:a.introSub},"I can develop Web applications with")),[{name:"ReactJs",variant:"h2",animeEl:"reactTypo",id:"react"},{name:"Python",variant:"h2",id:"python"},{name:"Vanilla JavaScript",variant:"h2",id:"javascript"}].map((function(e){return o.a.createElement(w.a,{key:e.name,id:e.id,variant:e.variant,className:a.introskill},e.name)})),o.a.createElement(g.a,{variant:"contained",className:a.stackBtn,id:"stackBtn",component:c.b,to:"/skills"},"My Full Skill Stack"))}var z=t(143),I=t(144),M=t(145),B=Object(E.a)((function(e){return{skillContainer:{paddingTop:"3em"},skill:{},listContainer:{},ul:{paddingTop:"2em"},progress:{color:e.palette.secondary.light}}}));function W(e){var a=B();return Object(n.useEffect)((function(){x.a.timeline().fromTo("#skills",{x:-1e3,opacity:0},{x:0,duration:2,opacity:1,ease:"elastic"},0)}),[]),o.a.createElement(p.a,{container:!0,className:a.skillContainer,direction:"column",justify:"flex-start",alignItems:"center"},o.a.createElement(p.a,{container:!0,id:"skills",justify:"center"},o.a.createElement(w.a,{component:"header",variant:"h3",style:{lineHeight:"1.5em"}},"I always learn what's latest in the software industry, these are some of the top picks")),o.a.createElement(p.a,{item:!0},o.a.createElement(z.a,{className:a.listContainer,subheader:o.a.createElement("li",null)},[{name:"Front-End",skills:["ReactJS","Vanila JavaScript","Python","jQuery","Bootstrap","Material-UI","Bodymovin"]},{name:"Back-End",skills:["NodeJS","ExpressJS","Python","MongoDB","Mongoose","Lodash","Winston","JWT"]},{name:"Design Software",skills:["Cinema4D","Photoshop","After Effects","Adobe XD"]}].map((function(e){return o.a.createElement("li",{key:e.name,id:"section-".concat(e.name),className:a.listSection},o.a.createElement("ul",{className:a.ul},o.a.createElement(w.a,{component:"h2",variant:"h3"},e.name),e.skills.map((function(t){return o.a.createElement(I.a,{key:"item-".concat(e,"-").concat(t),className:a.skill},o.a.createElement(M.a,{primary:t}))}))))})))))}var J=t(68),R=t.n(J),A=t(69),_=t.n(A),U=t(70),H=t.n(U),V=t(71),q=t.n(V),D=t(72),L=t.n(D),G=t(73),X=t.n(G),Q=[{id:"0837a8f79f4657150c482f9400daea0b",name:"Twitter alike Social Media App",url:"https://arcane-temple-40357.herokuapp.com/homepage",imgUrl:"".concat(R.a),description:"Full Stack Social Media App for end user. Intergerated live data feed from third party NewsAPIs."},{id:"73000dccc18fd56c9941ee432a96708d",name:"Movie Rental App",url:"https://intense-reef-84912.herokuapp.com/movies",imgUrl:"".concat(L.a),description:"Full-Stack Web application for admin to edit movies details and also for user to find, rent the movie with their login."},{id:"33c6b55a4abad5eeaa6b29a3aeee8213",name:"Form Validation",url:"https://gagandeepraju.github.io/formValidation_project3/",imgUrl:"".concat(q.a),description:"Vanilla JavaScript Form Validation"},{id:"528fcca2b4c1bf6d6190f848837c8d09",name:"Phrase Hunter Game",url:"https://gagandeepraju.github.io/OOP_game_project4/",imgUrl:"".concat(_.a),description:"OOP game guess game of random phrase on screen with keybaord interface"},{id:"b2452085516c81bab68c9f244700d8c1",name:"Public Api Integeration",url:"https://gagandeepraju.github.io/public-api/",imgUrl:"".concat(H.a),description:"Third party API integeration with the web application"},{id:"0837a8f79f4657150c482f9400daea0b-personal",name:"Personal Portfolio",url:"https://powerful-beach-08572.herokuapp.com/",imgUrl:"".concat(X.a),description:"Persoanl Portfolio with animation work"}],Y=t(146),Z=t(147),K=t(148),$=t(149),ee=t(150),ae=Object(E.a)((function(e){return{card:{padding:"2em"},media:{color:e.palette.primary.main}}}));function te(){var e=ae();return Object(n.useEffect)((function(){x.a.timeline().fromTo("#react",{xPercent:"+50",duration:2,opacity:0,ease:"elastic"},{xPercent:"0",duration:2,opacity:1,ease:"elastic"})}),[]),o.a.createElement(p.a,{container:!0,direction:"row",className:e.card,justify:"flex-start",alignItems:"flex-end",spacing:3},Q.map((function(a){return o.a.createElement(p.a,{item:!0,key:a.id,xs:12,lg:4,md:6,id:"react"},o.a.createElement(Y.a,{className:e.card},o.a.createElement(Z.a,null,o.a.createElement(K.a,{component:"img",className:e.media,image:a.imgUrl,title:"Contemplative Reptile"}),o.a.createElement($.a,null,o.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h2",color:"primary"},a.name),o.a.createElement(w.a,{variant:"body2",color:"primary",component:"p"},a.description))),o.a.createElement(ee.a,null,o.a.createElement(g.a,{variant:"contained",size:"small",color:"primary",fullWidth:!0,component:"a",target:"_blank",href:a.url},"Learn More"))))})))}var ne=t(74),oe=t(153),re=t(151),ie=t(77),ce=t.n(ie),le=t(78),me=t.n(le),se=t(79),de=t.n(se),pe=t(76),ue=t.n(pe),fe=t(37),be=t.n(fe),ge=t(75),he=t.n(ge),ye=t(104),Ee=Object(E.a)((function(e){return{input:{marginBottom:"2em"},form:{width:"80vW"},email:{marginLeft:"3.5em"},btn:{backgroundColor:e.palette.secondary.dark,color:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.secondary.light,color:e.palette.primary.light}},message:{width:"20em",padding:"1em",color:e.palette.primary.dark,textAlign:"center",fontSize:"2em"}}}));function ke(e){var a=Ee(),t=Object(n.useState)(!1),r=Object(u.a)(t,2),i=r[0],c=r[1],l=Object(n.useState)({}),m=Object(u.a)(l,2),s=m[0],d=m[1],f=Object(n.useState)({}),b=Object(u.a)(f,2),h=b[0],y=b[1],E=Object(n.useState)(!1),k=Object(u.a)(E,2),j=k[0],S=k[1],x=Object(n.useState)(!0),O=Object(u.a)(x,2),N=O[0],C=O[1],T={Email:be.a.string().required().email().label("Email"),Message:be.a.string().required().label("Message").min(50),Name:be.a.string().min(5).label("Name"),Subject:be.a.string().label("Subject").required().min(30)},P=function(e){var a,t=e.currentTarget,n=h,o=function(e){var a=e.id,t=e.value,n=Object(v.a)({},a,t),o=Object(v.a)({},a,T[a]),r=be.a.validate(n,o).error;return r?r.details[0].message:null}(t),r=document.querySelectorAll("input"),i=document.querySelector("textarea"),l=Object(ne.a)(r);try{for(l.s();!(a=l.n()).done;){""!==a.value.value&&i.value.length>=50?C(!1):C(!0)}}catch(p){l.e(p)}finally{l.f()}o?(n[t.id]=o,c(!0)):(delete n[t.id],c(!1));var m=s;m[t.id]=t.value,d(m),y(n)};return Object(n.useEffect)((function(){}),[]),o.a.createElement(p.a,{container:!0,direction:"column",spacing:4,justify:"center",alignItems:"center"},o.a.createElement(p.a,{item:!0},o.a.createElement(p.a,{container:!0,direction:"row"},o.a.createElement(p.a,{item:!0},o.a.createElement(re.a,{color:"secondary",component:"a",target:"_blank",href:"https://github.com/GagandeepRaju"},o.a.createElement(ue.a,null)),o.a.createElement(re.a,{color:"secondary",component:"a",target:"_blank",href:"https://www.linkedin.com/in/gagandeepr/"},o.a.createElement(ce.a,null)),o.a.createElement(re.a,{color:"secondary",component:"a",target:"_blank",href:"https://twitter.com/raju_gagandeep"},o.a.createElement(me.a,null))))),o.a.createElement(p.a,{item:!0},o.a.createElement(de.a,{className:a.email}),o.a.createElement(w.a,null,"raju.gagandeep@gmail.com")),o.a.createElement(p.a,{item:!0,md:12,xs:12},o.a.createElement("form",{className:a.form,id:"contactForm"},[{label:"Name"},{label:"Email"},{label:"Subject"},{label:"Message",multiline:!0}].map((function(e){return o.a.createElement(oe.a,{color:"secondary",variant:"filled",fullWidth:!0,error:i,id:e.label,key:e.label,label:e.label,multiline:!!e.multiline,rows:e.multiline?4:1,helperText:h[e.label],className:a.input,onChange:P})})))),o.a.createElement(p.a,{item:!0},o.a.createElement(g.a,{disabled:N,variant:"contained",onClick:function(){he.a.sendForm("gmail","template_MJCF63lb","#contactForm","user_NXjLG4bZBxrFHhyB1TJXI").then((function(e){S(!0)}),(function(e){}))},className:a.btn},"Submit")),j&&o.a.createElement(p.a,{item:!0},o.a.createElement(ye.a,{elevation:3,className:a.message},"Your Message has been Sent")))}var ve=function(){return o.a.createElement(m.a,{theme:d},o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement("main",{className:"container"},o.a.createElement(T,null),o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/home",component:F}),o.a.createElement(l.b,{path:"/nav",component:N}),o.a.createElement(l.b,{path:"/skills",component:W}),o.a.createElement(l.b,{path:"/mywork",component:te}),o.a.createElement(l.b,{path:"/contact",component:ke}),o.a.createElement(l.b,{path:"/not-found",component:function(){return o.a.createElement("div",null,"not found")}}),o.a.createElement(l.a,{from:"/",exact:!0,to:"/home"}),o.a.createElement(l.a,{to:"/not-found"})))))};i.a.render(o.a.createElement(c.a,null,o.a.createElement(ve,null)),document.getElementById("root"))},68:function(e,a,t){e.exports=t.p+"static/media/twitter.09cdd41d.png"},69:function(e,a,t){e.exports=t.p+"static/media/game.022b0010.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/api.71829368.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/form.fd332887.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/movie.5aae3833.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/personal.f38aab71.jpg"},87:function(e,a,t){e.exports=t(102)},92:function(e,a,t){},95:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.5232fbb8.chunk.js.map