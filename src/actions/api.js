import axios from "axios";
const baseUrl="https://localhost:44310";

export default {
    article(url=baseUrl){
        return {
            fetchAll: ()=>axios.get(url+"/Articles/getAll"),
            fetchById: id=> axios.get(baseUrl+"/api/"+id),
            create:newRecord=>axios.post(baseUrl+"/api/addArticle",newRecord),
            update:(id,updateRecord)=>axios.put(url+"/api/updateArticle/"+id,updateRecord),
            delete:id=>axios.delete(url+"/api/deleteArticle/"+id)
        }
    }
}