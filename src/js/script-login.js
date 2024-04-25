const email = document.getElementById('email')
const password = document.getElementById('password')


// toggle eye password
const togglePassword = document.querySelector('#togglePassword')
const openEye = document.querySelectorAll('#openEye')
const closeEye = document.querySelectorAll('#closeEye')

const buttonSubmit = document.querySelector('#submitForm')

togglePassword.addEventListener('click', () => {

    if (password.type === 'password') {

        password.type = 'text'
        togglePassword.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
        
    } else {
        
        password.type = 'password'
        togglePassword.innerHTML = '<i class="fa-regular fa-eye"></i>'

    }
})

buttonSubmit.addEventListener('click', (e) => {

    // message form
    const passwordMessage = document.getElementById('passwordMessage')
    const emailMessage = document.getElementById('emailMessage')

    e.preventDefault()
    
    if (email.value === "" && password.value === "") {

        emailMessage.innerHTML = "Email Required"
        passwordMessage.innerHTML = "Password Required"
        
    } else {
        emailMessage.innerHTML = ""
        passwordMessage.innerHTML = ""
    }


})
