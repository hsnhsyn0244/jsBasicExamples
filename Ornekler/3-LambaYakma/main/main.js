let ac = document.getElementById("open");
let kapa = document.getElementById("close");
let img = document.querySelector("img");

function ısıkAcma() {
    img.src="../resimler/LampOn.webp"
}
ac.addEventListener("click",ısıkAcma);

function ısıkKapama() {
    img.src="../resimler/LambOf.webp"
}
kapa.addEventListener("click",ısıkKapama);