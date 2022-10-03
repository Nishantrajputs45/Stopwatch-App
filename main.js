const msVale = document.querySelector("#msVale");
const secondVale = document.querySelector("#secondVale");
const minuteVale = document.querySelector("#minuteVale");
const hourVale = document.querySelector("#hourVale");

let milliSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let setIntervalValue;

function startStopWatch() {
  setIntervalValue = setInterval(() => {
    milliSecond = milliSecond + 1;
    if (milliSecond === 100) {
      second = second + 1;
      milliSecond = 0;
    }
    if (second === 60) {
      minute = minute + 1;
      second = 0;
    }
    if (minute === 60) {
      hour = hour + 1;
      minute = 0;
    }
    msVale.innerText = milliSecond + "";
    secondVale.innerText = second + "";
    minuteVale.innerText = minute + "";
    hourVale.innerText = hour + "";
    if (milliSecond < 10) {
      msVale.innerText = "0" + milliSecond;
    }
    if (second < 10) {
      secondVale.innerText = "0" + second;
    }
    if (minute < 10) {
      minuteVale.innerText = "0" + minute;
    }
    if (hour < 10) {
      hourVale.innerText = "0" + hour;
    }
  }, 10);
}

function stopStopWatch() {
  clearInterval(setIntervalValue);
}

function resetStopWatch() {
  milliSecond = "00";
  second = "00";
  minute = "00";
  hour = "00";

  msVale.innerText = milliSecond;
  secondVale.innerText = second;
  minuteVale.innerText = minute;
  hourVale.innerText = hour;
  clearInterval(setIntervalValue);
  milliSecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
}
