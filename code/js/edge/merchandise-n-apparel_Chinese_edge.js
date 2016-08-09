/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='../images/edge/';

var fonts = {};
   fonts['\'Eater\'']='<link href=\'http://fonts.googleapis.com/css?family=Eater\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['\'Open Sans\', sans-serif']='<link href=\'http://fonts.googleapis.com/css?family=Open+Sans:300\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['\'Open Sans\', Simsun']='';
   fonts['\'Open Sans\', Simhei']='';


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'Bundle_ALLMAP_test',
            type:'rect',
            rect:[142,200,0,0],
            transform:[[-141,-199]]
         },
         {
            id:'SidePanelMove',
            type:'rect',
            rect:[549,-10,0,0],
            opacity:1,
            transform:[]
         },
         {
            id:'Txt_MapGuangzhou',
            type:'text',
            rect:[0,40,207,16],
            opacity:1,
            text:"地图：中国广州",
            align:"auto",
            font:['Open Sans, Simsun',14,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[573,315]]
         },
         {
            id:'Txt_Discover_head',
            type:'text',
            rect:[101,21,144,0],
            text:"发掘",
            font:['\'Open Sans\', Simsun',24,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[471,49]]
         },
         {
            id:'Txt_Discover_par1',
            type:'text',
            rect:[0,40,180,55],
            text:"利用getchee的市场数据比对您绩效数据的相关分析，可发现对零售商店绩效产生积极影响的因素。",
            align:"auto",
            font:['Open Sans, Simsun',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,70]]
         },
         {
            id:'Txt_Discover_Par2',
            type:'text',
            rect:[0,40,192,51],
            text:"更好的规划您于销售, 营销和发展上影响业绩表现的洞察力。",
            align:"auto",
            font:['Open Sans, Simsun',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,136]]
         },
         {
            id:'Txt_Discover_Par3',
            type:'text',
            rect:[0,40,207,16],
            text:"1. 发掘协同品牌",
            align:"auto",
            font:['\'Open Sans\', Simhei',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,240]]
         },
         {
            id:'Txt_Discover_Par4',
            type:'text',
            rect:[0,40,207,16],
            text:"2. 发掘POI影响的绩效",
            align:"auto",
            font:['Open Sans, Simhei',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,260]]
         },
         {
            id:'Txt_Comm_head',
            type:'text',
            rect:[101,21,100,0],
            text:"沟通",
            font:['Open Sans, Simsun',24,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[471,49]]
         },
         {
            id:'Txt_Comm_par1',
            type:'text',
            rect:[0,40,199,75],
            text:"此用以提高周末营业额的营销活动案例，除能跨组织的分享其成功经验外，亦可被复制运行于有着类似零售与人口概况的其他地区。",
            align:"auto",
            font:['Open Sans, Simsun',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,70]]
         },
         {
            id:'Txt_Comm_Par3',
            type:'text',
            rect:[0,40,208,16],
            text:"1. 增加团队间的透明度",
            align:"auto",
            font:['Open Sans, Simhei',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,240]]
         },
         {
            id:'Txt_Comm_Par4',
            type:'text',
            rect:[0,40,207,20],
            text:"2. 共享来自各部门的数据",
            align:"auto",
            font:['Open Sans, Simhei',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,260]]
         },
         {
            id:'Txt_Comm_par5',
            type:'text',
            rect:[0,40,207,16],
            text:"3. 让业务单位明白对彼此间有什么影响",
            align:"auto",
            font:['Open Sans, Simhei',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,280]]
         },
         {
            id:'Txt_Validate_head',
            type:'text',
            rect:[101,21,207,0],
            text:"评核",
            font:['Open Sans, Simsun',24,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[471,49]]
         },
         {
            id:'Txt_Validate_par1',
            type:'text',
            rect:[0,40,197,57],
            text:"将商业与市场数据覆盖于地图上协助您透过模拟比较现有店铺网络预知潜力点的成功。",
            align:"auto",
            font:['Open Sans, Simsun',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,70]]
         },
         {
            id:'Txt_Validate_Par2',
            type:'text',
            rect:[0,40,173,49],
            text:"利用这些数据制定更佳的销售、营销、扩张计划。",
            align:"auto",
            font:['Open Sans, Simsun',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,140]]
         },
         {
            id:'Txt_Validate_Par3',
            type:'text',
            rect:[0,40,207,16],
            text:"1. 模拟比较商店",
            align:"auto",
            font:['Open Sans, Simhei',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,240]]
         },
         {
            id:'Txt_Validate_Par4',
            type:'text',
            rect:[0,40,207,16],
            text:"2. 预测成功的可能性",
            align:"auto",
            font:['Open Sans, Simhei',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,260]]
         },
         {
            id:'Txt_Validate_par5',
            type:'text',
            rect:[0,40,207,16],
            text:"3. 估计潜在的新领域",
            align:"auto",
            font:['Open Sans, Simhei',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,280]]
         },
         {
            id:'POI_Com',
            type:'rect',
            rect:[799,303,0,0],
            transform:[[-780,-223]]
         },
         {
            id:'POI_Dis',
            type:'rect',
            rect:[734,291,0,0],
            transform:[[-743,-216]]
         },
         {
            id:'POI_Val',
            type:'rect',
            rect:[828,288,0,0],
            transform:[[-839,-225]]
         },
         {
            id:'btn_Dis',
            type:'rect',
            rect:[-1,-1,0,0],
            cursor:['pointer'],
            transform:[[628,27]]
         },
         {
            id:'btn_Com',
            type:'rect',
            rect:[-1,-1,0,0],
            cursor:['pointer'],
            transform:[[596,27]]
         },
         {
            id:'btn_Val',
            type:'rect',
            rect:[-1,-1,0,0],
            cursor:['pointer'],
            transform:[[566,27]]
         }],
         symbolInstances: [
         {
            id:'btn_Com',
            symbolName:'btn_Com'
         },
         {
            id:'btn_Val',
            symbolName:'btn_Val'
         },
         {
            id:'btn_Dis',
            symbolName:'btn_Dis'
         },
         {
            id:'POI_Val',
            symbolName:'POI_Val'
         },
         {
            id:'POI_Dis',
            symbolName:'POI_Dis'
         },
         {
            id:'Bundle_ALLMAP_test',
            symbolName:'Bundle_ALLMAP_test'
         },
         {
            id:'SidePanelMove',
            symbolName:'SidePanelMove'
         },
         {
            id:'POI_Com',
            symbolName:'POI_Com'
         }
         ]
      },
   states: {
      "Base State": {
         "${_SidePanelMove}": [
            ["transform", "translateY", '0px'],
            ["style", "opacity", '1']
         ],
         "${_Txt_Validate_par5}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '207px'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '280px'],
            ["style", "display", 'block']
         ],
         "${_btn_Com}": [
            ["transform", "translateX", '597px'],
            ["transform", "translateY", '28px'],
            ["style", "cursor", 'pointer']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_Txt_Validate_Par4}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '207px'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '260px'],
            ["style", "display", 'block']
         ],
         "${_Txt_Validate_Par3}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '207px'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '240px'],
            ["style", "display", 'block']
         ],
         "${_Txt_Validate_Par2}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '12px'],
            ["style", "width", '173px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '140px'],
            ["style", "height", '49px']
         ],
         "${_Txt_Discover_Par3}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '207px'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "font-family", '\'Open Sans\', Simhei'],
            ["transform", "translateY", '240px'],
            ["style", "display", 'block']
         ],
         "${_POI_Val}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-226px'],
            ["transform", "translateX", '-839px']
         ],
         "${_Txt_Discover_Par2}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '192px'],
            ["style", "font-size", '12px'],
            ["style", "height", '51px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '136px'],
            ["style", "display", 'block']
         ],
         "${_btn_Dis}": [
            ["transform", "translateX", '629px'],
            ["transform", "translateY", '28px'],
            ["style", "cursor", 'pointer']
         ],
         "${_POI_Dis}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-217px'],
            ["transform", "translateX", '-744px']
         ],
         "${_Bundle_ALLMAP_test}": [
            ["transform", "translateX", '-141px'],
            ["transform", "translateY", '-199px']
         ],
         "${_Txt_Comm_Par3}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "width", '208px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '240px'],
            ["style", "display", 'block']
         ],
         "${_Txt_Comm_head}": [
            ["style", "font-size", '24px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '471px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '49px'],
            ["style", "width", '100px']
         ],
         "${_POI_Com}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-224px'],
            ["transform", "translateX", '-780px']
         ],
         "${_Txt_Discover_Par4}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '207px'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '260px'],
            ["style", "display", 'block']
         ],
         "${_Txt_Validate_head}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '471px'],
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '49px'],
            ["style", "font-size", '24px']
         ],
         "${_Txt_Discover_par1}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '180px'],
            ["style", "font-size", '12px'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '70px'],
            ["style", "display", 'block']
         ],
         "${_Txt_Discover_head}": [
            ["style", "width", '144px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '471px'],
            ["style", "opacity", '0.000000'],
            ["style", "display", 'block'],
            ["style", "font-family", '\'Open Sans\', Simsun'],
            ["transform", "translateY", '49px'],
            ["style", "font-size", '24px']
         ],
         "${_Txt_Comm_Par4}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "width", '207px'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '260px'],
            ["style", "display", 'block']
         ],
         "${_Txt_Validate_par1}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '12px'],
            ["style", "width", '197px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '70px'],
            ["style", "height", '57px']
         ],
         "${_Txt_Comm_par1}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '199px'],
            ["style", "font-size", '12px'],
            ["style", "height", '75px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '70px'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden']
         ],
         "${_Txt_MapGuangzhou}": [
            ["style", "font-size", '14px'],
            ["style", "height", '16px'],
            ["transform", "translateX", '573px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '315px'],
            ["style", "width", '207px']
         ],
         "${_btn_Val}": [
            ["transform", "translateX", '566px'],
            ["transform", "translateY", '28px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Txt_Comm_par5}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "width", '207px'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '280px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2315,
         autoPlay: true,
         labels: {
            "Label 3": 0,
            "Validate": 803,
            "Pcom": 934,
            "Communicate": 1601,
            "Pdis": 1702,
            "Discover": 2315
         },
         timeline: [
            { id: "eid410", tween: [ "style", "${_Txt_Validate_Par2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid449", tween: [ "style", "${_Txt_Comm_par1}", "display", 'none', { fromValue: 'block'}], position: 803, duration: 0 },
            { id: "eid467", tween: [ "style", "${_Txt_Comm_par1}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid580", tween: [ "style", "${_Txt_Comm_par1}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid585", tween: [ "style", "${_Txt_Comm_par1}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid444", tween: [ "style", "${_Txt_Validate_head}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid386", tween: [ "style", "${_Txt_Discover_Par3}", "opacity", '1', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid392", tween: [ "style", "${_Txt_Comm_par5}", "opacity", '1', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid396", tween: [ "style", "${_Txt_Comm_Par3}", "opacity", '1', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid472", tween: [ "style", "${_Txt_Discover_Par3}", "display", 'none', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid477", tween: [ "style", "${_Txt_Discover_Par3}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid544", tween: [ "style", "${_POI_Val}", "opacity", '1', { fromValue: '0'}], position: 303, duration: 500 },
            { id: "eid385", tween: [ "style", "${_Txt_Discover_Par4}", "opacity", '1', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid388", tween: [ "style", "${_Txt_Discover_par1}", "opacity", '1', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid404", tween: [ "style", "${_Txt_Validate_par5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid447", tween: [ "style", "${_Txt_Comm_Par4}", "display", 'none', { fromValue: 'block'}], position: 803, duration: 0 },
            { id: "eid465", tween: [ "style", "${_Txt_Comm_Par4}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid578", tween: [ "style", "${_Txt_Comm_Par4}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid583", tween: [ "style", "${_Txt_Comm_Par4}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid412", tween: [ "style", "${_Txt_Validate_par1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid443", tween: [ "style", "${_Txt_Validate_par1}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid473", tween: [ "style", "${_Txt_Discover_Par4}", "display", 'none', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid476", tween: [ "style", "${_Txt_Discover_Par4}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid408", tween: [ "style", "${_Txt_Validate_Par3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid469", tween: [ "style", "${_Txt_Discover_head}", "display", 'none', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid481", tween: [ "style", "${_Txt_Discover_head}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid446", tween: [ "style", "${_Txt_Comm_par5}", "display", 'none', { fromValue: 'block'}], position: 803, duration: 0 },
            { id: "eid464", tween: [ "style", "${_Txt_Comm_par5}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid577", tween: [ "style", "${_Txt_Comm_par5}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid582", tween: [ "style", "${_Txt_Comm_par5}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid442", tween: [ "style", "${_Txt_Validate_Par2}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid441", tween: [ "style", "${_Txt_Validate_Par3}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid538", tween: [ "style", "${_POI_Dis}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid537", tween: [ "style", "${_POI_Dis}", "display", 'block', { fromValue: 'none'}], position: 1916, duration: 0 },
            { id: "eid389", tween: [ "style", "${_Txt_Discover_head}", "opacity", '1', { fromValue: '0.000000'}], position: 1702, duration: 399 },
            { id: "eid545", tween: [ "style", "${_POI_Val}", "display", 'block', { fromValue: 'block'}], position: 803, duration: 0 },
            { id: "eid546", tween: [ "style", "${_POI_Val}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid387", tween: [ "style", "${_Txt_Discover_Par2}", "opacity", '1', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid470", tween: [ "style", "${_Txt_Discover_par1}", "display", 'none', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid480", tween: [ "style", "${_Txt_Discover_par1}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid398", tween: [ "style", "${_Txt_Comm_par1}", "opacity", '1', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid400", tween: [ "style", "${_Txt_Comm_head}", "opacity", '1', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid440", tween: [ "style", "${_Txt_Validate_Par4}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid536", tween: [ "style", "${_POI_Com}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid535", tween: [ "style", "${_POI_Com}", "display", 'block', { fromValue: 'none'}], position: 1207, duration: 0 },
            { id: "eid534", tween: [ "style", "${_POI_Com}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid533", tween: [ "style", "${_POI_Com}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid414", tween: [ "style", "${_Txt_Validate_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid541", tween: [ "style", "${_POI_Dis}", "opacity", '1', { fromValue: '0'}], position: 1916, duration: 399 },
            { id: "eid532", tween: [ "style", "${_POI_Com}", "opacity", '1', { fromValue: '0'}], position: 1207, duration: 394 },
            { id: "eid394", tween: [ "style", "${_Txt_Comm_Par4}", "opacity", '1', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid448", tween: [ "style", "${_Txt_Comm_Par3}", "display", 'none', { fromValue: 'block'}], position: 803, duration: 0 },
            { id: "eid466", tween: [ "style", "${_Txt_Comm_Par3}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid579", tween: [ "style", "${_Txt_Comm_Par3}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid584", tween: [ "style", "${_Txt_Comm_Par3}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid450", tween: [ "style", "${_Txt_Comm_head}", "display", 'none', { fromValue: 'block'}], position: 803, duration: 0 },
            { id: "eid468", tween: [ "style", "${_Txt_Comm_head}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid581", tween: [ "style", "${_Txt_Comm_head}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid586", tween: [ "style", "${_Txt_Comm_head}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid406", tween: [ "style", "${_Txt_Validate_Par4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid471", tween: [ "style", "${_Txt_Discover_Par2}", "display", 'none', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid479", tween: [ "style", "${_Txt_Discover_Par2}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid438", tween: [ "style", "${_Txt_Validate_par5}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 }         ]
      }
   }
},
"Heatmap": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [207,121,800,400],
      id: 'HeatMapOn',
      transform: [[-206,-120]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/MA_HeatMapOn.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_HeatMapOn}": [
            ["style", "opacity", '0.7'],
            ["transform", "translateY", '-120px'],
            ["transform", "translateX", '-206px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "on": 0,
            "off": 250
         },
         timeline: [
            { id: "eid613", tween: [ "style", "${_HeatMapOn}", "opacity", '0', { fromValue: '0.7'}], position: 0, duration: 250 },
            { id: "eid615", tween: [ "style", "${_HeatMapOn}", "opacity", '0.7', { fromValue: '0.000000'}], position: 250, duration: 250 }         ]
      }
   }
},
"POI_Val": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'POI_Big',
      rect: [0,0,820,420],
      transform: [[0,-71]],
      fill: ['rgba(0,0,0,0)','../images/edge/Validate_POI_off.png']
   },
   {
      type: 'image',
      id: 'Label2',
      rect: [200,234,80,30],
      transform: [[-93,-135],{},{},[0.75,1.166]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label.png']
   },
   {
      type: 'image',
      id: 'Label_80',
      rect: [430,210,80,30],
      transform: [[-88,11],[180],{},[0.737,1.166]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label.png']
   },
   {
      type: 'image',
      id: 'Label_80Copy',
      rect: [430,210,80,30],
      transform: [[-217,-185],[180],{},[0.812,1.166]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label.png']
   },
   {
      type: 'text',
      rect: [122,186,0,0],
      id: 'TXT_ExistingStore',
      text: '现有店面',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[0,-75]]
   },
   {
      type: 'text',
      rect: [122,186,0,0],
      id: 'TXT_potentialStore',
      text: '潜在店面',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[107,-160]]
   },
   {
      type: 'text',
      rect: [122,186,0,0],
      id: 'TXT_Competitor',
      text: '竞争对手',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[236,36]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_POI_Big}": [
            ["transform", "translateY", '-71.78px']
         ],
         "${_Label2}": [
            ["transform", "scaleX", '0.75'],
            ["transform", "translateY", '-135px'],
            ["transform", "translateX", '-93px'],
            ["transform", "scaleY", '1.16666']
         ],
         "${_TXT_Competitor}": [
            ["transform", "translateX", '236px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '36px'],
            ["style", "font-size", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '299px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '548px']
         ],
         "${_Label_80}": [
            ["transform", "translateX", '-88px'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.7375'],
            ["transform", "translateY", '11px'],
            ["transform", "scaleY", '1.16666']
         ],
         "${_TXT_ExistingStore}": [
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-75px'],
            ["style", "font-size", '11px']
         ],
         "${_TXT_potentialStore}": [
            ["transform", "translateX", '107px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-160px'],
            ["style", "font-size", '11px']
         ],
         "${_Label_80Copy}": [
            ["transform", "translateX", '-217px'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.8125'],
            ["transform", "translateY", '-185px'],
            ["transform", "scaleY", '1.16666']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"But_RetailPOI": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'Btn_RPOI_On',
      type: 'rect',
      transform: [[-27,-64]],
      rect: [28,65,0,0]
   },
   {
      rect: [105,93,0,0],
      id: 'Btn_RPOI_Off',
      transform: [[-104,-92]],
      display: 'none',
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'Btn_RPOI_Off',
      symbolName: 'Btn_RPOI_Off'
   },
   {
      id: 'Btn_RPOI_On',
      symbolName: 'Btn_RPOI_On'
   }   ]
   },
   states: {
      "Base State": {
         "${_Btn_RPOI_On}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '-64px'],
            ["transform", "translateX", '-27px']
         ],
         "${_Btn_RPOI_Off}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '-92px'],
            ["transform", "translateX", '-104px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         labels: {
            "Off": 0,
            "On": 250
         },
         timeline: [
            { id: "eid635", tween: [ "style", "${_Btn_RPOI_On}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid637", tween: [ "style", "${_Btn_RPOI_On}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid636", tween: [ "style", "${_Btn_RPOI_Off}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid638", tween: [ "style", "${_Btn_RPOI_Off}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 }         ]
      }
   }
},
"but_RetailIntensity": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Btn_RI_Off',
      rect: [166,156,0,0],
      display: 'none',
      transform: [[-165,-155]]
   },
   {
      id: 'Btn_RI_On',
      type: 'rect',
      transform: [[-141,-197]],
      rect: [142,198,0,0]
   }],
   symbolInstances: [
   {
      id: 'Btn_RI_Off',
      symbolName: 'Btn_RI_Off'
   },
   {
      id: 'Btn_RI_On',
      symbolName: 'Btn_RI_On'
   }   ]
   },
   states: {
      "Base State": {
         "${_Btn_RI_Off}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '-155px'],
            ["transform", "translateX", '-165px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20.009998px'],
            ["style", "width", '130.420001px']
         ],
         "${_Btn_RI_On}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '-197px'],
            ["transform", "translateX", '-141px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         labels: {
            "On": 0,
            "Off": 250
         },
         timeline: [
            { id: "eid630", tween: [ "style", "${_Btn_RI_Off}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid632", tween: [ "style", "${_Btn_RI_Off}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid629", tween: [ "style", "${_Btn_RI_On}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid631", tween: [ "style", "${_Btn_RI_On}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 }         ]
      }
   }
},
"POI_Com": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'POI_comm',
      rect: [0,0,820,420],
      transform: [[-29,-90]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_POI_comm.png']
   },
   {
      rect: [258,109,179,62],
      transform: [[10,-88]],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(154,188,66,1.00)']
   },
   {
      type: 'image',
      id: 'Label_B',
      rect: [0,0,230,80],
      transform: [[261,169],{},{},[0.852,0.625]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label_B.png']
   },
   {
      type: 'image',
      id: 'Label_l3Copy',
      rect: [628,236,100,30],
      transform: [[-584,-161],{},{},[0.005,0.016]],
      fill: ['rgba(0,0,0,0)','../images/edge/Label_l.png']
   },
   {
      type: 'image',
      id: 'Label',
      rect: [396,248,80,30],
      transform: [[-320,-158],{},{},[1.35,1.533]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label.png']
   },
   {
      type: 'text',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [367,255,172,16],
      id: 'TXT_marketingCampaign',
      text: '针对周末消费者推广的营销活动',
      align: 'center',
      transform: [[-75,-56]]
   },
   {
      type: 'text',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [367,255,94,16],
      id: 'TXT_NoCampaign',
      text: '此处无宣传活动',
      align: 'center',
      transform: [[-297,-151]]
   },
   {
      type: 'text',
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [296,119,127,34],
      id: 'TXT_greenBox',
      text: '举办宣传活动提升两成周末营业额的目标区域',
      align: 'center',
      transform: [[-2,-84]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Label}": [
            ["transform", "scaleX", '1.35'],
            ["transform", "translateX", '-320px'],
            ["transform", "scaleY", '1.53333'],
            ["transform", "translateY", '-158px']
         ],
         "${_Label_l3Copy}": [
            ["transform", "translateX", '-584px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.005'],
            ["style", "overflow", 'hidden'],
            ["transform", "translateY", '-161px'],
            ["transform", "scaleY", '0.01666']
         ],
         "${_Label_B}": [
            ["transform", "scaleY", '0.625'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '0.85217'],
            ["transform", "translateY", '169px'],
            ["transform", "translateX", '261px']
         ],
         "${_TXT_marketingCampaign}": [
            ["style", "font-size", '11px'],
            ["transform", "translateX", '-75px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-56px'],
            ["style", "width", '172px']
         ],
         "${_TXT_NoCampaign}": [
            ["style", "font-size", '11px'],
            ["transform", "translateX", '-297px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-151px'],
            ["style", "width", '94px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '536.95488721805px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(154,188,66,1.00)'],
            ["transform", "translateX", '10px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '62px'],
            ["transform", "translateY", '-88px'],
            ["style", "width", '179px']
         ],
         "${_TXT_greenBox}": [
            ["transform", "translateX", '-2px'],
            ["style", "font-weight", 'normal'],
            ["style", "width", '127px'],
            ["style", "text-align", 'center'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-84px'],
            ["style", "font-size", '12px']
         ],
         "${_POI_comm}": [
            ["transform", "translateX", '-29px'],
            ["transform", "translateY", '-90px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"POI_Dis": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'POI_dis',
      rect: [0,0,820,420],
      transform: [[0,-85]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_POI_dis.png']
   },
   {
      type: 'image',
      id: 'Label_l5',
      rect: [84,232,100,30],
      transform: [[11,-138],{},{},[1.08,1.328]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label_l.png']
   },
   {
      type: 'image',
      id: 'Label_l5Copy',
      rect: [84,232,100,30],
      transform: [[242,40],{},{},[0.75,1.233]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label_l.png']
   },
   {
      rect: [258,109,181,62],
      transform: [[24,2]],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(154,188,66,1.00)']
   },
   {
      type: 'text',
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [263,210,124,40],
      id: 'TXT',
      text: '举办宣传活动提升两成周末营业额的目标区域',
      align: 'center',
      transform: [[45,-84]]
   },
   {
      type: 'text',
      rect: [122,186,0,0],
      id: 'TXT_TopPerformer',
      text: '表现最佳的站點',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[-18,-79]]
   },
   {
      type: 'text',
      rect: [122,186,0,0],
      id: 'TXT_Synergy_Brand',
      text: '协同品牌',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[231,98]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_TopPerformer}": [
            ["transform", "translateX", '-18px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-79px'],
            ["style", "font-size", '11px']
         ],
         "${_Label_l5Copy}": [
            ["transform", "translateX", '242px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.75'],
            ["transform", "translateY", '40px'],
            ["transform", "scaleY", '1.23333']
         ],
         "${_TXT}": [
            ["transform", "translateX", '45px'],
            ["style", "width", '124px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-86px'],
            ["style", "font-size", '12px']
         ],
         "${_Label_l5}": [
            ["transform", "scaleX", '1.08'],
            ["transform", "scaleY", '1.32813'],
            ["transform", "translateX", '11px'],
            ["transform", "translateY", '-138px']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '550px']
         ],
         "${_POI_dis}": [
            ["transform", "translateY", '-85px'],
            ["style", "opacity", '1']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(154,188,66,1.00)'],
            ["transform", "translateX", '24px'],
            ["style", "height", '62px'],
            ["transform", "translateY", '2px'],
            ["style", "width", '181px']
         ],
         "${_TXT_Synergy_Brand}": [
            ["transform", "translateX", '231px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '98px'],
            ["style", "font-size", '11px']
         ],
         "${_POIs_Comm}": [
            ["transform", "translateX", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Bundle_ALLMAP_test": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [351,211,800,400],
      id: 'justMap2',
      transform: [[-350,-211]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/MA_justMap.png']
   },
   {
      id: 'Heatmap',
      type: 'rect',
      transform: {},
      rect: [0,0,0,0]
   },
   {
      id: 'POI_ALL',
      type: 'rect',
      transform: [[99,-40]],
      rect: [-100,40,0,0]
   },
   {
      rect: [127,145,0,0],
      id: 'but_RetailIntensity',
      transform: [[0,-114]],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: [237,50,0,0],
      id: 'But_RetailPOI',
      transform: [[-63,-19]],
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'POI_ALL',
      symbolName: 'POI_SmallDots'
   },
   {
      id: 'Heatmap',
      symbolName: 'Heatmap'
   },
   {
      id: 'But_RetailPOI',
      symbolName: 'But_RetailPOI'
   },
   {
      id: 'but_RetailIntensity',
      symbolName: 'but_RetailIntensity'
   }   ]
   },
   states: {
      "Base State": {
         "#symbolStage_Bundle_ComMap": [
            ["style", "left", '592px'],
            ["style", "top", '250.5px']
         ],
         "${_POI_ALL}": [
            ["transform", "translateX", '99px'],
            ["transform", "translateY", '-40px']
         ],
         "${_Heatmap}": [
            ["transform", "translateX", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "overflow", 'visible'],
            ["style", "width", '800px']
         ],
         "${_justMap2}": [
            ["transform", "translateX", '-350px'],
            ["transform", "translateY", '-211px']
         ],
         "${_But_RetailPOI}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '-19px'],
            ["transform", "translateX", '-63px']
         ],
         "${_but_RetailIntensity}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '-114px'],
            ["transform", "translateX", '-96px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"POI_SmallDots": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [127,193,800,400],
      id: 'POI_small',
      transform: [[-126,-192]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/MA_POI_small.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_POI_small}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-192px'],
            ["transform", "translateX", '-126px']
         ],
         "#symbolStage_POI_Com": [
            ["style", "left", '592px'],
            ["style", "top", '250.5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "Off": 0,
            "On": 250
         },
         timeline: [
            { id: "eid618", tween: [ "style", "${_POI_small}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid620", tween: [ "style", "${_POI_small}", "opacity", '0', { fromValue: '1'}], position: 250, duration: 250 }         ]
      }
   }
},
"SidePanelMove": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'SidePanelNew',
      rect: [-549,10,260,420],
      transform: [[550,-9]],
      fill: ['rgba(0,0,0,0)','../images/edge/SidePanelNew.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '420px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '260px']
         ],
         "${_SidePanelNew}": [
            ["transform", "translateX", '550px'],
            ["transform", "translateY", '-9px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"btn_Dis": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'btn_Dis_Off',
      type: 'image',
      rect: [1,1,35,35],
      fill: ['rgba(0,0,0,0)','../images/edge/btn_Dis_Off.gif']
   },
   {
      id: 'btn_Dis_On',
      type: 'image',
      rect: [1,1,35,35],
      fill: ['rgba(0,0,0,0)','../images/edge/btn_Dis_On.gif']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '35px']
         ],
         "${_btn_Dis_On}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "Off": 0,
            "On": 500
         },
         timeline: [
            { id: "eid604", tween: [ "style", "${_btn_Dis_On}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
      }
   }
},
"btn_Com": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'btn_Com_Off',
      type: 'image',
      rect: [1,1,35,35],
      fill: ['rgba(0,0,0,0)','../images/edge/btn_Com_Off.gif']
   },
   {
      rect: [1,1,35,35],
      id: 'btn_Com_On',
      transform: {},
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/btn_Com_On.gif']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_Com_On}": [
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '35px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "Off": 0,
            "On": 500
         },
         timeline: [
            { id: "eid607", tween: [ "style", "${_btn_Com_On}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
      }
   }
},
"btn_Val": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'btn_Val_Off',
      type: 'image',
      rect: [1,1,35,35],
      fill: ['rgba(0,0,0,0)','../images/edge/btn_Val_Off.gif']
   },
   {
      id: 'btn_Val_On',
      type: 'image',
      rect: [1,1,35,35],
      fill: ['rgba(0,0,0,0)','../images/edge/btn_Val_On.gif']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_Val_On}": [
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '35px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "Off": 0,
            "On": 500
         },
         timeline: [
            { id: "eid610", tween: [ "style", "${_btn_Val_On}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
      }
   }
},
"Btn_RI_Off": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [0,-27,130,20],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      transform: [[0,27]],
      id: 'On',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(103,103,103,1.00)']
   },
   {
      type: 'text',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [33,76,75,15],
      id: 'TXT_Off',
      text: '零售强度：关',
      align: 'left',
      transform: [[-2,-73]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_Off}": [
            ["style", "text-align", 'left'],
            ["style", "width", '75px'],
            ["transform", "translateX", '-2px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-73px'],
            ["style", "font-size", '11px']
         ],
         "${_On}": [
            ["color", "background-color", 'rgba(103,103,103,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '20px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateY", '27px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Btn_RI_On": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [0,-27,130,20],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      transform: [[0,27]],
      id: 'On',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(243,119,34,1.00)']
   },
   {
      transform: [[-2,-73]],
      rect: [33,76,75,15],
      type: 'text',
      id: 'TXT_On',
      text: '零售强度：开',
      align: 'left',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
            ["transform", "translateX", '-2px'],
            ["style", "width", '75px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-73px'],
            ["style", "font-size", '11px']
         ],
         "${_On}": [
            ["color", "background-color", 'rgba(243,119,34,1.00)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '20px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateY", '27px'],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Btn_RPOI_On": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [0,-27,130,20],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      transform: [[0,27]],
      id: 'On',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(243,119,34,1.00)']
   },
   {
      rect: [33,76,81,15],
      transform: [[-9,-73]],
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'TXT_On',
      text: '零售兴趣点：开',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
            ["transform", "translateX", '-9px'],
            ["style", "font-size", '11px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-73px'],
            ["style", "width", '85px']
         ],
         "${_On}": [
            ["color", "background-color", 'rgba(243,119,34,1.00)'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '20px'],
            ["transform", "translateY", '27px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Btn_RPOI_Off": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [0,-27,130,20],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      transform: [[0,27]],
      id: 'On',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(103,103,103,1.00)']
   },
   {
      rect: [33,76,81,15],
      transform: [[-9,-73]],
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'TXT_Off',
      text: '零售兴趣点：关',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_Off}": [
            ["style", "text-align", 'left'],
            ["style", "font-size", '11px'],
            ["transform", "translateX", '-9px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-73px'],
            ["style", "width", '85px']
         ],
         "${_On}": [
            ["color", "background-color", 'rgba(103,103,103,1.00)'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '20px'],
            ["transform", "translateY", '27px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '130px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '130px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-47942820");
