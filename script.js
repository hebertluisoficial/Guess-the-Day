// Função para obter o dia da semana a partir da data
function getDayOfWeek(date) {
    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    return daysOfWeek[date.getDay()];
  }
  
  // Função para gerar uma data aleatória
  function generateRandomDate() {
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 30) + 1; // Considerando todos os meses com 30 dias
    const date = new Date(2024, randomMonth, randomDay);
    return date;
  }
  
  // Função para exibir uma nova data aleatória e opções de dia da semana
  function displayNewDate() {
    const date = generateRandomDate();
    const dayOfWeek = getDayOfWeek(date);
    document.getElementById('date').textContent = `${date.getDate()} de ${getMonthName(date.getMonth())} de 2024`;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    const daysOfWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    daysOfWeek.forEach(day => {
      const button = document.createElement('button');
      button.textContent = day;
      button.addEventListener('click', () => {
        if (!button.classList.contains('disabled')) {
          if (day === dayOfWeek) {
            displayNewDate();
          } else {
            button.classList.add('disabled');
          }
        }
      });
      optionsContainer.appendChild(button);
      if (day === "Terça" || day === "Quinta" || day === "Sábado") {
        optionsContainer.appendChild(document.createElement('br'));
      }
    });
  }
  
  // Função auxiliar para obter o nome do mês
  function getMonthName(monthIndex) {
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return months[monthIndex];
  }
  
  // Exibir a primeira data aleatória ao carregar a página
  displayNewDate();
  