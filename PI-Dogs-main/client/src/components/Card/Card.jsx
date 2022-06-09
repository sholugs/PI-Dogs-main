import React from 'react'
import style from './card.module.css'

function Card({name, image, weightMin, weightMax, heightMin, heightMax, life_span, temperament, origin}) {
    return (
    <>
    <div className={style.card} >
    <h3>{name}</h3>
    <img className={style.image} src={image} alt='lala'
    />
    <h4>origin: {origin}</h4>
    <h4>min weight/kg: {weightMin}</h4>
    <h4>max weight/kg: {weightMax}</h4>
    <h5>temperaments: {temperament}</h5>
    </div>
    </>
    )
}

export default Card