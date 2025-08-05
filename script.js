const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('sidebar').classList.remove('open');
});