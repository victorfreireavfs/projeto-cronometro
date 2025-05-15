let timer;
let segundos = 0;
let rodando = false;

function atualizarTimer() {
  const horas = String(Math.floor(segundos / 3600)).padStart(2, "0");
  const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
  const segs = String(segundos % 60).padStart(2, "0");

  document.getElementById("timer").textContent = `${horas}:${minutos}:${segs}`;
}

function startTimer() {
  if (!rodando) {
    rodando = true;
    timer = setInterval(() => {
      segundos++;
      atualizarTimer();
    }, 1000);
  }
}

function pauseTimer() {
  rodando = false;
  clearInterval(timer);
}

function resetTimer() {
  rodando = false;
  clearInterval(timer);
  segundos = 0;
  atualizarTimer();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
// Inicializa timer
atualizarTimer();


function atualizarHoraAgora() {
  const agora = new Date();

  // Define o fuso horário de Brasília (GMT-3)
  const opcoes = {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  const horaFormatada = agora.toLocaleTimeString('pt-BR', opcoes);
  document.getElementById('hora-local').textContent = horaFormatada;
}

// Atualiza a hora a cada segundo
setInterval(atualizarHoraAgora, 1000);
atualizarHoraAgora(); // Atualiza imediatamente ao carregar
