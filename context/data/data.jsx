// Data hardcodeada para integrar al context.

export const ListadoRestaurantes = [
    {
      id: '1',
      strName: 'McDonalds',
      strImageURL: 'https://brandemia.org/contenido/subidas/2022/10/marca-mcdonalds-logo-1024x572.png',
      strDescription: 'Restaurante de comida rapida, se hacen hamburguesas, papas fritas, ensaladas, helados, etc.',
      strAddress: 'Dodera e Ituzango',
      menus: [
        {
          id: '1',
          strName: 'McQueso',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Hamburguesa con queso, con todo el sabor de McDonalds.',
          strPrice: '109$',
          strCategory: 'Hamburguesas'
        },
        {
          id: '2',
          strName: 'McZeta',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Hamburguesa con queso, tomate y panceta, con todo el sabor de McDonalds.',
          strPrice: '199$',
          strCategory: 'Hamburguesas'
        },
        {
          id: '3',
          strName: 'BigMac',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Hamburguesa con queso, lechuga, tomate, cebolla, pepinillo, mostaza y ketchup, con todo el sabor de McDonalds.',
          strPrice: '250$',
          strCategory: 'Hamburguesas'
        }
      ],
      shows: [
        {
          id: '1',
          strName: 'Show de payasos',
          strPrice: '200$',
          strDescription: 'Un show perfecto para los niños, para que ellos se entretengan mientras tu disfrutas de tu comida.',
          strImageURL: 'https://www.latercera.com/resizer/y9zUyYDfILDnAK1NWuLmydJxcGY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/I23PDQHJMZG2XLUUNDAOH46YZ4.jpg'
        },
        {
          id: '2',
          strName: 'Show de magia',
          strPrice: '250$',
          strDescription: 'Veremos magos hacer cosas sorprendentes y que te dejaran boca abierto.',
          strImageURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/b9/35.jpg'
        }
      ]
    },
    {
      id: '2',
      strName: 'Subway',
      strImageURL: 'https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/YXEISR6SLRGXZMWWGSVZJBVYHY.jpg',
      strDescription: 'Restaurante de comida rapida, se hacen burritos, pizzas y refuerzos.',
      strAddress: 'Av. 18 de Julio y Yaguarón',
      menus: [
        {
          id: '1',
          strName: 'Sub de jamon',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Pan de distintos tipos, con los vegetales que tu mas quieras y el rico jamon de subway.',
          strPrice: '140$',
          strCategory: 'Burritos'
        },
        {
          id: '2',
          strName: 'Sub de pollo y panceta',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Pan de distintos tipos, con los vegetales que tu mas quieras y el buen pollo de subway.',
          strPrice: '200$',
          strCategory: 'Burritos'
        },
        {
          id: '3',
          strName: 'Sub de pollo teriyaki',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Pan de distintos tipos, con los vegetales que tu mas quieras y el rico pollo teriyaki de subway.',
          strPrice: '220$',
          strCategory: 'Burritos'
        }
      ],
      shows: []
    },
    {
      id: '3',
      strName: 'Churros Todo Rico',
      strImageURL: 'https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/03/27174350/schotis-portada-2-1024x683.jpg',
      strDescription: 'Local de venta de churros de todo tipo, rellenos de dulce de leche, crema o chocolate.',
      strAddress: 'Calle Gorlero y calle 19.',
      menus: [
        {
          id: '1',
          strName: 'Churro relleno de dulce de leche',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Crujiente y con dulce de leche calentito en su interior.',
          strPrice: '100$',
          strCategory: 'Churros',
          images: [

          ]
        },
        {
          id: '2',
          strName: 'Churro relleno de crema',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'El mejor gusto para los mejores churros, rellenos de crema pastelera.',
          strPrice: '100$',
          strCategory: 'Churros'
        },
        {
          id: '3',
          strName: 'Churro relleno de chocolate',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Simple pero rico, churro relleno de chocolate.',
          strPrice: '100$',
          strCategory: 'Churros'
        },
        {
          id: '4',
          strName: 'Churro normal',
          strImageURL: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg',
          strDescription: 'Churro normal',
          strPrice: '60$',
          strCategory: 'Churros'
        }
      ],
      shows: []
    },
    {
      id: '4',
      strName: 'Pizzeria La Rueda',
      strImageURL: 'https://www.shutterstock.com/image-vector/pizza-daily-fresh-vector-emblem-600w-1901059681.jpg',
      strDescription: 'Local de venta de pizzas de todo tipo. Puedes elegir la salsa, el queso y hasta los gustos!',
      strAddress: 'Av. 18 de Julio 1234',
      menus: [
        {
          id: '1',
          strName: '1M Pizza de muzzarella',
          strImageURL: 'https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-m.jpg',
          strDescription: 'Pizza de muzzarella',
          strPrice: '350$',
          strCategory: 'Pizzas'
        },
        {
          id: '2',
          strName: '1M Pizza de muzzarella c/ gustos',
          strImageURL: 'https://images.hola.com/imagenes',
          strDescription: 'Pizza de muzzarella con gustos a eleccion.',
          strPrice: '500$',
          strCategory: 'Pizzas'
        }
      ],
      shows: [
        {
          id: '1',
          strName: 'Show de traga-sables',
          strPrice: '120$',
          strDescription: 'Este es un show en el cual se vera expertos en la materia tragarse todo tipo de sables.',
          strImageURL: 'https://www.debate.com.mx/__export/1695731400392/sites/debate/img/2023/09/25/debate_tragasables.jpg_1902800913.jpg'
        },
        {
          id: '2',
          strName: 'Show de malabares',
          strPrice: '100$',
          strDescription: 'Malabaristas con objetos filosos y muy peligrosos.',
          strImageURL: 'https://www.crearteevents.com/wp-content/uploads/2016/03/malabares000.jpg'
        }
      ]
    }
  ]