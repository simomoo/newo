function validaFirma() {

    var firma = document.getElementById("FIRMA_OTP").value;
    var longitudFirma = document.getElementById("FIRMA_OTP").size;
    var mensajeFirma = "Revise su 'Firma', no olvide que debe ser numérica de " + longitudFirma + " posiciones.";

    if (isWhitespace(firma) || isNaN(firma) || firma.length < longitudFirma) {
        window.alert(mensajeFirma);
        return false;
    } else {
        return true;
    }

}

function pulsarCoord(elemento, coordenada) {
    if (elemento.value.length < elemento.size) {
        if (!comprobarCoordenada(coordenada)) {
            return;
        }
        var borrar = document.getElementById('btnBorrar');
        borrar.disabled = false;
        elemento.value = elemento.value + coordenada;

        if (document.getElementById("FIRMA_OTP")) {
            document.getElementById("FIRMA_OTP").value = document.getElementById("FIRMA_OTP").value + coordenada;
        }

    }
}

function comprobarCoordenada(coordenada) {
    if (!isDigit(coordenada)) {
        alert('Se ha producido una excepción. Por favor, recarge la página.');
        return false;
    }
    return true;
}

function difuminarTeclado() {
    var teclasV = document.getElementsByTagName("DIV");
    for (var i = 0; i < teclasV.length; i++) {
        switch (teclasV[i].className) {
        case "teclaVirtual":
            teclasV[i].className = "teclaVirtualDifuminada";
            document.getElementById('divTxDifuminar').style.display = "none";
            document.getElementById('divTxNoDifuminar').style.display = "block";
            break;
        case "teclaVirtualDifuminada":
            teclasV[i].className = "teclaVirtual";
            document.getElementById('divTxNoDifuminar').style.display = "none";
            document.getElementById('divTxDifuminar').style.display = "block";
            break;
        default:
        }
    }
}

function deshabilitarSelecTecla() {
    return false;
}

function habilitarSelecTecla() {
    return true;
}

function cambiarColor(obj, desactivar) {

    if (typeof document.onselectstart != "undefined") { // IExplorer
        document.onselectstart = (desactivar) ? deshabilitarSelecTecla : habilitarSelecTecla;
    }
    if (window.sidebar) { // Firefox
        document.onmousedown = (desactivar) ? deshabilitarSelecTecla : habilitarSelecTecla;
    }

    var clase = document.getElementById(obj.id).className;
    switch (clase) {
    case "teclaVirtual":
        document.getElementById(obj.id).className = "teclaVirtual teclaVirtualEncendida";
        break;
    case "teclaVirtual teclaVirtualEncendida":
        document.getElementById(obj.id).className = "teclaApagada";
        document.getElementById(obj.id).className = "teclaVirtual";
        break;
    case "teclaVirtualDifuminada":
        document.getElementById(obj.id).className = "teclaVirtualDifuminada teclaVirtualEncendida";
        break;
    case "teclaVirtualDifuminada teclaVirtualEncendida":
        document.getElementById(obj.id).className = "teclaApagada";
        document.getElementById(obj.id).className = "teclaVirtualDifuminada";
        break;
    }
}

function borrarCoordenada(elemento) {
    elemento.value = "";

    if (document.getElementById("FIRMA_OTP")) {
        document.getElementById("FIRMA_OTP").value = "";
    }

    var borrar = document.getElementById('btnBorrar');
    borrar.disabled = true;

}