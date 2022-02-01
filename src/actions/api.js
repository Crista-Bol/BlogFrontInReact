import axios from "axios";
const baseUrl="https://localhost:44310";

export default {
    article(url=baseUrl){
        return {
            fetchAll: ()=>axios.get('https://localhost:44310/Articles/getAll'),
            fetchAllCats: ()=>axios.get('https://localhost:44310/api/artCats'),
            fetchById: id=> axios.get(baseUrl+"/api/"+id),
            create:(newRecord,catId)=>axios.post(baseUrl+"/api/addArticle/"+catId,newRecord),
            update:(id,catId,updateRecord)=>axios.put(url+"/api/updateArticle/"+id+"/"+catId,updateRecord),
            delete:id=>axios.delete(url+"/api/deleteArticle/"+id)
        }
    }
}