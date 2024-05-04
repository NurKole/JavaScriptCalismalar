var selamFonksiyonu = function selam() {
  console.log("merhaba");
};

selamFonksiyonu();

var selamFonksiyonu2 = () => {
  console.log("merhaba2");
  console.log("hello");
};

selamFonksiyonu2();

var selamFonksiyonu3 = (mesaj) => console.log(mesaj);

selamFonksiyonu3("merhaba dunyali");

var topla = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};

let toplam = topla(3,5);

console.log(toplam);
