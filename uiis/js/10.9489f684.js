(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{1393:function(e,s,o){},"88a5":function(e,s,o){"use strict";o.r(s);var r=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("q-page",{directives:[{name:"show",rawName:"v-show",value:e.pageLoaded,expression:"pageLoaded"}],staticClass:"container"},[o("div",{staticClass:"q-pa-md table"},[o("q-table",{attrs:{title:"Current Courses",data:e.allCourses.currentCourseSessions,columns:e.columns,"row-key":"courseID",separator:"cell",pagination:e.pagination,filter:e.currentCourseFilter,"hide-bottom":e.allCourses.currentCourseSessions&&e.allCourses.currentCourseSessions.length>0},on:{"update:pagination":function(s){e.pagination=s},"row-click":e.onRowClick},scopedSlots:e._u([{key:"top-right",fn:function(){return[o("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.currentCourseFilter,callback:function(s){e.currentCourseFilter=s},expression:"currentCourseFilter"}})]},proxy:!0}])})],1),o("div",{staticClass:"q-pa-md table"},[o("q-table",{attrs:{title:"Previous Courses",data:e.allCourses.previousCourseSessions,columns:e.columns,"row-key":"courseID",separator:"cell",pagination:e.pagination,filter:e.previousCourseFilter,"hide-bottom":e.allCourses.previousCourseSessions&&e.allCourses.previousCourseSessions.length>0},on:{"update:pagination":function(s){e.pagination=s},"row-click":e.onRowClick},scopedSlots:e._u([{key:"top-right",fn:function(){return[o("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:e._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.previousCourseFilter,callback:function(s){e.previousCourseFilter=s},expression:"previousCourseFilter"}})]},proxy:!0}])})],1)])},t=[],a=o("ded3"),n=o.n(a),i=o("2f62");const{mapGetters:l,mapActions:u}=Object(i["a"])("courses");var c={name:"ClassPage",data(){return{pageLoaded:"",currentCourseFilter:"",previousCourseFilter:"",pagination:{page:1,rowsPerPage:0},columns:[{name:"courseSession",label:"Session",align:"center",field:"session",classes:"bg-grey-1 ellipsis",headerClasses:"bg-primary text-white",style:"width: 200px",sortable:!0},{name:"courseID",label:"Course ID",align:"center",field:"courseID",classes:"bg-grey-1 ellipsis",headerClasses:"bg-primary text-white",style:"width: 200px",sortable:!0},{name:"courseName",align:"center",label:"Course Name",field:"title",headerClasses:"bg-primary text-white",headerStyle:"width: 400px",sortable:!0}]}},methods:n()({onRowClick(e,s){this.$router.push({name:"course_page",params:{courseID:s.courseID,courseSession:s.session,courseName:s.courseName}})}},u(["fetchCourses"])),async created(){this.pageLoaded=!1,this.$q.loading.show({delay:100,message:"Loading...",messageColor:"white"}),await this.fetchCourses(),this.$q.loading.hide(),this.pageLoaded=!0},computed:n()({},l(["allCourses"]))},p=c,d=(o("bcd9"),o("2877")),C=o("9989"),g=o("eaac"),h=o("27f9"),m=o("0016"),b=o("eebe"),f=o.n(b),w=Object(d["a"])(p,r,t,!1,null,"35e4cd56",null);s["default"]=w.exports;f()(w,"components",{QPage:C["a"],QTable:g["a"],QInput:h["a"],QIcon:m["a"]})},bcd9:function(e,s,o){"use strict";o("1393")}}]);