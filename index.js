var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("Asia/Calcutta");
    callback(null, {
        statusCode: '200',
        body: 'The time in India is: ' + currentTime.toString(),
    });
};
