import React from "react";
import Homepage from "./pages/homepage/Homepage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shopepage from "./pages/shopepage/Shopepage";
import Header from "./components/header/Header";
import Signinsignout from "./pages/sign-in-sign-out/Sign-in-sign-out";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shopepage} />
        <Route path="/signinsignout" component={Signinsignout} />
      </Switch>
    </div>
  );
}

export default App;
