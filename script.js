// Целевая дата — 30 апреля 2026 года
const targetDate = new Date("2026-04-30T00:00:00");

const mainText = document.getElementById("mainText");
const countdown = document.getElementById("countdown");
const subText = document.getElementById("subText");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  // Если дата уже наступила
  if (diff <= 0) {
    mainText.textContent = "подарок может быть получен 🎁";
    countdown.style.display = "none"; // скрываем таймер
    subText.style.display = "none";   // скрываем подзаголовок
    return;
  }

  // Вычисляем оставшееся время
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Отображаем результат
  countdown.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;

  // Обновляем каждую секунду
  requestAnimationFrame(() => setTimeout(updateCountdown, 1000));
}

// Запускаем таймер
updateCountdown();