import axios from "axios";
import React, { useState, useEffect } from "react";



export default function Back() {
  const Hoi = "http://localhost:5000/Search";

  const [movies, setmovies] = useState([]);
  const[query ,setquery]=useState(" ")

  
  //api
   useEffect(() => {
     axios
      .get(Hoi)
      .then((res) => setmovies(res.data))
      .then((err) => {
       console.log(err);
       });
      },[]);
    
  
  
       return (
        <div>
        
        
        <div className="bg" >
          {movies?.map(item => {
            return(
              
              <div class="content">
                <img  class="imgg" src={item.Poster}  /><br/>
            
              {item.Title}<br/>
              {item.Year}</div>
              
                            
            )
          })      }
        </div>
        </div>
      );
    }
    
