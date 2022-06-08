import { 
    DOGS_URL,
    DOGS_NAMES_URL,
    TEMPERAMENT_URL,
    GET_DOGS,
    ISLOADING,
    // GET_DOG,
    GET_TEMPERAMENT,
    SORT_TEMPERAMENT,
    SORT_NAME,
    API_OR_DB,
    // POST,
    ORDER_WEIGHT_MIN,
    ORDER_WEIGHT_MAX,
    POST_URL,
}  from '../actions/constants'
import axios from 'axios'

    export function setLoading(res){
        return({
            type: ISLOADING,
            res
        })
    }

    export function getDogs (){
        return async function(dispatch){
            
            // dispatch(setLoading(true));
            try {
                const res = await axios.get(DOGS_URL);
                return dispatch({
                    type: GET_DOGS,
                    payload: res.data
                }
                // dispatch(setLoading(false))
                );
            } catch(err){
                console.log(err)
            }
        }
    }

    export function getName (name){
        return async function(dispatch){
            // dispatch(setLoading(true));
            const response = await fetch(DOGS_NAMES_URL + name)
            const res = await response.json();
            dispatch({
                type: GET_DOGS,
                payload: res
            }
            // dispatch(setLoading(false))
            );  
        }
    }

    // export function getId (id){
    //     return async function(dispatch){
    //         const response = await fetch(DOGS_URL + '/' + id)
    //         const res = await response.json();
    //         dispatch({
    //             type: GET_DOG,
    //             payload: res
    //         })
    //     }
    // }

    export function getTemperament (){
        return async function(dispatch){
            // dispatch(setLoading(true));
            const res = await axios.get(TEMPERAMENT_URL);
            return dispatch({
                type: GET_TEMPERAMENT,
                payload: res.data
            } 
            // dispatch(setLoading(false))
            );
        }
    }

    export function sortName (res){
        return {
                type: SORT_NAME,
                payload: res
            }
    }

    export function orderWeightMin (res){
        return {
                type: ORDER_WEIGHT_MIN,
                payload: res
            }
        }

    // export function orderWeightMax (res){
    //     return {
    //         type: ORDER_WEIGHT_MAX,
    //         payload: res
    //     }
    // }

    // export function orderWeightMax (res){
    //     return async function (dispatch){
    //         dispatch({
    //             type: ORDER_WEIGHT_MAX,
    //             payload: res
    //         })
    //     }
    // }

    export function sortTemperament (res){
        return {
                type: SORT_TEMPERAMENT,
                payload: res,
            }
        }

    export function sortApiDb (res){
        return {
                type: API_OR_DB,
                payload: res,
            }
        }

    export function postDogs (payload){
        return async function (dispatch){
                const res = await axios.post(POST_URL, payload)
                return res
        }
    }

    // export function cleaner() {
    //     return {
    //       type: "CLEANER",
    //       payload: {},
    //     };
    //   }
