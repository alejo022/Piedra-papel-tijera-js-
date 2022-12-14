const piedra = "piedra";
const papel = "papel";
const tijeras = "tijera";

const empate = 0;
const gano = 1;
const perdio = 2;

let empataron = 0;
let ganaste = 0;
let perdiste = 0;

const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijera = document.getElementById("tijera");
const textoResultado = document.getElementById("resultado");
const imgMaquina = document.getElementById("img-maquina");
const imgUsuario = document.getElementById("img-usuario");
let eleccionJugador = document.getElementById("eleccion-jugador");
let eleccionMaquina = document.getElementById("eleccion-maquina");
let txtPerdiste = document.getElementById("txt_perdiste");
let txtEmpataron = document.getElementById("txt_empataron");
let txtGanaste = document.getElementById("txt_ganaste");

botonPiedra.addEventListener("click", () => {
    /* console.log("piedra"); */
    play(piedra);
});

botonPapel.addEventListener("click", () => {
    /* console.log("papel"); */
    play(papel);
});

botonTijera.addEventListener("click", () => {
    /* console.log("tijera"); */
    play(tijeras);
});

function play(OpcionUsuario) {

    eleccionJugador.innerHTML = OpcionUsuario;
    eleccionJugador.style = "text-transform: uppercase;";

    imgUsuario.src = "./assets/img/" + OpcionUsuario + ".png";
    textoResultado.innerHTML = "Jugando...";

    const intervalo = setInterval(function () {
        const OpcionMaquina = calcularOpcionMaquina();
        imgMaquina.src = "./assets/img/" + OpcionMaquina + ".png";
    }, 200);

    /* eleccionMaquina.innerHTML = OpcionMaquina; */
    setTimeout(function () {

        clearInterval(intervalo);

        const OpcionMaquina = calcularOpcionMaquina();

        /* console.log (OpcionMaquina); */

        const resultado = calcularResultado(OpcionUsuario, OpcionMaquina)

        imgMaquina.src = "./assets/img/" + OpcionMaquina + ".png";

        eleccionMaquina.innerHTML = OpcionMaquina;
        eleccionMaquina.style = "text-transform: uppercase;";

        switch (resultado) {
            case empate:
                /* alert(OpcionMaquina+"Hubo un empate"); */
                txtEmpataron.innerHTML = empataron;
                textoResultado.innerHTML = "Hubo un empate";
                break;
            case gano:
                /* alert(OpcionMaquina+"Ganaste"); */
                txtGanaste.innerHTML = ganaste;
                textoResultado.innerHTML = "Ganaste";
                break;
            case perdio:
                /* alert(OpcionMaquina+"Perdiste"); */
                txtPerdiste.innerHTML = perdiste;
                textoResultado.innerHTML = "Perdiste";
                break;
        }
    }, 2000);

}

function calcularOpcionMaquina() {
    const numero = Math.floor(Math.random() * 3);
    switch (numero) {
        case 0:
            return piedra;
        case 1:
            return papel;
        case 2:
            return tijeras;
    }
}

function calcularResultado(OpcionUsuario, OpcionMaquina) {
    if (OpcionUsuario === OpcionMaquina) {
        empataron++;
        return empate
    } else if (OpcionUsuario === piedra) {

        if (OpcionMaquina === papel) {
            perdiste++;
            return perdio;
        }
        if (OpcionMaquina === tijeras) {
            ganaste++;
            return gano;
        }

    } else if (OpcionUsuario === papel) {

        if (OpcionMaquina === piedra) {
            ganaste++;
            return gano;
        }
        if (OpcionMaquina === tijeras) {
            perdiste++;
            return perdio;
        }

    } else if (OpcionUsuario === tijeras) {

        if (OpcionMaquina === piedra) {
            perdiste++;
            return perdio;
        }
        if (OpcionMaquina === papel) {
            ganaste++;
            return gano;
        }

    }
}
