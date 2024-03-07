'use strict';


export function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

// Select HTML element
export function select(selector, parent = document) {
  return parent.querySelector(selector);
}

// Get a list of HTML elements as an array
export function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}