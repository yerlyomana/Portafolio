const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expreções = {
    nome: /^[a-zA-ZÁ-ÿ]{1,12}$/, //letras
    sobrenome: /^[a-zA-ZÁ-ÿ\s]{1,12}$/, //letras
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^.{7,11}$/, // 7 a 11 digitos.
    mensagem: /^[a-zA-Z0-9\_ \-]{4,16}$/,//letras, numero, pontos, virgulas.
}

const campos = {
    nome: false,
    sobrenome: false,
    email: false,
    celular: false,
    mensagem: false
}

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "nome":
            validarCampo(expreções.nome, e.target, "nome"); 
        break;
        case "sobrenome":
            validarCampo(expreções.sobrenome, e.target, "sobrenome"); 
        break;
        case "email":
            validarCampo(expreções.email, e.target, "email"); 
        break;
        case "celular":
            validarCampo(expreções.celular, e.target, "celular"); 
        break;
        case "mensagem":
            validarCampo(expreções.mensagem, e.target, "mensagem"); 
        break;
    
        
    }
}

const validarCampo = (expreção, input, campo) => {
    if(expreção.test(input.value)){
        document.getElementById(`grupo--${campo}`).classList.remove("formulario--grupo-incorrecto");
        document.getElementById(`grupo--${campo}`).classList.add("formulario--grupo-correcto");
        document.querySelector(`#grupo--${campo} i`).classList.remove("fas fa-check-circle");
        document.querySelector(`#grupo--${campo} i`).classList.add("fas fa-check-circle");
        document.querySelector(`#grupo--${campo} .formulario--input-error`).classList.remove("formulario--input-error-activo");
        campos[campo] =true;
    } else {
        document.getElementById(`grupo--${campo}`).classList.add("formulario--grupo-incorrecto");
        document.getElementById(`grupo--${campo}`).classList.remove("formulario--grupo-incorrecto");
        document.querySelector(`#grupo--${campo} i`).classList.add("fas fa-times-circle");
        document.querySelector(`#grupo--${campo} i`).classList.remove("fas fa-check-circle");
        document.querySelector(`#grupo--${campo} .formulario--input-error`).classList.add("formulario--input-error-activo");
        campos[campo] =false;
    }

}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    if(campos.nome && campos.sobrenome && campos.email && campos.celular && campos.mensagem){
        formulario.reset();

        document.getElementById("formulario--mensagem-exito").classList.add("formulario--mensagem-exito-activo");
        setTimeout(() => {
            document.getElementById("formulario--mensagem-exito").classList.add("formulario--mensagem-exito-activo");
        }, 5);

        document.querySelectorAll("formulario--grupo-correcto").forEach((icono) => {
            icono.classList.remove("formulario--grupo-corecto");
        })
       
    }
});



// /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,