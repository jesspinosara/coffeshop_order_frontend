import espresso from "../images/Espresso.png";
import americano from "../images/Americano.png";
import cappuccino from "../images/Capuccino.png";
import latte from "../images/Latte.png";
import moka from "../images/Moka.png";
import flatwhite from "../images/Flatwhite.png";
import coldbrew from "../images/Coldbrew.png";
import matcha from "../images/Matcha.png";
import chai from "../images/Chailatte.png";
import horchata from "../images/Horchata.png";
import tonic from "../images/Tonico.png";
import carajillo from "../images/Carajillo.png";

const products = [
  {
    id: 1,
    name: "Espresso",
    category: "Café",
    basePrice: 35,
    description:
      "2 oz de café finamente molido, preparado a alta presión para un sabor intenso y concentrado.",
    image: espresso,
    defaultTemp: "Caliente",
    fixedTemp: "Caliente",
  },
  {
    id: 2,
    name: "Americano",
    category: "Café",
    basePrice: 40,
    description:
      "1 oz de espresso combinado con agua caliente, creando una bebida suave y equilibrada.",
    image: americano,
    defaultTemp: "Caliente",
    fixedTemp: null,
  },
  {
    id: 3,
    name: "Cold Brew",
    category: "Café",
    basePrice: 45,
    description:
      "Café molido grueso infusionado en agua fría durante 12-24 horas, resultando en un sabor suave y menos ácido.",
    image: coldbrew,
    defaultTemp: "Frío",
    fixedTemp: "Frío",
  },
  {
    id: 4,
    name: "Cappuccino",
    category: "Café con leche",
    basePrice: 50,
    description:
      "1 oz de espresso, 1 oz de leche vaporizada y 1 oz de espuma de leche, decorado con cacao en polvo o canela.",
    image: cappuccino,
    defaultTemp: "Caliente",
    fixedTemp: null,
  },
  {
    id: 5,
    name: "Latte",
    category: "Café con leche",
    basePrice: 55,
    description:
      "1 oz de espresso combinado con 3 oz de leche vaporizada, creando una bebida suave y cremosa.",
    image: latte,
    defaultTemp: "Caliente",
    fixedTemp: null,
  },
  {
    id: 6,
    name: "Moka",
    category: "Café con leche",
    basePrice: 60,
    description:
      "1 oz de espresso, 2 oz de leche vaporizada y nuestro delicioso chocolate de la casa.",
    image: moka,
    defaultTemp: "Caliente",
    fixedTemp: null,
  },
  {
    id: 7,
    name: "Flat White",
    category: "Café con leche",
    basePrice: 50,
    description:
      "1 oz de espresso combinado con 2 oz de leche vaporizada, creando una bebida suave y cremosa con una capa fina de microespuma.",
    image: flatwhite,
    defaultTemp: "Caliente",
    fixedTemp: "Caliente",
  },
  {
    id: 8,
    name: "Matcha Latte",
    category: "Sin café",
    basePrice: 60,
    description:
      "Leche vaporizada mezclada con polvo de matcha de la casa, creando una bebida cremosa y llena de sabor.",
    image: matcha,
    defaultTemp: "Caliente",
    fixedTemp: null,
  },
  {
    id: 9,
    name: "Chai Latte",
    category: "Sin café",
    basePrice: 65,
    description:
      "Leche vaporizada con una mezcla de especias tradicionales de India, incluyendo canela, clavo, cardamomo y enebro.",
    image: chai,
    defaultTemp: "Caliente",
    fixedTemp: null,
  },
  {
    id: 10,
    name: "Horchata",
    category: "Sin café",
    basePrice: 55,
    description:
      "Una bebida refrescante hecha con leche de arroz, canela y azúcar, perfecta para los días calurosos.",
    image: horchata,
    defaultTemp: "Frío",
    fixedTemp: null,
  },
  {
    id: 11,
    name: "Tonic",
    category: "Los diferentes",
    basePrice: 70,
    description: "Café espresso con agua tónica y un toque de sabor a limón.",
    image: tonic,
    defaultTemp: "Frío",
    fixedTemp: "Frío",
  },
  {
    id: 12,
    name: "Carajillo",
    category: "Los diferentes",
    basePrice: 75,
    description:
      "Café espresso con un toque de licor de café, ideal para los amantes de los sabores intensos y con un toque de alcohol.",
    image: carajillo,
    defaultTemp: "Frío",
    fixedTemp: "Frío",
  },
];

export default products;
