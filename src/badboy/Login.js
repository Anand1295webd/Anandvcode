import React from "react";
import { useFormik } from "formik";
import { Button, TextField, Grid, Paper } from "@mui/material";
import * as yup from "yup";
import "./styleform.css";

function LoginPage() {
  const Paperstyle = {
    padding: 20,
    width: 300,
    margin: "50px auto",
    height: "auto",
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: yup.object({
      username: yup.string().required("please enter name"),
      password: yup.string().required("please put password "),
    }),
      onSubmit: (values) => {
      console.log(values);
      alert("working" + JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Paper elevation={20} style={Paperstyle}>
        <div className="form">
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <h1 className="form"> LOGIN FORM</h1>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                name="username"
                label="username"
                variant="filled"
                value={formik.values.username}
                onChange={formik.handleChange}
              >
                {" "}
              </TextField>
              <br />
              {formik.errors.username ? (
                <span>{formik.errors.username}</span>
              ) : null}{" "}
              <br />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="off"
                name="password"
                label="password"
                variant="filled"
                value={formik.values.password}
                onChange={formik.handleChange}
              ></TextField>
              <br />
              {formik.errors.password ? (     
                <span>{formik.errors.password}</span>
              ) : null}
              <br />
            </Grid>
          </Grid>
          <br />

          <Grid item xs={12}>
            <br />
            <center>
              {" "}
              <Button className="button" variant="contained" onClick={formik.handleSubmit}>
                Submit
              </Button>
            </center>

            <button type="reset" onClick={formik.resetForm}>
              {" "}
              reset{" "}
            </button>
          </Grid>
        </div>
      </Paper>
    </form>
  );
}

export default LoginPage;
