import React from "react";
import { Route } from "react-router-dom";
import "./App.scss";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="app">
      <Route
        exact
        path={"/"}
        render={() => (
          <div className="auth">
            <Auth />
          </div>
        )}
      />

      <Route path={"/dasboard"} render={() => <Dashboard />} />
    </div>
  );
}
export default App;
