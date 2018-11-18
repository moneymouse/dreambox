var map = new AMap.Map('container', {
    //缩放等级：13
    zoom: 12,
    //视图模式：3D
    viewMode: "3D",
    mapStyle: "amap://styles/729dc12fe94173bff4a7536c075c7a5c"
});
AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
    var positionPicker = new PositionPicker({
        mode: 'dragMap', //设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
        map: map //依赖地图对象
    });
    positionPicker.on('success', function(positionResult) {
        $("#show").val(positionResult.address);
        send_position = positionResult.position;
    });
    positionPicker.start();

});
//输入提示
AMap.plugin('AMap.Autocomplete', function() { //回调函数
    var autoOptions = {
        city: "广州", //城市，默认全国
        input: "tipinput", //使用联想输入的input的id
        datatype: "poi" //使用poi返回
    };
    var autocomplete = new AMap.Autocomplete(autoOptions);
    AMap.event.addListener(autocomplete, 'select', function(e) {
        //e.poi.location选择项目的地址的经纬度
        send_content.position = e.poi.location;
    })
});

$("#b").click(function() {
    
    if (!marker) {
        var marker = new AMap.Marker();
        map.add(marker);
    }
    marker.setPosition(send_content.position);
    map.setFitView(marker);
    map.remove(marker);
    })
$("#make").click(function() {
    send_content.address = $('#show').val();
    send_content = JSON.stringify(send_content);
    console.log(send_content);
    if (!window.localStorage) {
        alert("请升级您的浏览器再尝试访问");
        return false;
    } else {
        localStorage.setItem("send_content", send_content);
    }
});