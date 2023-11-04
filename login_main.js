document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const loginError = document.getElementById('login-error');

  loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    const user = existingUsers.find(user => user.username === username);

    if (user && user.password === password) {
      loginError.textContent = '';
      alert('Login successful!');
    } else {
      loginError.textContent = 'Authentication failed.';
    }
  });
});
