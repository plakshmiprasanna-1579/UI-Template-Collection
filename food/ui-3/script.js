const fallbackImage = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85";

const products = [
    {
        id: 1,
        name: "Classic Margherita",
        category: "Veg Pizza",
        price: 199,
        rating: 4.8,
        description: "Classic tomato sauce, mozzarella cheese and fresh basil.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 2,
        name: "Farmhouse Feast",
        category: "Veg Pizza",
        price: 299,
        rating: 4.9,
        description: "Loaded with onion, capsicum, tomato and fresh vegetables.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 3,
        name: "Paneer Tikka",
        category: "Veg Pizza",
        price: 329,
        rating: 4.8,
        description: "Spicy paneer tikka with onion, capsicum and creamy cheese.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 4,
        name: "Veggie Paradise",
        category: "Veg Pizza",
        price: 279,
        rating: 4.7,
        description: "A colourful mix of vegetables with extra cheese.",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 5,
        name: "Chicken Pepper",
        category: "Non-Veg",
        price: 349,
        rating: 4.8,
        description: "Tender chicken with spicy pepper seasoning and cheese.",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 6,
        name: "Chicken Tikka",
        category: "Non-Veg",
        price: 369,
        rating: 4.9,
        description: "Juicy chicken tikka pieces with onion and melted cheese.",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 7,
        name: "Spicy Chicken Feast",
        category: "Non-Veg",
        price: 399,
        rating: 4.8,
        description: "A spicy combination of chicken, peppers and premium cheese.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 8,
        name: "BBQ Chicken Melt",
        category: "Non-Veg",
        price: 389,
        rating: 4.7,
        description: "Smoky BBQ chicken with onions and stretchy cheese.",
        image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 9,
        name: "Garlic Bread",
        category: "Sides",
        price: 129,
        rating: 4.6,
        description: "Golden baked garlic bread with herbs and butter.",
        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 10,
        name: "Cheesy Garlic Bread",
        category: "Sides",
        price: 169,
        rating: 4.9,
        description: "Golden garlic bread covered with melted cheese and herbs.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 11,
        name: "Crispy Potato Bites",
        category: "Sides",
        price: 149,
        rating: 4.6,
        description: "Crispy golden potato bites served with a tasty dip.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 12,
        name: "Loaded Cheese Dip",
        category: "Sides",
        price: 119,
        rating: 4.5,
        description: "Creamy cheese dip perfect for pizza and sides.",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 13,
        name: "Chocolate Lava",
        category: "Desserts",
        price: 149,
        rating: 4.9,
        description: "Warm chocolate dessert with a rich molten centre.",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 14,
        name: "Chocolate Brownie",
        category: "Desserts",
        price: 129,
        rating: 4.8,
        description: "Soft and fudgy chocolate brownie for a sweet finish.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476f?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 15,
        name: "Creamy Cheesecake",
        category: "Desserts",
        price: 159,
        rating: 4.8,
        description: "Creamy cheesecake with a delicious smooth texture.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=90"
    },
    {
        id: 16,
        name: "Chilled Cola",
        category: "Drinks",
        price: 69,
        rating: 4.5,
        description: "Refreshing chilled cola to complete your meal.",
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 17,
        name: "Fresh Lime Cooler",
        category: "Drinks",
        price: 99,
        rating: 4.7,
        description: "Cool and refreshing lime drink with a citrusy taste.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85"
    },
    {
        id: 18,
        name: "Iced Lemon Tea",
        category: "Drinks",
        price: 89,
        rating: 4.6,
        description: "Refreshing iced tea with a fresh lemon flavour.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85"
    }
];

let cart = [];
let currentCategory = "All";
let currentProduct = null;
let selectedSize = "Medium";
let selectedCrust = "Classic";
let couponApplied = false;

const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

function safeImage(image, fallback = fallbackImage) {
    return image || fallback;
}

function imageError(img, fallback = fallbackImage) {
    img.onerror = null;
    img.src = fallback;
}

