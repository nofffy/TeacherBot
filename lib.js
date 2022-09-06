function getUnix() {
    return Math.floor(new Date().getTime()/1000.0).toString();
}

function longDate(string) {
    return '<t:' + string + ':F>';
}

function relTime(string) {
    return '<t:' + string + ':R>';
}

module.exports = { getUnix, longDate, relTime };