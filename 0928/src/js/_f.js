function floorNnav() {
    var winW = $(window).width(),
        mainOfL = $(".index-sp").offset().left;
    var navW = $('.floor-nav').width();
    if (winW >= 1444) {
        var oFright = mainOfL - navW - 15;

        $('.floor-nav').css("left", oFright)
    } else {
        $('.floor-nav').css({
            "left": '10px',
            right: ''
        });
    }
}

function goTofloorC(num) {

    var _afloTop = $("#floor-" + num).offset().top;
    $('body,html').animate({
        scrollTop: _afloTop
    }, 300);
}

function isViewNav() {
    var $win = $(window);
    var itemOffsetTop = $("#sp-index-nav").offset().top;
    var itemOuterHeight = $("#sp-index-nav").outerHeight();
    var winHeight = $win.height();


    $win.scroll(function() {
        var winScrollTop = $win.scrollTop();
        if (!(winScrollTop > itemOffsetTop + itemOuterHeight) && !(winScrollTop < itemOffsetTop - winHeight)) {

            indexNavAnmi();
        } else {
            // console.log('消失了'); 
        }
    })
}

function indexNavAnmiInit() {
    $(".sp-index-nav-child").css({
        "top": "-270px"
    });
}

function indexNavAnmi() {
    var start = $("#sp-index-nav").attr("data-start");

    if (start) {
        return false;
    }

    var chinld = $(".sp-index-nav-child");
    var leng = chinld.length;
    for (var i = 0; i < leng; i++) {
        chinld.eq(i).animate({
            top: [0, 'easeOutBack']
        }, 100 * i + 200);
    }

    $("#sp-index-nav").attr("data-start", "1");
    indexNavAnmiOn();
}

function indexNavAnmiOn() {
    var obj = indexNavNodeInfo;
    
    var getDt = new Date(PanLiNodeInfo.time);
    var year = getDt.getFullYear();
    var month = getDt.getMonth() + 1;
    var date = getDt.getDate();
    var gst = year + '-' + month + '-' + date;
  
    if (obj[gst]) {
        var ele = obj[gst];
       
        $(".sp-index-nav-child-" + ele).animate({paddingTop: [89, 'easeOutBack']}, 200);
        $(".sp-index-nav-child-" + ele).find(".sp-cloud-small").addClass("onl-buzz");
    } else {
        // console.log("wu");
    }
}


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function givenElementInViewport(el, fn) {
    return function() {
        if (isElementInViewport(el)) {
            fn.call();
        }
    }
}

function addViewportEvent(el, fn) {
    if (window.addEventListener) {
        addEventListener('DOMContentLoaded', givenElementInViewport(el, fn), false);
        addEventListener('load', givenElementInViewport(el, fn), false);
        addEventListener('scroll', givenElementInViewport(el, fn), false);
        addEventListener('resize', givenElementInViewport(el, fn), false);
    } else if (window.attachEvent) {
        attachEvent('DOMContentLoaded', givenElementInViewport(el, fn));
        attachEvent('load', givenElementInViewport(el, fn));
        attachEvent('scroll', givenElementInViewport(el, fn));
        attachEvent('resize', givenElementInViewport(el, fn));
    }
}