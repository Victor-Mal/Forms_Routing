import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
