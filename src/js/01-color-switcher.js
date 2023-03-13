const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.getElementsByTagName('body')[0];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stop.disabled = true;

  start.addEventListener("click", () => {
    stop.disabled=false;
    start.disabled=true;
    timerId = setInterval(() => {
     const color = getRandomHexColor();
     body.style.backgroundColor = color;
    }, 1000);
  });


stop.addEventListener('click', () => {
  clearInterval(timerId);
  intervalId = null;
  stop.disabled = true;
  start.disabled = false;
});
const date = new Date();
console.log(date)