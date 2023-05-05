var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.route('/').post(userController.nuevoPlot).get(userController.getAllPlot);

router
  .route('/:id')
  .get(userController.getPlot)
  .put(userController.editPlot)
  .delete(userController.removePLot);

module.exports = router;
