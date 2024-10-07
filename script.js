
//Add los eventos a cada input del form
const inputNombre = document.getElementById("formularioNombre");
inputNombre.addEventListener("blur", (event)=>{checkNombreYApe(event.target)})

const inputApe = document.getElementById("formularioApe");
inputApe.addEventListener("blur", (event)=>{checkNombreYApe(event.target)})

const inputTlfn = document.getElementById("formularioTel");
inputTlfn.addEventListener("blur", (event)=>{checkTlfn(event.target)})

const inputPass = document.getElementById("formularioPass");
inputPass.addEventListener("blur", (event)=>{checkPass(event.target)})

const inputPassConfirm = document.getElementById("formularioPassR");
inputPassConfirm.addEventListener("blur", (event)=>{checkPassConfirm(event.target)})

const confirmarLabel = document.getElementById("confirmar");
confirmarLabel.addEventListener("change", function(event) {
    if (event.target.checked) {
        confirmarLabel.classList.add("inputOK");
        checkElementsOK();
    } else {
        confirmarLabel.classList.remove("inputOK");
    }
});

let btnEnviar = document.getElementById("botonRegistrar");
btnEnviar.addEventListener("click", () =>{alert("Formulario enviado")})


function checkElementsOK(){
    const formulario = document.forms["formulario"];

    let hayError=true;
  
    formulario.querySelectorAll("input").forEach(element => {
        hayError = element.classList.contains("inputOK") ? hayError && true : false;
    });
    let boton = document.getElementById("botonRegistrar");

    boton.disabled = hayError ? false : true;
    
}

function changeColor(isOK=false, element){
    if (isOK){
        element.classList.add("inputOK")
        element.classList.remove("inputError")
    }else{
        element.classList.remove("inputOK")
        element.classList.add("inputError")
    }
    checkElementsOK()
}

// Función para validar el campo nombre y apellidos del form
function checkNombreYApe(element){
    const regex = /^[a-zA-Z\s]{1,20}$/;
    if (element.value.length > 0){
        changeColor(regex.test(
            element.value),
            element)
    }
}

function checkTlfn(element){
    const regex = /^[0-9]{9}$/;
    if (element.value.length > 0){
    changeColor(regex.test(
        element.value),
        element)
    }

}

function checkPass(element){
    // Afirmacion anticipada en regex
    // (?=....)
    //asegura que una condición es verdadera a partir de 
    //una determinada posición en la cadena, pero sin 
    //consumir esos caracteres en la coincidencia final.
    //.* significa que puede haber cero o más caracteres antes del dígito.
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (element.value.length > 0){
        changeColor(regex.test(element.value), element);
    }
}

function checkPassConfirm(element){
    const pass = document.getElementById("formularioPass").value;
    if (pass.length > 0){
        changeColor(pass === element.value, element);
    }
}
