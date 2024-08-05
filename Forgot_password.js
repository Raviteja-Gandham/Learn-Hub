// script.js

document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    const passwordForm = document.getElementById('passwordForm');
    const emailMessage = document.getElementById('emailMessage');
    const passwordMessage = document.getElementById('passwordMessage');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const resetPasswordForm = document.getElementById('resetPasswordForm');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById('email').value;

        if (validateEmail(email)) {
            showMessage(emailMessage, 'Email verified! Please set a new password.', 'success');
            // Simulate email verification and show reset password form
            setTimeout(() => {
                forgotPasswordForm.style.display = 'none';
                resetPasswordForm.style.display = 'block';
            }, 1000);
        } else {
            showMessage(emailMessage, 'Please enter a valid email address.', 'error');
        }
    });

    passwordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const newPassword = document.getElementById('newPassword').value;

        if (validatePassword(newPassword)) {
            showMessage(passwordMessage, 'Password reset successfully!', 'success');
            passwordForm.reset(); // Reset form fields
        } else {
            showMessage(passwordMessage, 'Please follow the password rules.', 'error');
        }
    });

    function validateEmail(email) {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        // Password validation regex
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);
    }

    function showMessage(element, msg, type) {
        element.textContent = msg;
        element.className = 'message ' + type;
        element.style.display = 'block';
    }
});
