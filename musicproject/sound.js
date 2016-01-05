el;

var isWelcome = true;

function playSound(el2, soundfile) {
    this.el = el2;
    if (el.mp3) {
        if (el.mp3.paused) el.mp3.play();
        else el.mp3.pause();
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.play();
    }

    if (isWelcome == true) {
        isWelcome = false;
    }
}


function stopSound() {
    el.mp3.pause();
    el.mp3.next();
}