// insertAdjacentElement Example
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'InsertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText Example
function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

// insertAdjacentHTML Example
function insertHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend', '<h2>InsertAdjacentHTML</h2>');
}

// insertABefore Example
function insertABeforeItem() {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertHTML();
insertABeforeItem();

/*
<!--beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/