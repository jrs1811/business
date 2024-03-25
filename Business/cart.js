// Global variables
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const clearCartBtn = document.getElementById('clear-cart-btn');
const modal = document.getElementById('customModal');
const btn = document.getElementById('customMade');
const span = document.querySelector('.close');
const form = document.getElementById('customForm');


// Functions
function addToCart(productName, productPrice, productQuantity) {
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

function openWindow2() {
    modal.style.display = 'block';
    console.log("Sdf")
}




// Calls and Listeners
updateCartDisplay();


clearCartBtn.addEventListener('click', function () {
    cartItems = []
    updateCartDisplay();
    localStorage.removeItem('cartItems');
});

//here


btn.addEventListener('click', openWindow2)


span.addEventListener('click', function() {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})
window.addEventListener('click', function() {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
})


form.addEventListener('submit', function (event) {
    event.preventDefault();
    const customName = document.getElementById('customName').value;
    const customPrice = document.getElementById('customPrice').value;
    const customQuantity = document.getElementById('customQuantity').value;
    modal.style.display = 'none';
    addToCart(customName, customPrice, customQuantity)
});
//to here