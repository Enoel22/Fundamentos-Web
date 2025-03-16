function convertirDolares() {
    var dolares = document.getElementById("dollar").value;
    var cambioColones = document.getElementById("cambioColones").value;

    if (dolares == "" || cambioColones == "") {
        swal.fire({
            icon: 'error',
            title: 'Atencion usuario',
            text: 'Por favor, llene todos los campos',
        });
    } else {
        const resultado = dolares * cambioColones;

        document.getElementById("resultado1").innerText = "₡" + resultado;
    }
}

function convertirColones() {
    var colones = document.getElementById("colones").value;
    var cambioDolares = document.getElementById("cambioDolares").value;

    if (colones == "" || cambioDolares == "") {
        swal.fire({
            icon: 'error',
            title: 'Atencion usuario',
            text: 'Por favor, llene todos los campos',
        });
    } else {
        const resultado = colones / cambioDolares;

        document.getElementById("resultado2").innerText = "$" + resultado;
    }
}

function btnLimpiar() {
    document.getElementsByName("respuesta").value = "";
}
