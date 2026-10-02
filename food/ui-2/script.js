const restaurants = [
    {
        id: 1,
        name: "Royal Biryani",
        category: "Rich Flavours",
        cuisine: "Hyderabadi Biryani, Indian",
        rating: 4.9,
        time: 25,
        price: 220,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 101, name: "Royal Chicken Biryani", description: "Aromatic basmati rice with rich spices and tender chicken.", price: 249, image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&auto=format&fit=crop&q=80" },
            { id: 102, name: "Paneer Dum Biryani", description: "Fragrant dum biryani with soft paneer and herbs.", price: 199, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=80" },
            { id: 103, name: "Butter Chicken", description: "Creamy tomato gravy served with aromatic spices.", price: 269, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 2,
        name: "Spice Route",
        category: "Rich Flavours",
        cuisine: "North Indian, Kebabs",
        rating: 4.7,
        time: 30,
        price: 250,
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 201, name: "Paneer Tikka", description: "Char-grilled paneer with a delicious spice blend.", price: 210, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&auto=format&fit=crop&q=80" },
            { id: 202, name: "Dal Makhani", description: "Slow-cooked lentils with a creamy, buttery finish.", price: 180, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80" },
            { id: 203, name: "Butter Naan Combo", description: "Soft butter naan served with rich curry.", price: 230, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 3,
        name: "Curry House",
        category: "Rich Flavours",
        cuisine: "Indian, Curry, Tandoori",
        rating: 4.8,
        time: 28,
        price: 230,
        discount: "10% OFF",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 301, name: "Chicken Tikka Masala", description: "Tandoori chicken in a flavourful creamy sauce.", price: 279, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=80" },
            { id: 302, name: "Veg Pulao", description: "Basmati rice cooked with vegetables and spices.", price: 169, image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&auto=format&fit=crop&q=80" },
            { id: 303, name: "Tandoori Roti & Curry", description: "Fresh tandoori roti with chef's special curry.", price: 199, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 4,
        name: "Napoli Pizza",
        category: "Pizza",
        cuisine: "Italian, Wood-fired Pizza",
        rating: 4.8,
        time: 22,
        price: 280,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo- pizza-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 401, name: "Margherita Pizza", description: "Classic pizza with mozzarella, basil and tomato.", price: 249, image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400&auto=format&fit=crop&q=80" },
            { id: 402, name: "Farmhouse Pizza", description: "Loaded with fresh vegetables and cheese.", price: 329, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80" },
            { id: 403, name: "Paneer Tikka Pizza", description: "Spicy paneer, onion, capsicum and cheese.", price: 349, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 5,
        name: "Pizza Roma",
        category: "Pizza",
        cuisine: "Italian, Cheesy Pizza",
        rating: 4.6,
        time: 27,
        price: 260,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 501, name: "Cheese Burst Pizza", description: "Golden crust filled with delicious melted cheese.", price: 299, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&auto=format&fit=crop&q=80" },
            { id: 502, name: "Classic Veg Pizza", description: "Fresh vegetables, herbs and mozzarella.", price: 239, image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400&auto=format&fit=crop&q=80" },
            { id: 503, name: "Spicy Paneer Pizza", description: "Paneer with a spicy sauce and crunchy vegetables.", price: 319, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 6,
        name: "Urban Pizza Co.",
        category: "Pizza",
        cuisine: "Pizza, Italian",
        rating: 4.7,
        time: 24,
        price: 300,
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 601, name: "Double Cheese Pizza", description: "Extra cheese with a soft and crispy crust.", price: 299, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&auto=format&fit=crop&q=80" },
            { id: 602, name: "Garden Fresh Pizza", description: "A colourful mix of fresh vegetables and herbs.", price: 279, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=80" },
            { id: 603, name: "Corn Cheese Pizza", description: "Sweet corn, cheese and signature seasoning.", price: 259, image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 7,
        name: "Burger District",
        category: "Burger",
        cuisine: "Burgers, Fast Food",
        rating: 4.8,
        time: 20,
        price: 180,
        discount: "30% OFF",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 701, name: "Classic Cheese Burger", description: "Juicy patty, melted cheese and fresh lettuce.", price: 179, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80" },
            { id: 702, name: "Crispy Veg Burger", description: "Crispy vegetable patty with signature sauce.", price: 139, image: "https://images.unsplash.com/photo-155 burger-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80" },
            { id: 703, name: "Double Patty Burger", description: "Two delicious patties with cheese and sauce.", price: 229, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 8,
        name: "Burger Lab",
        category: "Burger",
        cuisine: "Gourmet Burgers",
        rating: 4.6,
        time: 26,
        price: 210,
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 801, name: "Smoky BBQ Burger", description: "Smoky barbecue sauce with a grilled patty.", price: 219, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&auto=format&fit=crop&q=80" },
            { id: 802, name: "Mushroom Melt Burger", description: "Mushrooms, cheese and creamy sauce.", price: 239, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80" },
            { id: 803, name: "Spicy Crunch Burger", description: "Crispy patty with a spicy house dressing.", price: 189, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 9,
        name: "Smash House",
        category: "Burger",
        cuisine: "Smash Burgers, Fries",
        rating: 4.7,
        time: 23,
        price: 200,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 901, name: "Classic Smash Burger", description: "Smashed patty, cheese, pickles and sauce.", price: 199, image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&auto=format&fit=crop&q=80" },
            { id: 902, name: "Loaded Fries", description: "Crispy fries topped with cheese and seasoning.", price: 149, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=80" },
            { id: 903, name: "Double Smash Burger", description: "Double smashed patties with melted cheese.", price: 259, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 10,
        name: "Wok Street",
        category: "Chinese",
        cuisine: "Chinese, Noodles",
        rating: 4.7,
        time: 25,
        price: 190,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 1001, name: "Veg Hakka Noodles", description: "Wok-tossed noodles with fresh vegetables.", price: 179, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=80" },
            { id: 1002, name: "Veg Manchurian", description: "Crispy vegetable balls in a savoury sauce.", price: 189, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&auto=format&fit=crop&q=80" },
            { id: 1003, name: "Schezwan Fried Rice", description: "Spicy fried rice with vegetables and herbs.", price: 199, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 11,
        name: "Dragon Bowl",
        category: "Chinese",
        cuisine: "Asian, Chinese",
        rating: 4.8,
        time: 29,
        price: 220,
        discount: "10% OFF",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 1101, name: "Dragon Noodle Bowl", description: "Noodles with vegetables and house-made sauce.", price: 229, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop&q=80" },
            { id: 1102, name: "Chilli Paneer", description: "Paneer tossed with peppers and spicy sauce.", price: 219, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&auto=format&fit=crop&q=80" },
            { id: 1103, name: "Classic Fried Rice", description: "Fragrant rice with vegetables and mild seasoning.", price: 189, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 12,
        name: "Asian Wok",
        category: "Chinese",
        cuisine: "Asian, Wok Specials",
        rating: 4.6,
        time: 24,
        price: 200,
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 1201, name: "Chilli Garlic Noodles", description: "Wok-fried noodles with garlic and chilli.", price: 199, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=80" },
            { id: 1202, name: "Crispy Spring Rolls", description: "Golden rolls filled with seasoned vegetables.", price: 159, image: "https://images.unsplash.com/photo-1548507200-7a2c2c0e0d5a?w=400&auto=format&fit=crop&q=80" },
            { id: 1203, name: "Schezwan Rice", description: "Spicy rice tossed with vegetables and sauces.", price: 189, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 13,
        name: "Sweet Heaven",
        category: "Dessert",
        cuisine: "Desserts, Ice Cream",
        rating: 4.9,
        time: 18,
        price: 150,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 1301, name: "Chocolate Sundae", description: "Creamy ice cream with chocolate sauce.", price: 149, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&auto=format&fit=crop&q=80" },
            { id: 1302, name: "Strawberry Cheesecake", description: "Smooth cheesecake with strawberry topping.", price: 199, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&auto=format&fit=crop&q=80" },
            { id: 1303, name: "Brownie Delight", description: "Warm chocolate brownie with a sweet finish.", price: 169, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 14,
        name: "Cream & Crumbs",
        category: "Dessert",
        cuisine: "Bakery, Cakes",
        rating: 4.7,
        time: 22,
        price: 180,
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 1401, name: "Chocolate Cake", description: "Rich chocolate cake with smooth frosting.", price: 199, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=80" },
            { id: 1402, name: "Blueberry Muffin", description: "Soft baked muffin with blueberry filling.", price: 99, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&auto=format&fit=crop&q=80" },
            { id: 1403, name: "Red Velvet Slice", description: "Classic red velvet sponge with cream.", price: 179, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&auto=format&fit=crop&q=80" }
        ]
    },
    {
        id: 15,
        name: "Dessert Lab",
        category: "Dessert",
        cuisine: "Waffles, Sweet Treats",
        rating: 4.6,
        time: 20,
        price: 160,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=85",
        menu: [
            { id: 1501, name: "Belgian Waffles", description: "Golden waffles with chocolate drizzle.", price: 179, image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&auto=format&fit=crop&q=80" },
            { id: 1502, name: "Strawberry Cream Cup", description: "Fresh strawberries layered with cream.", price: 159, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format&fit=crop&q=80" },
            { id: 1503, name: "Chocolate Brownie", description: "Soft chocolate brownie with rich cocoa.", price: 139, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=80" }
        ]
    }
];

const fallbackImage = "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop&q=80";

let selectedCategory = "All";
let cart = [];
let activeRestaurant = null;
let toastTimer;

const restaurantGrid = document.getElementById("restaurantGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const activeFilter = document.getElementById("activeFilter");
const menuOverlay = document.getElementById("menuOverlay");
const menuRestaurantImage = document.getElementById("menuRestaurantImage");
const menuRestaurantName = document.getElementById("menuRestaurantName");
const menuRestaurantInfo = document.getElementById("menuRestaurantInfo");
const menuList = document.getElementById("menuList");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartHeadingCount = document.getElementById("cartHeadingCount");
const toast = document.getElementById("toast");

function formatPrice(value) {
    return "₹" + Number(value).toLocaleString("en-IN");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function setSafeImage(img) {
    img.addEventListener("error", function () {
        if (this.dataset.fallbackUsed !== "yes") {
            this.dataset.fallbackUsed = "yes";
            this.src = fallbackImage;
        }
    });
}

document.querySelectorAll("img").forEach(setSafeImage);

function getFilteredRestaurants() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    let filtered = restaurants.filter(restaurant => {
        const categoryMatch = selectedCategory === "All" || restaurant.category === selectedCategory;

        const menuText = restaurant.menu
            .map(item => item.name + " " + item.description)
            .join(" ");

        const searchableText = [
            restaurant.name,
            restaurant.category,
            restaurant.cuisine,
            menuText
        ].join(" ").toLowerCase();

        const searchMatch = !searchTerm || searchableText.includes(searchTerm);

        return categoryMatch && searchMatch;
    });

    const sortType = sortSelect.value;

    if (sortType === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "delivery") {
        filtered.sort((a, b) => a.time - b.time);
    } else if (sortType === "price") {
        filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
}

function renderRestaurants() {
    const filtered = getFilteredRestaurants();

    if (selectedCategory === "All") {
        activeFilter.textContent = searchInput.value.trim()
            ? `Search results for "${searchInput.value.trim()}"`
            : `Showing all ${filtered.length} restaurants`;
    } else {
        activeFilter.textContent = searchInput.value.trim()
            ? `${selectedCategory} · Search results`
            : `${selectedCategory} · ${filtered.length} restaurants`;
    }

    restaurantGrid.innerHTML = "";

    if (filtered.length === 0) {
        restaurantGrid.innerHTML = `
            <div class="no-results">
                <h3>No restaurants found</h3>
                <p>Try another dish or choose a different category.</p>
                <button type="button" id="resetResults">Show all restaurants</button>
            </div>
        `;

        document.getElementById("resetResults").addEventListener("click", resetFilters);
        return;
    }

    filtered.forEach((restaurant, index) => {
        const card = document.createElement("article");
        card.className = "restaurant-card";
        card.style.animationDelay = `${index * 45}ms`;

        card.innerHTML = `
            <div class="restaurant-image-wrap">
                <img class="restaurant-image" src="${restaurant.image}" alt="${restaurant.name}" loading="lazy">
                <span class="discount-badge">${restaurant.discount}</span>
                <button class="favorite-btn" type="button" aria-label="Add ${restaurant.name} to favourites">♡</button>
            </div>
            <div class="restaurant-info">
                <div class="restaurant-title-row">
                    <h3>${restaurant.name}</h3>
                    <span class="rating">★ ${restaurant.rating.toFixed(1)}</span>
                </div>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-meta">
                    <span>◷ ${restaurant.time} mins</span>
                    <span>₹${restaurant.price} for one</span>
                </div>
                <div class="restaurant-bottom">
                    <div class="restaurant-price">Starting from<strong>${formatPrice(restaurant.menu[0].price)}</strong></div>
                    <button class="view-menu-btn" type="button">View Menu ↗</button>
                </div>
            </div>
        `;

        const image = card.querySelector("img");
        setSafeImage(image);

        card.querySelector(".view-menu-btn").addEventListener("click", () => openMenu(restaurant.id));

        card.querySelector(".favorite-btn").addEventListener("click", event => {
            const button = event.currentTarget;
            button.classList.toggle("favorited");
            button.textContent = button.classList.contains("favorited") ? "♥" : "♡";
            showToast(button.classList.contains("favorited")
                ? `${restaurant.name} added to favourites`
                : `${restaurant.name} removed from favourites`);
        });

        restaurantGrid.appendChild(card);
    });
}

function selectCategory(category) {
    selectedCategory = category;

    document.querySelectorAll(".category-card").forEach(button => {
        button.classList.toggle("active", button.dataset.category === category);
    });

    renderRestaurants();
    document.getElementById("restaurants").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFilters() {
    selectedCategory = "All";
    searchInput.value = "";
    sortSelect.value = "recommended";

    document.querySelectorAll(".category-card").forEach(button => {
        button.classList.toggle("active", button.dataset.category === "All");
    });

    renderRestaurants();
}

function openMenu(restaurantId) {
    activeRestaurant = restaurants.find(restaurant => restaurant.id === restaurantId);

    if (!activeRestaurant) {
        showToast("Restaurant could not be opened.");
        return;
    }

    menuRestaurantImage.src = activeRestaurant.image;
    menuRestaurantImage.alt = activeRestaurant.name;
    menuRestaurantName.textContent = activeRestaurant.name;
    menuRestaurantInfo.textContent =
        `${activeRestaurant.cuisine} · ★ ${activeRestaurant.rating.toFixed(1)} · ${activeRestaurant.time} mins`;

    menuList.innerHTML = "";

    activeRestaurant.menu.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <strong>${formatPrice(item.price)}</strong>
            </div>
            <button class="add-btn" type="button">ADD +</button>
        `;

        setSafeImage(menuItem.querySelector("img"));

        menuItem.querySelector(".add-btn").addEventListener("click", () => {
            addToCart(activeRestaurant, item);
        });

        menuList.appendChild(menuItem);
    });

    menuOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    menuOverlay.classList.remove("open");

    if (!cartOverlay.classList.contains("open")) {
        document.body.style.overflow = "";
    }
}

function addToCart(restaurant, item) {
    if (cart.length > 0 && cart[0].restaurantId !== restaurant.id) {
        const shouldReplace = confirm(
            `Your cart has items from ${cart[0].restaurantName}. Clear the cart and add items from ${restaurant.name}?`
        );

        if (!shouldReplace) {
            return;
        }

        cart = [];
    }

    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    updateCart();
    showToast(`${item.name} added to cart`);
}

function changeQuantity(itemId, amount) {
    const item = cart.find(cartItem => cartItem.id === itemId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== itemId);
    }

    updateCart();
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotalValue = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const deliveryValue = cart.length > 0 ? 30 : 0;
    const taxValue = Math.round(subtotalValue * 0.05);
    const totalValue = subtotalValue + deliveryValue + taxValue;

    cartCount.textContent = totalItems;
    cartHeadingCount.textContent = `(${totalItems})`;

    document.getElementById("subtotal").textContent = formatPrice(subtotalValue);
    document.getElementById("delivery").textContent = formatPrice(deliveryValue);
    document.getElementById("tax").textContent = formatPrice(taxValue);
    document.getElementById("total").textContent = formatPrice(totalValue);

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div>🛍️</div>
                <h3>Your cart is waiting</h3>
                <p>Add something delicious to get started.</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = "";

        cart.forEach(item => {
            const row = document.createElement("div");
            row.className = "cart-item";

            row.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${formatPrice(item.price * item.quantity)}</p>
                </div>
                <div class="quantity-control">
                    <button type="button" aria-label="Decrease quantity">−</button>
                    <span>${item.quantity}</span>
                    <button type="button" aria-label="Increase quantity">+</button>
                </div>
            `;

            setSafeImage(row.querySelector("img"));

            const quantityButtons = row.querySelectorAll(".quantity-control button");
            quantityButtons[0].addEventListener("click", () => changeQuantity(item.id, -1));
            quantityButtons[1].addEventListener("click", () => changeQuantity(item.id, 1));

            cartItems.appendChild(row);
        });
    }

    document.getElementById("checkout").disabled = cart.length === 0;
}

function openCart() {
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartOverlay.classList.remove("open");

    if (!menuOverlay.classList.contains("open")) {
        document.body.style.overflow = "";
    }
}

document.querySelectorAll(".category-card").forEach(button => {
    button.addEventListener("click", () => selectCategory(button.dataset.category));
});

document.querySelectorAll(".hero-quick button").forEach(button => {
    button.addEventListener("click", () => {
        searchInput.value = button.dataset.search;
        selectedCategory = "All";

        document.querySelectorAll(".category-card").forEach(card => {
            card.classList.toggle("active", card.dataset.category === "All");
        });

        renderRestaurants();
        document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("searchBtn").addEventListener("click", () => {
    selectedCategory = "All";

    document.querySelectorAll(".category-card").forEach(card => {
        card.classList.toggle("active", card.dataset.category === "All");
    });

    renderRestaurants();
    document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
});

searchInput.addEventListener("input", renderRestaurants);
sortSelect.addEventListener("change", renderRestaurants);
document.getElementById("allBtn").addEventListener("click", resetFilters);
document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("closeMenu").addEventListener("click", closeMenu);
document.getElementById("closeCart").addEventListener("click", closeCart);

menuOverlay.addEventListener("click", event => {
    if (event.target === menuOverlay) closeMenu();
});

cartOverlay.addEventListener("click", event => {
    if (event.target === cartOverlay) closeCart();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeMenu();
        closeCart();
    }
});

document.getElementById("couponBtn").addEventListener("click", async () => {
    const code = "CRAVE20";

    try {
        await navigator.clipboard.writeText(code);
        showToast("Coupon code CRAVE20 copied!");
    } catch (error) {
        showToast("Use coupon code CRAVE20 at checkout.");
    }
});

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Your cart is empty.");
        return;
    }

    const orderTotal = document.getElementById("total").textContent;
    cart = [];
    updateCart();
    closeCart();
    showToast(`Demo order placed successfully! Total: ${orderTotal}`);
});

renderRestaurants();
updateCart();