const express = require("express");
const errorHandler = require("./error_handler");

const createRouter = collection => {
  const router = express.Router();

  // INDEX
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch(err => errorHandler(res, err));
  });

  return router;
};

module.exports = createRouter;
