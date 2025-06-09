document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sleep-test-form');
  const resultContainer = document.getElementById('test-result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;

    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
      score += parseInt(value, 10);
    }

    let message = '';
    if (score >= 13) {
      message = `Ваш балл: ${score}. У вас идеальный сон! Продолжайте в том же духе`;
    } else if (score >= 9) {
      message = `Ваш балл: ${score}. У вас достаточно хороший сон, но есть над чем поработать`;
    } else if (score >= 5) {
      message = `Ваш балл: ${score}. Ваш сон ниже среднего. Рекомендуем пересмотреть привычки перед сном`;
    } else {
      message = `Ваш балл: ${score}. Сон оставляет желать лучшего. Обратитесь к специалисту, если проблемы продолжаются`;
    }

    resultContainer.textContent = message;
    resultContainer.classList.remove('hidden');
    resultContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  });
});
