(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{3983:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[t.isPageLoaded?s("div",{staticClass:"q-pa-md"},[t.isEditOn?s("q-card",{attrs:{bordered:""}},[s("q-card-section",[s("div",{staticClass:"row q-gutter-lg"},[s("div",[s("div",{staticClass:"text-h5"},[t._v("Profile")]),s("br"),s("div",{staticClass:"text-subtitle2"},[s("p",[s("strong",[t._v("Student ID:")]),t._v(" "+t._s(t.getStudent.id)+"\n              ")]),s("p",[s("strong",[t._v("Name:")]),t._v(" "+t._s(t.getStudent.name)+"\n              ")]),s("p",[s("strong",[t._v("Level/Term:")]),t._v(" "+t._s(t.getStudent.level)+"/"+t._s(t.getStudent.term)+"\n              ")]),s("p",[s("strong",[t._v("Department:")]),t._v(" "+t._s(t.getStudent.department)+"\n              ")]),s("p",[s("strong",[t._v("Residential Hall:")]),t._v(" "+t._s(t.getStudent.hall)+"\n              ")])])]),s("q-space"),s("img",{staticClass:"profile-photo",attrs:{alt:"",src:this.getStudentProfilePicture.display_image_link}})],1)]),s("q-separator"),s("q-card-section",[s("p",[s("strong",[t._v("Contact Number:")]),s("q-input",{attrs:{clearable:"",outlined:"",type:"tel",placeholder:t.getStudent.contactNumber},model:{value:t.contactNumber,callback:function(e){t.contactNumber=e},expression:"contactNumber"}})],1),s("p",[s("strong",[t._v("Email Address:")]),s("q-input",{attrs:{clearable:"",outlined:"",type:"email",placeholder:t.getStudent.email},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("p",[s("strong",[t._v("Residential Address:")]),s("q-input",{attrs:{clearable:"",outlined:"",placeholder:t.getStudent.residentialAddress},model:{value:t.residentialAddress,callback:function(e){t.residentialAddress=e},expression:"residentialAddress"}})],1)]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{staticClass:"bg-primary text-white",attrs:{label:"Submit"},on:{click:t.submit}}),s("q-btn",{staticClass:"bg-secondary text-white",attrs:{label:"Back"},on:{click:function(e){t.isEditOn=!t.isEditOn}}})],1)],1):s("q-card",{attrs:{bordered:""}},[s("q-card-section",[s("div",{staticClass:"row q-gutter-lg"},[s("div",[s("div",{staticClass:"text-h5"},[t._v("Profile")]),s("br"),s("div",{staticClass:"text-subtitle2"},[s("p",[s("strong",[t._v("Student ID:")]),t._v(" "+t._s(t.getStudent.id)+"\n              ")]),s("p",[s("strong",[t._v("Name:")]),t._v(" "+t._s(t.getStudent.name)+"\n              ")]),s("p",[s("strong",[t._v("Level/Term:")]),t._v(" "+t._s(t.getStudent.level)+"/"+t._s(t.getStudent.term)+"\n              ")]),s("p",[s("strong",[t._v("Department:")]),t._v(" "+t._s(t.getStudent.department)+"\n              ")]),s("p",[s("strong",[t._v("Residential Hall:")]),t._v(" "+t._s(t.getStudent.hall)+"\n              ")]),s("p",[s("strong",[t._v("Contact Number:")]),t._v(" "+t._s(t.getStudent.contactNumber)+"\n              ")]),s("p",[s("strong",[t._v("Email Address:")]),t._v(" "+t._s(t.getStudent.email)+"\n              ")]),s("p",[s("strong",[t._v("Residential Address:")]),t._v(" "+t._s(t.getStudent.residentialAddress)+"\n              ")])])]),s("q-space"),s("img",{staticClass:"profile-photo",attrs:{alt:"",src:this.getStudentProfilePicture.display_image_link}})],1)]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{staticClass:"bg-primary text-white",attrs:{label:"Edit"},on:{click:function(e){t.isEditOn=!t.isEditOn}}})],1)],1)],1):t._e()])},a=[],n=s("ded3"),d=s.n(n),r=s("2f62"),l=s("758b"),o={name:"PersonalProfilePage",data(){return{isPageLoaded:!1,isEditOn:!1,contactNumber:"",email:"",residentialAddress:""}},methods:d()(d()({},Object(r["c"])(["fetchStudentIDInfo","fetchStudentProfileInfo","fetchStudentProfilePicture"])),{},{async submit(){try{this.contactNumber=""===this.contactNumber?this.getStudent.contactNumber:this.contactNumber,this.email=""===this.email?this.getStudent.email:this.email,this.residentialAddress=""===this.residentialAddress?this.getStudent.residentialAddress:this.residentialAddress,await l["b"].patch("/student/profile/edit",{contactNumber:this.contactNumber,email:this.email,residentialAddress:this.residentialAddress}),await this.fetchStudentProfileInfo(this.getID.id),this.contactNumber="",this.email="",this.residentialAddress="",this.isEditOn=!this.isEditOn,this.$q.notify({message:"Profile updated.",position:"bottom-left",color:"positive",icon:"done"})}catch(t){console.log(t)}}}),computed:Object(r["d"])(["getID","getStudent","getStudentProfilePicture"]),async created(){try{this.$q.loading.show({delay:100,message:"Loading...",messageColor:"white"}),await this.fetchStudentIDInfo(),await this.fetchStudentProfileInfo(this.getID.id),await this.fetchStudentProfilePicture(this.getID.id),this.$q.loading.hide(),this.isPageLoaded=!this.isPageLoaded}catch(t){console.log(t)}}},c=o,u=(s("f612"),s("2877")),g=s("9989"),m=s("f09f"),h=s("a370"),p=s("2c91"),_=s("eb85"),b=s("27f9"),v=s("4b7e"),f=s("9c40"),S=s("eebe"),P=s.n(S),q=Object(u["a"])(c,i,a,!1,null,"5600096a",null);e["default"]=q.exports;P()(q,"components",{QPage:g["a"],QCard:m["a"],QCardSection:h["a"],QSpace:p["a"],QSeparator:_["a"],QInput:b["a"],QCardActions:v["a"],QBtn:f["a"]})},"73a5":function(t,e,s){},f612:function(t,e,s){"use strict";s("73a5")}}]);