(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{CXux:function(e,r,s){"use strict";s.r(r),s.d(r,"ion_refresher",(function(){return h})),s.d(r,"ion_refresher_content",(function(){return o}));var t=s("c1op"),i=s("AfW+"),n=s("YtD4");const h=class{constructor(e){Object(t.l)(this,e),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=Object(t.e)(this,"ionRefresh",7),this.ionPull=Object(t.e)(this,"ionPull",7),this.ionStart=Object(t.e)(this,"ionStart",7)}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async connectedCallback(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const e=this.el.closest("ion-content");e?(this.scrollEl=await e.getScrollElement(),this.gesture=(await Promise.resolve().then(s.bind(null,"mUkt"))).createGesture({el:e,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:()=>this.onEnd()}),this.disabledChanged()):console.error("<ion-refresher> must be used inside an <ion-content>")}disconnectedCallback(){this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.close(32,"120ms")}async cancel(){this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const r=e.event;if(r.touches&&r.touches.length>1)return;if(0!=(56&this.state))return;const s=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,t=e.deltaY*s;if(t<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(t,"0ms",!0,""),0===t)return void(this.progress=0);const i=this.pullMin;this.progress=t/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),t<i?this.state=2:t>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,r){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}setCss(e,r,s,i){this.appliedStyles=e>0,Object(t.m)(()=>{if(this.scrollEl){const t=this.scrollEl.style;t.transform=e>0?`translateY(${e}px) translateZ(0px)`:"translateZ(0px)",t.transitionDuration=r,t.transitionDelay=i,t.overflow=s?"hidden":""}})}render(){const e=Object(t.d)(this);return Object(t.i)(t.a,{slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return Object(t.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}static get style(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"}},o=class{constructor(e){Object(t.l)(this,e)}componentWillLoad(){if(void 0===this.pullingIcon&&(this.pullingIcon=i.b.get("refreshingIcon","arrow-down")),void 0===this.refreshingSpinner){const e=Object(t.d)(this);this.refreshingSpinner=i.b.get("refreshingSpinner",i.b.get("spinner","ios"===e?"lines":"crescent"))}}render(){return Object(t.i)(t.a,{class:Object(t.d)(this)},Object(t.i)("div",{class:"refresher-pulling"},this.pullingIcon&&Object(t.i)("div",{class:"refresher-pulling-icon"},Object(t.i)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(t.i)("div",{class:"refresher-pulling-text",innerHTML:Object(n.a)(this.pullingText)})),Object(t.i)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(t.i)("div",{class:"refresher-refreshing-icon"},Object(t.i)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(t.i)("div",{class:"refresher-refreshing-text",innerHTML:Object(n.a)(this.refreshingText)})))}}}}]);