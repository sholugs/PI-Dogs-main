const { Router } = require('express');
const getTemperament = require('../controllers/Temperament');

const router = Router()

router.get('/', getTemperament )


module.exports = router
