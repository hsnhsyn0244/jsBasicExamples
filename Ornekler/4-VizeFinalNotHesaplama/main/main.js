let vize = document.getElementById("vize");
let final = document.getElementById("final");
let btnHesapla = document.getElementById("hesapla");
let ortalama = document.getElementById("ortalama");
let harflendirme = document.getElementById("harflendirme");

btnHesapla.addEventListener("click", () => {
  let vizeTxt = vize.value;
  let finalTxt = final.value;

  let sonuc = Math.round(vizeTxt * 0.4 + finalTxt * 0.6);
  
   if (sonuc>=90 && sonuc<=100) {
    ortalama.innerText=`Ortalamanız : ${sonuc}`
    harflendirme.innerText="AA"
    harflendirme.style.backgroundColor="lightgreen"
  }
  else if(sonuc>=75 && sonuc<=89) {
    ortalama.innerText=`Ortalamanız : ${sonuc}`
    harflendirme.innerText="BA"
    harflendirme.style.backgroundColor="lightgreen"
  }
  else if(sonuc>=60 && sonuc<=74) {
    ortalama.innerText=`Ortalamanız : ${sonuc}`
    harflendirme.innerText="BB"
    harflendirme.style.backgroundColor="lightgreen"
  }
  else if(sonuc>=55 && sonuc<=59) {
    ortalama.innerText=`Ortalamanız : ${sonuc}`
    harflendirme.innerText="CB"
    harflendirme.style.backgroundColor="lightgreen"
  }
  else if(sonuc>=50 && sonuc<=54) {
    ortalama.innerText=`Ortalamanız : ${sonuc}`
    harflendirme.innerText="CC"
    harflendirme.style.backgroundColor="lightgreen"
  }
  else if(sonuc==50) {
    ortalama.innerText=`Ortalamanız : ${sonuc}`
    harflendirme.innerText="DC"
    harflendirme.style.backgroundColor="orange"
  }
  else{
    ortalama.innerText=`Ortalamanız : ${sonuc}`
    harflendirme.innerText="FF"
    harflendirme.style.backgroundColor="red"
  }
});
