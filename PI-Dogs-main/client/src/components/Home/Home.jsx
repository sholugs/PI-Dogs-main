import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from '../NavBar/NavBar'
import Pagination from '../Pagination/Pagination'
import { getDogs, getTemperament, orderWeightMin, sortApiDb, sortTemperament, sortName } from '../../redux/actions/actions'
import style from './home.module.css'

function Home() {
    
    let dispatch = useDispatch()
    const navigate = useNavigate()
    
    let dogs = useSelector(state => state.allDogs)
    
    // let loader = useSelector(state => state.loader)


    const [page, setPage] = useState(1)
    const [dogsPage, setDogsPage] = useState(8)


    // eslint-disable-next-line no-unused-vars
    const [order, setOrder] = useState('')    

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
        setOrder(e.target.value)
        setPage(1)
    }
    function handleOrderWeight(e) {
        dispatch(orderWeightMin(e.target.value))
        setOrder(e.target.value)
        setPage(1)
    }

    function handleSortTemperament(e){
        dispatch(sortTemperament(e.target.value))
        setOrder(e.target.value)
        setPage(1)
    }

    function handleApiOrDb(e){
        dispatch(sortApiDb(e.target.value))
        setOrder(e.target.value)
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
            handleOrderWeight = {handleOrderWeight}
            handleApiOrDb = {handleApiOrDb}
            handleSortTemperament = {handleSortTemperament}
            />
        </div>
        <div key={page} >
            {dogs.length ?
            <Pagination 
            pagination={pagination}
            dogs={dogs.length}
            dogsPage={dogsPage}
            page = {page}
            />
            : null}
        </div>
        <div className={style.allCards} >
        {totalDogsPage?.map((el) => {
            return <section key={el.id}>
                <Card 
                name = {el.name}
                image = {el.image 
                    ? el.image
                :'https://i.ytimg.com/vi/0oBx7Jg4m-o/maxresdefault.jpg'}
                origin = {el.origin}
                weightMin = {el.weightMin}
                weightMax = {el.weightMax}
                temperament = {el.temperament}
                /> 
                <button className={style.detail} onClick={() => navigate(`/dogs/${el.id}`) }>Detail</button>
                </section>
            
})}
        </div>
        </div>
    </>
    )
}


export default Home