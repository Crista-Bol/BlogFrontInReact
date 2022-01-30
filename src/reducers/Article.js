import { ACTION_TYPES } from "../actions/Article";

const initialState={
    list:[],
    catList:[]
}

export const Article =(state=initialState,action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload.data]
            }
        case ACTION_TYPES.FETCH_ALL_CATS:
            console.log(action.payload+" this is cats");
            return {
                ...state,
                catList: [...action.payload]
            }
        default:
            return state
    }
}