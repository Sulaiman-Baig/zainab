const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemBtn = document.getElementById('clear');

function addItems(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value = '';
}

function createButton(classes) {
    const button = document.createElement('button');
    button.ClassName = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove_item')) {
        e.target.parentElement.parentElement.remove();
    }
}

function clearItems() {
   while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
   } 
}

// Event Listeners
itemForm.addEventListener('submit', addItems);
itemForm.addEventListener('click', removeItem);
itemForm.addEventListener('click', clearItems);