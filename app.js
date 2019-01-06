let express = require('express');
let bodyParser = require('body-parser');
let routes = require('./routes/routes');

let app = express();
app.use(bodyParser.json());

app.get('/hc', (req, res, next) => {
    res.status(200);
    res.json({
        status: "Healthy"
    });
});

app.use(routes);

// Catch 404
app.use((req, res, next) => {
    res.status(404);
    res.json({
        message: "Not Found"
    });
});

module.exports = app;