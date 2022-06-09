import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getDogs, getTemperament, postDogs } from '../../redux/actions/actions'
import style from './form.module.css'



function Form() {
    const dispatch = useDispatch()
    const {temperament, allDogs} = useSelector(state => state)

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperament())
    }, [dispatch])

    const [errors, setErrors] = useState({})
    
    const [input, setInput] = useState({
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        life_span: '',
        image: '',
        temperament: [],
        
    })

    
    function handleChange(e){
        let value = e.target.value
        let name = e.target.name
        const allNames = allDogs?.map(e=> e.name)
        console.log(allNames)
        if(!allNames.includes(e.target.value)){
            setInput({
                ...input,
                [name]: value
            })
            setErrors(validate({
                ...input,
                [e.target.name] : e.target.value,
            })
            )
        }
    }
    
    async function handleSelect(e){
        if(!input.temperament.includes(e.target.value)){
            setInput({
                ...input,
                temperament: [...input.temperament, e.target.value],
            })
            setErrors(validate({
                ...input,
                [e.target.name] : e.target.value,
            })
            )
        }
    }
    
    function handleDeleteTemperaments(e) {
        setInput({
            ...input,
            temperament: input.temperament.filter((el) => el !== e),
        });
    }
    async function handleSubmit (e) {
        e.preventDefault()
        if(Object.values(errors).length === 0){
            dispatch(postDogs(input))
            alert('Dog created succesfully')
            navigate(-1)
        } else {
            alert('Please, complete all the data that is required')
        }
    }

    return (
    <>
    <div className={style.img}>
        <div className={style.containerForm}>

    <form className={style.form} onSubmit={(e) => handleSubmit(e) }>
    <Link to= '/dogs' ><button className={style.backBtn} >Volver</button></Link>
        <h1 className={style.h1}>Cree su perro</h1>
            {/* id: 
                name: 
                heightMin:
                heightMax: 
                weightMin: 
                weightMax: 
                life_span: 
                image: */}
        
        
        <section className={style.container}>

        <div>
            <label>name:</label>
            <input 
            className={style.nameInp}
            type='text'
            value={input.name}
            name='name'
            onChange = {(e) => handleChange(e)}
            required
            />
            <span className={style.validation}>
                {errors.name && <p>{errors.name}</p>}
            </span>
            </div>
            
            <div>
            <label>image:</label>
            <input 
            className={style.imageInp}
            type='text'
            value={input.image}
            name='image'
            onChange = {(e) => handleChange(e)}
            // required
            />
            <span className={style.validation}>
                {errors.image && <p>{errors.image}</p>}
            </span>
            </div>
            
            <div>
            <label>heightMin:</label>
            <input 
            className={style.heightMinInp}
            type='text'
            value={input.heightMin}
            name='heightMin'
            onChange = {(e) => handleChange(e)}
            required
            />
            <span className={style.validation}>
                {errors.heightMin && <p>{errors.heightMin}</p>}
            </span>

            <label>heightMax:</label>
            <input 
            className={style.heightMaxInp}
            type='text'
            value={input.heightMax}
            name='heightMax'
            onChange = {(e) => handleChange(e)}
            required
            />
            <span className={style.validation}>
                {errors.heightMax && <p>{errors.heightMax}</p>}
            </span>
            </div>

            <div>
            <label>weightMin:</label>
            <input 
            className={style.weightMinInp}
            type='text'
            value={input.weightMin}
            name='weightMin'
            onChange = {(e) => handleChange(e)}
            required
            />
            <span className={style.validation}>
                {errors.weightMin && <p>{errors.weightMin}</p>}
            </span>
            

            <label>weightMax:</label>
            <input 
            className={style.weightMaxInp}
            type='text'
            value={input.weightMax}
            name='weightMax'
            onChange = {(e) => handleChange(e)}
            required
            />
            <span className={style.validation}>
                {errors.weightMax && <p>{errors.weightMax}</p>}
            </span>
            </div>

            <label>life span:</label>
            <input 
            className={style.lifeInp}
            type='text'
            value={input.life_span}
            name='life_span'
            onChange = {(e) => handleChange(e)}
            required
            />
            <span className={style.validation}>
                {errors.life_span && <p>{errors.life_span}</p>}
            </span>
            </section>
            <div>
            
            <select className={style.temp} onChange={(e) => handleSelect(e)}>
                    {temperament.map((el) => (
                <option className={style.op} value={el.name}>{el.name}</option>
                ))}
                    </select>
                    <ul className={style.list} ><li> {(input.temperament.map(el => el + ' ,')
                    
                    )}</li></ul>
                    <button className={style.create} type='submit' 
                            onSubmit={(e) => handleSubmit(e)}
                            >Crear perro</button>
            </div>
    </form>
    {input.temperament.map((el) => (
        <div>
            <button onClick={(() => handleDeleteTemperaments(el))}>{el}</button>
        </div>
    ))}
            </div>
    </div>

    </>
    )
}
function validate (input) {
    let errors = {};

    if (!input.name){
        errors.name = 'Name is required';
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(input.name)) {
        errors.name = 'Name can only contain letters'
    }

    if(!input.heightMin){

        errors.heightMin = 'Minimun height is required'
    } else if(!/^([0-9])*$/.test(input.heightMin)){
        errors.heightMin = 'Minimun height should be a number'
    } else if (input.heightMin < 1 || input.heightMin > 50) {
        errors.heightMin = 'Minimum height should be between 1 and 50 Centimeters'
    }

    if(!input.heightMax){
        errors.heightMax = 'Maximun height is required'
    } else if (!/^([0-9])*$/.test(input.heightMax)){
        errors.heightMax = 'Maximum height should be a number'
    } else if (input.heightMax > 100) {
        errors.heightMax = 'Maximun height can not be superior to 100 centimeters'
    }

    else if(input.heightMin > input.heightMax || input.heightMin === input.heightMax){
        errors.heightMin = 'Minimum height should be lower than Maximum height'
    }


    if(!input.weightMin){
        errors.weightMin = 'Minimum weight is required'
    } else if(!/^([0-9])*$/.test(input.weightMin)){
        errors.weightMin = 'Minimum weight should be a number'
    } else if(input.weightMin < 1 || input.weightMin > 50) {
        errors.weightMin = 'Minimum weight should be between 1 and 50 kilograms'
    } 
    
    if(!input.weightMax){
        errors.weightMax = 'Maximum weight is required'
    } else if(!/^([0-9])*$/.test(input.weightMax)){
        errors.weightMax = 'Maximum weight should be a number'
    } else if(input.weightMax > 100){
        errors.weightMax = 'Maximum weight can not be superior to 100 kilograms'
    }
    
    else if(input.weightMin > input.weightMax || input.weightMin === input.weightMax){
        errors.weightMin = 'Minimum weight should be lower than Maximum'
    }


    if(!input.life_span){
        errors.life_span = 'Life span is required'
    } else if(!/^([0-9])*$/.test(input.life_span)){
        errors.life_span = 'Life span should be a number'
    } else if(input.life_span < 1 || input.life_span > 20){
        errors.life_span = ' Life span hould be between 1 and 20 years'
    }

    if(!input.temperament){
        errors.temperament = 'temperament is required'
    }
    if(input.temperament < 3){
        errors.temperament = 'temperament should be higher than 3'
    }

    return errors
}

export default Form