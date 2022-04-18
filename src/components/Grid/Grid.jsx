import "./Grid.css";
import {getState} from "react-redux";
import {store} from "../../redux/store";

const prod=store.getState();
const prod2=prod.filteredData;

  export const Gridd=()=>{
console.log(prod2);
return (
  <div>
    <div id="grid">
      
        {prod2.map((p)=>(
        <div >
        <div className="container" key={p.id}>

          <div className="imag">
          <img src={p.img}/>
          </div>

          <p className="price">Price: {p.mrp}</p>
          <p className="rating">Rating: {p.rating}</p>
          <p className="name">Name: {p.name}</p>
          <p className="category">Category: {p.category}</p>
          <p className="discount">Discount: {p.discount}</p>
          </div>

        </div>
        ))}
    </div>
 
      </div>
);

};