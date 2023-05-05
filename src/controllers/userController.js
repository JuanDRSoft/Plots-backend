const Plot = require('../models/plot');

const nuevoPlot = async (req, res) => {
  const admin = new Plot(req.body);

  try {
    const adminAlmacenado = await admin.save();
    res.json(adminAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const getAllPlot = async (req, res) => {
  const plot = await Plot.find();
  res.json(plot);
};

const getPlot = async (req, res) => {
  const { id } = req.params;

  const admin = await Plot.findById(id);

  if (!admin) {
    const error = new Error('No Encontrado');
    return res.status(404).json({ msg: error.message });
  }
  res.json(admin);
};

const editPlot = async (req, res) => {
  const { id } = req.params;

  const admin = await Plot.findById(id);

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

  const admin = await Plot.findById(id);

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
  nuevoPlot,
  getAllPlot,
  getPlot,
  editPlot,
  removePLot,
};
