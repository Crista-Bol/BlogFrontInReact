import api from "./api"

export const ACTION_TYPES={
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_ALL_CATS: 'FETCH_ALL_CATS'
}

export const fetchAll=()=> dispatch=>{
    api.article().fetchAll()
    .then(response=>{
        console.log(response+"-->list");
        dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data
        })
    })
    .catch(err=>console.log(err)); 
}

export const fetchAllCats=()=>dispatch=>{
    api.article().fetchAllCats()
    .then(res=>{
        console.log(res+ " cats");
        dispatch({
            type: ACTION_TYPES.FETCH_ALL_CATS,
            payload: res.data
        })
    })
    .catch(err=>console.log("Error while pulling cats: "+err));
}

export const addArticle=(data,onSuccess)=>dispatch=>{
    api.article().create(data)
    .then(res=>{
        dispatch({
            type: ACTION_TYPES.CREATE,
            payload:res.data
        })
        onSuccess()
    })
    .catch(err=>console.log("Error while adding art: "+err));
}
export const updateArticle=(id,data,onSuccess)=>dispatch=>{
    api.article().update(id,data)
    .then(res=>{
        dispatch({
            type: ACTION_TYPES.UPDATE,
            payload:{id,...data}
        })
        onSuccess()
    })
    .catch(err=>console.log("Error while updating art: "+err));
}
export const deleteArticle=(id,onSuccess)=>dispatch=>{
    api.article().delete(id)
    .then(res=>{
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload:id
        })
        onSuccess()
    })
    .catch(err=>console.log("Error while deleting art: "+err));
}