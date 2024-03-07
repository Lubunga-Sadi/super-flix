'use strict';


export function getElement(selector, scope = document) {
  return scope.getElementById(selector);
}

// Select HTML element
export function select(selector, scope = document) {
  return scope.querySelector(selector);
}

// Get a list of HTML elements as an array
export function selectAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

export function print(...args) {
  args.forEach(element => {
    console.log(element)
  });
}