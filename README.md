# Map Lab

## Overview

In this lab, we'll use the `map` method to write functions that properly query
our data.

## Introduction

So far, we've seen examples of how to use `forEach`. Just to recap, given an
array of things, we can use `forEach` by passing in our own function.  Behind
the scenes, `forEach` takes each item in the array of things and passes them one
at a time into the function.

```js
let dirtyDishes = ['bowl', 'spoon','plate','glass','mug']

function washDish(dish) {
  console.log("Washing a ${dish}")
}

let cleanDishes = dirtyDishes.forEach(washDish)

// Logs "Washing a bowl"
// Logs "Washing a spoon"
// Logs "Washing a plate"
// Logs "Washing a glass"
// Logs "Washing a mug"
// => returns 'undefined'
cleanDishes
// => 'undefined'
```

This works great for things like console logs, but what if we wanted to iterate
over something and get values back using the array info? Say for instance, we
have an array of numbers, and we want to get back the double _each_ number?

```js
let numbers = [1,2,3,4,5]

function double(number) {
  return number * number
}

numbers.forEach(double)
// => returns 'undefined'
```

This doesn't return anything.  To be clear, `double` _is_ getting called on each
item in our `numbers` array.  We could add in a `console.log` before the return
statement to confirm that.  The issue is that `forEach` doesn't return anything
get, so even if there is a `return` statement in our function, the value isn't
going anywhere.

For this, we need a different iterator, `map`

## `map`

The `map` function acts the same way as `forEach`, except that it returns a _new
array_. If we use the example above:

```js
let numbers = [1,2,3,4,5]

function double(number) {
  return number * number
}

numbers.map(double)
// => returns [1,4,9,16,25]
```

This can be used in all sorts of userful ways.  Remember our dishes example?  We
could use `map` to create a new array, from _dirty_ dishes to _clean_.

```js
let dirtyDishes = ['bowl', 'spoon','plate','glass','mug']

function washDish(dish) {
  console.log("Washing a ${dish}")
  return "clean ${dish}"
}

let cleanDishes = dirtyDishes.map(washDish)

// Logs "Washing a bowl"
// Logs "Washing a spoon"
// Logs "Washing a plate"
// Logs "Washing a glass"
// Logs "Washing a mug"
// => returns ['clean bowl', 'clean spoon','clean plate','clean glass','clean mug']

cleanDishes
// => ['clean bowl', 'clean spoon','clean plate','clean glass','clean mug']
dirtyDishes
// => ['bowl', 'spoon','plate','glass','mug']
```

So, here we're still _logging_ as we did with `forEach`, but calling `map` also
lets us return something.  In this case, we're returning a new string where the
`dish` is interpolated. We haven't actually changed the original array, instead
we've assigned the return value of `map` to a different variable.  This is
important - `map` is _non-destructive_. It doesn't modify an array; it _creates_
a new array.

If _we_ choose, we can always assign the old array to the new and
destroy it, but that would be up to us.

Here is another, slightly more complex example using `map` as the return value
inside a function:

```js
let vacationSpots = [
    { location: "Skye",  country: "Scotland"},
    { location: "Cancun",  country: "Mexico"},
    { location: "Miami",  country: "America"},
]

function stringifyVacation(object) {
  return "I would like to visit ${object.location} in ${object.country}"
}

function listMyVacationOptions(vacationArray) {
  return vacationArray.map(stringifyVacation)  
}

listMyVacationOptions(vacationSpots)
// => returns [
//  "I would like to visit Skye in Scotland",
//  "I would like to visit Cancun in Mexico",
//  "I would like to visit Miami in America",
// ]
```

Run this code in your browser console.  In this case, we've got two functions,
one, `stringifyVacation`, that takes in a single object and returns a string
using its attributes, and the other, `listMyVacationOptions`, that takes in an
array, maps over it _using_ the `stringifyVacation` function. This results in a
new array of strings!

Okay, now let's put this knowledge to the test! Use the examples we've discussed
to help guide you through solving this lab.

## Instructions

Be sure to run the tests with `learn` to get a feel for the types of problems
this lab is asking you to solve. You'll be writing two functions that deal with
iterating over arrays and one for iterating over an object.

In addition to following the tests, feel free to test your functions somewhere
like the Chrome dev tools console, using the examples here as arguments for the
function.  

### Challenge 1

Write a function called `lowerCaseStudentNames` that takes an array of students,
and returns an array of the student names in lowercase.  Below is an example of
how the array looks, but this function should be able to take in _any_ array of
names and lowercase each of them:

```js
['Adele', 'Beyoncé', 'Lady', 'Madonna', 'Rihanna', 'Taylor']
```

Passing the above array into your `lowerCaseStudentNames` function will return:

```js
['adele', 'beyoncé', 'lady', 'madonna', 'rihanna', 'taylor']
```

### Challenge 2

Write a function called `nameToAttributes` that takes an array of students with
their first and last name separated by a space, and returns an **array** of
JavaScript _objects_ with `firstName` and `lastName` attributes. An example
input would be:

```js
['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman']
```

Passing the above array into your `nameToAttributes` function will return:

```js
[
  { firstName: 'Amy',   lastName: 'Adams'     },
  { firstName: 'Cate',   lastName: 'Blanchett'   },
  { firstName: 'Emma',   lastName: 'Stone'   },
  { firstName: 'Jennifer', lastName: 'Lawrence'    },
  { firstName: 'Natalie',   lastName: 'Portman' }  
]
```

### Challenge 3

Write a function called `attributesToPhrase` that takes an array of students as
JavaScript **objects** and returns a _string_ saying `"<NAME OF STUDENT> is from
<HOMETOWN>"` for each object in the array. Note that between the `<` and `>` we
are looking for the value stored in the `name` and `hometown` object attributes,
not the strings `"STUDENT"` or `"HOMETOWN"`.

An example input for this function:

```js
[
  { name: 'Mary',   hometown: 'Allegheny'  },
  { name: 'Joan',   hometown: 'Chicago'    },
  { name: 'Eva',   hometown: 'Hamburg'   }
]
```

Passing the above array of objects into your `attributesToPhrase` function will return:

```js
[
  'Mary is from Allegheny',
  'Joan is from Chicago',
  'Eva is from Hamburg'
]
```

## Resources

- [MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
