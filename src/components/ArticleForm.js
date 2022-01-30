import { FormControl, Grid, InputLabel, TextField,withStyles,Select, MenuItem,ListItemText, FormHelperText } from "@material-ui/core";
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
    formControl:{
        '& .MuiTextField-root': {
            margin:theme.spacing(1),
            minWidth: 230
        }
    },
    smMargin:{
        margin:theme.spacing(1),
    }
})

const initialFieldValues={
    header: '',
    body: '',
    image: '',
    pubDate: null,
    catId:0
}

const ArticleForm=({classes,...props})=>{

     const validate=(fieldValues=values)=>{
        let temp={}
        if('header' in fieldValues)
            temp.header=values.header?"":"This field is required."
        if('image' in fieldValues)
            temp.image=values.image?"":"This field is required."
        if('catId' in fieldValues)
            temp.catId=values.catId!=0?"":"This field is required."

        setErrors({...temp})
        if(fieldValues==values)
            return Object.values(temp).every(x=>x=="")
    }
    
    const {values,setValues,errors,setErrors,handleChange}=useForm(initialFieldValues,validate)
    
   

    //material ui select
    //const inputLabel=React.useRef(null);
    const [labelWidth,setLabelWidth]=React.useState(0);
    React.useEffect(()=>{
        props.fetchAllCats();
    
    },[])
      
    const handleSubmit=e=>{
        e.preventDefault();
        if(validate()){
            window.alert("Validation succeeded");
        }
    }

    return (<form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={6}>
                <TextField 
                name="header"
                label="Header"
                variant="outlined"
                value={values.header}
                onChange={handleChange}
                {...(errors.header && {error:true, helperText:errors.header})}/>
            <TextField 
                name="image"
                label="Image"
                variant="outlined"
                value={values.image}
                onChange={handleChange}
                {...(errors.header && {error:true, helperText:errors.header})}/>
            <TextField 
                name="body"
                label="Body"
                variant="outlined"
                value={values.body}
                onChange={handleChange}/>
            <FormControl variant="outlined" className={classes.formControl}
            {...(errors.catId && {error:true})}>
                <InputLabel>Category</InputLabel>
                <Select name="catId" value={values.catId} onChange={handleChange}>
                    <MenuItem value={0}>Select Category</MenuItem>
                    {props.catList.map((option,index) => (
                     <MenuItem key={index} value={option.id}>{option.name}</MenuItem>
                    ))}
                </Select>
                {errors.catId && <FormHelperText>{errors.catId}</FormHelperText>}
            </FormControl>
            <div>
                <button color="primary"
                variant="contained" type="submit" className={classes.smMargin}>Submit</button>
                <button
                variant="contained" className={classes.smMargin}>Reset</button>
            </div>
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