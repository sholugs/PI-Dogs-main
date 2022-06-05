const axios = require('axios')
const {Dog, Temperament} = require('../db')
const {Op} = require('sequelize')

const getApiInfo = async (_req, res, next) => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
    let apiData = apiUrl.data.map((el) => {
        return {
            id: `${el.id}`,
            name: el.name,
            image: el.image.url,
            temperament: el.temperament ? el.temperament : 'Friendly',
            heightMin: parseInt(el.height.metric.split(' - ')[0]) ? parseInt(el.height.metric.split(' - ')[0]) : 20,
            heightMax: parseInt(el.height.metric.split(' - ')[1]) ? parseInt(el.height.metric.split(' - ')[1]) : 40,
            weightMin: parseInt(el.weight.metric.split(' - ')[0]) ? parseInt(el.weight.metric.split(' - ')[0]) : 20,
            weightMax: parseInt(el.weight.metric.split(' - ')[1]) ? parseInt(el.weight.metric.split(' - ')[1]) : 40,
            life_span: el.life_span,
        }
    })
    return apiData
}

const getDbInfo = async () => {

    const dbData = await Dog.findAll({
            attributes: ['id', 'name', 'image', 'heightMin', 'heightMax', 'weightMin', 'weightMax', 'life_span'],
            include: {
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                    raw: true
                },
            }
    }).then((response) => response.map(el => {
        return {
            id: el.id,
            name: el.name,
            image: el.image,
            temperament: el.temperament ? el.temperament : 'Friendly',
            heightMin: el.heightMin,
            heightMax: el.heightMax,
            weightMin: el.weightMin,
            weightMax: el.weightMax,
            life_span: el.life_span,
        }
    }));

        return dbData
}


const allInfo = async () => {    
    return (await getApiInfo()).concat(await getDbInfo())
}


// const getApiName = async (name) => {
//     const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
//     let apiData = apiUrl.data.map((el) => {
//         return {
//             id: el.id,
//             name: el.name,
//             // image: 
//             heightMin: parseInt(el.height.metric.split(' - ')[0]) ? parseInt(el.height.metric.split(' - ')[0]) : 20,
//             heightMax: parseInt(el.height.metric.split(' - ')[1]) ? parseInt(el.height.metric.split(' - ')[1]) : 40,
//             weightMin: parseInt(el.weight.metric.split(' - ')[0]) ? parseInt(el.weight.metric.split(' - ')[0]) : 20,
//             weightMax: parseInt(el.weight.metric.split(' - ')[1]) ? parseInt(el.weight.metric.split(' - ')[1]) : 40,
//             life_span: el.life_span,
//             temperament: el.temperament ? el.temperament : 'Friendly',
//             image: el.reference_image_id ? `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg` : undefined
//     }
// })
// return apiData
// }

// const getDbName = async (name) => {
//     let dbName = await Dog.findAll({
//         where: {
//             name: {
//                 [Op.substring]: name,
//             },
//         },
//         attributes: ['id', 'name', 'image', 'heightMin', 'heightMax', 'weightMin', 'weightMax', 'life_span'],
//         include: {
//             model: Temperament,
//             attributes: ['name'],
//             through: {
//                 attributes: [],
//                 raw: true
//             },
//         },
//     }).then((response) => response.map(el => {
//         return {
//             id: el.id,
//             name: el.name,
//             image: el.image,
//             temperament: el.temperament ? el.temperament : 'Friendly',
//             heightMin: el.heightMin,
//             heightMax: el.heightMax,
//             weightMin: el.weightMin,
//             weightMax: el.weightMax,
//             life_span: el.life_span,
//         }
//     }));

//         return dbName
// }


module.exports = {
    getApiInfo,
    getDbInfo,
    allInfo,
    // getApiName,
    // getDbName
}