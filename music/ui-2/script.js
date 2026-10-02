let isPlaying = false;

let currentSong = "Nothing Playing";


function play(song) {

    currentSong = song;

    document.getElementById("nowPlaying")
        .textContent = song;

    isPlaying = true;

    document.getElementById("play")
        .textContent = "⏸";
}


function startPlaylist() {

    play("Feel Good Music");

}


function togglePlay() {

    if (isPlaying) {

        isPlaying = false;

        document.getElementById("play")
            .textContent = "▶";

    } else {

        isPlaying = true;

        document.getElementById("play")
            .textContent = "⏸";

    }

}


function previous() {

    document.getElementById("nowPlaying")
        .textContent = "Previous Song";

    isPlaying = true;

    document.getElementById("play")
        .textContent = "⏸";

}


function next() {

    document.getElementById("nowPlaying")
        .textContent = "Next Song";

    isPlaying = true;

    document.getElementById("play")
        .textContent = "⏸";

}


function showMessage() {

    let message =
        document.getElementById("message");

    message.textContent =
        "More music is coming soon!";

    message.style.display = "block";

    setTimeout(function() {

        message.style.display = "none";

    }, 2000);

}