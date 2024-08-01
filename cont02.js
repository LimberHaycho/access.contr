document.addEventListener('DOMContentLoaded', () => {
    const correctPassword = 'limber'; // Contraseña correcta
    const maxAttempts = 3; // Número máximo de intentos
    let attempts = 0; // Contador de intentos realizados

    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const messageParagraph = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            // Redirigir a la página de acceso
            window.location.href = 'access1.html';
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                messageParagraph.textContent = 'Terminaron sus intentos. Cuenta bloqueada.';
                messageParagraph.style.color = 'red';
                passwordInput.disabled = true;
                form.querySelector('button').disabled = true;
            } else {
                messageParagraph.textContent = `Contraseña incorrecta. Intentos restantes: ${maxAttempts - attempts}`;
                messageParagraph.style.color = 'red';
            }
        }

        passwordInput.value = ''; // Limpiar el campo de contraseña
    });
});
