function floorNnav() {
    var winW = $(window).width(),
        mainOfL = $(".sp-main").offset().left;
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

    var _afloTop = $("#" + num).offset().top;
    $('body,html').animate({
        scrollTop: _afloTop
    }, 300);
}

function listData() {
    var data = dataSpag()
    var list1 = ''
    var list2 = ''
    var leng = data.length

    for (var i = 0; i < leng; i++) {
        var item = data[i]
        var img = './build/css/imgs/p'+ (i+1) +'.png'
        var href = item.src
        var name = item.name
        var str = '<li>' +
            '<a title="'+ name +'" target="_blank" href="'+ href +'">' +
            '<img src="'+img+'" alt="'+ name +'">' +
            '</a>' +
            '</li>';
        if(i<15){
            list1 += str
        }else{
            list2 += str
        }
            
    }

    $(".floor-list-1").append(list1)
    $(".floor-list-2").append(list2)
}

function layerInfo(){
    var html =  $(".layer-html-1").html();
    PL.open({
        type: 1,
        title: false,
        closeBtn: false,
        area: ['1000px', '610px'],
        shadeClose: false,
        skin: 'layui-Pan-nobg', //没有背景色
        content: html
    });
}

  