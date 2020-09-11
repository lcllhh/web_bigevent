$(function() {
    $('#link-reg').on('click', function() {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    $('#link-login').on('click', function() {
        $('.reg-box').hide();
        $('.login-box').show();
    })
})
var form = layui.form;
form.verify({
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    repwd: function(value) {
        var pwd = $('.reg-box [name=password]').val();
        if (pwd !== value) {
            return '两次密码不一致';
        }
    }
})
$('#form_reg').on('submit', function(e) {
    e.preventDefault();
    $.post('http://ajax.frontend.itheima.net/api/reguser', {
        username: $('#form_reg [name=username]').val(),
        password: $('#form_reg [name=password]').val()
    }, function(res) {
        if (res.status !== 0) {
            console.log(res.message);
        } else if (res.status === 0) {
            console.log('注册成功');
        }
    })
})