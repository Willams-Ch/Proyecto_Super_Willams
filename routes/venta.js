var express = require('express');
var router = express.Router();
var control = require("../controllers/venta.controller");

/* GET home page. */
router.get('/nuevo', control.nuevoform);
router.post('/nuevo', control.nuevo);
module.exports = router;
