(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{"27ab":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"text-h5 q-my-md"},[e._v("\n    Current Session\n  ")]),s("q-form",{staticClass:"row q-col-gutter-md",on:{submit:e.assignSession,reset:e.resetForm}},[s("session-field",{attrs:{classes:"col-6",required:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),s("div",{staticClass:"col-12"},[s("q-btn",{attrs:{label:"Update",type:"submit",color:"primary",unelevated:"",loading:e.editLoading}}),s("q-btn",{attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1)],1)},n=[],i=s("567a"),o=s("88f5"),r={name:"SessionAssigner",components:{SessionField:i["a"]},mixins:[o["a"]],data(){return{date:null}},methods:{assignSession(){this.callEditApi("/currentSession/update",{session:new Date(this.date).toString()},"Session")},resetForm(){this.date=null}}},l=r,d=s("2877"),c=s("9989"),u=s("0378"),m=s("9c40"),p=s("eebe"),b=s.n(p),g=Object(d["a"])(l,a,n,!1,null,null,null);t["default"]=g.exports;b()(g,"components",{QPage:c["a"],QForm:u["a"],QBtn:m["a"]})}}]);