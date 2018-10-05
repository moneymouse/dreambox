var formContainer = $('#form-container');

bindFormClick();
//Opening the form
function bindFormClick(){
  $(formContainer).on('click', function(e) {
    	$("#sign").remove();
    e.preventDefault();
    toggleForm();
    //Ensure container doesn't togleForm when open
    $(this).off();
  });
}

//Closing the form
$('#form-close, .form-overlay').click(function(e) {
  e.stopPropagation();
  e.preventDefault();
  toggleForm();
  bindFormClick();
});

document.onkeydown=function(event){ 
var e = event || window.event || arguments.callee.caller.arguments[0]; 
if(e && e.keyCode==27){ 
	e.stopPropagation();
  e.preventDefault();
  $(formContainer).removeClass('expand'||'sign');
  $(formContainer).children().removeClass('expand'||'sign');
  $('body').removeClass('show-form-overlay');
  $('.form-submitted').removeClass('form-submitted');
  bindFormClick();
} 

} 
function toggleForm(){
  $(formContainer).toggleClass('expand');
  $(formContainer).children().toggleClass('expand');
  $('body').toggleClass('show-form-overlay');
  $('.form-submitted').removeClass('form-submitted');
}

//Form validation
$('form').submit(function() {
var form = $(this);
form.find('.form-error').removeClass('form-error');
var formError = false;

form.find('.input').each(function() {
    if ($(this).val() == '') {
      $(this).addClass('form-error');
      $(this).select();
      formError = true;
      return false;
    }
    else if ($(this).hasClass('email') && !isValidEmail($(this).val())) {
      $(this).addClass('form-error');
      $(this).select();
      formError = true;
      return false;
    }
});

if (!formError) {
    $('body').addClass('form-submitted');
    $('#form-head').addClass('form-submitted'); 
    setTimeout(function(){
      $(form).trigger("reset");
    }, 1000);
}
return false;
});

function isValidEmail(email) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
};
//绑定事件
function activity_on(obj,link){
$(obj).mousedown(function(){
	$(obj).addClass('then');	
})
$(obj).mouseup(function(){
	$(obj).removeClass("then");
	location.href=link;
})
$(obj).mouseleave(function() {
	$(obj).removeClass("then");
})
$('#activity').on('touchstart',function(){
	$(obj).addClass('then');
})
$(obj).on('touchend',function(){
	$(obj).removeClass("then");
	location.href=link;
})
$(obj).on('touchmove',function() {
	$(obj).removeClass("then");
})
}
//social("twitter/joeharry__", "codepen/woodwork",
//"disco");
//new add
//if 判断为社团：
//if(!$("#note").is('.add')){$("#note").addClass("add");}
//if 判断为同学：
//if($("#note").is('.add')){$("#note").removeClass("add");}
//if返回的没有活动
//$("#note").val()="暂时还没有活动噢~"
//if返回有活动
//for遍历数组，标题数组title_arry，内容数组content_arry，日期数组date_arry，地址数组address_arry，图片数组img_arry，链接数组link_arry。
function append_text (obj,activity_ID,TITLE,activity_content,date,adress,ACT_link) {
	var value="<div id='"+activity_ID+"'><div class='active-set'><div class='media-left'><img class='media-object'  alt='ITRClub' style='cursor:pointer;border:none;border-radius:10px'></div><div class='media-body' style='color: black;'><h3 class='media-heading'><b>"+activity_content+"</b></h3></div></div></div>"
	$(obj).append(value);
	activity_on($(obj),ACT_link);
	
	
	}
append_text($('#activity-list'));
$(".add").mousedown(function(){
	$("#note").addClass('then');	
})
$(".add").mouseup(function(){
	$("#note").removeClass("then");
	location.href="index.html";
})
$(".add").mouseleave(function() {
	$("#note").removeClass("then");
})
$('.add').on('touchstart',function(){
	$("#note").addClass('then');
})
$(".add").on('touchend',function(){
	$("#note").removeClass("then");
	location.href="index.html";
})
$(".add").on('touchmove',function() {
	$("#note").removeClass("then");
})


    	
    