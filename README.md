# Map Lab

## Overview

In this lab, we'll use the `map` method to write functions that properly query
our data.

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
