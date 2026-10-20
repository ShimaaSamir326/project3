const form = document.getElementById("registrationForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const age = document.getElementById("age");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError =
    document.getElementById("confirmPasswordError");
const ageError = document.getElementById("ageError");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const errorElements = [
        nameError,
        emailError,
        passwordError,
        confirmPasswordError,
        ageError
    ];

    errorElements.forEach(function (error) {
        error.textContent = "";
    });

    formMessage.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (password.value.length < 8) {
        passwordError.textContent =
            "Password must be at least 8 characters.";
        isValid = false;
    }

    if (confirmPassword.value === "") {
        confirmPasswordError.textContent =
            "Please confirm your password.";
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent =
            "Passwords do not match.";
        isValid = false;
    }

    const userAge = Number(age.value);

    if (
        age.value.trim() === "" ||
        !Number.isInteger(userAge) ||
        userAge < 1 ||
        userAge > 120
    ) {
        ageError.textContent =
            "Enter a valid age between 1 and 120.";
        isValid = false;
    }

    if (isValid) {
        formMessage.textContent =
            "Registration successful! Your information is valid.";
    }
});