import "./Grid.css";

export const Gridd = ({prod})=>{

return (
  <div>
    <div id="grid">
      
        {prod.map((p)=>(
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