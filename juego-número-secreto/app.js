
let numeroSecreto = 0;
let intentos = 0;
let maximoIntentos = 5;
let numeroSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.querySelector(".container__input").value);
    
    console.log(numeroSecreto);

    console.log(numeroSorteados);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('.texto__parrafo','El número secreto es menor');
        }else{
            asignarTextoElemento('.texto__parrafo','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    if(intentos == maximoIntentos){
        asignarTextoElemento('.texto__parrafo','Has llegado al número máximo de intentos');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    return;
}

function limpiarCaja() {
    document.querySelector('.container__input').value = '';
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(numeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles, volver a comenzar.');
        numeroSorteados = [];
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    if(numeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        numeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('.texto__parrafo',`Indica un número del 1 al ${numeroMaximo}`);
    
    numeroSecreto = generarNumeroSecreto();
    
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}
