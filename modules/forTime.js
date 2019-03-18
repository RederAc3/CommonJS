var os = require('os');

function formatTime() {
    var timeSec = os.uptime();
    var timeMin = Math.floor((timeSec / 60));
    var timeHour = Math.floor((timeMin / 60));

    if (timeSec > 60 && timeSec < 3600) {
        console.log('Uptime:', timeMin, 'min', timeSec - (timeMin * 60), 'sec');
    } else if (timeSec > 3600) {
        console.log('Uptime:', timeHour, 'godz', timeMin - (timeHour * 60), 'min', timeSec - (timeMin * 60), 'sec');
    } else if (timeSec < 60) {
        console.log('Uptime:', timeSec, 'sec');
    }
}

exports.print = formatTime;