const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.getElementsByTagName('body')[0];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stop.disabled = true;

  start.addEventListener("click", (timerId) => {
    stop.disabled=false;
    start.disabled=true;
  });
  const timerId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
   }, 1000);

stop.addEventListener('click', () => {
  clearInterval(timerId);
  stop.disabled = true;
  start.disabled = false;
});
