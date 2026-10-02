/* Playlist Data */

const playlists = {

    daily: {

        title: "Daily Vibes",

        description:
            "Relaxing music for your day",

        cover: "🎵",

        songs: [

            {
                name: "Golden Morning",
                artist: "Dream Sounds"
            },

            {
                name: "Happy Days",
                artist: "Sunset Music"
            },

            {
                name: "Summer Feeling",
                artist: "Luna Waves"
            },

            {
                name: "Good Mood",
                artist: "The Vibes"
            },

            {
                name: "Peaceful Moments",
                artist: "Calm Sounds"
            }

        ]

    },


    night: {

        title: "Night Drive",

        description:
            "Music for late night rides",

        cover: "🌙",

        songs: [

            {
                name: "Midnight City",
                artist: "Neon Dreams"
            },

            {
                name: "Neon Lights",
                artist: "City Beats"
            },

            {
                name: "After Dark",
                artist: "Night Waves"
            },

            {
                name: "City Dreams",
                artist: "Urban Sounds"
            },

            {
                name: "Night Waves",
                artist: "Midnight Band"
            }

        ]

    },


    morning: {

        title: "Morning Hits",

        description:
            "Start your morning with music",

        cover: "☀️",

        songs: [

            {
                name: "New Day",
                artist: "Morning Beats"
            },

            {
                name: "Wake Up",
                artist: "Happy Sounds"
            },

            {
                name: "Fresh Start",
                artist: "Sunrise Band"
            },

            {
                name: "Morning Sky",
                artist: "Blue Notes"
            },

            {
                name: "Good Morning",
                artist: "Sunshine Music"
            }

        ]

    },


    top: {

        title: "Top Hits",

        description:
            "Popular songs this week",

        cover: "🔥",

        songs: [

            {
                name: "Popular Beat",
                artist: "Top Artists"
            },

            {
                name: "Trending Now",
                artist: "Music Stars"
            },

            {
                name: "Hit Song",
                artist: "The Stars"
            },

            {
                name: "Number One",
                artist: "Best Beats"
            },

            {
                name: "Best Of The Week",
                artist: "Top Music"
            }

        ]

    }

};


/* Current Playlist */

let currentPlaylist = null;

let currentSong = 0;

let isPlaying = false;


/* Open Playlist */

function openPlaylist(playlistName) {

    currentPlaylist =
        playlists[playlistName];

    currentSong = 0;


    document.getElementById(
        "playlistTitle"
    ).textContent =
        currentPlaylist.title;


    document.getElementById(
        "playlistDescription"
    ).textContent =
        currentPlaylist.description;


    document.getElementById(
        "playlistCover"
    ).textContent =
        currentPlaylist.cover;


    displaySongs();


    document.getElementById(
        "playlistSection"
    ).scrollIntoView({

        behavior: "smooth"

    });

}


/* Display Songs */

function displaySongs() {

    const songList =
        document.getElementById(
            "songList"
        );


    songList.innerHTML = "";


    currentPlaylist.songs.forEach(
        function(song, index) {


            const songRow =
                document.createElement(
                    "div"
                );


            songRow.className =
                "playlist-song";


            songRow.innerHTML = `

                <span class="song-number">
                    ${index + 1}
                </span>

                <div class="song-info">

                    <strong>
                        ${song.name}
                    </strong>

                    <p>
                        ${song.artist}
                    </p>

                </div>

                <button
                    onclick="selectSong(${index})">

                    ▶

                </button>

            `;


            songList.appendChild(
                songRow
            );

        }
    );

}


/* Select Song */

function selectSong(index) {

    if (!currentPlaylist) {

        return;

    }


    currentSong = index;


    const song =
        currentPlaylist.songs[
            currentSong
        ];


    document.getElementById(
        "currentSong"
    ).textContent =
        song.name;


    document.getElementById(
        "currentArtist"
    ).textContent =
        song.artist;


    isPlaying = true;


    document.getElementById(
        "playButton"
    ).textContent = "⏸";

}


/* Play / Pause */

function playPause() {

    if (!currentPlaylist) {

        return;

    }


    const song =
        currentPlaylist.songs[
            currentSong
        ];


    if (isPlaying) {

        isPlaying = false;

        document.getElementById(
            "playButton"
        ).textContent = "▶";

    }

    else {

        isPlaying = true;

        document.getElementById(
            "currentSong"
        ).textContent =
            song.name;

        document.getElementById(
            "currentArtist"
        ).textContent =
            song.artist;

        document.getElementById(
            "playButton"
        ).textContent = "⏸";

    }

}


/* Next Song */

function nextSong() {

    if (!currentPlaylist) {

        return;

    }


    currentSong++;


    if (
        currentSong >=
        currentPlaylist.songs.length
    ) {

        currentSong = 0;

    }


    selectSong(currentSong);

}


/* Previous Song */

function previousSong() {

    if (!currentPlaylist) {

        return;

    }


    currentSong--;


    if (currentSong < 0) {

        currentSong =
            currentPlaylist.songs.length - 1;

    }


    selectSong(currentSong);

}


/* Home */

function showHome() {

    document.getElementById(
        "homeSection"
    ).style.display = "block";


    document.getElementById(
        "searchSection"
    ).style.display = "none";


    document.getElementById(
        "librarySection"
    ).style.display = "none";

}


/* Search */

function showSearch() {

    document.getElementById(
        "homeSection"
    ).style.display = "none";


    document.getElementById(
        "searchSection"
    ).style.display = "block";


    document.getElementById(
        "librarySection"
    ).style.display = "none";

}


/* Library */

function showLibrary() {

    document.getElementById(
        "homeSection"
    ).style.display = "none";


    document.getElementById(
        "searchSection"
    ).style.display = "none";


    document.getElementById(
        "librarySection"
    ).style.display = "block";

}


/* Search Music */

function searchMusic() {

    const input =
        document.getElementById(
            "searchInput"
        ).value.toLowerCase();


    const results =
        document.getElementById(
            "searchResults"
        );


    if (input === "") {

        results.innerHTML =
            "<p>Search for songs or artists.</p>";

        return;

    }


    let foundSongs = [];


    Object.values(playlists).forEach(
        function(playlist) {

            playlist.songs.forEach(
                function(song) {

                    if (
                        song.name
                            .toLowerCase()
                            .includes(input)
                        ||
                        song.artist
                            .toLowerCase()
                            .includes(input)
                    ) {

                        foundSongs.push(song);

                    }

                }
            );

        }
    );


    if (foundSongs.length === 0) {

        results.innerHTML =
            "<p>No songs found.</p>";

        return;

    }


    results.innerHTML = "";


    foundSongs.forEach(
        function(song) {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "playlist-song";


            div.innerHTML = `

                <div class="song-info">

                    <strong>
                        ${song.name}
                    </strong>

                    <p>
                        ${song.artist}
                    </p>

                </div>

            `;


            results.appendChild(div);

        }
    );

}