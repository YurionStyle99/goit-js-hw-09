function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let intervalId;
const body = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function startColorChange() {
  startBtn.disabled = true; // деактивируем кнопку "Start"
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  clearInterval(intervalId); // останавливаем изменение цвета фона
  startBtn.disabled = false; // активируем кнопку "Start"
}

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);