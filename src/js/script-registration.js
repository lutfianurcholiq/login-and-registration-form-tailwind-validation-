const nama = document.getElementById('nama')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password_confirm')

// toggle eye password
const togglePassword = document.querySelector('#togglePassword')
const togglePasswordConfirm = document.querySelector('#togglePasswordConfirm')
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

togglePasswordConfirm.addEventListener('click', () => {

    if (passwordConfirm.type === 'password') {

        passwordConfirm.type = 'text'
        togglePasswordConfirm.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
        
    } else {
        
        passwordConfirm.type = 'password'
        togglePasswordConfirm.innerHTML = '<i class="fa-regular fa-eye"></i>'

    }
})

buttonSubmit.addEventListener('click', (e) => {

    // message form
    const passwordMessage = document.getElementById('passwordMessage')
    const emailMessage = document.getElementById('emailMessage')
    const namaMessage = document.getElementById('namaMessage')
    const passwordConfirmMessage = document.getElementById('passwordConfirmMessage')

    e.preventDefault()
    
    if (email.value === "" || password.value === "" || nama.value === "" || passwordConfirm.value === "") {

        namaMessage.innerHTML = "Nama Required"
        emailMessage.innerHTML = "Email Required"
        passwordMessage.innerHTML = "Password Required"
        passwordConfirmMessage.innerHTML = "Password Confirm Required"
        
    } else {
        namaMessage.innerHTML = ""
        emailMessage.innerHTML = ""
        passwordMessage.innerHTML = ""
        passwordConfirmMessage.innerHTML = ""
    }

})
