(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{312:function(e,t,a){"use strict";a.r(t);a(13);var l={data:function(){return{tableData:{column:[{type:"selection"},{prop:"date",label:"日期"},{prop:"name",label:"姓名"},{prop:"address",label:"地址"}],data:[{date:"2016-05-02",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎2",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎3",address:"上海市普陀区金沙江路 1518 弄"}]},multipleSelection:[]}},methods:{toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e}}},n=a(1),o=Object(n.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("lb-table",{ref:"multipleTable",attrs:{column:e.tableData.column,data:e.tableData.data},on:{"current-change":e.handleSelectionChange}}),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:function(t){return e.toggleSelection([e.tableData.data[1],e.tableData.data[2]])}}},[e._v("切换第二、第三行的选中状态")]),e._v(" "),a("el-button",{on:{click:function(t){return e.toggleSelection()}}},[e._v("取消选择")])],1)],1)},[],!1,null,null,null);t.default=o.exports}}]);