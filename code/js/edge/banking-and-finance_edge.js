/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='../images/edge/';

var fonts = {};
   fonts['\'Open Sans\', sans-serif']='<link href=\'http://fonts.googleapis.com/css?family=Open+Sans:300\' rel=\'stylesheet\' type=\'text/css\'>';


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
            transform:[[-142,-200]]
         },
         {
            id:'SidePanelNew',
            type:'image',
            rect:[565,293,260,420],
            fill:["rgba(0,0,0,0)",im+"SidePanelNew.png"],
            transform:[[-13,-303]]
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
            text:"Map: Jakarta, Indonesia",
            align:"auto",
            font:['\'Open Sans\', sans-serif',14,"rgba(255,255,255,1)","normal","none","normal"],
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
            id:'But_RetailPOI',
            type:'rect',
            rect:[247,115,0,0],
            cursor:['pointer'],
            transform:[[-71,-84]]
         },
         {
            id:'but_RetailIntensity',
            type:'rect',
            rect:[75,114,0,0],
            cursor:['pointer'],
            transform:[[-44,-83]]
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
            id:'but_RetailIntensity',
            symbolName:'but_RetailIntensity'
         },
         {
            id:'btn_Dis',
            symbolName:'btn_Dis'
         },
         {
            id:'But_RetailPOI',
            symbolName:'But_RetailPOI'
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
            ["transform", "translateY", '-303px']
         ],
         "${_Txt_Discover_Better}": [
            ["style", "width", '200px'],
            ["color", "color", 'rgba(204,204,204,1)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '56px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '167px'],
            ["style", "font-size", '12px']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_btn_Val}": [
            ["transform", "translateX", '566px'],
            ["transform", "translateY", '27px'],
            ["style", "cursor", 'pointer']
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
            ["transform", "translateX", '-142px'],
            ["transform", "translateY", '-200px']
         ],
         "${_POI_Com}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-199px'],
            ["transform", "translateX", '-166px']
         ],
         "${_But_RetailPOI}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '-84px'],
            ["transform", "translateX", '-71px']
         ],
         "${_TXT_On}": [
            ["style", "text-align", '']
         ],
         "${_btn_Dis}": [
            ["transform", "translateX", '628px'],
            ["transform", "translateY", '27px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Txt_MapGuangzhou}": [
            ["style", "font-size", '14px'],
            ["transform", "translateX", '572px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '315px'],
            ["style", "width", '207px']
         ],
         "${_POI_Val}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-10px'],
            ["transform", "translateX", '-173px']
         ],
         "${_but_RetailIntensity}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '-83px'],
            ["transform", "translateX", '-44px']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden']
         ],
         "${_TXT_Com}": [
            ["style", "display", 'none']
         ],
         "${_btn_Com}": [
            ["transform", "translateX", '596px'],
            ["transform", "translateY", '27px'],
            ["style", "cursor", 'pointer']
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
            { id: "eid754", tween: [ "style", "${_POI_Com}", "opacity", '1', { fromValue: '0'}], position: 934, duration: 667 },
            { id: "eid755", tween: [ "style", "${_POI_Com}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid756", tween: [ "style", "${_POI_Com}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid757", tween: [ "style", "${_POI_Com}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid758", tween: [ "style", "${_POI_Com}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid623", tween: [ "style", "${_Txt_Discover_Better}", "opacity", '0.800000', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid761", tween: [ "style", "${_POI_Dis}", "opacity", '1', { fromValue: '0'}], position: 1702, duration: 613 },
            { id: "eid763", tween: [ "style", "${_POI_Dis}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid762", tween: [ "style", "${_POI_Dis}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid764", tween: [ "style", "${_POI_Dis}", "display", 'block', { fromValue: 'block'}], position: 2315, duration: 0 },
            { id: "eid728", tween: [ "style", "${_TXT_Com}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid729", tween: [ "style", "${_TXT_Com}", "display", 'block', { fromValue: 'none'}], position: 934, duration: 0 },
            { id: "eid726", tween: [ "style", "${_TXT_Com}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid733", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TXT_Val}', [] ], ""], position: 0 },
            { id: "eid779", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_POI_Val}', [] ], ""], position: 0 },
            { id: "eid775", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_POI_Com}', [] ], ""], position: 934 },
            { id: "eid684", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_TXT_Com}', [] ], ""], position: 934 },
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
"But_xxxx": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[170,30]],
      type: 'image',
      id: 'but_retailPOI_off',
      rect: [-170,-29,130,20],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','z-illustrator/MapButtons/but_retailPOI_off.png']
   },
   {
      transform: [[170,30]],
      type: 'image',
      rect: [-170,-29,130,20],
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
"but_xxxx": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[30,30]],
      type: 'image',
      rect: [-29,-29,130,20],
      id: 'but_retailintensity_off',
      display: 'none',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','z-illustrator/MapButtons/but_retailintensity_off.png']
   },
   {
      transform: [[30,29]],
      id: 'but_retailintensity_on',
      type: 'image',
      rect: [-29,-29,130,20],
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
            ["style", "overflow", 'visible'],
            ["style", "width", '800px']
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
      transform: {},
      id: 'btn_Com_On',
      type: 'image',
      rect: [1,1,35,35],
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
      transform: [[472,49]],
      id: 'Txt_Validate_head',
      text: 'Validate',
      font: ['Open Sans, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      transform: [[574,70]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_par1',
      text: 'Opening new bank branches and ATM locations carry considerable costs. Validating areas based on likely potential is essential to understand the return on new sites for your financial assets.',
      rect: [-572,-29,188,94],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      transform: [[574,185]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_Par2',
      text: 'Map-enabled data can help validate new site locations.',
      rect: [-572,-29,187,29],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      transform: [[574,233]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_Par3',
      text: '1. Locate areas near offices and SMEs',
      rect: [-572,-29,207,16],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      transform: [[574,253]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_Par4',
      text: '2. Find ATM sites based on potential',
      rect: [-572,-29,207,16],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      transform: [[574,273]],
      type: 'text',
      align: 'auto',
      id: 'Txt_Validate_par5',
      text: '3. Estimate potential for new areas',
      rect: [-572,-29,207,16],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Validate_par5}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '574px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '273px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Validate_par1}": [
            ["style", "font-size", '12px'],
            ["style", "height", '94px'],
            ["transform", "translateX", '574px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '70px'],
            ["style", "width", '188px']
         ],
         "${_Txt_Validate_Par2}": [
            ["style", "font-size", '12px'],
            ["style", "height", '29px'],
            ["transform", "translateX", '574px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '185px'],
            ["style", "width", '187px']
         ],
         "${_Txt_Validate_head}": [
            ["style", "font-size", '24px'],
            ["style", "display", 'block'],
            ["transform", "translateX", '472px'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '49px'],
            ["style", "width", '207px']
         ],
         "${symbolSelector}": [
            ["style", "height", '265.709999px'],
            ["style", "width", '208.310017px']
         ],
         "${_Txt_Validate_Par3}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '574px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '233px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Validate_Par4}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '574px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '253px'],
            ["style", "font-size", '11px']
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
            { id: "eid663", tween: [ "style", "${_Txt_Validate_par5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid657", tween: [ "style", "${_Txt_Validate_par5}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid668", tween: [ "style", "${_Txt_Validate_head}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid662", tween: [ "style", "${_Txt_Validate_head}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid408", tween: [ "style", "${_Txt_Validate_Par3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid414", tween: [ "style", "${_Txt_Validate_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid664", tween: [ "style", "${_Txt_Validate_Par4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid658", tween: [ "style", "${_Txt_Validate_Par4}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid666", tween: [ "style", "${_Txt_Validate_Par2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid660", tween: [ "style", "${_Txt_Validate_Par2}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid404", tween: [ "style", "${_Txt_Validate_par5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid406", tween: [ "style", "${_Txt_Validate_Par4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid665", tween: [ "style", "${_Txt_Validate_Par3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid659", tween: [ "style", "${_Txt_Validate_Par3}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid667", tween: [ "style", "${_Txt_Validate_par1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid661", tween: [ "style", "${_Txt_Validate_par1}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 }         ]
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
      transform: [[472,49]],
      type: 'text',
      display: 'none',
      id: 'Txt_Comm_head',
      text: 'Communicate',
      rect: [-469,-48,207,0],
      font: ['Open Sans, sans-serif',24,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: [-570,-29,191,58],
      display: 'none',
      id: 'Txt_Comm_par1',
      align: 'auto',
      text: 'Evaluate and compare potential branch and ATM options with your team. Map-enabled data provides transparency.',
      transform: [[573,70]],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,177,65],
      display: 'none',
      id: 'Txt_Comm_par1Copy',
      align: 'auto',
      text: 'Generate real estate reports based on high potential areas that can help you accelerate the site finding process.',
      transform: [[573,151]],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,201,29],
      display: 'none',
      id: 'Txt_Comm_Par3',
      align: 'auto',
      text: '1. Highlight trade area differences between new site locations',
      transform: [[573,236]],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,207,15],
      display: 'none',
      id: 'Txt_Comm_par5',
      align: 'auto',
      text: '2. Create discussion platform for team',
      transform: [[573,272]],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Comm_par1}": [
            ["style", "width", '191px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '58px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '70px'],
            ["style", "font-size", '12px']
         ],
         "${_Txt_Comm_Par3}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '29px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '236px'],
            ["style", "width", '201px']
         ],
         "${_Txt_Comm_head}": [
            ["style", "width", '207px'],
            ["style", "display", 'none'],
            ["transform", "translateX", '472px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '49px'],
            ["style", "font-size", '24px']
         ],
         "${_Txt_Comm_par1Copy}": [
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'none'],
            ["style", "height", '65px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '151px'],
            ["style", "width", '177px']
         ],
         "${symbolSelector}": [
            ["style", "height", '273px'],
            ["style", "width", '209.299993px']
         ],
         "${_Txt_Comm_par5}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '15px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '272px'],
            ["style", "width", '207px']
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
            { id: "eid679", tween: [ "style", "${_Txt_Comm_par1Copy}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid464", tween: [ "style", "${_Txt_Comm_par5}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid398", tween: [ "style", "${_Txt_Comm_par1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid468", tween: [ "style", "${_Txt_Comm_head}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid392", tween: [ "style", "${_Txt_Comm_par5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid466", tween: [ "style", "${_Txt_Comm_Par3}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid396", tween: [ "style", "${_Txt_Comm_Par3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 }         ]
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
      transform: [[472,49]],
      type: 'text',
      display: 'none',
      id: 'Txt_Discover_head',
      text: 'Discover',
      rect: [-470,-48,144,0],
      font: ['Open Sans, sans-serif',24,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: [-571,-29,185,86],
      display: 'none',
      id: 'Txt_Discover_par1',
      align: 'auto',
      text: 'Find and compare high potential areas within a city. Understand key differences and business drivers to make better, more intelligent decisions.',
      transform: [[573,70]],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,185,51],
      display: 'none',
      id: 'Txt_Discover_par2',
      align: 'auto',
      text: 'Map-enabled data offers key insight you simply cannot get from a spreadsheet.',
      transform: [[573,166]],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,207,16],
      display: 'none',
      id: 'Txt_Discover_Par3',
      align: 'auto',
      text: '1. Discover synergistic brands',
      transform: [[573,233]],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,207,16],
      display: 'none',
      id: 'Txt_Discover_Par4',
      align: 'auto',
      text: '2. Discover POI effecting performance',
      transform: [[573,253]],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Discover_head}": [
            ["style", "font-size", '24px'],
            ["style", "display", 'none'],
            ["transform", "translateX", '472px'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.000000'],
            ["transform", "translateY", '49px'],
            ["style", "width", '144px']
         ],
         "${symbolSelector}": [
            ["style", "height", '239.360001px'],
            ["style", "width", '207.46px']
         ],
         "${_Txt_Discover_Par3}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '233px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Discover_par2}": [
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'none'],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '166px'],
            ["style", "width", '185px']
         ],
         "${_Txt_Discover_Par4}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '253px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Discover_par1}": [
            ["style", "width", '185px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '86px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '70px'],
            ["style", "font-size", '12px']
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
            { id: "eid477", tween: [ "style", "${_Txt_Discover_Par3}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid683", tween: [ "style", "${_Txt_Discover_par2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 399 },
            { id: "eid476", tween: [ "style", "${_Txt_Discover_Par4}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid385", tween: [ "style", "${_Txt_Discover_Par4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 399 },
            { id: "eid481", tween: [ "style", "${_Txt_Discover_head}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid388", tween: [ "style", "${_Txt_Discover_par1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 399 },
            { id: "eid386", tween: [ "style", "${_Txt_Discover_Par3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 399 },
            { id: "eid480", tween: [ "style", "${_Txt_Discover_par1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
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
      transform: [[-121,-208]],
      id: 'Label_Com_Big2',
      type: 'image',
      rect: [400,271,205,158],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_Label_Com_Big2.png']
   },
   {
      transform: [[31,-132]],
      type: 'text',
      align: 'auto',
      id: 'Text2',
      text: 'Demographic Breakdown',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[31,-112]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy',
      text: 'Total Population....................12,540',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-100]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy2',
      text: 'Daytime Population...............21,500',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-88]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy3',
      text: 'Household Number.................3,210',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-60]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy7',
      text: 'Competition & Synergy Brands',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[31,-40]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy6',
      text: 'Primary Competitors……….....……….1',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-28]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy5',
      text: 'Secondary Competitors..................2',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[31,-16]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy4',
      text: 'Synergy Brands...............................1',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-277,114],{},{},[1.23,1.17]],
      id: 'ER_Labels',
      type: 'image',
      rect: [400,87,100,30],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_Label_l.png']
   },
   {
      transform: [[-317,8]],
      type: 'text',
      id: 'Existing_Resturants',
      text: 'Existing Bank Branch',
      font: ['Open Sans, sans-serif',10,'rgba(255,255,255,1.00)','normal','none',''],
      rect: [440,206,0,0]
   },
   {
      transform: [[130,-61]],
      id: 'POI_Val2',
      type: 'image',
      rect: [126,138,20,20],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_POI_Val.png']
   },
   {
      transform: [[37,40]],
      id: 'POI_Val2Copy',
      type: 'image',
      rect: [126,138,20,20],
      fill: ['rgba(0,0,0,0)','../images/edge/BF_POI_Val.png']
   },
   {
      transform: [[39,15]],
      id: 'POI_Black',
      type: 'image',
      rect: [125,162,20,20],
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
         "${_ER_Labels}": [
            ["transform", "scaleX", '1.23'],
            ["transform", "translateY", '114px'],
            ["transform", "scaleY", '1.17'],
            ["transform", "translateX", '-277px']
         ],
         "${_POI_Val2Copy}": [
            ["transform", "translateX", '37px'],
            ["transform", "translateY", '40px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-112px'],
            ["transform", "translateX", '31px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy3}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-88px'],
            ["transform", "translateX", '31px'],
            ["style", "font-size", '10px']
         ],
         "${_Existing_Resturants}": [
            ["transform", "translateX", '-317px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '8px'],
            ["style", "font-size", '10px']
         ],
         "${_POI_Black}": [
            ["transform", "translateX", '39px'],
            ["transform", "translateY", '15px']
         ],
         "${_Text2Copy7}": [
            ["transform", "translateY", '-60px'],
            ["transform", "translateX", '31px'],
            ["style", "font-size", '12px']
         ],
         "${_PulsingCircle2}": [
            ["transform", "scaleX", '0.84'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '-4px'],
            ["transform", "scaleY", '0.84']
         ],
         "${_Text2Copy2}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '31px'],
            ["transform", "translateY", '-100px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy5}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-28px'],
            ["transform", "translateX", '31px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy4}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '31px'],
            ["transform", "translateY", '-16px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text2}": [
            ["transform", "translateY", '-132px'],
            ["transform", "translateX", '31px'],
            ["style", "font-size", '12px']
         ],
         "${_Label_Com_Big2}": [
            ["transform", "translateX", '-121px'],
            ["transform", "translateY", '-208px']
         ],
         "${_Text2Copy6}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '31px'],
            ["transform", "translateY", '-40px'],
            ["style", "font-size", '10px']
         ],
         "${_POI_Val2}": [
            ["transform", "translateX", '130px'],
            ["transform", "translateY", '-61px']
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
         "${symbolSelector}": [
            ["style", "height", '160.07862px'],
            ["style", "width", '160.07862px']
         ],
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
            ["style", "opacity", '0.2957421875'],
            ["style", "height", '136px'],
            ["color", "border-color", 'rgba(0,0,0,1.00)'],
            ["transform", "translateY", '-168px'],
            ["style", "border-width", '1px']
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
         "${_Circle}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '-86px'],
            ["transform", "translateX", '-58px']
         ],
         "${symbolSelector}": [
            ["style", "height", '171px'],
            ["style", "width", '170px']
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
            { id: "eid745", tween: [ "transform", "${_Circle}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 1000 },
            { id: "eid744", tween: [ "transform", "${_Circle}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 1000 }         ]
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
      transform: [[-355,-215],{},{},[0.84,0.84]],
      rect: [441,320,0,0]
   },
   {
      id: 'PulsingCircleCopy',
      type: 'rect',
      transform: [[-119,-95],{},{},[0.84,0.84]],
      rect: [441,320,0,0]
   },
   {
      rect: [489,290,208,158],
      id: 'Label_Com_Big',
      transform: [[-310,-125],{},{},[1.02,1.02]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/BF_Label_Com_Big.png']
   },
   {
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      transform: [[-75,-33]],
      id: 'Text2',
      text: 'Potential Branch #1',
      align: 'auto',
      rect: [268,206,0,0]
   },
   {
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[-75,-13]],
      id: 'Text2Copy',
      text: 'Total Population.......................12,350',
      align: 'auto',
      rect: [268,206,0,0]
   },
   {
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[-75]],
      id: 'Text2Copy2',
      text: 'Daytime Population..................21,500',
      align: 'auto',
      rect: [268,206,0,0]
   },
   {
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[-75,12]],
      id: 'Text2Copy3',
      text: 'Average Wealth...RMB 35,350 / Month',
      align: 'auto',
      rect: [268,206,0,0]
   },
   {
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      transform: [[-75,43]],
      id: 'Text2Copy7',
      text: 'Potential Branch #2',
      align: 'auto',
      rect: [268,206,0,0]
   },
   {
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[-75,63]],
      id: 'Text2Copy6',
      text: 'Total Population…………….……....10,120',
      align: 'auto',
      rect: [268,206,0,0]
   },
   {
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[-75,76]],
      id: 'Text2Copy5',
      text: 'Daytime Population…….......…….31,110',
      align: 'auto',
      rect: [268,206,0,0]
   },
   {
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[-75,89]],
      id: 'Text2Copy4',
      text: 'Average Wealth....RMB 55,200 / Month',
      align: 'auto',
      rect: [268,206,0,0]
   },
   {
      rect: [102,205,20,20],
      id: 'POI_Val2',
      transform: [[53,-31]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/BF_POI_Val.png']
   },
   {
      rect: [514,295,20,20],
      id: 'POI_Val3',
      transform: [[-123,-2]],
      type: 'image',
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
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '-75px'],
            ["transform", "translateY", '-13px'],
            ["style", "font-size", '10px']
         ],
         "${_PulsingCircleCopy}": [
            ["transform", "translateX", '-119px'],
            ["transform", "scaleX", '0.84'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-95px'],
            ["transform", "scaleY", '0.84']
         ],
         "${_Text2Copy7}": [
            ["transform", "translateY", '43px'],
            ["transform", "translateX", '-75px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2}": [
            ["transform", "translateY", '-33px'],
            ["transform", "translateX", '-75px'],
            ["style", "font-size", '12px']
         ],
         "${_POI_Val3}": [
            ["transform", "translateX", '-123px'],
            ["transform", "translateY", '-2px']
         ],
         "${_Text2Copy2}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-0px'],
            ["transform", "translateX", '-75px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy5}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '-75px'],
            ["transform", "translateY", '76px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy4}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '89px'],
            ["transform", "translateX", '-75px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text2Copy6}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '63px'],
            ["transform", "translateX", '-75px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy3}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '-75px'],
            ["transform", "translateY", '13px'],
            ["style", "font-size", '10px']
         ],
         "${_Label_Com_Big}": [
            ["transform", "scaleX", '1.02'],
            ["transform", "translateY", '-125px'],
            ["transform", "translateX", '-310px'],
            ["transform", "scaleY", '1.02']
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
      rect: [116,132,295,351],
      id: 'tradeDraws',
      transform: [[17,-80]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/BF_tradeDraws.png']
   },
   {
      rect: [66,192,267,59],
      transform: [[121,22]],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(156,189,66,1.00)']
   },
   {
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      transform: [[96,7]],
      id: 'Text4',
      text: 'Compare areas by competitor count, target consumers, and points of interest.',
      align: 'center',
      rect: [98,219,250,36]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text4}": [
            ["style", "text-align", 'center'],
            ["style", "height", '36px'],
            ["transform", "translateX", '96px'],
            ["transform", "translateY", '7px'],
            ["style", "width", '250px']
         ],
         "${_tradeDraws}": [
            ["style", "opacity", '0'],
            ["transform", "translateX", '17px'],
            ["transform", "translateY", '-80px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(156,189,66,1.00)'],
            ["transform", "translateX", '121px'],
            ["style", "height", '59px'],
            ["transform", "translateY", '22px'],
            ["style", "width", '267px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '800px']
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
      type: 'text',
      rect: [33,76,130,15],
      align: 'center',
      id: 'TXT_Off',
      text: 'Retail Intensity : Off',
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      transform: [[-32,-73]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_Off}": [
            ["style", "text-align", 'center'],
            ["style", "width", '130px'],
            ["transform", "translateX", '-32px'],
            ["transform", "translateY", '-73px'],
            ["style", "font-size", '10px']
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
"but_RetailIntensity": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-165,-155]],
      display: 'none',
      type: 'rect',
      id: 'Btn_RI_Off',
      rect: [166,156,0,0]
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
      type: 'text',
      rect: [33,76,130,15],
      align: 'center',
      id: 'TXT_On',
      text: 'Retail Intensity : On',
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      transform: [[-32,-73]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
            ["transform", "translateX", '-32px'],
            ["style", "width", '130px'],
            ["style", "text-align", 'center'],
            ["transform", "translateY", '-73px'],
            ["style", "font-size", '10px']
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
      transform: [[0,27]],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      rect: [0,-27,130,20],
      id: 'On',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(103,103,103,1.00)']
   },
   {
      type: 'text',
      rect: [33,76,130,15],
      align: 'center',
      id: 'TXT_Off',
      text: 'Retail POI : Off',
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      transform: [[-34,-73]]
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
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '20px'],
            ["transform", "translateY", '27.44px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '130px']
         ],
         "${_TXT_Off}": [
            ["style", "text-align", 'center'],
            ["style", "font-size", '10px'],
            ["transform", "translateX", '-34px'],
            ["transform", "translateY", '-73px'],
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
      rect: [28,65,0,0],
      transform: [[-27,-64]]
   },
   {
      rect: [105,93,0,0],
      display: 'none',
      transform: [[-104,-92]],
      id: 'Btn_RPOI_Off',
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
      fill: ['rgba(243,119,34,1.00)']
   },
   {
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      transform: [[-34,-73]],
      align: 'center',
      id: 'TXT_On',
      text: 'Retail POI : On',
      type: 'text',
      rect: [33,76,130,15]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
            ["transform", "translateX", '-34px'],
            ["style", "font-size", '10px'],
            ["style", "text-align", 'center'],
            ["transform", "translateY", '-73px'],
            ["style", "width", '130px']
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
