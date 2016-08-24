function FloorList(data) {
    var mlc = 12,
        fl1 = [],
        fl2 = [],
        fl3 = [],
        fl4 = [],
        fl0 = [];

    for (var i = 0; i < mlc; i++) {
        fl0.push(data[i]);
    }
    for (var i = mlc; i < mlc * 2; i++) {
        fl1.push(data[i]);
    }
    for (var i = mlc * 2; i < mlc * 3; i++) {
        fl2.push(data[i]);
    }
    // for (var i = mlc * 3; i < mlc * 4; i++) {
    //     fl3.push(data[i]);
    // }



    FloorAll(fl0, 'sh', 1);
    FloorAll(fl1, 'nz', 2);
    FloorAll(fl2, 'ts', 3);
    // FloorAll(fl3, 'yd', 4);


}

function FloorAll(data, imgHead, id) {

    var str = '';
    for (var i = 0; i < data.length; i++) {
        var imgname = imgHead + (i + 1) + '.jpg';
        var name = data[i].商品名称,
            price = data[i].价格,
            imgUrl = './build/css/imgs/products/' + imgname,
            Url = "http://www.panli.com/Crawler.aspx?purl=" + data[i].链接,
            proUrl = data[i].链接;


        str += '<li>' +
            '<div class="thumb ">' +
            '<a href="' + proUrl + '" target="_blank">' +
            '<img src="' + imgUrl + '" alt=" ">' +
            '</a>' +
            '</div>' +
            '<div class="name"><a href="' + proUrl + '" target="_blank ">' + name + '</a></div>' +
            '<div class="price">￥<span>' + price + '</span></div>' +
            '<div>'+
            '<a href="' + Url + '" class="buy-btn buy-btn-'+ id +'" target="_blank ">&nbsp;</a>' +
            '</div>'+
            '</li>';


    };
    $("#floor-" + id).find("ul").html(str);
}