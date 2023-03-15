function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const result = { position, delay };
      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);
  for (let i = 0; i < amount; i++) {
    let 	position = i;
    let 	delay = delay + i * step;

    createPromise(position, delay)
      .then(() => {
        Notify.success(`✅ Fulfilled promise ${position+1} in ${delay}ms`);
      })
      .catch(() => {
        Notify.failure(`❌ Rejected promise ${position+1} in ${delay}ms`);
      });
  }
});
