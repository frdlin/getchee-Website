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
            text:"地图：印尼雅加達",
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
            rect:[570,69,0,0],
            transform:[]
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
            id:'But_RetailPOI_12',
            type:'rect',
            rect:[250,156,0,0],
            cursor:['pointer'],
            transform:[[-74,-125]]
         },
         {
            id:'but_RetailIntensity_12',
            type:'rect',
            rect:[162,247,0,0],
            cursor:['pointer'],
            transform:[[-130,-216]]
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
            id:'but_RetailIntensity_12',
            symbolName:'but_RetailIntensity_1'
         },
         {
            id:'But_RetailPOI_12',
            symbolName:'But_RetailPOI_1'
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
            id:'TXT_Com',
            symbolName:'TXT_Com'
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
         "${_SidePanelNew}": [
            ["transform", "translateX", '-13px'],
            ["transform", "translateY", '-301px']
         ],
         "${_btn_Com}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '27px'],
            ["transform", "translateX", '596px']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_btn_Val}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '27px'],
            ["transform", "translateX", '566px']
         ],
         "${_But_RetailPOI_12}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '-125px'],
            ["transform", "translateX", '-74px']
         ],
         "${_POI_Dis}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '-332px'],
            ["transform", "translateY", '-242px']
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
         "${_but_RetailIntensity_12}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '-216px'],
            ["transform", "translateX", '-130px']
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
         "${_POI_Val}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-10px'],
            ["transform", "translateX", '-173px']
         ],
         "${_Txt_MapGuangzhou}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "opacity", '1'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '315px'],
            ["style", "font-size", '14px']
         ],
         "${_btn_Dis}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '27px'],
            ["transform", "translateX", '628px']
         ],
         "${_TXT_Com}": [
            ["style", "display", 'none']
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
            { id: "eid779", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_POI_Val}', [] ], ""], position: 0 },
            { id: "eid684", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TXT_Com}', [] ], ""], position: 934 },
            { id: "eid775", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_POI_Com}', [] ], ""], position: 934 },
            { id: "eid768", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_POI_Dis}', [] ], ""], position: 1702 },
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
      rect: [207,121,800,400],
      id: 'HeatMapOn',
      transform: [[-206,-120]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/BF_Heatmap.png']
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
      rect: [284,151,800,400],
      id: 'FB_BaseMap',
      transform: [[-282,-149]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/BF_BaseMap.png']
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
      rect: [127,193,800,400],
      id: 'POI_small',
      transform: [[-126,-192]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/BF_POI_small.png']
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
      type: 'text',
      rect: [-471,-48,207,0],
      id: 'Txt_Validate_head',
      text: '评核',
      font: ['Open Sans, Simsun',24,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[473,50]]
   },
   {
      transform: [[574,70]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_par1',
      text: '设立新分行与自动柜员机位置须耗费大量成本；验证可能的潜在据点对您的金融资产带来收益的影响是至关重要的。',
      rect: [-572,-29,188,94],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      transform: [[574,149]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_Par2',
      text: '启用地图数据帮助您验证新据点。',
      rect: [-572,-29,187,29],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      transform: [[574,233]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_Par3',
      text: '1. 找出邻近办公室与中小企业的区域',
      rect: [-572,-29,207,16],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      transform: [[574,253]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_Par4',
      text: '2. 找出有潜力的自动柜员机站点',
      rect: [-572,-29,207,16],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      transform: [[574,273]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_par5',
      text: '3. 预估新区域的潜力',
      rect: [-572,-29,207,16],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Validate_Par2}": [
            ["style", "width", '187px'],
            ["style", "height", '29px'],
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '149px'],
            ["style", "font-size", '12px']
         ],
         "${_Txt_Validate_par1}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '188px'],
            ["style", "height", '94px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simsun'],
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
            ["transform", "translateY", '273px'],
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
         "${symbolSelector}": [
            ["style", "height", '265.709999px'],
            ["style", "width", '208.310017px']
         ],
         "${_Txt_Validate_Par3}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '233px'],
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
            ["transform", "translateY", '253px'],
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
      transform: [[473,50]],
      type: 'text',
      display: 'none',
      id: 'Txt_Comm_head',
      text: '沟通',
      rect: [-469,-48,207,0],
      font: ['Open Sans, Simsun',24,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: [-570,-29,191,58],
      display: 'none',
      id: 'Txt_Comm_par1',
      align: 'auto',
      text: '评估比较列于您团队名单中具潜力之分行与自动柜员机。提供具透明度的地图数据。',
      transform: [[574,70]],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,177,65],
      display: 'none',
      id: 'Txt_Comm_par1Copy',
      align: 'auto',
      text: '基于具备高潜力区域所产生的不动产报告加快您发掘据点的进程。',
      transform: [[574,132]],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,177,23],
      display: 'none',
      id: 'Txt_Comm_Par3',
      align: 'auto',
      text: '1. 突显出新据点商圈间的差异',
      transform: [[574,233]],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,177,15],
      display: 'none',
      id: 'Txt_Comm_par5',
      align: 'auto',
      text: '2. 建立团队讨论平台',
      transform: [[574,253]],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Comm_par1}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '12px'],
            ["style", "height", '58px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '70px'],
            ["style", "width", '191px']
         ],
         "${_Txt_Comm_Par3}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '177px'],
            ["style", "height", '23px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '233px'],
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
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '177px'],
            ["style", "display", 'none'],
            ["style", "height", '65px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '132px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '273px'],
            ["style", "width", '209.299993px']
         ],
         "${_Txt_Comm_par5}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '177px'],
            ["style", "height", '15px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '253px'],
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
            { id: "eid467", tween: [ "style", "${_Txt_Comm_par1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid400", tween: [ "style", "${_Txt_Comm_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid682", tween: [ "style", "${_Txt_Comm_par1Copy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid396", tween: [ "style", "${_Txt_Comm_Par3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid464", tween: [ "style", "${_Txt_Comm_par5}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid398", tween: [ "style", "${_Txt_Comm_par1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid468", tween: [ "style", "${_Txt_Comm_head}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid392", tween: [ "style", "${_Txt_Comm_par5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid466", tween: [ "style", "${_Txt_Comm_Par3}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
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
      transform: [[473,50]],
      type: 'text',
      display: 'none',
      id: 'Txt_Discover_head',
      text: '发掘',
      rect: [-470,-48,144,0],
      font: ['Open Sans, Simsun',24,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: [-571,-29,185,66],
      display: 'none',
      id: 'Txt_Discover_par1',
      align: 'auto',
      text: '搜寻比对城市内的高潜力区域；了解关键差异性与业务驱动因素做出更好更明智的决策。',
      transform: [[574,70]],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,185,51],
      display: 'none',
      id: 'Txt_Discover_par2',
      align: 'auto',
      text: '地图数据提供您无法从电子表格中轻易获得的关键见解。',
      transform: [[574,135]],
      font: ['Open Sans, Simsun',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,144,16],
      display: 'none',
      id: 'Txt_Discover_Par3',
      align: 'auto',
      text: '1. 发掘协同品牌',
      transform: [[574,233]],
      font: ['\'Open Sans\', Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,144,16],
      display: 'none',
      id: 'Txt_Discover_Par4',
      align: 'auto',
      text: '2. 发掘POI影响的表现',
      transform: [[574,253]],
      font: ['Open Sans, Simhei',11,'rgba(204,204,204,1.00)','normal','none','normal']
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
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '50px'],
            ["style", "font-size", '24px']
         ],
         "${symbolSelector}": [
            ["style", "height", '239.360001px'],
            ["style", "width", '207.46px']
         ],
         "${_Txt_Discover_Par3}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "font-family", '\'Open Sans\', Simhei'],
            ["transform", "translateY", '233px'],
            ["style", "width", '144px']
         ],
         "${_Txt_Discover_par2}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '185px'],
            ["style", "display", 'none'],
            ["style", "height", '51px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '135px'],
            ["style", "font-size", '12px']
         ],
         "${_Txt_Discover_Par4}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '11px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '253px'],
            ["style", "width", '144px']
         ],
         "${_Txt_Discover_par1}": [
            ["transform", "translateX", '574px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '12px'],
            ["style", "height", '66px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '70px'],
            ["style", "width", '185px']
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
      rect: [184,2,0,0],
      transform: [[-4],{},{},[0.84,0.84]]
   },
   {
      type: 'image',
      id: 'Label_Com_Big2',
      rect: [400,271,205,158],
      transform: [[-121,-208]],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_Label_Com_Big2.png']
   },
   {
      transform: [[31,-132]],
      type: 'text',
      align: 'auto',
      id: 'Text2',
      text: '人口细分',
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[31,-112]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy',
      text: '总人口……………..……………….12,540',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-100]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy2',
      text: '日间人口……………..…………...21,500',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-88]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy3',
      text: '住户数………………..……………...3,210',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-60]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy7',
      text: '竞争对手与协同品牌',
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[31,-40]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy6',
      text: '主要竞争对手……………..…….……….1',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-28]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy5',
      text: '次要竞争对手……………..……………..2',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-16]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy4',
      text: '协同品牌………………..……..…………..1',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'ER_Labels',
      rect: [400,87,100,30],
      transform: [[-278,114],{},{},[0.87,1.17]],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_Label_l.png']
   },
   {
      type: 'text',
      rect: [440,206,0,0],
      id: 'Existing_Resturants',
      text: '现有银行分行',
      font: ['Open Sans, Simhei',10,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[-298,8]]
   },
   {
      type: 'image',
      id: 'POI_Val2',
      rect: [126,138,20,20],
      transform: [[127,-60]],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_POI_Val.png']
   },
   {
      type: 'image',
      id: 'POI_Black',
      rect: [125,162,20,20],
      transform: [[38,14]],
      fill: ['rgba(0,0,0,0)','../images/edge/POI_Black.png']
   }],
   symbolInstances: [
   {
      id: 'PulsingCircle2',
      symbolName: 'PulsingCircle2'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy7}": [
            ["transform", "translateX", '31px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-60px'],
            ["style", "font-size", '12px']
         ],
         "${_Label_Com_Big2}": [
            ["transform", "translateX", '-121px'],
            ["transform", "translateY", '-208px']
         ],
         "${_Text2Copy}": [
            ["transform", "translateX", '31px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-112px'],
            ["style", "font-size", '10px']
         ],
         "${_Existing_Resturants}": [
            ["transform", "translateX", '-298px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '8px'],
            ["style", "font-size", '10px']
         ],
         "${_POI_Black}": [
            ["transform", "translateX", '38px'],
            ["transform", "translateY", '14px']
         ],
         "${_Text2}": [
            ["transform", "translateX", '31px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-132px'],
            ["style", "font-size", '12px']
         ],
         "${_PulsingCircle2}": [
            ["transform", "scaleX", '0.84'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '-4px'],
            ["transform", "scaleY", '0.84']
         ],
         "${_Text2Copy2}": [
            ["transform", "translateX", '31px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-100px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy5}": [
            ["transform", "translateX", '31px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-28px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy4}": [
            ["transform", "translateX", '31px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-16px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '800px']
         ],
         "${_Text2Copy3}": [
            ["transform", "translateX", '31px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-88px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy6}": [
            ["transform", "translateX", '31px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-40px'],
            ["style", "font-size", '10px']
         ],
         "${_ER_Labels}": [
            ["transform", "scaleX", '0.87'],
            ["transform", "translateY", '114px'],
            ["transform", "scaleY", '1.17'],
            ["transform", "translateX", '-278px']
         ],
         "${_POI_Val2}": [
            ["transform", "translateX", '127px'],
            ["transform", "translateY", '-60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid778", tween: [ "style", "${_PulsingCircle2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 }         ]
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
      type: 'rect',
      id: 'RoundRect2',
      opacity: 0.2957421875,
      stroke: [1,'rgba(0,0,0,1.00)','solid'],
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
      transform: [[-355,-215],{},{},[0.84,0.84]]
   },
   {
      id: 'PulsingCircleCopy',
      type: 'rect',
      rect: [441,320,0,0],
      transform: [[-119,-95],{},{},[0.84,0.84]]
   },
   {
      type: 'image',
      id: 'Label_Com_Big',
      rect: [489,290,208,158],
      transform: [[-310,-125],{},{},[1.02,1.02]],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_Label_Com_Big.png']
   },
   {
      transform: [[-75,-33]],
      type: 'text',
      align: 'auto',
      id: 'Text2',
      text: '有潜力的分行  #1',
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[-75,-13]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy',
      text: '总人口……………………..…………….12,350',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-75]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy2',
      text: '日间人口………………..………………21,500',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-75,12]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy3',
      text: '平均财富……………...每月35,350人民幣',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-75,43]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy7',
      text: '有潜力的分行  #2',
      rect: [268,206,0,0],
      font: ['Open Sans, Simsun',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[-75,63]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy6',
      text: '总人口…………………..……....……….10,120',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-75,76]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy5',
      text: '日间人口…………………..…………….31,110',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-75,90]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy4',
      text: '平均财富………….……每月55,200人民幣',
      rect: [268,206,0,0],
      font: ['Open Sans, Simhei',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'POI_Val2',
      rect: [102,205,20,20],
      transform: [[53,-31]],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_POI_Val.png']
   },
   {
      type: 'image',
      id: 'POI_Val3',
      rect: [514,295,20,20],
      transform: [[-123,-2]],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_POI_Val.png']
   }],
   symbolInstances: [
   {
      id: 'PulsingCircleCopy',
      symbolName: 'PulsingCircle'
   },
   {
      id: 'PulsingCircle',
      symbolName: 'PulsingCircle'
   }   ]
   },
   states: {
      "Base State": {
         "${_PulsingCircle}": [
            ["transform", "scaleY", '0.84'],
            ["transform", "scaleX", '0.84'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-215px'],
            ["transform", "translateX", '-355px']
         ],
         "${_Text2Copy}": [
            ["transform", "translateX", '-75px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-13px'],
            ["style", "font-size", '10px']
         ],
         "${_Label_Com_Big}": [
            ["transform", "scaleX", '1.02'],
            ["transform", "translateY", '-125px'],
            ["transform", "translateX", '-310px'],
            ["transform", "scaleY", '1.02']
         ],
         "${_Text2Copy7}": [
            ["transform", "translateX", '-75px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '43px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2}": [
            ["transform", "translateX", '-75px'],
            ["style", "font-family", 'Open Sans, Simsun'],
            ["transform", "translateY", '-33px'],
            ["style", "font-size", '12px']
         ],
         "${_PulsingCircleCopy}": [
            ["transform", "translateX", '-119px'],
            ["transform", "scaleX", '0.84'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-95px'],
            ["transform", "scaleY", '0.84']
         ],
         "${_Text2Copy2}": [
            ["transform", "translateX", '-75px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '0px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy5}": [
            ["transform", "translateX", '-75px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '76px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy4}": [
            ["transform", "translateX", '-75px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '90px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '800px']
         ],
         "${_Text2Copy3}": [
            ["transform", "translateX", '-75px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '12px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy6}": [
            ["transform", "translateX", '-75px'],
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '63px'],
            ["style", "font-size", '10px']
         ],
         "${_POI_Val3}": [
            ["transform", "translateX", '-123px'],
            ["transform", "translateY", '-2px']
         ],
         "${_POI_Val2}": [
            ["transform", "translateX", '53px'],
            ["transform", "translateY", '-31px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid771", tween: [ "style", "${_PulsingCircle}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid774", tween: [ "style", "${_PulsingCircleCopy}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 }         ]
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
      id: 'tradeDraws',
      rect: [116,132,295,351],
      transform: [[17,-80]],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_tradeDraws.png']
   },
   {
      transform: [[115,29]],
      rect: [66,192,277,46],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(156,189,66,1.00)']
   },
   {
      transform: [[98,16]],
      type: 'text',
      align: 'center',
      id: 'Text4',
      text: '比较竞争对手数目, 目标消费者与兴趣点的领域。',
      rect: [98,219,259,19],
      font: ['\'Open Sans\', Simsun',12,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text4}": [
            ["style", "text-align", 'center'],
            ["transform", "translateX", '98px'],
            ["style", "height", '19px'],
            ["style", "font-family", '\'Open Sans\', Simsun'],
            ["transform", "translateY", '16px'],
            ["style", "width", '259px']
         ],
         "${_tradeDraws}": [
            ["style", "opacity", '0'],
            ["transform", "translateX", '17px'],
            ["transform", "translateY", '-80px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(156,189,66,1.00)'],
            ["transform", "translateX", '115px'],
            ["style", "height", '46px'],
            ["transform", "translateY", '29px'],
            ["style", "width", '277px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid767", tween: [ "style", "${_tradeDraws}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 }         ]
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
      transform: [[0,27]],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      rect: [0,-27,130,20],
      id: 'On',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(103,103,103,1.00)']
   },
   {
      transform: [[-2,-73]],
      type: 'text',
      align: 'left',
      id: 'TXT_Off',
      text: '零售强度：关',
      rect: [33,76,75,15],
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '130px']
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
         "${_TXT_Off}": [
            ["transform", "translateX", '-2px'],
            ["style", "width", '75px'],
            ["style", "text-align", 'left'],
            ["style", "font-family", 'Open Sans, Simhei'],
            ["transform", "translateY", '-73px'],
            ["style", "font-size", '11px']
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
      rect: [166,156,0,0],
      display: 'none',
      transform: [[-165,-155]],
      id: 'Btn_RI_Off',
      type: 'rect'
   },
   {
      id: 'Btn_RI_On',
      type: 'rect',
      rect: [142,198,0,0],
      transform: [[-141,-197]]
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
"Btn_RI_On": {
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
      fill: ['rgba(243,119,34,1.00)']
   },
   {
      transform: [[-2,-73]],
      type: 'text',
      align: 'left',
      id: 'TXT_On',
      text: '零售强度：开',
      rect: [33,76,75,15],
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
            ["style", "text-align", 'left'],
            ["style", "width", '75px'],
            ["transform", "translateX", '-2px'],
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
      fill: ['rgba(243,119,34,1.00)']
   },
   {
      transform: [[-9,-73]],
      rect: [33,76,81,15],
      type: 'text',
      id: 'TXT_Off',
      text: '零售兴趣点：关',
      align: 'left',
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_Off}": [
            ["transform", "translateX", '-9px'],
            ["style", "font-size", '11px'],
            ["style", "text-align", 'left'],
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
      id: 'Btn_RPOI_Off',
      type: 'rect',
      transform: [[-104,-92]],
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
            ["style", "display", 'block'],
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
            { id: "eid636", tween: [ "style", "${_Btn_RPOI_Off}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
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
      transform: [[0,27]],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      rect: [0,-27,130,20],
      id: 'On',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(103,103,103,1.00)']
   },
   {
      transform: [[-9,-73]],
      type: 'text',
      align: 'left',
      id: 'TXT_On',
      text: '零售兴趣点：开',
      rect: [33,76,81,15],
      font: ['Open Sans, Simhei',11,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
            ["style", "text-align", 'left'],
            ["style", "font-size", '11px'],
            ["transform", "translateX", '-9px'],
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
