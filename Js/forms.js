//FORMS APOIE O PROJETO
document.addEventListener('DOMContentLoaded', function() {
    const formApoio = document.getElementById('formApoio');
    const feedbackApoioDiv = document.getElementById('feedback-apoio');

    if (formApoio && feedbackApoioDiv) {
        console.log("Formulário de Apoio encontrado:", formApoio);
        console.log("Div de Feedback de Apoio encontrada:", feedbackApoioDiv);

        formApoio.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nomeApoio').value.trim();
            const email = document.getElementById('emailApoio').value.trim();
            const link = document.getElementById('linkApoio').value.trim();

            feedbackApoioDiv.textContent = '';
            feedbackApoioDiv.classList.add('mensagem-oculta');
            feedbackApoioDiv.classList.remove('mensagem-sucesso', 'mensagem-erro');

            if (nome === '' || email === '' || link === '') {
                feedbackApoioDiv.textContent = 'Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Link).';
                feedbackApoioDiv.classList.add('mensagem-erro');
                feedbackApoioDiv.classList.remove('mensagem-oculta');
                return;
            }

            console.log('Dados do formulário de apoio enviados:');
            console.log('Nome:', nome);
            console.log('Email:', email);
            console.log('Link:', link);

            feedbackApoioDiv.textContent = 'Agradecemos por apoiar nosso projeto! Sua sugestão foi enviada com sucesso!';
            feedbackApoioDiv.classList.add('mensagem-sucesso');
            feedbackApoioDiv.classList.remove('mensagem-oculta');

            formApoio.reset();
        });
    } else {
        console.warn("Formulário de Apoio ou div de feedback não encontrados. Verifique os IDs no HTML.");
        if (!formApoio) {
            console.warn("Elemento com ID 'formApoio' não encontrado.");
        }
        if (!feedbackApoioDiv) {
            console.warn("Elemento com ID 'feedback-apoio' não encontrado.");
        }
    }
});