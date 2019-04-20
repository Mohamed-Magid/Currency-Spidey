const express = require('express');
const app = express();
const apiRouter = require('./routes/api/api');
const homeRouter = require('./routes/home');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(apiRouter);
app.use(homeRouter);



app.listen(port, () => console.log(`Server is up and running on port ${port}`));