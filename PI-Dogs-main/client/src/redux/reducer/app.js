import { ISLOADING } from "../actions/constants";

const  initialState = {
    loading: false
}

export default function app(state = initialState, action){
    switch(action.type){
        case ISLOADING:{
            return{
                ...state,
                loading: action.payload
            }
        }
        default: return state
    }
}

// export default function app(state = initialState, { type, payload }){
//     switch(type){
//         case SET_LOADING:
//             return{
//                 ...state,
//                 loading:payload
//             }
//         default:
//             return state
//     };
// };