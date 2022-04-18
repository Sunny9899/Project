import "./App.css";

//import { Filter } from "./components/Filters/Filters";
//import { useState, useEffect } from "react";
import { FilterWithRedux } from "./components/Filters/FiltersWithRedux";

function App() {
//  const [prod, setProd] = useState([]);

  return (
    <div className="App">
      {/*
      <b style={{ fontSize: "40px" }}>Filter: </b>
      <Filter prod={prod} setProd={setProd} />
     */}
      <FilterWithRedux />
    </div>
  );
}

export default App;
