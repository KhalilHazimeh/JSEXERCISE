//counter starts from 1 till 10 not lower nor higher
var counter = 1;
var counterElement = document.getElementById('counter');
var originalPrice = document.getElementById('originalPrice');

function increment() {
    if (counter < 10) {
        counter++;
        counterElement.textContent = counter;
        updatePrice(counter);
    }
}

function decrement() {
    if (counter > 1) {
        counter--;
        counterElement.textContent = counter;
        updatePrice(counter);
    } 
}

//alert on search

function searchText() {
    var searchInput = document.getElementById('searchInput');
    var searchValue = searchInput.value;
    if (searchValue.trim() !== '') {
        alert("You searched for: " + searchValue);
    }
}

//add price on counter adding
var priceInt = parseInt(originalPrice.textContent);
function updatePrice(counter){
    var newPrice = priceInt * counter; 
    originalPrice.textContent = newPrice;
}



//Change the active state on click
const items = document.querySelectorAll('.option');

items.forEach(item => {
    item.addEventListener('click', () => {
        
        items.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});


//change flavors ready state
const fs = document.querySelectorAll('.flavor');

fs.forEach(item => {
    item.addEventListener('click', () => {
        
        fs.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
    });
});


//Adjust flavors availability accordint to the size

function hideFlavors(size) {
    if (size === 1) {
        f1.classList.remove('hidden');
        f2.classList.remove('hidden');
        f3.classList.remove('hidden');
        f4.classList.remove('hidden');
        f5.classList.remove('hidden');
        f6.classList.remove('hidden');
        f7.classList.remove('hidden');
        f8.classList.remove('hidden');
        f9.classList.remove('hidden');
        f10.classList.remove('hidden');
        f11.classList.remove('hidden');
        f12.classList.remove('hidden');
        f5.classList.add('disabled');
        f6.classList.add('disabled');
        f7.classList.add('disabled');
        f8.classList.add('disabled');
        f9.classList.add('disabled');
        f10.classList.add('disabled');
        f11.classList.add('disabled');
        f12.classList.add('disabled');
    }


    if (size === 2) {
        f1.classList.remove('hidden');
        f2.classList.add('hidden');
        f3.classList.add('hidden');
        f4.classList.add('hidden');
        f5.classList.add('hidden');
        f6.classList.add('hidden');
        f7.classList.add('hidden');
        f8.classList.add('hidden');
        f9.classList.add('hidden');
        f10.classList.add('hidden');
        f11.classList.add('hidden');
        f12.classList.add('hidden');
    }


    if (size === 3) {
        f1.classList.remove('hidden');
        f2.classList.remove('hidden');
        f3.classList.remove('hidden');
        f4.classList.remove('hidden');
        f5.classList.remove('hidden');
        f6.classList.remove('hidden');
        f7.classList.remove('hidden');
        f8.classList.remove('hidden');
        f9.classList.remove('hidden');
        f10.classList.remove('hidden');
        f11.classList.remove('hidden');
        f12.classList.remove('hidden');
        f5.classList.remove('disabled');
        f6.classList.remove('disabled');
        f7.classList.remove('disabled');
        f8.classList.remove('disabled');
        f9.classList.remove('disabled');
        f10.classList.remove('disabled');
        f11.classList.remove('disabled');
        f12.classList.add('disabled');
    }
}


function getActiveItem() {
    var activeSize = document.querySelector('#sizeList li.active');
    var activeFlavor = document.querySelector('#flavorList li.active');
    var activeQuantity = document.querySelector('#counter');


    var activeSizeText = activeSize ? activeSize.textContent : 'No active size selected';
    var activeFlavorText = activeFlavor ? activeFlavor.textContent : 'No active flavor selected';
    var activeQuantityText= activeQuantity ? activeQuantity.textContent : 'No quantity chosen';


    var alertMessage = 'Active Size: ' + activeSizeText + '\nActive Flavor: ' + activeFlavorText + '\nActive Quantity: ' + activeQuantityText ;
    alert(alertMessage);
    
    const product = {
        id: generateProductId(), // Generate a unique product id
        name: 'Product Name',    // Replace with actual product name
        price: originalPrice.textContent,            // Replace with actual product price
        quantity : activeQuantityText,
        size: activeSizeText,
        flavor: activeFlavorText
    };

    addProductToUserSelection(product);

      // Retrieve the updated user's product selections from the local storage
    const storedSelectedProducts = getUserSelectionsFromLocalStorage();

      // Display the stored selected products
    console.log(storedSelectedProducts);
}

function addProductToUserSelection(product) {
    const storedSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    storedSelectedProducts.push(product);
    localStorage.setItem('selectedProducts', JSON.stringify(storedSelectedProducts));
}

  // Function to retrieve the user's product selections from the local storage
function getUserSelectionsFromLocalStorage() {
    const storedSelectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
    return storedSelectedProducts;
}
function generateProductId() {
    return Math.random(); // Using timestamp as a simple example
}


function displaySelectedItems() {
    const selectedItemsDisplay = document.getElementById('offcanvas-body');
    const storedSelectedProducts = getUserSelectionsFromLocalStorage();

    let innerHTML = '<ul>';
    storedSelectedProducts.forEach((product) => {
    innerHTML += `<h4>${product.name} </h4>`;
    innerHTML += `<li>Price: $${product.price} </li>`;
    innerHTML += `<li>Size: ${product.size}</li>`;
    innerHTML += `<li>Quantity: $${product.quantity}</li>`;
    innerHTML += `<li>Flavor: $${product.flavor}</li>`;
    });
    innerHTML += '</ul>';

    selectedItemsDisplay.innerHTML = innerHTML;
}


var myOffcanvas = document.getElementById('myNav');
var openNavBtn = document.getElementById('openNavBtn');

    openNavBtn.addEventListener('click', function () {
        var bootstrapOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
        bootstrapOffcanvas.show();

        displaySelectedItems();
    });