import React, { useState } from "react";
import "./Project.css";
import { TextField, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Button from "@mui/material";
//import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import { ReactDOM } from "react";
import { height, width } from "@mui/system";
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
      .required("pleasae put password ")
      .max(10)
    }),

    })



  const [userName, setUsername] = useState("");
  const [PassWord, setPassword] = useState("");


  function Submit() {
     console.log(userName,PassWord)
  }
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
            label="username"
            value={formik.values.userName}
            variant="filled"
            onChange={(event) => setUsername(event.target.value)}
          >
            {" "}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="password"
            value={PassWord}
            variant="filled"
            onChange={(event) => setPassword(event.target.value)}
          >
            {" "}
          </TextField>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <button className="b" variant="contained" onclick={Submit()}> 
        <>Submit</>
        </button>
      </Grid>
    </div>
  );
}
export default Login;
