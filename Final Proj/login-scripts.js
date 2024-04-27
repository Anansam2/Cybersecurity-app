document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.querySelector('.login-container');
    const signupContainer = document.querySelector('.signup-container');
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Mock user database
    const users = [];

    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        if (newUsername && newPassword) {
            // Check if username already exists
            if (users.find(user => user.username === newUsername)) {
                alert('Username already exists!');
            } else {
                // Store new user
                users.push({ username: newUsername, password: newPassword });
                alert('Signup successful!');
                // Clear form fields
                signupForm.reset();
                // Automatically switch to login after signup
                loginContainer.style.display = 'block';
                signupContainer.style.display = 'none';
            }
        } else {
            alert('Please fill in all fields.');
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if username and password match
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Login successful!');
            // Redirect to index.html upon successful login
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});
