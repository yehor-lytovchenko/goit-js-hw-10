import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

function onSubmit(e) {
  e.preventDefault();

  const delay = Number(e.target.elements.delay.value);
  const state = e.target.elements.state.value;

  createPromise(delay, state).then(showSucces).catch(showError);
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

function showSucces(delay) {
  iziToast.success({
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
  });
}

function showError(delay) {
  iziToast.error({
    message: `❌ Rejected promise in ${delay}ms`,
    position: 'topRight',
  });
}

formEl.addEventListener('submit', onSubmit);
