const preguntasGeo= [
    {
        pregunta: "¿En qué país está Ushuaia, la ciudad más al sur del mundo?",
        respuesta: {
            a: "Sudáfrica",
            b: "Argentina",
            c: "Nueva Zelanda"
        },
        respuestacorrecta: "b"
    },
    {
        pregunta: "¿Cuál es la capital del estado de California?",
        respuesta: {
            a: "Sacramento",
            b: "Los Ángeles",
            c: "San Francisco"
        },
        respuestacorrecta: "a"
    },
    {
        pregunta: "¿Cuál es el idioma oficial de Uruguay?",
        respuesta: {
            a: "El español",
            b: "El uruguayo",
            c: "El uruguayo y el español"
        },
        respuestacorrecta: "a"
    },
    {
        pregunta: "¿Cuál es la capital de Luxemburgo?",
        respuesta: {
            a: "Berlín ",
            b: "La Valeta",
            c: "Luxemburgo"
        },
        respuestacorrecta: "c"
    },
    {
        pregunta: "¿Cuál es el océano más profundo?",
        respuesta: {
            a: "Atlántico ",
            b: "Pacífico",
            c: "Índico"
        },
        respuestacorrecta: "b"
    },
]
var audio = document.getElementById("horror");
audio.controls = false;
var off = document.getElementById("speakeroff");
var speakerOn = document.getElementById("speakeron");

function pause() {
    var pause = document.getElementById("pause");
    var x = document.getElementById("speakeron");
    if (audio.paused || audio.ended) {
        //pause.title = "pause";
        pause.style.display = "none"
        x.style.display = "block";
        audio.play();
    } else {
        //playpause.title = "play";
        pause.style.display = "block"
        x.style.display = "none";
        audio.pause();
    }
}

var i = 0;
var vidas = 3;
var vivo = true;
var pBar = document.getElementById("progressBar");
var preguntasLol = document.getElementById("bloquePreg");

function validar(respuestaElegida) {
    if (i < 5) {

        if (respuestaElegida == preguntasGeo[i].respuestacorrecta) {
            i = i + 1;
            preguntasLol.style.display = "none"
            siguientePregunta(i);
        } else {
            vidas = vidas - 1;
            pBar.value = parseInt(pBar.value) - 1;
            if (vidas == 0) {
                vivo = false;
                var jumpScare = document.getElementById("jumpscare");
                document.getElementById("scream").play();
                jumpScare.style.display = "block";
                alert.jumpScare.src;
                vidas = 3;
                i = 0;
                siguientePregunta(i);
            } else {
                document.getElementById("alert").play();
                alert("¡Cuidado! ELLA ESTÁ CERCA");

            }
        }
    } else if (vivo = true) {
        var flecha = document.getElementById("flecha");
        flecha.style.display = "block"
    }
}


function activatePreg() {

    preguntasLol.style.display = "block";
}
window.onload = function() {

    document.getElementById("preguntas").innerHTML = preguntasGeo[i].pregunta;
    document.getElementById("respuestaA").innerHTML = preguntasGeo[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = preguntasGeo[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = preguntasGeo[i].respuesta.c;
}

function siguientePregunta(i) {
    document.getElementById("preguntas").innerHTML = preguntasGeo[i].pregunta;
    document.getElementById("respuestaA").innerHTML = preguntasGeo[i].respuesta.a;
    document.getElementById("respuestaB").innerHTML = preguntasGeo[i].respuesta.b;
    document.getElementById("respuestaC").innerHTML = preguntasGeo[i].respuesta.c;
}

