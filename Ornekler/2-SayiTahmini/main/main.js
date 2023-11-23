let number = document.getElementById("number");
let tahminBtn = document.getElementById("btnGuess");
let result = document.getElementById("result");

var falseSound = new Audio("../Sesler/false.mp3");
var trueSound = new Audio("../Sesler/true.mp3");
let randomSayi = Math.floor(Math.random() * 11);

function sayiTahmin() {
    var txt = number.value;
    if(txt ==""){
        result.innerText="Değer girmeyi unuttun YEĞENN !!!"
        result.style.fontSize="30px";
        result.style.backgroundColor="red"
        falseSound.play();
    }
    else if(txt > randomSayi){
        result.innerText="Büyük sayı tahmini YEĞENN !!!"
        result.style.fontSize="30px";
        result.style.border="2px solid crimson"
        falseSound.play();
    }
    else if(txt < randomSayi){
        result.innerText="Küçük sayı tahmini YEĞENN !!!"
        result.style.fontSize="30px";
        result.style.border="2px solid crimson"
        falseSound.play();
    }else{
        result.innerText="Aferim doğru tahmin YEĞENN !!!"
        result.style.fontSize="30px";
        result.style.border="2px solid green"
        trueSound.play();
    }
}

tahminBtn.addEventListener("click",sayiTahmin)
