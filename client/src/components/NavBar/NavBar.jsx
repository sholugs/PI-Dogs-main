import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortName, sortTemperament, sortApiDb, orderWeightMin, getTemperament, filterBy, getDogs } from '../../redux/actions/actions'
import style from './navbar.module.css'

export default function NavBar({setOrder, setPage}) {
    let dispatch = useDispatch()
    
    let temperaments = useSelector(state => state.temperament)

    function handleSortName(e){
        e.preventDefault()
        dispatch(sortName(e.target.value))
        setOrder(e.target.value)
        setPage(1)
    }

    function handleOrderWeight(e) {
        e.preventDefault()
        dispatch(orderWeightMin(e.target.value))
        setOrder(e.target.value)
        setPage(1)
    }

    function handleSortTemperament(e){
        e.preventDefault()
        dispatch(sortTemperament(e.target.value))
        setPage(1)
    }

    function handleApiOrDb(e){
        e.preventDefault()
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
    
    {/* <button value="DB" type="submit" onClick={(e) => handleSelect(e)}>MY DOGS</button> 
            <button value="ALL" type="submit" onClick={(e) => handleSelected(e)}>ALL</button> 
            <button value="API" type="submit" onClick={(e) => handleSelect(e)}>API</button>  */}


    </>
    
    )
}
