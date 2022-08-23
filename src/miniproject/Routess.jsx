//import { ReactDOM } from "react";
import {Route, Routes } from "react-router-dom";
import MovieHome from './Moviesdashboard'
import Login from './Login'

  
function Routess() {
  return (
    <div>  <Routes>
           <Route path="/" element={<MovieHome/>}></Route>
           <Route path="/Login" element={<Login/>}></Route>
           
        </Routes>
    </div>
  )
}

export default Routess;