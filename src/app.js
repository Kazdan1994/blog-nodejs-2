const express = require('express');
const app = express();

require('./loaders')(app);

app.listen(3000, function () {
    console.log('Server running at : http://localhost:3000')
});
