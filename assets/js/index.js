    let timer;
    let segundos = 0;
    let rodando = false;

    function atualizarTimer() {
      const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
      const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
      const segs = String(segundos % 60).padStart(2, '0');

      document.getElementById('timer').textContent = `${horas}:${minutos}:${segs}`;
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
      document.body.classList.toggle('dark-mode');
    }

    // Inicializa timer
    atualizarTimer();