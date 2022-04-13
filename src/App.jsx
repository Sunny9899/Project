import './App.css';

import {Filter} from "./components/Filters/Filters";
import {useState,useEffect} from "react";


function App() {
 // const [filter,setFilter]=useState("");
  const [prod,setProd]=useState([]);
//useEffect(() =>{filterData()},[])
/*
  var filterData=(exp)=>{
    setFilter(exp);
    //return filter;
    //console.log(filter);
  }
*/
  return (
    <div className="App">
      <b style={{"fontSize":"40px"}}>Filter: </b>
      <Filter /*filterData={filterData} filter={filter} */prod={prod} setProd={setProd}/>      


    </div>
  );
}

export default App;
