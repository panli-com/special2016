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

       
        
    });
})();