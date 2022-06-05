const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRouter = require('./get')
// const getName = require('./getName')
const getTemperament = require('./temperament')
const getId = require('./getId')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/Dog', getRouter)
// router.use('/', getName)
router.use('/temperament', getTemperament)
router.use('/Dog', getId)

module.exports = router;
