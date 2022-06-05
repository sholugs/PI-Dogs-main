const { Router } = require('express');
const {getApiName, getDbName} = require('../controllers/Dogs');


const router = Router();


// router.get('/', async (req, res) => {
//     const { name } = req.query;
//     if (name){
//         let apiNames = await getApiName(name)
//         let dbNames = await getDbName()
//         dbNames = dbNames.map((el) =>{
//             return {
//                 id: el.id,
//                 name: el.name,
//             }
//         })
//         dbNames = dbNames.filter(el => el.name.includes(name))
        

//         res.status(200).send(apiNames)
//     }
// })

module.exports = router