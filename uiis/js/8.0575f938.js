(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"826d":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{attrs:{padding:""}},[e.statusLoading?e._e():t("div",{staticClass:"text-h5 q-mt-lg text-center"},[e.isEligible?t("div",[e.hasApplied?t("div",[e.thesisSubmitted?t("div",{staticClass:"text-bold",staticStyle:{color:"darkgreen"}},[e._v("\n          You have received clearance\n        ")]):t("div",[e._v("\n          Your clearance application is pending"),t("br"),t("span",{staticClass:"text-small"},[e._v("\n            Waiting for Thesis hard copy submission approval\n          ")])])]):t("div",[e._v("\n        You are eligible for clearance"),t("br"),t("br"),t("q-btn",{attrs:{label:"Apply for Clearance",color:"primary",unelevated:"",loading:e.applying},on:{click:e.apply}})],1)]):t("div",[e._v("\n      You are not eligible for clearance\n      "),t("div",{staticClass:"text-small",staticStyle:{color:"red"}},[e.minCreditDone?e.hasGraduated?e.duesCleared?e._e():t("span",[e._v("\n          You have pending dues\n        ")]):t("span",[e._v("\n          You have not graduated yet\n        ")]):t("span",[e._v("\n          Minimum credit requirement not fulfilled\n        ")])])])]),t("q-inner-loading",{attrs:{showing:e.statusLoading}})],1)},s=[],n=t("ded3"),d=t.n(n),l=t("2f62"),r={name:"Clearance",title:"Clearance",data(){return{minCreditDone:!1,hasGraduated:!1,duesCleared:!1,thesisSubmitted:!1,hasApplied:!1,statusLoading:!1,applying:!1}},computed:d()(d()({},Object(l["d"])(["user"])),{},{isEligible(){return this.minCreditDone&&this.hasGraduated&&this.duesCleared}}),methods:{apply(){this.applying=!0,this.$adminAPI.post("/clearance/apply/"+this.user.id).then((()=>{this.hasApplied=!0,this.applying=!1})).catch((()=>{this.applying=!1,this.$q.notify({message:"Failed to Apply for Clearance, Please Try Again",type:"negative"})}))},loadClearanceStatus(){this.statusLoading=!0,this.$adminAPI.get("/clearance/status/"+this.user.id).then((e=>{this.statusLoading=!1,this.minCreditDone=e.data.minCreditDone,this.duesCleared=e.data.duesCleared,this.thesisSubmitted=e.data.thesisSubmitted,this.hasApplied=e.data.hasApplied,this.hasGraduated=e.data.hasGraduated})).catch((()=>{this.statusLoading=!1,this.$q.notify({message:"Failed to load Clearance status, Please reload",type:"negative"})}))}},created(){this.loadClearanceStatus()}},o=r,c=(t("cf58"),t("2877")),p=t("9989"),u=t("9c40"),h=t("74f7"),g=t("eebe"),m=t.n(g),v=Object(c["a"])(o,i,s,!1,null,"423e3762",null);a["default"]=v.exports;m()(v,"components",{QPage:p["a"],QBtn:u["a"],QInnerLoading:h["a"]})},cf58:function(e,a,t){"use strict";t("e8fa")},e8fa:function(e,a,t){}}]);