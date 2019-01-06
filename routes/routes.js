let express = require('express');
// Handler Imports
let serviceHandler = require('../handlers/service-handler');

let router = express.Router();

router.get('/serviceInfo', serviceHandler);

module.exports = router;
