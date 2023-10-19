let output;

// Get child elements
const parent = document.querySelector('.parent');
output = parent.children;

// Access child properties
output = parent.children[1].innerText;
output = parent.children[1].className; // Changed clagsName to className
output = parent.children[1].nodeName;   // Removed the semicolon

// Correcting the repeated style and innerText assignments
parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red'; // Setting the color to red

// Get parent elements from a child
const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)'); // Corrected the selector
output = secondItem;
output = secondItem.nextElementSibling;

// Setting color on sibling elements
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log(output);