PD(function() {

    FastClick.attach(document.body);

    function loadImage(url, callback) {
        var img = new Image();
        img.src = url;

        img.onload = function() { //图片下载完毕时异步调用callback函数。
            callback.call(img); // 将callback函数this指针切换为img。
        };
    };


    loadImage(PD("#img1").attr("src"),function(e){
        console.log(this);
    });

    PD(".content-wrap").on("click", ".nav-a", function() {
        var _t = PD(this);
        var _p = _t.parent(".content-wrap");
       
        if (_t.attr("data-id") == "2") {
            _p.addClass("on2");
        } else {
            _p.removeClass("on2");
        }
    });


})