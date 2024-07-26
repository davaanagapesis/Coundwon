// Get the current date and time
const now = new Date().getTime();

// Set the countdown date to 24 hours from now
const countDownDate = now + (24 * 60 * 60 * 1000);

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get the current date and time
  const currentTime = new Date().getTime();
    
  // Find the distance between now and the countdown date
  const distance = countDownDate - currentTime;
    
  // Time calculations for hours, minutes, and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
    
  // If the countdown is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
