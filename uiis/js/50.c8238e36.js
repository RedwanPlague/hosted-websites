(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{e25b:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"text-h5 q-my-md"},[e._v("\n    Permit Clearance for Thesis Submission\n  ")]),s("q-form",{staticClass:"row q-col-gutter-md",on:{submit:e.permit,reset:e.resetForm}},[s("q-select",{staticClass:"col-12",attrs:{label:"Student ID(s)",multiple:"","use-chips":"","use-input":"",clearable:"","new-value-mode":"add-unique",outlined:"",rules:[function(){return!!e.ids&&e.ids.length>0||"Please Enter at least one Student ID"}]},model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}}),s("div",{staticClass:"col-12"},[s("q-btn",{attrs:{label:"Permit",type:"submit",color:"primary",unelevated:"",loading:e.permitLoading}}),s("q-btn",{attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1)],1)},a=[],n={name:"ThesisClearance",title:"Thesis Submission Clearance",data(){return{ids:null,permitLoading:!1}},methods:{permit(){this.permitLoading=!0,this.$adminAPI.post("/clearance/thesis/clear",{ids:this.ids}).then((()=>{this.permitLoading=!1,this.$q.notify({message:"Thesis Clearance Permitted for Selected Students",type:"positive"})})).catch((()=>{this.permitLoading=!1,this.$q.notify({message:"Failed to Permit Thesis Clearance Selected Students",type:"negative"})}))},resetForm(){this.ids=null}}},l=n,r=s("2877"),o=s("9989"),d=s("0378"),c=s("ddd8"),u=s("9c40"),m=s("eebe"),p=s.n(m),h=Object(r["a"])(l,i,a,!1,null,null,null);t["default"]=h.exports;p()(h,"components",{QPage:o["a"],QForm:d["a"],QSelect:c["a"],QBtn:u["a"]})}}]);