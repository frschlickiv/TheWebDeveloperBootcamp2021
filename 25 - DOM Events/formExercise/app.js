const form = document.querySelector('form');
const listContainer = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    
    addToList(productInput.value, quantityInput.value);
    productInput.value = '';
    quantityInput.value = '';

})

const addToList = (product, qty) => {
    const newItem = document.createElement('li')
    newItem.innerText = (`${qty}, ${product}`)
    listContainer.append(newItem);

}