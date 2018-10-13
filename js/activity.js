   var map = new AMap.Map('container', {
        //缩放等级：13
        zoom:13,
        //视图模式：3D
        viewMode:"3D",
        mapStyle:"amap://styles/729dc12fe94173bff4a7536c075c7a5c"
    });
    //输入提示
    AMap.plugin('AMap.Autocomplete',function(){//回调函数
    var autoOptions = {
        city: "", //城市，默认全国
        input:"tipinput"//使用联想输入的input的id
    };
    var autocomplete= new AMap.Autocomplete(autoOptions);
});

   $("#b").click(function(){
    var a = document.getElementById("tipinput").value;
    AMap.plugin('AMap.Geocoder', function() {
  var geocoder = new AMap.Geocoder({
    // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
    city: ''
  })

  geocoder.getLocation(a, function(status, result) {
    if (status === 'complete' && result.info === 'OK') {
      // result中对应详细地理坐标信息
      var lnglat = result.geocodes[0].location;
      
      	if(!marker){
                    var marker = new AMap.Marker();
                    map.add(marker);
                }
                marker.setPosition(lnglat);
                map.setFitView(marker);
      $("#show").val(result.geocodes[0].addressComponent);
      //ajax发送lnglat
                
    }
    else{
    	alert(JSON.stringify(result));
    }
  })
})
  
   })
AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
    var map = new AMap.Map('container',{
        zoom:16
    })
    var positionPicker = new PositionPicker({
        mode:'dragMap',//设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
        map:map//依赖地图对象
    });
    positionPicker.on('success', function(positionResult) {
    $("#show").val(positionResult.address);
      //ajax发送positionResult.lnglat
});
    positionPicker.start();

});
