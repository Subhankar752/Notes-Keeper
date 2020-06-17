import React from "react";
import { Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import Notes from "./notes.jsx";
import Default from "./Default.jsx";

function Header1() {
  return (
    <div class="f1">

    <nav>
<Link  to="/notes"><button class="head1" > Add Notes</button></Link>


<Link to="/"><button class="head1"> Home</button></Link>
    </nav>

    <Route path="/notes" component={Notes} />
<Route exact path="/" component={Default} />

    </div>

  );
}
export default Header1;
