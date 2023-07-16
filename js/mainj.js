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
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');

li1.addEventListener('click', function() {
    toggleActiveState(li1);
});
li2.addEventListener('click', function() {
    toggleActiveState(li2);
});
li3.addEventListener('click', function() {
    toggleActiveState(li3);
});

function toggleActiveState(li) {
    li1.classList.remove('active');
    li2.classList.remove('active');
    li3.classList.remove('active');

    li.classList.add('active');
}


//change flavors ready state
var f1 = document.getElementById('f1');
var f2 = document.getElementById('f2');
var f3 = document.getElementById('f3');
var f4 = document.getElementById('f4');
var f5 = document.getElementById('f5');
var f6 = document.getElementById('f6');
var f7 = document.getElementById('f7');
var f8 = document.getElementById('f8');
var f9 = document.getElementById('f9');
var f10 = document.getElementById('f10');
var f11 = document.getElementById('f11');
var f12 = document.getElementById('f12');

f1.addEventListener('click', function() {
    changeState(f1);
});
f2.addEventListener('click', function() {
    changeState(f2);
});
f3.addEventListener('click', function() {
    changeState(f3);
});
f4.addEventListener('click', function() {
    changeState(f4);
});
f5.addEventListener('click', function() {
    changeState(f5);
});
f6.addEventListener('click', function() {
    changeState(f6);
});
f7.addEventListener('click', function() {
    changeState(f7);
});
f8.addEventListener('click', function() {
    changeState(f8);
});
f9.addEventListener('click', function() {
    changeState(f9);
});
f10.addEventListener('click', function() {
    changeState(f10);
});
f11.addEventListener('click', function() {
    changeState(f11);
});
f12.addEventListener('click', function() {
    changeState(f12);
});


function changeState(li) {
    f1.classList.remove('active');
    f2.classList.remove('active');
    f3.classList.remove('active');
    f4.classList.remove('active');
    f5.classList.remove('active');
    f6.classList.remove('active');
    f7.classList.remove('active');
    f8.classList.remove('active');
    f9.classList.remove('active');
    f10.classList.remove('active');
    f11.classList.remove('active');
    f12.classList.remove('active');

    li.classList.add('active');
}

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
        
    var activeSizeText = activeSize ? activeSize.textContent : 'No active size selected';
    var activeFlavorText = activeFlavor ? activeFlavor.textContent : 'No active flavor selected';
    
    var alertMessage = 'Active Size: ' + activeSizeText + '\nActive Flavor: ' + activeFlavorText;
    alert(alertMessage);


    //Add to local storage

    var activeItems = {
        size: activeSizeText,
        flavor: activeFlavorText
    };

    localStorage.setItem('activeItems', JSON.stringify(activeItems));
    alert('Active items saved to local storage');

}