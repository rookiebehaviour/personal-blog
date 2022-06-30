---
title: Callbacks
date: '2022-07-30'
tags: ['Callbacks']
images: ['/static/images/postImages/michael-dziedzic-qDG7XKJLKbs-unsplash.jpg']
draft: true
summary: Introduction to callbacks, arrow functions, HOF and how to use them.
---

# Summary

## Functions as Values

Functions have as many rights and uses as any other object. They exist as their own entity. You can even invoke a function that is within an array, inside of a parent object.

## Passing Functions

Callback: is a function that gets passed to be invoked by that function.

```js
const findWaldo = function (names, found) {
  names.forEach((names, index) => {
    if (names === 'Waldo') {
      found(index)
    }
  })
}

const actionWhenFound = function (index) {
  console.log(`Found Waldo at index ${index}!`)
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound)
```

Here, `actionWhenFound` is a callback function that gets passed to `findWaldo`. When `findWaldo` finds Waldo, it invokes `actionWhenFound` with the index of Waldo.

## Callbacks and higher order functions

### Functions as objects

Functions are **first class objects** in JavaScript. This means:

- Functions can be **stored** in variables and **passed around**
- Functions can do **everything** that other **objects** can do (like having properties assigned to them)

The most notable usage of having functions as values in JavaScript is a **callback function.**

## Rationale

Let's say we are looping over an array of values (days of the week) and we want to iterate through the array. We have many methods to do this. We will use a `for..of ` loop.

```js

```

## Higher Order Functions

Is a function that takes in another function as an **argument**.

The callback is the function we pass **into the higher order function**.

They allow for creation of more powerful and **generalized** functions. A Higher-order function's job is reduced in scope when you allow it to interact with other functions.

This means that built-in functions such as `forEach`, `filter`, and others can be called "Higher-Order Functions".

This is a very important concept in **Functional Programing**.

In our example, printTheDay is the callback, and \_\_\_ is the higher order function.

```js

```

### Using map

Let's use the higher order function `map` to practice.

For example, we can use map on an array of objects to return an array of the animal names:

```js
const animals = [
  { name: 'Fluffy', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

const names = animals.map((animal) => animal.name)

console.log(names) // ['Fluffy', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy']
```

## Anonymous Functions

Simply means that the function is not named (not declared), but is rather inline like so:

```js
// anonymous function
findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], function (index) {
  console.log('Waldo is located at:', index)
})

// anonymous function
const findWaldo = function (names, cb) {
  names.forEach((names, index) => {
    if (names === 'Waldo') {
      cb(index)
    }
  })
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], (index) =>
  console.log(`Found Waldo at index ${index}!`)
)

// not anonymous function
const findWaldo = function (names, found) {
  names.forEach((names, index) => {
    if (names === 'Waldo') {
      found(index)
    }
  })
}

const actionWhenFound = function (index) {
  console.log(`Found Waldo at index ${index}!`)
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound)
```

> In the previous `findWaldo` function, we passed in a function named `actionWhenFound`. This is **not** an anonymous function.

Notice how the function is directly as an argument _inline_, and not as a variable.

```js
function(result) { ... }
```

## Arrow Functions

Introduced in ES6, inspired by CoffeeScript.

| Advantages                                                         |
| ------------------------------------------------------------------ |
| no `function` keyword                                              |
| no need for `()` if **single** argument                            |
| If only **one** line, no `{}` needed                               |
| If no `{}`, then expressions are automatically returned (implicit) |

Arrow functions are convenient for declaring anonymous functions, often in the form of callbacks.

Syntax:

```js
// BEFORE: anonymous callback as function expression
;[1, 2, 3].forEach(function (num) {
  console.log('num: ', num)
})

// AFTER: anonymous callback as arrow function
;[1, 2, 3].forEach((num) => {
  console.log('num: ', num)
})

// OR: as a single line
;[1, 2, 3].forEach((num) => console.log('num: ', num))
```

### Issues with Arrow Functions - this

Occurs when we use the word `this`. Arrow functions do not create `this`.

If you want to use `this` in your function, you need to use `bind` to bind the `this` to the function.

```js

```

## Make another Higher Order Function

Ones that come to mind are array methods (forEach, map, filter, reduce etc.).

#### Filter

The built in `filter` method takes a callback function as an argument. The callback function is invoked for each element in the array.

```js
const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18]
const evens = numbers.filter(function (num) {
  return num % 2 === 0
})
console.log('Subset of even numbers:', evens)
```