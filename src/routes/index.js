const { Router } = require('express');
const router = Router();

// Rutas
router.get('/test', (req, res) => {
    const data = {
        "name": "Carmen",
        "website": "Zapatos"
    }
    res.json(data);
});

module.exports = router;