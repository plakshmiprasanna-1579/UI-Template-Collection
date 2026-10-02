const content = [
    {
        id: 1,
        title: "Interstellar",
        language: "English",
        genre: "Sci-Fi",
        year: 2014,
        rating: "8.7",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A group of explorers travels through a mysterious wormhole in search of a future for humanity."
    },
    {
        id: 2,
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
        id: 3,
        title: "Oppenheimer",
        language: "English",
        genre: "History",
        year: 2023,
        rating: "8.6",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        description: "The story of the scientist whose work changed modern history."
    },
    {
        id: 4,
        title: "Dune",
        language: "English",
        genre: "Fantasy",
        year: 2021,
        rating: "8.0",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        description: "A young heir must protect his people on a desert planet."
    },
    {
        id: 5,
        title: "Parasite",
        language: "Korean",
        genre: "Thriller",
        year: 2019,
        rating: "8.5",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        description: "Two families from completely different worlds become connected."
    },
    {
        id: 6,
        title: "Train to Busan",
        language: "Korean",
        genre: "Horror",
        year: 2016,
        rating: "7.6",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/vNnLAKmoczp0dFGg3dM6n9x7h.jpg",
        description: "Passengers fight to survive during a dangerous journey across South Korea."
    },
    {
        id: 7,
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
        id: 8,
        title: "A Silent Voice",
        language: "Japanese",
        genre: "Drama",
        year: 2016,
        rating: "8.1",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg",
        description: "A former bully seeks redemption and reconnects with someone from his past."
    },
    {
        id: 9,
        title: "3 Idiots",
        language: "Hindi",
        genre: "Comedy",
        year: 2009,
        rating: "8.4",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw0u5H3K.jpg",
        description: "Three friends challenge the pressure and expectations of college life."
    },
    {
        id: 10,
        title: "Dangal",
        language: "Hindi",
        genre: "Sports",
        year: 2016,
        rating: "8.3",
        type: "Movie",
        image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg",
        description: "A family trains two daughters to pursue their dreams in wrestling."
    },
    {
        id: 11,
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
        id: 12,
        title: "Kantara",
        language: "Kannada",
        genre: "Adventure",
        year: 2022,
        rating: "8.6",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/6b3d2J6kY9g8Y7x4V5P2A1.jpg",
        description: "A village story connects tradition, nature and an ancient spiritual mystery."
    },
    {
        id: 13,
        title: "Vikram",
        language: "Tamil",
        genre: "Crime",
        year: 2022,
        rating: "8.3",
        type: "Movie",
        image: "https://www.impawards.com/intl/india/2022/posters/vikram.jpg",
        description: "A hidden team investigates a dangerous criminal organization."
    },
    {
        id: 14,
        title: "Drishyam",
        language: "Malayalam",
        genre: "Mystery",
        year: 2013,
        rating: "8.6",
        type: "Movie",
        image: "https://image.tmdb.org/t/p/w500/gIClWRv5OSe8rl5Koi0AeUcCZ9Z.jpg",
        description: "A family man creates an elaborate plan to protect his family."
    }
];

const series = [
    {
        id: 101,
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
        id: 102,
        title: "Kingdom",
        language: "Korean",
        genre: "Horror",
        year: 2019,
        rating: "8.3",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/9fY8h8X9Z5Q6R7S8T9U0V1W2.jpg",
        description: "A mysterious disease spreads through a historical kingdom."
    },
    {
        id: 103,
        title: "The Family Man",
        language: "Hindi",
        genre: "Action",
        year: 2019,
        rating: "8.7",
        type: "Series",
        image: "https://image.tmdb.org/t/p/w500/4Q4X9kJ5F5G6P7R8S9T0.jpg",
        description: "A family man secretly works for a special intelligence agency."
    }
];

const all = [...content, ...series];

