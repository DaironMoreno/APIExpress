const express = require("express");
const router = express.Router();

router.get('/:categorieid/product/:idProduct',(req,res)=>{
    const  {categorieid,idProduct} = req.params;
    //res.send(`El parametro que envian es ${id}`);
    res.json({
        categorieid,
        idProduct
    });
});

module.exports = router;