"use strict";
exports.__esModule = true;
exports.Gridd = void 0;
require("./Grid.css");
var hooks_1 = require("../hooks");
var Gridd = function () {
    var _a = (0, hooks_1.useAppSelector)(function (state) { return state.filters; }), filteredData = _a.filteredData, loading = _a.loading;
    //console.log(filteredData);
    return (<div>
       {loading === true ? <h1>Loading...</h1> :
            <div id="grid">
      
        {filteredData.map(function (p) { return (<div>
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

        </div>); })}
    </div>}
      </div>);
};
exports.Gridd = Gridd;
