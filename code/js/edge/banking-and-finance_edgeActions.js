/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 803, function(sym, e) {
         sym.stop();
         
         // Lookup the Edge Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         sym.getSymbol("btn_Val").stop("On");
         
         sym.getSymbol("btn_Cal").stop("Off");
         sym.getSymbol("btn_Dis").stop("Off");
         
         
         
         

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1601, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2315, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_btn_Dis}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Sdis");
         
         sym.getSymbol("btn_Val").stop("Off");
         sym.getSymbol("btn_Com").stop("Off");
         
         sym.getSymbol("btn_Dis").play("On");// insert code for mouse click here// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_Com}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("Scom");
         
         sym.getSymbol("btn_Val").stop("Off");
         sym.getSymbol("btn_Dis").stop("Off");
         
         sym.getSymbol("btn_Com").play("On");// insert code for mouse click here// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_Val}", "click", function(sym, e) {
         sym.play(0);
         
         sym.getSymbol("btn_Com").stop("Off");
         sym.getSymbol("btn_Dis").stop("Off");
         
         sym.getSymbol("btn_Val").play("On");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_But_RetailPOI}", "click", function(sym, e) {
         sym.getSymbol("mapbundle").getSymbol("POI_ALL").play();// insert code for mouse click here// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_but_RetailIntensity}", "click", function(sym, e) {
         sym.getSymbol("mapbundle").getSymbol("Heatmap").play();// insert code for mouse click here// insert code for mouse click here

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

//=========================================================
   //Edge symbol: 'Heatmap'
   (function(symbolName) {

      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
         // insert code to be run at timeline end here

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("Heatmap");
   //Edge symbol end:'Heatmap'

//=========================================================
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${_but_retailPOI_off}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("On");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_but_retailPOI_on}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("Off");
         

      });
      //Edge binding end

   })("But_xxxx");
   //Edge symbol end:'But_xxxx'

//=========================================================
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${_but_retailintensity_off}", "click", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("On");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_but_retailintensity_on}", "click", function(sym, e) {
         sym.stop("Off");
         
         
         

      });
      //Edge binding end

   })("but_xxxx");
   //Edge symbol end:'but_xxxx'

//=========================================================
   (function(symbolName) {

      

      

      

   })("MapBundle");
   //Edge symbol end:'MapBundle'

//=========================================================
   //Edge symbol: 'Heatmap'
   (function(symbolName) {

      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(0);
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_but_retailintensity_on}", "click", function(sym, e) {
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_but_retailintensity_off}", "click", function(sym, e) {
         sym.play();
         // insert code for mouse click here

      });
      //Edge binding end

   })("POI_SmallDots");
   //Edge symbol end:'POI_SmallDots'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("btn_Dis");
   //Edge symbol end:'btn_Dis'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("btn_Com");
   //Edge symbol end:'btn_Com'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("btn_Val");
   //Edge symbol end:'btn_Val'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("TXT_Val");
   //Edge symbol end:'TXT_Val'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 394, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("TXT_Com");
   //Edge symbol end:'TXT_Com'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 399, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("TXT_Dis");
   //Edge symbol end:'TXT_Dis'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("POI_Val");
   //Edge symbol end:'POI_Val'

//=========================================================
   //Edge symbol: 'PulsingCircle'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.playReverse();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
         // insert code here

      });
      //Edge binding end

   })("PulsingCircle");
   //Edge symbol end:'PulsingCircle'

//=========================================================
   //Edge symbol: 'PulsingCircle2'
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.playReverse();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();
         // insert code here

      });
      //Edge binding end

   })("PulsingCircle2");
   //Edge symbol end:'PulsingCircle2'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("POI_Com");
   //Edge symbol end:'POI_Com'

//=========================================================
   (function(symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("POI_Dis");
   //Edge symbol end:'POI_Dis'

//=========================================================
   (function(symbolName) {

   })("Btn_RI_Off");
   //Edge symbol end:'Btn_RI_Off'

//=========================================================
   (function(symbolName) {

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Btn_RI_On}", "click", function(sym, e) {
         sym.stop("Off");// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_RI_Off}", "click", function(sym, e) {
         sym.stop("On");// insert code for mouse click here

      });
      //Edge binding end

   })("but_RetailIntensity");
   //Edge symbol end:'but_RetailIntensity'

//=========================================================
   (function(symbolName) {

   })("Btn_RI_On");
   //Edge symbol end:'Btn_RI_On'

//=========================================================
   (function(symbolName) {

   })("Btn_RPOI_Off");
   //Edge symbol end:'Btn_RPOI_Off'

//=========================================================
   (function(symbolName) {

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Btn_RPOI_On}", "click", function(sym, e) {
         sym.stop("Off");// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Btn_RPOI_Off}", "click", function(sym, e) {
         sym.stop("On");// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("But_RetailPOI");
   //Edge symbol end:'But_RetailPOI'

//=========================================================
   (function(symbolName) {

   })("Btn_RPOI_On");
   //Edge symbol end:'Btn_RPOI_On'

})(jQuery, AdobeEdge, "EDGE-47942820");