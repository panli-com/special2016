;
(function() {



    $(function() {

        $(".floor-nav-u li").on("click", function() {
            var _t = $(this),
                _tf = _t.attr("floor");
            var _afloTop = $("#floor-" + _tf).offset().top;
            $('body,html').animate({ scrollTop: _afloTop }, 300);
        });

        $(".back-top").on("click", function() {
            $('body,html').animate({ scrollTop: 0 }, 300);
        });

        floorNnav();


    });


    $(window).resize(function() {
        floorNnav();
    })


    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        $('.floor-nav')[scrollTop > 400 ? 'show' : 'hide']();

    });


})();