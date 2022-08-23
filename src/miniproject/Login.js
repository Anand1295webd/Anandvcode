import React  from "react";
import "./Project.css";
import { TextField, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//import Button from "@mui/material";
//import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
//import { ReactDOM } from "react";
//import { height, width } from "@mui/system";
import{useFormik} from 'formik';
import *as yup from 'yup';

function Login() {
       
    const formik=useFormik({
      initialValues:{
        username:"",
        password:"",
        
    },
    validationSchema:yup.object({
      username:yup.string()
      .required("please enter name"),
      password:yup.string()
      .required("please put password ")
      
    }),

    })

       
 
  //const [userName, setUsername] = useState("");
  //const [PassWord, setPassword] = useState("");



  return (
    <div className="cont">
      <Grid
        container
        spacing={3}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <h1 className="form"> LOGIN FORM</h1>
        <AccountCircleIcon style={{height:100, width:100}}/>
        <Grid item xs={12}>
          <TextField
            name="username"
            label="username"
            variant="filled"

            value={formik.values.username} 
           
            onChange={formik.handleChange} 
            
            >
            {" "}  
          </TextField>
          <br/>
          {formik.errors.username?<span>{formik.errors.username}</span>:null} <br/>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="password"
            variant="filled"
            value={formik.values.password} 
            
          onChange={formik.handleChange}

          >
            {" "}
          
            
          </TextField>
          <br/>
          {formik.errors.password?<span>{formik.errors.password}</span>:null}<br/>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <button className="b" variant="contained"  onClick={()=> {
            return(
              
                 formik.handleSubmit,
                 
                 formik.values.username && formik.values.password?<span> {alert("Welcome"+`Entered username is: ${formik.values.username}`)}</span>:null
                
                          
            )
         }
         }>Submit
        </button>
      </Grid>
    </div>
  );
}
export default Login;
