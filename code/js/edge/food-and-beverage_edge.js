/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='../images/edge/';

var fonts = {};
   fonts['\'Eater\'']='<link href=\'http://fonts.googleapis.com/css?family=Eater\' rel=\'stylesheet\' type=\'text/css\'>';
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
            text:"Map: Bangkok, Thailand",
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
            id:'but_RetailIntensity2',
            type:'rect',
            rect:[234,304,0,0],
            cursor:['pointer'],
            transform:[[-203,-273]]
         },
         {
            id:'But_RetailPOI2',
            type:'rect',
            rect:[232,268,0,0],
            cursor:['pointer'],
            transform:[[-56,-237]]
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
            id:'But_RetailPOI2',
            symbolName:'But_RetailPOI'
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
            id:'but_RetailIntensity2',
            symbolName:'but_RetailIntensity'
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
         "${_but_RetailIntensity2}": [
            ["transform", "translateX", '-203px'],
            ["transform", "translateY", '-273px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_Com}": [
            ["transform", "translateX", '596px'],
            ["transform", "translateY", '27px'],
            ["style", "cursor", 'pointer']
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
         "${_POI_Val}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-10px'],
            ["transform", "translateX", '-173px']
         ],
         "${_POI_Com}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-199px'],
            ["transform", "translateX", '-166px']
         ],
         "${_But_RetailPOI2}": [
            ["transform", "translateX", '-56px'],
            ["transform", "translateY", '-237px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Txt_MapGuangzhou}": [
            ["style", "font-size", '14px'],
            ["transform", "translateX", '573px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '315px'],
            ["style", "width", '207px']
         ],
         "${_btn_Dis}": [
            ["transform", "translateX", '628px'],
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
            { id: "eid749", tween: [ "style", "${_POI_Val}", "opacity", '0.95999997854233', { fromValue: '0'}], position: 0, duration: 803 },
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
      transform: [[-282,-149],[0,0],[0],[1,1]],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_BaseMap.png']
   },
   {
      id: 'Heatmap',
      type: 'rect',
      rect: [0,0,0,0],
      transform: {}
   },
   {
      id: 'POI_ALL',
      type: 'rect',
      rect: [-100,40,0,0],
      transform: [[99,-40]]
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
      transform: [[-126,-192]],
      id: 'POI_small',
      type: 'image',
      rect: [127,193,800,400],
      fill: ['rgba(0,0,0,0)','../images/edge/POI_small.png']
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
            ["style", "top", '250px']
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
      text: 'Validate',
      font: ['Open Sans, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[472,49]]
   },
   {
      rect: [-572,-29,197,94],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_par1',
      text: 'Maps overlaid with business and market data can help you predict the success of a potential site by finding analog comparisons in your existing store network.',
      transform: [[573,70]],
      type: 'text'
   },
   {
      rect: [-572,-29,187,49],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_Par2',
      text: 'Utilizing data in this way can lead to better sales, marketing, and expansion planning.',
      transform: [[573,170]],
      type: 'text'
   },
   {
      rect: [-572,-29,207,16],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_Par3',
      text: '1. Find analog stores for comparison',
      transform: [[573,240]],
      type: 'text'
   },
   {
      rect: [-572,-29,207,16],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_Par4',
      text: '2. Predict the likelihood for success',
      transform: [[573,260]],
      type: 'text'
   },
   {
      rect: [-572,-29,207,16],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal'],
      align: 'auto',
      id: 'Txt_Validate_par5',
      text: '3. Estimate potential for new areas',
      transform: [[573,280]],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Validate_par5}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '280px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Validate_par1}": [
            ["style", "font-size", '12px'],
            ["style", "height", '94px'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '70px'],
            ["style", "width", '197px']
         ],
         "${symbolSelector}": [
            ["style", "height", '265.709999px'],
            ["style", "width", '208.310017px']
         ],
         "${_Txt_Validate_head}": [
            ["style", "font-size", '24px'],
            ["style", "display", 'block'],
            ["transform", "translateX", '470px'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '49px'],
            ["style", "width", '207px']
         ],
         "${_Txt_Validate_Par2}": [
            ["style", "font-size", '12px'],
            ["style", "height", '49px'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '170px'],
            ["style", "width", '187px']
         ],
         "${_Txt_Validate_Par3}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '240px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Validate_Par4}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '16px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '260px'],
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
            { id: "eid665", tween: [ "style", "${_Txt_Validate_Par3}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid659", tween: [ "style", "${_Txt_Validate_Par3}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid666", tween: [ "style", "${_Txt_Validate_Par2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid660", tween: [ "style", "${_Txt_Validate_Par2}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid664", tween: [ "style", "${_Txt_Validate_Par4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid658", tween: [ "style", "${_Txt_Validate_Par4}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid406", tween: [ "style", "${_Txt_Validate_Par4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid404", tween: [ "style", "${_Txt_Validate_par5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
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
      rect: [-469,-48,207,0],
      font: ['Open Sans, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      display: 'none',
      id: 'Txt_Comm_head',
      text: 'Communicate',
      transform: [[470,49]],
      type: 'text'
   },
   {
      type: 'text',
      rect: [-570,-29,200,58],
      display: 'none',
      id: 'Txt_Comm_par1',
      align: 'auto',
      text: 'Streamline the communication process within your team and with 3rd parties.',
      transform: [[573,70]],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,191,65],
      display: 'none',
      id: 'Txt_Comm_par1Copy',
      align: 'auto',
      text: 'Generate real estate reports based on high potential areas that can help you accelerate the site finding process.',
      transform: [[573,133]],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,208,16],
      display: 'none',
      id: 'Txt_Comm_Par3',
      align: 'auto',
      text: '1. Clearly highlight areas with potential',
      transform: [[572,215]],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,207,12],
      display: 'none',
      id: 'Txt_Comm_Par4',
      align: 'auto',
      text: '2. Create and share target area reports',
      transform: [[572,235]],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-570,-29,207,28],
      display: 'none',
      id: 'Txt_Comm_par5',
      align: 'auto',
      text: '3. Enable 3rd parties to understand real estate and target area requirements',
      transform: [[573,255]],
      font: ['\'Open Sans\', sans-serif',11,'rgba(204,204,204,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Txt_Comm_par1}": [
            ["style", "width", '204px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '58px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '70px'],
            ["style", "font-size", '12px']
         ],
         "${_Txt_Comm_Par4}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '12px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '236px'],
            ["style", "width", '207px']
         ],
         "${_Txt_Comm_Par3}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '16px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '215px'],
            ["style", "width", '208px']
         ],
         "${_Txt_Comm_head}": [
            ["style", "width", '207px'],
            ["style", "display", 'none'],
            ["transform", "translateX", '470px'],
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
            ["transform", "translateY", '133px'],
            ["style", "width", '191px']
         ],
         "${symbolSelector}": [
            ["style", "height", '253.359998px'],
            ["style", "width", '209.299993px']
         ],
         "${_Txt_Comm_par5}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "height", '28px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '255px'],
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
            { id: "eid394", tween: [ "style", "${_Txt_Comm_Par4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid467", tween: [ "style", "${_Txt_Comm_par1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid679", tween: [ "style", "${_Txt_Comm_par1Copy}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid400", tween: [ "style", "${_Txt_Comm_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid682", tween: [ "style", "${_Txt_Comm_par1Copy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid398", tween: [ "style", "${_Txt_Comm_par1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid464", tween: [ "style", "${_Txt_Comm_par5}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "style", "${_Txt_Comm_Par3}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_Txt_Comm_head}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid392", tween: [ "style", "${_Txt_Comm_par5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 394 },
            { id: "eid465", tween: [ "style", "${_Txt_Comm_Par4}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
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
      rect: [-470,-48,144,0],
      font: ['Open Sans, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      display: 'none',
      id: 'Txt_Discover_head',
      text: 'Discover',
      transform: [[471,49]],
      type: 'text'
   },
   {
      type: 'text',
      rect: [-571,-29,204,86],
      display: 'none',
      id: 'Txt_Discover_par1',
      align: 'auto',
      text: 'Through correlation analyses, identify geo-spatial attributes that contribute to the positive and negative performance of your restaurant locations.',
      transform: [[573,70]],
      font: ['\'Open Sans\', sans-serif',12,'rgba(204,204,204,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [-571,-29,204,51],
      display: 'none',
      id: 'Txt_Discover_par2',
      align: 'auto',
      text: 'Better plan your sales, marketing, and development with insight on what effects performance.',
      transform: [[572,166]],
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
      transform: [[572,253]],
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
            ["transform", "translateX", '470px'],
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
            ["style", "width", '204px']
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
            ["style", "width", '204px'],
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
      rect: [184,2,0,0]
   },
   {
      transform: [[95,-64]],
      id: 'Val_Label_Big',
      type: 'image',
      rect: [76,189,197,164],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Val_Label_Big.png']
   },
   {
      transform: [[-86,-64]],
      type: 'text',
      align: 'auto',
      id: 'Text2',
      text: 'Demographic Breakdown',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[-86,-44]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy',
      text: 'Total Population....................12,540',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-86,-32]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy2',
      text: 'Daytime Population...............21,500',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-86,-20]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy3',
      text: 'Household Number.................3,210',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-86,7]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy7',
      text: 'Competition & Synergy Brands',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[-86,27]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy6',
      text: 'Primary Competitors……….....……….1',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-86,39]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy5',
      text: 'Secondary Competitors..................2',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[-86,51]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy4',
      text: 'Synergy Brands...............................1',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[9,-10],{},{},[1.12,1.17]],
      id: 'ER_Labels',
      type: 'image',
      rect: [400,87,100,30],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Label_l.png']
   },
   {
      transform: [[180,-66],[180],{},[0.9]],
      id: 'Label',
      type: 'image',
      rect: [266,327,80,30],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Label.png']
   },
   {
      transform: [[-26,-117]],
      type: 'text',
      id: 'Existing_Resturants',
      text: 'Existing Restaurant',
      font: ['Open Sans, sans-serif',10,'rgba(255,255,255,1.00)','normal','none',''],
      rect: [440,206,0,0]
   },
   {
      transform: [[19,57]],
      type: 'text',
      id: 'Existing_ResturantsCopy',
      text: 'Competitor',
      font: ['Open Sans, sans-serif',10,'rgba(255,255,255,1.00)','normal','none',''],
      rect: [440,206,0,0]
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
            ["transform", "scaleX", '0.9'],
            ["transform", "translateY", '-66px'],
            ["transform", "translateX", '180px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-44px'],
            ["transform", "translateX", '-86px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy3}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-20px'],
            ["transform", "translateX", '-86px'],
            ["style", "font-size", '10px']
         ],
         "${_Existing_Resturants}": [
            ["transform", "translateX", '-26px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '-117px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy7}": [
            ["transform", "translateY", '7px'],
            ["transform", "translateX", '-86px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2Copy6}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '-86px'],
            ["transform", "translateY", '27px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2}": [
            ["transform", "translateY", '-64px'],
            ["transform", "translateX", '-86px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2Copy2}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '-86px'],
            ["transform", "translateY", '-32px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy5}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '40px'],
            ["transform", "translateX", '-86px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy4}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '-86px'],
            ["transform", "translateY", '52px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Existing_ResturantsCopy}": [
            ["transform", "translateX", '19px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '57px'],
            ["style", "font-size", '10px']
         ],
         "${_Val_Label_Big}": [
            ["transform", "translateX", '95px'],
            ["transform", "translateY", '-64px']
         ],
         "${_ER_Labels}": [
            ["transform", "scaleX", '1.12'],
            ["transform", "translateX", '9px'],
            ["transform", "translateY", '-10px'],
            ["transform", "scaleY", '1.17']
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
            ["transform", "translateX", '-58px'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '-86px']
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
      rect: [441,320,0,0],
      transform: [[-251,-308],{},{},[0.84,0.84]]
   },
   {
      transform: [[110,-233],{},{},[1.04]],
      id: 'Label_Com_Big',
      type: 'image',
      rect: [183,300,197,164],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Label_Com_Big.png']
   },
   {
      transform: [[42,-126]],
      type: 'text',
      align: 'auto',
      id: 'Text2',
      text: 'Real Estate Requirements',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[42,-106]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy',
      text: 'Size...........................300M2 - 400M2',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[42,-94]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy2',
      text: 'Lease………...……..50,000THB / Month',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[42,-82]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy3',
      text: 'Age...................................&lt; 30 Years',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[42,-69]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy8',
      text: 'Visibility Grade………..………………. &gt; 4',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[42,-42]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy7',
      text: 'Additional Requirements',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[42,-24]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy6',
      text: 'Lease Length……….………………3 Years',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      transform: [[42,-11]],
      type: 'text',
      align: 'auto',
      id: 'Text2Copy5',
      text: 'Competitor Brand................... &gt; 50M',
      rect: [268,206,0,0],
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1.00)','normal','none','normal']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: [12,120,262,64],
      fill: ['rgba(156,189,66,1.00)']
   },
   {
      transform: [[2,-80]],
      type: 'text',
      align: 'center',
      id: 'Text4',
      text: 'Using maps and GIS, generate reports for agents to accelerate site finding.',
      rect: [23,213,228,35],
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal']
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
            ["transform", "translateY", '-308px'],
            ["transform", "translateX", '-251px'],
            ["transform", "scaleY", '0.84']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '42px'],
            ["transform", "translateY", '-106px'],
            ["style", "font-size", '10px']
         ],
         "${_Label_Com_Big}": [
            ["transform", "scaleX", '1.04'],
            ["transform", "translateY", '-233px'],
            ["transform", "translateX", '110px']
         ],
         "${_Text2Copy3}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '42px'],
            ["transform", "translateY", '-82px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy7}": [
            ["transform", "translateY", '-42px'],
            ["transform", "translateX", '42px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2Copy2}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-94px'],
            ["transform", "translateX", '42px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy5}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateX", '42px'],
            ["transform", "translateY", '-11px'],
            ["style", "font-size", '10px']
         ],
         "${_Text2Copy6}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-24px'],
            ["transform", "translateX", '42px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text2}": [
            ["transform", "translateY", '-126px'],
            ["transform", "translateX", '42px'],
            ["style", "font-size", '12px']
         ],
         "${_Rectangle}": [
            ["style", "height", '64px'],
            ["color", "background-color", 'rgba(156,189,66,1.00)'],
            ["style", "width", '262px']
         ],
         "${_Text2Copy8}": [
            ["color", "color", 'rgba(209,211,212,1.00)'],
            ["transform", "translateY", '-69px'],
            ["transform", "translateX", '42px'],
            ["style", "font-size", '10px']
         ],
         "${_Text4}": [
            ["transform", "translateX", '3px'],
            ["style", "width", '228px'],
            ["style", "height", '35px'],
            ["style", "text-align", 'center'],
            ["transform", "translateY", '-80px'],
            ["style", "font-size", '12px']
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
      transform: [[191,-24],{},{},[0.66,0.66]],
      rect: [184,2,0,0]
   },
   {
      type: 'image',
      id: 'Label_Dis_Big',
      rect: [339,290,197,126],
      transform: [[-61,-199],{},{},[1.159,1.159]],
      fill: ['rgba(0,0,0,0)','../images/edge/FB_Label_Dis_Big.png']
   },
   {
      type: 'text',
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [268,206,0,0],
      id: 'Text2',
      text: 'Geo-Spatial Analysis',
      align: 'auto',
      transform: [[5,-106]]
   },
   {
      type: 'text',
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1)','normal','none','normal'],
      rect: [181,185,207,25],
      id: 'Text5',
      text: 'These points of interest seem to be within 100M - 200M of top performing sites.',
      align: 'auto',
      transform: [[92,-65]]
   },
   {
      type: 'text',
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1)','normal','none','normal'],
      rect: [181,185,78,44],
      id: 'Text5Copy',
      text: 'Subway Exit Intersection Häagen-Dazs',
      align: 'auto',
      transform: [[92,-20]]
   },
   {
      type: 'text',
      font: ['\'Open Sans\', sans-serif',10,'rgba(209,211,212,1)','normal','none','normal'],
      rect: [181,185,51,44],
      id: 'Text5Copy2',
      text: 'McDonald’s Starbucks 7-11',
      align: 'auto',
      transform: [[187,-20]]
   },
   {
      type: 'image',
      id: 'POI_green2',
      rect: [447,262,25,25],
      transform: [[0,-211]],
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
         "${_Text5Copy2}": [
            ["transform", "translateX", '187px'],
            ["transform", "translateY", '-20px'],
            ["style", "width", '51px']
         ],
         "${_Text5Copy}": [
            ["transform", "translateX", '92px'],
            ["transform", "translateY", '-20px'],
            ["style", "width", '78px']
         ],
         "${_Text2}": [
            ["transform", "translateY", '-106px'],
            ["transform", "translateX", '5px'],
            ["style", "font-size", '12px']
         ],
         "${_PulsingCircle2}": [
            ["transform", "scaleX", '0.66'],
            ["transform", "scaleY", '0.66'],
            ["transform", "translateY", '-24px'],
            ["transform", "translateX", '191px']
         ],
         "${_Label_Dis_Big}": [
            ["transform", "scaleX", '1.15999'],
            ["transform", "scaleY", '1.15999'],
            ["transform", "translateY", '-199px'],
            ["transform", "translateX", '-61px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '800px']
         ],
         "${_POI_green2}": [
            ["transform", "translateY", '-211px'],
            ["transform", "translateX", '0px']
         ],
         "${_Text5}": [
            ["style", "height", '25px'],
            ["transform", "translateY", '-65px'],
            ["transform", "translateX", '92px'],
            ["style", "width", '207px']
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
      type: 'text',
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [33,76,130,15],
      id: 'TXT_Off',
      text: 'Retail Intensity : Off',
      align: 'center',
      transform: [[-32,-73]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_On}": [
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
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [33,76,130,15],
      id: 'TXT_On',
      text: 'Retail Intensity : On',
      align: 'center',
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
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [33,76,130,15],
      id: 'TXT_Off',
      text: 'Retail POI : Off',
      align: 'center',
      transform: [[-34,-73]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_Off}": [
            ["style", "text-align", 'center'],
            ["style", "font-size", '10px'],
            ["transform", "translateX", '-34px'],
            ["transform", "translateY", '-73px'],
            ["style", "width", '130px']
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
      type: 'rect',
      id: 'Btn_RPOI_Off',
      rect: [105,93,0,0],
      display: 'none',
      transform: [[-104,-92]]
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
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      rect: [33,76,130,15],
      id: 'TXT_On',
      text: 'Retail POI : On',
      align: 'center',
      transform: [[-34,-73]]
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
