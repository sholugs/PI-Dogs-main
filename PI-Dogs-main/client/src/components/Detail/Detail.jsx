import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import style from './detail.module.css'
import { getId } from '../../redux/actions/actions'

function Detail() {
    const dispatch = useDispatch()
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate()

    let dog = useSelector((state) => state.detail)
    
    const {id} = useParams()

    useEffect(() => {
        dispatch(getId(id))
    }, [dispatch, id])


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
            <h4>origin : {dog.origin}</h4>
            <h4>weight min/kg: {dog.weightMin} weight max/kg: {dog.weightMax}</h4>
            <h4>height min/cm: {dog.heightMin} height max/cm: {dog.heightMax}</h4>
            <h4>life_span: {dog.life_span}</h4>
                </div> 
            </div>
            )
            : (
                <h1>loading</h1>
                )}
            </>
)}

export default Detail