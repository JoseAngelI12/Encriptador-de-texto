function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let persona = document.getElementById("persona");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if(texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        persona.src = "./img/feliz.png";
    } else{
        persona.src = "./img/triste.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar algun texto'
          })
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let persona = document.getElementById("persona");

    let textoCifrado = texto
                        .replace(/ai/gi, "a")
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u")
    if(texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        persona.src = "./img/feliz.png";
    } else{
        persona.src = "./img/triste.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar algun texto',
          })
    }
}