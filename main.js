import { getCountdown, createCalendarEvent } from './countdown.mjs';

const launchDate = new Date('2026-11-14T15:00:00+05:30');
const countdownTitle = document.querySelector('#countdown-title');
const launchMessage = document.querySelector('#launch-message');
const calendarButton = document.querySelector('#calendar-button');
const numbers = {
  days: document.querySelector('#days'),
  hours: document.querySelector('#hours'),
  minutes: document.querySelector('#minutes'),
  seconds: document.querySelector('#seconds'),
};

function renderCountdown() {
  const remaining = getCountdown(launchDate);
  for (const [part, element] of Object.entries(numbers)) {
    element.textContent = String(remaining[part]).padStart(2, '0');
  }

  if (remaining.complete) {
    countdownTitle.textContent = 'The moment has arrived.';
    launchMessage.textContent = 'The wait is over. Welcome to GOTHA.';
    calendarButton.hidden = true;
    clearInterval(ticker);
  }
}

const ticker = setInterval(renderCountdown, 1000);
renderCountdown();

calendarButton.addEventListener('click', () => {
  const calendar = new Blob([createCalendarEvent(launchDate)], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(calendar);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'gotha-launch.ics';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
