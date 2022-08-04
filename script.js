var body  = document.querySelector("body");
var img = document.querySelector(".img");
var btn = document.querySelector(".btn");
var dosya = document.querySelector(".resim");

     function islem()
    {
        var e = Math.floor(Math.random()*12)+1;
        img.src="../resimgalerisi/"+e+".jpeg";
        dosya.textContent="../resimgalerisi/"+e+".jpeg";
    }
   