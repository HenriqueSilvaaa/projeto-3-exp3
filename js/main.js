import { router } from './modules/router.js';
import { salvarVoluntario } from './modules/storage.js';
import { validarNome, mascaraCPF, mascaraTel, mascaraCEP } from './modules/validation.js';

// Roteamento
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Máscaras de input
document.addEventListener('input', function(e){
    if(e.target.id === 'cpf') e.target.value = mascaraCPF(e.target.value);
    if(e.target.id === 'tel') e.target.value = mascaraTel(e.target.value);
    if(e.target.id === 'cep') e.target.value = mascaraCEP(e.target.value);
});

// Cadastro de voluntário
document.addEventListener('submit', function(e){
    if(e.target.id === 'formVoluntario'){
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;

        if(!validarNome(nome)){
            document.getElementById('erro-nome').innerText = 'Nome deve ter 3 letras';
            return;
        }

        salvarVoluntario({ nome: nome });

        // Biblioteca externa - Toastify
        Toastify({
            text: "Voluntário cadastrado com sucesso!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: "#2ecc71" }
        }).showToast();

        location.hash = '#home';
    }
});