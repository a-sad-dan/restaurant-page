//Initial Page Load Function

import './style.css';
import './DCC-Ash.otf'
import './SedgwickAveDisplay-Regular.ttf'

//Appending the content div
const mainDiv = document.createElement('div');
mainDiv.id = 'content';
// mainDiv.textContent = "Welcome to the supes' Kitchen"
document.body.appendChild(mainDiv);

// Components of #Content
const heading = document.createElement('h1');
heading.innerHTML = "Welcome to &quot;The <span class ='red-txt'>Supes</span>' Kitchen&quot;!"
const main = document.createElement('div');
const nav = document.createElement('div');
nav.textContent = 'nav-bar'

mainDiv.appendChild(heading);
mainDiv.appendChild(main);
mainDiv.appendChild(nav);