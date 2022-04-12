import { useState, useEffect } from "react"; 
import "./Grid.css";

const Axios= require("axios");

export const Gridd = ()=>{

const [prod,setProd]=useState([]);

useEffect(()=>{
Axios.get("http://localhost:3001/data")
.then((res)=>{
    //console.log(res.data);
  setProd(res.data);
})
},[]);

//console.log(prod);

return (
    <div id="grid">
      
        {prod.map((p)=>(
        <div >
        <div className="container" key={p.id}>

          <div className="imag">
          <img src={p.img}/>
          </div>

          <p className="price">{p.mrp}</p>
          <p className="rating">{p.rating}</p>
          <p className="name">{p.name}</p>
          <p className="category">{p.category}</p>
          </div>

        </div>
        ))}
    </div>
);

};