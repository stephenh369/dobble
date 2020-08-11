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
    const scoresCollection = db.collection("scores");
    const symbolColleection = db.collection("symbols");
    const scoresRouter = createRouter(scoresCollection);
    const cardsRouter = createRouter(cardsCollection);
    const symbolsRouter = createRouter(symbolColleection);
    app.use("/api/cards", cardsRouter);
    app.use("/api/scores", scoresRouter);
    app.use("/api/symbols", symbolsRouter);
  })
  .catch(console.error);

// Set up listener for requests from Client
app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
