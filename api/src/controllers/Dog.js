const {Dog, Temperament} = require('../db')
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
        // let filterName = apiName.find(el => el.id == id)
        // if(filterName){
        //     res.status(200).json(filterName)
        // }

        else {
            res.status(404).send('no existe bro')
        }
    }
//}

const createDog = async(req, res) => {
    try {
        const { 
            name,
            image, 
            heightMin, 
            heightMax, 
            weightMin, 
            weightMax, 
            life_span,
            temperament
            } = req.body
    
    
            let created = await Dog.create({
                name,
                image,
                heightMin,
                heightMax,
                weightMin,
                weightMax,
                life_span,
            });
            
            temperament.map(async (el) => {
                try {
                    let allTemperament = await Temperament.findAll({
                        where: { name: el },
                    })
            
                    created.addTemperament(allTemperament)
    
                } catch(err){
                    console.log(err)
                }
            })
            
    
            res.status(201).send('se creo bro')
        } catch (err){
            console.log(err)
        }
    }

module.exports = {
    getId,
    createDog
}