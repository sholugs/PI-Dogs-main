const { Router } = require('express');
const {allInfo, getApiName, getDbName, getDbInfo} = require('../controllers/Dogs');


const router = Router();

router.get('/', async(req, res) =>{
    let { name } = req.query;

    let all = await allInfo()
    if (name){
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()


        let theName = allNames.filter(el => el.name.includes(name))

        theName 
        ? res.status(200).json(theName)
        : res.status(404).json('no ta bro')
        // return (await getApiInfo()).concat(await getDbInfo())

        // all = all.filter(el => el.name.includes(name))
        // res.status(200).json(all)

    } if(!name) {
        res.status(200).send(all);
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