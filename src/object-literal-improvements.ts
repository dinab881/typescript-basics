const pizza = {
    name 'Pepperoni',
    price: 15
};

const toppings = ['pepperoni'];

// In ES5:
let order = {
    pizza: pizza,
    toppings: toppings,
};

// In ES6:
order = { pizza, toppings};