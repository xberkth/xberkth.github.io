// create a function to update the time
function updateLocalTime() {
    // create a new `Time` object
    const now = new Date();

    // get the current date and time as a string
    const currentTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

    // update the `textContent` property of the `span` element with the `id` of `time`
    document.querySelector('#localtime').textContent = currentTime;
  }

  // call the `updateDateTime` function every second
  setInterval(updateLocalTime, 1000);

// create a function to update the time
function updateServerTime() {
  // create a new `Time` object
  const now = new Date();

  // get the current date and time as a string
  const currentTime = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid'});

  // update the `textContent` property of the `span` element with the `id` of `time`
  document.querySelector('#servertime').textContent = currentTime;
}

// call the `updateDateTime` function every second
setInterval(updateServerTime, 1000);