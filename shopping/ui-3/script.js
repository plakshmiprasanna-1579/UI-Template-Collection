const products = [
    {
        id: 1,
        category: "Women",
        brand: "WESTBOURNE",
        name: "Floral Midi Dress",
        price: 1499,
        oldPrice: 2499,
        rating: "4.5 ★",
        badge: "BESTSELLER",
        image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 2,
        category: "Women",
        brand: "URBAN EDIT",
        name: "Oversized Cotton Shirt",
        price: 999,
        oldPrice: 1699,
        rating: "4.4 ★",
        badge: "TRENDING",
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 3,
        category: "Women",
        brand: "LONDON LANE",
        name: "Straight Fit Jeans",
        price: 1299,
        oldPrice: 2199,
        rating: "4.3 ★",
        badge: "NEW",
        image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 4,
        category: "Women",
        brand: "WESTBOURNE",
        name: "Embroidered Kurta Set",
        price: 1799,
        oldPrice: 2999,
        rating: "4.6 ★",
        badge: "POPULAR",
        image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: 5,
        category: "Men",
        brand: "WESTBOURNE",
        name: "Premium Polo T-Shirt",
        price: 899,
        oldPrice: 1499,
        rating: "4.5 ★",
        badge: "BESTSELLER",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 6,
        category: "Men",
        brand: "BRITISH EDIT",
        name: "Slim Fit Casual Shirt",
        price: 1199,
        oldPrice: 1999,
        rating: "4.4 ★",
        badge: "NEW",
        image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 7,
        category: "Men",
        brand: "URBAN HOUSE",
        name: "Tapered Denim Jeans",
        price: 1499,
        oldPrice: 2399,
        rating: "4.3 ★",
        badge: "TRENDING",
        image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 8,
        category: "Men",
        brand: "NORTH WEST",
        name: "Lightweight Bomber Jacket",
        price: 2199,
        oldPrice: 3499,
        rating: "4.7 ★",
        badge: "PREMIUM",
        image: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: 9,
        category: "Kids",
        brand: "LITTLE WEST",
        name: "Classic Kids Outfit",
        price: 799,
        oldPrice: 1299,
        rating: "4.5 ★",
        badge: "POPULAR",
        image: "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 10,
        category: "Kids",
        brand: "MINI EDIT",
        name: "Casual Denim Set",
        price: 899,
        oldPrice: 1499,
        rating: "4.4 ★",
        badge: "NEW",
        image: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: 11,
        category: "Footwear",
        brand: "WEST STREET",
        name: "Everyday Sneakers",
        price: 1599,
        oldPrice: 2499,
        rating: "4.6 ★",
        badge: "BESTSELLER",
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 12,
        category: "Footwear",
        brand: "LONDON STEP",
        name: "Block Heel Sandals",
        price: 1299,
        oldPrice: 1999,
        rating: "4.4 ★",
        badge: "TRENDING",
        image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: 13,
        category: "Beauty",
        brand: "WEST BEAUTY",
        name: "Glow Face Serum",
        price: 699,
        oldPrice: 999,
        rating: "4.7 ★",
        badge: "BESTSELLER",
        image: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 14,
        category: "Beauty",
        brand: "THE BEAUTY EDIT",
        name: "Matte Lipstick",
        price: 499,
        oldPrice: 799,
        rating: "4.5 ★",
        badge: "NEW",
        image: "https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=800"
    },

    {
        id: 15,
        category: "Accessories",
        brand: "WESTBOURNE",
        name: "Structured Handbag",
        price: 1799,
        oldPrice: 2999,
        rating: "4.6 ★",
        badge: "PREMIUM",
        image: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        id: 16,
        category: "Accessories",
        brand: "LONDON LANE",
        name: "Classic Sunglasses",
        price: 799,
        oldPrice: 1299,
        rating: "4.4 ★",
        badge: "TRENDING",
        image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

let cart = JSON.parse(localStorage.getItem("westbourneCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("westbourneWishlist")) || [];
let currentCategory = "All";

const productGrid = document.getElementById("productGrid");
const cartElement = document.getElementById("cart");
const cartOverlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const bagCount = document.getElementById("bagCount");
const searchInput = document.getElementById("searchInput");

function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}

function renderProducts(list = products) {
    productGrid.innerHTML = "";

    if (list.length === 0) {
        productGrid.innerHTML = `
            <div class="no-results">
                <h3>No products found</h3>
                <p>Try another search or category.</p>
            </div>
        `;
        return;
    }

    list.forEach(product => {
        const discount = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
        );

        const isWishlisted = wishlist.includes(product.id);

        productGrid.innerHTML += `
            <div class="product-card">

                <div class="product-image">

                    <img src="${product.image}"
                         alt="${product.name}"
                         loading="lazy"
                         onerror="this.src='https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=800'">

                    <span class="product-badge">
                        ${product.badge}
                    </span>

                    <button
                        class="wishlist-btn ${isWishlisted ? "active" : ""}"
                        onclick="toggleWishlist(${product.id})">
                        ${isWishlisted ? "♥" : "♡"}
                    </button>

                </div>

                <div class="product-info">

                    <div class="product-brand">
                        ${product.brand}
                    </div>

                    <div class="product-name">
                        ${product.name}
                    </div>

                    <span class="rating">
                        ${product.rating}
                    </span>

                    <div class="price-row">
                        <span class="price">
                            ${formatPrice(product.price)}
                        </span>

                        <span class="old-price">
                            ${formatPrice(product.oldPrice)}
                        </span>

                        <span class="discount">
                            ${discount}% OFF
                        </span>
                    </div>

                    <button
                        class="add-bag"
                        onclick="addToCart(${product.id})">
                        ADD TO BAG
                    </button>

                </div>
            </div>
        `;
    });
}

function filterCategory(category) {

    currentCategory = category;

    document.querySelectorAll(".filter").forEach(button => {
        button.classList.remove("active");

        if (button.textContent.trim() === category) {
            button.classList.add("active");
        }
    });

    let filtered = products;

    if (category !== "All") {
        filtered = filtered.filter(
            product => product.category === category
        );
    }

    const searchValue = searchInput.value.toLowerCase().trim();

    if (searchValue) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchValue) ||
            product.brand.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue)
        );
    }

    renderProducts(filtered);

    scrollToProducts();
}

