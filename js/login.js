const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    let entrar = false
    let regexEmail = /\w+@\w+\.+[a-z]/
    parrafo.innerHTML = ""
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if(pass.value-length < 8){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})