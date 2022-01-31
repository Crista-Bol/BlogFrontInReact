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
        case ACTION_TYPES.CREATE:
        
            return {
                ...state,
                list: [...state.list,action.payload]
            }
        case ACTION_TYPES.UPDATE:
            console.log(action.payload+" this is cats");
            return {
                ...state,
                list: state.list.map(x=>x.id==action.payload.id?action.payload:x)
            }
         case ACTION_TYPES.DELETE:
            
            return {
                ...state,
                list: state.list.filter(x=>x.id!=action.payload)
            }
        default:
            return state
    }
}