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
    
    $("img").hover(
        function () {
            
            alert("@2");
        },
        function () {
            $(this).removeClass("hover");
        }
     );
    
    $("area").each(function(){
            var $x=-70; 
            var $y=-80;
            var name=$(this).attr("alt");
            
            $(this).hover(
        function () {
            
            alert("@2");
        },
        function () {
            $(this).removeClass("hover");
        }
     );
            
            
            // $(this).mouseover(function(e){
            //     var index_num=$(this).index();
            //     var dom="<div class='mapDiv'><p>伊而美提示您这是<span class='name'></span><span class='num'></span></p></div>";
            //     $("body").append(dom);
            //     $(".name").text(name);
            //     $(".num").text(index_num)
            //     $(".mapDiv").css({
            //     top: (e.pageY + $y)+"px",
            //     left: (e.pageX + $x)+"px"
            //     }).show("fast");
            // }).mouseout(function(){
            // $(".mapDiv").remove();
            // }).mousemove(function(e){
            // $(".mapDiv").css({
            // top: (e.pageY + $y)+"px",
            // left: (e.pageX + $x)+"px"
            // })
            // });
    });
    
    
    
    
    
})();


