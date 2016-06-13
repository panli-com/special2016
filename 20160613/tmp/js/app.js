

function LayerSpe(ele){
    var ele = ele || "#Lay-main-1";

    var Lay = PD(ele).html();

    PL.open({
        type: 1,
        title: false,
        closeBtn: false,
        area: '999px',
        skin: 'layui-Pan-nobg', //没有背景色
        shadeClose: true,
        content: Lay
    });


    PD(".l-close").on("click",function(){
        PL.closeAll();
    })

}

PD(function(){
    


});