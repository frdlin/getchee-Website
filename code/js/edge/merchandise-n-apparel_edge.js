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
            id:'Bundle_ALLMAP',
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
            text:"Map: Guangzhou, China",
            align:"auto",
            font:['\'Open Sans\', sans-serif',14,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[574,315]]
         },
         {
            id:'Txt_Discover_head',
            type:'text',
            rect:[101,21,144,0],
            text:"Discover",
            font:['Open Sans, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[471,49]]
         },
         {
            id:'Txt_Discover_par1',
            type:'text',
            rect:[0,40,189,97],
            text:"Correlation analyses of your performance data against getchee’s market data can lead to the discovery of factors that positively affect the performance of your retail stores.",
            align:"auto",
            font:['\'Open Sans\', sans-serif',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[574,70]]
         },
         {
            id:'Txt_Discover_Par2',
            type:'text',
            rect:[0,40,204,51],
            text:"Better plan your sales, marketing, and development with insight on what effects performance.",
            align:"auto",
            font:['\'Open Sans\', sans-serif',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[575,183]]
         },
         {
            id:'Txt_Discover_Par3',
            type:'text',
            rect:[0,40,207,16],
            text:"1. Discover synergistic brands",
            align:"auto",
            font:['\'Open Sans\', sans-serif',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[575,243]]
         },
         {
            id:'Txt_Discover_Par4',
            type:'text',
            rect:[0,40,207,16],
            text:"2. Discover POI effecting performance",
            align:"auto",
            font:['\'Open Sans\', sans-serif',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[574,263]]
         },
         {
            id:'Txt_Comm_head',
            type:'text',
            rect:[101,21,207,0],
            text:"Communicate",
            font:['Open Sans, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[470,49]]
         },
         {
            id:'Txt_Comm_par1',
            type:'text',
            rect:[0,40,204,119],
            text:"This example shows a marketing campaign aimed at increasing weekend revenue. The success can be shared across the organization, and can then be reproduced in other areas with similar retail and demographic profiles.",
            align:"auto",
            font:['\'Open Sans\', sans-serif',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[575,70]]
         },
         {
            id:'Txt_Comm_Par3',
            type:'text',
            rect:[0,40,208,16],
            text:"1. Increase transparency across teams",
            align:"auto",
            font:['\'Open Sans\', sans-serif',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[574,203]]
         },
         {
            id:'Txt_Comm_Par4',
            type:'text',
            rect:[0,40,207,32],
            text:"2. Data from different departments can be shared and seen together",
            align:"auto",
            font:['\'Open Sans\', sans-serif',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[574,223]]
         },
         {
            id:'Txt_Comm_par5',
            type:'text',
            rect:[0,40,207,28],
            text:"3. Allow business units to understand what effect they have on each other",
            align:"auto",
            font:['\'Open Sans\', sans-serif',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[575,258]]
         },
         {
            id:'Txt_Validate_head',
            type:'text',
            rect:[101,21,207,0],
            text:"Validate",
            font:['Open Sans, sans-serif',24,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[471,49]]
         },
         {
            id:'Txt_Validate_par1',
            type:'text',
            rect:[0,40,197,94],
            text:"Maps overlaid with business and market data can help you predict the success of a potential site by finding analog comparisons in your existing store network.",
            align:"auto",
            font:['\'Open Sans\', sans-serif',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,70]]
         },
         {
            id:'Txt_Validate_Par2',
            type:'text',
            rect:[0,40,187,49],
            text:"Utilizing data in this way can lead to better sales, marketing, and expansion planning.",
            align:"auto",
            font:['\'Open Sans\', sans-serif',12,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,170]]
         },
         {
            id:'Txt_Validate_Par3',
            type:'text',
            rect:[0,40,207,16],
            text:"1. Find analog stores for comparison",
            align:"auto",
            font:['\'Open Sans\', sans-serif',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,240]]
         },
         {
            id:'Txt_Validate_Par4',
            type:'text',
            rect:[0,40,207,16],
            text:"2. Predict the likelihood for success",
            align:"auto",
            font:['\'Open Sans\', sans-serif',11,"rgba(204,204,204,1.00)","normal","none","normal"],
            transform:[[573,260]]
         },
         {
            id:'Txt_Validate_par5',
            type:'text',
            rect:[0,40,207,16],
            text:"3. Estimate potential for new areas",
            align:"auto",
            font:['\'Open Sans\', sans-serif',11,"rgba(204,204,204,1.00)","normal","none","normal"],
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
         },
         {
            id:'But_RetailPOI_1',
            type:'rect',
            rect:[222,146,0,0],
            cursor:['pointer'],
            transform:[[-47,-115]]
         },
         {
            id:'but_RetailIntensity_1',
            type:'rect',
            rect:[52,0,0,0],
            cursor:['pointer'],
            transform:[[-21,30]]
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
            id:'btn_Com',
            symbolName:'btn_Com'
         },
         {
            id:'but_RetailIntensity_1',
            symbolName:'but_RetailIntensity_1'
         },
         {
            id:'Bundle_ALLMAP',
            symbolName:'Bundle_ALLMAP_test'
         },
         {
            id:'SidePanelMove',
            symbolName:'SidePanelMove'
         },
         {
            id:'btn_Dis',
            symbolName:'btn_Dis'
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
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '280px'],
            ["style", "width", '207px']
         ],
         "${_Txt_Validate_Par4}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '260px'],
            ["style", "width", '207px']
         ],
         "${_btn_Com}": [
            ["transform", "translateX", '597px'],
            ["transform", "translateY", '28px'],
            ["style", "cursor", 'pointer']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_But_RetailPOI_1}": [
            ["transform", "translateX", '-48px'],
            ["transform", "translateY", '-115px'],
            ["style", "cursor", 'pointer']
         ],
         "${_but_RetailIntensity_1}": [
            ["transform", "translateX", '-21.75px'],
            ["transform", "translateY", '30px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Txt_Validate_Par3}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '240px'],
            ["style", "width", '207px']
         ],
         "${_Txt_Validate_Par2}": [
            ["style", "width", '187px'],
            ["style", "height", '49px'],
            ["transform", "translateX", '573px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '170px'],
            ["style", "font-size", '12px']
         ],
         "${_Txt_Discover_Par3}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '243px'],
            ["style", "width", '207px']
         ],
         "${_btn_Dis}": [
            ["transform", "translateX", '629px'],
            ["transform", "translateY", '28px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Txt_Discover_Par2}": [
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '51px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '183px'],
            ["style", "width", '204px']
         ],
         "${_Bundle_ALLMAP}": [
            ["transform", "translateX", '-141px'],
            ["transform", "translateY", '-199px']
         ],
         "${_Txt_Comm_par1}": [
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '119px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '70px'],
            ["style", "width", '204px']
         ],
         "${_POI_Dis}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-217px'],
            ["transform", "translateX", '-744px']
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
         "${_Txt_Comm_head}": [
            ["style", "font-size", '24px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '471px'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '49px'],
            ["style", "width", '207px']
         ],
         "${_POI_Com}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-224px'],
            ["transform", "translateX", '-780px']
         ],
         "${_Txt_Discover_Par4}": [
            ["style", "font-size", '11px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '263px'],
            ["style", "width", '207px']
         ],
         "${_POI_Val}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-225px'],
            ["transform", "translateX", '-839px']
         ],
         "${_Txt_Discover_par1}": [
            ["style", "font-size", '12px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '97px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '70px'],
            ["style", "width", '189px']
         ],
         "${_Txt_Discover_head}": [
            ["style", "width", '144px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '471px'],
            ["style", "opacity", '0.000000'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '49px'],
            ["style", "font-size", '24px']
         ],
         "${_Txt_Comm_Par4}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '32px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '223px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Comm_Par3}": [
            ["style", "width", '208px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '203px'],
            ["style", "font-size", '11px']
         ],
         "${_Txt_Validate_head}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '471px'],
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '49px'],
            ["style", "font-size", '24px']
         ],
         "${_Stage}": [
            ["style", "height", '400px'],
            ["style", "width", '800px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "overflow", 'hidden']
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
         "${_btn_Val}": [
            ["transform", "translateX", '566px'],
            ["transform", "translateY", '28px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Txt_Comm_par5}": [
            ["style", "width", '207px'],
            ["color", "color", 'rgba(204,204,204,1.00)'],
            ["transform", "translateX", '573px'],
            ["style", "display", 'block'],
            ["style", "height", '28px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '258px'],
            ["style", "font-size", '11px']
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
            { id: "eid386", tween: [ "style", "${_Txt_Discover_Par3}", "opacity", '0.8', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid392", tween: [ "style", "${_Txt_Comm_par5}", "opacity", '0.800000011920929', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid396", tween: [ "style", "${_Txt_Comm_Par3}", "opacity", '0.800000011920929', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid472", tween: [ "style", "${_Txt_Discover_Par3}", "display", 'none', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid477", tween: [ "style", "${_Txt_Discover_Par3}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid544", tween: [ "style", "${_POI_Val}", "opacity", '1', { fromValue: '0'}], position: 303, duration: 500 },
            { id: "eid385", tween: [ "style", "${_Txt_Discover_Par4}", "opacity", '0.8', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid388", tween: [ "style", "${_Txt_Discover_par1}", "opacity", '0.8', { fromValue: '0'}], position: 1702, duration: 399 },
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
            { id: "eid387", tween: [ "style", "${_Txt_Discover_Par2}", "opacity", '0.8', { fromValue: '0'}], position: 1702, duration: 399 },
            { id: "eid470", tween: [ "style", "${_Txt_Discover_par1}", "display", 'none', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid480", tween: [ "style", "${_Txt_Discover_par1}", "display", 'block', { fromValue: 'none'}], position: 1702, duration: 0 },
            { id: "eid398", tween: [ "style", "${_Txt_Comm_par1}", "opacity", '0.800000011920929', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid400", tween: [ "style", "${_Txt_Comm_head}", "opacity", '1', { fromValue: '0'}], position: 934, duration: 394 },
            { id: "eid440", tween: [ "style", "${_Txt_Validate_Par4}", "display", 'none', { fromValue: 'block'}], position: 934, duration: 0 },
            { id: "eid536", tween: [ "style", "${_POI_Com}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid535", tween: [ "style", "${_POI_Com}", "display", 'block', { fromValue: 'none'}], position: 1207, duration: 0 },
            { id: "eid534", tween: [ "style", "${_POI_Com}", "display", 'block', { fromValue: 'block'}], position: 1601, duration: 0 },
            { id: "eid533", tween: [ "style", "${_POI_Com}", "display", 'none', { fromValue: 'block'}], position: 1702, duration: 0 },
            { id: "eid414", tween: [ "style", "${_Txt_Validate_head}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid541", tween: [ "style", "${_POI_Dis}", "opacity", '1', { fromValue: '0'}], position: 1916, duration: 399 },
            { id: "eid532", tween: [ "style", "${_POI_Com}", "opacity", '1', { fromValue: '0'}], position: 1207, duration: 394 },
            { id: "eid394", tween: [ "style", "${_Txt_Comm_Par4}", "opacity", '0.800000011920929', { fromValue: '0'}], position: 934, duration: 394 },
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
      transform: [[-206,-120]],
      id: 'HeatMapOn',
      type: 'image',
      rect: [207,121,800,400],
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
      transform: [[-93,-135],{},{},[1.062,1.166]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label.png']
   },
   {
      type: 'image',
      id: 'Label_80',
      rect: [430,210,80,30],
      transform: [[-87,11],[180],{},[1,1.166]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label.png']
   },
   {
      type: 'image',
      id: 'Label_80Copy',
      rect: [430,210,80,30],
      transform: [[-217,-185],[180],{},[1.25,1.166]],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label.png']
   },
   {
      type: 'text',
      rect: [122,186,0,0],
      id: 'TXT_ExistingStore',
      text: 'Existing Store',
      font: ['Open Sans, sans-serif',11,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[-10,-75]]
   },
   {
      type: 'text',
      rect: [122,186,0,0],
      id: 'TXT_potentialStore',
      text: 'Potential Store',
      font: ['Open Sans, sans-serif',11,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[92,-160]]
   },
   {
      type: 'text',
      rect: [122,186,0,0],
      id: 'TXT_Competitor',
      text: 'Competitor',
      font: ['Open Sans, sans-serif',11,'rgba(255,255,255,1.00)','normal','none',''],
      transform: [[231,37]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_POI_Big}": [
            ["transform", "translateY", '-72px']
         ],
         "${_Label2}": [
            ["transform", "scaleX", '1.0625'],
            ["transform", "translateY", '-135px'],
            ["transform", "translateX", '-93px'],
            ["transform", "scaleY", '1.16666']
         ],
         "${_TXT_Competitor}": [
            ["transform", "translateX", '231px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '37px'],
            ["style", "font-size", '11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '299px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '548px']
         ],
         "${_Label_80}": [
            ["transform", "scaleY", '1.16666'],
            ["transform", "translateY", '11px'],
            ["transform", "translateX", '-87px'],
            ["transform", "rotateZ", '180deg']
         ],
         "${_TXT_ExistingStore}": [
            ["transform", "translateX", '-10px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '-75px'],
            ["style", "font-size", '11px']
         ],
         "${_TXT_potentialStore}": [
            ["transform", "translateX", '92px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Open Sans, sans-serif'],
            ["transform", "translateY", '-160px'],
            ["style", "font-size", '11px']
         ],
         "${_Label_80Copy}": [
            ["transform", "translateX", '-217px'],
            ["transform", "rotateZ", '180deg'],
            ["transform", "scaleX", '1.25'],
            ["transform", "translateY", '-186px'],
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
      rect: [-170,-29,130,20],
      transform: [[170,30]],
      id: 'but_retailPOI_off',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','../images/edge/z-illustrator/MapButtons/but_retailPOI_off.png']
   },
   {
      rect: [-170,-29,130,20],
      transform: [[170,30]],
      type: 'image',
      id: 'but_retailPOI_on',
      display: 'none',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','../images/edge/z-illustrator/MapButtons/but_retailPOI_on.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_but_retailPOI_on}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '170px'],
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '30px']
         ],
         "${_but_retailPOI_off}": [
            ["style", "display", 'block'],
            ["transform", "translateX", '170px'],
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '30px']
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
      fill: ['rgba(0,0,0,0)','../images/edge/z-illustrator/MapButtons/but_retailintensity_off.png']
   },
   {
      rect: [-29,-29,130,20],
      id: 'but_retailintensity_on',
      transform: [[30,29]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/z-illustrator/MapButtons/but_retailintensity_on.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_but_retailintensity_off}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '30px'],
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '30px']
         ],
         "${_but_retailintensity_on}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '30px'],
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
"POI_Com": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [0,0,820,420],
      id: 'POI_comm',
      transform: [[-29,-90]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/POI_comm.png']
   },
   {
      transform: [[-11,-88]],
      rect: [258,109,242,62],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(154,188,66,1.00)']
   },
   {
      rect: [0,0,230,80],
      id: 'Label_B',
      transform: [[261,160],{},{},[1.195,0.85]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label_B.png']
   },
   {
      rect: [628,236,100,30],
      id: 'Label_l3Copy',
      transform: [[-584,-161],{},{},[0.005,0.016]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/Label_l.png']
   },
   {
      rect: [128,218,100,30],
      id: 'Label_l4',
      transform: [[-61,-128],{},{},[1.94,1.6]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label_l.png']
   },
   {
      font: ['\'Open Sans\', sans-serif',11,'rgba(255,255,255,1)','normal','none','normal'],
      transform: [[-121,-75]],
      align: 'center',
      id: 'TXT_marketingCampaign',
      text: 'A marketing campaign was introduced targeting weekend shoppers with a promotion.',
      type: 'text',
      rect: [367,255,259,38]
   },
   {
      font: ['\'Open Sans\', sans-serif',11,'rgba(255,255,255,1)','normal','none','normal'],
      transform: [[-344,-150]],
      align: 'center',
      id: 'TXT_NoCampaign',
      text: 'No campaign was deployed here.',
      type: 'text',
      rect: [367,255,187,16]
   },
   {
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      transform: [[-35,-83]],
      align: 'center',
      id: 'TXT_greenBox',
      text: 'Area targeted with campaign showed a 20% growth in weekend revenue.',
      type: 'text',
      rect: [296,119,214,34]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Label_l3Copy}": [
            ["transform", "translateX", '-585px'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.005'],
            ["style", "overflow", 'hidden'],
            ["transform", "translateY", '-161px'],
            ["transform", "scaleY", '0.01666']
         ],
         "${_Label_B}": [
            ["transform", "scaleY", '0.85'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1.19565'],
            ["transform", "translateY", '160px'],
            ["transform", "translateX", '261px']
         ],
         "${_TXT_marketingCampaign}": [
            ["transform", "translateX", '-121px'],
            ["style", "overflow", 'hidden'],
            ["style", "font-size", '11px'],
            ["transform", "translateY", '-75px'],
            ["style", "width", '259px']
         ],
         "${_TXT_NoCampaign}": [
            ["transform", "translateX", '-344px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '16px'],
            ["style", "font-size", '11px'],
            ["transform", "translateY", '-150px'],
            ["style", "width", '187px']
         ],
         "${symbolSelector}": [
            ["style", "height", '270px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '536.95488721805px']
         ],
         "${_TXT_greenBox}": [
            ["style", "font-size", '12px'],
            ["transform", "translateX", '-35px'],
            ["style", "text-align", 'center'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '34px'],
            ["style", "font-weight", 'normal'],
            ["transform", "translateY", '-83px'],
            ["style", "width", '214px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(154,188,66,1.00)'],
            ["transform", "translateX", '-11px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '62px'],
            ["transform", "translateY", '-88px'],
            ["style", "width", '242px']
         ],
         "${_Label_l4}": [
            ["transform", "scaleY", '1.6'],
            ["style", "overflow", 'hidden'],
            ["transform", "scaleX", '1.94'],
            ["transform", "translateY", '-128px'],
            ["transform", "translateX", '-62px']
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
      transform: [[0,-85]],
      id: 'POI_dis',
      type: 'image',
      rect: [0,0,820,420],
      fill: ['rgba(0,0,0,0)','../images/edge/POI_dis.png']
   },
   {
      transform: [[11,-141],{},{},[1,1.133]],
      id: 'Label_l5',
      type: 'image',
      rect: [84,232,100,30],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label_l.png']
   },
   {
      transform: [[242,41],{},{},[1,1.166]],
      id: 'Label_l5Copy',
      type: 'image',
      rect: [84,232,100,30],
      fill: ['rgba(0,0,0,0)','../images/edge/MA_Label_l.png']
   },
   {
      rect: [258,109,242,62],
      transform: [[-9,2]],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(154,188,66,1.00)']
   },
   {
      transform: [[-2,-83]],
      rect: [263,210,216,40],
      type: 'text',
      id: 'TXT',
      text: 'Area targeted with campaign showed a 20% growth in weekend revenue.',
      align: 'center',
      font: ['\'Open Sans\', sans-serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: [[-14,-83]],
      type: 'text',
      id: 'TXT_TopPerformer',
      text: 'Top Performer',
      font: ['Open Sans, sans-serif',11,'rgba(255,255,255,1.00)','normal','none',''],
      rect: [122,186,0,0]
   },
   {
      transform: [[218,99]],
      type: 'text',
      id: 'TXT_Synergy_Brand',
      text: 'Synergy Brand',
      font: ['Open Sans, sans-serif',11,'rgba(255,255,255,1.00)','normal','none',''],
      rect: [122,186,0,0]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TXT_TopPerformer}": [
            ["transform", "translateX", '-14px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Open Sans\', sans-serif'],
            ["transform", "translateY", '-83px'],
            ["style", "font-size", '11px']
         ],
         "${_Label_l5Copy}": [
            ["transform", "scaleY", '1.16666'],
            ["transform", "translateY", '41px'],
            ["transform", "translateX", '242px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_TXT}": [
            ["style", "text-align", 'center'],
            ["style", "width", '216px'],
            ["transform", "translateX", '-2px'],
            ["transform", "translateY", '-83px'],
            ["style", "font-size", '12px']
         ],
         "${_Label_l5}": [
            ["transform", "translateX", '11px'],
            ["transform", "translateY", '-142px'],
            ["transform", "scaleY", '1.13333']
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
            ["transform", "translateX", '-9px'],
            ["style", "height", '62px'],
            ["transform", "translateY", '2px'],
            ["style", "width", '242px']
         ],
         "${_TXT_Synergy_Brand}": [
            ["transform", "translateX", '218px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Open Sans\', sans-serif'],
            ["transform", "translateY", '99px'],
            ["style", "font-size", '11px']
         ],
         "${_POIs_Comm}": [
            ["transform", "translateX", '-0px']
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
      transform: [[-350,-211]],
      id: 'justMap2',
      type: 'image',
      rect: [351,211,800,400],
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
         "${_justMap2}": [
            ["transform", "translateX", '-350px'],
            ["transform", "translateY", '-211px']
         ],
         "${_POI_ALL}": [
            ["transform", "translateX", '99px'],
            ["transform", "translateY", '-41px']
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
      fill: ['rgba(0,0,0,0)','../images/edge/MA_POI_small.png']
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
      rect: [-549,10,260,420],
      id: 'SidePanelNew',
      transform: [[550,-9]],
      type: 'image',
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
            ["transform", "translateY", '-10px']
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
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      transform: [[-32,-73]],
      id: 'TXT_Off',
      text: 'Retail Intensity : Off',
      align: 'center',
      rect: [33,76,130,15]
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
      id: 'Btn_RI_Off',
      transform: [[-165,-155]],
      display: 'none',
      type: 'rect'
   },
   {
      id: 'Btn_RI_On',
      type: 'rect',
      transform: [[-141,-198]],
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
         "${_Btn_RI_On}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '-198px'],
            ["transform", "translateX", '-142px']
         ],
         "${_Btn_RI_Off}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '-156px'],
            ["transform", "translateX", '-166px']
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
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      transform: [[-32,-73]],
      id: 'TXT_On',
      text: 'Retail Intensity : On',
      align: 'center',
      rect: [33,76,130,15]
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
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      transform: [[-34,-73]],
      id: 'TXT_Off',
      text: 'Retail POI : Off',
      align: 'center',
      rect: [33,76,130,15]
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
      transform: [[-27,-65]],
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
            ["transform", "translateY", '-66px'],
            ["transform", "translateX", '-25px']
         ],
         "${_Btn_RPOI_Off}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '-94px'],
            ["transform", "translateX", '-102px']
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
      font: ['\'Open Sans\', sans-serif',10,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      transform: [[-34,-73]],
      id: 'TXT_On',
      text: 'Retail POI : On',
      align: 'center',
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
