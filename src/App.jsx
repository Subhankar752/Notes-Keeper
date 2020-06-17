import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Switch } from "react-router-dom";

import Header1 from "./Header1.jsx";
import Default from "./Default.jsx";
 function App() {
  return (
<Router>
<Switch>
<div>
<Header1 />








    </div>
    </Switch>
</Router>
  );
}

 export default App;
