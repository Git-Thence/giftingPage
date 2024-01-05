const inputs = document.querySelectorAll(".auth-form__otp_fields input");
const form = document.querySelector('.auth-form form')

if (inputs.length) {
    inputs.forEach((input, index) => {
        input.dataset.index = index;
        input.addEventListener("keyup", handleOtp);
        input.addEventListener("paste", handleOnPasteOtp);
    });
}


function handleOtp(e) {
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (fieldIndex < inputs.length - 1 && isValidInput) {
        input.nextElementSibling.focus();
    }

    if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }

    if (fieldIndex == inputs.length - 1 && isValidInput) {
        submit();
    } else {
        if (form.classList.contains('error')) {
            form.classList.remove('error')
        }
    }
}

function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    }
}

function submit() {
    const submitButton = document.querySelector('.opt-submit');
    submitButton.classList.remove('disabled')
    let otp = "";
    inputs.forEach((input) => {
        otp += input.value;
        // input.disabled = true;
        // input.classList.add("disabled");
    });
    if (otp !== '12345') {
        console.log(form)
        form.classList.add('error');
    }
}

if (detectMob()) {
    const loginButton = document.querySelector('.mobile-login .button-gradient');
    if (loginButton !== null) {
        loginButton.addEventListener('click', function (e) {
            e.preventDefault();
        })
    }
}

const webAuthPopup = document.querySelector('.popup-web-auth');

if (webAuthPopup !== null) {
    const loginWebAuth = webAuthPopup.querySelector('.auth-form--login');
    const signupWebAuth = webAuthPopup.querySelector('.auth-form--signup');
    const phoneWebAuth = webAuthPopup.querySelector('.auth-form--phone-popup');
    const otpWebAuth = webAuthPopup.querySelector('.auth-form--otp-popup');

    const webAuthButton = webAuthPopup.querySelectorAll('.button-gradient');

    for (let i = 0; i < webAuthButton.length; i++) {
        webAuthButton[i].addEventListener('click', function (e) {
            e.preventDefault();
            const buttonHref = this.getAttribute('href');
            const buttonData = webAuthButton[i].dataset.popuptrigger;
            console.log(buttonData)
            if (buttonHref === 'signup.html') {
                loginWebAuth.style.display = 'none'
                signupWebAuth.style.display = 'flex'
            }
            if (buttonData === 'popup-login-phone') {
                signupWebAuth.style.display = 'none'
                phoneWebAuth.style.display = 'flex'
            }
            if (buttonData === 'popup-login-otp') {
                phoneWebAuth.style.display = 'none'
                otpWebAuth.style.display = 'flex'
            }
        })
    }

    const webAuthBackButton = webAuthPopup.querySelectorAll('.button-capsule');
    for (let i = 0; i < webAuthBackButton.length; i++) {
        webAuthBackButton[i].addEventListener('click', function (e) {
            e.preventDefault();
            const dataClose = this.dataset.close;
            if (dataClose === 'popup-signup') {
                loginWebAuth.style.display = 'flex'
                signupWebAuth.style.display = 'none'
            }
            if (dataClose === 'popup-login-phone') {
                signupWebAuth.style.display = 'flex'
                phoneWebAuth.style.display = 'none'
            }
            if (dataClose === 'popup-login-otp') {
                phoneWebAuth.style.display = 'flex'
                otpWebAuth.style.display = 'none'
            }
        });
    }
}

const authFormContainer = document.querySelector('.auth-form__bottom__form');
if (authFormContainer !== null) {
    const authInputs = authFormContainer.getElementsByTagName('input');
    const disabledButton = authFormContainer.querySelector('.button-gradient');
    for (let i = 0; i < authInputs.length; i++) {
        authInputs[i].addEventListener('keyup', function () {
            const _authInput = this;
            const _authInputName = _authInput.getAttribute('name');
            if (_authInputName === 'login-username') {
                if (_authInput.value.length > 2) {
                    if (!validateEmailPhone(_authInput.value)) {
                        if (!disabledButton.classList.contains('disabled')) {
                            authFormContainer.closest('form').classList.add('error');
                            disabledButton.classList.add('disabled')
                        }
                    } else {
                        if (disabledButton.classList.contains('disabled')) {
                            authFormContainer.closest('form').classList.remove('error');
                            disabledButton.classList.remove('disabled')
                        }
                    }
                } else {
                    authFormContainer.closest('form').classList.remove('error');
                    disabledButton.classList.add('disabled')
                }
            }
        })
    }
}

function validateEmailPhone(email) { //Validates the email address
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/;
    return emailRegex.test(email);
}

// password visible field
const showPasswordButtons = document.querySelectorAll('.auth-form__bottom__form .has-button');
if (showPasswordButtons !== null) {
    for (let i = 0; i < showPasswordButtons.length; i++) {
        showPasswordButtons[i].querySelector('button').addEventListener('click', function () {
            const passwordField = this.parentNode.getElementsByTagName('input')[0];
            const passwordAttr = passwordField.getAttribute('type');
            this.classList.toggle('active')
            if(passwordAttr === 'password'){
                passwordField.setAttribute('type', 'text');
            } else {
                passwordField.setAttribute('type', 'password');
            }
        });
    }
}