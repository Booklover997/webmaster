import "./css/styles.css";
import {Nav, Footer} from "./Nav.jsx";
import "./css/benefits.css";

//ed306f697e
export default function Benefits() {
  return (
    <>
      <Nav />
      <div className="center">
        <h1> Sources</h1>
        <p>Source1</p>
        <p>Source2</p>

        <span class="thin mar"></span>
        <h1>Plan of Work</h1>
        <span class="thin mar" ></span>
        <h1>Copyright Checklist</h1>
        <p>All images created using Figma</p>
        <a href="#">Link to Copyright Checklist</a>
        </div>
    <Footer/>
    </>
  );
}
