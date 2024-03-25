let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addToCart(productName, productPrice, productQuantity) {
    productQuantity = parseInt(productQuantity);
    const existingItem = cartItems.find(item => item.name === productName);
    if (existingItem) {
        existingItem.amount += productQuantity;
    } else {
        cartItems.push({ name: productName, price: productPrice, amount: productQuantity });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartDisplay();
}



function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    cartList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} - ${item.amount}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => {
            removeFromCart(item);
        });
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        total += item.price * item.amount;
    });
    cartTotal.textContent = total.toFixed(2);
}
function removeFromCart(itemToRemove) {
    const indexToRemove = cartItems.findIndex(item => item === itemToRemove);
    if (indexToRemove !== -1) {
        if (cartItems[indexToRemove].amount > 1) {
            cartItems[indexToRemove].amount -= 1;
        } else {
            cartItems.splice(indexToRemove, 1);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay();
    }
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // updateCartDisplay();
    // cartItems.splice(index, 1);
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // updateCartDisplay();
}
updateCartDisplay();

const clearCartBtn = document.getElementById('clear-cart-btn');
clearCartBtn.addEventListener('click', function () {
    cartItems = []
    updateCartDisplay();
    localStorage.removeItem('cartItems');
});
