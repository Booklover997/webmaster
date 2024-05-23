import "./css/styles.css";
import { Nav, Footer } from "./Nav.jsx";
import "./css/benefits.css";
import "./css/green.css";
//ed306f697e
export default function GoingGreen() {
  return (
    <>
      <Nav />
      <div class="pageContent">
      <div className="introContainer">
        <div class="flex center">
          <div>
            <h1>What Is Green Energy?</h1>
            <p>Green energy is a type of renewable energy that generates green power without causing any harm to the environment.Green Energy is generated through:Wind energySolar energyBiomass energGeothermal energyBiogas energyLow-impact hydropower energyNegative effects of fossil fuels on the environment Burning fossil fuels releases nitrogen oxides into the atmosphere which can lead to smog and acid rain.</p>
          </div>

          <img loading="eager" src="Green Energy.svg"></img>
        </div>
      </div>
      <div class="bento">
        <div class="bentoTitle"><div>Go Green in 6 Easy Steps</div></div>
        <a href="#mech"class="mechanicalBento"><div><img loading="eager" src="gears.svg"></img><p>Make swaps to existing mechanical systems</p></div></a>
        <a href="#water" class="waterBento"><div><img loading="eager" src="Faucet.svg"></img><p>Improve Water Heating Systems</p></div></a>
        <a href="#foam" class="foamBento"><div><img loading="eager" src="Spray.svg"></img><p>Properly Insulate</p></div></a>
        <a href="#window" class="windowBento"><div><img loading="eager" src="Window.svg"></img><p>Energy efficient windows to prevent heatloss and reduce the need for air-conditioning</p></div></a>
        <a href="#lightBulb" class="lightBulbBento"><div><img loading="eager" src="LightBulb.svg"></img><p>Use energy efficient light bulbs</p></div></a>
        <a href="#solar" class="solarBento"><div><img loading="eager" src="Solar Panel.svg"></img><p>After cutting energy useage renewable energy systems becomes worth it</p></div></a>
      </div>

      <div class="flex">
        <div class="bullets">
        <Bullet id="mech" srcbullet="Green1.svg" src="gears.svg" alt="Groups of gears"><h1>Mechanical Parts</h1><p>The furnace or boiler is often the least efficient energy consumer in older houses. Replacing window air conditioning with a central AC unit is another immediate energy saver. Lastly, solar water heating is an excellent alternative to gas or electric heaters. Making these swaps/upgrades to your existing mechanical systems can immediately cut down your energy consumption.</p></Bullet>
        <span></span>
        <Bullet id="water" srcbullet="Green2.svg" src="Faucet.svg" alt="Faucet"><h1>Mechanical Parts</h1><p>The furnace or boiler is often the least efficient energy consumer in older houses. Replacing window air conditioning with a central AC unit is another immediate energy saver. Lastly, solar water heating is an excellent alternative to gas or electric heaters. Making these swaps/upgrades to your existing mechanical systems can immediately cut down your energy consumption.</p></Bullet>
        <span></span>

        <Bullet id="foam" srcbullet="Green3.svg" src="spray.svg" alt="Foam spray"><h1>Mechanical Parts</h1><p>The furnace or boiler is often the least efficient energy consumer in older houses. Replacing window air conditioning with a central AC unit is another immediate energy saver. Lastly, solar water heating is an excellent alternative to gas or electric heaters. Making these swaps/upgrades to your existing mechanical systems can immediately cut down your energy consumption.</p></Bullet>
        <span></span>

        <Bullet id="window" srcbullet="Green4.svg" src="Window.svg" alt="Window"><h1>Mechanical Parts</h1><p>The furnace or boiler is often the least efficient energy consumer in older houses. Replacing window air conditioning with a central AC unit is another immediate energy saver. Lastly, solar water heating is an excellent alternative to gas or electric heaters. Making these swaps/upgrades to your existing mechanical systems can immediately cut down your energy consumption.</p></Bullet>
        <span></span>

        <Bullet id="lightBulb" srcbullet="Green5.svg" src="LightBulb.svg" alt="Lightbulb"><h1>Mechanical Parts</h1><p>The furnace or boiler is often the least efficient energy consumer in older houses. Replacing window air conditioning with a central AC unit is another immediate energy saver. Lastly, solar water heating is an excellent alternative to gas or electric heaters. Making these swaps/upgrades to your existing mechanical systems can immediately cut down your energy consumption.</p></Bullet>
        <span></span>

        <Bullet id="solar" srcbullet="Green6.svg" src="Solar Panel.svg" alt="Solar Panel"><h1>Mechanical Parts</h1><p>The furnace or boiler is often the least efficient energy consumer in older houses. Replacing window air conditioning with a central AC unit is another immediate energy saver. Lastly, solar water heating is an excellent alternative to gas or electric heaters. Making these swaps/upgrades to your existing mechanical systems can immediately cut down your energy consumption.</p></Bullet>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}
function Bullet(props){
  return (
    <div id={props.id} class="bulletGreen">
    <img src={props.srcbullet} class="bulletImg"></img>
    <div className="content"><img src={props.src} alt={props.alt}></img>
    {props.children}
    </div>
  </div>
  );
} 
