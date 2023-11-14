async function borrarContacto() {
    const id = document.getElementById('borrar-id').value;
    const response = await fetch(`/contactos/${id}`, {
        method: 'DELETE',  // Cambiado a DELETE ya que estamos borrando un recurso
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
        alert('Contacto borrado correctamente.');
        document.location.reload();
    } else {
        alert('Error al borrar el contacto.');
    }
}