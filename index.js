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

//create parent
router.put('/:parent_name', (req, res) => {
    const newParent = {
      _id: req.params.parent_name,
      children: [],
      createdRewards: [],
      familyPool: []
    };
    const collection = client.db("chaching").collection("houses");
    
    collection.find({ _id: newParent }).toArray(function (err, result) {
      if (result.length < 1) {
        collection.insertOne(newParent)
        res.send("Success");
      } else {
        res.status(404).send("Parent already exists")
      }
    });
  });

//child operations
router.put('/:parent_name/:child_name', (req, res) => {
    const newChild = {
      child: req.params.child_name,
      chores: [],
      tokens: [],
      rewards: [],
      achievments: []
    };
    const id = req.params.parent_name;

    const collection = client.db("chaching").collection("houses");
    
    collection.find({ _id: id}).toArray(function (err, result) {
      if (result.length > 0) {
        collection.updateOne({_id: req.params.parent_name}, {$push: {children: newChild}})
        
        res.send("Success");
      } else {
        res.status(404).send("Parent doesn't exist")
      }
    });
});

router.delete('/:parent_name/:child_name', (req, res) => {
    const id = req.params.parent_name;
    const collection = client.db("chaching").collection("houses");
    collection.find({_id: id}, {children: {$elemMatch: {child: req.params.child_name}}}).toArray(function (err, result) {
      if (result.length > 0) {
          console.log(result)
        collection.updateOne({_id: id}, {$pull: {children: {child: req.params.child_name}}}, false, true)
        res.send("Child deleted")
      } else {
        res.status(404).send("Child not found")
      }
    });
});

//token operations

//reward operations
router.post('/rewards/:parent_name', (req, res) => {
    const newReward = req.body;
    const id = req.params.parent_name;
    console.log(newReward)
    const collection = client.db("chaching").collection("houses");
    
    collection.find({ _id: id}).toArray(function (err, result) {
      if (result.length > 0) {
        collection.updateOne({_id: id}, {$push: {createdRewards: newReward}})
        res.send("Success");
      } else {
        res.status(404).send("Parent doesn't exist")
      }
    });
});
//achievment operations
//chore operations
router.post('/chores/:parent_name/:child_name', (req, res) => {
    const newChore = req.body;
    const id = req.params.parent_name;
    const child = req.params.child_name
    
    const collection = client.db("chaching").collection("houses");
    
    collection.find({_id: id}, {children: {$elemMatch: {child: req.params.child_name}}}).toArray(function (err, result) {
        if (result.length > 0) {
          collection.updateOne({_id: id, children: {$elemMatch: {child: req.params.child_name}}}, {$push: {children: {chores: {newChore}}}})
          res.send("Child deleted")
        } else {
          res.status(404).send("Child not found")
        }
    });
});