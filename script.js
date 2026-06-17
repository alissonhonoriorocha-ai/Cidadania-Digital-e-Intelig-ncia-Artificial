document.addEventListener('DOMContentLoaded', () => {
   
    // 1. MODO ESCURO
    const btnDarkMode = document.getElementById('toggle-dark-mode');
   
    if (btnDarkMode) {
        btnDarkMode.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
           
            if (document.body.classList.contains('dark-mode')) {
                btnDarkMode.textContent = '☀️ Modo Claro';
            } else {
                btnDarkMode.textContent = '🌓 Modo Escuro';
            }
        });
    }

    // 2. VALIDADOR DO QUIZ
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    if (quizForm && quizResult) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede a página de dar F5

            // Pega o input marcado
            const selected = document.querySelector('input[name="quiz-answer"]:checked');
           
            if (!selected) return;

            const resposta = selected.value;

            // Reseta classes antigas
            quizResult.className = '';
            quizResult.style.display = 'block'; // Torna visível

            // Verifica e manipula o DOM
            if (resposta === 'correta') {
                quizResult.textContent = '✅ Resposta Correta! Mídias bombásticas criadas por IA exigem verificação rigorosa antes do compartilhamento para frear a desinformação.';
                quizResult.classList.add('correct');
            } else {
                quizResult.textContent = '❌ Ops, resposta incorreta! Compartilhar sem checar ou acreditar cegamente alimenta redes de desinformação automatizada por IA.';
                quizResult.classList.add('wrong');
            }
        });
    }
});
