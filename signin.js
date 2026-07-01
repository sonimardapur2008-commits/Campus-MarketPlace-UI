document.getElementById("signinBtn").addEventListener("click", function () {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    
    if (email === "test@gmail.com" && password === "1234") {
        alert("Login Successful ✅");

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "home.html";
    } else {
        alert("Invalid Email or Password ❌");
    }
});