function searchProducts() {

    const searchValue = searchInput.value.toLowerCase().trim();

    let filtered = products;

    if (currentCategory !== "All") {
        filtered = filtered.filter(
            product => product.category === currentCategory
        );
    }

    if (searchValue) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchValue) ||
            product.brand.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue)
        );
    }

    renderProducts(filtered);
}

searchInput.addEventListener("input", searchProducts);

function sortProducts() {

    const sortValue = document.getElementById("sortSelect").value;

    let filtered = products;

    if (currentCategory !== "All") {
        filtered = filtered.filter(
            product => product.category === currentCategory
        );
    }

    const searchValue = searchInput.value.toLowerCase().trim();

    if (searchValue) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchValue) ||
            product.brand.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue)
        );
    }

    if (sortValue === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

function addToCart(id) {

    const product = products.find(product => product.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();

    showToast(`${product.name} added to your bag`);

    updateCart();
}

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCart();
}

function changeQuantity(id, amount) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(id);
        return;
    }

    saveCart();
    updateCart();
}

function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your bag is empty</h3>
                <p>Add something beautiful to get started.</p>
            </div>
        `;

        cartTotal.textContent = "₹0";
        bagCount.textContent = "0";

        return;
    }

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        count += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-item-info">

                    <h4>${item.brand}</h4>

                    <p>${item.name}</p>

                    <p>
                        ${formatPrice(item.price)}
                    </p>

                    <div class="cart-controls">

                        <button onclick="changeQuantity(${item.id}, -1)">
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button onclick="changeQuantity(${item.id}, 1)">
                            +
                        </button>

                        <button
                            class="remove-btn"
                            onclick="removeFromCart(${item.id})">
                            Remove
                        </button>

                    </div>

                </div>

            </div>
        `;
    });

    cartTotal.textContent = formatPrice(total);
    bagCount.textContent = count;
}

