(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),c=(a(13),a(3)),s=a(4),m=a(6),l=a(5),u=a(7),d=function(e){var t=e.ms;return r.a.createElement("div",null,r.a.createElement("div",{className:"digits"},function(e){var t=Math.floor(e/36e5),a=e%36e5,n=Math.floor(a/6e4),r=a%6e4,i=Math.floor(r/1e3);return String(t).padStart(2,"0")+":"+String(n).padStart(2,"0")+":"+String(i).padStart(2,"0")}(t)),r.a.createElement("div",{className:"time_text"},r.a.createElement("div",{className:"time-text-item"},"hour"),r.a.createElement("div",{className:"time-text-item"},"minute"),r.a.createElement("div",{className:"time-text-item"},"second")))},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={timeMs:0},setInterval((function(){a.setState({timeMs:a.state.timeMs+1e3})}),1e3),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d,{ms:this.state.timeMs})}}]),t}(n.Component);a(14);var h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c64b709d.chunk.js.map