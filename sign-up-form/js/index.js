

const display = document.querySelector(".error")

function confirmMatchingPasswords() {
    const passwordInput = document.querySelector('#user-password').value
    const passwordCheck = document.querySelector('#user-password-confirm').value

    console.log(passwordInput)
    console.log(passwordCheck)

    if (passwordCheck != passwordInput) {
        // alert(`Passwords don't match`)
        document.querySelector(".error").innerHTML = "**Fill in the matching password";

    } else {
        // alert(`Profile created successfully`)
        document.querySelector(".error").innerHTML = "** password match";
    }
}

const createAccountButton = document.querySelector(".btn")

createAccountButton.addEventListener('click', () => {
    confirmMatchingPasswords()
    //    greetingOutput.innerText = `Hello ${name.value}`;
})