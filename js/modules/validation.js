export function validarNome(nome){ return nome.trim().length >= 3; }
export function mascaraCPF(v){ return v.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2'); }
export function mascaraTel(v){ return v.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2'); }
export function mascaraCEP(v){ return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2'); }