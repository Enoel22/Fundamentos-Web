
function factura () {
    var nombre = document.getElementById("name").value;
    var articulo = document.getElementById("fname").value;
    var cantidad = document.getElementById("quantity").value;
    var precio = document.getElementById("price").value;
    const resultadoContainer = document.getElementById('resultado');

    if (nombre == "" || articulo == "" || cantidad == "" || precio == "") {
        swal.fire({
            icon: 'error',
            title: 'Atencion usuario',
            text: 'Por favor, llene todos los campos',
        });
    } else {
        const subtotal = cantidad * precio;
        const iva = subtotal * 0.13;
        const servicio = subtotal * 0.05;
        const total = subtotal + iva + servicio;
        
        resultadoContainer.innerHTML = `
                <p>Factura No.67</p>
                <p>Fecha: 1/3/2025</p>
                <p>Cliente: ${nombre}</p>

                <hr>

                <div class="row text-center pt-3">

                  <div class="col">
                    <h5>Articulo</h5>
                    <p>${articulo}</p>
                  </div>

                  <div class="col">
                    <h5>Cantidad</h5>
                    <p>${cantidad}</p>
                  </div>

                  <div class="col">
                    <h5>Precio</h5>
                    <p>₡${precio}</p>
                  </div>
                </div>

                <hr>

                <p>Subtotal: ₡${subtotal}</p>
                <p>IVA 13%: ₡${iva}</p>
                <p>Servicio 5%: ₡${servicio}</p>
                <p>Total a pagar: ₡${total}</p>
                
                <div class="pt-5">
                  <button type="button" class="btn btn-primary px-4">Correo</button>
                  <button type="reset" class="btn btn-primary px-4">Imprimir</button>
                </div>`;
    }
}

function btnLimpiar() {
    document.getElementById("name").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}