function renderProducts() {
    let filtered = [...products];

    if (currentCategory !== "All") {
        filtered = filtered.filter(product => product.category === currentCategory);
    }

    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    if (sortSelect.value === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    if (sortSelect.value === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    }

    if (sortSelect.value === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    productGrid.innerHTML = "";

    if (filtered.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                <img src="${safeImage(product.image)}" alt="${product.name}">
                <button class="favorite-btn" data-id="${product.id}">♡</button>
            </div>

            <div class="product-info">
                <div class="product-top">
                    <h3>${product.name}</h3>
                    <span class="rating">★ ${product.rating}</span>
                </div>

                <p>${product.description}</p>

                <div class="product-bottom">
                    <span class="product-price">₹${product.price}</span>
                    <button class="add-btn" data-id="${product.id}">Add +</button>
                </div>
            </div>
        `;

        const img = card.querySelector("img");

        img.addEventListener("error", function() {
            imageError(this);
        });

        card.addEventListener("click", function(event) {
            if (
                event.target.classList.contains("favorite-btn") ||
                event.target.classList.contains("add-btn")
            ) {
                return;
            }

            openProductModal(product);
        });

        productGrid.appendChild(card);
    });

    document.querySelectorAll(".add-btn").forEach(button => {
        button.addEventListener("click", function() {
            const id = Number(this.dataset.id);
            const product = products.find(item => item.id === id);

            if (product) {
                addToCart(product, "Medium", "Classic");
            }
        });
    });

    document.querySelectorAll(".favorite-btn").forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            this.textContent = this.classList.contains("active") ? "♥" : "♡";
        });
    });
}

function openProductModal(product) {
    currentProduct = product;

    document.getElementById("modalImage").src = safeImage(product.image);
    document.getElementById("modalImage").alt = product.name;
    document.getElementById("modalCategory").textContent = product.category;
    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalRating").textContent = `★ ${product.rating} / 5`;
    document.getElementById("modalDescription").textContent = product.description;
    document.getElementById("modalPrice").textContent = `₹${product.price}`;

    document.getElementById("modalImage").onerror = function() {
        imageError(this);
    };

    selectedSize = "Medium";
    selectedCrust = "Classic";

    document.querySelectorAll("#sizeOptions button").forEach(button => {
        button.classList.toggle("selected", button.dataset.size === "Medium");
    });

    document.querySelectorAll("#crustOptions button").forEach(button => {
        button.classList.toggle("selected", button.dataset.crust === "Classic");
    });

    const crustGroup = document.getElementById("crustGroup");

    if (product.category === "Sides" || product.category === "Desserts" || product.category === "Drinks") {
        crustGroup.style.display = "none";
    } else {
        crustGroup.style.display = "block";
    }

    document.getElementById("productModal").classList.add("show");
    document.getElementById("overlay").classList.add("show");
}

function closeProductModal() {
    document.getElementById("productModal").classList.remove("show");

    if (!document.getElementById("cartSidebar").classList.contains("open")) {
        document.getElementById("overlay").classList.remove("show");
    }
}

function addToCart(product, size = "Medium", crust = "Classic") {
    const key = `${product.id}-${size}-${crust}`;

    const existing = cart.find(item => item.key === key);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size,
            crust,
            quantity: 1
        });
    }

    updateCart();
    showToast(`${product.name} added to cart`);
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartEmpty = document.getElementById("cartEmpty");
    const cartSummary = document.getElementById("cartSummary");
    const cartCount = document.getElementById("cartCount");

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartCount.textContent = totalQuantity;

    if (cart.length === 0) {
        cartItems.innerHTML = "";
        cartEmpty.style.display = "flex";
        cartSummary.style.display = "none";
        return;
    }

    cartEmpty.style.display = "none";
    cartSummary.style.display = "block";

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${safeImage(item.image)}" alt="${item.name}" onerror="imageError(this)">
            
            <div>
                <h4>${item.name}</h4>
                <p>${item.size} ${item.crust !== "Classic" ? "• " + item.crust : ""}</p>

                <div class="quantity-controls">
                    <button onclick="changeQuantity('${item.key}', -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity('${item.key}', 1)">+</button>
                </div>
            </div>

            <div>
                <strong>₹${item.price * item.quantity}</strong>
                <br>
                <button class="remove-item" onclick="removeItem('${item.key}')">Remove</button>
            </div>
        </div>
    `).join("");

    calculateTotal();
}

function changeQuantity(key, change) {
    const item = cart.find(item => item.key === key);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.key !== key);
    }

    updateCart();
}

