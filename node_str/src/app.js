'use strict'

/*
Curso de Node.js - Aprenda a criar APIs RESTful com Node.js e MongoDB
Autor: balta.io
Data: 2020
*/

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
const Customer = require("./models/customer");
const Order = require("./models/order");


//Carrega as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");
const customerRoute = require("./routes/customer-route");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
  extended: false,
  })
);

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);

module.exports = app;
