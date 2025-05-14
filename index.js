const express = require('express')
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product.model.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello reddy')
})


app.get ('/api/products', async (req,res) => {
    try {
const products = await Product.find({});
res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({message : error.message}); 
    }
})

app.post ('/api/products', async(req,res) => {
    try {
     const product =  await Product.create(req.body);
     res.status(200).json(product);
    } catch (error) {
       res.status(500).json({message : error.message});
        
    }
})


mongoose.connect ("mongodb+srv://rahulwebdeveloper12:aPUOuSXPRlkiU7tY@learning.uayddmu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=learning")
.then(() => {
    console.log('database connected successfully');
    app.listen(3000, () => {
    console.log('server is running successful on port 3000')
})
}).catch(()=> {
    console.log('database not connected')
})