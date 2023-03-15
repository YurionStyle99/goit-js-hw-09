import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';

const startButton = document.querySelector("[data-start]");
const timerFields = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

let countdownIntervalId;

const datePick = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = Date.now();
    const targetDate= selectedDate - now;

    if (targetDate <= 0) {
      Report.failure(
        'Eror',
        'Choose date in future',
        'Got it'
        );
      return;
    }

    countdownIntervalId = setInterval(updateCountdown, 1000);
  },
});

startButton.addEventListener("click", () => {
  updateCountdown();
});


function updateCountdown() {
  const now = Date.now();
  const selectedDate = datePick.selectedDates[0];
  const targetDate = selectedDate - now;

  if (targetDate <= 0) {
    clearInterval(countdownIntervalId);
    timerFields.days.textContent = "00";
    timerFields.hours.textContent = "00";
    timerFields.minutes.textContent = "00";
    timerFields.seconds.textContent = "00";
    return;
  }
function pad(value){
  return String(value).padStart(2, "0")
}
  const daysValue = Math.floor(targetDate / ((60000 * 60)* 24));
  const hoursValue = pad(Math.floor((targetDate % ((60000 * 60)* 24)) / (60000 * 60)));
  const minutesValue = pad(Math.floor((targetDate % (60000 * 60)) / (1000 * 60)));
  const secondsValue = pad(Math.floor((targetDate % (1000 * 60)) / 1000));

  timerFields.days.textContent = daysValue;
  timerFields.hours.textContent = hoursValue;
  timerFields.minutes.textContent = minutesValue;
  timerFields.seconds.textContent = secondsValue;
}


