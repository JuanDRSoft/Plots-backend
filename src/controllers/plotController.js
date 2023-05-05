const PlotCommercial = require('../models/commercialPlot');

const nuevoPlotCommercial = async (req, res) => {
  const admin = new PlotCommercial(req.body);

  try {
    const adminAlmacenado = await admin.save();
    res.json(adminAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const getAllPlot = async (req, res) => {
  const plot = await PlotCommercial.find();
  res.json(plot);
};

const getPlot = async (req, res) => {
  const { id } = req.params;

  const admin = await PlotCommercial.findById(id);

  if (!admin) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.message });
  }
  res.json(admin);
};

const editPlot = async (req, res) => {
  const { id } = req.params;

  const admin = await PlotCommercial.findById(id);

  if (!admin) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.message });
  }

  admin = req.body || admin;

  try {
    const adminAlmacenado = await admin.save();
    res.json(adminAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const removePLot = async (req, res) => {
  const { id } = req.params;

  const admin = await PlotCommercial.findById(id);

  if (!admin) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.message });
  }

  try {
    await admin.deleteOne();
    res.json({ msg: 'PlotCommercial Eliminado' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  nuevoPlotCommercial,
  getAllPlot,
  getPlot,
  editPlot,
  removePLot,
};
