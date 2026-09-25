import { templates } from './templates.js';
import { listarVoluntarios } from './storage.js';

export function router() {
  const hash = location.hash.replace('#', '') || 'home';
  const app = document.getElementById('app');
  app.innerHTML = templates[hash] || templates.home;

  if (hash === 'cadastro') {
    const lista = listarVoluntarios();
    const div = document.getElementById('lista');
    if (div) {
      div.innerHTML = '<h3>Voluntarios: ' + lista.length + '</h3>' + lista.map(function(v){ return '<p>' + v.nome + '</p>'; }).join('');
    }
  }

  // Deixa o menu clicado de outra cor
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + hash) {
      link.classList.add('active');
    }
  });
}