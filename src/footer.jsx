import React from "react";
const year=new Date().getFullYear();
function footer() {
  return(
    <div class="foot">
    <h1>Made with ♥ by Subhankar</h1>
    <h2>Contact Me</h2>
    <a class="email" href="mailto:subhankar.majumdar.752@gmail.com"> Press Me</a>

    <h3>Copyright ⓒ {year}</h3>
    </div>
  );
}
export default footer;
