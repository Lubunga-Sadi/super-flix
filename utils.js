'use strict';


export function getElementById(sel, scope = document) {
  return scope.getElementById(sel);
}

// Select HTML element
export function selectEl(sel, scope = document) {
  return scope.querySelector(sel);
}

// Get a list of HTML elements as an array
export function selectAll(sel, scope = document) {
  return [...scope.querySelectorAll(sel)];
}

export function print(...args) {
  args.forEach(element => {
    console.log(element)
  });
}
               
