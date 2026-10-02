const movies = [
    {
        id: 1,
        title: "Kalki 2898 AD",
        language: "Telugu",
        genre: "Sci-Fi",
        year: 2024,
        rating: "8.0",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2024/posters/kalki_2898_ad.jpg",
        description: "A futuristic Indian epic combining mythology, technology and an extraordinary battle for humanity."
    },
    {
        id: 2,
        title: "Sita Ramam",
        language: "Telugu",
        genre: "Romance",
        year: 2022,
        rating: "8.6",
        type: "Movie",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg",
        description: "A mysterious letter leads to a beautiful story of love, memories and destiny."
    },
    {
        id: 3,
        title: "Laapataa Ladies",
        language: "Hindi",
        genre: "Comedy",
        year: 2024,
        rating: "8.4",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2024/posters/laapataa_ladies.jpg",
        description: "A gentle comedy about identity, friendship and two brides who become unexpectedly separated."
    },
    {
        id: 4,
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
        id: 5,
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
        id: 6,
        title: "Baahubali 2",
        language: "Telugu",
        genre: "Fantasy",
        year: 2017,
        rating: "8.2",
        type: "Movie",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xQ22LOWSkClP3maYhR9nZH0dnWM.jpg",
        description: "The truth behind a royal family and an extraordinary warrior is finally revealed."
    },
    {
        id: 7,
        title: "RRR",
        language: "Telugu",
        genre: "Action",
        year: 2022,
        rating: "8.0",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2022/posters/rrr_xxlg.jpg",
        description: "Two revolutionaries form an extraordinary friendship during India's freedom struggle."
    },
    {
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
        title: "Parasite",
        language: "Korean",
        genre: "Thriller",
        year: 2019,
        rating: "8.5",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        description: "Two families from completely different worlds become unexpectedly connected."
    },
    {
        id: 12,
        title: "The Dark Knight",
        language: "English",
        genre: "Action",
        year: 2008,
        rating: "9.0",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "A masked hero faces a criminal mastermind who pushes Gotham into chaos."
    },
    {
        id: 13,
        title: "Spirited Away",
        language: "Japanese",
        genre: "Animation",
        year: 2001,
        rating: "8.6",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        description: "A young girl enters a mysterious spirit world and searches for a way home."
    },
    {
        id: 14,
        title: "Weathering With You",
        language: "Japanese",
        genre: "Fantasy",
        year: 2019,
        rating: "8.0",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
        description: "A young boy meets a girl who appears to have the power to control the weather."
    }
];

const series = [
    {
        id: 101,
        title: "The Bear",
        language: "English",
        genre: "Drama",
        year: 2022,
        rating: "8.5",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/sHFlbKS3WLqMnp9t2ghADIJFNuQ.jpg",
        description: "A young chef returns home to run his family's restaurant."
    },
    {
        id: 102,
        title: "Dark",
        language: "German",
        genre: "Sci-Fi",
        year: 2017,
        rating: "8.7",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
        description: "A missing child reveals a mystery spanning generations."
    },
    {
        id: 103,
        title: "Panchayat",
        language: "Hindi",
        genre: "Comedy",
        year: 2020,
        rating: "8.9",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/5N4j7J8K2L3M9Q0R1S6T.jpg",
        description: "A young graduate adjusts to life and unexpected friendships in a village."
    }
];

const all = [...movies, ...series];

