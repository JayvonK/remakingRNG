let addBtn = document.getElementById("addBtn");
let randBtn = document.getElementById("randBtn");
let deleteBtn = document.getElementById("deleteBtn");
let userInput = document.getElementById("userInput");
let nameTxt = document.getElementById("nameTxt");

let nameArray = [];


addBtn.addEventListener('click', function(){
    nameArray.push(userInput.value);
    console.log(nameArray);
    userInput.value = "";
})

randBtn.addEventListener('click', function(){
    nameTxt.textContent = RandomName();
})


