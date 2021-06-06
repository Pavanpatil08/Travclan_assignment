
import './App.css';
import Tablediv from "./table"
import {BrowserRouter , Switch , Route} from "react-router-dom"
import  RowData from "./RowDataView"
function App() {
  return (
    <BrowserRouter>
   
    <div className="App">
    <Switch>
      <Route exact path={"/"} component = {Tablediv}/>
      <Route exact path={"/view"} component = { RowData }/>
      </Switch>
    </div>
  
    </BrowserRouter>
   
  );
}

export default App;
