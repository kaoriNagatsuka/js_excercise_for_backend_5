const router = require('./router');
const express = require('express');
const PORT = 3001;
const app = express();

app.use('/pages', router);
app.listen(PORT, () => { });