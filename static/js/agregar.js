async function agregarContacto() {
    const nombre = document.getElementById('nombre').value;
    const primer_apellido = document.getElementById('primer_apellido').value;
    const segundo_apellido = document.getElementById('segundo_apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    const response = await fetch('/contactos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nombre,
            primer_apellido: primer_apellido,
            segundo_apellido: segundo_apellido,
            email: email,
            telefono: telefono,
        }),
    });

    if (response.status === 200) {
        alert('Contacto agregado correctamente.');
        document.location.reload();
    } else {
        alert('Error al agregar el contacto.');
    }
}