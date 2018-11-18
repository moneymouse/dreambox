$(function() {
    //当键盘键被松开时发送Ajax获取数据
    $('#searchbox').keyup(function() {
        var keywords = $(this).val();
        if (keywords == '') {
            $('#word').hide();
            return
        };
        $.ajax({
            url: 'http://suggestion.baidu.com/su?wd=' + keywords,
            dataType: 'jsonp',
            jsonp: 'cb', //回调函数的参数名(键值)key
            // jsonpCallback: 'fun', //回调函数名(值) value

            success: function(data) {
                $('#word').empty().show();
                if (data.s != "") {
                    $.each(data.s, function() {
                        new_this = this.replace(keywords, "");
                        $('#word').append('<div class="click_work">' + '<b>' + keywords + '</b>' + new_this + '</div>');
                    })
                }
            }

        })
    })


})