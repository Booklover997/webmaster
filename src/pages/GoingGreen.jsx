import "./css/styles.css";
import {Nav, Footer} from "./Nav.jsx";
import "./css/benefits.css";

//ed306f697e
export default function GoingGreen() {
  return (
    <>
      <Nav />
        <img src="/Solar Panel.svg" alt="Solar Panel"></img>
        <img src="/Faucet.svg" alt="Faucet"></img>
        <img src="/gears.svg" alt="Gears"></img>
        <img src="/Window.svg" alt="window"></img>
    <Footer/>
    </>
  );
}
