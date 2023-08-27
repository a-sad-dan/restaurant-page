let menu = [{
    name: '🍔 Homelander\'s heroic burger',
    imgUrl: '/src/assets/dishes//-homelanders-heroic-burgersavor-the-power-packed-flavors-of-this-towering-burger--a-homage-to-t-776056165.png',
    description: `Savor the power-packed flavors of this towering burger – a homage to the mightiest hero! Packed with double beef patties, melted fiery cheese, and a secret spicy sauce. Served with a side of crispy Vought Fries. Feel the rush of adrenaline with every bite!`
},
{
    name: '🍗 Queen Maeve\'s Mighty Chicken Wings',
    imgUrl: '/src/assets/dishes/-queen-maeves-mighty-chicken-wingsget-ready-for-a-kick-of-heroism-with-these-succulent-chicken-w-957119008.png',
    description: `Get ready for a kick of heroism with these succulent chicken wings, doused in Maeve's signature tangy glaze. A side of refreshing celery sticks and Compound V-infused dip completes the plate. These wings are as bold as Queen Maeve herself!`
},
{
    name: '🍝 Billy Butcher\'s Beefy Bolognese',
    imgUrl: '/src/assets/dishes//-billy-butchers-beefy-bolognesea-dish-as-rugged-and-uncompromising-as-the-man-himself-twisted-p-640496515.png',
    description: `A dish as rugged and uncompromising as the man himself. Twisted pasta smothered in a rich, slow-cooked beef Bolognese sauce. Topped with grated parmesan and a hint of vengeance. It's a plate of flavors that pack a punch!`
},
{
    name: '🍣 A-Train\'s Speedy Sushi Rolls',
    imgUrl: '/src/assets/dishes/-a-trains-speedy-sushi-rollszoom-through-taste-sensations-with-these-lightning-fast-sushi-rolls-87689008.png',
    description: `Zoom through taste sensations with these lightning-fast sushi rolls. Fresh ingredients wrapped in seaweed and rice, delivering a burst of flavors with every bite. Comes with a zesty Wasabi Rush for an extra kick!`
},
{
    name: '🥗 Starlight\'s Enlightened Salad',
    imgUrl: '/src/assets/dishes/-starlights-enlightened-saladelevate-your-senses-with-starlights-enlightened-salad-a-harmoniou-374902233.png',
    description: `Elevate your senses with Starlight's Enlightened Salad. A harmonious mix of crisp greens, colorful veggies, and protein-packed toppings. Drizzled with a radiant lemon-garlic vinaigrette. A dish that's both light and powerful!`
},
{
    name: '🍰 Homelander\'s White Chocolate Temptation',
    imgUrl: '/src/assets/dishes/-homelanders-white-chocolate-temptationindulge-in-the-ultimate-sweet-triumph-a-velvety-white-ch-343576830.png',
    description: `Indulge in the ultimate sweet triumph! A velvety white chocolate mousse layered with intense dark chocolate ganache, topped with a gold leaf emblem. A dessert fit for a superhero's appetite!`
},
{
    name: '🍹 Translucent Blue Martini',
    imgUrl: '/src/assets/dishes/-translucent-blue-martiniexperience-the-unexpected-with-our-translucent-blue-martini-a-mesmerizi-944111092.png',
    description: `Experience the unexpected with our Translucent Blue Martini. A mesmerizing blend of spirits and secret ingredients that shapeshift as you sip. An homage to the unpredictable nature of 'The Boys' universe!`
},
]

export default function renderMenu() {
    const main = document.querySelector('#main');


    menu.forEach(dish => {
    addCard(dish);    
    });

    main.classList.add('menu');

    

    function addCard(dish) {
        const card = document.createElement('div');
        card.classList.add('dish');

        const name = document.createElement('p');
        name.classList.add('name')

        const img = document.createElement('img');

        const description = document.createElement('p');
        description.classList.add('description');

        name.textContent = dish.name;
        img.src = dish.imgUrl;
        description.textContent = dish.description;

        main.appendChild(card);
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);
    }
}

