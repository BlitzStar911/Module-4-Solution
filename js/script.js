(function() {
    var names = ["poornima", "Sachin", "Jenish", "jason", "Deepika", "jacob", "alves", "Parithosh", "saatvik", "Jake" ,"Harisha"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
