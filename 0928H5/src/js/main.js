var appConfig = {
    time: function() {
        if (!Date.now) {
            Date.now = function now() {
                return new Date().getTime();
            };
        }

        return Date.now();
    },
    init: function() {
        var vm = this;
        var obj = indexNavNodeInfo;

        var getDt = new Date(Number(vm.time()));
        var year = getDt.getFullYear();
        var month = getDt.getMonth() + 1;
        var date = getDt.getDate();
        var gst = year + '-' + month + '-' + date;
 
        if (obj[gst]) {
            var ele = obj[gst];
            PD(".floor" + ele).find(".cloud-small").addClass("onl-buzz");
        } 
    }
}


PD(function() {

appConfig.init();


PD(".shop-box .shop-child").on("click",function(e) {

    PD(".ripple").remove();

    var posX = PD(this).offset().left,
        posY = PD(this).offset().top,
        buttonWidth = PD(this).width(),
        buttonHeight = PD(this).height();
    PD(this).append("<span class='ripple'></span>");

    if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;

    PD(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");

});



})