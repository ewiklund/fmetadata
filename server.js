'use strict';

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// require and use "multer"...
const multer = require("multer");
const upload = multer({dest:'uploads/'});
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// app.get("/", function (req, res) {
//      res.sendFile(__dirname + "/public/index.html");
//   });

app.post("/upload", upload.single('upfile'), function(req, res, next){
  return res.json(req.file);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Node.js listening ...");
});
