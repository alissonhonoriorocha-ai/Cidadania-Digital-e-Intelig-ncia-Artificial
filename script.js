document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GERENCIADOR DE MODO ESCURO
    const btnDarkMode = document.getElementById('toggle-dark-mode');
    if (btnDarkMode) {
        btnDarkMode.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            btnDarkMode.textContent = document.body.classList.contains('dark-mode') 
                ? '☀️ Modo Claro' 
                : '🌓 Modo Escuro';
        });
    }

    // 2. SISTEMA DE ABAS INTERATIVAS (TABS)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            
            const targetTab = button.getAttribute('data-tab');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 3. SIMULADOR DE MÓDULO DE INTELIGÊNCIA ARTIFICIAL (Chatbot de Dúvidas)
    const iaInput = document.getElementById('ia-input');
    const iaSubmit = document.getElementById('ia-submit');
    const iaResponse = document.getElementById('ia-response');

    if (iaSubmit && iaInput && iaResponse) {
        iaSubmit.addEventListener('click', () => {
            const pergunta = iaInput.value.toLowerCase().trim();
            
            if (pergunta === "") {
                iaResponse.textContent = "🤖 Por favor, digite uma dúvida para que eu possa ajudar!";
                iaResponse.style.display = 'block';
                return;
            }

            iaResponse.style.display = 'block';
            iaResponse.textContent = "🤖 Analisando padrões de dados...";

            setTimeout(() => {
                // Sistema lógico baseado em palavras-chave para simular IA de resposta
                if (pergunta.includes('denunciar') || pergunta.includes('crime') || pergunta.includes('vítima')) {
                    iaResponse.textContent = "🤖 Resposta da IA: Se você for vítima de uma deepfake prejudicial, salve as provas (links e prints com cabeçalhos), registre um Boletim de Ocorrência em uma delegacia especializada em crimes cibernéticos e acione os mecanismos de denúncia da própria rede social.";
                } else if (pergunta.includes('identificar') || pergunta.includes('saber se é falso') || pergunta.includes('olhar')) {
                    iaResponse.textContent = "🤖 Resposta da IA: Para identificar deepfakes de vídeo, preste atenção à falta de piscadas naturais, falhas na junção entre o pescoço e o queixo, além de oscilações estranhas de iluminação ao redor das bochechas.";
                } else if (pergunta.includes('lei') || pergunta.includes('punir') || pergunta.includes('crime')) {
                    iaResponse.textContent = "🤖 Resposta da IA: No Brasil, o uso malicioso de IA para difamar ou manipular campanhas eleitorais é punido severamente. Atos de difamação digital geram responsabilização cível e criminal.";
                } else {
                    iaResponse.textContent = "🤖 Resposta da IA: Processando pergunta... Como um assistente de Cidadania Digital, recomendo sempre cruzar essa informação em agências especializadas em checagem de fatos (como Lupa ou Aos Fatos) e desconfiar de links alarmistas.";
                }
            }, 800);
        });
    }

    // 4. CONTADOR DINÂMICO
    const btnCount = document.getElementById('btn-count');
    const clicksCounter = document.getElementById('clicks-counter');
    let totalContador = 0;

    if (btnCount && clicksCounter) {
        btnCount.addEventListener('click', () => {
            totalContador++;
            clicksCounter.textContent = totalContador;
            btnCount.textContent = 'Obrigado por apoiar!';
            setTimeout(() => {
                btnCount.textContent = 'Fazer Minha Parte';
            }, 1000);
        });
    }

    // 5. VALIDADOR DO QUIZ
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');

    if (quizForm && quizResult) {
        quizForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const selected = document.querySelector('input[name="quiz-answer"]:checked');
            if (!selected) return;

            const resposta = selected.value;
            quizResult.className = ''; 
            quizResult.style.display = 'block';

            if (resposta === 'correta') {
                quizResult.textContent = '✅ Excelente! Telefones clonados e áudios gerados por IA (deepfakes de voz) são golpes comuns. Ligar e confirmar por outro canal é o comportamento ético ideal.';
                quizResult.classList.add('correct');
            } else {
                quizResult.textContent = '❌ Alerta de Risco! Propagar áudios suspeitos ou criar sátiras de IA sem autorização espalha boatos perigosos. Sempre confirme diretamente.';
                quizResult.classList.add('wrong');
            }
        });
    }
});
