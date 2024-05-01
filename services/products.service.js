const {faker} = require("@faker-js/faker");
const boom = require("@hapi/boom");


class productsService{
    
    constructor(){
        this.products = [];
        this.generateProducts();
    }

    generateProducts(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                image: faker.image.url(),
                isBlock: faker.datatype.boolean(),
            });
        };
        return this.products;
    }

    async create(data){
        const newProduct = {
            id: faker.string.octal({ length: 10 }),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }
    async find(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(this.products);
            }, 5000);
        });
    }

    async findOne(id){
        
        const product = this.products.find(item => item.id === id);
        console.log("el producto es" + product);
        if(!product){
            throw boom.notFound("Product not found");
        }
        if(product.isBlock){
            throw boom.conflict("Product is Block");
        }
        return product;
    }
    async update(id,changes){
        
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    console.log(this.products[index]);
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
    }
    async delete(id){
        const Product =  this.products.findIndex(item => item.id === id);
        if(Product === -1){
            throw boom.notFound("Product ID Not found")
        }
        this.products.splice(Product,1);
        return {message: 'true'};
    }
}


module.exports = productsService; 
