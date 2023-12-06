const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.set('json spaces', 2);

app.use(morgan('dev'));

const BanquetesData = [
  {
    idBanquete: "1",
    platoEntrada: "Ensalada",
    platoFuerte: "Filete",
    bebida: "Vino tinto",
    persona: 10,
    precioPorPersona: 25.0,
    cotizacionTotal: 250.0
  },
  {
    idBanquete: "2",
    platoEntrada: "Cóctel de Fruta",
    platoFuerte: "Carne de Puerco",
    bebida: "Coca Cola",
    persona: 7,
    precioPorPersona: 77.0,
    cotizacionTotal: 250.0
  },
  {
    idBanquete: "3",
    platoEntrada: "Cafe",
    platoFuerte: "Frijoles al chipotle",
    bebida: "Jugo de Naranja",
    persona: 12,
    precioPorPersona: 127.0,
    cotizacionTotal: 250.0
  },
  {
    idBanquete: "4",
    platoEntrada: "Pan Dulce",
    platoFuerte: "Enchiladas Verdes",
    bebida: "Sprite",
    persona: 3,
    precioPorPersona: 170.0,
    cotizacionTotal: 250.0
  },
  {
    idBanquete: "5",
    platoEntrada: "Empanadas",
    platoFuerte: "Enchiladas Rojas",
    bebida: "Coca Cola",
    persona: 4,
    precioPorPersona: 90.0,
    cotizacionTotal: 250.0
  }
];

const MobiliarioData = [
  {
    idProducto: "1",
    producto: "Sillas",
    cantidadProducto: 20,
    totalCotizacion: 500.0,
    imagen: "1.png"
  },
  {
    idProducto: "2",
    producto: "Tablones con Mantel",
    cantidadProducto: 6,
    totalCotizacion: 420.0,
    imagen: "2.jpeg"
  },
  {
    idProducto: "3",
    producto: "Mesas de Servicio con Mantel",
    cantidadProducto: 2,
    totalCotizacion: 70.0,
    imagen: "3.jpg"
  },
  {
    idProducto: "4",
    producto: "Plato Extendido",
    cantidadProducto: 15,
    totalCotizacion: 45.0,
    imagen: "4.jpeg"
  },
  {
    idProducto: "5",
    producto: "Cuchillo",
    cantidadProducto: 15,
    totalCotizacion: 37.50,
    imagen: "5.jpg"
  }
];


app.get('/api/mobiliario', (req, res) => {
  res.json(MobiliarioData);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
