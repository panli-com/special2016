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
    for (var i = mlc; i < mlc * 2 - 4; i++) {
        fl1.push(data[i]);
    }
    for (var i = mlc * 2 - 4; i < mlc * 3 - 4; i++) {
        fl2.push(data[i]);
    }
    for (var i = mlc * 3 - 4; i < mlc * 4 - 4; i++) {
        fl3.push(data[i]);
    }



    FloorAll(fl0, 'dk', 1);
    FloorAll(fl1, 'mm', 2);
    FloorAll(fl2, 'xt', 3);
    FloorAll(fl3, 'yd', 4);


}

function FloorAll(data, imgHead, id) {

    var str = '';
    for (var i = 0; i < data.length; i++) {
        var imgname = imgHead + (i + 1) + '.jpg';
        var name = data[i].商品名称,
            price = data[i].商品价格,
            imgUrl = './build/css/imgs/products/' + imgname,
            Url = "http://www.panli.com/Crawler.aspx?purl=" + data[i].商品链接,
            proUrl = data[i].商品链接;


        str += '<li>' +
            '                <div class="thumb ">' +
            '                   <a href="' + proUrl + '" target="_blank">' +
            '                      <img src="' + imgUrl + '" alt=" ">' +
            '                 </a>' +
            '            </div>' +
            '           <div class="contents ">' +
            '              <p> <a href="' + proUrl + '" target="_blank ">' + name + '</a></p>' +
            '             <div class="price ">￥' + price + '</div>' +
            '            <a href="' + Url + '" class="buy-btn " target="_blank ">&nbsp;</a>' +
            '       </div>' +
            '  </li>';


    };
    $("#floor-" + id).find("ul").html(str);
}