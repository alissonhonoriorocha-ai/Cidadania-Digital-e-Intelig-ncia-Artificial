// Arquivo de interatividade - Cidadania Digital 2026

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FUNCIONALIDADE: MODO ESCURO (Acessibilidade) ---
    const btnDarkMode = document.getElementById('toggle-dark-mode');
    
    btnDarkMode.addEventListener('click', () => {
        // Alterna a classe dark-mode no elemento body
        document.body.classList.toggle('dark-mode');
        
        // Altera o texto do botão de forma dinâmica
        if (document.body.classList.contains('dark-mode')) {
            btnDarkMode.textContent = '☀️ Modo Claro';
        } else {
            btnDarkMode.textContent = '🌓 Modo Escuro';
        }
    });

    // --- 2. FUNCIONALIDADE: VALIDADOR DO QUIZ ANTI-DESINFORMAÇÃO ---
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    quizForm.addEventListener('submit', (event) => {
        // Evita que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Captura a opção selecionada pelo usuário
        const selectedOption = document.querySelector('input[name="quiz-answer"]:checked');
        
        if (!selectedOption) return;

        // Processa o valor da variável coletada
        const userAswer = selectedOption.value;

        // Limpa classes anteriores do container de resultado
        quizResult.className = ''; 

        // Manipulação do DOM para exibir o feedback adequado
        if (userAswer === 'correta') {
            quizResult.textContent = '✅ Parabéns! Você agiu como um cidadão digital consciente. Verificar fontes e desconfiar de mídias absurdas evita a propagação de deepfakes.';
            quizResult.classList.add('correct-style');
        } else {
            quizResult.textContent = '❌ Atenção! Essa ação ajuda a espalhar a desinformação automatizada. O correto é sempre desconfiar e checar em canais oficiais antes de interagir ou repassar.';
            quizResult.classList.add('wrong-style');
        }

        // Mostra a div de resultado removendo qualquer ocultação implícita
        quizResult.style.display = 'block';
    });
});
