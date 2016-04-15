function floorNnav(){
	var winW = $(window).width(),       
		mainOfL = $(".floor-sp").offset().left;
		var navW = $('.floor-nav-wrap').width();
		if(winW >= 1444){
			 var oFright = mainOfL-navW-15;
                   
			 $('.floor-nav-wrap').css("left",oFright)
		}else {
			$('.floor-nav-wrap').css({"left":'10px',right:''});
		}
} 


;(function(){
  
  
  
  $(function(){ 

      $(".floor-nav-u a").on("click",function(){
                var _t = $(this),
                    _tf = _t.attr("floor");
                var _afloTop = $("#floor-"+_tf).offset().top;
                 $('body,html').animate({ scrollTop: _afloTop-110 }, 300);
      });
      
      $(".back-top").on("click",function(){              
                 $('body,html').animate({ scrollTop: 0 }, 300);
      });      
      
     $(".jingxi-1").on("click",function(){              
              var _t = $(this),
                _src = _t.attr("data-src");
                console.log(_src);
           var html =  $(".layer-html-"+_src).html();
                PL.open({
                  type: 1,
                  title: false,
                  closeBtn: false,
                  area: ['1000px', '319px'],
                  shadeClose: true,
                  skin: 'layui-Pan-nobg', //没有背景色 
                  content: html
              });
     });  
     
     $(".jingxi-2").on("click",function(){              
                 var _t = $(this),
                _src = _t.attr("data-src");
                console.log(_src);
           var html =  $(".layer-html-"+_src).html();
                PL.open({
                  type: 1,
                  title: false,
                  closeBtn: false,
                  area: ['1000px', '442px'],
                  shadeClose: true,
                  skin: 'layui-Pan-nobg', //没有背景色
                  content: html
              });
     });    
      
      
      $("body").on("click",".close-layer",function(){
        PL.closeAll();
      })
   
      
      floorNnav();
      
      
  });
    
 
 $(window).resize(function(){
    floorNnav();
  })
 
 
 $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $('.floor-nav-wrap')[scrollTop > 400 ? 'show' : 'hide']();
    
});
 
 
})();


