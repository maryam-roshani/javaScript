const day = document.getElementById('day')
const dayOfWeek = document.getElementById('day-of-week')
const month = document.getElementById('month')
const year = document.getElementById('year')


const currentDate = new Date();

const d1 = currentDate.getDate();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
const m1 = currentDate.toLocaleString('default', { month: 'long' });
const y1 = currentDate.getFullYear();

day.innerHTML = d1
dayOfWeek.innerHTML = currentDayOfWeek
console.log(currentDayOfWeek)
month.innerHTML = m1
year.innerHTML = y1