import React from 'react'
import { Link } from 'react-router-dom'
import style from './landing.module.css'
import image from '../img/descarga.jpeg'

function Landing() {
    return (
    <>
    <div className={style.all} >
        {/* <img className={style.image} src={image} alt='lala'/> */}
        <h1 className={style.title} >You came to play?</h1>
        <Link to={'/dogs'} >
        <button className={style.button} >Yes.then(home)</button>
        </Link>
    </div>
    </>
    )
}

export default Landing