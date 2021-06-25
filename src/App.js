import React from "react";
import { Navbar } from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={CreateUser} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </Router>
  );
}
