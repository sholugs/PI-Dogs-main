import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from '../NavBar/NavBar'
import Pagination from '../Pagination/Pagination'
import { cleaner, getDogs, getTemperament, sortName } from '../../redux/actions/actions'
import style from './home.module.css'
import Spinner from '../Spinner/Spinner'

function Home() {
    
    let dispatch = useDispatch()
    const navigate = useNavigate()
    
    let dogs = useSelector(state => state.allDogs)
    
    // let loader = useSelector(state => state.loader)


    const [page, setPage] = useState(1)
    const [dogsPage, setDogsPage] = useState(8)
    

    let lastDog = page * dogsPage
    let firstDog = lastDog - dogsPage
    
    let totalDogsPage = dogs?.slice(firstDog, lastDog)

    const pagination = (pageNum) => {
        setPage(pageNum)
    }

    useEffect(() => {
        dispatch(getDogs())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])
    
    useEffect(() => {
        dispatch(getTemperament())
    },[dispatch])

    function handleSortName(e){
        dispatch(sortName(e.target.value))
        setPage(1)
    }

    // useEffect(() => {
    //     totalDogsPage = 
    // }, [dogs[0]])
    
    
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
            handleSortName = {handleSortName}
            />
        </div>
        <div key={page} >
            <Pagination 
            pagination={pagination}
            dogs={dogs.length}
            dogsPage={dogsPage}
            page = {page}
            />
        </div>
        <div className={style.allCards} >
        {totalDogsPage?.map((el) => {
            return <section key={el.id}>
                <Card 
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

// useEffect(() => {
//     let initState = videogamesApi?.length
//       ? videogamesApi.slice((page*15)-15, page*15)
//       : [];// eslint-disable-next-line
//       setVgs(vgs=initState);
//     }, [videogamesApi, videogamesApi[0],allSearchVideogames]);

//   useEffect(() =>{
//     let maxPageCalc
//     finder
//     ? maxPageCalc = Math.ceil(allSearchVideogames?.length/15)
//     : maxPageCalc = Math.ceil(videogamesApi?.length/15);
//     // eslint-disable-next-line
//     setMaxPage(maxPage = maxPageCalc)
//     // eslint-di

export default Home