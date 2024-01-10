function validateFormAndLogin() {
    var usernameInput = document.getElementById('floatingInputUsername');
    var passwordInput = document.getElementById('floatingPassword');
    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');
    var valid = true;

    // Assume there are no errors initially
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    // Validate the Student ID
    if (usernameInput.value.trim() === '') {
        usernameError.style.display = 'block';
        valid = false;
    } else if (usernameInput.value !== "admin") {
        usernameError.textContent = 'Invalid Student ID.';
        usernameError.style.display = 'block';
        valid = false;
    }

    // Validate the Password
    if (passwordInput.value.trim() === '') {
        passwordError.style.display = 'block';
        valid = false;
    } else if (passwordInput.value !== "asu123") {
        passwordError.textContent = 'Invalid Password.';
        passwordError.style.display = 'block';
        valid = false;
    }

    // If valid, redirect to the dashboard page
    if (valid) {
        window.location.href = 'dashboard.html';
    }

    // Prevent form submission
    return false;
}
