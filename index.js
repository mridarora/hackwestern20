var http = require('http');
const port = 3000;
const express = require('express')
const app = express();

var mongodb = require('mongodb');
const { FORMERR } = require('dns');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://asamara5:leonard123@cluster0.zlty8.mongodb.net/<dbname>?retryWrites=true&w=majority";

const router = express.Router();

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("houses").collection("chaching");
});

app.use('/', express.static('static'));

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next()
  });

app.use(express.json());

app.use('/api/chaching', router);

//port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});