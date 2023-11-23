const ball = document.getElementById("ball");
ball.addEventListener("click", changeThema)


let leftSide = true;
let rightSide;

function changeThema() {
  if (leftSide == true) {
    ball.style.left = "40px";
    ball.style.backgroundColor = "black";
    leftSide = false;
   
    document.querySelector(".mode").style.backgroundColor="white";
    document.querySelector("body").style.backgroundColor="black";
  } else {
    ball.style.left = "5px";
    ball.style.backgroundColor = "white";
    document.querySelector(".mode").style.backgroundColor = "black";
    document.querySelector("body").style.backgroundColor = "white";
  }
}
