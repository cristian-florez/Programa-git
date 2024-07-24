//numero aleatorio
function numeroAleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
            resultado ="✊";
        } else if (jugada == 2) {
            resultado ="✋";
        } else if (jugada == 3) {
            resultado = "✌️";
        } else {
            resultado = "elige un valor valido"
        }
    return resultado
}
function ganador(jugador1, jugador2) {
    let total = "";

    if (jugador1 == jugador2) {
        total = "empate";
    } else if (jugador1 == 1 && jugador2 == 3) {
        total = "ganaste"
        triunfo = triunfo + 1;
    } else if (jugador1 == 2 && jugador2 == 1) {
        total = "ganaste"
        triunfo = triunfo + 1;
    } else if (jugador1 == 3 && jugador2 == 2) {
        total  = "ganaste"
        triunfo = triunfo + 1;
    } else {
        total = "perdiste";
        derrotas = derrotas + 1;
    }
    return total
}

let jugador = 0
let pc = 0
let triunfo = 0
let derrotas = 0

while (triunfo < 3 && derrotas < 3) {
    jugador = prompt("elige 1 para piedra, 2 para papel y 3 para tijera");
    pc = numeroAleatorio(1,3)
    alert("pc elige: " + eleccion(pc));
    alert("tu eliges: " + eleccion(jugador));
    alert(ganador(jugador, pc))
}
alert("jugador: " + triunfo + " pc: " + derrotas)



