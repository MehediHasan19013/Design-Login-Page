const toggleBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

toggleBtn.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  toggleBtn.textContent = type === 'password' ? 'Show' : 'Hide';
});
