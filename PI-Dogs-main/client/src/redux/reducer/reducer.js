import { 
    GET_DOGS,
    GET_TEMPERAMENT,
    SORT_NAME,
    // GET_DOG,
    SORT_TEMPERAMENT,
    API_OR_DB,
    ORDER_WEIGHT_MIN,
    POST_URL,
    ORDER_WEIGHT_MAX,

}  from '../actions/constants'

const initialState = {
    modifiedDogs: [],
    allDogs: [],
    // detail: [],
    temperament: [],
}

export default function dogs(state = initialState, action){
    switch (action.type){

        case GET_DOGS:
            return {
                ...state, 
                modifiedDogs: action.payload,
                allDogs: action.payload,
            }

        // case GET_DOG:
        //     return {
        //         ...state,
        //         detail: action.payload
        //     }
        
        case GET_TEMPERAMENT:
            // const dogTemperament = state.allDogs
            // const sortedTemperament = dogTemperament.filter(el => el.name.includes(action.payload))
        return{
                ...state,
                temperament: action.payload,
            }
        
        case SORT_NAME: 
        const myDogs = state.modifiedDogs;
            const sortedDogs = action.payload === 'A-Z' 
            ? myDogs.sort((a, b) => a.name.localeCompare(b.name)) 
            : myDogs.sort((a, b) => b.name.localeCompare(a.name));
            return{
                ...state,
                allDogs: sortedDogs,
            }

        case ORDER_WEIGHT_MIN:
            let weightDog;
            if (action.payload === 'weightMin'){
                let minWeight = state.modifiedDogs.sort((a, b) => a.weightMin > b.weightMin ? 1 : -1)
                weightDog = minWeight
            }
            if(action.payload === 'weightMax'){
                let maxWeight = state.modifiedDogs.sort((a, b) => a.weightMax > b.weightMax ? -1 : 1)
                weightDog = maxWeight
            }

            if(action.payload === 'all'){
                let allWeight = state.modifiedDogs
                weightDog = allWeight
            }
            return {
                ...state,
                allDogs: weightDog
            }

            // case ORDER_WEIGHT_MAX: 

            // const weightMin2 = state.dogs;
            // const weightMax2 = state.dogs;
            // const orderWeight2 = action.payload === 'weightMax'
            // ? weightMin2.sort((a, b) => a.weightMax2 < b.weightMin2 ? 1 : -1)
            // : weightMax2.sort((a, b) => a.weightMax2 < b.weightMax2 ? 1 : -1)

            // return {
            //     ...state,
            //     allDogs: orderWeight2
            // }

            case API_OR_DB:
                // const apiOrDb = state.dogs;
                // const sortedApiDB = action.payload === 'all' 
                // ? state.dogs 
                // : action.payload === 'created' 
                // ? apiOrDb.filter((el) => typeof el.id === 'string' && el.id.length > 10) 
                // : apiOrDb.filter((el) => typeof el.id === 'number' && el.id.length < 4)
                // console.log(apiOrDb)
                // return {
                //     ...state,
                //     allDogs: sortedApiDB
                // }

                let dog;
                if(action.payload === 'api'){
                    let dogApi = state.modifiedDogs.filter((el) => el.id.length < 4)
                    dog = dogApi
                }
                if(action.payload === 'created'){
                    let dogdb = state.modifiedDogs.filter((el) => el.id.length > 6)
                    dog = dogdb
                }
                if (action.payload === 'all'){
                    let allDog = state.modifiedDogs
                    dog = allDog
                }

                return {
                    ...state,
                    allDogs: dog
                }

            case SORT_TEMPERAMENT:
                let myTemperaments = state.modifiedDogs;

                let selectedTemperament = state.temperament;

                console.log(myTemperaments)
                console.log(selectedTemperament)
                
                const sortedTemperament = myTemperaments.filter((el) => `${el.temperament}`.includes(action.payload));
                console.log(sortedTemperament)

                return {
                    ...state,
                    allDogs: sortedTemperament
                }
            
            case POST_URL:
                return{
                    ...state,
                }

                case "CLEAN_DOG":
      return {
        ...state,
        loader: true,
      };

        default:
            return {
                ...state,
            }
    }
}


