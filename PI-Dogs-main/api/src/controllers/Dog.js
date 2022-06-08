const { Dog, Temperament } = require('../db')
const {Op} = require('sequelize')
const {allInfo, getApiName} = require('../controllers/Dogs');

const getId = async(req, res) => {
    const { id } = req.params;
    let allId = await allInfo()
    // let apiName = await getApiName()
    // if(typeof id === 'string' && id.length > 15){
    //     let dbId = await Dog.findByPk(id, {
    //})
    //     res.status(200).send(dbId)
    // }
    // else {
        let filterId = allId.find(el => el.id === id)
        if(filterId){
            res.status(200).json(filterId)
        }
        // let filterName = apiName.find(el => el.id === id)
        // if(filterName){
        //     res.status(200).json(filterName)
        // }

        else {
            res.status(404).send('no existe bro')
        }
    }
//}

const createDog = async (req, res) => {
    try {
        const {
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        image,
        temperament,
      } = req.body; //Estos son los datos que me llegan por body

    const createdDog = await Dog.create({
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        image,
    });
    
            await Promise.all(temperament.map( async el => {
                await createdDog.addTemperament([
                    (
                        await Temperament.findOrCreate({
                    where: { name: el },
                }))[0].dataValues.id
                ])
            }));
        res.status(201).json(createdDog);
        
} catch (error) {
    console.log(error);
}
}
;


module.exports = {
    getId,
    createDog
}