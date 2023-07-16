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

//alert on add to cart
function getActiveItem() {
    var activeSize = document.querySelector('#sizeList li.active');
    var activeFlavor = document.querySelector('#flavorList li.active');
    var activeQuantity = document.querySelector('#counter');


    var activeSizeText = activeSize ? activeSize.textContent : 'No active size selected';
    var activeFlavorText = activeFlavor ? activeFlavor.textContent : 'No active flavor selected';
    var activeQuantityText= activeQuantity ? activeQuantity.textContent : 'No quantity chosen';


    var alertMessage = 'Active Size: ' + activeSizeText + '\nActive Flavor: ' + activeFlavorText + '\nActive Quantity: ' + activeQuantityText ;
    alert(alertMessage);


    //Add to local storage

    var activeItems = {
        size: activeSizeText,
        flavor: activeFlavorText,
        quantity: activeQuantityText
    };

    localStorage.setItem('activeItems', JSON.stringify(activeItems));
}

//Open the offcanvas menu from bootstrap
var myOffcanvas = document.getElementById('myNav');
var openNavBtn = document.getElementById('openNavBtn');

openNavBtn.addEventListener('click', function () {
    var bootstrapOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    bootstrapOffcanvas.show();
});

//Get items from local storage to the checkout button

var itemJSON = localStorage.getItem('activeItems');
if (itemJSON) {
    var activeItems = JSON.parse(itemJSON);

    var size = activeItems.size;
    var flavor = activeItems.flavor;
    var quantity = activeItems.quantity;

    var quantityHolder = document.querySelector('.quan');
    var sizeHolder = document.querySelector('.size');
    var flavorHolder = document.querySelector('.flav');

    quantityHolder.innerHTML = 'Quantity: ' + quantity;
    sizeHolder.innerHTML = 'Size: ' + size;
    flavorHolder.innerHTML = 'Flavor: ' + flavor;

}