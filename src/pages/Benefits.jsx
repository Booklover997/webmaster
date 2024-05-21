import "./css/styles.css";
import {Nav, Footer} from "./Nav.jsx";
import "./css/benefits.css";

//ed306f697e
export default function Benefits() {
  return (
    <>
      <Nav />
      <div class="taxContainer">
        <div class="center">
        <div class="textSection">
    <h1 class="taxTitle">Save Up to $3,200</h1>
    <p>By investing in renewable technologies for your home you are able to qualify for federal tax credits such as the eneergy efficiency home improvement credit and the residential clean energy credit. Some examples of qualifying technologies are wind, solar, geothermal, fuel cells, and battery storage. These credits available through 2032 allower homeowners to claim up to $3,200 in tax rebates annually. These credits can be claimed from the IRS by using <a href="https://www.irs.gov/pub/irs-pdf/f5695.pdf" class="link">IRS Form 5965</a> 
</p>
</div>
</div> 
    <div><a rel="noreferrer" href="https://www.irs.gov/pub/irs-pdf/f5695.pdf" target="_blank"><img src="/Document.svg" alt="5696 form"></img></a></div>
    </div>
    <div class="requirementsContainer">
      <h1>Requirements</h1>
      <div class="bullets">
      <div class="bullet"><img class="bulletImg" src="1.svg"></img><h3>Must be an existing house that you live in</h3></div>
      <div class="bullet"><img class="bulletImg" src="2.svg"></img><h3>You cannot claim more than you pay in taxes</h3></div>
      <div class="bullet"><img class="bulletImg" src="3.svg"></img><h3>Property must be located in the United States</h3></div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
