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
app.get('/api/users', (req, res) => {
    res.json(users);
});


app.listen(5000, () => {
    console.log(`server is listening on port 5000...`);
})