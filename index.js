var os = require('os');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input != null) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case 'node -v':
                process.stdout.write(process.version);
            case 'os -v':
                process.stdout.write(process.env.OS);
            case '/sayhello':
                process.stdout.write('hellllo\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;

        }
    }
});