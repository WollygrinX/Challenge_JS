// Função para tratar o clique nos botões
        function handleClick(event) {
            const buttonId = event.target.id;
            alert(`Você clicou no ${buttonId.replace('botao', 'botão ')}`);
        }

        // Selecionando os botões pelo ID
        const botao1 = document.getElementById('botao1');
        const botao2 = document.getElementById('botao2');
        const botao3 = document.getElementById('botao3');

        // Adicionando os listeners de clique a cada botão
        botao1.addEventListener('click', handleClick);
        botao2.addEventListener('click', handleClick);
        botao3.addEventListener('click', handleClick);
