const input = document.getElementById("input");
const firstName = document.getElementById("fistname");
const secondName = document.getElementById("secondName");
const emailAddress = document.getElementById("email");
const pass = document.getElementById("password");
const age = document.getElementById("age");
const Btn = document.getElementById("ourButton");

Btn.addEventListener("click", (event)=>{
    event.preventDefault()

    addItem()
})
function addItem(){
    if (firstName != "" && secondName != "" && emailAddress != "" && pass != * && age !="" ){
        console.log("You may proeceed!")
    }else{
        console.log("You cannot submit empty!")
    }
}

// function addItem(event) {
//     secondName.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//     event.preventDefault();
//     console.log(secondName.textContent);
//   }
// secondName.addEventListener("submit", addItem)

// document.addEventListener("DOMContentLoaded",()=>{
//     document.querySelector("form").addEventListener("submit",(e)=>{
//         e.preventDefault();
//         console.log(e.target.input.value)
//     } )
// })