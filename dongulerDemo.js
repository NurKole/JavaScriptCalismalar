var kullanicilar = [
  { email: "nurkole@gmail.com", sifre: "12345" },
  { email: "gulkole@gmail.com", sifre: "12345" },
];

var twitler = [
  { email: "nurkole@gmail.com", twit: "hava çok güzel" },
  { email: "nurkole@gmail.com", twit: "hava çok güzel biraz yagmurlu" },
  { email: "gulkole@gmail.com", twit: "ben bu havaları sevmem" },
];

var email = prompt("email?");
var sifre = prompt("sifre?");

function kullaniciVarmi(email, sifre) {
  for (i = 0; i < kullanicilar.length; i++) {
    if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
      return true; 
    }
  }
  return false;
}

function giris() {
  if (kullaniciVarmi(email, sifre)) {
    console.log(twitler);
  } else {
    console.log("kullanıcı adı veya şifre hatalı");
  }
}

giris(email, sifre);
