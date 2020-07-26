const clock = document.getElementById('clock');

function showTime() {
  const today = new Date();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (hours < 12) {
    seconds = `${seconds}AM`;
  } else if (hours > 12) {
    seconds = `${seconds}PM`;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const time = hours + ':' + minutes + ':' + seconds;
  clock.innerText = time;
};


const wakeUpTime = document.getElementById('wakeUpTime');
const lunchTime = document.getElementById('lunchTime');
const dinnerTime = document.getElementById('dinnerTime');
let wake;
let lunch;
let dinner;

function selectTime() {
  const today = new Date();

  let hours = today.getHours();
  let stringHours = String(hours);
  const imgContainer = document.querySelector('.img-container');

  if (stringHours === wake) {
    imgContainer.innerHTML = `<img src="/img/morning.jpg" alt="">`;
  } else if (stringHours === lunch) {
    imgContainer.innerHTML = `<img src="/img/noon.jpg" alt="">`;
  } else if (stringHours === dinner) {
    imgContainer.innerHTML = `<img src="/img/night.jpg" alt="">`;
  } else {
    imgContainer.innerHTML = `<img src="/img/default.jpg" alt="">`;
  }
  console.log('success');
  showTime();
}

selectTime();

setInterval(selectTime, 1000);
// Event listener
wakeUpTime.addEventListener('change', hoursTimer);
lunchTime.addEventListener('change', lunchTimer);
dinnerTime.addEventListener('change', dinnerTimer);


function hoursTimer() {
  wake = wakeUpTime.value;
};

function lunchTimer() {
  lunch = lunchTime.value;
};

function dinnerTimer() {
  dinner = dinnerTime.value;
};