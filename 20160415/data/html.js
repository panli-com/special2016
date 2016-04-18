function FloorList(data){
      var mlc = 11,fl1 = [],fl2 = [],fl3 = [],fl4 = [],fl0 = [];

          for(var i=0;i<mlc;i++){
              fl0.push(data[i]);
          }
          for(var i=mlc;i<mlc*2;i++){
              fl1.push(data[i]);
          }
          for(var i=mlc*2;i<mlc*3;i++){
              fl2.push(data[i]);
          }
          for(var i=mlc*3;i<mlc*4;i++){
              fl3.push(data[i]);
          }
         
         
        
          FloorAll(fl0,'cx',4);
          FloorAll(fl1,'ts',5);
          FloorAll(fl2,'rw',6);
          FloorAll(fl3,'sh',7);
       
        
}

function FloorAll(data,imgHead,id){

	var str = '';
            for(var i=0;i<data.length;i++){
                var name = data[i].商品名称,
                    price = data[i].价格,                  
                    imgUrl = './build/css/images/products/'+data[i].图片名称,
                    Url = "http://www.panli.com/Crawler.aspx?purl="+data[i].链接,
                    proUrl = data[i].链接;
                    
                  str += ' <li class="lic">'+
                   
                          '       <div class="thumb">'+
                           '          <a href="'+ proUrl +'" target="_blank" ><img src="'+ imgUrl +'" alt=""></a>'+
                         '        </div>'+
                           '      <div class="pro-foot">'+
                             '        <p><a href="'+ proUrl +'" target="_blank" >'+ name +'</a></p>'+
                              '       <span class="price"><i>¥</i>'+ price +'</span>'+
                               '      <span class="btn-go"><a href="'+ Url +'" target="_blank" >马上代购</a></span>'+
                             '    </div>'+
                           
                       '  </li>';
               

            };
     $("#floor-"+id).find("ul").append(str);
}