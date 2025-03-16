document.addEventListener('DOMContentLoaded', function() {
    const buscadorForm = document.getElementById('buscadorForm');
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');

    buscadorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cedula = cedulaInput.value.trim();

        if (cedula.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese una cédula antes de buscar'
            });
        } else if (isNaN(cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida'
            });
        } else if (validarCedula(cedula)) {
            mostrarInformacionEmpleado(cedula);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida'
            });
        }
    });

    function validarCedula(cedula) {
        return /^\d{9}$/.test(cedula);
    }

    function mostrarInformacionEmpleado(cedula) {
        const empleados = {
            '109110338': { nombre: 'Luis Fernández', Jornada: 'Diurna', salario: '$1800', foto: '../img/usuario1.jpg', descripcion: 'Ingeniero de Software' },
            '209110338': { nombre: 'Mariana López', Jornada: 'Nocturna', salario: '$1400', foto: '../img/usuario2.jpg', descripcion: 'Especialista en UI/UX' },
            '309110338': { nombre: 'Javier Gómez', Jornada: 'Diurna', salario: '$1700', foto: '../img/usuario3.jpg', descripcion: 'Desarrollador Full Stack' },
            '409110338': { nombre: 'Andrea Ramírez', Jornada: 'Mixta', salario: '$1600', foto: '../img/usuario4.jpg', descripcion: 'Diseñadora Gráfica Senior' },
            '509110338': { nombre: 'Carlos Méndez', Jornada: 'Nocturna', salario: '$1500', foto: '../img/usuario5.jpg', descripcion: 'Administrador de Bases de Datos' }
        };

        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            mostrarResultado(empleado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró un empleado con la cédula ingresada'
            });
        }
    }

    function mostrarResultado(empleado) {
        resultadoContainer.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="imagenes/${empleado.foto}" class="card-img-top" alt="Foto de empleado" 
                     style="width: 100%; height: auto; object-fit: cover; border-radius: 10px;">
                <div class="card-body">
                    <h5 class="card-title">${empleado.nombre}</h5>
                    <p class="card-text">Descripción: ${empleado.descripcion}</p>
                    <p class="card-text">Jornada: ${empleado.Jornada}</p>
                    <p class="card-text">Salario: ${empleado.salario}</p>
                </div>
            </div>
        `;
    }
    
});

function borrar() {
    document.getElementById('cedula').value = "";
    document.getElementById('resultado').innerHTML = "";
}
