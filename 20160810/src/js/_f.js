function floorNnav() {
    var winW = $(window).width(),
        mainOfL = $(".floor-sp").offset().left;
    var navW = $('.floor-nav').width();
    if (winW >= 1444) {
        var oFright = mainOfL - navW - 15;

        $('.floor-nav').css("left", oFright)
    } else {
        $('.floor-nav').css({ "left": '10px', right: '' });
    }
}