async function buscarContactos() {
    const email = document.getElementById('email').value;

    const response = await fetch(`/contactos/buscar?email=${email}`);

    if (response.status === 200) {
        const contactos = await response.json();
        const resultadoBusqueda = document.getElementById('resultado-busqueda');
        resultadoBusqueda.innerHTML = '';

        for (const contacto of contactos) {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = `${contacto.nombre} ${contacto.primer_apellido} ${contacto.segundo_apellido} - Email: ${contacto.email} - Teléfono: ${contacto.telefono}`;
            resultadoBusqueda.appendChild(listItem);
        }
    } else {
        alert('Error al buscar contactos.');
    }
}