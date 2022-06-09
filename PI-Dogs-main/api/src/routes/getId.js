const { Router } = require('express');
const {getId, createDog} = require('../controllers/Dog');

const router = Router();

router.get('/:id', getId)

router.post('/', createDog)



module.exports = router
