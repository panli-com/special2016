function sidebar(num){

   var onNav = PD(".nav-tab .nav-tab-a").eq(num);
   var _w = onNav.width();
   var offset = onNav.position();

   PD("#sidebar").animate({left: _w/2 + offset.left }, 300);

   console.log(offset);
   console.log(_w); 

}