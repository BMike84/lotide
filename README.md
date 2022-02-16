# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @michaelb84/lotide`

**Require it:**

`const _ = require('@michaelb84/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: compares if 2 arrays are equal
* assertEqual: compares if 2 values are eual
* assertObjectsEqual: comares if 2 objects are equal
* countLetters: returns count of each letter in a string
* countOnly: counts how many times a specific element comes up
* eqArrays: compares 2 arryas
* eqObjects: compares 2 objects
* findKey: returns key that is first found in the object with its value
* findKeyByValue: searches for the key by its value to see if it matches the given value
* flatten: flattens array inside of arrays to make a sinle array
* head: retrieves first element of the array
* index: list of all the functions in an object
* letterPositions: returns all index position of each letter
* map: creates a new array making changes to what is specified in the function
* middle: returns the middle element of an array
* tail: returns every element of the array except the first element(head)
* takeUntil: returns a slice of the array with elements taken from the beginning to specific end point
* without: removes elements from an array