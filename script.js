
function ejecuta() {
    // document.getElementsByTagName('p')[0].onclick = saludo;
    // document.getElementById('alerta').onclick = saludo;

    // for (i=0;i<2;i++) {
    // document.getElementsByClassName('alerta')[i].onclick = saludo;
    // }

    // document.querySelector("#principal p:last-child").onclick = saludo;


    var elementos = document.querySelectorAll("#principal p, span");

    for (i=0;i<elementos.length;i++) {
        elementos[i].onclick = saludo;
    }
}

function saludo() {
    alert('Hola! Qué hay de nuevo?');
}

window.onload = ejecuta;