let disfraz = document.getElementById("disfraz");
let mochilero = document.getElementById("mochilero");
let currentAudio = null;  // Variable to track the current playing audio

function reproducirDisfraz() {
    if (currentAudio && currentAudio !== disfraz) {
        currentAudio.pause();
    }
    
    if (disfraz.paused) {
        disfraz.play();
        currentAudio = disfraz;
    } else {
        disfraz.pause();
        currentAudio = null;
    }
}

function reproducirMochilero() {
    if (currentAudio && currentAudio !== mochilero) {
        currentAudio.pause();
    }
    
    if (mochilero.paused) {
        mochilero.play();
        currentAudio = mochilero;
    } else {
        mochilero.pause();
        currentAudio = null;
    }
}