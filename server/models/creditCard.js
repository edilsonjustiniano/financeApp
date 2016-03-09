'use strict';

var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        bank: {
            type: String,
            required: true
        },
        flag: {
            type: String
        },
        payDay: {
            type: Number,
            required: true
        },
        closeDay: {
            type: Number,
            required: true
        },
        number: {
            type: String
        }
    });

    return mongoose.model('CreditCard', schema);
};
