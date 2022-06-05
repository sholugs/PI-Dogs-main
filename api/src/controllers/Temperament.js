const axios = require('axios')
const {Dog, Temperament} = require('../db')
const {Op} = require('sequelize')
const { getApiInfo } = require('./Dogs')



const getTemperament = async (_req, res) => {
    let apiTemperament = await getApiInfo()
    let dbTemperament = apiTemperament.map(el => el.temperament).join().split(',')
    dbTemperament = dbTemperament.map(el => el.trim())
        dbTemperament.forEach(async el => {
            if(el !== '')
            await Temperament.findOrCreate({ 
                    attributes: ['name'],
                    where: {
                        name: el
                    }
                })
        })
        const allTemperaments = await Temperament.findAll()
        res.status(200).send(allTemperaments)
    }

module.exports = getTemperament

