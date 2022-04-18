import "./Filters.css";
import { Gridd } from "../Grid/Grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByCategory,
  filterByRating,
  getAllData,
  filterLowtoHigh,
  filterHightoLow,
} from "../../redux/Slice";

const Axios = require("axios");

export const FilterWithRedux = () => {
  const dispatch = useDispatch();

  //Functions to get data acc. to clicked filter

  useEffect(() => {
    //Get Default Data
    const showData = () => {
      Axios.get("http://localhost:3001/data").then((res) => {
        dispatch(getAllData(res.data));
      });
    };
    showData();
  }, [dispatch]);

  const showDataByCategory = (exp) => {
    //Get Data By Category
    Axios.get(`http://localhost:3001/data?category=${exp}`).then((res) => {
      dispatch(filterByCategory(res.data));
    });
  };

  const showDataByRating = (exp) => {
    //Get Data By Rating
    Axios.get(`http://localhost:3001/data?rating_gte=${exp}`).then((res) => {
      dispatch(filterByRating(res.data));
    });
  };

  const showDataLowtoHigh = (exp) => {
    //Get Data sort L to H
    Axios.get(`http://localhost:3001/data?_sort=${exp}&_order=asc`).then(
      (res) => {
        dispatch(filterLowtoHigh(res.data));
      }
    );
  };

  const showDataHightoLow = (exp) => {
    //Get Data sort H to L
    Axios.get(`http://localhost:3001/data?_sort=${exp}&_order=desc`).then(
      (res) => {
        dispatch(filterHightoLow(res.data));
      }
    );
  };

  //Functions to trigger the right above mentioned functions on filter click

  const filterClicked = (exp) => {
    //To check which function to execute when filter is clicked
    if (exp == 1 || exp == 2 || exp == 3 || exp == 4) {
      showDataByRating(exp);
    } else {
      showDataByCategory(exp);
    }
  };

  const sortFilterClicked = (exp, order) => {
    //To check which function to execute when sort(L to H or H to L) filter is clicked
    if (order === "asc") {
      showDataLowtoHigh(exp);
    } else if (order === "desc") {
      showDataHightoLow(exp);
    }
  };

  return (
    <div>
      <div id="container">
        <div id="cost">
          Cost:
          <button
            onClick={() => {
              sortFilterClicked("mrp", "asc");
            }}
          >
            Low to High
          </button>
          <button
            onClick={() => {
              sortFilterClicked("mrp", "desc");
            }}
          >
            High to Low
          </button>
        </div>

        <div id="discount">
          Discount:
          <button
            onClick={() => {
              sortFilterClicked("discount", "asc");
            }}
          >
            Low to High
          </button>
          <button
            onClick={() => {
              sortFilterClicked("discount", "desc");
            }}
          >
            High to Low
          </button>
        </div>

        <div id="category">
          Category:
          <button
            id="men"
            onClick={() => {
              filterClicked("Mens Clothing");
            }}
          >
            Men Clothing
          </button>
          <button
            id="women"
            onClick={() => {
              filterClicked("Women Clothing");
            }}
          >
            Women Clothing
          </button>
          <button
            id="home"
            onClick={() => {
              filterClicked("Home Furnishing");
            }}
          >
            Home Furnishing
          </button>
          <button
            id="mob"
            onClick={() => {
              filterClicked("Mobile");
            }}
          >
            Mobile
          </button>
          <button
            id="jewel"
            onClick={() => {
              filterClicked("jewelery");
            }}
          >
            Jewellery
          </button>
        </div>

        <div id="rating">
          Rating:
          <button
            id="rate1"
            onClick={() => {
              filterClicked("1");
            }}
          >
            1⭐ & above
          </button>
          <button
            id="rate2"
            onClick={() => {
              filterClicked("2");
            }}
          >
            2⭐ & above
          </button>
          <button
            id="rate3"
            onClick={() => {
              filterClicked("3");
            }}
          >
            3⭐ & above
          </button>
          <button
            id="rate4"
            onClick={() => {
              filterClicked("4");
            }}
          >
            4⭐ & above
          </button>
        </div>
      </div>

      <b style={{ fontSize: "40px" }}>Grid: </b>
      {/*<Gridd prod={prod} />*/}
    </div>
  );
};

// ? :
