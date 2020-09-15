(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,i,s=n(0),r=n.n(s),o=n(7),c=n.n(o),l=(n(13),n(14),n(15),n(2)),u=n(3),d=n(1),p=n(5),h=n(4),m=(n(16),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{id:"clock-face"}," ",r.a.createElement("div",{id:"display-container"}," ",r.a.createElement("div",{id:"break-label"},"Break"),r.a.createElement("div",{id:"session-label"},"Session"),r.a.createElement("div",{id:"break-length"},this.props.break),r.a.createElement("div",{id:"session-length"},this.props.session),r.a.createElement("div",{id:"time-left",style:{color:this.props.color}},this.props.mins,":",this.props.secs),r.a.createElement("div",{id:"timer-label"},this.props.timeLabel)))}}]),n}(r.a.Component)),b=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.label+" length increase",t=this.props.label+" length decrease";return r.a.createElement("section",{id:this.props.id,className:"section-set"},r.a.createElement("button",{id:this.props.increment,type:"button",title:e,tabIndex:"0",onClick:this.props.increase},r.a.createElement("i",{className:"fa fa-chevron-up","aria-hidden":"true"})),r.a.createElement("div",null,this.props.label),r.a.createElement("button",{id:this.props.decrement,type:"button",title:t,tabIndex:"0",onClick:this.props.decrease},r.a.createElement("i",{className:"fa fa-chevron-down","aria-hidden":"true"})))}}]),n}(r.a.Component),f=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("article",{className:this.props.control},r.a.createElement("button",{id:this.props.id,type:"button",tabIndex:"0",onClick:this.props.callBack},r.a.createElement("i",{className:this.props.icon,"aria-hidden":"true"})),r.a.createElement("div",null,this.props.display))}}]),n}(r.a.Component),v=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e={id:"start_stop",icon:this.props.icon,display:"Play/Pause",control:"left-control",callBack:this.props.update},t={id:"reset",icon:"fa fa-refresh",display:"Reset",control:"right-control",callBack:this.props.initialize};return r.a.createElement("section",{id:"control"},r.a.createElement(f,e),r.a.createElement(f,t))}}]),n}(r.a.Component),k=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={break:1,session:1,min:"00",sec:"10",action:"play",timerLabel:"Session",color:"#000000"},a.breakIncrease=a.breakIncrease.bind(Object(d.a)(a)),a.sessionIncrease=a.sessionIncrease.bind(Object(d.a)(a)),a.breakDecrease=a.breakDecrease.bind(Object(d.a)(a)),a.sessionDecrease=a.sessionDecrease.bind(Object(d.a)(a)),a.initialize=a.initialize.bind(Object(d.a)(a)),a.calculateEndTime=a.calculateEndTime.bind(Object(d.a)(a)),a.updateTimer=a.updateTimer.bind(Object(d.a)(a)),a.stopTimer=a.stopTimer.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"stopTimer",value:function(){clearInterval(i),this.setState({action:"play"})}},{key:"calculateEndTime",value:function(){var e=new Date(0),t=parseInt(this.state.min),n=parseInt(this.state.sec);return e.setMinutes(e.getMinutes()+t),e.setSeconds(e.getSeconds()+n),e}},{key:"updateTimer",value:function(){this.setState({action:"pause"}),document.getElementById("beep").load();var e=this.calculateEndTime()-new Date(0),t=this;i=setInterval((function(){e-=1e3;var n=Math.floor(e%36e5/6e4),a=Math.floor(e%6e4/1e3);n<10&&(n="0"+n),a<10&&(a="0"+a),t.setState((function(e){return{min:n,sec:a}})),"00"===t.state.min?t.setState((function(){return{color:"#ff0000"}})):t.setState((function(){return{color:"#000000"}})),"00"===t.state.min&&"00"===t.state.sec&&(t.stopTimer(),"Session"===t.state.timerLabel?t.setState((function(){return{timerLabel:"Break",min:t.state.break}})):t.setState((function(){return{timerLabel:"Session",min:t.state.session}})),t.updateTimer())}),1e3)}},{key:"initialize",value:function(){this.stopTimer(),this.setState({break:5,session:25,min:"25",sec:"00",action:"play"})}},{key:"breakIncrease",value:function(){(a=this.state.break)<60&&this.setState({break:a+1})}},{key:"breakDecrease",value:function(){(a=this.state.break)>0&&this.setState({break:a-1})}},{key:"sessionIncrease",value:function(){(a=this.state.session)<60&&this.setState({session:a+1})}},{key:"sessionDecrease",value:function(){(a=this.state.session)>0&&this.setState({session:a-1})}},{key:"render",value:function(){var e,t;"play"===this.state.action?(e="fa fa-play-circle",t=this.updateTimer):"pause"===this.state.action&&(e="fa fa-pause-circle",t=this.stopTimer);var n={id:"left",increment:"break-increment",decrement:"break-decrement",label:"Set Break",increase:this.breakIncrease,decrease:this.breakDecrease},a={id:"right",increment:"session-increment",decrement:"session-decrement",label:"Set Session",increase:this.sessionIncrease,decrease:this.sessionDecrease},i={break:this.state.break,session:this.state.session,mins:this.state.min,secs:this.state.sec,timeLabel:this.state.timerLabel,color:this.state.color},s={initialize:this.initialize,update:t,icon:e};return r.a.createElement("div",{id:"clock"},r.a.createElement(b,n),r.a.createElement(m,i),r.a.createElement(b,a),r.a.createElement(v,s),r.a.createElement("audio",{id:"beep",src:"/audio/Alarm-clock-sound-short.mp3"}," "),r.a.createElement("div",{id:"logo"},r.a.createElement("a",{href:"https://nhope123.github.io/pomodoro/",target:"_blank",rel:"noopener noreferrer",title:" Github repository"},r.a.createElement("i",{className:"fa fa-rebel","aria-hidden":"true"}))))}}]),n}(r.a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pomodoro",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pomodoro","/service-worker.js");y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.e0dff627.chunk.js.map