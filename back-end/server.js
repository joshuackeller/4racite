const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/runners', {
  useNewUrlParser: true
});

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const itemSchema = new mongoose.Schema({
  name: String,
  age: String,
  path: String,
  won: String,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item in the : takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    path: req.body.path,
    age: req.body.age,
    won: req.body.won,
  });
  try {
    await item.save();
    res.send(item);
    console.log(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
    const foundItem = Item.findOne({
      _id: req.params.id
    });
    await foundItem.updateOne({
      name: req.body.name,
      age: req.body.age,
      won: req.body.won,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



const cItemSchema = new mongoose.Schema({
  cname: String,
  comment: String,
  time: String,
});

// Create a model for items in the museum.
const cItem = mongoose.model('cItem', cItemSchema);

app.post('/api/comments', async (req, res) => {
  const citem = new cItem({
    cname: req.body.cname,
    comment: req.body.comment,
    time: req.body.time,
  });
  try {
    await citem.save();
    res.send(citem);
    console.log(citem)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/comments', async (req, res) => {
  try {
    let citems = await cItem.find();
    res.send(citems);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/comments/:id', async (req, res) => {
  try {
    await cItem.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/comments/:id', async (req, res) => {
  try {
    const citem = cItem.findOne({
      _id: req.params.id
    });
    await citem.updateOne({
      cname: req.body.cname,
      comment: req.body.comment,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});





app.listen(3000, () => console.log('Server listening on port 3000!'));
