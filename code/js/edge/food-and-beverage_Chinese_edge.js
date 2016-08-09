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
            id:'mapbundle',
            type:'rect',
            rect:[142,200,0,0],
            transform:[[-141,-199]]
         },
         {
            id:'SidePanelNew',
            type:'image',
            rect:[565,293,260,420],
            fill:["rgba(0,0,0,0)",im+"SidePanelNew.png"],
            transform:[[-13,-301]]
         },
         {
            id:'POI_Main',
            type:'image',
            rect:[223,180,800,400],
            fill:["rgba(0,0,0,0)",im+"FB_POI_Main.png"],
            transform:[[-222,-178]]
         },
         {
            id:'POI_Dis',
            type:'rect',
            rect:[333,244,0,0],
            transform:[[-332,-242]]
         },
         {
            id:'POI_Com',
            type:'rect',
            rect:[167,200,0,0],
            transform:[[-166,-199]]
         },
         {
            id:'POI_Val',
            type:'rect',
            rect:[174,11,0,0],
            transform:[[-173,-10]]
         },
         {
            id:'Txt_MapGuangzhou',
            type:'text',
            rect:[0,40,207,16],
            opacity:1,
            text:"地图：泰国曼谷",
            align:"auto",
            font:['Open Sans, Simsun',14,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[572,315]]
         },
         {
            id:'TXT_Dis',
            display:'none',
            type:'rect',
            rect:[571,69,0,0]
         },
         {
            id:'TXT_Com',
            display:'none',
            type:'rect',
            rect:[570,69,0,0]
         },
         {
            id:'TXT_Val',
            type:'rect',
            rect:[572,69,0,0],
            transform:[[-1]]
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
         },
         {
            id:'but_RetailIntensity_1',
            type:'rect',
            rect:[60,92,0,0],
            cursor:['pointer'],
            transform:[[-29,-61]]
         },
         {
            id:'But_RetailPOI_1',
            type:'rect',
            rect:[190,62,0,0],
            cursor:['pointer'],
            transform:[[-14,-31]]
         }],
         symbolInstances: [
         {
            id:'btn_Val',
            symbolName:'btn_Val'
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
            id:'POI_Com',
            symbolName:'POI_Com'
         },
         {
            id:'But_RetailPOI_1',
            symbolName:'But_RetailPOI_1'
         },
         {
            id:'TXT_Com',
            symbolName:'TXT_Com'
         },
         {
            id:'btn_Dis',
            symbolName:'btn_Dis'
         },
         {
            id:'btn_Com',
            symbolName:'btn_Com'
         },
         {
            id:'but_RetailIntensity_1',
            symbolName:'but_RetailIntensity_1'
         },
         {
            id:'mapbundle',
            symbolName:'MapBundle'
         },
         {
            id:'TXT_Val',
            symbolName:'TXT_Val'
         },
         {
            id:'TXT_Dis',
            symbolName:'TXT_Dis'
         }
         ]
      },
   states: {
      "Base State": {
         "${_POI_Main}": [
            ["transform", "translateX", '-222px'],
            ["transform", "translateY", '-178px']
         ],
         "${_SidePanelNew}": [
            ["transform", "translateX", '-13px'],
            ["transform", "translateY", '-301px']
         ],
         "${_Txt_Discover_Better}": [
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(204,204,204,1)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '56px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '167px'],
            ["style", "width", '200px']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_but_RetailIntensity_1}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '-61px'],
            ["transform", "translateX", '-29px']
         ],
         "${_btn_Val}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '27px'],
            ["transform", "translateX", '566px']
         ],
         "${_POI_Dis}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-242px'],
            ["transform", "translateX", '-332px']
         ],
         "${_TXT_Val}": [
            ["style", "display", 'block'],
            ["transform", "translateX", '-1px']
         ],
         "${_mapbundle}": [
            ["transform", "translateX", '-141px'],
            ["transform", "translateY", '-199px']
         ],
         "${_POI_Com}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-199px'],
            ["transform", "translateX", '-166px']
         ],
         "${_But_RetailPOI_1}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '-31px'],
            ["transform", "translateX", '-14px']
         ],
         "${_btn_Com}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '27px'],
            ["transform", "translateX", '596px']
         ],
         "${_POI_Val}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-10px'],
            ["transform", "translateX", '-173px']
         ],
         "${_TXT_Com}": [
            ["style", "display", 'none']
         ],
         "${_btn_Dis}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '27px'],
            ["transform", "translateX", '628px']
         ],
         "${_Txt_MapGuangzhou}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '572px'],
            ["style", "opacity", '1'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '315px'],
            ["style", "font-size", '14px']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '800px']
         ],
         "${_TXT_Dis}": [
            ["style", "display", 'none']
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
            "Validate": 803,
            "Scom": 934,
            "Communicate": 1601,
            "Sdis": 1702,
            "Discover": 2315
         },
         timeline: [
            { id: "eid750", tween: [ "style", "${_POI_Val}", "display", 'block', { fromValue: 'block'}], position: 803, duration: 0 },
            { id: "eid751", tween: [ "style", "${_POI_Val}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid732", tween: [ "style", "${_TXT_Val}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid749", tween: [ "style", "${_POI_Val}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 803 },
            { id: "eid730", tween: [ "style", "${_TXT_Dis}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid731", tween: [ "style", "${_TXT_Dis}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid625", tween: [ "style", "${_Txt_Discover_Better}", "display", 'none', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid624", tween: [ "style", "${_Txt_Discover_Better}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid728", tween: [ "style", "${_TXT_Com}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid729", tween: [ "style", "${_TXT_Com}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid726", tween: [ "style", "${_TXT_Com}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid755", tween: [ "style", "${_POI_Com}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid756", tween: [ "style", "${_POI_Com}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid757", tween: [ "style", "${_POI_Com}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid758", tween: [ "style", "${_POI_Com}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid754", tween: [ "style", "${_POI_Com}", "opacity", '1', { fromValue: '0'}], position: 934, duration: 667 },
            { id: "eid761", tween: [ "style", "${_POI_Dis}", "opacity", '1', { fromValue: '0'}], position: 1702, duration: 613 },
            { id: "eid763", tween: [ "style", "${_POI_Dis}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid762", tween: [ "style", "${_POI_Dis}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid764", tween: [ "style", "${_POI_Dis}", "display", 'block', { fromValue: 'block'}], position: 2315, duration: 0 },
            { id: "eid623", tween: [ "style", "${_Txt_Discover_Better}", "opacity", '0.800000', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid733", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TXT_Val}', [] ], ""], position: 0 },
            { id: "eid684", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TXT_Com}', [] ], ""], position: 934 },
            { id: "eid685", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TXT_Dis}', [] ], ""], position: 1702 }         ]
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
      type: 'image',
      id: 'HeatMapOn',
      rect: [207,121,800,400],
      transform: [[-206,-120]],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Heatmap.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px']
         ],
         "${_HeatMapOn}": [
            ["style", "opacity", '0.7'],
            ["transform", "translateY", '-120px'],
            ["transform", "translateX", '-206px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         labels: {
            "on": 0,
            "off": 500
         },
         timeline: [
            { id: "eid613", tween: [ "style", "${_HeatMapOn}", "opacity", '0', { fromValue: '0.7'}], position: 0, duration: 500 },
            { id: "eid615", tween: [ "style", "${_HeatMapOn}", "opacity", '0.7', { fromValue: '0.000000'}], position: 500, duration: 500 }         ]
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
      rect: [-170,-29,130,20],
      transform: [[170,30]],
      id: 'but_retailPOI_off',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','z-illustrator/MapButtons/but_retailPOI_off.png']
   },
   {
      rect: [-170,-29,130,20],
      transform: [[170,30]],
      type: 'image',
      id: 'but_retailPOI_on',
      display: 'none',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','z-illustrator/MapButtons/but_retailPOI_on.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_but_retailPOI_on}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '30px'],
            ["transform", "translateX", '170px'],
            ["style", "cursor", 'pointer']
         ],
         "${_but_retailPOI_off}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '30px'],
            ["transform", "translateX", '170px'],
            ["style", "cursor", 'pointer']
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
         autoPlay: false,
         labels: {
            "Off": 0,
            "On": 250
         },
         timeline: [
            { id: "eid49", tween: [ "style", "${_but_retailPOI_on}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_but_retailPOI_on}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid52", tween: [ "style", "${_but_retailPOI_off}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_but_retailPOI_off}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 }         ]
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
      rect: [-29,-29,130,20],
      transform: [[30,30]],
      type: 'image',
      id: 'but_retailintensity_off',
      display: 'none',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','z-illustrator/MapButtons/but_retailintensity_off.png']
   },
   {
      rect: [-29,-29,130,20],
      id: 'but_retailintensity_on',
      transform: [[30,29]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','z-illustrator/MapButtons/but_retailintensity_on.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_but_retailintensity_off}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '30px'],
            ["transform", "translateX", '30px'],
            ["style", "cursor", 'pointer']
         ],
         "${_but_retailintensity_on}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '29px'],
            ["transform", "translateX", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20.009998px'],
            ["style", "width", '130.420001px']
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
            { id: "eid47", tween: [ "style", "${_but_retailintensity_off}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_but_retailintensity_off}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid46", tween: [ "style", "${_but_retailintensity_on}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid45", tween: [ "style", "${_but_retailintensity_on}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 }         ]
      }
   }
},
"MapBundle": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'FB_BaseMap',
      rect: [284,151,800,400],
      transform: [[-282,-149]],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_BaseMap.png']
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
   }],
   symbolInstances: [
   {
      id: 'POI_ALL',
      symbolName: 'POI_SmallDots'
   },
   {
      id: 'Heatmap',
      symbolName: 'Heatmap'
   }   ]
   },
   states: {
      "Base State": {
         "#symbolStage_Bundle_ComMap": [
            ["style", "left", '592px'],
            ["style", "top", '250.5px']
         ],
         "${_Heatmap}": [
            ["transform", "translateX", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["style", "overflow", 'visible']
         ],
         "${_POI_ALL}": [
            ["transform", "translateX", '99px'],
            ["transform", "translateY", '-40px']
         ],
         "${_FB_BaseMap}": [
            ["transform", "translateX", '-282px'],
            ["transform", "translateY", '-149px']
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
      type: 'image',
      id: 'POI_small',
      rect: [127,193,800,400],
      transform: [[-126,-192]],
      fill: ['rgba(0,0,0,0)','../images/edge/POI_small.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "#symbolStage_POI_Com": [
            ["style", "left", '592px'],
            ["style", "top", '250.5px']
         ],
         "${_POI_small}": [
            ["style", "opacity", '0'],
            ["transform", "translateY", '-192px'],
            ["transform", "translateX", '-126px']
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
         duration: 1000,
         autoPlay: false,
         labels: {
            "Off": 0,
            "On": 500
         },
         timeline: [
            { id: "eid618", tween: [ "style", "${_POI_small}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid620", tween: [ "style", "${_POI_small}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 }         ]
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
         "${_btn_Dis_On}": [
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
      type: 'image',
      id: 'btn_Com_On',
      rect: [1,1,35,35],
      transform: {},
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
"TXT_Val": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-471,-48,207,0],
      transform: [[473,50]],
      id: 'Txt_Validate_head',
      text: '评核',
      font: ['Open Sans, Simsun',24,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: [-572,-29,197,94],
      font: ['\'Open Sans\', SImsun',12,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_par1',
      text: '透过覆加商业与市场数据的地图仿真比较现有的店家网络，帮助您预测潜力点位的成功。',
      transform: [[573,70]],
      type: 'text'
   },
   {
      rect: [-572,-29,187,32],
      font: ['\'Open Sans\', Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_Par2',
      text: '如此运用数据促成更好的销售, 营销与扩张计划。',
      transform: [[574,134]],
      type: 'text'
   },
   {
      rect: [-572,-29,207,16],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_Par3',
      text: '1. 模拟比较商店',
      transform: [[574,240]],
      type: 'text'
   },
   {
      rect: [-572,-29,207,16],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_Par4',
      text: '2. 预测成功的可能性',
      transform: [[574,260]],
      type: 'text'
   },
   {
      rect: [-572,-29,207,16],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_par5',
      text: '3. 估计潜在的新领域',
      transform: [[574,280]],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '265.709999px'],
            ["style", "width", '208.310017px']
         ],
         "${_Txt_Validate_par1}": [
            ["style", "width", '197px'],
            ["style", "height", '94px'],
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '70px'],
            ["style", "font-size", '12px']
         ],
         "${_Txt_Validate_par5}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '280px'],
            ["style", "width", '207px']
         ],
         "${_Txt_Validate_head}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '473px'],
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '50px'],
            ["style", "font-size", '24px']
         ],
         "${_Txt_Validate_Par2}": [
            ["style", "width", '187px'],
            ["style", "height", '32px'],
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '134px'],
            ["style", "font-size", '12px']
         ],
         "${_Txt_Validate_Par3}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '240px'],
            ["style", "width", '207px']
         ],
         "${_Txt_Validate_Par4}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '260px'],
            ["style", "width", '207px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid410", tween: [ "style", "${_Txt_Validate_Par2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid412", tween: [ "style", "${_Txt_Validate_par1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid667", tween: [ "style", "${_Txt_Validate_par1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid661", tween: [ "style", "${_Txt_Validate_par1}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid668", tween: [ "style", "${_Txt_Validate_head}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid662", tween: [ "style", "${_Txt_Validate_head}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid408", tween: [ "style", "${_Txt_Validate_Par3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid663", tween: [ "style", "${_Txt_Validate_par5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid657", tween: [ "style", "${_Txt_Validate_par5}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid664", tween: [ "style", "${_Txt_Validate_Par4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid658", tween: [ "style", "${_Txt_Validate_Par4}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid666", tween: [ "style", "${_Txt_Validate_Par2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid660", tween: [ "style", "${_Txt_Validate_Par2}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid404", tween: [ "style", "${_Txt_Validate_par5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid406", tween: [ "style", "${_Txt_Validate_Par4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid665", tween: [ "style", "${_Txt_Validate_Par3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid659", tween: [ "style", "${_Txt_Validate_Par3}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid414", tween: [ "style", "${_Txt_Validate_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
      }
   }
},
"TXT_Com": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-469,-48,207,0],
      font: ['Open Sans, Simsun',24,'rgba(255,255,255,1.00)','normal','none',''],
      display: 'none',
      id: 'Txt_Comm_head',
      text: '沟通',
      transform: [[473,50]],
      type: 'text'
   },
   {
      type: 'text',
      rect: [-570,-29,200,24],
      display: 'none',
      id: 'Txt_Comm_par1',
      align: 'auto',
      text: '简化您的团队与第三方的沟通程序。',
      transform: [[573,70]],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,201,40],
      display: 'none',
      id: 'Txt_Comm_par1Copy',
      align: 'auto',
      text: '参考依据高潜力地区所产生的房地产报告可协助您加速搜寻点位的流程。',
      transform: [[573,98]],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,208,16],
      display: 'none',
      id: 'Txt_Comm_Par3',
      align: 'auto',
      text: '1. 清楚突显具潜力区域',
      transform: [[573,215]],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,207,12],
      display: 'none',
      id: 'Txt_Comm_Par4',
      align: 'auto',
      text: '2. 建立分享目标区域报告',
      transform: [[573,235]],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,207,28],
      display: 'none',
      id: 'Txt_Comm_par5',
      align: 'auto',
      text: '3. 让第三方了解方地产与目标区域之需求',
      transform: [[573,255]],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Comm_par1}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '12px'],
            ["style", "height", '24px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '70px'],
            ["style", "width", '204px']
         ],
         "${_Txt_Comm_Par4}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '207px'],
            ["style", "height", '12px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '235px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Comm_Par3}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '208px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '215px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Comm_head}": [
            ["style", "font-size", '24px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '473px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '50px'],
            ["style", "width", '207px']
         ],
         "${_Txt_Comm_par1Copy}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '201px'],
            ["style", "display", 'none'],
            ["style", "height", '40px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '98px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '253.359998px'],
            ["style", "width", '209.299993px']
         ],
         "${_Txt_Comm_par5}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '207px'],
            ["style", "height", '28px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '255px'],
            ["style", "font-size", '11px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 394,
         autoPlay: false,
         timeline: [
            { id: "eid394", tween: [ "style", "${_Txt_Comm_Par4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid467", tween: [ "style", "${_Txt_Comm_par1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid396", tween: [ "style", "${_Txt_Comm_Par3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid400", tween: [ "style", "${_Txt_Comm_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid682", tween: [ "style", "${_Txt_Comm_par1Copy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid392", tween: [ "style", "${_Txt_Comm_par5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid464", tween: [ "style", "${_Txt_Comm_par5}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "style", "${_Txt_Comm_Par3}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_Txt_Comm_head}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid465", tween: [ "style", "${_Txt_Comm_Par4}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid398", tween: [ "style", "${_Txt_Comm_par1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid679", tween: [ "style", "${_Txt_Comm_par1Copy}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"TXT_Dis": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-470,-48,144,0],
      font: ['\'Open Sans\', Simsun',24,'rgba(255,255,255,1.00)','normal','none',''],
      display: 'none',
      id: 'Txt_Discover_head',
      text: '发掘',
      transform: [[473,50]],
      type: 'text'
   },
   {
      type: 'text',
      rect: [-571,-29,204,86],
      display: 'none',
      id: 'Txt_Discover_par1',
      align: 'auto',
      text: '透过关连性分析，协助您识别餐厅位置之地理空间正负面的绩效表现。',
      transform: [[573,70]],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,204,51],
      display: 'none',
      id: 'Txt_Discover_par2',
      align: 'auto',
      text: '更好的规划您于销售, 营销和发展上影响业绩表现的洞察力。',
      transform: [[573,116]],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,140,16],
      display: 'none',
      id: 'Txt_Discover_Par3',
      align: 'auto',
      text: '1. 发掘协同品牌',
      transform: [[573,233]],
      font: ['\'Open Sans\', Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,140,16],
      display: 'none',
      id: 'Txt_Discover_Par4',
      align: 'auto',
      text: '2. 发掘POI影响的绩效',
      transform: [[573,253]],
      font: ['\'Open Sans\', Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Discover_head}": [
            ["style", "width", '144px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '473px'],
            ["style", "opacity", '0.000000'],
            ["style", "display", 'none'],
            ["style", "font-family", '\'Open Sans\', Simsun'],
            ["transform", "translateY", '50px'],
            ["style", "font-size", '24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '239.360001px'],
            ["style", "width", '207.46px']
         ],
         "${_Txt_Discover_Par3}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "font-family", '\'Open Sans\', Simhei'],
            ["transform", "translateY", '233px'],
            ["style", "width", '140px']
         ],
         "${_Txt_Discover_par2}": [
            ["style", "width", '204px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '51px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '116px'],
            ["style", "font-size", '12px']
         ],
         "${_Txt_Discover_Par4}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "font-family", '\'Open Sans\', Simhei'],
            ["transform", "translateY", '253px'],
            ["style", "width", '140px']
         ],
         "${_Txt_Discover_par1}": [
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '12px'],
            ["style", "height", '86px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '70px'],
            ["style", "width", '204px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 399,
         autoPlay: false,
         timeline: [
            { id: "eid480", tween: [ "style", "${_Txt_Discover_par1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid683", tween: [ "style", "${_Txt_Discover_par2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 399 },
            { id: "eid476", tween: [ "style", "${_Txt_Discover_Par4}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid385", tween: [ "style", "${_Txt_Discover_Par4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 399 },
            { id: "eid481", tween: [ "style", "${_Txt_Discover_head}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid388", tween: [ "style", "${_Txt_Discover_par1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 399 },
            { id: "eid386", tween: [ "style", "${_Txt_Discover_Par3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 399 },
            { id: "eid477", tween: [ "style", "${_Txt_Discover_Par3}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid656", tween: [ "style", "${_Txt_Discover_par2}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid389", tween: [ "style", "${_Txt_Discover_head}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 399 }         ]
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
      id: 'PulsingCircle2',
      type: 'rect',
      rect: [184,2,0,0]
   },
   {
      rect: [76,189,197,164],
      id: 'Val_Label_Big',
      transform: [[95,-64]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Val_Label_Big.png']
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'auto',
      id: 'Text2',
      text: '人口细分',
      transform: [[-86,-64]],
      type: 'text'
   },
   {
      rect: [268,206,184,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy',
      text: '总人口……………………...…………..12,540',
      transform: [[-86,-44]],
      type: 'text'
   },
   {
      rect: [268,206,181,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy2',
      text: '日间人口…………………...………….21,500',
      transform: [[-86,-32]],
      type: 'text'
   },
   {
      rect: [268,206,181,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy3',
      text: '住户数………………………..…………..3,210',
      transform: [[-86,-20]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy7',
      text: '竞争对手与协同品牌',
      transform: [[-86,8]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy6',
      text: '主要竞争对手……………..………….……….1',
      transform: [[-86,27]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy5',
      text: '次要竞争对手………………………………….2',
      transform: [[-86,40]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy4',
      text: '协同品牌………………………………………..1',
      transform: [[-86,53]],
      type: 'text'
   },
   {
      rect: [400,87,100,30],
      id: 'ER_Labels',
      transform: [[10,-12],{},{},[0.569,1.166]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Label_l.png']
   },
   {
      rect: [266,327,80,30],
      id: 'Label',
      transform: [[180,-68],[180],{},[0.825,1.133]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Label.png']
   },
   {
      rect: [440,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(255,255,255,1.00)','normal','none',''],
      align: 'center',
      id: 'Existing_Resturants',
      text: '现有',
      transform: [[10,-119]],
      type: 'text'
   },
   {
      rect: [440,206,0,0],
      transform: [[25,55]],
      id: 'Existing_ResturantsCopy',
      text: '竞争对手',
      font: ['Open Sans, Simhei',10,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'PulsingCircle2',
      symbolName: 'PulsingCircle2'
   }   ]
   },
   states: {
      "Base State": {
         "${_Label}": [
            ["transform", "translateX", '180px'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '0.825'],
            ["transform", "translateY", '-68px'],
            ["transform", "scaleY", '1.13333']
         ],
         "${_Text2Copy}": [
            ["transform", "translateX", '-86px'],
            ["style", "font-size", '10px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-44px'],
            ["style", "width", '184px']
         ],
         "${_Existing_Resturants}": [
            ["transform", "translateX", '10px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-119px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy3}": [
            ["transform", "translateX", '-86px'],
            ["style", "font-size", '10px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-20px'],
            ["style", "width", '181px']
         ],
         "${_Text2}": [
            ["transform", "translateX", '-86px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-64px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '800px']
         ],
         "${_Text2Copy2}": [
            ["transform", "translateX", '-86px'],
            ["style", "font-size", '10px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-32px'],
            ["style", "width", '181px']
         ],
         "${_Text2Copy5}": [
            ["transform", "translateX", '-86px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '40px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy4}": [
            ["transform", "translateX", '-86px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '53px'],
            ["style", "font-size", '10px']
         ],
         "${_Val_Label_Big}": [
            ["transform", "translateX", '95px'],
            ["transform", "translateY", '-64px']
         ],
         "${_Existing_ResturantsCopy}": [
            ["transform", "translateX", '25px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '55px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy6}": [
            ["transform", "translateX", '-86px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '27px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy7}": [
            ["transform", "translateX", '-86px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '8px'],
            ["style", "font-size", '12px']
         ],
         "${_ER_Labels}": [
            ["transform", "scaleX", '0.56999'],
            ["transform", "translateY", '-12px'],
            ["transform", "scaleY", '1.16666'],
            ["transform", "translateX", '10px']
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
"PulsingCircle": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[286,-168],{},{},[1.159,1.159]],
      rect: [-276,180,132,132],
      borderRadius: ['124px 124px','124px 124px','124px 124px','124px 124px'],
      stroke: [1,'rgba(0,0,0,1.00)','solid'],
      id: 'RoundRect2',
      opacity: 0.2957421875,
      type: 'rect',
      fill: ['rgba(128,130,133,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(128,130,133,1.00)'],
            ["style", "border-top-left-radius", [124,124], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '286px'],
            ["style", "border-bottom-right-radius", [124,124], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleX", '1.15999'],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [124,124], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '136px'],
            ["style", "border-bottom-left-radius", [124,124], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "scaleY", '1.15999'],
            ["style", "border-width", '1px'],
            ["style", "height", '136px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["transform", "translateY", '-168px'],
            ["style", "opacity", '0.2957421875']
         ],
         "${symbolSelector}": [
            ["style", "height", '160.07862px'],
            ["style", "width", '160.07862px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid738", tween: [ "transform", "${_RoundRect2}", "scaleX", '1.25', { fromValue: '1.15999'}], position: 0, duration: 1000 },
            { id: "eid739", tween: [ "transform", "${_RoundRect2}", "scaleY", '1.25', { fromValue: '1.15999'}], position: 0, duration: 1000 }         ]
      }
   }
},
"PulsingCircle2": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [59,87,170,171],
      id: 'Circle',
      transform: [[-58,-86]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/Circle.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '171px'],
            ["style", "width", '170px']
         ],
         "${_Circle}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '-86px'],
            ["transform", "translateX", '-58px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid744", tween: [ "transform", "${_Circle}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 1000 },
            { id: "eid745", tween: [ "transform", "${_Circle}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 1000 }         ]
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
      id: 'PulsingCircle',
      type: 'rect',
      rect: [441,320,0,0],
      transform: [[-251,-308],{},{},[0.84,0.84]]
   },
   {
      rect: [183,300,197,164],
      id: 'Label_Com_Big',
      transform: [[110,-233],{},{},[1.04]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Label_Com_Big.png']
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'auto',
      id: 'Text2',
      text: '房地产需求',
      transform: [[42,-124]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy',
      text: '尺寸...........................300-400平方米',
      transform: [[42,-106]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy2',
      text: '租金………………………....50,000泰铢/月',
      transform: [[42,-94]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy3',
      text: '屋龄………………………..……………&lt; 30年',
      transform: [[42,-82]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy8',
      text: '能见度等级………………………………. &gt; 4',
      transform: [[42,-69]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy7',
      text: '附加要求',
      transform: [[42,-42]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy6',
      text: '租期……….……………….……………..…3年',
      transform: [[42,-24]],
      type: 'text'
   },
   {
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Text2Copy5',
      text: '竞争品牌…………………………….. &gt; 50米',
      transform: [[42,-11]],
      type: 'text'
   },
   {
      transform: [[41]],
      rect: [12,120,174,64],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(156,189,66,1.00)']
   },
   {
      rect: [23,213,143,35],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'center',
      id: 'Text4',
      text: '透过地图和地理信息系统生成报告加速发现点位。',
      transform: [[48,-80]],
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'PulsingCircle',
      symbolName: 'PulsingCircle'
   }   ]
   },
   states: {
      "Base State": {
         "${_PulsingCircle}": [
            ["transform", "scaleX", '0.84'],
            ["transform", "translateX", '-251px'],
            ["transform", "scaleY", '0.84'],
            ["transform", "translateY", '-308px']
         ],
         "${_Text2Copy}": [
            ["transform", "translateX", '42px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-106px'],
            ["style", "font-size", '10px']
         ],
         "${_Label_Com_Big}": [
            ["transform", "scaleX", '1.04'],
            ["transform", "translateY", '-233px'],
            ["transform", "translateX", '110px']
         ],
         "${_Text2Copy7}": [
            ["transform", "translateX", '42px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-42px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2Copy3}": [
            ["transform", "translateX", '42px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-82px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy2}": [
            ["transform", "translateX", '42px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-94px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy5}": [
            ["transform", "translateX", '42px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-11px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '800px']
         ],
         "${_Text2Copy8}": [
            ["transform", "translateX", '42px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-69px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2}": [
            ["transform", "translateX", '42px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-124px'],
            ["style", "font-size", '12px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(156,189,66,1.00)'],
            ["style", "height", '64px'],
            ["transform", "translateX", '42px'],
            ["style", "width", '174px']
         ],
         "${_Text2Copy6}": [
            ["transform", "translateX", '42px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-24px'],
            ["style", "font-size", '10px']
         ],
         "${_Text4}": [
            ["style", "font-size", '12px'],
            ["transform", "translateX", '48px'],
            ["style", "text-align", 'center'],
            ["style", "height", '35px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-80px'],
            ["style", "width", '143px']
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
"POI_Dis": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'PulsingCircle2',
      type: 'rect',
      rect: [184,2,0,0],
      transform: [[191,-24],{},{},[0.66,0.66]]
   },
   {
      transform: [[-61,-205],{},{},[1.159,1.063]],
      id: 'Label_Dis_Big',
      type: 'image',
      rect: [339,290,197,126],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Label_Dis_Big.png']
   },
   {
      transform: [[5,-106]],
      type: 'text',
      align: 'auto',
      id: 'Text2',
      text: '地理空间分析',
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[93,-64]],
      type: 'text',
      align: 'auto',
      id: 'Text5',
      text: '位于最佳表现站点100-200米范围内兴趣点。',
      rect: [180,186,208,13],
      font: ['Open Sans, Simhei',10,'rgba(212,212,212,1)','normal','none','normal']
   },
   {
      transform: [[92,-30]],
      type: 'text',
      align: 'auto',
      id: 'Text5Copy',
      text: '地鐵出口 路口　 哈根达斯',
      rect: [181,185,40,44],
      font: ['Open Sans, Simhei',10,'rgba(212,212,212,1)','normal','none','normal']
   },
   {
      transform: [[187,-30]],
      type: 'text',
      align: 'auto',
      id: 'Text5Copy2',
      text: '麦当劳 星巴克 7-11',
      rect: [181,185,33,44],
      font: ['Open Sans, Simhei',10,'rgba(212,212,212,1)','normal','none','normal']
   },
   {
      transform: [[0,-211]],
      id: 'POI_green2',
      type: 'image',
      rect: [447,262,25,25],
      fill: ['rgba(0,0,0,0)','../images/edge/POI_green.png']
   }],
   symbolInstances: [
   {
      id: 'PulsingCircle2',
      symbolName: 'PulsingCircle2'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text5}": [
            ["transform", "translateX", '93px'],
            ["style", "height", '13px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-64px'],
            ["style", "font-size", '10px']
         ],
         "${_POI_green2}": [
            ["transform", "translateY", '-211px'],
            ["transform", "translateX", '0px']
         ],
         "${_Label_Dis_Big}": [
            ["transform", "scaleX", '1.15999'],
            ["transform", "translateY", '-206px'],
            ["transform", "translateX", '-61px'],
            ["transform", "scaleY", '1.06349']
         ],
         "${_Text5Copy2}": [
            ["transform", "translateY", '-35px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateX", '187px'],
            ["style", "width", '33px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text5Copy}": [
            ["transform", "translateY", '-35px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateX", '93px'],
            ["style", "width", '40px']
         ],
         "${_Text2}": [
            ["transform", "translateX", '5px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-106px'],
            ["style", "font-size", '12px']
         ],
         "${_PulsingCircle2}": [
            ["transform", "scaleX", '0.66'],
            ["transform", "translateY", '-24px'],
            ["transform", "translateX", '191px'],
            ["transform", "scaleY", '0.66']
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
      transform: [[-2,-73]],
      rect: [33,76,75,15],
      type: 'text',
      id: 'TXT_Off',
      text: '零售强度：关',
      align: 'left',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_Off}": [
            ["style", "text-align", 'left'],
            ["style", "font-size", '11px'],
            ["transform", "translateX", '-2px'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-73px'],
            ["style", "width", '75px']
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
},
"but_RetailIntensity_1": {
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
         "${_Btn_RI_On}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '-197px'],
            ["transform", "translateX", '-141px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20.009998px'],
            ["style", "width", '130.420001px']
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
      type: 'text',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [33,76,75,15],
      id: 'TXT_On',
      text: '零售强度：开',
      align: 'left',
      transform: [[-2,-73]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
            ["transform", "translateX", '-2px'],
            ["style", "font-size", '11px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-73px'],
            ["style", "width", '75px']
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
      transform: [[0,27]],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      rect: [0,-27,130,20],
      id: 'On',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(103,103,103,1.00)']
   },
   {
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal'],
      transform: [[-9,-73]],
      align: 'left',
      id: 'TXT_Off',
      text: '零售兴趣点：关',
      type: 'text',
      rect: [33,76,81,15]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_Off}": [
            ["style", "text-align", 'left'],
            ["style", "width", '85px'],
            ["transform", "translateX", '-9px'],
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
            ["transform", "translateY", '27.44px'],
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
"But_RetailPOI_1": {
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
      transform: [[-104,-92]],
      id: 'Btn_RPOI_Off',
      type: 'rect',
      display: 'none',
      rect: [105,93,0,0]
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
      type: 'text',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [33,76,81,15],
      id: 'TXT_On',
      text: '零售兴趣点：开',
      align: 'left',
      transform: [[-9,-73]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
            ["transform", "translateX", '-9px'],
            ["style", "width", '85px'],
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
