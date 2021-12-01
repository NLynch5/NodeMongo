//to set up connection to mongo

//need to require the library that we are using (mongodb) - npm i mongodb
const { MongoClient } = require("mongodb");

//then need to require dotenv which allows you to seperate secrets from your srouce code - npm i dotenv
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

//need to create a function to talk to our db
const connection = async (crudFunc, dataObj) => {
  //try block to check it works and shows an error if not
  try {
    await client.connect();
    console.log("connection");
    const db = client.db("TestDb"); //collection creation
    const collection = db.collection("movies");
    await crudFunc(collection, dataObj);
    client.close();
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
