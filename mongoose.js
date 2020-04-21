const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/test-api", 
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ArjunBajpai:IAmArjun_Goa16@cluster0-5gpft.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});