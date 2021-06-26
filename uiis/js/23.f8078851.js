(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"06c9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},["student"===e.userType?a("student-edit-form"):"teacher"===e.userType?a("teacher-edit-form"):"admin"===e.userType?a("admin-edit-form"):e._e()],1)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h5 q-my-md"},[e._v("\n    "+e._s(e.label)+" Student Account\n    "),a("q-btn",{attrs:{icon:e.viewing?"edit":"visibility",color:e.viewing?"primary":"black",flat:"",dense:""},on:{click:function(t){e.viewing=!e.viewing}}})],1),a("q-form",{staticClass:"row q-col-gutter-md",on:{submit:e.editAccount,reset:e.resetForm}},[a("q-input",{staticClass:"col-6",attrs:{label:"Name",outlined:"",readonly:e.viewing,rules:[function(){return!!e.name||"Please Enter a Name"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{staticClass:"col-6",attrs:{label:"Student ID",outlined:"",readonly:"",rules:[function(){return!!e.id||"Please Enter an ID"}]},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),a("department-picker",{attrs:{classes:"col-6",label:"Department",required:"",readonly:e.viewing},model:{value:e.department,callback:function(t){e.department=t},expression:"department"}}),a("hall-picker",{attrs:{classes:"col-6",label:"Hall",required:"",readonly:e.viewing},model:{value:e.hall,callback:function(t){e.hall=t},expression:"hall"}}),a("teacher-picker",{attrs:{classes:"col-6",label:"Advisor",department:e.department?e.department.value:null,required:"",readonly:e.viewing},model:{value:e.advisor,callback:function(t){e.advisor=t},expression:"advisor"}}),e.viewing?e._e():a("password-maker-field",{attrs:{classes:"col-6"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.viewing?e._e():a("div",{staticClass:"col-12"},[a("q-btn",{attrs:{type:"submit",label:"Update",color:"primary",unelevated:"",loading:e.editLoading}}),a("q-btn",{attrs:{type:"reset",label:"Reset",color:"primary",flat:""}})],1)],1),a("q-inner-loading",{attrs:{showing:e.oldDataLoading}})],1)},s=[],r=a("d795"),o=a("92ad"),c=a("e92d"),d=a("9053"),u=a("88f5"),m=a("b2c5"),p={name:"StudentCreatorForm",components:{HallPicker:d["a"],TeacherPicker:c["a"],PasswordMakerField:o["a"],DepartmentPicker:r["a"]},mixins:[u["a"]],data(){return{name:null,id:null,department:null,hall:null,advisor:null,password:null}},computed:{loadID(){return this.$route.params.id}},methods:{editAccount(){this.callEditApi("account/update/student/"+this.loadID,{name:this.name,password:this.password,department:Object(m["a"])(this.department),hall:Object(m["a"])(this.hall),advisor:Object(m["a"])(this.advisor)},"Student Account").catch((()=>{}))},resetForm(){this.loadOldDataIntoForm()}},created(){this.fetchOldData("/account/student/list",{id:this.loadID},"Student Account").catch((()=>{}))}},v=p,h=a("2877"),b=a("9c40"),g=a("0378"),w=a("27f9"),f=a("74f7"),k=a("eebe"),y=a.n(k),q=Object(h["a"])(v,l,s,!1,null,"6d473dfc",null),D=q.exports;y()(q,"components",{QBtn:b["a"],QForm:g["a"],QInput:w["a"],QInnerLoading:f["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h5 q-my-md"},[e._v("\n    "+e._s(e.label)+" Teacher Account\n    "),a("q-btn",{attrs:{icon:e.viewing?"edit":"visibility",color:e.viewing?"primary":"black",flat:"",dense:""},on:{click:function(t){e.viewing=!e.viewing}}})],1),a("q-form",{staticClass:"row q-col-gutter-md",on:{submit:e.editAccount,reset:e.resetForm}},[a("q-input",{staticClass:"col-6",attrs:{label:"Name",outlined:"",readonly:e.viewing,rules:[function(){return!!e.name||"Please Enter a Name"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{staticClass:"col-6",attrs:{label:"Teacher ID",outlined:"",readonly:"",rules:[function(){return!!e.id||"Please Enter an ID"}]},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),a("department-picker",{attrs:{classes:"col-6",label:"Department",required:"",readonly:e.viewing},model:{value:e.department,callback:function(t){e.department=t},expression:"department"}}),e.viewing?e._e():a("password-maker-field",{attrs:{classes:"col-6"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.viewing?e._e():a("div",{staticClass:"col-12"},[a("q-btn",{attrs:{type:"submit",label:"Update",color:"primary",unelevated:"",loading:e.editLoading}}),a("q-btn",{attrs:{type:"reset",label:"Reset",color:"primary",flat:""}})],1)],1),a("q-inner-loading",{attrs:{showing:e.oldDataLoading}})],1)},A=[],I={name:"TeacherCreatorForm",components:{PasswordMakerField:o["a"],DepartmentPicker:r["a"]},mixins:[u["a"]],data(){return{name:null,id:null,department:null,password:null}},computed:{loadID(){return this.$route.params.id}},methods:{editAccount(){this.callEditApi("/account/update/teacher/"+this.loadID,{name:this.name,password:this.password,department:Object(m["a"])(this.department)},"Teacher Account").catch((()=>{}))},resetForm(){this.loadOldDataIntoForm(),this.password=null}},created(){this.fetchOldData("/account/teacher/list",{id:this.loadID},"Teacher Account").catch((()=>{}))}},_=I,F=Object(h["a"])(_,x,A,!1,null,"a6c9a722",null),P=F.exports;y()(F,"components",{QBtn:b["a"],QForm:g["a"],QInput:w["a"],QInnerLoading:f["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-h5 q-my-md"},[e._v("\n    "+e._s(e.label)+" Admin Account\n    "),a("q-btn",{attrs:{icon:e.viewing?"edit":"visibility",color:e.viewing?"primary":"black",flat:"",dense:""},on:{click:function(t){e.viewing=!e.viewing}}})],1),a("q-form",{staticClass:"row q-col-gutter-md",on:{submit:e.editAccount,reset:e.resetForm}},[a("q-input",{staticClass:"col-6",attrs:{label:"Name",outlined:"",readonly:e.viewing,rules:[function(){return!!e.name||"Please Enter a Name"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{staticClass:"col-6",attrs:{label:"Admin Id",outlined:"",readonly:"",rules:[function(){return!!e.id||"Please Enter an ID"}]},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),e.viewing?e._e():a("password-maker-field",{attrs:{classes:"col-6"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.viewing?a("div",{staticClass:"col-6"}):e._e(),a("privilege-picker",{attrs:{classes:"col-12",label:"Privileges",multiple:"",readonly:e.viewing,required:""},model:{value:e.privileges,callback:function(t){e.privileges=t},expression:"privileges"}}),a("role-picker",{attrs:{classes:"col-12",label:"Roles",multiple:"",readonly:e.viewing,required:""},model:{value:e.roles,callback:function(t){e.roles=t},expression:"roles"}}),e.viewing?e._e():a("div",{staticClass:"col-12"},[a("q-btn",{attrs:{label:"Update",type:"submit",color:"primary",unelevated:"",loading:e.editLoading}}),a("q-btn",{attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1),a("q-inner-loading",{attrs:{showing:e.oldDataLoading}})],1)},E=[],O=a("a49b"),Q=a("0fe9"),T={name:"AdminEditForm",components:{PrivilegePicker:O["a"],PasswordMakerField:o["a"],RolePicker:Q["a"]},mixins:[u["a"]],data(){return{name:null,id:null,password:null,privileges:[],roles:[]}},computed:{loadID(){return this.$route.params.id}},methods:{editAccount(){console.log(this.privileges),console.log(this.privileges?Object(m["a"])(this.privileges):[]),console.log(this.roles?Object(m["a"])(this.roles):[]),this.callEditApi("account/update/admin/"+this.loadID,{name:this.name,password:this.password,privileges:this.privileges?Object(m["a"])(this.privileges):[],roles:this.roles?Object(m["a"])(this.roles):[]},"Admin account").catch((()=>{}))},resetForm(){this.loadOldDataIntoForm(),this.password=null}},created(){this.fetchOldData("account/admin/list",{id:this.loadID},"Admin account").catch((()=>{}))}},j=T,L=Object(h["a"])(j,C,E,!1,null,"f4a5544e",null),$=L.exports;y()(L,"components",{QBtn:b["a"],QForm:g["a"],QInput:w["a"],QInnerLoading:f["a"]});var S={name:"AccountEdit",components:{StudentEditForm:D,TeacherEditForm:P,AdminEditForm:$},data(){return{}},computed:{userType(){return this.$route.params.userType}}},N=S,R=a("9989"),B=a("429b"),M=a("7460"),U=a("eb85"),H=a("adad"),J=a("823b"),z=Object(h["a"])(N,n,i,!1,null,null,null);t["default"]=z.exports;y()(z,"components",{QPage:R["a"],QTabs:B["a"],QTab:M["a"],QSeparator:U["a"],QTabPanels:H["a"],QTabPanel:J["a"]})}}]);