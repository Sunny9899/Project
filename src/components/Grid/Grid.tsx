import "./Grid.css";
import { useAppSelector } from "../hooks";

interface data {
  id: number;
  img: string;
  mrp: number;
  rating: number;
  name: string;
  category: string;
  discount: number;
}

export const Gridd = () => {
  const { filteredData, loading } = useAppSelector((state) => state.filters);
  //console.log(filteredData);
  return (
    <div>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div id="grid">
          {filteredData.map((p: data) => (
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
