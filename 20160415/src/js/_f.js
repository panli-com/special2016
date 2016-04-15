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

