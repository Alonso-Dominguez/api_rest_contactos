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

async function buscarContactos() {
    const email = document.getElementById('email').value;

    const response = await fetch(`/contactos/buscar?email=${email}`);

    if (response.status === 200) {
        const contactos = await response.json();
        const resultadoBusqueda = document.getElementById('resultado-busqueda');
        resultadoBusqueda.innerHTML = '';

        for (const contacto of contactos) {
            const listItem = document.createElement('li');
            listItem.textContent = `${contacto.nombre} ${contacto.primer_apellido} ${contacto.segundo_apellido} - Email: ${contacto.email} - Teléfono: ${contacto.telefono}`;
            resultadoBusqueda.appendChild(listItem);
        }
    } else {
        alert('Error al buscar contactos.');
    }
}

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

async function cargarContactos() {
    const response = await fetch('/contactos');
  
    if (response.status === 200) {
        const contactos = await response.json();
        const listaContactos = document.getElementById('lista-contactos');

        for (const contacto of contactos) {
            const listItem = document.createElement('li');
            listItem.textContent = `${contacto.id_contacto} ${contacto.nombre} ${contacto.primer_apellido} ${contacto.segundo_apellido} - Email: ${contacto.email} - Teléfono: ${contacto.telefono}`;
            listaContactos.appendChild(listItem);
        }
    } else {
        alert('Error al cargar la lista de contactos.');
    }
}

cargarContactos();