var mongoose = require('mongoose');

//conection bd
const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://juandrsoft:hkEWaNq2AjhLEbAS@cluster0.jkl85eb.mongodb.net/Plot',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB Conectado en: ${url} `);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = conectarDB;
