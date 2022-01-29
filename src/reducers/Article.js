import { ACTION_TYPES } from "../actions/Article";

const initialState={
    list:[]
}

export const Article =(state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload.data]
            }
        default:
            return state
    }
}