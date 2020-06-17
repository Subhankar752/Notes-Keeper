import React from "react";
import logo from "./study.png";
import Wr from "./write.png";
function header() {
  return (
    <div class="head"> <h1 class="H">-: NOTES KEEPER :-</h1>
    <img class="image" src={logo} alt="nothing"></img>
      <img class="image" src={Wr} alt="nothing"></img>
     </div>
  );
}
export default header;
