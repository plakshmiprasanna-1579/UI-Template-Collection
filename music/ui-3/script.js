let tracks = [
    "Midnight City",
    "City Lights",
    "Ocean Waves"
];

let currentTrack = 0;

let isPlaying = false;


function playTrack(trackName) {

    currentTrack = tracks.indexOf(trackName);

    document.getElementById("currentTrack")
        .textContent = trackName;

    isPlaying = true;

    document.getElementById("playButton")
        .textContent = "⏸";
}


function togglePlay() {

    if (isPlaying) {

        isPlaying = false;

        document.getElementById("playButton")
            .textContent = "▶";

    } else {

        isPlaying = true;

        document.getElementById("currentTrack")
            .textContent = tracks[currentTrack];

        document.getElementById("playButton")
            .textContent = "⏸";
    }

}


function nextTrack() {

    currentTrack++;

    if (currentTrack >= tracks.length) {
        currentTrack = 0;
    }

    document.getElementById("currentTrack")
        .textContent = tracks[currentTrack];

    isPlaying = true;

    document.getElementById("playButton")
        .textContent = "⏸";
}


function previousTrack() {

    currentTrack--;

    if (currentTrack < 0) {
        currentTrack = tracks.length - 1;
    }

    document.getElementById("currentTrack")
        .textContent = tracks[currentTrack];

    isPlaying = true;

    document.getElementById("playButton")
        .textContent = "⏸";
}


function discover() {

    alert("Explore new music and discover artists!");

}