import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getDogs, getTemperament, postDogs } from '../../redux/actions/actions'
import style from './form.module.css'


function Form() {
    const dispatch = useDispatch()
    const temperament = useSelector(state => state.temperament)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperament())
    }, [dispatch])

    
    const [input, setInput] = useState({
        name: '',
        temperament: [],
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        life_span: '',
        image: ''
        
    })

    const [button, setButton] = useState(true)
    
    function handleChange(e){
        const value = e.target.value
        const name = e.target.name
        setInput({
            ...input,
            [name]: value
        })
    }

    async function handleSelect(e){
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
    }

    async function handleSubmit (e) {
        e.preventDefault()
        dispatch(postDogs(input))
        alert('ta creado bro')
        navigate(-1)
        setInput({
            name: '',
            image: '',
            temperament: [],
            heightMin: '',
            heightMax: '',
            weightMin: '',
            weightMax: '',
            life_span: '',
        })
    }

    return (
    <>
    <form className={style.form} onSubmit={(e) => handleSubmit(e) }>
    <Link to= '/dogs' ><button className={style.backBtn} >Volver</button></Link>
        <h1>Cree su perro</h1>
            {/* id: 
                name: 
                heightMin:
                heightMax: 
                weightMin: 
                weightMax: 
                life_span: 
                image: */}
        
        
        <section >

        <div>
            <label>name:</label>
            <input 
            className={style.nameInp}
            type='text'
            value={input.name}
            name='name'
            onChange = {(e) => handleChange(e)}
            />
            </div>
            
            <div>
            <label>image:</label>
            <input 
            className={style.imageInp}
            type='text'
            value={input.image}
            name='image'
            onChange = {(e) => handleChange(e)}
            />
            </div>
            
            <div>
            <label>heightMin:</label>
            <input 
            className={style.heightMinInp}
            type='text'
            value={input.heightMin}
            name='heightMin'
            onChange = {(e) => handleChange(e)}
            />

            <label>heightMax:</label>
            <input 
            className={style.heightMaxInp}
            type='text'
            value={input.heightMax}
            name='heightMax'
            onChange = {(e) => handleChange(e)}
            />
            </div>

            <div>
            <label>weightMin:</label>
            <input 
            className={style.weightMinInp}
            type='text'
            value={input.weightMin}
            name='weightMin'
            onChange = {(e) => handleChange(e)}
            />

            <label>weightMax:</label>
            <input 
            className={style.weightMaxInp}
            type='text'
            value={input.weightMax}
            name='weightMax'
            onChange = {(e) => handleChange(e)}
            />
            </div>

            <label>life span:</label>
            <input 
            className={style.lifeInp}
            type='text'
            value={input.life_span}
            name='life_span'
            onChange = {(e) => handleChange(e)}
            />
            </section>
            
            <div>
            
            <select className={style.temp} onChange={(e) => handleSelect(e)}>
                    {temperament.map((el) => (
                <option className={style.op} value={el.name}>{el.name}</option>
                ))}
                    </select>
                    <ul className={style.list} ><li>{input.temperament.map(el => el + ' ,')}</li></ul> 
                    
                    <button className={style.create} type='submit' 
                            onSubmit={(e) => handleSubmit(e)}
                    >Crear perro</button>
            </div>
    </form>

    </>
    )
}

export default Form