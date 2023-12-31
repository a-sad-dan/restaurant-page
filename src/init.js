import homeIcon from '/src/assets/icons/home.svg';
import menuIcon from '/src/assets/icons/menu.svg';
import contactIcon from '/src/assets/icons/contact.svg';


export default function setupPage() {
    const mainDiv = document.createElement('div');
    mainDiv.id = 'content';
    // mainDiv.textContent = "Welcome to the supes' Kitchen"
    document.body.appendChild(mainDiv);

    // Components of #Content
    const heading = document.createElement('h1');
    heading.id = 'heading'

    const main = document.createElement('div');
    main.id = 'main';
    main.classList.add('home');

    const nav = document.createElement('div');
    nav.id = 'nav'
    // nav.textContent = 'nav-bar'

    mainDiv.appendChild(heading);
    mainDiv.appendChild(main);
    mainDiv.appendChild(nav);

    // Nav Bar
    const createNavLink = (name,icon) => {
        const btn = document.createElement('button');
        btn.id = name;
        btn.classList.add('navBtn')
        const btnImg = document.createElement('img');
        btnImg.src = icon;
        btnImg.classList.add('nav', 'icon');
        btn.appendChild(btnImg);

        return btn;
    }

    nav.appendChild(createNavLink('home',homeIcon));
    nav.appendChild(createNavLink('menu',menuIcon));
    nav.appendChild(createNavLink('contact',contactIcon));
}

export function clearMain()
{
    const main = document.querySelector('#main');
    main.classList.remove('home');
    main.classList.remove('menu');
    main.classList.remove('contact');
    main.innerHTML = '';
}