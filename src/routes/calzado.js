const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const calzado = require('../example.json');
console.log(calzado);

router.get('/', (req, res) => {
  res.json(calzado);
});

router.post('/', (req, res) => {
  const { Estilo, Modelo, PrecioPorPar } = req.body;
  if (Estilo && Modelo && PrecioPorPar) {
    const id = calzado.length + 1;
    const newCalzado = { id, ...req.body };
    calzado.push(newCalzado);
    res.json(calzado);
  } else {
    res.status(500).json({ error: 'Se generó un error grave.' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  _.each(calzado, (calza, i) => {
    if (calza.id == id) {
      calzado.splice(i, 1);
    }
  });
  res.json(calzado);
});

module.exports = router;
