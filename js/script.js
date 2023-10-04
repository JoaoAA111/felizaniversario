// Aguarda até que o documento HTML seja completamente carregado antes de executar o código JavaScript.
document.addEventListener("DOMContentLoaded", function () {
    // Obtém a referência ao elemento do formulário.
    const form = document.querySelector("form");
    
    // Obtém a referência ao campo de entrada de email pelo seu ID.
    const emailUsuario = document.getElementById("idemail");

	
	

    // Adiciona um ouvinte de evento para o evento "submit" no formulário.
    form.addEventListener("submit", function (e) {
        // Verifica se a função isEmailValid retorna falso para o valor do campo de email.
        if (!isEmailValid(emailUsuario.value)) {
            // Impede o envio do formulário, cancelando o evento de envio.
            e.preventDefault();

            // Exibe o erro de email inválido definindo o estilo "display" para "flex".
            document.querySelector(".erroEmail").style.display = "flex";
        } else {
            // Caso o email seja válido, esconde o erro.
            document.querySelector(".erroEmail").style.display = "none";
        }
    });

    // Função que verifica se o email é válido.
    function isEmailValid(email) {
        // Verifica se o email contém a string "@".
        // Isso é uma validação muito simples e não abrange todas as regras de validação de email.
        return email.includes("@");
    }
});