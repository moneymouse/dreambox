//localStorage检测
if (!window.localStorage) {
    alert("请升级您的浏览器后重试");
} else {
    send_content = localStorage.send_content;
}
if (send_content == undefined) {
    alert("请重新输入地址");
    reback();
} else {
	send_content = JSON.parse(send_content);
    address_send = send_content.address;
    $('#S_address').val(address_send);
}
$("#reset_address").click(function(){
    localStorage.removeItem("send_content");
    reback();
})
//最后一定记得删除localStorage....
$("#Submit").click(function(){
    send_content.title = $("#activity_title").val();
    send_content.time = $("#activity_time").val().replace("T"," ");
    send_content.content = editor.getData();
	localStorage.removeItem("send_content");
})