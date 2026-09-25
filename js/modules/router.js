import { templates } from './templates.js';
import { listarVoluntarios } from './storage.js';

export function router() {
  const hash = location.hash.replace('#', '') || 'home';
  const app = document.getElementById('app');

  // Melhoria de acessibilidade para o DreamShaper
  app.setAttribute('aria-live', 'polite');
  app.setAttribute('tabindex', '-1');

  app.innerHTML = templates[hash] || templates.home;

  if (hash === 'cadastro') {
    const lista = listarVoluntarios();
    const div = document.getElementById('lista');
    if (div) {
      div.innerHTML = '<h3>Voluntários: ' + lista.length + '</h3>' + lista.map(function(v){ return '<p>' + v.nome + '</p>'; }).join('');
    }
  }

  // Deixa o menu clicado de outra cor
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + hash) {
      link.classList.add('active');
    }
  });

  // Foco e scroll para acessibilidade
  app.focus();
  window.scrollTo(0, 0);
}

export function initRouter() {
  window.addEventListener('hashchange', router);
  router();
}