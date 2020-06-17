import React from "react";
import Sim from "./simon.png";
import Dr from "./drum.png";
function Games() {
  return(
    <div class="apps">
<h1 class="heading">Tired of making notes? Try these apps now!</h1>
    <div>
      <img class="ima" src={Sim} alt="nothing"></img>
        <img class="ima" src={Dr} alt="nothing"></img>

    </div>

    <div>
    <h1 class="emu"> Test your memory power by playing the Simon Game </h1>
    <h1 class="em">Go ahead and take your drumming skills to a new level</h1>
    </div>
    <div>
    <a class="link1" href="https://desolate-atoll-67586.herokuapp.com/">Click me</a>
    <a class="link2" href="https://lit-river-06389.herokuapp.com/">Click me</a>
    </div>

    </div>
  );
}
export default Games;
