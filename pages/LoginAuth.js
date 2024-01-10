// Defines a function intended for validating the form and handling the login logic.
function validateFormAndLogin() {
    // Retrieves the input element for the username from the DOM.
    var usernameInput = document.getElementById('floatingInputUsername');
    // Retrieves the input element for the password from the DOM.
    var passwordInput = document.getElementById('floatingPassword');
    // Retrieves the span/div element intended to display the username error message.
    var usernameError = document.getElementById('username-error');
    // Retrieves the span/div element intended to display the password error message.
    var passwordError = document.getElementById('password-error');
    // Initializes a boolean variable to keep track of whether the form data is valid.
    var valid = true;

    // Initially hides any error messages related to the username.
    usernameError.style.display = 'none';
    // Initially hides any error messages related to the password.
    passwordError.style.display = 'none';

    // Checks if the username input is empty after removing any whitespace.
    if (usernameInput.value.trim() === '') {
        // If empty, shows the username error message.
        usernameError.style.display = 'block';
        // Sets the form data validity to false.
        valid = false;
        // Checks if the provided username does not match the string "admin".
    } else if (usernameInput.value !== "admin") {
        // If it doesn't match, updates and shows the username error message.
        usernameError.textContent = 'Invalid Student ID.';
        usernameError.style.display = 'block';
        // Sets the form data validity to false.
        valid = false;
    }

    // Checks if the password input is empty after removing any whitespace.
    if (passwordInput.value.trim() === '') {
        // If empty, shows the password error message.
        passwordError.style.display = 'block';
        // Sets the form data validity to false.
        valid = false;
        // Checks if the provided password does not match the string "asu123".
    } else if (passwordInput.value !== "asu123") {
        // If it doesn't match, updates and shows the password error message.
        passwordError.textContent = 'Invalid Password.';
        passwordError.style.display = 'block';
        // Sets the form data validity to false.
        valid = false;
    }

    // If the form data is valid (both username and password are correct),
    if (valid) {
        // Redirects the user to the 'dashboard.html' page.
        window.location.href = 'dashboard.html';
    }

    // Always returns false to prevent the form from being submitted in the traditional way
    // (which would reload the page), since the validation and redirection are handled by JavaScript.
    return false;
}
