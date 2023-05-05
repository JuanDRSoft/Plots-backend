var mongoose = require('mongoose');

const CommercialPlotSchema = mongoose.Schema({
  plotNo: String,
  block: String,
  size: String,
  society: String,
  corner: String,
  plotType: String,
  extraLand: String,
  mainDoubleRoad: String,
});

const CommercialPlot = mongoose.model('CommercialPlot', CommercialPlotSchema);
module.exports = CommercialPlot;
