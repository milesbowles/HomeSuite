/** VanillaJS to grab the id of the clock element */
const clock = document.getElementById('clock');

function Clock() {
  let time = new Date();
  let hours = (time.getHours() % 12).toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  /** If hours are single digit */
  if (hours.length < 2) {
    /** If hours are 0 */
    if(hours === "0"){
      /** Redefine the hours to display 12 */
      hours = "12";
    }
    /** If hours are not zero, tag a zero before the single digit */
    else {hours = '0' + hours;}
  }
  /** If minutes are single digit, add a zero before the minute */
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  /** If seconds are single digit, add a zero before the second */
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  /** The string will concatenate all the time variables */
  let clockStr = hours + ' : ' + minutes + ' : ' + seconds;
  /** The text of the clock element will display the time */
  clock.textContent = clockStr;
}

/** Perform the Clock function */
Clock();
/** Perform the Clock function every second */
setInterval(Clock, 1000);