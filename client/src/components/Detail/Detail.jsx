import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import style from './detail.module.css'

function Detail() {
    const [dog, setDog] = useState();
    const navigate = useNavigate()
    
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/dog/${id}`)
        .then((response) => {
            setDog(response.data)
        })
    }, [id])


    return (
    <>

        {dog ? ( 
            <div className={style.all} >
                <article>
            <button className={style.btn} onClick={() => navigate(-1)} >volver</button>
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