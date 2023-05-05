var express = require('express');
var router = express.Router();

const plotController = require('../controllers/plotController');

router
  .route('/')
  .post(plotController.nuevoPlotCommercial)
  .get(plotController.getAllPlot);

router
  .route('/:id')
  .get(plotController.getPlot)
  .put(plotController.editPlot)
  .delete(plotController.removePLot);

module.exports = router;
