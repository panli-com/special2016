


PD(function() {
FastClick.attach(document.body);
sidebar(0);
PD(".nav-tab a").on("click",function(e) { 

   var _t = PD(this);
   var _index = _t.index();
   PD(".floor-tab").hide();
   PD(".floor-tab").eq(_index).fadeIn("slow");
   sidebar(_index);
});



})