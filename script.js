
document.getElementById("verificationForm").addEventListener("submit", function (event) {
    event.preventDefault()

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    usernameError.style.display = "none";
    passwordError.style.display = "none";
    confirmPasswordError.style.display = "none";

    let validate = true;

    if (!username) {
        usernameError.style.display = "block";
        validate = false;
    }

    if (!password) {
        passwordError.style.display = "block";
        validate = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.style.display = "block";
        validate = false;
    }

    if (validate) {
        alert('Form submitted successfully!')
    }
});