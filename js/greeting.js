/** VanillaJS to update the greeting message **/
const greetingMessage = document.getElementById('greeting');

// TODO: make this dynamic
let username = 'Miles'; 

function Greeting() {
  let time = new Date();
  let hours = time.getHours();

  /** Updates greeting based on time of day */
  if (hours < 12) {
    greetingMessage.textContent = 'Good Morning, ' + username + '.';
  } else if (hours > 12 && hours < 18) {
    greetingMessage.textContent = 'Good Afternoon, ' + username + '.';
  } else if (hours > 17) {
    greetingMessage.textContent = 'Good Evening, ' + username + '.';
  }
}

/** Perform the Greeting function */
Greeting();
/** Updates every hour */
setInterval(Clock, 3600);