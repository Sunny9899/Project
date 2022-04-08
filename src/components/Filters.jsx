import "./Filters.css";

export const Filter = () =>{

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
        <button>Low to High</button>
        <button>High to Low</button>
    </div>
     
    <div id="discount">
        Discount:
        <button>Low to High</button>
        <button>High to Low</button>
    </div>

    <div id="category">
        Category: 
        <select>
          <option>Please choose a category</option>
          <option id="men">Men Clothing</option>
          <option id="women">Women Clothing</option>
          <option id="home">Home Furnishing</option>
          <option id="mob">Mobile</option>
          <option id="jewel">Jewellery</option>
        </select>

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