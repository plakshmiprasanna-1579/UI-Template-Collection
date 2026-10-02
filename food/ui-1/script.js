const navbar = document.getElementById("navbar");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

const subtotalElement = document.getElementById("subtotal");
const deliveryElement = document.getElementById("delivery");
const taxesElement = document.getElementById("taxes");
const totalElement = document.getElementById("total");

const searchInput = document.getElementById("searchInput");
const heroSearch = document.getElementById("heroSearch");
const restaurantGrid = document.getElementById("restaurantGrid");
const noResults = document.getElementById("noResults");

const toast = document.getElementById("toast");

let cart = [];

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

cartBtn.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", closeCartDrawer);

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: Number(price),
            quantity: 1
        });
    }

    updateCart();
    openCart();
    showToast(`${name} added to your bag`);
}

document.querySelectorAll(".dish-add").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.item;
        const price = button.dataset.price;

        addToCart(name, price);
    });
});

function updateCart() {

    const totalItems = cart.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0);

    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div>🛍</div>
                <h3>Your bag is empty</h3>
                <p>Add something delicious to get started.</p>
            </div>
        `;

        subtotalElement.textContent = "₹0";
        deliveryElement.textContent = "₹0";
        taxesElement.textContent = "₹0";
        totalElement.textContent = "₹0";

        return;
    }

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <img
                class="cart-item-image"
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=200&q=80"
                alt="${item.name}"
            >

            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>

                <div class="quantity">
                    <button onclick="changeQuantity(${index}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            </div>

            <strong class="cart-item-price">
                ₹${itemTotal}
            </strong>
        `;

        cartItems.appendChild(cartItem);
    });

    calculateTotal();
}

function changeQuantity(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}

function calculateTotal() {

    const subtotal = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    const delivery = subtotal > 0 ? 39 : 0;
    const taxes = Math.round(subtotal * 0.05);
    const total = subtotal + delivery + taxes;

    subtotalElement.textContent = `₹${subtotal}`;
    deliveryElement.textContent = `₹${delivery}`;
    taxesElement.textContent = `₹${taxes}`;
    totalElement.textContent = `₹${total}`;
}

document.querySelectorAll(".favorite").forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {
            button.textContent = "♥";
            showToast("Added to favourites");
        } else {
            button.textContent = "♡";
            showToast("Removed from favourites");
        }
    });
});

document.querySelectorAll(".category-card").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".category-card").forEach(card => {
            card.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        filterRestaurantsByCategory(category);

        document.getElementById("restaurants").scrollIntoView({
            behavior: "smooth"
        });
    });
});

function filterRestaurantsByCategory(category) {

    const cards = document.querySelectorAll(".restaurant-card");
    let visibleCount = 0;

    cards.forEach(card => {

        const cardCategory = card.dataset.category;

        if (category === "all" || cardCategory === category) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
}

document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        const cards = [...document.querySelectorAll(".restaurant-card")];

        if (filter === "all") {

            cards.forEach(card => {
                card.style.display = "";
            });

        } else if (filter === "rating") {

            cards.forEach(card => {
                const rating = Number(card.dataset.rating);
                card.style.display = rating >= 4.7 ? "" : "none";
            });

        } else if (filter === "fast") {

            cards.forEach(card => {
                const speed = Number(card.dataset.speed);
                card.style.display = speed <= 25 ? "" : "none";
            });
        }

        checkResults();
    });
});

function checkResults() {

    const cards = [...document.querySelectorAll(".restaurant-card")];

    const visible = cards.some(card => {
        return card.style.display !== "none";
    });

    noResults.style.display = visible ? "none" : "block";
}

function searchRestaurants() {

    const searchValue = searchInput.value.trim().toLowerCase();

    const cards = document.querySelectorAll(".restaurant-card");

    let found = 0;

    cards.forEach(card => {

        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category.toLowerCase();
        const text = card.textContent.toLowerCase();

        if (
            name.includes(searchValue) ||
            category.includes(searchValue) ||
            text.includes(searchValue)
        ) {
            card.style.display = "";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display = found === 0 ? "block" : "none";

    document.getElementById("restaurants").scrollIntoView({
        behavior: "smooth"
    });
}

heroSearch.addEventListener("click", searchRestaurants);

searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        searchRestaurants();
    }
});

document.getElementById("searchBtn").addEventListener("click", () => {

    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        searchInput.focus();
    }, 600);
});

document.getElementById("showAllBtn").addEventListener("click", () => {

    searchInput.value = "";

    document.querySelectorAll(".category-card").forEach(card => {
        card.classList.remove("active");
    });

    document.querySelector(".category-card[data-category='all']")
        .classList.add("active");

    filterRestaurantsByCategory("all");

    document.getElementById("restaurants").scrollIntoView({
        behavior: "smooth"
    });
});

function copyCoupon() {

    const code = "BITES20";

    if (navigator.clipboard) {

        navigator.clipboard.writeText(code).then(() => {
            showCouponMessage();
        });

    } else {

        const temporaryInput = document.createElement("input");
        temporaryInput.value = code;
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand("copy");
        temporaryInput.remove();

        showCouponMessage();
    }
}

function showCouponMessage() {

    const message = document.getElementById("couponMessage");

    message.textContent = "Coupon copied successfully!";

    setTimeout(() => {
        message.textContent = "";
    }, 2500);
}

document.getElementById("copyCoupon").addEventListener("click", copyCoupon);
document.getElementById("copyCouponCard").addEventListener("click", copyCoupon);

document.getElementById("checkoutBtn").addEventListener("click", () => {

    if (cart.length === 0) {
        showToast("Your bag is empty");
        return;
    }

    showToast("Order checkout started!");

    setTimeout(() => {
        cart = [];
        updateCart();
        closeCartDrawer();
    }, 1200);
});

updateCart();