// create a function to update the time
function updateTime() {
  // create a new 'Date' object
  const now = new Date();

  // get the current time as a string for server and local
  const currentServerTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid'});
  const currentLocalTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  // update the 'textContent' property of the 'span' element with the corresponding 'id'
  document.querySelector('#servertime').textContent = currentServerTime;
  document.querySelector('#localtime').textContent = currentLocalTime;

  // schedule and repeat
  setInterval(updateTime, 1000);
}

// initiate the function 'updateTime'
updateTime()