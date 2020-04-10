/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

// var expect = require("chai").expect;
// var MongoClient = require("mongodb");
const fetch = require("node-fetch");
// const CONNECTION_STRING = process.env.DB; //MongoClient.connect(CONNECTION_STRING, function(err, db) {});

async function getStock(stock) {
  const fetchResponse = await fetch(
    `https://repeated-alpaca.glitch.me/v1/stock/${stock}/quote`
  );
  const { symbol, latestPrice } = await fetchResponse.json();

  return {
    symbol,
    price: `${latestPrice}`,
  };
}

module.exports = function (app) {
  app.route("/api/stock-prices").get(async (req, res) => {
    const { stock, like } = req.query;

    const googleStock = await getStock("goog");
    console.log(req.query);

    res.json(googleStock);
  });
};
