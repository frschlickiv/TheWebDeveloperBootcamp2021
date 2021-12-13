const form = document.querySelector('form');


form.addEventListener("submit", function (e){
    e.preventDefault();
const list = document.querySelector('#list');
const product = form.elements.product.value;
const quantity = form.elements.qty.value;
const newItem = document.createElement('li');
newItem.innerHTML = (`${quantity} ${product}`);


list.appendChild(newItem);
    
});


