const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200);
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.status(200);
    res.send('About Page');
});
app.all('*', (req, res) => {
    res.status(404);
    res.send('404 not found');
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
});

// app.get      - get request
// app.post     - post request
// app.put      - put request
// app.delete   - delete request
// app.all      - handles all request types
// app.use      -
// app.listen   - like http.listen