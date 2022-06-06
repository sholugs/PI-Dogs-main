import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from '../NavBar/NavBar'
import Pagination from '../Pagination/Pagination'
import { getDogs, getTemperament } from '../../redux/actions/actions'
import style from './home.module.css'


function Home() {
    
    let dispatch = useDispatch()
    const navigate = useNavigate()
    
    let dogs = useSelector(state => state.allDogs)
    


    const [page, setPage] = useState(1)
    const [dogsPage, setDogsPage] = useState(8)
    
    const lastDog = page * dogsPage
    const firstDog = lastDog - dogsPage
    
    const totalDogsPage = dogs?.slice(firstDog, lastDog)

    const pagination = (pageNum) => {
        setPage(pageNum)
    }

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperament())
    }, [dispatch])
    
    // useEffect(() => {
    //     // const controller = new AbortController()
    //     // const signal = controller.signal
    //     let mounted = true
    //     dispatch(getTemperament())
    //     .then(() => {
    //         if (mounted){
    //             setLoading(false)
    //         }
    //     })
    //     return () => {
    //         mounted = false
    //     }
    // }, [dispatch])

    return (
    <>
    <div className={style.all}>

    <div>
        < SearchBar />
        <button className={style.formBtn} >
        <Link to={'/create'} >
            Formulario
        </Link>
        </button>
        
        </div>
        <div>
            <NavBar 
            setDogsPage = {setDogsPage}
            setPage = {setPage}
            />
        </div>
        <div key={page} >
            <Pagination 
            pagination={pagination}
            dogs={dogs.length}
            dogsPage={dogsPage}
            />
        </div>
        <div className={style.allCards} >
        {totalDogsPage?.map((el) => {
            return <section>
                <Card 
                key={el.id}
                name = {el.name}
                image = {el.image}
                weightMin = {el.weightMin}
                weightMax = {el.weightMax}
                temperament = {el.temperament}
                /> 
                <button onClick={() => navigate(`/dogs/${el.id}`) }>Detail</button>
                </section>
            
        })}
        </div>
        </div>
    </>
    )
}

export default Home