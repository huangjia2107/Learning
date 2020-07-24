let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password1 = document.getElementById("confirm_password");

function showError(input, message) {
    input.className = "error";

    const small = input.nextElementSibling;
    small.className = "error";
    small.innerText = message;
}

function showSuccess(input) {
    input.className = "success";
    const small = input.nextElementSibling;
    small.className = "success";
}

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    })

    return isRequired;
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

function checkPwdMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password do not match");
    }
}

function checkLength(input, min, max) {
    let length = input.value.length;
    if (length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if (length > max) {
        showError(input, `${getFieldName(input)} must be less least ${max} characters`);
    }
    else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!checkRequired([username, email, password, password1])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPwdMatch(password, password1);
    }
});