import "./Filters.css";
import {useState} from "react";

var selData=document.getElementById("cat");

export const Filter = () =>{

//const fltr=false;
const [filter,setFilter]=useState("");

/*
useEffect(()=>{
    
},[])
*/
const filterData=(exp)=>{
 setFilter(exp);
 console.log(filter);
}


/*Sort

//1 cost l to h & h to l
//2 category mens clothing, women clothing, Jewellery, HomeFurnishing, mobiles
//3 rating 1, 2, 3, 4, 5
//4 discount 25 , 25-50, >75
*/

return(
    <div id="container" >

    <div id="cost">
        Cost:
        <button onClick={()=>{filterData("CLH")}}>Low to High</button>
        <button onClick={()=>{filterData("CHL")}}>High to Low</button>
    </div>
     
    <div id="discount">
        Discount:
        <button onClick={()=>{filterData("DLH")}}>Low to High</button>
        <button onClick={()=>{filterData("DHL")}}>High to Low</button>
    </div>

    <div id="category">
        Category: 
        <select id="cat">
          <option value="">Please choose a category</option>
          <option id="men" value="men">Men Clothing</option>
          <option id="women" value="women">Women Clothing</option>
          <option id="home" value="home">Home Furnishing</option>
          <option id="mob" value="mobile">Mobile</option>
          <option id="jewel" value="jewel">Jewellery</option>
        </select>
        <button
          onClick={() => {
            filterData(`${selData.value}`);
          }}
        >
          Sbmt
        </button>        
    </div>

    <div id="rating">
        Rating:  

        <input type="checkbox" id="rate1"/>
        <label>1⭐ & above</label>
        <br/>
        <input type="checkbox" id="rate2"/>
        <label>2⭐ & above</label>
        <br/>
        <input type="checkbox" id="rate3"/>
        <label>3⭐ & above</label>
        <br/>
        <input type="checkbox" id="rate4"/>
        <label>4⭐ & above</label>                
    </div>


    </div>
);

}

// ? : 