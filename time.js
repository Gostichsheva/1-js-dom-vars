'use strict';

var date = new Date();
var dateFormat = ['hours', 'minutes', 'seconds'];
var clock = document.createElement('div');

function updateClock() {
    var dateStr = '';

    date.setSeconds(date.getSeconds() + 1);

    for (var i = 0; i < dateFormat.length; i++) {

        switch (dateFormat[i]) {
            case 'year':
                dateStr += date.getFullYear() + ' ';
                break;
            case 'month':
                dateStr += date.getMonth() + 1 + ' ';
                break;
            case 'day':
                dateStr += date.getDate() + ' ';
                break;
            case 'hours':
                dateStr += date.getHours() + ' h ';
                break;
            case 'minutes':
                dateStr += date.getMinutes() + ' m ';
                break;
            case 'seconds':
                dateStr += date.getSeconds() + ' s ';
                break;
            default:
                break;
        }
    }
    clock.innerHTML = dateStr;
}

function initializeClock() {
    if (arguments[0] instanceof Date) {
        date = arguments[0];
        if (arguments[1] instanceof Array) {
            dateFormat = arguments[1];
        }
    } else if (arguments.length === 1 && arguments[0] instanceof Array) {
        dateFormat = arguments[0];
    } else {
        date = new Date;
        dateFormat = ['year', 'month', 'day', 'hours', 'minutes', 'seconds'];
    }
}

initializeClock(new Date(), ['year', 'month', 'day', 'hours', 'minutes', 'seconds']);
setInterval(updateClock, 1000);

document.body.appendChild(clock);
