var os = require('os');
var colors = require('colors');

function formatTime() {
    var timeSec = os.uptime();
    var timeMin = Math.floor((timeSec / 60));
    var timeHour = Math.floor((timeMin / 60));
    var Uptime = 'Uptime:'.green;
    if (timeSec > 60 && timeSec < 3600) {
        console.log(Uptime, timeMin, 'min', timeSec - (timeMin * 60), 'sec');
    } else if (timeSec > 3600) {
        console.log(Uptime, timeHour, 'godz', timeMin - (timeHour * 60), 'min', timeSec - (timeMin * 60), 'sec');
    } else if (timeSec < 60) {
        console.log(Uptime, timeSec, 'sec');
    }
}

exports.print = formatTime;