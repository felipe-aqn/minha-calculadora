const campo = document.querySelector("#visor");
const botoes = document.querySelectorAll('.botoes button');

botoes.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        // Pega o valor do atributo data-valor do botão clicado
        const valor = e.target.dataset.valor;

        if (valor === 'C') {
            // Limpa todo o visor
            campo.value = '';
        } else if (valor === '#') {
            // Apaga o último caractere digitado
            campo.value = campo.value.slice(0, -1);
        } else if (valor === '=') {
            // Tenta calcular o resultado da expressão
            try {
                campo.value = eval(campo.value);
            } catch (erro) {
                campo.value = 'Erro';
            }
        } else {
            // Se o visor estiver exibindo 'Erro', limpa antes de adicionar novo número
            if (campo.value === 'Erro') {
                campo.value = '';
            }
            // Adiciona o caractere digitado ao visor
            campo.value += valor;
        }
    });
});