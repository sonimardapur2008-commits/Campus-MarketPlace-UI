let generatedOTP;

document.getElementById("sendOtpBtn").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;

    if (name === "" || contact === "") {
        alert("Please fill all details!");
        return;
    }

    generatedOTP = Math.floor(1000 + Math.random() * 9000);

    alert("Your OTP is: " + generatedOTP);

    document.getElementById("otpBox").style.display = "block";
});

document.getElementById("verifyOtpBtn").addEventListener("click", function () {
    let userOTP = document.getElementById("otp").value;

    if (userOTP == generatedOTP) {
        alert("Login Successful ✅");

        localStorage.setItem("isLoggedIn", "true");

<<<<<<< HEAD
        window.location.href = "main/index.html";
=======
        window.location.href = "Main/index.html";; // fix here

>>>>>>> 52bc245af26fe15f7b89a4ff8f661e625586c8e8
    } else {
        alert("Wrong OTP ❌");
    }
});
