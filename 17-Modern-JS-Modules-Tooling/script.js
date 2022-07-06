// Importing Module
// import {
//   addToCart,
//   // rename imports
//   totalPrice as price,
//   tq,
// } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);
// console.log(shippingCost);
// console.log('Importing module');

// import variables as an object which we can access (as Public API)
// import * as shoppingCart from './shoppingCart.js';

// shoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice);

// this will import defaults with any name we use
// import add, { cart } from './shoppingCart.js';

// add('Bread', 2);
// add('Pizza', 5);
// add('Apples', 4);

// console.log(cart);

//=> Top level await

// console.log('start');
/**
 * - only in modules
 * - blocking code for the whole module
 */
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);
// console.log('end');
/* 
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
 */
// not very clean
// const lastPost = getLastPost();
// console.log(lastPost);
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//=> Module Pattern
/* 
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizzas', 2);
console.log(shoppingCart2);
 */

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

console.log(stateClone);
state.user.loggedIn = false;

console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }
