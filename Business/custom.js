const modal = document.getElementById('customModal');
const btn = document.getElementById('customMade');
let close = document.getElementById("x")

function openWindow() {
    modal.style.display = 'block';
    console.log("Sdf")
}
btn.addEventListener('click', openWindow)

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function() {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
})

const form = document.getElementById('customForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const customName = document.getElementById('customName').value;
    const customPrice = document.getElementById('totalPrice').value;
    // var customPrice = document.getElementById('customPrice').value;
    // if ( customPrice <= 0) {
    //     if ( customPrice == 0){
    //         customPrice = 1;
    //     }else{
    //     customPrice *= -1; 
    // };
    });
    var customQuantity = document.getElementById('customQuantity').value;
    if ( customQuantity <= 0) {
        if ( customQuantity == 0){
            customQuantity = 1;
        }else{
        customQuantity *= -1; 
    };
    };
    modal.style.display = 'none';
    addToCart(customName, customPrice, customQuantity)
