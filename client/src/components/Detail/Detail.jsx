import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import style from './detail.module.css'

function Detail() {
    const [dog, setDog] = useState();
    
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/Dog/${id}`)
        .then((response) => {
            setDog(response.data)
        })
    }, [id])


    return (
    <>

        {dog ? ( 
            <div className={style.all} >
                <article>
            <Link to={'/dogs'}><button className={style.btn} >volver</button></Link>
                </article>
                <div className={style.card}>
            <h2>{dog.name}</h2>
            <img  src={dog.image} alt='lala' className={style.image} />
            <h5>temperaments: {dog.temperament}</h5>
            <h4>weight min/kg: {dog.weightMin} weight max/kg: {dog.weightMax}</h4>
            <h4>height min/cm: {dog.heightMin} height max/cm: {dog.heightMax}</h4>
            <h4>life_span: {dog.life_span}</h4>
                
                </div> 
            </div>)
            : (
                <h1>loading</h1>
            )}
            </>
)}

export default Detail