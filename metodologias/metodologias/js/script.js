function login() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let noLogin = document.getElementById('noLogin')
    let emailInvalido = document.getElementById('email')
    let passwordinvalido = document.getElementById('password')
    let validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let validarPassword = /^\S{6,}$/

    switch (true) {
        case !validarEmail.test(email):
            noLogin.textContent = 'FORMATO DE CORREO ELECTRÓNICO INVÁLIDO'
            emailInvalido.style.borderColor = 'red'
            passwordinvalido.style.borderColor = ''
            break;
        case !validarPassword.test(password):
            noLogin.textContent = 'LA CONTRASEÑA DEBE TENER AL MENOS 6 CARACTERES Y NO CONTENER ESPACIOS EN BLANCO';
            passwordinvalido.style.borderColor = 'red'
            emailInvalido.style.borderColor = ''
            break;
        case (email === 'usuario@example.com' && password === '123456'):
            location.href = '../html/index.html'
            break;
        default:
            noLogin.textContent = 'EL CORREO O CONTRASEÑA NO SON CORRECTOS'
            emailInvalido.style.borderColor = 'red'
            passwordinvalido.style.borderColor = 'red'
            break;
    }
}


btnCategorias.addEventListener('click', () => {
    let categorias = document.getElementById('categorias')
    categorias.classList.toggle('desplegar')
})



