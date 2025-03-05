import { signUp } from "./auth"; 

console.log("index message");



const signupform = document.querySelector("#signupForm");
signupform.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signuppassword").value;
    
    signUp(firstname, lastname, email, password);
});