var exec = require('child_process').exec;
var cmd = 'npm run protractor';
setTimeout(function () {
    exec(cmd, function (error, stdout, stderr) {
        console.log(error);
    });
}, 10000)