// -------------------------for dynamic working
    const products =[
        {id: 1, name: "BROWN TITLTED PATTERN PURSE", price: 5000, image: "product1.jpg", description:"A durable denim purse, washable and snug with its robust adjustable belt, complemented by securely fitted chains."},
        {id: 2, name: "WELVET BLACK PRINT SATIN PURSE", price: 3000, image:"product2.jpg", description:"A durable denim purse, washable and snug with its robust adjustable belt, complemented by securely fitted chains."},
        {id: 3, name: "SCHOOL AGE OLIVE DENIM PURSE", price: 2500, image:"product3.jpg", description:"A durable denim purse, washable and snug with its robust adjustable belt, complemented by securely fitted chains."},
        {id: 4, name: "WHITE BLACK OLIVE WELVET PURSE", price: 2900, image:"product4.jpg", description:"A durable denim purse, washable and snug with its robust adjustable belt, complemented by securely fitted chains."},
        {id: 5, name: "BROWN TITLTED PATTERN PURSE", price: 5000, image: "product5.jpg", description:"A durable denim purse, washable and snug with its robust adjustable belt, complemented by securely fitted chains."},
        {id: 6, name: "WELVET BLACK PRINT SATIN PURSE", price: 3000, image:"product6.jpg", description:"A durable denim purse, washable and snug with its robust adjustable belt, complemented by securely fitted chains."},
        {id: 7, name: "SCHOOL AGE OLIVE DENIM PURSE", price: 2500, image:"product7.jpg", description:"A durable denim purse, washable and snug with its robust adjustable belt, complemented by securely fitted chains."},
        {id: 8, name: "WHITE BLACK OLIVE WELVET PURSE", price: 2900, image:"product8.jpg", description:"A durable denim purse, washable and snug with its robust adjustable belt, complemented by securely fitted chains."}

]    



const cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.querySelector(".products");
    const cartButton = document.getElementById("cart-button");
    const closeModal = document.getElementById("closeModal");
    const modal = document.getElementById("cartModal");

    // Create product elements
    products.forEach(product => {
        const productElement = document.createElement("div"); 
        productElement.className = "product";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <h6>${product.description}</h6>
            <p>Price: &#8377;${product.price.toFixed(2)}</p>
           


            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    // Open cart modal
    cartButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close cart modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Add a product to the cart
    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
        }
    };


    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    // Update the cart and total price
    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = "";

        let totalPrice = 0;

        cart.forEach(product => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <div class="wholeOneCart">
                <div class="singleCartElement">
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}">

                    <p>Price: &#8377;${product.price.toFixed(2)}</p>
                </div>
                <button onclick="removeFromCart(${product.id})">Remove</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
            totalPrice += product.price;
        });

        cartTotal.textContent = totalPrice.toFixed(2);
    }

    const cartTotal = document.getElementById("cart-total");
    // Remove a product from the cart
    window.removeFromCart = (productId) => {
        const index = cart.findIndex(product => product.id === productId);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCart();
        }
    };
});



