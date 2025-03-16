// Inicializar un array para almacenar los votos
let votos = [];

// Función que se llama al enviar el voto
function enviarVoto(event) {
    // Prevenir el comportamiento por defecto del formulario (para evitar la recarga de la página)
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("nombre").value;
    let cedula = document.getElementById("cedula").value;
    let email = document.getElementById("email").value;
    let fecha = document.getElementById("fecha").value;

    // Validar que los campos no estén vacíos
    if (!nombre || !cedula || !email || !fecha) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor complete todos los campos.'
        });
        return;
    }

    // Almacenar los datos del voto en el array de votos
    votos.push({ nombre, cedula, email, fecha });

    // Mostrar mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: '¡Voto Enviado!',
        text: 'Tu voto ha sido registrado con éxito.'
    });

    // Mostrar los resultados del voto
    mostrarResultados();
}

// Función para mostrar los resultados de los votos almacenados
function mostrarResultados() {
    // Mostrar el contenedor de resultados
    document.getElementById("results").style.display = "block";

    // Obtener el reporte de votos
    let reporte = document.getElementById("reporteVoto");
    reporte.innerHTML = '';

    // Recorrer los votos y mostrarlos en el reporte
    votos.forEach((voto, index) => {
        reporte.innerHTML += `
            <p><strong>Voto ${index + 1}:</strong></p>
            <ul>
                <li><strong>Nombre:</strong> ${voto.nombre}</li>
                <li><strong>Cédula:</strong> ${voto.cedula}</li>
                <li><strong>Email:</strong> ${voto.email}</li>
                <li><strong>Año de Nacimiento:</strong> ${voto.fecha}</li>
            </ul>
            <hr>
        `;
    });
}

// Agregar el evento de envío del formulario
document.getElementById("voting-form").addEventListener("submit", enviarVoto);
