(this["webpackJsonpthingspeak-utility6"]=this["webpackJsonpthingspeak-utility6"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),l=a.n(r),c=(a(21),a(11)),i=a(12),d=a(13),j=a(16),h=a(15),o=(a(22),a(29)),b=a(30),x=a(14),u=a(1),O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={channel:"",readAPI:"",numPoints:"",fieldID:"",url:"",downloadURL:"",startDate:"",endDate:"",yaxismax:""},e.buildURL=function(){var t=e.state.channel,a=e.state.readAPI,n=e.state.numPoints,s=e.state.fieldID,r=e.state.startDate,l=e.state.endDate,c=e.state.yaxismax,i="https://thingspeak.com/channels/"+t+"/charts/"+s+"?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results="+n+"&type=line&api_key="+a,d="https://api.thingspeak.com/channels/"+t+"/feeds.csv?api_key="+a+"&results="+n;r&&l&&(i=i+"&start="+r+"%2000:00:00&end="+l+"%2000:00:00&dynamic=false",d=d+"&start="+r+"%2000:00:00&end="+l+"%2000:00:00"),c&&(i=i+"&yaxismax="+c),console.log("The chart URL is:"+i),e.setState({url:i}),console.log("the download URL is: "+d),e.setState({downloadURL:d})},e.handleInputChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e}return Object(d.a)(a,[{key:"render",value:function(){var e={display:"block",paddingTop:0,textAlign:"left",pointerEvents:"auto"};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o.a,{children:Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)(o.a.Group,{controlId:"channel",style:e,children:[Object(u.jsx)(o.a.Label,{children:"Channel "}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a.Control,{type:"text",defaultValue:this.state.channel,name:"channel",required:!0,onChange:this.handleInputChange})]})}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a.Group,{controlId:"readAPI",style:e,children:[Object(u.jsx)(o.a.Label,{children:"readAPI "}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a.Control,{type:"text",defaultValue:this.state.readAPI,name:"readAPI",required:!0,onChange:this.handleInputChange})]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)(o.a.Group,{controlId:"numPoints",style:e,children:[Object(u.jsx)(o.a.Label,{children:"# of points to chart "}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a.Control,{type:"text",defaultValue:this.state.numPoints,name:"numPoints",required:!0,onChange:this.handleInputChange})]})}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a.Group,{controlId:"fieldID",style:e,children:[Object(u.jsx)(o.a.Label,{children:"Field ID "}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a.Control,{type:"text",defaultValue:this.state.fieldID,name:"fieldID",required:!0,onChange:this.handleInputChange})]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)(o.a.Group,{controlId:"startDate",style:e,children:[Object(u.jsx)(o.a.Label,{children:"Start date (YYYY-MM-DD) "}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a.Control,{type:"text",defaultValue:this.state.startDate,name:"startDate",required:!0,onChange:this.handleInputChange})]})}),Object(u.jsx)("td",{children:Object(u.jsxs)(o.a.Group,{controlId:"endDate",style:e,children:[Object(u.jsx)(o.a.Label,{children:"End date (YYYY-MM-DD) "}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a.Control,{type:"text",defaultValue:this.state.endDate,name:"endDate",required:!0,onChange:this.handleInputChange})]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsxs)(o.a.Group,{controlId:"yaxismax",style:e,children:[Object(u.jsx)(o.a.Label,{children:"Y axis max "}),Object(u.jsx)("br",{}),Object(u.jsx)(o.a.Control,{type:"text",defaultValue:this.state.yaxismax,name:"yaxismax",required:!0,onChange:this.handleInputChange})]})}),Object(u.jsx)("td",{})]})]})}),Object(u.jsxs)("div",{align:"left",children:[Object(u.jsx)("br",{}),'"Y axis max" sets the magnitude of the y axis.',Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Field ID numbers:",Object(u.jsxs)("ol",{align:"left",children:[Object(u.jsx)("li",{children:"mass reading (g)"}),Object(u.jsx)("li",{children:"mass reading with temperature noise minimized (g)"}),Object(u.jsx)("li",{children:"temperature (deg C)"}),Object(u.jsx)("li",{children:"battery voltage)"})]})]}),Object(u.jsx)(b.a,{variant:"primary",onClick:this.buildURL,children:"Chart"}),Object(u.jsx)(x.a,{url:this.state.url,width:"450px",height:"260px",id:"chart"}),"download URL:",Object(u.jsx)("a",{href:this.state.downloadURL,children:this.state.downloadURL})]})}}]),a}(n.Component),p=O,g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),r(e),l(e)}))};l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),g()}},[[27,1,2]]]);
//# sourceMappingURL=main.6e0b1a3a.chunk.js.map