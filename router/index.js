const express = require("express");
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');


function routerAPI(app){
    const router = express.Router();
    app.use('/API/v1',router);
    router.use('/products',productsRouter);
    router.use('/categories',categoriesRouter);
}

module.exports = routerAPI;