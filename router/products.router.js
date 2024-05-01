const express = require("express");
const productsService = require("../services/products.service");
const validatorHandler = require("./../middleware/validator.handler");
const {CreateProducschema,UpdateProducschema,GetProducschema} = require("./../schemas/product.schema");


const router = express.Router();
const pService = new productsService();



router.get('/', async (req,res)=>{
   const products = await pService.find();
    res.json({
        products
    });
});
router.get('/:id',
validatorHandler(GetProducschema,"params"),
async (req,res,next)=>{
    try {
        const {id} = req.params;
        console.log("ID is: "+ id);
        const FindOne = await pService.findOne(id);
        res.json({
            FindOne
        });
    } catch (error) {
        next(error);
    }
 
});

router.post('/',(req,res)=>{
    const body = req.body;
    const createP = pService.create(body);
    
    res.status(201).json({
        message: "Created",
        data: {
            createP
        }
    });
});

router.patch('/:id',
validatorHandler(GetProducschema,"params"),
validatorHandler(UpdateProducschema,"body"),
async (req,res,next)=>{
    
    const body = req.body;
   
    const {id} = req.params;
    try {
        const updateP = await pService.update(id,body);
        res.status(201).json({
            message: "Update",
            data: {
                updateP
            }
        });
    } catch (error) {
        next(error);
    }
});
router.delete('/:id', async (req,res,next)=>{
    
    try {
        const {id} = req.params;
        const deleteP = await pService.delete(id);
        res.json(deleteP);
    } catch (error) {
        next(error);
    }
});
module.exports = router;