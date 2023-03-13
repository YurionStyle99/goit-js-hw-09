import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

const timerFields = {
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

let countdownIntervalId;

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

  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days, hours, minutes, and seconds
  const daysValue = Math.floor(targetDate / day);
  const hoursValue = Math.floor((targetDate % day) / hour);
  const minutesValue = Math.floor((targetDate % hour) / minute);
  const secondsValue = Math.floor((targetDate % minute) / second);

  // Update the display with the new values
  timerFields.days.textContent = daysValue.toString().padStart(2, "0");
  timerFields.hours.textContent = hoursValue.toString().padStart(2, "0");
  timerFields.minutes.textContent = minutesValue.toString().padStart(2, "0");
  timerFields.seconds.textContent = secondsValue.toString().padStart(2, "0");
}

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

const startButton = document.querySelector("[data-start]");
startButton.addEventListener("click", () => {
  updateCountdown();
});

