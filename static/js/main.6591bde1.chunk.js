(this.webpackJsonpprltaskd2=this.webpackJsonpprltaskd2||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"history",(function(){return D}));var n=a(0),s=a.n(n),o=a(46),r=a.n(o),i=a(14),c=a(15),l=a(18),d=a(17),u=a(1),h=a(24),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),p=(a(86),a(87),a(43)),v=a(88),m=a(89);a(103);var y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(i.a)(this,a),console.log("LabJsWrapperconstructor"),n=t.call(this,e);var s=m.parse(n.props.location.search,{ignoreQueryPrefix:!0});return n.surveyUrl=s.survey_url,n.state={encryptedMetadata:s.id,sendingData:!1,link:void 0},v.isUndefined(n.state.encryptedMetadata)||n.addScript("/PRLtaskd2/external/lab.js",(function(){n.addScript("/PRLtaskd2/script.js")})),n}return Object(c.a)(a,[{key:"packageDataForExport",value:function(e){var t={};return console.log("packageDataForExport"),console.log(e),t.encrypted_metadata=this.state.encryptedMetadata,t.taskName=p.taskName,t.taskVersion=p.taskVersion,t.data=this.processLabJsData(e),JSON.stringify(t)}},{key:"processLabJsData",value:function(e){return e}},{key:"componentDidMount",value:function(){console.log("This is the latest labjswrapper.js");var e=this,t=sessionStorage.getItem("taskData");if(t){console.log("taskData found in sessionStorage");var a=JSON.parse(t);if(f)return console.log("in islocalhost"),console.log(e.surveyUrl),void(e.surveyUrl&&(console.log("in that.surveyUrl"),e.setState({link:e.surveyUrl})));e.setState({sendingData:!0}),console.log("Im tryna call aws cuz i have session storage stuff"),e.setState({sendingData:!0}),e.saveTaskDataWithRetry(a,11)}window.addEventListener("message",(function(t){if("labjs.data"===t.data.type){var a=JSON.parse(t.data.json);if(f)return void(e.surveyUrl&&(console.log("in that.surveyUrl"),e.setState({link:e.surveyUrl})));e.setState({sendingData:!0}),e.saveTaskDataWithRetry(a,11)}}))}},{key:"saveTaskDataWithRetry",value:function(e,t){var a=this;console.log("new saveTaskData called"),Object(h.b)(a.state.encryptedMetadata,a.packageDataForExport(e)).then((function(){a.handleDataSaveSuccess()})).catch((function(n){t>1?setTimeout((function(){console.log("Retrying to save task data..."),a.saveTaskDataWithRetry(e,t-1)}),2e3):console.error("Failed to save task data after retries:",n)}))}},{key:"handleDataSaveSuccess",value:function(){var e=this;this.surveyUrl?this.setState({link:this.surveyUrl}):Object(h.a)(this.state.encryptedMetadata).then((function(t){return e.setState({link:t})}))}},{key:"addScript",value:function(e,t){var a=document.createElement("script");a.src=e,a.type="module",a.onreadystatechange=t,a.onload=t,document.head.appendChild(a)}},{key:"render",value:function(){return v.isUndefined(this.state.encryptedMetadata)?s.a.createElement("div",null,s.a.createElement("h2",null,"Something went wrong. Please try again.")):(v.isUndefined(this.state.link)||window.location.assign(this.state.link),s.a.createElement("div",null,s.a.createElement("div",{className:"container fullscreen","data-labjs-section":"main",style:{visibility:this.state.sendingData?"hidden":"visible"}},s.a.createElement("main",{className:"content-vertical-center content-horizontal-center"})),s.a.createElement("div",{className:"center",style:{visibility:this.state.sendingData?"visible":"hidden"}},s.a.createElement("h2",null,"Saving data... do not exit window. Check internet and Refresh if stuck here for over 30 seconds."),s.a.createElement("p",null,"If you lost internet connection during the game, then the game will restart and you will need to play again."))))}}]),a}(n.Component),g=function(){return s.a.createElement(u.c,null,s.a.createElement(u.a,{path:"/",exact:!0,component:y}))},k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(g,null))}}]),a}(n.Component),b=a(23),w=a(3),D=Object(w.a)();console.log("render react"),r.a.render(s.a.createElement(b.a,{history:D,basename:"/PRLtaskd2"},s.a.createElement(k,null)),document.getElementById("root"))},24:function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(55),s=a(83),o=a(43);function r(t,a){return new Promise((function(r,i){var c=s.stringify({encrypted_metadata:t,data:a}),l={hostname:o.awsLambda.saveTaskData.host,port:443,path:o.awsLambda.saveTaskData.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":e.byteLength(c)}},d=n.request(l,(function(e){e.setEncoding("utf8"),e.on("data",(function(){})),e.on("end",r)}));d.on("error",(function(e){o.debug&&(console.log("ERROR:"),console.log(e)),i(e)})),d.write(c),d.end()}))}function i(t){return new Promise((function(a,r){var i=s.stringify({encrypted_metadata:t}),c={hostname:o.awsLambda.fetchLink.host,port:443,path:o.awsLambda.fetchLink.path,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":e.byteLength(i)}},l=n.request(c,(function(e){e.setEncoding("utf8");var t="";e.on("data",(function(e){t+=e})),e.on("end",(function(){return a(t)}))}));l.on("error",(function(e){o.debug&&(console.log("ERROR:"),console.log(e)),r(e)})),l.write(i),l.end()}))}}).call(this,a(7).Buffer)},43:function(e){e.exports=JSON.parse('{"taskVersion":"1.0.0","taskName":"prltaskd2","debug":false,"awsLambda":{"saveTaskData":{"host":"de8cnjde61.execute-api.us-east-2.amazonaws.com","path":"/default/saveTaskData"},"fetchLink":{"host":"3pnzb6n9vf.execute-api.us-east-2.amazonaws.com","path":"/default/fetchLink"}}}')},48:function(e,t,a){e.exports=a(109)},58:function(e,t){},60:function(e,t){},81:function(e,t){},86:function(e,t,a){},87:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.6591bde1.chunk.js.map