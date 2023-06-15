/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const msj = document.getElementById("mensaje");
const rlto = document.getElementById("resultado");

function btnEncriptar(){
    const encriptado = encriptar(msj.value);
    rlto.value = encriptado;
    event.preventDefault();
}

function encriptar(mensajeEncriptado){
    let matrixCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase()

    for(let i = 0; i < matrixCod.length; i++){
        if(mensajeEncriptado.includes(matrixCod[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrixCod[i][0], matrixCod[i][1]);
        }
    }
    return mensajeEncriptado;
}

function btnDesencriptar(){
    const desEncriptado = desEncriptar(rlto.value);
    msj.value = desEncriptado;
    event.preventDefault();
}

function desEncriptar(mensajeEncriptado){
    let matrixCod = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase()

    for(let i = 0; i < matrixCod.length; i++){
        if(mensajeEncriptado.includes(matrixCod[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrixCod[i][1], matrixCod[i][0]);
        }
    }
    return mensajeEncriptado;
}

function btnLimpiar(){
    location.reload();
}