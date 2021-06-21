import OGULT from "./images/ultimate-chicken.jpg";
import HOTULT from "./images/hot-ultimate.jpg";
import CHORULT from "./images/chicken-chorizo.jpg";
import SCPNEG from "./images/pineapplenegroni.jpg";
import NEGTON from "./images/negroniandtonic.jpg";
import BLUNEG from "./images/bluenegroni.jpg";

export const FOOD = [
  {
    id: 0,
    name: "OG Ultimate",
    description:
      "w/ cheddar cheese, housemade bacon, sautéed red onions, fresno mayo, cilantro",
    image: OGULT,
    price: "7.50",
  },
  {
    id: 1,
    name: "HOT Ultimate",
    description: "w/ bleu cheese dressing, HOT wing sauce, chives",
    image: HOTULT,
    price: "7.50",
  },
  {
    id: 2,
    name: "Ultimate Chicken & Chorizo",
    description:
      "w/ chile de árbol, cheese sauce, housemade chorizo, crispies, cilantro",
    image: CHORULT,
    price: "8.00",
  },
];

export const COCKTAILS = [
  {
    id: 0,
    name: "Sorched Pineapple Negroni",
    description:
      "Pineapple-infused Campari, Cynar, Mezcal, Pineapple Oil, Palo Santo",
    image: SCPNEG,
    price: "10.00",
  },
  {
    id: 1,
    name: "Negroni & Tonic",
    description: "Housemade Lemongrass Tonic, Gin, Cinzano Rosso, Campari",
    image: NEGTON,
    price: "11.00",
  },
  {
    id: 2,
    name: "Blue Negroni (AKA The Third Sink)",
    description:
      "Aromatized Blue Curaçao, Gin, Lychee Luxardo Bitters, Campari spray",
    image: BLUNEG,
    price: "10.00",
  },
];
