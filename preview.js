// Template information

const templates = {

    food1: {
        category: "FOOD / UI 01",
        title: "Delivery Experience",
        description:
            "A modern and responsive interface designed for a smooth food delivery experience.",
        categoryName: "Food",
        templateName: "UI 01",
        previewName: "Delivery Experience",
        image: "images/food-1.png",
        imageAlt: "Food UI 1 Preview",
        link: "food/ui-1/index.html"
    },

    food2: {
        category: "FOOD / UI 02",
        title: "Food Interface",
        description:
            "A clean food-focused interface designed for browsing restaurants and food options.",
        categoryName: "Food",
        templateName: "UI 02",
        previewName: "Food Interface",
        image: "images/food-2.png",
        imageAlt: "Food UI 2 Preview",
        link: "food/ui-2/index.html"
    },

    food3: {
        category: "FOOD / UI 03",
        title: "Restaurant Experience",
        description:
            "A modern restaurant interface designed to create an engaging food browsing experience.",
        categoryName: "Food",
        templateName: "UI 03",
        previewName: "Restaurant Experience",
        image: "images/food-3.png",
        imageAlt: "Food UI 3 Preview",
        link: "food/ui-3/index.html"
    },


    movie1: {
        category: "MOVIES / UI 01",
        title: "Cinematic Experience",
        description:
            "A cinematic interface designed for discovering movies and entertainment content.",
        categoryName: "Movies",
        templateName: "UI 01",
        previewName: "Cinematic Experience",
        image: "images/movie-1.png",
        imageAlt: "Movie UI 1 Preview",
        link: "movie/ui-1/index.html"
    },

    movie2: {
        category: "MOVIES / UI 02",
        title: "Movie Platform",
        description:
            "A modern movie platform interface for exploring entertainment and featured content.",
        categoryName: "Movies",
        templateName: "UI 02",
        previewName: "Movie Platform",
        image: "images/movie-2.png",
        imageAlt: "Movie UI 2 Preview",
        link: "movie/ui-2/index.html"
    },

    movie3: {
        category: "MOVIES / UI 03",
        title: "Entertainment Experience",
        description:
            "An engaging entertainment interface created for modern movie browsing experiences.",
        categoryName: "Movies",
        templateName: "UI 03",
        previewName: "Entertainment Experience",
        image: "images/movie-3.png",
        imageAlt: "Movie UI 3 Preview",
        link: "movie/ui-3/index.html"
    },


    shopping1: {
        category: "SHOPPING / UI 01",
        title: "Fashion Store",
        description:
            "A modern shopping interface designed for browsing products and fashion collections.",
        categoryName: "Shopping",
        templateName: "UI 01",
        previewName: "Fashion Store",
        image: "images/shopping-1.png",
        imageAlt: "Shopping UI 1 Preview",
        link: "shopping/ui-1/index.html"
    },

    shopping2: {
        category: "SHOPPING / UI 02",
        title: "Shopping Experience",
        description:
            "A clean e-commerce interface designed for modern online shopping experiences.",
        categoryName: "Shopping",
        templateName: "UI 02",
        previewName: "Shopping Experience",
        image: "images/shopping-2.png",
        imageAlt: "Shopping UI 2 Preview",
        link: "shopping/ui-2/index.html"
    },

    shopping3: {
        category: "SHOPPING / UI 03",
        title: "Store Interface",
        description:
            "A modern store interface designed for product discovery and online shopping.",
        categoryName: "Shopping",
        templateName: "UI 03",
        previewName: "Store Interface",
        image: "images/shopping-3.png",
        imageAlt: "Shopping UI 3 Preview",
        link: "shopping/ui-3/index.html"
    },


    music1: {
        category: "MUSIC / UI 01",
        title: "Music Experience",
        description:
            "A modern music interface designed for discovering songs and audio content.",
        categoryName: "Music",
        templateName: "UI 01",
        previewName: "Music Experience",
        image: "images/music-1.png",
        imageAlt: "Music UI 1 Preview",
        link: "music/ui-1/index.html"
    },

    music2: {
        category: "MUSIC / UI 02",
        title: "Music Platform",
        description:
            "A clean music platform interface designed for browsing and listening experiences.",
        categoryName: "Music",
        templateName: "UI 02",
        previewName: "Music Platform",
        image: "images/music-2.png",
        imageAlt: "Music UI 2 Preview",
        link: "music/ui-2/index.html"
    },

    music3: {
        category: "MUSIC / UI 03",
        title: "Audio Experience",
        description:
            "An engaging audio interface designed for modern music and entertainment experiences.",
        categoryName: "Music",
        templateName: "UI 03",
        previewName: "Audio Experience",
        image: "images/music-3.png",
        imageAlt: "Music UI 3 Preview",
        link: "music/ui-3/index.html"
    }

};


// Get selected template

const params = new URLSearchParams(window.location.search);

const templateId = params.get("template");

const template = templates[templateId];


// Display template information

if (template) {

    document.getElementById("template-category").textContent =
        template.category;

    document.getElementById("template-title").textContent =
        template.title;

    document.getElementById("template-description").textContent =
        template.description;

    document.getElementById("meta-category").textContent =
        template.categoryName;

    document.getElementById("meta-template").textContent =
        template.templateName;

    document.getElementById("live-template-button").href =
        template.link;


    // Display template screenshot

    const previewImage =
        document.getElementById("template-preview-image");

    previewImage.src = template.image;

    previewImage.alt = template.imageAlt;

}