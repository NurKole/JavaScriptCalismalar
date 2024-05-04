var kullanicilar = [
    {email:"nurkole@gmail.com", sifre:"12345"},
    {email:"gulkole@gmail.com", sifre:"12345"}
]

var twitler = [

    {email:"nurkole@gmail.com", twit:"hava çok güzel"},
    {email:"nurkole@gmail.com", twit:"hava çok güzel biraz yagmurlu"},
    {email:"gulkole@gmail.com", twit:"ben bu havaları sevmem"}
]

var email= prompt("email?")
var sifre= prompt("sifre?")

function giris(){
    if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre || 
        email==kullanicilar[1].email && sifre==kullanicilar[1].sifre)){
            console.log(twitler)
        }else{
            console.log("kullanıcı adı veya şifre hatalı")
        }
}

giris(email,sifre)