function toggleMenu() {
  const menu = document.getElementById('menu-mobile');
  menu.classList.toggle('aberto');
}

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
})();