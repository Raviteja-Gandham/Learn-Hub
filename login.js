
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    /*if (validateForm(username, password)) {
        alert('Login successful!');
        // Perform login actions here (e.g., AJAX request)
    } else {
        errorMessage.style.display = 'block';
    }
});
*/
if (validateForm(username, password)) {
    const confirmation = confirm('Login successful! Click OK to proceed.');
    if (confirmation) {
        // Open another page in the same window
        window.location.href = 'navbar.html';
        
        // Open another page in a new window
        window.open('navbar.html', '_blank');
    }
} else {
    errorMessage.style.display = 'block';
}
});

function validateForm(username, password) {
    const usernameValid = username.length >= 4;
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);
    return usernameValid && passwordValid;
}
