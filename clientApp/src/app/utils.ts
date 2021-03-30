 //set time hh:mm to decimal (0.00)
export function timeToDecimal(t) {
    return t.split(':')
        .map(function (val) { return parseInt(val, 10); })
        .reduce(function (previousValue, currentValue, index, array) {
            return previousValue + currentValue / Math.pow(60, index);
        });
}



// rounde up to the nearest 15 minutes
export function roundTime  (time, minutesToRound)  {
    // e.g 05:34 AM to 05:34
    time = time.slice(0, 5);
    //split by column
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    // Convert hours and minutes to time in minutes
    time = (hours * 60) + minutes;

    const rounded = Math.round(time / minutesToRound) * minutesToRound;
    const rHr = '' + Math.floor(rounded / 60)

    return rHr.padStart(2, '0') + ':' + (15 * Math.ceil(minutes / 15));
}