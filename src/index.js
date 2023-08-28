//Assets
import '/src/style.css';
import '/src/assets/fonts/DCC-Ash.otf';
import '/src/assets/fonts/SedgwickAveDisplay-Regular.ttf';

//Modules 
import setupPage from './init.js';
import { clearMain } from './init.js';

import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';


//Initialise Page Load
setupPage();
renderHome();


// Select Button
const homeBtn = document.querySelector('button#home');
const menuBtn = document.querySelector('button#menu');
const contactBtn = document.querySelector('button#contact');

// Event listeners
homeBtn.addEventListener('click', () => {
    clearMain();
    renderHome();
});

menuBtn.addEventListener('click', () => {
    clearMain();
    renderMenu();
})

contactBtn.addEventListener('click', () => {
    clearMain();
    renderContact();
});



// Notes for self
// Need to optimise images from tinyPng 
// Need to add animations