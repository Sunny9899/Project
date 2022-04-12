import './App.css';
import {Gridd} from "./components/Grid/Grid";
import {Filter} from "./components/Filters/Filters";

function App() {
  return (
    <div className="App">
      <b style={{"fontSize":"40px"}}>Filter: </b>
      <Filter/>      
      <b style={{"fontSize":"40px"}}>Grid: </b>
      <Gridd/>

    </div>
  );
}

export default App;
