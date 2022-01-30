import React, { useEffect } from "react";
import * as actions from "../actions/Article";
import {connect} from "react-redux";
import { Grid,Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles } from "@material-ui/core";
import ArticleForm from "./ArticleForm";
import { mergeClasses } from "@material-ui/styles";

const styles=theme=>({
    root:{
        "& .MuiTableCell-head":{
            fontSize:"1.25rem"
        }
    },
    paper:{
        margin:theme.spacing(2),
        padding:theme.spacing(2)
    }
})
//React host
const Articles=({classes,...props})=>{
    useEffect(()=> { props.fetchAllArticles()},[])
    return (
    <Paper className={classes.paper} elevation={3}>
        <Grid container>
            <Grid item>
                <ArticleForm/>
            </Grid>
            <Grid item>
                <Table>
                    <TableHead className={classes.root}>
                        <TableRow>
                            <TableCell>Header</TableCell>
                            <TableCell>Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.articleList.map((record,index)=>{
                                return (<TableRow key={index} hover> 
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
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Articles));
