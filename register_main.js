document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  const regError = document.getElementById('reg-error');

  registerForm.addEventListener('submit', event => {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    const existingUser = existingUsers.find(user => user.username === username);
    if (existingUser) {
      regError.textContent = 'Username already exists.';
    } else {
      existingUsers.push({ username, password });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      regError.textContent = 'Registration successful!';
      alert('Registration successful!');
      window.location.href = 'login.html';
    }
  });
});
