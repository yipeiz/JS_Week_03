/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});


var countItem = function(theA, theE) {
  var count = 0;
  _.each(theA, function(value, key, list){
    if (list[key] === theE){
      count += 1;
    }
  });
  return count;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);


var filterOutLessThan10 = function(theL) {
  var newL = [];
  _.each(theL,function(value, key, list){
    if (list[key] > 10){
      newL.push(list[key]);
    }
  });
  return newL;

};

console.log('filterOutLessThan10 success:', filterOutLessThan10([4, 11]) );
