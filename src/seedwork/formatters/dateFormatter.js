const moment = require("moment");

function formatDate(date) {
  return moment(date).format("DD MMM YYYY");
}

function formatDateTime(date) {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
}

function formatDateExcludeDay(date) {
  return moment(date).format("YYYY MMM");
}

function formatDateToUTC(date) {
  return moment(date).utc().toISOString();
}

function formatUTCToLocal(date) {
  return moment.utc(date).local().format("DD MMM YYYY");
}

export { formatDate, formatDateTime, formatDateExcludeDay, formatDateToUTC, formatUTCToLocal };
