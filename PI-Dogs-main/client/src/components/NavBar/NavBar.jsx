import React from 'react'
import { useSelector } from 'react-redux'
import style from './navbar.module.css'

export default function NavBar({ handleSortName, handleOrderWeight, handleApiOrDb, handleSortTemperament}) {
    
    let temperaments = useSelector(state => state.temperament)


    // useEffect(() => {
    //     dispatch(getDogs());
    // }, [dispatch]);

    function handleAllDogs (){
        window.location.reload(false)
    }

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
        <div>
        <button className={style.btn} onClick={handleAllDogs}>Charge Dogs</button>
        </div>
            </div>
            </div>
    


    </>
    
    )
}
