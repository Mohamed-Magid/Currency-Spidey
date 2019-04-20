const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(apiRouter);



app.listen(port, () => {
    console.log('listening');
});