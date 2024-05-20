import "./css/styles.css";
import {Nav, Footer} from "./Nav.jsx";
import "./css/benefits.css";

//ed306f697e
export default function Benefits() {
  return (
    <>
      <Nav />
      <div class="taxContainer">
        <div>
    <h1 class="taxTitle">Save Up to $3,200 with tax Rebates</h1>
    <p>By investing in renewable technologies for your home you are able to qualify for federal tax credits such as the eneergy efficiency home improvement credit and the residential clean energy credit. Some examples of qualifying technologies are wind, solar, geothermal, fuel cells, and battery storage. These credits available through 2032 allower homeowners to claim up to $3,200 in tax rebates annually. These credits can be claimed from the IRS by using <a href="https://www.irs.gov/pub/irs-pdf/f5695.pdf" class="link">IRS Form 5965</a> 
</p>
</div> 
    <div><a rel="noreferrer" href="https://www.irs.gov/pub/irs-pdf/f5695.pdf" target="_blank"><img src="/Document.svg" alt="5696 form"></img></a></div>
    </div>
    <Footer/>
    </>
  );
}
