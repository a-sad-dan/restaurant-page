import SupesKitchenPhoto from '/src/assets/supes-kitchen.png';

export default function renderHome() {
    const main = document.querySelector('#main');
    const heading = document.querySelector('#heading')

    const info = document.createElement('p');
    const img = document.createElement('img')

    main.classList.add('home');

    heading.innerHTML = "Welcome to &quot;The <span class ='red-txt'>Supes'</span> Kitchen&quot;!"

    info.textContent = `🌟 Unleash Your Appetite with Superpowered Flavors! 🌟
    Step into a world where culinary excellence meets superhuman passion. At The Supes' Kitchen, we bring you an experience that's truly out of this world. Our restaurant isn't just a place to dine; it's a celebration of flavors, all inspired by the twisted charm of "The Boys."
    Indulge in a dining adventure that's as wild and thrilling as the show itself. Our restaurant's exterior is a spectacle at night, with mesmerizing lights that beckon you to enter. As you step inside, you'll be greeted by an ambiance that reflects the grit and intensity of 'The Boys' universe.
    From the dark and mysterious corners to the vibrant energy of our open kitchen, every detail is crafted to immerse you in a world where culinary creativity knows no bounds. Get ready to embark on a gastronomic journey that will challenge your taste buds and redefine your dining expectations.`


    img.src = SupesKitchenPhoto;

    main.appendChild(info);
    main.appendChild(img);
}

