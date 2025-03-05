import { signUp, logIn, logOut } from "./auth"; 

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

const logInForm = document.querySelector("#loginForm");
logInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginpassword").value;
    logIn(email, password);
});

const logOutForm = document.querySelector("#logoutForm");
logOutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    logOut();
});