function removeItem(key) {
    cart = cart.filter(item => item.key !== key);
    updateCart();
    showToast("Item removed");
}

function calculateTotal() {
    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const delivery = subtotal >= 499 ? 0 : 40;
    const discount = couponApplied ? Math.min(150, subtotal) : 0;
    const total = subtotal + delivery - discount;

    document.getElementById("subtotal").textContent = `₹${subtotal}`;
    document.getElementById("delivery").textContent = delivery === 0 ? "FREE" : `₹${delivery}`;
    document.getElementById("discount").textContent = `-₹${discount}`;
    document.getElementById("total").textContent = `₹${total}`;
}

function openCart() {
    document.getElementById("cartSidebar").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

function closeCart() {
    document.getElementById("cartSidebar").classList.remove("open");

    if (!document.getElementById("productModal").classList.contains("show")) {
        document.getElementById("overlay").classList.remove("show");
    }
}

function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", function() {
        currentCategory = this.dataset.category;

        document.querySelectorAll(".category-card").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        document.querySelectorAll(".filter-btn").forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.filter === currentCategory
            );
        });

        renderProducts();

        document.getElementById("menu").scrollIntoView({
            behavior: "smooth"
        });
    });

    const categoryImage = card.querySelector("img");

    categoryImage.addEventListener("error", function() {
        imageError(this);
    });
});

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", function() {
        currentCategory = this.dataset.filter;

        document.querySelectorAll(".filter-btn").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        document.querySelectorAll(".category-card").forEach(card => {
            card.classList.toggle(
                "active",
                card.dataset.category === currentCategory
            );
        });

        renderProducts();
    });
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

document.getElementById("cartButton").addEventListener("click", openCart);

document.getElementById("closeCart").addEventListener("click", closeCart);

document.getElementById("modalClose").addEventListener("click", closeProductModal);

document.getElementById("overlay").addEventListener("click", function() {
    closeCart();
    closeProductModal();
});

document.querySelectorAll("#sizeOptions button").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll("#sizeOptions button").forEach(item => {
            item.classList.remove("selected");
        });

        this.classList.add("selected");
        selectedSize = this.dataset.size;
    });
});

document.querySelectorAll("#crustOptions button").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll("#crustOptions button").forEach(item => {
            item.classList.remove("selected");
        });

        this.classList.add("selected");
        selectedCrust = this.dataset.crust;
    });
});

document.getElementById("modalAddBtn").addEventListener("click", function() {
    if (!currentProduct) {
        return;
    }

    addToCart(currentProduct, selectedSize, selectedCrust);
    closeProductModal();
    openCart();
});

document.getElementById("applyCoupon").addEventListener("click", function() {
    const coupon = document.getElementById("couponInput").value
        .trim()
        .toUpperCase();

    if (coupon === "PIZZARUSH150") {
        couponApplied = true;
        calculateTotal();
        showToast("Coupon applied! ₹150 discount added.");
    } else {
        showToast("Invalid coupon code");
    }
});

document.getElementById("copyCoupon").addEventListener("click", function() {
    navigator.clipboard.writeText("PIZZARUSH150")
        .then(() => {
            showToast("Coupon copied: PIZZARUSH150");
        })
        .catch(() => {
            showToast("Coupon: PIZZARUSH150");
        });
});

document.getElementById("checkoutBtn").addEventListener("click", function() {
    if (cart.length === 0) {
        showToast("Your cart is empty");
        return;
    }

    showToast("Demo checkout successful! Thank you for ordering.");
});

document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", function() {
        imageError(this);
    });
});

renderProducts();
updateCart();