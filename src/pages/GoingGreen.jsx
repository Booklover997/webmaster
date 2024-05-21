import "./css/styles.css";
import { Nav, Footer } from "./Nav.jsx";
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
        <div class="bentoTitle"><div>Go Green in 6 Easy Steps</div></div>
        <div class="mechanicalBento"><div><img src="gears.svg"></img><p>Make swaps to existing mechanical systems</p></div></div>
        <div class="waterBento"><div><img src="Faucet.svg"></img><p>Improve Water Heating Systems</p></div></div>
        <div class="foamBento"><div><img src="Spray.svg"></img><p>Properly Insulate</p></div></div>
        <div class="windowBento"><div><img src="Window.svg"></img><p>Energy efficient windows to prevent heatloss and reduce the need for air-conditioning</p></div></div>
        <div class="lightBulbBento"><div><img src="LightBulb.svg"></img><p>Use energy efficient light bulbs</p></div></div>
        <div class="solarBento"><div><img src="Solar Panel.svg"></img><p>After cutting energy useage renewable energy systems becomes worth it</p></div></div>
      </div>

      <div class="flex">
        <div class="bullets">
        <Bullet srcbullet="1.svg" src="gears.svg" alt="Groups of gears"></Bullet>
        <Bullet srcbullet="Green2.svg" src="Faucet.svg" alt="Faucet"></Bullet>
        <Bullet srcbullet="Green3.svg" src="spray.svg" alt="Foam spray"></Bullet>
        <Bullet srcbullet="Green4.svg" src="Window.svg" alt="Window"></Bullet>
        <Bullet srcbullet="Green5.svg" src="LightBulb.svg" alt="Lightbulb"></Bullet>
        <Bullet srcbullet="Green6.svg" src="Solar Panel.svg" alt="Solar Panel"></Bullet>
        </div>
      </div>

      <img src="/Faucet.svg" alt="Faucet"></img>
      <img src="/gears.svg" alt="Gears"></img>
      <img src="/Window.svg" alt="window"></img>
      <Footer />
    </>
  );
}
function Bullet(props){
  return (
    <div class="bulletGreen">
    <img src={props.srcbullet} class="bulletImg"></img>
    <div className="content"><img src={props.src} alt={props.alt}></img>
    </div>
  </div>
  );
} 
