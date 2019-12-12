var play = document.getElementById("play");

function playAudio() {
    play.play();
    if (play.play()) {
        document.getElementById("display").style.display = "none";
    }
}