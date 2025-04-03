document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const tipoUsuario = document.getElementById('tipoUsuario').value;

    if (!nombre || !email || !tipoUsuario) {
        alert('Por favor, completa todos los campos.');
    } else {
        alert(`Registro exitoso: ¡Bienvenido, ${nombre}!`);
    }
});
