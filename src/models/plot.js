var mongoose = require('mongoose');

const PlotSchema = mongoose.Schema({
  plotNo: String,
  block: String,
  size: String,
  status: String,
  corner: String,
  extraLand: String,
  marlas: String,
  mainDoubleRoad: String,
  filling: String,
  streetNo: String,
});

const Plot = mongoose.model('plots', PlotSchema);
module.exports = Plot;
