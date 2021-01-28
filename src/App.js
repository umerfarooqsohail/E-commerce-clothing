import React from 'react';
import Homepage from './pages/homepage/Homepage';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Shopepage from './pages/shopepage/Shopepage';


function App() {
  return (
    <div className="App">
   <Switch >
     <Route exact path="/" component={Homepage} />
     <Route path="/shop" component={Shopepage} />
   </Switch>
    </div>
  );
}

export default App;
