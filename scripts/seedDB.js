const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Prods collection and inserts the prods/users below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://codisteinborn:codi@ds123129.mlab.com:23129/heroku_xc11c11n",
    {
        useMongoClient: true
    }
);

const prodSeed = [
    {
        category: "tops",
        name: "tshirt",
        price: 20,
        size: "Medium",
        image: "https://media.bonds.com.au/catalog/product/cache/1/small_image/300x450/9df78eab33525d08d6e5fb8d27136e95/C/W/CWT3I_28H_SD_1.jpg",
        date: new Date(Date.now())
    },
    {
        category: "bottoms",
        name: "pants",
        price: 30,
        size: "Large",
        image: "",
        date: new Date(Date.now())
    },
    {
        category: "dresses",
        name: "dress",
        price: 25,
        size: "Small",
        image: "",
        date: new Date(Date.now())
    },
    {
        category: "bottoms",
        name: "trousers",
        price: 36,
        size: "Small",
        image: "",
        date: new Date(Date.now())
    },
    {
        category: "dresses",
        name: "maxi dress",
        price: 39,
        size: "Small",
        image: "",
        date: new Date(Date.now())
    },
    {
        category: "tops",
        name: "blouse",
        price: 40,
        size: "Large",
        image: "",
        date: new Date(Date.now())
    },
    {
        category: "tops",
        name: "crop top",
        price: 15,
        size: "X-Small",
        image: "",
        date: new Date(Date.now())
    }
];

const userSeed = [
    {
        username: "codis",
        password: "cs123",
        date: new Date(Date.now())
    },
    {
        username: "molly",
        password: "molly",
        address: "123 Chicago Ave",
        date: new Date(Date.now())
    }
]

db.Prod
    .remove({})
    .then(() => db.Prod.collection.insertMany(prodSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });