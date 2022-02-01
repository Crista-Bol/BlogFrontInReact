import React, { useState, useEffect } from "react";
import * as actions from "../actions/Article";
import {connect} from "react-redux";
import { ButtonGroup, Grid,Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles } from "@material-ui/core";
import ArticleForm from "./ArticleForm";
import { mergeClasses } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"

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
    
    const [currentId,setCurrentId]=useState(0)
    
    useEffect(()=> { props.fetchAllArticles()},[])
    
    const deleteArt=(id)=>{
    if(window.confirm("Are you sure you want to delete this record?"))
        props.deleteArt(id, ()=>{window.alert("Deleted")});
    }

    return (
    <Paper className={classes.paper} elevation={3}>
        <Grid container>
            <Grid item>
                <ArticleForm {...({currentId,setCurrentId})}/>
            </Grid>
            <Grid item>
                <Table>
                    <TableHead className={classes.root}>
                        <TableRow>
                            <TableCell>Header</TableCell>
                            <TableCell>Body</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.articleList.map((record,index)=>{
                                return (<TableRow key={index} hover> 
                                    <TableCell >{record.header}</TableCell>
                                    <TableCell >{record.body}</TableCell>
                                    <TableCell><ButtonGroup variant="text">
                                            <button onClick={()=>setCurrentId(record.id)}><EditIcon color="primary"/></button>
                                            <button onClick={()=>deleteArt(record.id)}><DeleteIcon color="secondary"/></button>
                                        </ButtonGroup></TableCell>
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
    fetchAllArticles: actions.fetchAll,
    deleteArt:actions.deleteArticle
}
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Articles));
