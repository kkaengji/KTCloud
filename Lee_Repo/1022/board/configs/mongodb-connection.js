const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
module.exports = function (callback) {
  return MongoClient.connect(url, callback);
};
