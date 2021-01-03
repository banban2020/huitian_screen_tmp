!function(e){var t=[{id:1,name:"东小口镇"},{id:2,name:"天通苑北街道"},{id:3,name:"天通苑南街道"},{id:4,name:"霍营街道"},{id:5,name:"回龙观街道"},{id:6,name:"龙泽园街道"},{id:7,name:"史各庄街道"}];e(function(){e("#jzSelectBoxWrap").html(template("tplSelectHtml",{dataList:t,index:0})),e("#jzSelectBoxWrap").on("change",function(){console.log(e(this).val())})})}(jQuery),function(e){var t=[{id:1,name:"面积",unit:"（平方千米）",value:"8.8",icon:"images/jz_icon_01.png",clr:"#71dff9"},{id:2,name:"常住人口",unit:"（万）",value:"708",icon:"images/jz_icon_02.png",clr:"#51ffa3"},{id:3,name:"社区总数",unit:"（个）",value:"800",icon:"images/jz_icon_03.png",clr:"#69b7ff"},{id:4,name:"企业数量",unit:"（个）",value:"12000",icon:"images/jz_icon_04.png",clr:"#96a5ff"},{id:5,name:"个体数量",unit:"（个）",value:"8000",icon:"images/jz_icon_05.png",clr:"#b873ff"},{id:6,name:"楼宇数量",unit:"（栋）",value:"17689",icon:"images/jz_icon_06.png",clr:"#fe8fff"},{id:7,name:"教育机构",unit:"（个）",value:"900",icon:"images/jz_icon_07.png",clr:"#fffb8f"},{id:8,name:"养老机构",unit:"（个）",value:"168",icon:"images/jz_icon_08.png",clr:"#ffe095"},{id:9,name:"医疗机构",unit:"（个）",value:"30",icon:"images/jz_icon_09.png",clr:"#ff9a69"}],a=0;function o(){e("#jdxxListID").html(template("tplJDListHtml",{dataList:t,index:a}))}e(function(){o(),e(document).on("click","#jdxxListID .list-item",function(){a=e(this).index(),o()})})}(jQuery),function(t){var a=[{id:1,name:"便利性",value:86,max:100,color:"#42ca23"},{id:2,name:"幼有所育",value:90,max:100,color:"#42ca23"},{id:3,name:"公正性",value:72,max:100,color:"#eb4c3d"},{id:4,name:"弱有所扶",value:72,max:100,color:"#eb4c3d"},{id:5,name:"安全性",value:73,max:100,color:"#eb4c3d"},{id:6,name:"病有所医",value:74,max:100,color:"#f38432"},{id:7,name:"宜居性",value:76,max:100,color:"#f38432"},{id:8,name:"住有所居",value:77,max:100,color:"#f1d235"},{id:9,name:"老有所养",value:79,max:100,color:"#b0bb39"},{id:10,name:"多样性",value:80,max:100,color:"#a3bb39"},{id:11,name:"劳有所得",value:82,max:100,color:"#8dbb33"},{id:12,name:"学有所教",value:84,max:100,color:"#61b02b"}];function e(){var e;echarts.init(document.getElementById("radarBox")).setOption((e=.48*parseInt(t("#radarBox").width())/2,{tooltip:{trigger:"axis"},legend:{left:"right",data:["全市平均指数"],icon:"circle",textStyle:{color:"#70dcf8"}},calculable:!0,radar:{indicator:function(){for(var e=[],t=0;t<a.length;t++)e.push({text:a[t].name+" "+a[t].value,name:a[t],color:a[t].color,max:a[t].max});return e}(),name:{fontSize:16,formatter:function(e){return"{b|"+e.name+"}  {c|"+e.value+"}"},rich:{b:{fontSize:16},c:{fontSize:26,fontFamily:'"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif'}}},center:["50%","55%"],radius:e,splitLine:{lineStyle:{color:"#55a6c3"}},splitArea:{show:!1},shape:"circle"},series:[{type:"radar",areaStyle:{color:"#3c6261",opacity:.8},lineStyle:{color:"#75a141"},data:[{name:"全市平均指数",value:function(){var e=[];for(var t in a)e[t]=a[t].value;return e}()}]}]}))}t(function(){setTimeout(function(){e()},200)})}(jQuery),function(e){var a=[{name:"2016",value:86},{name:"2017",value:85},{name:"2018",value:92},{name:"2019",value:93},{name:"2020",value:95}];function t(){echarts.init(document.getElementById("qyzbBox")).setOption({tooltip:{show:!0,backgroundColor:"transparent",trigger:"item",formatter:"{a}<br />{b}: {c}%",position:"top",padding:[1,10],textStyle:{fontSize:12}},grid:{left:"12%",top:"28%",bottom:"32px",right:"4%"},legend:{right:0,top:0,textStyle:{color:"#FFFFFF"},icon:"circle",data:["七有指标"]},xAxis:{type:"category",boundaryGap:!1,data:function(){var e=[];for(var t in a)e[e.length]=a[t].name;return e}(),splitLine:{show:!1,lineStyle:{color:["#0f1f55"],width:1,type:"solid"}},axisLabel:{show:!0,interval:0,textStyle:{color:"#fff",fontSize:14}},axisLine:{lineStyle:{color:"#0d244f"}}},yAxis:{type:"value",axisLabel:{show:!0,interval:0,formatter:"{value}%",textStyle:{color:"#fff",fontSize:16}},axisLine:{lineStyle:{color:"#0d244f"}},splitLine:{show:!0,lineStyle:{color:["#0f1f55"],width:1,type:"solid"}}},series:[{data:a,type:"line",name:"七有指标",areaStyle:{},smooth:!0,itemStyle:{normal:{label:{show:!0,color:"#FFFFFF",fontSize:24,fontFamily:'"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif'},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#51e1ff"},{offset:.2,color:"#51e1ff"},{offset:1,color:"transparent"}],global:!1}}}}]})}e(function(){setTimeout(function(){t()},200)})}(jQuery),function(e){var a=[{name:"2016",value:86},{name:"2017",value:85},{name:"2018",value:92},{name:"2019",value:93},{name:"2020",value:95}];function t(){echarts.init(document.getElementById("wxzbBox")).setOption({tooltip:{show:!0,backgroundColor:"transparent",trigger:"item",formatter:"{a}<br />{b}: {c}%",position:"top",padding:[1,10],textStyle:{fontSize:12}},grid:{left:"12%",top:"28%",bottom:"32px",right:"4%"},legend:{right:0,top:0,textStyle:{color:"#FFFFFF"},icon:"circle",data:["五性指标"]},xAxis:{type:"category",boundaryGap:!1,data:function(){var e=[];for(var t in a)e[e.length]=a[t].name;return e}(),splitLine:{show:!1,lineStyle:{color:["#0f1f55"],width:1,type:"solid"}},axisLabel:{show:!0,interval:0,textStyle:{color:"#fff",fontSize:14}},axisLine:{lineStyle:{color:"#0d244f"}}},yAxis:{type:"value",axisLabel:{show:!0,interval:0,formatter:"{value}%",textStyle:{color:"#fff",fontSize:16}},axisLine:{lineStyle:{color:"#0d244f"}},splitLine:{show:!0,lineStyle:{color:["#0f1f55"],width:1,type:"solid"}}},series:[{data:a,type:"line",name:"五性指标",areaStyle:{},smooth:!0,itemStyle:{normal:{label:{show:!0,color:"#FFFFFF",fontSize:24,fontFamily:'"036-CAI978", "Helvetica Neue", Helvetica, Arial, sans-serif'},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#51e1ff"},{offset:.2,color:"#51e1ff"},{offset:1,color:"transparent"}],global:!1}}}}]})}e(function(){setTimeout(function(){t()},200)})}(jQuery),function(l){var n=[{name:"交通拥堵",value:1e4,color:"#ea4c3e"},{name:"潮汐紧密",value:6181,color:"#ea4c3e"},{name:"公共设施不完善",value:4386,color:"#f48d46"},{name:"交通拥堵",value:4055,color:"#f48d46"},{name:"潮汐紧密",value:2467,color:"#ea4c3e"},{name:"公共设施不完善",value:2244,color:"#f1d236"},{name:"交通拥堵",value:1898,color:"#f48d46"},{name:"潮汐紧密",value:1484,color:"#ea4c3e"},{name:"公共设施不完善",value:1484,color:"#ea4c3e"},{name:"交通拥堵",value:1484,color:"#f48d46"},{name:"潮汐紧密",value:1484,color:"#f1d236"}];l(function(){});l(function(){var e,t;e=l("#bottomCYBox"),t=l('<ul class="child-box" style="height: 2.85rem;">'+template("tplCouldHtml",{dataList:n})+"</ul>"),e.html('<style type="text/css">#bottomCYBox{ overflow: hidden; } #bottomCYBox .child-box{ height: 2.8rem; } #bottomCYBox .child-box li{ font-size: .2rem; white-space: nowrap; }</style>'),e.append(t);var a=l("#bottomCYBox"),o=a.width(),i=a.height();tagcloud({selector:"#bottomCYBox .child-box",fontsize:24,radius:3*o/2,width:o,height:i,mspeed:"slow",ispeed:"slow",direction:135,keep:!1})})}(jQuery),function(e){var t,a=[{id:1,name:"总体项目",value:120,color:"#ffffff"},{id:2,name:"完工投用",value:33,color:"#43ca26"},{id:3,name:"续建复工",value:10,color:"#ffef95"},{id:4,name:"新建未开",value:17,color:"#ffa93a"},{id:5,name:"超时项目",value:60,color:"#eb4c3d"}],o=[{id:1,title:"回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）",status:"完工投用",url:"javascript:;"},{id:2,title:"回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）2",status:"完工投用",url:"javascript:;"},{id:3,title:"回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）3",status:"完工投用",url:"javascript:;"},{id:4,title:"回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）4",status:"完工投用",url:"javascript:;"},{id:5,title:"回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）5",status:"完工投用",url:"javascript:;"},{id:6,title:"回龙观镇居住及公共设施项目（朱辛庄地区）配套养老设施（公办）6",status:"完工投用",url:"javascript:;"}],i=0;function l(){e("#tableBodyBox").html(template("tplBottomProgramTable",{dataList:e.getArrayByIndex(o,i,3)}))}function n(){t=setInterval(function(){i=i+1>=o.length?0:i+1,l()},5e3)}e(function(){e("#bottomTopNavList").html(template("tplBottomProgramTop",{dataList:a})),l(),n(),e("#tableBodyBox").hover(function(){clearInterval(t)},function(){n()})})}(jQuery);