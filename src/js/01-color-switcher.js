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
    startInterval()
  });
  function startInterval() {
    timerId = setInterval(() => {
      const color = getRandomHexColor();
      body.style.backgroundColor = color;
    }, 1000);
  }
    function stopInterval() {
      clearInterval(timerId);
    }
stop.addEventListener('click', () => {
  stopInterval();
  stop.disabled = true;
  start.disabled = false;
});
