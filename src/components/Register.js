import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { config } from "../App";
import Footer from "./Footer";
import Header from "./Header";
import "./Register.css";

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [userdata,setUserdata] = useState({});
  const [loading,setLoading] =useState(false);
  const handleInput = async (e) =>{
      setUserdata(() => ({
        ...userdata,
        [e.target.name] : e.target.value
      }))
    }
    
  


  // TODO: CRIO_TASK_MODULE_REGISTER - Implement the register function
  /**
   * Definition for register handler
   * - Function to be called when the user clicks on the register button or submits the register form
   *
   * @param {{ username: string, password: string, confirmPassword: string }} formData
   *  Object with values of username, password and confirm password user entered to register
   *
   * API endpoint - "POST /auth/register"
   *
   * Example for successful response from backend for the API call:
   * HTTP 200
   * {
   *      "success": true,
   * }
   *
   * Example for failed response from backend for the API call:
   * HTTP 400
   * {
   *      "success": false,
   *      "message": "Username is already taken"
   * }
   */
const performApiCall = async () => {
  let responsedata;
  let error= false;
  setLoading(true);
  try{
  let response = await axios.post(`${config.endpoint}/auth/register`,{
    username : userdata.username,
    password : userdata.password
  });
  responsedata= response.data;
  setLoading(false)
}catch(e){
  if(e.response.status==400) {
    responsedata = e.response.data;
  }else error = true;
  setLoading(false)
}
if(await validateResponse(responsedata,error)){
  return responsedata;
}
}

const validateResponse = async (response,error) => {
  if(error || (!response.success && !response.message)){
    enqueueSnackbar("Something went wrong. Check that the backend is running, reachable and returns valid JSON.",{ variant: `error` });
    return false;
  }
  if(!response.success ){
    enqueueSnackbar(response.message,{ variant: `error` });
    return false;
  }
  return true;
}
  const register = async (formData) => {
   //const validateInput = await validateInput(formData);
   if(await validateInput(formData)){
     const response = await performApiCall();
     if(response){
      setUserdata(userdata => ({
        ...userdata,
        username: "",
        password: "",
        confirmPassword: ""
      }));
       enqueueSnackbar("Registered Successfully !",{ variant: `success` });
     }
   }
    
    

  };

 
  // TODO: CRIO_TASK_MODULE_REGISTER - Implement user input validation logic
  /**
   * Validate the input values so that any bad or illegal values are not passed to the backend.
   *
   * @param {{ username: string, password: string, confirmPassword: string }} data
   *  Object with values of username, password and confirm password user entered to register
   *
   * @returns {boolean}
   *    Whether validation has passed or not
   *
   * Return false if any validation condition fails, otherwise return true.
   * (NOTE: The error messages to be shown for each of these cases, are given with them)
   * -    Check that username field is not an empty value - "Username is a required field"
   * -    Check that username field is not less than 6 characters in length - "Username must be at least 6 characters"
   * -    Check that password field is not an empty value - "Password is a required field"
   * -    Check that password field is not less than 6 characters in length - "Password must be at least 6 characters"
   * -    Check that confirmPassword field has the same value as password field - Passwords do not match
   */
  const validateInput = async (data) => {
    if(!data.username || data.username.length==0) {
      enqueueSnackbar("Username is a required field",{ variant: `warning` });
      return false;
    }
    if(data.username && data.username.length <6) 
    {
      enqueueSnackbar("Username must be at least 6 characters",{ variant: `warning` });
      return false;
    }
    if(!data.password|| data.password.length==0) {
      enqueueSnackbar("Password is a required field",{ variant: `warning` });
      return false;
    }
    if(data.password && data.password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters",{ variant: `warning` });
      return false;
    }
    if(data.password && data.confirmPassword && data.password!==data.confirmPassword) {
      enqueueSnackbar("Passwords do not match",{ variant: `warning` });
      return false;
    }
    
    
    
    return true;
  };

  return (
    <>
      <Header hasHiddenAuthButtons />
      <div className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Register</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            onChange = {(e) => { handleInput(e)}}
            fullWidth
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"  
            helperText="Password must be atleast 6 characters length"
            onChange = {handleInput}
            fullWidth
          />
          <TextField
            id="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"  
            type="password"
            onChange = {handleInput}
            fullWidth
          />
          <Button className="button" variant="contained" onClick={() => register(userdata)}>
            Register Now
          </Button>
          {loading && <CircularProgress />}
          <p className="secondary-action">
            Already have an account?{" "}
            <a className="link" href="#">
              Login here
            </a>
          </p>
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default Register;
