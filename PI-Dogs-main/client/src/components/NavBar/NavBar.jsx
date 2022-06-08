import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortName, sortTemperament, sortApiDb, orderWeightMin, getDogs, getTemperament } from '../../redux/actions/actions'
import { useNavigate } from 'react-router-dom'
import style from './navbar.module.css'

export default function NavBar({setPage, handleSortName}) {
    let dispatch = useDispatch()
    
    let temperaments = useSelector(state => state.temperament)

    const [order, setOrder] = useState('')

    // useEffect(() => {
    //     dispatch(getDogs());
    // }, [dispatch]);

    function handleAllDogs (){
        window.location.reload(false)
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

    // function handleSelect(e) {
    //     e.preventDefault()
    //     dispatch(filterBy(e.target.value));
    // }
    
    // function handleSelected(e) {
    //     dispatch(getDogs());
    // }


    return (
    <>
    <div>

    <select className={style.nameSel} name='Alpha' onChange={(e) => handleSortName(e)}>
        <option>Alpha</option>
        <option value='A-Z'>A-Z</option>
        <option value='Z-A'>Z-A</option>
        </select>

        <select className={style.weightSel} name='all' onChange={(e) => handleOrderWeight(e)} >
        <option>weight</option>
        <option value='weightMin'>min weight</option>
        <option value='weightMax'>max weight</option>

        </select>
        <div>
        <button onClick={handleAllDogs}>Charge Dogs</button>
        </div>

    <select className={style.createSel} name='all' onChange={(e) => handleApiOrDb(e)} >
        <option value='all' >all</option>
        <option value='api'>api</option>
        <option value='created' >created</option>
    </select>

        <div onChange={(e) => handleSortTemperament(e)}>

        <label>Choose a temperament from this list: 
        <input className={style.inputSel} type='search' list='data' />
        </label>
    <datalist id='data' >
            {temperaments && temperaments.map(el =>
            < option key={el.id} value={el.name} > {el.name} </option>
            )}
    </datalist>
            </div>
            </div>
    


    </>
    
    )
}
