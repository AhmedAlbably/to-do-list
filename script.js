// ! what we gonna do in this project will be to do list
// ! first we will create input field
// ! second we will create a button
// ! the we will take text from the user and put it in list

// ! step number one we call the elements we need

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.querySelector("ul");

// ! step number two we create a function

btn.addEventListener("click", add);

function add() {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  } else {
    window.prompt('Please enter your task first')
  }
}
