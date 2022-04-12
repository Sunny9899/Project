import "./Card.css";
export const Card = ()=>{
    
    return (
        <div className="container">

            <div className="imag">
            <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
            </div>

            <p className="price">Price:- 2300</p>
            <p className="rating">Rating:- 4.2</p>
            <p className="category">Category:- Mens</p>
        </div>
    );

}