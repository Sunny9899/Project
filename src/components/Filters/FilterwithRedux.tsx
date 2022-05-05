import * as React from 'react';
import "./Filters.css";
import { Gridd } from "../Grid/Grid";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { Button } from "../Button/Button";
import {
  filterByCategory,
  filterByRating,
  getAllData,
  filterBySort,
} from "../../redux/Slice";

export const FilterWithRedux = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  const showDataByCategory = (exp: string) => {
    dispatch(filterByCategory({ exp }));
  };

  const showDataByRating = (exp: number) => {
    dispatch(filterByRating({ exp }));
  };

  const showSortedData = (exp: string, order: string) => {
    dispatch(filterBySort({ exp, order }));
  };

  const filterClicked = (exp:any, order: string) => {
    if (exp == 1 || exp == 2 || exp == 3 || exp == 4) {
      showDataByRating(exp);
    } else if (
      (exp == "discount" || exp == "mrp") &&
      (order == "asc" || order == "desc")
    ) {
      showSortedData(exp, order);
    } else {
      showDataByCategory(exp);
    }
  };

  return (
    <div>
      <div id="container">
        <div id="cost">
          Cost:
          <Button
            Clicked={filterClicked}
            txt={"Low To High"}
            param1={"mrp"}
            param2={"asc"}
          />
          <Button
            Clicked={filterClicked}
            txt={"High to Low"}
            param1={"mrp"}
            param2={"desc"}
          />
        </div>

        <div id="discount">
          Discount:
          <Button
            Clicked={filterClicked}
            txt={"Low To High"}
            param1={"discount"}
            param2={"asc"}
          />
          <Button
            Clicked={filterClicked}
            txt={"High to Low"}
            param1={"discount"}
            param2={"desc"}
          />
        </div>

        <div id="category">
          Category:
          <Button
            Clicked={filterClicked}
            txt={"Mens Clothing"}
            param1={"Mens Clothing"}
            param2={""}
          />
          <Button
            Clicked={filterClicked}
            txt={"Women Clothing"}
            param1={"Women Clothing"}
            param2={""}
          />
          <Button
            Clicked={filterClicked}
            txt={"Home Furnishing"}
            param1={"Home Furnishing"}
            param2={""}
          />
          <Button
            Clicked={filterClicked}
            txt={"Mobile"}
            param1={"Mobile"}
            param2={""}
          />
          <Button
            Clicked={filterClicked}
            txt={"Jewellery"}
            param1={"jewelery"}
            param2={""}
          />
        </div>

        <div id="rating">
          Rating:
          <Button
            Clicked={filterClicked}
            txt={"1⭐ & above"}
            param1={"1"}
            param2={""}
          />
          <Button
            Clicked={filterClicked}
            txt={"2⭐ & above"}
            param1={"2"}
            param2={""}
          />
          <Button
            Clicked={filterClicked}
            txt={"3⭐ & above"}
            param1={"3"}
            param2={""}
          />
          <Button
            Clicked={filterClicked}
            txt={"4⭐ & above"}
            param1={"4"}
            param2={""}
          />
        </div>
      </div>

      <b style={{ fontSize: "40px" }}>Grid: </b>
      <Gridd />
    </div>
  );
};

// ? :
