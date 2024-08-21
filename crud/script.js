let items = [];

function renderItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item}</span>
            <div class="actions">
                <button onclick="editItem(${index})">Edit</button>
                <button class="delete" onclick="deleteItem(${index})">Delete</button>
            </div>
        `;
        itemList.appendChild(li);
    });
}

function createItem() {
    const input = document.getElementById('item-input');
    const newItem = input.value.trim();

    if (newItem) {
        items.push(newItem);
        input.value = '';
        renderItems();
    }
}

function editItem(index) {
    const newItem = prompt('Edit item:', items[index]);

    if (newItem !== null) {
        items[index] = newItem.trim();
        renderItems();
    }
}

function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}

document.addEventListener('DOMContentLoaded', renderItems);