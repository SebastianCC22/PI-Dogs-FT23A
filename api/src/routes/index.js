const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const routeDog = require('./Dog')
const routeDogs = require('./Dogs')
const routeTemperament = require('./Temperament')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", routeDogs)
router.use("/temperament", routeTemperament)
router.use("/dog", routeDog)

module.exports = router;
