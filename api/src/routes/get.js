const { Router } = require('express');
const {allInfo, getApiName, getDbName, getDbInfo} = require('../controllers/Dogs');


const router = Router();

router.get('/', async(req, res) =>{
    try {

        let { name } = req.query;

        if (name){
            name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
            
            let names = await allInfo()
            
            names = names.filter(el => el.name.includes(name))
            
            names !== undefined
            ? res.status(200).json(names)
            : res.status(404).json('no ta bro')
            // return (await getApiInfo()).concat(await getDbInfo())
            
            // all = all.filter(el => el.name.includes(name))
            // res.status(200).json(all)
            
        } else {
            res.status(200).json(await allInfo());
        }
    } catch (err){
        console.log(err)
    }

});

// router.get('/', async (req, res) => {
//     const { name } = req.query;
//     if (name){
//         let apiNames = await getApiName(name)
//         res.status(200).send
//     }
// })



module.exports = router;