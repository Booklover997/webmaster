import "./css/styles.css";
import {Nav, Footer} from "./Nav.jsx";
import "./css/benefits.css";

//ed306f697e
export default function Benefits() {
  return (
    <>
      <Nav />
      <div class="pageContent">

      <div class="taxContainer">
        <div class="center taxContainer">
        <div class="textSection">
    <h1 class="taxTitle">Save Up to $3,200</h1>
    <p>By investing in renewable energy sources such as solar, wind, and geothermal, you might qualify for federal tax credits. These credits include the residential clean energy credit and the energy efficiency home improvement credit. Through 2032, these tax credits are accessible to homeowners. Homeowners can claim up to $3,200 annually, and these credits can be claimed from the IRS by using <a href="https://www.irs.gov/pub/irs-pdf/f5695.pdf" class="link">IRS Form 5965</a> 
</p>
</div>
<a rel="noreferrer" href="https://www.irs.gov/pub/irs-pdf/f5695.pdf" target="_blank"><img loading="eager" src="/Document.svg" alt="5696 form"></img></a>

</div> 

    </div>
    <div class="requirementsContainer center">
      <h1>Requirements</h1>
      <div class="bullets">
      <div class="bullet"><img class="bulletImg" src="1.svg"></img><h3>Must be an existing house that you live in</h3></div>
      <div class="bullet"><img class="bulletImg" src="2.svg"></img><h3>You cannot claim more than you pay in taxes</h3></div>
      <div class="bullet"><img class="bulletImg" src="3.svg"></img><h3>Property must be located in the United States</h3></div>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
