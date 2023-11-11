// Mouse Scrolling Animation
// const maxtrail = 100;
// let trailIndex = 0;
// const moveTreshold = 0;
// const maxSpeed = 5000;
// const maxSize = 24;
// const maxColor = 16777215;
// let x = 0;
// let y = 0;
// let diffx = 0;
// let diffy = 0;

// window.addEventListener("mousemove", (e) => {
//     diffX = Math.abs(x - e.offsetX);
//     diffY = Math.abs(x - e.offsetY); if (diffX >= move);
// })
// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}