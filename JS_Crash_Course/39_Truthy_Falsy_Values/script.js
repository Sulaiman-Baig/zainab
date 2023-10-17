//  Falsy Values;
// _ false
// _0
// _ "" or '' (Empty string)
// _ null
// _ undefined
// _ NaN

// Truthy Values;
// _ Everything else that is not falsy
// _ true
// _ '0' (0 in a string)
// _ '' (space in a string)
// _ 'false' (false in a string)
// _ [] (empty array)
// _ {} (empty object)
// _ function () {} (empty function)

const x = function () {};

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}

// Checking for empty arrays
const posts = ['Post One'];

if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts To List');
}

// Checking for empty objects
const user = {
    name: 'Brad',
};

if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No User');
}

// Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);