import { RandomName } from "./randomFunction.js";

let addBtn = document.getElementById("addBtn");
let randBtn = document.getElementById("randBtn");
let deleteBtn = document.getElementById("deleteBtn");
let userInput = document.getElementById("userInput");
let nameTxt = document.getElementById("nameTxt");

let nameArray = [];

if(localStorage.getItem("names")){
    nameArray = JSON.parse(localStorage.getItem("names"));
}

addBtn.addEventListener('click', function(){
    nameArray.push(userInput.value);
    console.log(nameArray); 
    userInput.value = "";

    localStorage.setItem("names", JSON.stringify(nameArray));
});

randBtn.addEventListener('click', function(){
    nameTxt.textContent = RandomName(nameArray);
});

deleteBtn.addEventListener('click', function(){
    let index2 = nameArray.indexOf(userInput.value);
    nameArray.splice(index2, 1);
    nameInput.value = "";
    console.log(nameArray);
    
    localStorage.setItem("names", JSON.stringify(nameArray));
})


