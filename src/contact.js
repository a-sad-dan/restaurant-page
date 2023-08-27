export default function renderContact() {
    const heading = document.querySelector('#heading')
    const main = document.querySelector('#main');

    const restaurantInfo = document.createElement('p')
    const contactInfo = document.createElement('p')
    const disclaimer = document.createElement('p');

    restaurantInfo.textContent = `Reach out to us with any inquiries, reservations, or special event bookings. We're here to ensure your experience at The Supes' Kitchen is as remarkable as a showdown in The Boys. Follow us on social media to stay up-to-date with our latest dishes and heroic offers!
    🦸‍♂️ Unleash Your Inner Foodie. Visit The Supes' Kitchen Today! 🦸‍♀`

    contactInfo.innerHTML = `📍 Location: 123 Vought Avenue, The Seven Tower, Vought City<br>
    ☎️ Phone: 555-HERO-FOOD<br>
    📧 Email: info@supeskitchen.com`;

    disclaimer.textContent = `(Note: The above content is a fictional representation and is not endorsed or affiliated with the TV show "The Boys" or any related entities.)`


    main.classList.add('contact');
    disclaimer.classList.add('disclaimer');

    heading.textContent = "Contact Us"
    main.appendChild(restaurantInfo);
    main.appendChild(contactInfo);
    main.appendChild(disclaimer);
}

