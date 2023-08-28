// Import images
import burger from '/src/assets/dishes/burger.png';
import chickenWings from '/src/assets/dishes/chickenWings.png';
import bolognese from '/src/assets/dishes/bolognese.png';
import sushi from '/src/assets/dishes/sushi.png';
import salad from '/src/assets/dishes/salad.png';
import whiteChoco from '/src/assets/dishes/whiteChoco.png';
import martini from '/src/assets/dishes/martini.png';


let menu = [{
    name: '🍔 Homelander\'s heroic burger',
    imgUrl: burger,
    description: `Savor the power-packed flavors of this towering burger – a homage to the mightiest hero! Packed with double beef patties, melted fiery cheese, and a secret spicy sauce. Served with a side of crispy Vought Fries. Feel the rush of adrenaline with every bite!`
},
{
    name: '🍗 Queen Maeve\'s Mighty Chicken Wings',
    imgUrl: chickenWings,
    description: `Get ready for a kick of heroism with these succulent chicken wings, doused in Maeve's signature tangy glaze. A side of refreshing celery sticks and Compound V-infused dip completes the plate. These wings are as bold as Queen Maeve herself!`
},
{
    name: '🍝 Billy Butcher\'s Beefy Bolognese',
    imgUrl: bolognese,
    description: `A dish as rugged and uncompromising as the man himself. Twisted pasta smothered in a rich, slow-cooked beef Bolognese sauce. Topped with grated parmesan and a hint of vengeance. It's a plate of flavors that pack a punch!`
},
{
    name: '🍣 A-Train\'s Speedy Sushi Rolls',
    imgUrl: sushi,
    description: `Zoom through taste sensations with these lightning-fast sushi rolls. Fresh ingredients wrapped in seaweed and rice, delivering a burst of flavors with every bite. Comes with a zesty Wasabi Rush for an extra kick!`
},
{
    name: '🥗 Starlight\'s Enlightened Salad',
    imgUrl: salad,
    description: `Elevate your senses with Starlight's Enlightened Salad. A harmonious mix of crisp greens, colorful veggies, and protein-packed toppings. Drizzled with a radiant lemon-garlic vinaigrette. A dish that's both light and powerful!`
},
{
    name: '🍰 Homelander\'s White Chocolate Temptation',
    imgUrl: whiteChoco,
    description: `Indulge in the ultimate sweet triumph! A velvety white chocolate mousse layered with intense dark chocolate ganache, topped with a gold leaf emblem. A dessert fit for a superhero's appetite!`
},
{
    name: '🍹 Translucent Blue Martini',
    imgUrl: martini,
    description: `Experience the unexpected with our Translucent Blue Martini. A mesmerizing blend of spirits and secret ingredients that shapeshift as you sip. An homage to the unpredictable nature of 'The Boys' universe!`
},
]

export default function renderMenu() {
    const main = document.querySelector('#main');
    const heading = document.querySelector('#heading');
    heading.textContent = 'Menu';
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
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);
        main.appendChild(card);
    }
}