function fallbackImage() {
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="750">
            <rect width="100%" height="100%" fill="#111411"/>
            <text x="50%" y="48%" fill="#d8b978" font-size="30"
            text-anchor="middle" font-family="Georgia">MOVIEHUB</text>
            <text x="50%" y="54%" fill="#aaa" font-size="17"
            text-anchor="middle" font-family="Arial">Poster</text>
        </svg>
    `);
}

function card(item) {
    return `
        <div class="card" onclick="location.hash='details/${item.id}'">
            <img src="${item.image}" onerror="this.onerror=null;this.src=fallbackImage()">

            <div class="card-title">${item.title}</div>

            <div class="card-meta">
                ${item.language} • ${item.year} • ★ ${item.rating}
            </div>
        </div>
    `;
}

function row(title,list) {
    return `
        <section class="section">
            <h2>${title}</h2>
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

                <div class="eyebrow">
                    MOVIEHUB PREMIERE
                </div>

                <h1>
                    Cinema,<br>
                    beautifully curated.
                </h1>

                <p>
                    Explore premium Indian cinema, international stories,
                    unforgettable dramas, romance, thrillers and extraordinary
                    entertainment.
                </p>

                <div class="buttons">
                    <button class="btn primary"
                        onclick="location.hash='watch/1'">
                        ▶ Watch Premiere
                    </button>

                    <button class="btn secondary"
                        onclick="addList(1)">
                        ＋ My List
                    </button>
                </div>

            </div>
        </section>

        ${row("Continue Watching",movies.slice(1,6))}
        ${row("Editor's Picks",movies.slice(3,10))}
        ${row("Indian Cinema",
            movies.filter(x =>
                ["Telugu","Hindi","Tamil","Malayalam","Kannada"]
                .includes(x.language)
            )
        )}
        ${row("Telugu Collection",
            movies.filter(x=>x.language==="Telugu")
        )}
        ${row("International Cinema",
            movies.filter(x =>
                ["English","Japanese","Korean"]
                .includes(x.language)
            )
        )}
        ${row("Critically Acclaimed",
            [...all].sort((a,b)=>b.rating-a.rating).slice(0,9)
        )}
    `;
}

function page(title,list) {
    return `
        <div class="page">
            <h1 class="page-title">${title}</h1>

            <div class="grid">
                ${
                    list.length
                    ? list.map(card).join("")
                    : `<div class="empty">Nothing here yet.</div>`
                }
            </div>
        </div>
    `;
}

function languages() {
    const list = [
        "Telugu","Hindi","Tamil","Malayalam","Kannada",
        "English","Korean","Japanese","Spanish","French"
    ];

    return `
        <div class="page">
            <h1 class="page-title">Languages</h1>

            <div class="language-grid">
                ${list.map(language=>`
                    <div class="language"
                        onclick="location.hash='language/${language}'">
                        ${language}
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function genres() {
    const list = [
        "Action","Drama","Comedy","Romance","Thriller",
        "Sci-Fi","Fantasy","Horror","Mystery","Adventure",
        "Crime","Animation","Family","History","Sports"
    ];

    return `
        <div class="page">
            <h1 class="page-title">Explore Genres</h1>

            <div class="genre-grid">
                ${list.map(genre=>`
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
    const movie = all.find(x=>x.id==id);

    if(!movie)
        return `<div class="empty">Movie not found.</div>`;

    return `
        <section class="detail">
            <div class="detail-content">

                <div class="eyebrow">
                    ${movie.type} • MOVIEHUB
                </div>

                <h1>${movie.title}</h1>

                <div class="meta">
                    <span>${movie.year}</span>
                    <span>${movie.language}</span>
                    <span>${movie.genre}</span>
                    <span>★ ${movie.rating}</span>
                </div>

                <p class="description">
                    ${movie.description}
                </p>

                <div class="buttons">
                    <button class="btn primary"
                        onclick="location.hash='watch/${movie.id}'">
                        ▶ Watch Now
                    </button>

                    <button class="btn secondary"
                        onclick="addList(${movie.id})">
                        ＋ My List
                    </button>
                </div>

            </div>
        </section>

        ${row(
            "More From MovieHub",
            all.filter(x=>x.id!=movie.id).slice(0,7)
        )}
    `;
}

function watch(id) {
    const movie = all.find(x=>x.id==id);

    return `
        <div class="watch">
            <div class="player">
                <div class="play">▶</div>
            </div>

            <h1 style="margin-top:25px;">
                ${movie ? movie.title : "MovieHub Player"}
            </h1>

            <p style="color:#777;margin-top:8px;">
                Demo player interface. Connect your own legal video source.
            </p>
        </div>
    `;
}

function languagesPage() {
    return languages();
}

function searchPage() {
    return `
        <div class="page">
            <h1 class="page-title">Search MovieHub</h1>

            <input
                class="search"
                id="searchInput"
                placeholder="Search movies, series, genres or languages..."
                oninput="searchContent()">

            <div class="grid" id="results">
                ${all.map(card).join("")}
            </div>
        </div>
    `;
}

function searchContent() {
    const value =
        document.getElementById("searchInput").value.toLowerCase();

    const result = all.filter(item =>
        item.title.toLowerCase().includes(value) ||
        item.language.toLowerCase().includes(value) ||
        item.genre.toLowerCase().includes(value)
    );

    document.getElementById("results").innerHTML =
        result.map(card).join("");
}

function addList(id) {
    let list = JSON.parse(
        localStorage.getItem("moviehubList") || "[]"
    );

    if(!list.includes(id)) {
        list.push(id);

        localStorage.setItem(
            "moviehubList",
            JSON.stringify(list)
        );

        alert("Added to My List");
    } else {
        alert("Already in My List");
    }
}

function myList() {
    const ids = JSON.parse(
        localStorage.getItem("moviehubList") || "[]"
    );

    return page(
        "My List",
        all.filter(x=>ids.includes(x.id))
    );
}

function profiles() {
    return `
        <div class="page">
            <h1 class="page-title">Select Profile</h1>

            <div class="profile-grid">

                <div class="profile-card">
                    <div class="profile-icon">M</div>
                    <h3>Main Profile</h3>
                    <p style="color:#777;margin-top:7px;">
                        Premium
                    </p>
                </div>

                <div class="profile-card">
                    <div class="profile-icon">F</div>
                    <h3>Family</h3>
                    <p style="color:#777;margin-top:7px;">
                        Family Profile
                    </p>
                </div>

                <div class="profile-card">
                    <div class="profile-icon">K</div>
                    <h3>Kids</h3>
                    <p style="color:#777;margin-top:7px;">
                        Kids Profile
                    </p>
                </div>

            </div>
        </div>
    `;
}

function render() {
    const route =
        location.hash.replace("#","") || "home";

    const parts = route.split("/");

    let html;

    if(parts[0]==="home")
        html=home();

    else if(parts[0]==="cinema")
        html=page("Cinema",movies);

    else if(parts[0]==="series")
        html=page("Series",series);

    else if(parts[0]==="premieres")
        html=page("Premieres",movies.slice(0,8));

    else if(parts[0]==="awards")
        html=page(
            "Award-Worthy Cinema",
            [...all].sort((a,b)=>b.rating-a.rating).slice(0,10)
        );

    else if(parts[0]==="editors")
        html=page("Editor's Picks",movies.slice(2,11));

    else if(parts[0]==="indian")
        html=page(
            "Indian Cinema",
            movies.filter(x =>
                ["Telugu","Hindi","Tamil","Malayalam","Kannada"]
                .includes(x.language)
            )
        );

    else if(parts[0]==="telugu")
        html=page(
            "Telugu Cinema",
            movies.filter(x=>x.language==="Telugu")
        );

    else if(parts[0]==="hindi")
        html=page(
            "Hindi Cinema",
            movies.filter(x=>x.language==="Hindi")
        );

    else if(parts[0]==="tamil")
        html=page(
            "Tamil Cinema",
            movies.filter(x=>x.language==="Tamil")
        );

    else if(parts[0]==="malayalam")
        html=page(
            "Malayalam Cinema",
            movies.filter(x=>x.language==="Malayalam")
        );

    else if(parts[0]==="languages")
        html=languagesPage();

    else if(parts[0]==="genres")
        html=genres();

    else if(parts[0]==="top10")
        html=page(
            "Top 10",
            [...all].sort((a,b)=>b.rating-a.rating).slice(0,10)
        );

    else if(parts[0]==="trending")
        html=page("Trending",movies.slice(0,10));

    else if(parts[0]==="mylist")
        html=myList();

    else if(parts[0]==="continue")
        html=page("Continue Watching",movies.slice(2,8));

    else if(parts[0]==="search")
        html=searchPage();

    else if(parts[0]==="profiles")
        html=profiles();

    else if(parts[0]==="details")
        html=details(parts[1]);

    else if(parts[0]==="watch")
        html=watch(parts[1]);

    else if(parts[0]==="language")
        html=page(
            parts[1],
            all.filter(x=>x.language===parts[1])
        );

    else if(parts[0]==="genre")
        html=page(
            parts[1],
            all.filter(x=>x.genre===parts[1])
        );

    else
        html=home();

    document.getElementById("app").innerHTML=html;
    window.scrollTo(0,0);
}

window.addEventListener("hashchange",render);
render();