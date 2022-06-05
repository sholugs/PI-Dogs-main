import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getName } from '../../redux/actions/actions'
import style from './searchbar.module.css'

function SearchBar() {
    let dispatch = useDispatch()
    const [search, setSearch] = useState('')

    // let dog = useSelector(state => state.allDogs)

    useEffect(() => {
        dispatch(getName())
    }, [dispatch])

    const onSubmit = (e) => { 
        e.preventDefault()
        dispatch(getName(search))
    }

    function inputChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
    <>
    <input onChange={(e) => inputChange(e)} 
    className={style.input}
    type='text'
    placeholder='dogs'
    value={search}
    ></input>
    <button className={style.btn} onClick={(e) => onSubmit(e)} type='submit'>Buscar</button>
    </>
    )
}

export default SearchBar