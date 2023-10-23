const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

listItems.forEach((items) => {
    items.addEventListener('click', (e) => {
        e.target.removeEventListener();
    });
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});