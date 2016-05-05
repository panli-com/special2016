;(function () {
    $(function(){
       
       var layers = $('.plaxify');
        $.each(layers, function(index, layer){
            $(layer).plaxify({
            xRange: $(layer).attr('data-x') || 10,
            yRange: $(layer).attr('data-y') || 20,
            invert: $(layer).attr('data-invert') || false
            });
        });
        
        $.plax.enable();

        floorNnav();
        
        $(".back-top").on("click",function(){              
                 $('body,html').animate({ scrollTop: 0 }, 300);
        }); 
        
        
    });
    
    
    $(window).resize(function(){
        floorNnav();
    })
 
 
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        $('.floor-nav-wrap')[scrollTop > 400 ? 'show' : 'hide']();
        
    });
    
    
})();