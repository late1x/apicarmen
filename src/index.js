const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.set('json spaces', 2);

app.use(morgan('dev'));

// Datos de películas
const zapatosData = [
  {
    "id": 1,
    "Estilo": "Sportline",
    "Modelo": 2343,
    "PrecioPorPar": "$5",
    "Imagen": "1.jpeg"
  },
  {
    "id": 2,
    "Estilo": "Forever 18",
    "Modelo": 6557,
    "PrecioPorPar": "$6",
    "Imagen": "2.jpeg"
  },
  {
    "id": 3,
    "Estilo": "Sportline Pala",
    "Modelo": 9878,
    "PrecioPorPar": "$4",
    "Imagen": "3.jpeg"
  },
  {
    "id": 4,
    "Estilo": "Thinner",
    "Modelo": 7867,
    "PrecioPorPar": "$7",
    "Imagen": "4.jpeg"
  },
  {
    "id": 5,
    "Estilo": "Sportline Negro/Amarillo",
    "Modelo": 9599,
    "PrecioPorPar": "$8",
    "Imagen": "5.jpeg"
  },
  {
    "id": 6,
    "Estilo": "Kangooros",
    "Modelo": 5557,
    "PrecioPorPar": "$",
    "Imagen": "6.jpeg"
  },
  {
    "id": 7,
    "Estilo": "Sportile Negro/Fiusha",
    "Modelo": 9599,
    "PrecioPorPar": "$8",
    "Imagen": "7.jpeg"
  },
  {
    "id": 8,
    "Estilo": "Sportine Rosa",
    "Modelo": 6756,
    "PrecioPorPar": "$5",
    "Imagen": "8.jpeg"
  },
  {
    "id": 9,
    "Estilo": "Pink Rojo",
    "Modelo": 3342,
    "PrecioPorPar": "$3",
    "Imagen": "9.jpeg"
  },
  {
    "id": 10,
    "Estilo": "Dorothy Gaynor",
    "Modelo": 5546,
    "PrecioPorPar": 4,
    "Imagen": "10.jpeg"
  }
];

app.get('/api/zapatos', (req, res) => {
  res.json(zapatosData);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
