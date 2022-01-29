import React, { useEffect } from "react";
import * as actions from "../actions/Article";
import {connect} from "react-redux";

//React host
const Articles=(props)=>{
    useEffect(()=> { props.fetchAllArticles()},[])
    return (<div>hihih</div>);
}

const mapStateToProps=state=>({
    articleList:state.Article.list
})

const mapActionToProps={
    fetchAllArticles: actions.fetchAll
}
export default connect(mapStateToProps,mapActionToProps)(Articles);
