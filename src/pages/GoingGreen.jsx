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
            <p>Green Energy, a type of renewable energy, is energy that has no negative effects on the environment, and is constantly and naturally replenished. Green energy can be attained through different sources such as solar power and wind power. The rate at which these types of energy are harnessed and stored are significantly larger than the rate at which humans consume this energy and generate electricity. This is less harmful to the environment than the burning of fossil fuels, as there are no greenhouse gas emissions that lead to air and water pollution.</p>
          </div>

          <img src="Green Energy.svg"></img>
        </div>
      </div>
      <div class="bento">
        <div class="bentoTitle"><div>Go Green in 6 Easy Steps</div></div>
        <a href="#mech"class="mechanicalBento"><div><img src="gears.svg"></img><p>Make swaps to existing mechanical systems</p></div></a>
        <a href="#water" class="waterBento"><div><img src="Faucet.svg"></img><p>Improve Water Heating Systems</p></div></a>
        <a href="#foam" class="foamBento"><div><img src="Spray.svg"></img><p>Properly Insulate</p></div></a>
        <a href="#window" class="windowBento"><div><img src="Window.svg"></img><p>Energy efficient windows to prevent heatloss and reduce the need for air-conditioning</p></div></a>
        <a href="#lightBulb" class="lightBulbBento"><div><img src="LightBulb.svg"></img><p>Use energy efficient light bulbs</p></div></a>
        <a href="#solar" class="solarBento"><div><img src="Solar Panel.svg"></img><p>After cutting energy useage renewable energy systems becomes worth it</p></div></a>
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
