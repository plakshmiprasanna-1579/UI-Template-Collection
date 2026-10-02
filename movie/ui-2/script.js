const movies = [
    {
        id: 1,
        title: "RRR",
        language: "Telugu",
        genre: "Action",
        year: 2022,
        rating: "8.0",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2022/posters/rrr_xxlg.jpg",
        description: "Two legendary revolutionaries form an extraordinary friendship while fighting for freedom and justice."
    },
    {
        id: 2,
        title: "Baahubali: The Beginning",
        language: "Telugu",
        genre: "Fantasy",
        year: 2015,
        rating: "8.0",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2015/posters/bahubali_the_beginning.jpg",
        description: "A young warrior discovers the truth behind his royal family and his destiny."
    },
    {
        id: 3,
        title: "Baahubali 2",
        language: "Telugu",
        genre: "Fantasy",
        year: 2017,
        rating: "8.2",
        type: "Movie",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xQ22LOWSkClP3maYhR9nZH0dnWM.jpg",
        description: "The story of Mahendra Baahubali continues as he discovers the truth about his family."
    },
    {
        id: 4,
        title: "Hi Nanna",
        language: "Telugu",
        genre: "Romance",
        year: 2023,
        rating: "8.1",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/hhMLtq9m1aK0dpY9Wcq26XeDH2z.jpg",
        description: "A touching story about family, love, memories and second chances."
    },
    {
        id: 5,
        title: "Vikram",
        language: "Tamil",
        genre: "Thriller",
        year: 2022,
        rating: "8.3",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2022/posters/vikram.jpg",
        description: "A mysterious investigation uncovers a dangerous criminal network."
    },
    {
        id: 6,
        title: "Drishyam",
        language: "Malayalam",
        genre: "Mystery",
        year: 2013,
        rating: "8.6",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/gIClWRv5OSe8rl5Koi0AeUcCZ9Z.jpg",
        description: "A family man uses intelligence and careful planning to protect his family."
    },
    {
        id: 7,
        title: "Dangal",
        language: "Hindi",
        genre: "Sports",
        year: 2016,
        rating: "8.3",
        type: "Movie",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg",
        description: "A determined father trains his daughters to become wrestling champions."
    },
    {
        id: 8,
        title: "3 Idiots",
        language: "Hindi",
        genre: "Comedy",
        year: 2009,
        rating: "8.4",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw0u5H3K.jpg",
        description: "Three engineering students navigate friendship, pressure and their dreams."
    },
    {
        id: 9,
        title: "Sita Ramam",
        language: "Telugu",
        genre: "Romance",
        year: 2022,
        rating: "8.6",
        type: "Movie",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg",
        description: "A mysterious letter leads to a beautiful story of love and destiny."
    },
    {
        id: 10,
        title: "12th Fail",
        language: "Hindi",
        genre: "Drama",
        year: 2023,
        rating: "9.0",
        type: "Movie",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/eebUPRI4Z5e1Z7Hev4JZAwMIFkX.jpg",
        description: "An inspiring journey about persistence, education and rebuilding one's future."
    },
    {
        id: 11,
        title: "Premam",
        language: "Malayalam",
        genre: "Romance",
        year: 2015,
        rating: "8.3",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2015/posters/premam.jpg",
        description: "A man's life and relationships evolve through different stages of love."
    },
    {
        id: 12,
        title: "Laapataa Ladies",
        language: "Hindi",
        genre: "Comedy",
        year: 2024,
        rating: "8.4",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2024/posters/laapataa_ladies.jpg",
        description: "A gentle comedy about identity, friendship and two brides who become separated."
    },
    {
        id: 13,
        title: "Interstellar",
        language: "English",
        genre: "Sci-Fi",
        year: 2014,
        rating: "8.7",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "Explorers travel through a mysterious wormhole in search of a future for humanity."
    },
    {
        id: 14,
        title: "Parasite",
        language: "Korean",
        genre: "Thriller",
        year: 2019,
        rating: "8.5",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        description: "Two families from different social worlds become deeply connected."
    }
];

