let cart = JSON.parse(localStorage.getItem("vyoraCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("vyoraWishlist")) || [];

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    updateProductCount();
    createCartPanel();
});

function saveCart() {
    localStorage.setItem("vyoraCart", JSON.stringify(cart));
}

function saveWishlist() {
    localStorage.setItem("vyoraWishlist", JSON.stringify(wishlist));
}

function addToCart(name, price) {
    price = Number(price);

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    renderCart();

    openCart();

    showToast(name + " added to bag");
}

function updateCartCount() {
    let count = document.getElementById("cartCount");

    if (count) {
        let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        count.innerText = totalItems;
    }
}

function increaseQuantity(index) {
    cart[index].quantity++;

    saveCart();
    updateCartCount();
    renderCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    saveCart();
    updateCartCount();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);

    saveCart();
    updateCartCount();
    renderCart();
}

function showCart() {
    openCart();
}

function openCart() {
    let panel = document.getElementById("cartPanel");

    if (panel) {
        panel.classList.add("active");
    }

    renderCart();
}

function closeCart() {
    let panel = document.getElementById("cartPanel");

    if (panel) {
        panel.classList.remove("active");
    }
}

function createCartPanel() {
    if (document.getElementById("cartPanel")) {
        return;
    }

    let overlay = document.createElement("div");
    overlay.id = "cartOverlay";
    overlay.onclick = closeCart;

    let panel = document.createElement("div");
    panel.id = "cartPanel";

    panel.innerHTML = `
        <div class="cart-header">
            <h2>My Bag</h2>
            <button class="cart-close" onclick="closeCart()">×</button>
        </div>

        <div id="cartItems"></div>

        <div class="cart-footer">
            <div class="cart-total-row">
                <span>Total</span>
                <strong id="cartTotal">₹0</strong>
            </div>

            <button class="checkout-btn" onclick="checkout()">
                Proceed to Checkout
            </button>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(panel);
}

function renderCart() {
    let container = document.getElementById("cartItems");
    let totalElement = document.getElementById("cartTotal");

    if (!container || !totalElement) {
        return;
    }

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <div class="empty-icon">🛍️</div>
                <h3>Your bag is empty</h3>
                <p>Add something you love!</p>
                <button onclick="closeCart(); showCategory('all')" class="continue-btn">
                    Continue Shopping
                </button>
            </div>
        `;

        totalElement.innerText = "₹0";
        return;
    }

    let html = "";
    let total = 0;

    cart.forEach(function (item, index) {

        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        html += `
            <div class="cart-item">

                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>₹${item.price.toLocaleString("en-IN")}</p>
                </div>

                <div class="quantity-box">
                    <button onclick="decreaseQuantity(${index})">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>

                <div class="cart-item-bottom">
                    <strong>₹${itemTotal.toLocaleString("en-IN")}</strong>

                    <button class="remove-btn" onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </div>

            </div>
        `;
    });

    container.innerHTML = html;

    totalElement.innerText = "₹" + total.toLocaleString("en-IN");
}

function checkout() {

    if (cart.length === 0) {
        showToast("Your bag is empty");
        return;
    }

    let panel = document.getElementById("cartPanel");

    panel.innerHTML = `
        <div class="checkout-page">

            <button class="cart-close" onclick="closeCart()">×</button>

            <div class="success-icon">✓</div>

            <h2>Order Confirmed!</h2>

            <p class="success-text">
                Thank you for shopping with VYORA.
            </p>

            <div class="order-box">
                <p><strong>Order ID</strong></p>
                <p>VY${Date.now().toString().slice(-8)}</p>

                <hr>

                <p>
                    Your order has been successfully placed.
                </p>

                <p>
                    Estimated delivery: <strong>3–5 business days</strong>
                </p>
            </div>

            <button class="continue-btn" onclick="finishOrder()">
                Continue Shopping
            </button>

        </div>
    `;
}

function finishOrder() {

    cart = [];

    saveCart();
    updateCartCount();

    closeCart();

    createCartPanel();

    showCategory("all");
}

