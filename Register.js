// script.js

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateForm(username, password)) {
            showMessage('Registration done successfully!', 'success');
            registrationForm.reset(); // Reset form fields
        } else {
            showMessage('Please correct the errors above.', 'error');
        }
    });

    function validateForm(username, password) {
        const usernameValid = username.length >= 4;
        const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);
        return usernameValid && passwordValid;
    }

    function showMessage(msg, type) {
        message.textContent = msg;
        message.className = 'message ' + type;
        message.style.display = 'block';
    }
});
