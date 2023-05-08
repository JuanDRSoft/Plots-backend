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
  filling: String,
  streetNo: String,
  status: String,
  marlas: String,
});

const CommercialPlot = mongoose.model('commercialplots', CommercialPlotSchema);
module.exports = CommercialPlot;
