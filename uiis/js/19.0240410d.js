(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{1279:function(t,e,s){"use strict";s("1dc8")},"1dc8":function(t,e,s){},"8bee":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[t.isPageLoaded?s("div",{staticClass:"q-pa-md"},[s("q-card",{attrs:{bordered:""}},[s("q-card-section",[s("div",{staticClass:"text-h5"},[t._v("\n          Course Registration Applications\n        ")])]),s("q-separator"),s("q-card-section",t._l(t.getUniqueAdvisors,(function(e){return s("q-list",t._b({key:e},"q-list",e,!1),[s("q-item",[s("q-card",{staticClass:"full-width",attrs:{bordered:""}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("\n                  "+t._s(t.getStudents.filter((function(t){return t.advisor._id===e}))[0].advisor.name)+"\n                ")])]),s("q-separator"),0!==t.getStudents.filter((function(t){return t.advisor._id===e&&"waiting"===t.status})).length?s("q-card-section",[s("p",[s("q-chip",{attrs:{color:"info","text-color":"white"}},[t._v("\n                    Waiting\n                  ")])],1),s("q-table",{staticClass:"full-width",attrs:{dense:"",bordered:"",data:t.getStudents.filter((function(t){return t.advisor._id===e&&"waiting"===t.status})),columns:t.applicationColumns,"row-key":"id",selection:"multiple",selected:t.selected,separator:"cell"},on:{"update:selected":function(e){t.selected=e},"row-click":t.onRowClick}})],1):t._e(),0!==t.getStudents.filter((function(t){return t.advisor._id===e&&"waiting"!==t.status})).length?s("q-card-section",[s("p",[s("q-chip",{attrs:{color:"warning","text-color":"white"}},[t._v("\n                    Pending\n                  ")]),t.getCurrentSession.isRegistrationPeriodRunning?t._e():s("q-chip",{attrs:{color:"negative","text-color":"white"}},[t._v("\n                    Course Registration Period is Over\n                  ")])],1),s("q-table",{staticClass:"full-width",attrs:{dense:"",bordered:"",data:t.getStudents.filter((function(t){return t.advisor._id===e&&"waiting"!==t.status})),columns:t.applicationColumns,"row-key":"id",separator:"cell"},on:{"row-click":t.onRowClick}})],1):t._e()],1)],1)],1)})),1),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{staticClass:"bg-positive text-white",attrs:{label:"Approve"},on:{click:t.approve}}),s("q-btn",{staticClass:"bg-negative text-white",attrs:{label:"Reject"},on:{click:t.reject}})],1)],1),s("q-dialog",{attrs:{"full-width":""},model:{value:t.courseRegistrationInfoDialogBox,callback:function(e){t.courseRegistrationInfoDialogBox=e},expression:"courseRegistrationInfoDialogBox"}},[s("q-card",{attrs:{bordered:""}},[s("q-card-section",[s("div",{staticClass:"row q-gutter-lg"},[s("div",[s("div",{staticClass:"text-h5"},[t._v("Course Registration Information")]),s("br"),s("div",{staticClass:"text-subtitle2"},[s("p",[s("strong",[t._v("Student ID:")]),t._v(" "+t._s(t.getStudent.id)+"\n                ")]),s("p",[s("strong",[t._v("Name:")]),t._v(" "+t._s(t.getStudent.name)+"\n                ")]),s("p",[s("strong",[t._v("Level/Term:")]),t._v(" "+t._s(t.getStudent.level)+"/"+t._s(t.getStudent.term)+"\n                ")]),s("p",[s("strong",[t._v("Department:")]),t._v(" "+t._s(t.getStudent.department)+"\n                ")]),s("p",[s("strong",[t._v("Course Registration Status:")]),t._v(" "+t._s(t.getStudent.status)+"\n                ")])])]),s("q-space"),s("img",{staticClass:"profile-photo",attrs:{alt:"",src:this.getStudentProfilePicture.display_image_link}})],1)]),s("q-separator"),s("br"),s("q-card-section",[s("q-table",{attrs:{title:"Courses Available",dense:"",bordered:"",data:t.courseRegistrations,columns:t.getRegistrationColumns,"row-key":"courseID",separator:"cell"}})],1),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"bg-secondary text-white",attrs:{label:"Back"}})],1)],1)],1)],1):t._e()])},a=[],o=s("ded3"),n=s.n(o),r=s("2f62"),c=s("758b"),l={name:"HeadCourseRegistrationPage",data(){return{isPageLoaded:!1,courseRegistrations:[],courseRegistrationInfoDialogBox:!1,applicationColumns:[{name:"id",required:!0,label:"Student ID",align:"left",field:t=>t.id,format:t=>`${t}`,sortable:!0},{name:"name",align:"left",label:"Name",field:"name",sortable:!0},{name:"level",align:"left",label:"Level",field:"level",sortable:!0},{name:"term",align:"left",label:"Term",field:"term",sortable:!0},{name:"status",align:"left",label:"Status",field:"status",sortable:!0}],selected:[]}},methods:n()(n()({},Object(r["c"])(["fetchStudents","generateUniqueAdvisors","fetchStudentProfileInfo","fetchStudentProfilePicture","fetchCourseRegistrations","fetchCurrentSession"])),{},{generateCourseRegistrations(){this.courseRegistrations=[];for(let t=0;t<this.getCourseRegistrations.length;t++)this.courseRegistrations[t]={courseID:this.getCourseRegistrations[t].courseSession.course.courseID,syllabusID:this.getCourseRegistrations[t].courseSession.course.syllabusID,title:this.getCourseRegistrations[t].courseSession.course.title,credit:this.getCourseRegistrations[t].courseSession.course.credit,status:this.getCourseRegistrations[t].status}},async onRowClick(t,e){try{await this.fetchStudentProfileInfo(e.id),await this.fetchStudentProfilePicture(e.id),this.courseRegistrations=[],this.courseRegistrationInfoDialogBox=!0,await this.fetchCourseRegistrations({id:e.id,level:e.level,term:e.term}),this.generateCourseRegistrations()}catch(s){console.log(s)}},async approve(){try{if(0===this.selected.length)this.$q.notify({message:"No student selected.",position:"bottom-left",color:"warning",icon:"warning"});else{const t=this.$q.notify({message:"Approving applications.",position:"bottom-left",color:"info",group:!1,timeout:0,spinner:!0});await c["b"].patch("/teacher/head/registrations/approve",{_id:this.selected.map((t=>t.id))}),await c["b"].patch("/student/registrations/course_registered",{_id:this.selected.map((t=>t.id))}),await this.fetchStudents(),this.generateUniqueAdvisors(),this.selected=[],t({message:"Application approved.",color:"positive",icon:"done",timeout:1500,spinner:!1})}}catch(t){console.log(t)}},async reject(){try{if(0===this.selected.length)this.$q.notify({message:"No student selected.",position:"bottom-left",color:"warning",icon:"warning"});else{const t=this.$q.notify({message:"Rejecting applications back to advisors.",position:"bottom-left",color:"info",group:!1,timeout:0,spinner:!0});await c["b"].patch("/teacher/head/registrations/reject",{_id:this.selected.map((t=>t.id))}),await this.fetchStudents(),this.generateUniqueAdvisors(),this.selected=[],t({message:"Application rejected.",color:"positive",icon:"done",timeout:1500,spinner:!1})}}catch(t){console.log(t)}}}),computed:Object(r["d"])(["getStudents","getUniqueAdvisors","getStudent","getStudentProfilePicture","getCourseRegistrations","getRegistrationColumns","getCurrentSession"]),async created(){try{this.$q.loading.show({delay:100,message:"Loading...",messageColor:"white"}),await this.fetchStudents(),this.generateUniqueAdvisors(),await this.fetchCurrentSession(),this.$q.loading.hide(),this.isPageLoaded=!this.isPageLoaded}catch(t){console.log(t)}}},d=l,u=(s("1279"),s("2877")),g=s("9989"),p=s("f09f"),h=s("a370"),f=s("eb85"),m=s("1c1c"),v=s("66e5"),b=s("b047"),C=s("eaac"),w=s("4b7e"),q=s("9c40"),_=s("24e8"),S=s("2c91"),R=s("7f67"),y=s("eebe"),P=s.n(y),k=Object(u["a"])(d,i,a,!1,null,"6504e7c2",null);e["default"]=k.exports;P()(k,"components",{QPage:g["a"],QCard:p["a"],QCardSection:h["a"],QSeparator:f["a"],QList:m["a"],QItem:v["a"],QChip:b["a"],QTable:C["a"],QCardActions:w["a"],QBtn:q["a"],QDialog:_["a"],QSpace:S["a"]}),P()(k,"directives",{ClosePopup:R["a"]})}}]);