var mongoose = require('mongoose');

module.exports = function(url) {
    mongoose.connect(url);
    // mongoose.set('debug', true);

    mongoose.connection.on('connected', function() {
        console.log('Mongoose connected on ' + url);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose disconnected on ' + url);
    });

    mongoose.connection.on('error', function() {
        console.log('Mongoose error to connect on ' + url);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose finished due to the disconnection from terminal');
            process.exit(0);
        });
    });
}
