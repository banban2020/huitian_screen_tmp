!function(e){var a=[{id:1,name:"幼有所育"},{id:2,name:"学有所教"},{id:3,name:"劳有所得"},{id:4,name:"病有所医"},{id:5,name:"老有所养"},{id:6,name:"住有所居"},{id:7,name:"弱有所扶"},{id:7,name:"生活便利性"},{id:7,name:"宜居性"},{id:7,name:"多样性"},{id:7,name:"安全性"},{id:7,name:"公正性"}];e(function(){e("#jzSelectBoxWrap").html(template("tplSelectHtml",{dataList:a,index:0})),e("#jzSelectBoxWrap").on("change",function(){console.log(e(this).val())})})}(jQuery),function(e){var n=[{id:1,name:"东小口镇",value:"98",color:"#dd4d3b"},{id:2,name:"史各庄街道",value:"96",color:"#42ca23"},{id:3,name:"回龙观街道",value:"95",color:"#42ca23"},{id:4,name:"天通苑北街道",value:"93",color:"#dd4d3b"},{id:5,name:"天通苑南街道",value:"92",color:"#dcdb41"},{id:6,name:"霍营街道",value:"91",color:"#dcdb41"},{id:7,name:"龙泽园街道",value:"90",color:"#42ca23"}],i=0,a=0,l='<li class="tit-li"><p class="tit">序号</p> <p class="name">街道</p> <p class="value">状态</p> </li>';function t(){e("#topLeftNavList").html(l+template("tplRightContent",{dataList:e.getArrayByIndex(n,a,7),index:i}))}e(function(){t(),e(document).on("click","#topLeftNavList li",function(){0!=e(this).index()&&(i=e(this).index()-1,e.ListenMapDataChange.trigger({index:i,data:n[i]}),t())}),e.ListenMapChange.listen(function(e){for(var a in n)if(e.name==n[a].name){i=a,t();break}})})}(jQuery),function(e){var a=[{name:"全部",number:130},{name:"完工投用",number:210},{name:"新建未开",number:160},{name:"续建复工",number:180},{name:"超时项目",number:120}],n=0;function i(){e("#topNavListBox").html(template("tplTopNavListBox",{dataList:a,number:a[n].number,index:n}))}e(function(){i(),e(document).on("click","#topNavListBox .nav-list li",function(){n=e(this).index(),i()})})}(jQuery),function(a){var n=[{id:1,name:"东小口镇",list:[{id:1,name:"惠普性幼儿园的在园儿童数",value:2e3},{id:2,name:"幼儿园学位数",value:23410},{id:3,name:"幼儿园在园儿童数",value:2e3},{id:4,name:"适龄儿童数（3-6周岁）",value:2e3}],color:"#70c6e1"},{id:2,name:"史各庄街道",list:[{id:1,name:"惠普性幼儿园的在园儿童数",value:3e3},{id:2,name:"幼儿园学位数",value:12e3},{id:3,name:"幼儿园在园儿童数",value:2200},{id:4,name:"适龄儿童数（3-6周岁）",value:2e3}],color:"#70c6e1"},{id:3,name:"回龙观街道",list:[{id:1,name:"惠普性幼儿园的在园儿童数",value:4e3},{id:2,name:"幼儿园学位数",value:32e3},{id:3,name:"幼儿园在园儿童数",value:2300},{id:4,name:"适龄儿童数（3-6周岁）",value:2e3}],color:"#70c6e1"},{id:4,name:"天通苑北街道",list:[{id:1,name:"惠普性幼儿园的在园儿童数",value:1500},{id:2,name:"幼儿园学位数",value:52e3},{id:3,name:"幼儿园在园儿童数",value:2400},{id:4,name:"适龄儿童数（3-6周岁）",value:2e3}],color:"#70c6e1"},{id:5,name:"天通苑南街道",list:[{id:1,name:"惠普性幼儿园的在园儿童数",value:2300},{id:2,name:"幼儿园学位数",value:22200},{id:3,name:"幼儿园在园儿童数",value:2500},{id:4,name:"适龄儿童数（3-6周岁）",value:2e3}],color:"#70c6e1"},{id:6,name:"霍营街道",list:[{id:1,name:"惠普性幼儿园的在园儿童数",value:2050},{id:2,name:"幼儿园学位数",value:12500},{id:3,name:"幼儿园在园儿童数",value:2600},{id:4,name:"适龄儿童数（3-6周岁）",value:2e3}],color:"#70c6e1"},{id:7,name:"龙泽园街道",list:[{id:1,name:"惠普性幼儿园的在园儿童数",value:2600},{id:2,name:"幼儿园学位数",value:16e3},{id:3,name:"幼儿园在园儿童数",value:2300},{id:4,name:"适龄儿童数（3-6周岁）",value:2e3}],color:"#70c6e1"}],i=0;function l(){var e=n[i];a("#rightSortContBox").html(template("tplSortListHtml",e))}function t(e){for(var a in n)if(n[a].name==e)return a;return-1}a(function(){l(),a.ListenMapChange.listen(function(e){i=t(e.name),l()}),a.ListenMapDataChange.listen(function(e){var a=e.data;i=t(a.name),l()})})}(jQuery),function(e){var a=[{id:1,name:"东小口镇",value1:"126/60",value2:"126/60",color1:"#2cb30d",color2:"#eb4d3e"},{id:2,name:"史各庄街道",value1:"126/60",value2:"126/60",color1:"#2cb30d",color2:"#eb4d3e"},{id:3,name:"回龙观街道",value1:"126/60",value2:"126/60",color1:"#2cb30d",color2:"#eb4d3e"},{id:4,name:"天通苑北街道",value1:"126/60",value2:"126/60",color1:"#2cb30d",color2:"#eb4d3e"},{id:5,name:"天通苑南街道",value1:"126/60",value2:"126/60",color1:"#2cb30d",color2:"#eb4d3e"},{id:6,name:"霍营街道",value1:"126/60",value2:"126/60",color1:"#2cb30d",color2:"#eb4d3e"},{id:7,name:"龙泽园街道",value1:"126/60",value2:"126/60",color1:"#2cb30d",color2:"#eb4d3e"}];e(function(){e("#detailZBBox").html(template("tplDetailHtml",{dataList:a}))})}(jQuery),function(e){var a=[{id:1,name:"东小口森林公园项目",status:"完工投用",url:"javascript:;",color:"#43ca26"},{id:2,name:"东小口森林公园项目",status:"完工投用",url:"javascript:;",color:"#43ca26"},{id:3,name:"东小口森林公园项目",status:"新建未开",url:"javascript:;",color:"#ffa839"},{id:4,name:"东小口森林公园项目",status:"续建复工",url:"javascript:;",color:"#ffef95"},{id:5,name:"东小口森林公园项目",status:"完工投用",url:"javascript:;",color:"#43ca26"}];e(function(){e("#xmxxListBox").html(template("tplProgramHtml",{dataList:a}))})}(jQuery);