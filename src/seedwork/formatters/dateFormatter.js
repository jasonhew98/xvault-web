const moment = require('moment');

function formatDate(date) {
    return moment(date).format('DD MMM YYYY');
}

function formatDateTime(date) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
}

function formatDateExcludeDay(date) {
    return moment(date).format('YYYY MMM');
}

export {
    formatDate,
    formatDateTime,
    formatDateExcludeDay
};