const date = (timeStamp) => {
    let unixTimeStamp = timeStamp;
    let timestampInMilliSeconds = unixTimeStamp * 1000;
    let date = new Date(timestampInMilliSeconds);
    let day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    let month = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
    let year = date.getFullYear();
    let hours = ((date.getHours() % 12 || 12) < 10 ? '0' : '') + (date.getHours() % 12 || 12);
    let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    let meridiem = (date.getHours() >= 12) ? 'pm' : 'am';
    let formattedDate = day + '-' + month + '-' + year + ' at ' + hours + ':' + minutes + ' ' + meridiem;
    return (formattedDate);
}
module.exports = { date }