function showToast(message) {

    let oldToast = document.getElementById("vyoraToast");

    if (oldToast) {
        oldToast.remove();
    }

    let toast = document.createElement("div");

    toast.id = "vyoraToast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.classList.add("show");
    }, 10);

    setTimeout(function () {
        toast.classList.remove("show");

        setTimeout(function () {
            toast.remove();
        }, 300);

    }, 2000);
}


function showCategory(category) {

    let products = document.querySelectorAll(".product");
    let count = 0;

    products.forEach(function (product) {

        let productCategory =
            product.getAttribute("data-category");

        if (category === "all") {

            product.style.display = "block";
            count++;

        } else if (category === "sale") {

            let discount =
                product.querySelector(".discount");

            if (discount) {
                product.style.display = "block";
                count++;
            } else {
                product.style.display = "none";
            }

        } else if (productCategory === category) {

            product.style.display = "block";
            count++;

        } else {

            product.style.display = "none";
        }
    });

    let title =
        document.getElementById("collectionTitle");

    if (title) {

        if (category === "all")
            title.innerText = "Trending Now";

        if (category === "dress")
            title.innerText = "Dresses";

        if (category === "top")
            title.innerText = "Tops";

        if (category === "jeans")
            title.innerText = "Jeans";

        if (category === "accessories")
            title.innerText = "Accessories";

        if (category === "sale")
            title.innerText = "Sale";
    }

    let productCount =
        document.getElementById("productCount");

    if (productCount) {
        productCount.innerText =
            count + " products";
    }

    let section =
        document.getElementById("products");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function searchProducts() {

    let input =
        document.getElementById("searchBox");

    let search =
        input.value.toLowerCase().trim();

    let products =
        document.querySelectorAll(".product");

    let count = 0;

    products.forEach(function (product) {

        let name =
            product.querySelector("h3");

        if (!name) return;

        let productName =
            name.innerText.toLowerCase();

        if (productName.includes(search)) {

            product.style.display = "block";
            count++;

        } else {

            product.style.display = "none";
        }
    });

    let productCount =
        document.getElementById("productCount");

    if (productCount) {
        productCount.innerText =
            count + " products";
    }
}


function sortProducts() {

    let select =
        document.getElementById("sortSelect");

    let grid =
        document.getElementById("productGrid");

    if (!select || !grid) return;

    let products =
        Array.from(grid.querySelectorAll(".product"));

    products.sort(function (a, b) {

        let priceA = getPrice(a);
        let priceB = getPrice(b);

        let ratingA = getRating(a);
        let ratingB = getRating(b);

        if (select.value === "low")
            return priceA - priceB;

        if (select.value === "high")
            return priceB - priceA;

        if (select.value === "rating")
            return ratingB - ratingA;

        return 0;
    });

    products.forEach(function (product) {
        grid.appendChild(product);
    });
}


function getPrice(product) {

    let price =
        product.querySelector(".price");

    if (!price) return 0;

    let number =
        price.innerText
        .replace(/,/g, "")
        .match(/\d+/);

    return number ? Number(number[0]) : 0;
}


function getRating(product) {

    let rating =
        product.querySelector(".rating");

    if (!rating) return 0;

    let number =
        rating.innerText.match(/\d+(\.\d+)?/);

    return number ? Number(number[0]) : 0;
}


function toggleWishlist(button) {

    let product =
        button.closest(".product");

    let name =
        product.querySelector("h3").innerText;

    if (button.innerText === "♡") {

        button.innerText = "♥";
        button.style.color = "red";

        if (!wishlist.includes(name)) {
            wishlist.push(name);
        }

        showToast("Added to wishlist");

    } else {

        button.innerText = "♡";
        button.style.color = "";

        wishlist =
            wishlist.filter(item => item !== name);

        showToast("Removed from wishlist");
    }

    saveWishlist();
}


function showWishlist() {

    if (wishlist.length === 0) {

        showToast("Your wishlist is empty");
        return;
    }

    let message =
        "Wishlist:\n\n" +
        wishlist.join("\n");

    alert(message);
}


function updateProductCount() {

    let products =
        document.querySelectorAll(".product");

    let count =
        document.getElementById("productCount");

    if (count) {
        count.innerText =
            products.length + " products";
    }
}