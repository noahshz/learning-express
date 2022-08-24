const express = require('express');
const app = express();

const {products, users} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>API - Test</h1><a href="/api/products">Products</a><a href="/api/users">Users</a>');
});

// only request id, name, image -> descripiton only when visit product
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id,name,image}
    });
    res.json(newProducts);
});

// find single prod by id
app.get('/api/products/:productID', (req, res) => {
    const params = req.params;
    const productID = params.productID;

    const singleProduct = products.find((product) => product.id === Number(productID));

    if(!singleProduct) {
        return res.status(404).send('Product does not exists');
    }
    return res.json(singleProduct);
});

// access query params
app.get('/api/v1/query', (req, res) => {
    const {search,limit} = req.query;
    let sortedProducts = [...products]

    // sortedProducts filter for products which starts with the search query param
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    // sortedProducts limioted by query param
    if(limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    // check result array
    if(sortedProducts.length < 1) {
        return res.status(200).json({sucess:true,data:[]});
    }
    res.status(200).json(sortedProducts);
});


app.listen(5000, () => {
    console.log(`server is listening on port 5000...`);
})