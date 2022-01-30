import { FormControl, Grid, InputLabel, TextField,withStyles,Select, MenuItem,ListItemText } from "@material-ui/core";
import React,{useEffect} from "react";
import useForm from "./useForm";
import {connect} from "react-redux";
import * as actions from "../actions/Article";


const styles=theme=>({
    root:{
        '& .MuiTextField-root': {
            margin:theme.spacing(1),
            minWidth: 230
        }
    },
})

const initialFieldValues={
    header: '',
    body: '',
    image: '',
    pubDate: new Date(),
    catId:0
}

const ArticleForm=({classes,...props})=>{

    const {values,setValues,handleChange}=useForm(initialFieldValues)
    useEffect(()=> { props.fetchAllCats()},[])

    const options = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 }
        ]
        
    return (<form autoComplete="off" noValidate className={classes.root}>
        <Grid container>
            <Grid item xs={6}>
                <TextField 
                name="header"
                label="Header"
                variant="outlined"
                value={values.header}
                onChange={handleChange}/>
            <TextField 
                name="image"
                label="Image"
                variant="outlined"
                value={values.image}
                onChange={handleChange}/>
            <TextField 
                name="body"
                label="Body"
                variant="outlined"
                value={values.body}
                onChange={handleChange}/>
            <FormControl variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select>
                    {props.catList.map((option,index) => (
                        <MenuItem key={index} value={option.id}>
                            <ListItemText value={option.id} >{option.name}</ListItemText>
                        </MenuItem>
                        ))}
                </Select>
            </FormControl>
            </Grid>
            
            <Grid item xs={6}></Grid>
        </Grid>
    </form>);
}
const mapStateToProps=state=>({
    catList:state.Article.catList
})

const mapActionToProps={
    fetchAllCats: actions.fetchAllCats
}
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(ArticleForm));