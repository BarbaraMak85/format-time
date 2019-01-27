var formatTime = function(seconds) {
    var hours = parseInt(seconds / 3600, 10); // 1 godzina
    var minutes = parseInt((seconds % 3600) / 60, 10); // 1 minuta
    var sec = parseInt(seconds % 60, 10);

    var hoursToDisplay = hours == 0 ? "" : hours + " godz. ";
    var minutesToDisplay = minutes == 0 ? "" : minutes + " min. ";
    var secondsToDisplay = sec == 0 ? "" : sec + " sek.";

    return hoursToDisplay + minutesToDisplay + secondsToDisplay;
};

exports.formatTime = formatTime;