function updateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    document.getElementById('currentTime').textContent = 'Time: ' + timeString;
}

setInterval(updateTime, 1000);
updateTime();