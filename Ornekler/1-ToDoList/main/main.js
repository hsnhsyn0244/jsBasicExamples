let addBtn = document.getElementById("addButton");
let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer");
console.log(addBtn);
addBtn.addEventListener("click", ()=>{
    var paragraf = document.createElement("li")
    paragraf.innerHTML=inputField.value;
    toDoContainer.appendChild(paragraf)
})