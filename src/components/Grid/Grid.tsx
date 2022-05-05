import "./Grid.css";
import * as React from 'react';
import { useAppSelector } from "../hooks";

/*
interface data {
  img: string;  
  name: string;
  mrp: number;
  discount: number;
  rating: number;
  category: string;
  id: number;
}
*/

export const Gridd = () => {
  const { filteredData, loading } = useAppSelector((state) => state.filters);
  //console.log(filteredData);

  return (
     <div>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div id="grid">
          {filteredData.map((p) => (
            <div>
              <div className="container" key={p.id}>
                <div className="imag">
                  <img src={p.img} />
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
      )}
    </div>
  );
};
