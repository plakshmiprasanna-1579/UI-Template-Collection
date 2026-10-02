let cart = JSON.parse(localStorage.getItem("gloworaCart")) || [];

let discount = 0;

document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    renderCart();
    updateProductSearch();
});


function saveCart() {
    localStorage.setItem(
        "gloworaCart",
        JSON.stringify(cart)
    );
}


/* =========================
   SHOP NOW
========================= */

function showAllProducts() {

    let products =
        document.querySelectorAll(".product-card");

    products.forEach(function (product) {
        product.style.display = "block";
    });

    let title =
        document.getElementById("productTitle");

    if (title) {
        title.innerText = "Bestsellers";
    }

    let productsSection =
        document.getElementById("products");

    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   CATEGORY FILTER
========================= */

function exploreProduct(category) {

    let products =
        document.querySelectorAll(".product-card");

    products.forEach(function (product) {

        if (
            product.dataset.category === category
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

    let title =
        document.getElementById("productTitle");

    if (title) {
        title.innerText =
            category + " Products";
    }

    let productsSection =
        document.getElementById("products");

    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   SEARCH
========================= */

function searchProducts() {

    let input =
        document.getElementById("searchInput");

    if (!input) return;

    let search =
        input.value.toLowerCase().trim();

    let products =
        document.querySelectorAll(".product-card");

    products.forEach(function (product) {

        let name =
            product.dataset.name.toLowerCase();

        let category =
            product.dataset.category.toLowerCase();

        let text =
            product.innerText.toLowerCase();

        if (
            name.includes(search) ||
            category.includes(search) ||
            text.includes(search)
        ) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

    let title =
        document.getElementById("productTitle");

    if (title && search !== "") {
        title.innerText =
            "Search Results";
    }

    if (search === "") {
        if (title) {
            title.innerText = "Bestsellers";
        }
    }
}


function updateProductSearch() {

    let input =
        document.getElementById("searchInput");

    if (input) {
        input.value = "";
    }
}


/* =========================
   SORT PRODUCTS
========================= */

function sortProducts() {

    let select =
        document.getElementById("sortSelect");

    let grid =
        document.getElementById("productGrid");

    if (!select || !grid) return;

    let products =
        Array.from(
            grid.querySelectorAll(".product-card")
        );

    if (select.value === "default") {

        products.sort(function (a, b) {

            return Number(
                a.dataset.originalIndex
            ) - Number(
                b.dataset.originalIndex
            );

        });

    }

    if (select.value === "low") {

        products.sort(function (a, b) {

            return getProductPrice(a) -
                getProductPrice(b);

        });

    }

    if (select.value === "high") {

        products.sort(function (a, b) {

            return getProductPrice(b) -
                getProductPrice(a);

        });

    }

    products.forEach(function (product) {
        grid.appendChild(product);
    });
}


function getProductPrice(product) {

    let button =
        product.querySelector(
            ".product-info button"
        );

    if (!button) return 0;

    let match =
        button.getAttribute("onclick")
        .match(/,\s*(\d+)\)/);

    if (!match) return 0;

    return Number(match[1]);
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        let products =
            document.querySelectorAll(
                ".product-card"
            );

        products.forEach(
            function (product, index) {

                product.dataset.originalIndex =
                    index;

            }
        );

    }
);


/* =========================
   WISHLIST
========================= */

function wishlist(event) {

    if (event) {
        event.stopPropagation();
    }

    let button =
        event.currentTarget;

    if (!button) return;

    if (
        button.innerText.trim() === "♡"
    ) {

        button.innerText = "♥";

        button.classList.add(
            "wishlist-active"
        );

        showToast(
            "Added to wishlist ❤️"
        );

    } else {

        button.innerText = "♡";

        button.classList.remove(
            "wishlist-active"
        );

        showToast(
            "Removed from wishlist"
        );
    }
}


/* =========================
   ADD TO CART
========================= */

function addToCart(name, price) {

    let existing =
        cart.find(function (item) {
            return item.name === name;
        });

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: name,

            price: Number(price),

            quantity: 1

        });

    }

    saveCart();

    updateCartCount();

    renderCart();

    showToast(
        name + " added to bag ✓"
    );

    openCart();
}


/* =========================
   CART COUNT
========================= */

function updateCartCount() {

    let count =
        document.getElementById("cartCount");

    if (!count) return;

    let totalItems = 0;

    cart.forEach(function (item) {

        totalItems +=
            item.quantity;

    });

    count.innerText =
        totalItems;
}


/* =========================
   OPEN CART
========================= */

function openCart() {

    let overlay =
        document.getElementById(
            "cartOverlay"
        );

    let panel =
        document.getElementById(
            "cartPanel"
        );

    if (overlay) {
        overlay.classList.add("active");
    }

    if (panel) {
        panel.classList.add("active");
    }

    renderCart();
}


/* =========================
   CLOSE CART
========================= */

function closeCart() {

    let overlay =
        document.getElementById(
            "cartOverlay"
        );

    let panel =
        document.getElementById(
            "cartPanel"
        );

    if (overlay) {
        overlay.classList.remove("active");
    }

    if (panel) {
        panel.classList.remove("active");
    }
}


/* =========================
   RENDER CART
========================= */

function renderCart() {

    let container =
        document.getElementById(
            "cartItems"
        );

    if (!container) return;

    let subtotalElement =
        document.getElementById(
            "cartSubtotal"
        );

    let discountElement =
        document.getElementById(
            "cartDiscount"
        );

    let totalElement =
        document.getElementById(
            "cartTotal"
        );

    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛍️
                </div>

                <h3>
                    Your Bag is Empty
                </h3>

                <p>
                    Add your favourite
                    beauty products.
                </p>

                <button
                    onclick="closeCart(); showAllProducts()">

                    Continue Shopping

                </button>

            </div>

        `;

        if (subtotalElement) {
            subtotalElement.innerText =
                "₹0";
        }

        if (discountElement) {
            discountElement.innerText =
                "- ₹0";
        }

        if (totalElement) {
            totalElement.innerText =
                "₹0";
        }

        return;
    }


    let html = "";

    let subtotal = 0;


    cart.forEach(
        function (item, index) {

            let itemTotal =
                item.price *
                item.quantity;

            subtotal += itemTotal;


            html += `

                <div class="cart-item">

                    <div class="cart-item-details">

                        <small>
                            GLOWORA
                        </small>

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ₹${item.price.toLocaleString("en-IN")}
                        </p>

                    </div>


                    <div class="quantity">

                        <button
                            onclick="decreaseQuantity(${index})">

                            −

                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(${index})">

                            +

                        </button>

                    </div>


                    <div class="item-bottom">

                        <strong>
                            ₹${itemTotal.toLocaleString("en-IN")}
                        </strong>

                        <button
                            class="remove"
                            onclick="removeItem(${index})">

                            Remove

                        </button>

                    </div>

                </div>

            `;
        }
    );


    container.innerHTML =
        html;


    let currentDiscount = 0;


    if (
        localStorage.getItem(
            "gloworaCoupon"
        ) === "GLOW10"
    ) {

        currentDiscount =
            Math.round(
                subtotal * 0.10
            );

        discount =
            currentDiscount;

    } else {

        discount = 0;

    }


    let finalTotal =
        subtotal - discount;


    if (subtotalElement) {

        subtotalElement.innerText =
            "₹" +
            subtotal.toLocaleString(
                "en-IN"
            );

    }


    if (discountElement) {

        discountElement.innerText =
            "- ₹" +
            discount.toLocaleString(
                "en-IN"
            );

    }


    if (totalElement) {

        totalElement.innerText =
            "₹" +
            finalTotal.toLocaleString(
                "en-IN"
            );

    }
}


/* =========================
   QUANTITY +
========================= */

function increaseQuantity(index) {

    if (!cart[index]) return;

    cart[index].quantity++;

    saveCart();

    updateCartCount();

    renderCart();
}


/* =========================
   QUANTITY -
========================= */

function decreaseQuantity(index) {

    if (!cart[index]) return;

    if (
        cart[index].quantity > 1
    ) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

    updateCartCount();

    renderCart();
}


/* =========================
   REMOVE
========================= */

function removeItem(index) {

    if (!cart[index]) return;

    let itemName =
        cart[index].name;

    cart.splice(index, 1);

    saveCart();

    updateCartCount();

    renderCart();

    showToast(
        itemName +
        " removed from bag"
    );
}


/* =========================
   COUPON
========================= */

function applyCoupon() {

    let input =
        document.getElementById(
            "couponInput"
        );

    if (!input) return;

    let code =
        input.value
        .trim()
        .toUpperCase();


    if (code === "GLOW10") {

        localStorage.setItem(
            "gloworaCoupon",
            "GLOW10"
        );

        discount = 1;

        renderCart();

        showToast(
            "GLOW10 applied — 10% OFF ✨"
        );

    } else {

        localStorage.removeItem(
            "gloworaCoupon"
        );

        discount = 0;

        renderCart();

        showToast(
            "Invalid coupon code"
        );
    }
}


/* =========================
   COPY COUPON
========================= */

function copyCoupon() {

    if (
        navigator.clipboard
    ) {

        navigator.clipboard.writeText(
            "GLOW10"
        );

    }

    showToast(
        "GLOW10 copied ✓"
    );
}


/* =========================
   CART TOTAL
========================= */

function getCartSubtotal() {

    let total = 0;

    cart.forEach(function (item) {

        total +=
            item.price *
            item.quantity;

    });

    return total;
}


function getCartDiscount() {

    let subtotal =
        getCartSubtotal();

    if (
        localStorage.getItem(
            "gloworaCoupon"
        ) === "GLOW10"
    ) {

        return Math.round(
            subtotal * 0.10
        );

    }

    return 0;
}


function getCartTotal() {

    let subtotal =
        getCartSubtotal();

    let discountAmount =
        getCartDiscount();

    return (
        subtotal -
        discountAmount
    );
}


/* =========================
   CHECKOUT
========================= */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "Your bag is empty"
        );

        return;
    }


    let modal =
        document.getElementById(
            "checkoutModal"
        );


    if (!modal) {

        showToast(
            "Checkout is not available"
        );

        return;
    }


    closeCart();


    resetCheckout();


    modal.classList.add(
        "active"
    );


    updateCheckoutSummary();

}


/* =========================
   RESET CHECKOUT
========================= */

function resetCheckout() {

    let address =
        document.getElementById(
            "addressStep"
        );

    let payment =
        document.getElementById(
            "paymentStep"
        );

    let success =
        document.getElementById(
            "successStep"
        );


    if (address) {
        address.style.display =
            "grid";
    }

    if (payment) {
        payment.style.display =
            "none";
    }

    if (success) {
        success.style.display =
            "none";
    }


    setProgress(
        1
    );
}


/* =========================
   CLOSE CHECKOUT
========================= */

function closeCheckout() {

    let modal =
        document.getElementById(
            "checkoutModal"
        );

    if (modal) {

        modal.classList.remove(
            "active"
        );

    }
}


/* =========================
   CHECKOUT SUMMARY
========================= */

function updateCheckoutSummary() {

    let addressItems =
        document.getElementById(
            "addressSummaryItems"
        );

    let paymentItems =
        document.getElementById(
            "paymentSummaryItems"
        );


    let html = "";


    cart.forEach(function (item) {

        let total =
            item.price *
            item.quantity;


        html += `

            <div class="summary-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <span>
                        Qty: ${item.quantity}
                    </span>

                </div>

                <strong>
                    ₹${total.toLocaleString("en-IN")}
                </strong>

            </div>

        `;

    });


    if (addressItems) {

        addressItems.innerHTML =
            html;

    }


    if (paymentItems) {

        paymentItems.innerHTML =
            html;

    }


    let total =
        getCartTotal();


    let addressTotal =
        document.getElementById(
            "addressTotal"
        );

    let paymentTotal =
        document.getElementById(
            "paymentTotal"
        );


    if (addressTotal) {

        addressTotal.innerText =
            "₹" +
            total.toLocaleString(
                "en-IN"
            );

    }


    if (paymentTotal) {

        paymentTotal.innerText =
            "₹" +
            total.toLocaleString(
                "en-IN"
            );

    }
}


/* =========================
   ADDRESS → PAYMENT
========================= */

function goToPayment() {

    let name =
        document.getElementById(
            "customerName"
        ).value.trim();


    let phone =
        document.getElementById(
            "customerPhone"
        ).value.trim();


    let address =
        document.getElementById(
            "customerAddress"
        ).value.trim();


    let city =
        document.getElementById(
            "customerCity"
        ).value.trim();


    let pincode =
        document.getElementById(
            "customerPincode"
        ).value.trim();


    if (
        name === "" ||
        phone === "" ||
        address === "" ||
        city === "" ||
        pincode === ""
    ) {

        showToast(
            "Please fill all delivery details"
        );

        return;
    }


    if (
        !/^[0-9]{10}$/.test(phone)
    ) {

        showToast(
            "Enter a valid 10 digit mobile number"
        );

        return;
    }


    if (
        !/^[0-9]{6}$/.test(pincode)
    ) {

        showToast(
            "Enter a valid 6 digit pincode"
        );

        return;
    }


    let addressStep =
        document.getElementById(
            "addressStep"
        );

    let paymentStep =
        document.getElementById(
            "paymentStep"
        );


    if (addressStep) {

        addressStep.style.display =
            "none";

    }


    if (paymentStep) {

        paymentStep.style.display =
            "grid";

    }


    setProgress(
        2
    );


    updateCheckoutSummary();

}


/* =========================
   PAYMENT → ADDRESS
========================= */

function goBackToAddress() {

    let addressStep =
        document.getElementById(
            "addressStep"
        );

    let paymentStep =
        document.getElementById(
            "paymentStep"
        );


    if (paymentStep) {

        paymentStep.style.display =
            "none";

    }


    if (addressStep) {

        addressStep.style.display =
            "grid";

    }


    setProgress(
        1
    );
}


/* =========================
   PLACE ORDER
========================= */

function placeOrder() {

    let payment =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!payment) {

        showToast(
            "Please select a payment method"
        );

        return;
    }


    let total =
        getCartTotal();


    let orderId =
        "GW" +
        Math.floor(
            10000000 +
            Math.random() *
            90000000
        );


    let paymentStep =
        document.getElementById(
            "paymentStep"
        );

    let successStep =
        document.getElementById(
            "successStep"
        );


    if (paymentStep) {

        paymentStep.style.display =
            "none";

    }


    if (successStep) {

        successStep.style.display =
            "block";

    }


    let orderElement =
        document.getElementById(
            "orderId"
        );


    let finalTotal =
        document.getElementById(
            "finalTotal"
        );


    if (orderElement) {

        orderElement.innerText =
            orderId;

    }


    if (finalTotal) {

        finalTotal.innerText =
            "₹" +
            total.toLocaleString(
                "en-IN"
            );

    }


    setProgress(
        3
    );


    cart = [];


    localStorage.removeItem(
        "gloworaCart"
    );


    localStorage.removeItem(
        "gloworaCoupon"
    );


    discount = 0;


    updateCartCount();

    renderCart();


    showToast(
        "Order placed successfully ✓"
    );
}


/* =========================
   PROGRESS
========================= */

function setProgress(step) {

    let p1 =
        document.getElementById(
            "progress1"
        );

    let p2 =
        document.getElementById(
            "progress2"
        );

    let p3 =
        document.getElementById(
            "progress3"
        );


    [p1, p2, p3].forEach(
        function (element) {

            if (element) {

                element.classList.remove(
                    "active"
                );

            }

        }
    );


    if (step >= 1 && p1) {

        p1.classList.add(
            "active"
        );

    }


    if (step >= 2 && p2) {

        p2.classList.add(
            "active"
        );

    }


    if (step >= 3 && p3) {

        p3.classList.add(
            "active"
        );

    }
}


/* =========================
   FINISH ORDER
========================= */

function finishOrder() {

    closeCheckout();


    let name =
        document.getElementById(
            "customerName"
        );

    let phone =
        document.getElementById(
            "customerPhone"
        );

    let address =
        document.getElementById(
            "customerAddress"
        );

    let city =
        document.getElementById(
            "customerCity"
        );

    let pincode =
        document.getElementById(
            "customerPincode"
        );


    if (name) {
        name.value = "";
    }

    if (phone) {
        phone.value = "";
    }

    if (address) {
        address.value = "";
    }

    if (city) {
        city.value = "";
    }

    if (pincode) {
        pincode.value = "";
    }


    document.querySelectorAll(
        'input[name="payment"]'
    ).forEach(
        function (radio) {

            radio.checked = false;

        }
    );


    resetCheckout();


    showAllProducts();

    showToast(
        "Thank you for shopping with Glowora ✨"
    );
}


/* =========================
   TOAST
========================= */

function showToast(message) {

    let toast =
        document.getElementById(
            "toast"
        );


    if (!toast) return;


    toast.innerText =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.gloworaToastTimer
    );


    window.gloworaToastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================
   BEAUTY NAVIGATION
========================= */

function scrollToSection(id) {

    let section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}