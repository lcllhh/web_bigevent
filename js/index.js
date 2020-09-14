$(function() {
    getuserinfo();
    $('#tuichu').on('click', function() {
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function(index) {
            localStorage.removeItem('token');
            location.href = 'login.html';
            layer.close(index);
        });
    })
})

function getuserinfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) {
                return layer.msg('获取用户信息失败！')
            }
            renderAvatar(res.data);
        }
    })
}

function renderAvatar(data) {
    let name = data.nickname || data.username;
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (data.user_pic) {
        $('.layui-nav-img').attr('src', data.user_pic).show()
        $('.text-avatar').hide()
    } else {
        let first = name[0].toUpperCase();
        $('.text-avatar').html(first).show();
        $('.layui-nav-img').hide();
    }
    6
}