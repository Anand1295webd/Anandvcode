  
import React from "react";
import { useNavigate } from "react-router-dom";
import{useFormik} from 'formik';
//import{Form} from 'semantic-ui'
import *as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function CreateFormik() {

    // const navigate=useNavigate();

    const formik= useFormik({
        initialValues:{
            Name:"",
            email:"",
            psw:""
        },
       validationSchema:yup.object({
            Name:yup.string()
            .required("please enter name "),
            email:yup.string()
            .email()
            .required("enter the email"),
            psw:yup.string()
            .required("enter the password")
        }),
     
    })

    console.log()
    return (
      <div>

        <h2>Login Here</h2>
        <TextField name={"Name"} label="Name" value={formik.values.Name} onChange={formik.handleChange} placeholder=' Enter Name' />
        <br/>
        {formik.errors.Name?<span>{formik.errors.Name}</span>:null}<br/>
        <br/>
        <TextField name="email"  label="Email" value={formik.values.email} onChange={formik.handleChange} placeholder='Enter Email'/>
        <br/>
        {formik.errors.email?<span>{formik.errors.email}</span>:null}<br/>
        <br/>
        <TextField name="psw" label="Password" value={formik.values.psw} onChange={formik.handleChange} placeholder='Enter Password'/>
        <br/>
        {formik.errors.psw?<span>{formik.errors.psw}</span>:null}
        <br/>
         <Button onClick={()=> {
            return(
                formik.handleSubmit,
                console.log(formik.values)
            )
         }
         }>Submit</Button>
      </div>
   
  );
}












