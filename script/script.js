const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const formatValue = (value) => String(value).padStart(2, '0');

setInterval(() => {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  hours.textContent = formatValue(hr);
  minutes.textContent = formatValue(min);
  seconds.textContent = formatValue(sec);
});