function fallbackImage() {
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="750">
            <rect width="100%" height="100%" fill="#10132b"/>
            <text x="50%" y="48%" fill="#8b5cf6" font-size="30"
            text-anchor="middle" font-family="Arial">CINEWORLD</text>
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
                <div class="eyebrow">GLOBAL CINEMA COLLECTION</div>
                <h1>One world.<br>Many stories.</h1>

                <p>
                    Explore Hollywood, Bollywood, South Indian cinema,
                    Korean films, Japanese animation and stories from
                    around the world.
                </p>

                <div class="buttons">
                    <button class="btn primary"
                        onclick="location.hash='watch/1'">
                        ▶ Start Watching
                    </button>

                    <button class="btn secondary"
                        onclick="addList(1)">
                        ＋ My List
                    </button>
                </div>
            </div>
        </section>

        ${row("Continue Watching",content.slice(2,6))}
        ${row("Global Trending",content.slice(0,8))}
        ${row("Hollywood Collection",
            content.filter(x=>x.language==="English"))}
        ${row("Korean Cinema",
            content.filter(x=>x.language==="Korean"))}
        ${row("Japanese Stories",
            content.filter(x=>x.language==="Japanese"))}
        ${row("Indian Cinema",
            content.filter(x=>["Telugu","Hindi","Tamil","Malayalam","Kannada"].includes(x.language)))}
        ${row("Top Rated",
            all.slice().sort((a,b)=>b.rating-a.rating).slice(0,8))}
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
                    : `<div class="empty">Nothing found.</div>`
                }
            </div>
        </div>
    `;
}

function discover() {
    return page("Discover",[
        ...content.filter(x=>x.rating>=8.5),
        ...series
    ]);
}

function international() {
    return page(
        "International Cinema",
        content.filter(x =>
            ["English","Korean","Japanese","German"].includes(x.language)
        )
    );
}

function anime() {
    return page(
        "Anime & Animation",
        content.filter(x=>x.genre==="Animation")
    );
}

function languages() {
    const langs = [
        "English","Hindi","Telugu","Tamil","Malayalam",
        "Kannada","Korean","Japanese","German","Spanish","French"
    ];

    return `
        <div class="page">
            <h1 class="page-title">Languages</h1>

            <div class="language-grid">
                ${langs.map(l=>`
                    <div class="language"
                        onclick="location.hash='language/${l}'">
                        ${l}
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function genres() {
    const genres = [
        "Action","Drama","Comedy","Romance","Thriller",
        "Sci-Fi","Fantasy","Horror","Mystery","Adventure",
        "Crime","Animation","Family","History","Sports"
    ];

    return `
        <div class="page">
            <h1 class="page-title">Genres</h1>

            <div class="genre-grid">
                ${genres.map(g=>`
                    <div class="genre"
                        onclick="location.hash='genre/${g}'">
                        ${g}
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function details(id) {
    const item = all.find(x=>x.id==id);

    if(!item)
        return `<div class="empty">Content not found.</div>`;

    return `
        <section class="detail">
            <div class="detail-content">

                <div class="eyebrow">
                    ${item.type} • CINEWORLD
                </div>

                <h1>${item.title}</h1>

                <div class="meta">
                    <span>${item.year}</span>
                    <span>${item.language}</span>
                    <span>${item.genre}</span>
                    <span>★ ${item.rating}</span>
                </div>

                <p class="description">
                    ${item.description}
                </p>

                <div class="buttons">
                    <button class="btn primary"
                        onclick="location.hash='watch/${item.id}'">
                        ▶ Watch Now
                    </button>

                    <button class="btn secondary"
                        onclick="addList(${item.id})">
                        ＋ My List
                    </button>
                </div>
            </div>
        </section>

        ${row(
            "You May Also Like",
            all.filter(x=>x.id!=item.id).slice(0,6)
        )}
    `;
}

function watch(id) {
    const item = all.find(x=>x.id==id);

    return `
        <div class="video">
            <div class="player">
                <div class="play">▶</div>
            </div>

            <h1 style="margin-top:25px;">
                ${item ? item.title : "CineWorld Player"}
            </h1>

            <p style="color:#777;margin-top:8px;">
                Demo cinematic player. Add your own legal video source here.
            </p>
        </div>
    `;
}

function search() {
    return `
        <div class="page">
            <h1 class="page-title">Search</h1>

            <input class="search"
                id="searchInput"
                placeholder="Search titles, languages, genres..."
                oninput="doSearch()">

            <div class="grid" id="results">
                ${all.map(card).join("")}
            </div>
        </div>
    `;
}

function doSearch() {
    const value =
        document.getElementById("searchInput").value.toLowerCase();

    const result = all.filter(x =>
        x.title.toLowerCase().includes(value) ||
        x.language.toLowerCase().includes(value) ||
        x.genre.toLowerCase().includes(value)
    );

    document.getElementById("results").innerHTML =
        result.map(card).join("");
}

function addList(id) {
    let list = JSON.parse(
        localStorage.getItem("cineworldList") || "[]"
    );

    if(!list.includes(id)) {
        list.push(id);
        localStorage.setItem(
            "cineworldList",
            JSON.stringify(list)
        );
        alert("Added to My List");
    } else {
        alert("Already added");
    }
}

function myList() {
    const ids = JSON.parse(
        localStorage.getItem("cineworldList") || "[]"
    );

    return page(
        "My List",
        all.filter(x=>ids.includes(x.id))
    );
}

function profiles() {
    return `
        <div class="page">
            <h1 class="page-title">Choose Your Profile</h1>

            <div class="profile-grid">
                <div class="profile">
                    <div class="profile-icon">C</div>
                    <h3>Cinema Lover</h3>
                </div>

                <div class="profile">
                    <div class="profile-icon">F</div>
                    <h3>Family</h3>
                </div>

                <div class="profile">
                    <div class="profile-icon">K</div>
                    <h3>Kids</h3>
                </div>
            </div>
        </div>
    `;
}

function render() {
    const route = location.hash.replace("#","") || "home";
    const parts = route.split("/");

    let html;

    if(parts[0]==="home")
        html=home();

    else if(parts[0]==="discover")
        html=discover();

    else if(parts[0]==="movies")
        html=page("Movies",content);

    else if(parts[0]==="series")
        html=page("Series",series);

    else if(parts[0]==="international")
        html=international();

    else if(parts[0]==="anime")
        html=anime();

    else if(parts[0]==="languages")
        html=languages();

    else if(parts[0]==="genres")
        html=genres();

    else if(parts[0]==="trending")
        html=page("Trending Now",content.slice(0,10));

    else if(parts[0]==="top10")
        html=page(
            "Top Rated",
            all.slice().sort((a,b)=>b.rating-a.rating).slice(0,10)
        );

    else if(parts[0]==="mylist")
        html=myList();

    else if(parts[0]==="search")
        html=search();

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