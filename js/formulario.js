function validar(){
    var email, password, expresion;
    email = document.getElementById("email").value
    password= document.getElementById("password").value
  

    expresion = /\w+@\w+\.+[a-z]/;

    if(email === "" || password === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(email.lenght>50){
        alert("El email es muy largo")
        return false;
    }
    else if(!expresion.test(email)){
        alert("El email no es válido")
        return false;
    }
    else if(password.lenght>20){
        alert("La contraseña solo debe tener 20 caracteres")
        return false;
    }

}
