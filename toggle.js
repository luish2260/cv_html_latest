// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');

  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeToggle.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
  }
  else {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');
  }
};

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  const themeToggle = document.getElementById('themeToggle');

  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '☀️';
  }
  else {
    themeToggle.innerHTML = '🌙';
  }
});