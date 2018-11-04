
      //新建一个地图层
        var map = new AMap.Map('container', {
        //缩放等级：13
        zoom:13,
        //视图模式：3D
        viewMode:"3D",
        //center选项摒弃是因为在以下获取定位中自动设置了当前位置为地图中心
        mapStyle:"amap://styles/729dc12fe94173bff4a7536c075c7a5c"
    });
        function timeturn () {
         	
      	
      	
      		
      	
        //自动定位
        mapObj = new AMap.Map('iCenter');
        mapObj.plugin('AMap.Geolocation', function () {
        geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 50),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    });
    //添加地图控件
    map.addControl(geolocation);
    //getCurrentPosition()方法获取当前经纬度定位信息
    geolocation.getCurrentPosition();
    AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
    AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
});
//  新建xmlhttprequest对象
    var d_XHR;
    if(window.XMLHttpRequest){
    	d_XHR = new XMLHttpRequest();
    	
    }
    else{
      d_XHR = new ActiveXObject("Microsoft.XMLHTTP");
    
    }
//  定位事件，obj.position：经纬度，obj.accuracy：精度范围，obj.formattedAddress：地址，obj.location_type：定位结果来源
//  定位事件：计算最近点并更新消息框
    function onComplete(obj){       
        
        
        
        //点标记与信息窗体创建
        for (var i = 0; i < 10 ; i++) {
        		var infoWindow = new AMap.InfoWindow({ //创建信息窗体
        			  autoMove: true,
                isCustom: true,  //使用自定义窗体
//              content: //活动介绍
                offset: new AMap.Pixel(16, -45)
            });
            var onMarkerClick  =  function(e) {
                infoWindow.open(mapobj, e.target.getPosition());//打开信息窗体
                //e.target就是被点击的Marker
            } 
            var icon = new AMap.Icon({
            	size : [70,50],
            	image : './img/h2x.png'
            })
            var marker1 = new AMap.Marker({
            	map : mapobj,
            	title : 'hello',
            	icon : icon,
                position: [110.921181+i*0.1, 21.659792]
            })
            mapobj.add(marker1);
            marker1.on('click',onMarkerClick);//绑定click事件
        	}
        
        
        
        
        
    }
  //错误信息
      function onError(obj) {
//        alert(obj.info + '--' + obj.message);
//        console.log(obj);
          return; 
        }
     //}
 }

      //点击搜索数据复制给搜索框
    $(document).on('click','.click_work',function(){
			var word = $(this).text();
			$('#searchbox').val(word);
			$('#word').hide();
			// $('#texe').trigger('click');触发搜索事件
			alert(word);
		})
		$(document).click(function(){
			$('#word').hide();
		})
		
	
   
  
      
