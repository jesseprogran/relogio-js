const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const formatValue = (value) => String(value).padStart(2, '0');

setInterval(() => {
  const dateToday = new Date();
  const hr = dateToday.getHours();
  const min = dateToday.getMinutes();
  const sec = dateToday.getSeconds();

  hours.textContent = formatValue(hr);
  minutes.textContent = formatValue(min);
  seconds.textContent = formatValue(sec);
});