const series = [
    {
        id: 101,
        title: "Sacred Games",
        language: "Hindi",
        genre: "Crime",
        year: 2018,
        rating: "8.5",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/6jKZ8xY1M2L3N4P5Q6R7S8T9.jpg",
        description: "A police officer receives a mysterious warning that changes his life."
    },
    {
        id: 102,
        title: "Suzhal",
        language: "Tamil",
        genre: "Mystery",
        year: 2022,
        rating: "8.1",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/vQ5bR9Y5X3M4C7J8D2F6A1L0.jpg",
        description: "A small town mystery unfolds during an important local festival."
    },
    {
        id: 103,
        title: "Kota Factory",
        language: "Hindi",
        genre: "Drama",
        year: 2019,
        rating: "9.0",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/1N4K5M7Q8R9T2Y3U6I0O1P.jpg",
        description: "Students navigate competitive exams, friendship and life in Kota."
    },
    {
        id: 104,
        title: "Made in Heaven",
        language: "Hindi",
        genre: "Drama",
        year: 2019,
        rating: "8.2",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/2A3B4C5D6E7F8G9H0I1J.jpg",
        description: "Two wedding planners experience the secrets behind wealthy celebrations."
    }
];

const allContent = [...movies, ...series];

function fallbackImage() {
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="750">
            <rect width="100%" height="100%" fill="#181818"/>
            <text x="50%" y="48%" fill="#e50914" font-size="32"
            text-anchor="middle" font-family="Arial">FILMZONE</text>
            <text x="50%" y="54%" fill="#aaa" font-size="18"
            text-anchor="middle" font-family="Arial">Poster</text>
        </svg>
    `);
}

function card(movie) {
    return `
        <div class="card" onclick="location.hash='details/${movie.id}'">
            <img src="${movie.image}" onerror="this.onerror=null;this.src=fallbackImage()">
            <div class="card-info">
                <div class="card-title">${movie.title}</div>
                <div class="card-meta">${movie.language} • ${movie.year} • ★ ${movie.rating}</div>
            </div>
        </div>
    `;
}

function row(title, list) {
    return `
        <section class="section">
            <h2 class="section-title">${title}</h2>
            <div class="row">
                ${list.map(card).join("")}
            </div>
        </section>
    `;
}

function home() {
    return `
        <section class="hero">
            <div class="hero-content">
                <div class="badge">FILMZONE ORIGINAL EXPERIENCE</div>
                <h1>Indian stories.<br>Infinite worlds.</h1>
                <p>
                    Discover Telugu, Hindi, Tamil, Malayalam,
                    Kannada and international cinema in one premium
                    entertainment destination.
                </p>

                <div class="buttons">
                    <button class="btn primary" onclick="location.hash='watch/1'">
                        ▶ Watch Now
                    </button>
                    <button class="btn secondary" onclick="addToList(1)">
                        ＋ My List
                    </button>
                </div>
            </div>
        </section>

        ${row("Continue Watching", movies.slice(2,6))}
        ${row("Trending Across India", movies.slice(0,8))}
        ${row("Telugu Spotlight", movies.filter(m => m.language === "Telugu"))}
        ${row("Hindi Cinema", movies.filter(m => m.language === "Hindi"))}
        ${row("South Indian Stories", movies.filter(m =>
            ["Telugu","Tamil","Malayalam","Kannada"].includes(m.language)
        ))}
        ${row("International Picks", movies.filter(m =>
            ["English","Korean","Japanese"].includes(m.language)
        ))}
        ${row("Critically Loved", [...movies].sort((a,b) =>
            b.rating - a.rating
        ).slice(0,8))}
    `;
}

function page(title, list) {
    return `
        <div class="page">
            <h1 class="page-title">${title}</h1>
            ${
                list.length
                ? `<div class="grid">${list.map(card).join("")}</div>`
                : `<div class="empty">No movies found.</div>`
            }
        </div>
    `;
}

function languagesPage() {
    const languages = [
        "Telugu","Hindi","Tamil","Malayalam","Kannada",
        "English","Korean","Japanese","Spanish","French"
    ];

    return `
        <div class="page">
            <h1 class="page-title">Browse by Language</h1>
            <div class="language-grid">
                ${languages.map(language => `
                    <div class="language"
                         onclick="location.hash='language/${language}'">
                        ${language}
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function genresPage() {
    const genres = [
        "Action","Drama","Comedy","Romance","Thriller","Sci-Fi",
        "Fantasy","Horror","Mystery","Adventure","Crime",
        "Animation","Family","Documentary","History","Sports"
    ];

    return `
        <div class="page">
            <h1 class="page-title">Genres</h1>
            <div class="genre-grid">
                ${genres.map(genre => `
                    <div class="genre"
                         onclick="location.hash='genre/${genre}'">
                        ${genre}
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function details(id) {
    const movie = allContent.find(m => m.id == id);

    if (!movie) {
        return `<div class="empty">Movie not found.</div>`;
    }

    return `
        <section class="detail">
            <div class="detail-content">
                <div class="badge">${movie.type} • FILMZONE</div>
                <h1>${movie.title}</h1>

                <div class="meta">
                    <span>${movie.year}</span>
                    <span>${movie.language}</span>
                    <span>${movie.genre}</span>
                    <span>★ ${movie.rating}</span>
                </div>

                <p class="detail-description">
                    ${movie.description}
                </p>

                <div class="buttons">
                    <button class="btn primary"
                        onclick="location.hash='watch/${movie.id}'">
                        ▶ Watch
                    </button>

                    <button class="btn secondary"
                        onclick="addToList(${movie.id})">
                        ＋ My List
                    </button>
                </div>
            </div>
        </section>

        ${row(
            "More Like This",
            allContent.filter(m => m.id != movie.id).slice(0,6)
        )}
    `;
}

function watch(id) {
    const movie = allContent.find(m => m.id == id);

    return `
        <div class="watch-page">
            <div class="video-box">
                <div class="play-big">▶</div>
            </div>

            <h1 class="video-title">
                ${movie ? movie.title : "FilmZone Player"}
            </h1>

            <p style="color:#888;margin-top:10px;">
                Cinematic demo player — connect your own legal video source here.
            </p>
        </div>
    `;
}

function searchPage() {
    return `
        <div class="page">
            <h1 class="page-title">Search FilmZone</h1>

            <input class="search-box"
                id="searchInput"
                placeholder="Search movies, series, languages or genres..."
                oninput="searchContent()">

            <div class="grid" id="searchResults">
                ${allContent.map(card).join("")}
            </div>
        </div>
    `;
}

function profiles() {
    return `
        <div class="page">
            <h1 class="page-title">Who's Watching?</h1>

            <div class="profile-grid">
                <div class="profile">
                    <div class="profile-avatar">S</div>
                    <h3>Sravya</h3>
                    <p style="color:#777;margin-top:7px;">Personal</p>
                </div>

                <div class="profile">
                    <div class="profile-avatar">F</div>
                    <h3>Family</h3>
                    <p style="color:#777;margin-top:7px;">Family</p>
                </div>

                <div class="profile">
                    <div class="profile-avatar">K</div>
                    <h3>Kids</h3>
                    <p style="color:#777;margin-top:7px;">Kids Profile</p>
                </div>
            </div>
        </div>
    `;
}

function getList() {
    return JSON.parse(localStorage.getItem("filmzoneList") || "[]");
}

function addToList(id) {
    let list = getList();

    if (!list.includes(id)) {
        list.push(id);
        localStorage.setItem("filmzoneList", JSON.stringify(list));
        alert("Added to My List");
    } else {
        alert("Already in My List");
    }
}

function searchContent() {
    const value = document.getElementById("searchInput").value.toLowerCase();

    const results = allContent.filter(movie =>
        movie.title.toLowerCase().includes(value) ||
        movie.language.toLowerCase().includes(value) ||
        movie.genre.toLowerCase().includes(value)
    );

    document.getElementById("searchResults").innerHTML =
        results.map(card).join("");
}

function render() {
    const route = location.hash.replace("#", "") || "home";
    const parts = route.split("/");

    let html = "";

    if (parts[0] === "home")
        html = home();

    else if (parts[0] === "movies")
        html = page("Movies", movies);

    else if (parts[0] === "series")
        html = page("Series", series);

    else if (parts[0] === "languages")
        html = languagesPage();

    else if (parts[0] === "genres")
        html = genresPage();

    else if (parts[0] === "trending")
        html = page("Trending", movies.slice(0,10));

    else if (parts[0] === "top10")
        html = page("Top 10",
            [...allContent].sort((a,b) => b.rating-a.rating).slice(0,10)
        );

    else if (parts[0] === "mylist")
        html = page(
            "My List",
            allContent.filter(m => getList().includes(m.id))
        );

    else if (parts[0] === "search")
        html = searchPage();

    else if (parts[0] === "profiles")
        html = profiles();

    else if (parts[0] === "details")
        html = details(parts[1]);

    else if (parts[0] === "watch")
        html = watch(parts[1]);

    else if (parts[0] === "language")
        html = page(
            parts[1],
            allContent.filter(m => m.language === parts[1])
        );

    else if (parts[0] === "genre")
        html = page(
            parts[1],
            allContent.filter(m => m.genre === parts[1])
        );

    else
        html = home();

    document.getElementById("app").innerHTML = html;
    window.scrollTo(0,0);
}

window.addEventListener("hashchange", render);
render();