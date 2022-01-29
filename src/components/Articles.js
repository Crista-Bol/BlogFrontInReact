import React, { useEffect } from "react";
import * as actions from "../actions/Article";
import {connect} from "react-redux";
import { Grid,Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import ArticleForm from "./ArticleForm";

//React host
const Articles=(props)=>{
    useEffect(()=> { props.fetchAllArticles()},[])
    return (
    <Paper>
        <Grid container>
            <Grid item xs="6">
                <ArticleForm/>
            </Grid>
            <Grid item xs="6">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Header</TableCell>
                            <TableCell>Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.articleList.map((record,index)=>{
                                return (<TableRow key={index}>
                                    <TableCell>{record.header}</TableCell>
                                    <TableCell>{record.body}</TableCell>
                                </TableRow>)
                            })
                        }
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    </Paper>);
}

const mapStateToProps=state=>({
    articleList:state.Article.list
})

const mapActionToProps={
    fetchAllArticles: actions.fetchAll
}
export default connect(mapStateToProps,mapActionToProps)(Articles);
