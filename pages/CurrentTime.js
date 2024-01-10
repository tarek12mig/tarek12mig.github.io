// Defines a function named updateTime that updates the web page with the current time.
function updateTime() {
    // Creates a new Date object containing the current date and time.
    var now = new Date();
    // Uses toLocaleTimeString to convert the time portion of the Date object into a readable string.
    var timeString = now.toLocaleTimeString();
    // Finds an element with the ID 'currentTime' and sets its text content to the string 'Time: ' followed by the formatted time string.
    document.getElementById('currentTime').textContent = 'Time: ' + timeString;
}

// Calls setInterval to execute the updateTime function every 1000 milliseconds (1 second).
setInterval(updateTime, 1000);
// Calls updateTime immediately to set the initial time without waiting for the interval.
updateTime();
