import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
const delay = Number(form.elements.delay.value);
const step = Number(form.elements.step.value);
const amount = Number(form.elements.amount.value);

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


form.addEventListener('submit', (event) => {
  event.preventDefault();
  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + i * step)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position+1} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position+1} in ${delay}ms`);
      });
  }
});
