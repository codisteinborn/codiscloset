const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Prods collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/productlist",
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
        date: new Date(Date.now())
    },
    {
        category: "bottoms",
        name: "pants",
        price: 30,
        size: "Large",
        date: new Date(Date.now())
    },
    {
        category: "dresses",
        name: "dress",
        price: 25,
        size: "Small",
        date: new Date(Date.now())
    },
    {
        category: "bottoms",
        name: "trousers",
        price: 36,
        size: "Small",
        date: new Date(Date.now())
    },
    {
        category: "dresses",
        name: "maxi dress",
        price: 39,
        size: "Small",
        date: new Date(Date.now())
    },
    {
        category: "tops",
        name: "blouse",
        price: 40,
        size: "Large",
        date: new Date(Date.now())
    },
    {
        category: "tops",
        name: "crop top",
        price: 15,
        size: "X-Small",
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