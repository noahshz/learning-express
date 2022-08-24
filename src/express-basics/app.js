const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}...`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen