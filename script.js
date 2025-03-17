const button = document.querySelector('nav button');
const menu = document.querySelector('nav div.hidden.md\\:block');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Input
import {
    Ripple,
    Input,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Ripple, Input });

  // navbar
  // Mobile Menu Toggle
  