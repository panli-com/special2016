;(function() {

    $(function() {

        $(".floor-nav-u li,.sp-index-nav-child,.gotofloor").on("click", function() {
            var _t = $(this),
                _tf = _t.attr("floor");
                goTofloorC(_tf);
        });



        $(".back-top").on("click", function() {
            $('body,html').animate({ scrollTop: 0 }, 300);
        });

        floorNnav();

        indexNavAnmiInit();
        
        isViewNav();

    });
    

    $(window).resize(function() {
        floorNnav();
    })


    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        $('.floor-nav')[scrollTop > 400 ? 'show' : 'hide']();

    });


})();