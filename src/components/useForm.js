import React, {useState} from "react"

const useForm=(initialFieldValues,validate)=>{

    const [values,setValues]=useState(initialFieldValues);
    const [errors,setErrors]=useState([]);

    const handleChange=e=>{
    
        const {name,value}=e.target
        const fieldValue={[name]:value}
        setValues({
            ...values,
            fieldValue
        })
        validate(fieldValue)
    }
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleChange
    }
}

export default useForm;