function saveCart() {
    localStorage.setItem(
        "westbourneCart",
        JSON.stringify(cart)
    );
}

function openCart() {
    cartElement.classList.add("open");
    cartOverlay.classList.add("show");
    updateCart();
}

function closeCart() {
    cartElement.classList.remove("open");
    cartOverlay.classList.remove("show");
}

function toggleWishlist(id) {

    const product = products.find(product => product.id === id);

    if (wishlist.includes(id)) {

        wishlist = wishlist.filter(item => item !== id);

        showToast(`${product.name} removed from wishlist`);

    } else {

        wishlist.push(id);

        showToast(`${product.name} added to wishlist`);
    }

    localStorage.setItem(
        "westbourneWishlist",
        JSON.stringify(wishlist)
    );

    searchProducts();
}

function checkout() {

    if (cart.length === 0) {
        showToast("Your bag is empty");
        return;
    }

    closeCart();

    document.getElementById("checkoutModal").classList.add("show");
}

function closeCheckout() {
    document.getElementById("checkoutModal").classList.remove("show");
}

function goToPayment() {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    if (!name || !phone || !address || !city || !pincode) {
        showToast("Please complete all delivery details");
        return;
    }

    document.getElementById("checkoutContent").innerHTML = `

        <p>PAYMENT</p>

        <h2>Choose Payment Method</h2>

        <label class="payment-option">
            <input type="radio" name="payment" value="UPI" checked>
            UPI
        </label>

        <label class="payment-option">
            <input type="radio" name="payment" value="Card">
            Credit / Debit Card
        </label>

        <label class="payment-option">
            <input type="radio" name="payment" value="COD">
            Cash on Delivery
        </label>

        <div style="margin-top:25px; padding:15px; background:#f7f7f7;">
            <strong>Order Total</strong>
            <span style="float:right;">
                ${formatPrice(
                    cart.reduce(
                        (total, item) =>
                            total + item.price * item.quantity,
                        0
                    )
                )}
            </span>
        </div>

        <button
            class="checkout-next"
            onclick="placeOrder()">
            PLACE ORDER
        </button>
    `;
}

function placeOrder() {

    const payment = document.querySelector(
        'input[name="payment"]:checked'
    );

    if (!payment) {
        showToast("Please select a payment method");
        return;
    }

    const orderNumber =
        "WB" +
        Math.floor(100000 + Math.random() * 900000);

    document.getElementById("checkoutContent").innerHTML = `

        <div style="text-align:center; padding:25px 0;">

            <div style="
                width:70px;
                height:70px;
                border-radius:50%;
                background:#111;
                color:white;
                display:flex;
                align-items:center;
                justify-content:center;
                margin:0 auto 20px;
                font-size:30px;
            ">
                ✓
            </div>

            <p>ORDER CONFIRMED</p>

            <h2>Thank You!</h2>

            <p style="color:#666; line-height:1.7;">
                Your Westbourne order has been successfully placed.
            </p>

            <div style="
                margin:25px 0;
                padding:15px;
                background:#f7f7f7;
            ">
                <strong>Order ID</strong>
                <br>
                #${orderNumber}
                <br><br>
                <strong>Payment</strong>
                <br>
                ${payment.value}
            </div>

            <button
                class="checkout-next"
                onclick="finishOrder()">
                CONTINUE SHOPPING
            </button>

        </div>
    `;
}

function finishOrder() {

    cart = [];

    saveCart();

    updateCart();

    closeCheckout();

    showToast("Thank you for shopping with Westbourne");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function subscribe() {

    const email = document
        .getElementById("emailInput")
        .value.trim();

    if (!email) {
        showToast("Please enter your email");
        return;
    }

    if (!email.includes("@")) {
        showToast("Please enter a valid email");
        return;
    }

    document.getElementById("emailInput").value = "";

    showToast("Welcome to the Westbourne Edit!");
}

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });

});

renderProducts();
updateCart();