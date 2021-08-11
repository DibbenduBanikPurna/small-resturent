import React, { createContext, useState } from 'react';
import './App.css';
import Menu from './Components/Gallery/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import CardDetail from './Components/CartDetail/CardDetail';

export const userContext=createContext()

function App() {
  const [info,setInfo]=useState([])
  //console.log(info)
  return (
    <div className="App">
      <Router>
        <Switch>
          <userContext.Provider value={[info,setInfo]}>
          <Route exact path="/"><Menu/></Route>
          <Route path="/cart/detail"><CardDetail/></Route>
          </userContext.Provider>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
