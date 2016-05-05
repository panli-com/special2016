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
        
        $(".gotoShop").on("click",function(){
            var shp = $(".recommend-shop").offset().top;          
                 $('body,html').animate({ scrollTop:shp }, 500);
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

$(document).ready(function () {  
    
 

});  


function meeaM(){
    
            $("area").each(function () {  
                var $x = -55;  
                var $y = -80;
                var x,y; 
                var name = $(this).attr("alt");  
                $(this).mouseover(function (e) { 
                    var strall = [];  
                    strall = $(this).attr("coords").split(",");  
                     x = parseInt(strall[0]);  
                     y = parseInt(strall[3]);  
                    var index_num = $(this).index();  
                    var dom = "<div class='mapDiv'>点击购买</div>";  
                    $("body").append(dom);  
                  
                    $(".mapDiv").css({  
                        left: (x + $x) + "px",  
                        top: (y + $y) + "px"  
  
                    }).show();  
                }).mouseout(function () {  
                    $(".mapDiv").remove();  
                }).mousemove(function (e) {  
                    $(".mapDiv").css({  
                        left: (x + $x) + "px",  
                        top: (y + $y) + "px"  
                    })  
                });  
            });  
            //first load  
            show();  
            //random  
            setInterval(show, 3000); // 注意函数名没有引号和括弧   
    
}
  
function show() {  
    var area = $("area");  
    var random = getRandom(area.length);  
    $(area[random]).trigger("mouseover");  
}  

function getRandom(n) { return Math.floor(Math.random() * n + 1) }  
        

