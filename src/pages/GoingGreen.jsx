import "./css/styles.css";
import {Nav, Footer} from "./Nav.jsx";
import "./css/benefits.css";
import "./css/green.css";
//ed306f697e
export default function GoingGreen() {
  return (
    <>
      <Nav />
      <div className="introContainer">
        <div class="flex">
        <div>       
        <h1>What Is Green Energy?</h1>
        <p>Green energy is a type of renewable energy that generates green power without causing any harm to the environment.Green Energy is generated through:Wind energySolar energyBiomass energGeothermal energyBiogas energyLow-impact hydropower energyNegative effects of fossil fuels on the environment Burning fossil fuels releases nitrogen oxides into the atmosphere which can lead to smog and acid rain.</p>
</div>
        
        <img src="Green Energy.svg"></img>
        </div>
      </div>
      <div class="bento">
        <div class="bentoTitle">Go Green in 7 Easy Steps</div>
        <div class="mechanicalBento"><img src="gears.svg"></img><p>Make swaps to existing mechanical systems</p></div>
        <div class="waterBento"><img src="Faucet.svg"></img><p>Improve Water Heating Systems</p></div>
        <div class="foamBento"><img src="Spray.svg"></img><p>Properly Insulate</p></div>
        <div class="windowBento"><img src="Window.svg"></img><p>Energy efficient windows to prevent heatloss and reduce the need for air-conditioning</p></div>
        <div class="lightBulbBento"><img src="LightBulb.svg"></img><p>Use energy efficient light bulbs</p></div>
        <div class="solarBento"><img src="Solar Panel.svg"></img><p>After cutting energy useage renewable energy systems becomes worth it</p></div>
      </div>
      
        <img src="/Solar Panel.svg" alt="Solar Panel"></img>
        <img src="/Faucet.svg" alt="Faucet"></img>
        <img src="/gears.svg" alt="Gears"></img>
        <img src="/Window.svg" alt="window"></img>
    <Footer/>
    </>
  );
}
