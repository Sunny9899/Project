import "./Filters.css";
import { Gridd } from "../Grid/Grid";
import { useEffect } from "react";
import { useDispatch, getState } from "react-redux";


import {
  filterByCategory,
  filterByRating,
  getAllData,
  filterLowtoHigh,
  filterHightoLow,
} from "../../redux/Slice";


const axios = require("axios");

export const FilterWithRedux = () => {
  const dispatch = useDispatch();

  const showData = () => {
    axios.get("http://localhost:3001/data").then((res) => {
      dispatch(getAllData(res.data));
    });
  };

  useEffect(() => {
    showData();
  }, [dispatch]);

  
  const showDataByCategory = (exp) => {
    axios.get(`http://localhost:3001/data?category=${exp}`).then((res) => {
      dispatch(filterByCategory(res.data));
    });
  };
  

  const showDataByRating = (exp) => {
    axios.get(`http://localhost:3001/data?rating_gte=${exp}`).then((res) => {
      dispatch(filterByRating(res.data));
    });
  };

  const showDataLowtoHigh = (exp) => {
    axios.get(`http://localhost:3001/data?_sort=${exp}&_order=asc`).then(
      (res) => {
        dispatch(filterLowtoHigh(res.data));
      }
    );
  };

  const showDataHightoLow = (exp) => {
    axios.get(`http://localhost:3001/data?_sort=${exp}&_order=desc`).then(
      (res) => {
        dispatch(filterHightoLow(res.data));
      }
    );
  };


  const filterClicked = (exp) => {
    if (exp == 1 || exp == 2 || exp == 3 || exp == 4) {
      showDataByRating(exp);
    } else {
      showDataByCategory(exp);
    }
  };

  const sortFilterClicked = (exp, order) => {
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
      <Gridd/>
    </div>
  );
};

// ? :
