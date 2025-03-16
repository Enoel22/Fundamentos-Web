window.onload = function() {
    document.getElementById("modelo").onchange = function(e) {
        a = e.target.value;
        if (a == "Raize") {
            var imagen = "img/raize.png";
        } else if (a == "Yaris") {
            var imagen = "img/yaris.png";
        } else if (a == "BZ4X") {
            var imagen = "img/bz4x.png";
        } else if (a == "Avanza") {
            var imagen = "img/avanza.png";
        }
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("version").onchange = function(es) {
        n = es.target.value;
    }
}

function calcular() {
    if (document.getElementById("modelo").value == "Seleccione un modelo:") {
        swal.fire({
            icon: 'info',
            title: 'Atencion',
            text: 'Seleccione un modelo'
        });
    }
    if (document.getElementById("version").value == "Seleccione una versión:") {
        swal.fire({
            icon: 'info',
            title: 'Atencion',
            text: 'Seleccione una version'
        });
    }

    var montoCuota = 0;
    switch (a) {
        case "Raize":
            if (n == "4x2")
                montoCuota = 5000;
            else 
                montoCuota = 7000;
            break;
        case "Yaris":
            if (n == "4x2")
                montoCuota = 5000;
            else 
                montoCuota = 7000;
            break;
        case "BZ4X":
            if (n == "4x2")
                montoCuota = 5000;
            else 
                montoCuota = 7000;
            break;
        case "Avanza":
            if (n == "4x2")
                montoCuota = 5000;
            else 
                montoCuota = 7000;
            break;
        default:
            break;
    }

        let imagenDireccion = "img/" + a.toLowerCase() + ".png";

    swal.fire({
        imageUrl: imagenDireccion, 
        html: "<p> Mira la version del carro " +
            n + " " + a +
            "<br> <br> <strong>Cuota Mensual:</strong><p> " +
            "$" +
            montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Vehiculo" + a,
    });
}


