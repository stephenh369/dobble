const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");

// Create server and set it to use cors and body-parser
const app = express();
app.use(cors());
app.use(parser.json());

// Set up database connection and routers
MongoClient.connect("mongodb://localhost:27017")
  .then(client => {
    const db = client.db("dobble");
    const cardsCollection = db.collection("cards");
    const cardsRouter = createRouter(cardsCollection);
    app.use("/api/cards", cardsRouter)
  })
  .catch(console.error);

// Set up listener for requests from Client
app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
