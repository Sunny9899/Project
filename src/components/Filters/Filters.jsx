import "./Filters.css";
import {Gridd} from "../Grid/Grid";
import { useEffect } from "react";

const Axios= require("axios");

export const Filter = ({/*filterData,filter,*/prod,setProd}) =>{

  const showData =()=>{
    Axios.get("http://localhost:3001/data")
    .then((res)=>{
        //console.log(res.data);
      setProd(res.data);
    })
  }

  useEffect(()=>{
   showData();
    },[]);
    
    //console.log(prod);
    const prod2=[...prod];
    
    const filterLH = (exp)=>{

      //filterData(exp);

      const sortLH=(ex)=>{
        if(ex==="cost"){
        prod2.sort((a,b)=>{
          return a.mrp-b.mrp;
        })
        }else if(ex==="discount"){
        prod2.sort((a,b)=>{
          return a.discount-b.discount;
        })  
        }
        setProd(prod2);
      //  console.log("Prod"+prod);  
      }
      sortLH(exp);
    }


    const filterHL=(exp)=>{
      
     // filterData(exp);

      const sortHL=(ex)=>{
        if(ex==="cost"){
        prod2.sort((a,b)=>{
          return b.mrp-a.mrp;
        })
        }else if(ex==="discount"){
        prod2.sort((a,b)=>{
          return b.discount-a.discount;
        })  
        }
        setProd(prod2);
      //  console.log(prod);  
      } 
      sortHL(exp);     
    }

    const filterCat=(exp)=>{
     // filterData(exp);

      let prodCat=[];
      const getDataByCat=(ex)=>{
      
        prod2.map((p)=>{
          if(p.category===ex){
           prodCat.push(p);
          }
        });
        
        setProd(prodCat);
        //console.log(prod);
      }
      getDataByCat(exp);
    }
   
    const filterRate=(exp)=>{
   //   filterData(exp);
       let prodRate=[];
      const getRateData=(ex)=>{

        prod2.map((p)=>{
          if(p.rating>=ex){
           // setProd(p);
           prodRate.push(p);
          }
        });

      setProd(prodRate); 
     // console.log(prodRate);  
}      
getRateData(exp);
}


return(
  <div>
    <div id="container" >

    <div id="cost">
        Cost:
        <button onClick={()=>{filterLH("cost") }}>Low to High</button>
        <button onClick={()=>{filterHL("cost")}}>High to Low</button>
    </div>
     
    <div id="discount">
        Discount:
        <button onClick={()=>{filterLH("discount")}}>Low to High</button>
        <button onClick={()=>{filterHL("discount")}}>High to Low</button>
    </div>

    <div id="category">
        Category: 
          <button id="men" onClick={()=>{filterCat("Mens Clothing")}}>Men Clothing</button>
          <button id="women" onClick={()=>{filterCat("Women Clothing")}}>Women Clothing</button>
          <button id="home" onClick={()=>{filterCat("Home Furnishing")}}>Home Furnishing</button>
          <button id="mob" onClick={()=>{filterCat("Mobile")}}>Mobile</button>
          <button id="jewel" onClick={()=>{filterCat("jewelery")}}>Jewellery</button>     
    </div>

    <div id="rating">
        Rating:  
        <button id="rate1" onClick={()=>{filterRate(1)}}>1⭐ & above</button>

        <button id="rate2" onClick={()=>{filterRate(2)}}>2⭐ & above</button>

        <button id="rate3" onClick={()=>{filterRate(3)}}>3⭐ & above</button>

        <button id="rate4" onClick={()=>{filterRate(4)}}>4⭐ & above</button>                
    </div>


    </div>

    <b style={{"fontSize":"40px"}}>Grid: </b>
      <Gridd prod={prod}/>

    </div>
);

}

// ? : 