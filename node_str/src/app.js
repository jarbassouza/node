'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect(
  "mongodb+srv://jarbas:a100ae1318@cluster0.ekl1odb.mongodb.net/?retryWrites=true&w=majority"
);

//Carrega Models
const Product = require("./models/product");

//Carrega as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
