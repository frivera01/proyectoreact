const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url); 
    console.log('Body:', req.body); 
    next();
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((err) => {
  console.error('Error al conectar a MongoDB', err);
});

// Rutas
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/contact', require('./routes/contactRoutes')); 
app.use('/api/orders', require('./routes/orderRoutes')); 

app.listen(PORT, () => {
  console.log(`Servidor está corriendo en el puerto ${PORT}`);
});
