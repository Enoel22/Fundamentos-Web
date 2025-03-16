const estudiantes = [];

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value,
        apellidoEstudiante = document.getElementById('apellidos').value,
        nota1 = parseFloat(document.getElementById('nota1').value),
        nota2 = parseFloat(document.getElementById('nota2').value),
        nota3 = parseFloat(document.getElementById('nota3').value);

    if (nombre === '' || apellidoEstudiante === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        Swal.fire({
            icon: 'error',
            title: 'Debe llenar todos los campos',
            showClass: {
                popup: `animate__animated animate__fadeIn`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOut`
            }
        });
    } else {
        const promedio = (nota1 + nota2 + nota3) / 3;
        estudiantes.push({nombre, apellidoEstudiante, promedio});
        const selectEstudiantes = document.getElementById('seleccionarEstudiante');
        const option = document.createElement('option');
        option.value = nombre + ' ' + apellidoEstudiante;
        option.text = nombre + ' ' + apellidoEstudiante;
        selectEstudiantes.appendChild(option);
        limpiarCampos();
        Swal.fire({
            icon: 'success',
            title: 'Estudiante agregado',
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        });
    }
}

function calcularPromedioSeleccionado() {
    const nombreSeleccionado = document.getElementById('seleccionarEstudiante').value;
    const resultado = document.getElementById('resultado');
    let estudianteSeleccionado = null;
    
    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        const nombreCompleto = estudiante.nombre + ' ' + estudiante.apellidoEstudiante;
        if (nombreCompleto === nombreSeleccionado) {
            estudianteSeleccionado = estudiante;
            break;
        }
    }
    
    if (estudianteSeleccionado) {
        const promedioEstudiante = estudianteSeleccionado.promedio;
        resultado.textContent = 'El promedio de : ' + nombreSeleccionado + ' es de: ' + promedioEstudiante;
    } else {
        resultado.textContent = '';
    }
}

function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}
