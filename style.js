const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Hemanth" && password === "hemanth@1101") {
        alert("You have successfully logged in.");
        location.replace("agr_details.html");
    } else
        alert("Invalid username or password");
   
})