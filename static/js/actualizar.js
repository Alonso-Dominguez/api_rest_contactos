async function actualizarContacto() {
    const id = document.getElementById('actualizar-id').value;
    const nuevoNombre = document.getElementById('actualizar-nombre').value;
    const nuevoApellido_paterno = document.getElementById('actualizar-apellido-paterno').value;
    const nuevoApellido_materno = document.getElementById('actualizar-apellido-materno').value;
    const nuevoEmail = document.getElementById('actualizar-email').value;
    const nuevoTelefono = document.getElementById('actualizar-telefono').value;

    const response = await fetch(`/contactos/${id}`, {
        method: 'PUT',  // Cambiado a PUT ya que estamos actualizando un recurso existente
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre: nuevoNombre,
            primer_apellido: nuevoApellido_paterno,
            segundo_apellido: nuevoApellido_materno,
            email: nuevoEmail,
            telefono: nuevoTelefono,
        }),
    });

    if (response.status === 200) {
        alert('Contacto actualizado correctamente.');
        document.location.reload();
    } else {
        alert('Error al actualizar el contacto.');
    }
}