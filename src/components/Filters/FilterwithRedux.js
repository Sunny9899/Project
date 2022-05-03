"use strict";
exports.__esModule = true;
exports.FilterWithRedux = void 0;
require("./Filters.css");
var Grid_1 = require("../Grid/Grid");
var react_1 = require("react");
var hooks_1 = require("../hooks");
var Button_1 = require("../Button/Button");
var Slice_1 = require("../../redux/Slice");
var FilterWithRedux = function () {
    var dispatch = (0, hooks_1.useAppDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, Slice_1.getAllData)());
    }, [dispatch]);
    var showDataByCategory = function (exp) {
        dispatch((0, Slice_1.filterByCategory)({ exp: exp }));
    };
    var showDataByRating = function (exp) {
        dispatch((0, Slice_1.filterByRating)({ exp: exp }));
    };
    var showSortedData = function (exp, order) {
        dispatch((0, Slice_1.filterBySort)({ exp: exp, order: order }));
    };
    var filterClicked = function (exp, order) {
        if (exp == 1 || exp == 2 || exp == 3 || exp == 4) {
            showDataByRating(exp);
        }
        else if ((exp == "discount" || exp == "mrp") && (order == "asc" || order == "desc")) {
            showSortedData(exp, order);
        }
        else {
            showDataByCategory(exp);
        }
    };
    return (<div>
      <div id="container">
        <div id="cost">
          Cost:
          <Button_1.Button Clicked={filterClicked} txt={"Low To High"} param1={"mrp"} param2={"asc"}/>
          <Button_1.Button Clicked={filterClicked} txt={"High to Low"} param1={"mrp"} param2={"desc"}/>          
        </div>

        <div id="discount">
          Discount:
          <Button_1.Button Clicked={filterClicked} txt={"Low To High"} param1={"discount"} param2={"asc"}/>
          <Button_1.Button Clicked={filterClicked} txt={"High to Low"} param1={"discount"} param2={"desc"}/>            
        </div>

        <div id="category">
          Category:
          <Button_1.Button Clicked={filterClicked} txt={"Mens Clothing"} param1={"Mens Clothing"} param2={""}/>          
          <Button_1.Button Clicked={filterClicked} txt={"Women Clothing"} param1={"Women Clothing"} param2={""}/>
          <Button_1.Button Clicked={filterClicked} txt={"Home Furnishing"} param1={"Home Furnishing"} param2={""}/>            
          <Button_1.Button Clicked={filterClicked} txt={"Mobile"} param1={"Mobile"} param2={""}/>
          <Button_1.Button Clicked={filterClicked} txt={"Jewellery"} param1={"jewelery"} param2={""}/>                        
        </div>

        <div id="rating">
          Rating:
          <Button_1.Button Clicked={filterClicked} txt={"1⭐ & above"} param1={"1"} param2={""}/>
          <Button_1.Button Clicked={filterClicked} txt={"2⭐ & above"} param1={"2"} param2={""}/>            
          <Button_1.Button Clicked={filterClicked} txt={"3⭐ & above"} param1={"3"} param2={""}/>
          <Button_1.Button Clicked={filterClicked} txt={"4⭐ & above"} param1={"4"} param2={""}/> 
        </div>
      </div>

      <b style={{ fontSize: "40px" }}>Grid: </b>
      <Grid_1.Gridd />
    </div>);
};
exports.FilterWithRedux = FilterWithRedux;
// ? :
