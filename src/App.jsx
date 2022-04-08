import './App.css';
import {Card} from "./components/Card";
import {Gridd} from "./components/Grid";
import {Filter} from "./components/Filters";

function App() {
  return (
    <div className="App">
      <Card/>
      <br/>
      <b style={{"fontSize":"40px"}}>Grid: </b>
      <Gridd/>
      <br/>
      <b style={{"fontSize":"40px"}}>Filter: </b>
      <Filter/>
    </div>
  );
}

export default App;
