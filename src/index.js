//Assets
import '/src/style.css';
import '/src/assets/fonts/DCC-Ash.otf'
import '/src/assets/fonts/SedgwickAveDisplay-Regular.ttf'
import '/src/assets/icons/home.svg'
import '/src/assets/icons/menu.svg'
import '/src/assets/icons/contact.svg'


//Modules 
import '/src/main.js'


//Initial Page Load Function
//Appending the content div
const mainDiv = document.createElement('div');
mainDiv.id = 'content';
// mainDiv.textContent = "Welcome to the supes' Kitchen"
document.body.appendChild(mainDiv);

// Components of #Content
const heading = document.createElement('h1');
heading.innerHTML = "Welcome to &quot;The <span class ='red-txt'>Supes</span>' Kitchen&quot;!"
heading.id = 'heading'

const main = document.createElement('div');
main.id = 'main';

const nav = document.createElement('div');
nav.id = 'nav'
// nav.textContent = 'nav-bar'

mainDiv.appendChild(heading);
mainDiv.appendChild(main);
mainDiv.appendChild(nav);

// Nav Bar
const createNavLink = (name) => {
    const btn = document.createElement('button');
    btn.id = name;
    btn.classList.add('navBtn')
    const btnImg = document.createElement('img');
    btnImg.src = `/src/assets/icons/${name}.svg`
    btnImg.classList.add('nav','icon');
    btn.appendChild(btnImg);

    return btn;
}

nav.appendChild(createNavLink('home'));
nav.appendChild(createNavLink('menu'));
nav.appendChild(createNavLink('contact'));
