const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let commandes = [
  {
    id: 1,
    date: '2024-06-20',
    statut: 'en cours',
    items: [
      {
        itemProduct: {
          productID: "EFRRR",
          productTitle: "IPhone 14",
          productImage: "iphone-14.png",
          category: "phone",
          productPrice: 11000,
          quantity: 1
        },
        quantity: 2
      }
    ]
  },
  {
    id: 2,
    date: '2024-06-18',
    statut: 'expédiée',
    items: [
      {
        itemProduct: {
          productID: "SQZEE",
          productTitle: "Smart TV 48 Pouce",
          productImage: "tv-samsung-48.png",
          category: "smarttv",
          productPrice: 8000,
          quantity: 1
        },
        quantity: 1
      },
      {
        itemProduct: {
          productID: "REFAZER",
          productTitle: "Tablette SAM 12 Pouce",
          productImage: "samsung-tab-12.png",
          category: "tablet",
          productPrice: 2334,
          quantity: 1
        },
        quantity: 3
      }
    ]
  }
];


let cart = [
  {
    itemProduct: {
      productID: "EFRRR",
      productTitle: "IPhone 14",
      productImage: "iphone-14.png",
      category: "phone",
      productPrice: 11000,
      quantity: 1
    },
    quantity: 2
  },
  {
    itemProduct: {
      productID: "SQZEE",
      productTitle: "Smart TV 48 Pouce",
      productImage: "tv-samsung-48.png",
      category: "smarttv",
      productPrice: 8000,
      quantity: 1
    },
    quantity: 1
  }
];

app.get("/api/products", (req, res) => {
  let products = [
    {
      productID: "REFAZER",
      productTitle: "Tablette SAM 12 Pouce",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      productPrice: "2334",
    },
    {
      productID: "EFRRR",
      productTitle: "IPhone 14",
      productImage: "iphone-14.png",
      category: "phone",
      productPrice: "11000",
    },
    {
      productID: "REFAZER",
      productTitle: "Tablette SAM 12 Pouce",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      productPrice: "2334",
    },
    {
      productID: "SQZEE",
      productTitle: "Smart TV 48 Pouce",
      productImage: "tv-samsung-48.png",
      category: "smarttv",
      productPrice: "8000",
    },
    {
      productID: "RTVVV",
      productTitle: "IPhone 14",
      productImage: "iphone-14.png",
      category: "phone",
      productPrice: "11000",
    },
    {
      productID: "SQZEE",
      productTitle: "Smart TV 48 Pouce",
      productImage: "tv-samsung-48.png",
      category: "smarttv",
      productPrice: "8000"
    },
    {
      productID: "REFAZER",
      productTitle: "Tablette SAM 12 Pouce",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      productPrice: "2334",
    },
    {
      productID: "SQZEE",
      productTitle: "Smart TV 48 Pouce",
      productImage: "tv-samsung-48.png",
      category: "smarttv",
      productPrice: "8000"
    },

    {
      productID: "REFAZER",
      productTitle: "Tablette SAM 12 Pouce",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      productPrice: "2334",
    },
  ];
  res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.get("/api/commandes", (req, res) => {
  res.send(commandes);
});
const port = 3000;

app.listen(port, () => console.log(`API Server listening on port ${port}`));


