var poloniex = require("./poloniex");
var bitfinex = require("./bitfinex");
var bittrex = require("./bittrex");

const mappers = {
  poloniex,
  bittrex,
  bitfinex
}

module.exports = mappers;
