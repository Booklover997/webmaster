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

          <img loading="eager" src="Green Energy.svg"></img>
        </div>
      </div>
      <div class="bento">
        <div class="bentoTitle"><div>Go Green in 6 Easy Steps</div></div>
        <a href="#mech"class="mechanicalBento"><div><img loading="eager" src="gears.svg"></img><p>Make swaps to existing mechanical systems</p></div></a>
        <a href="#water" class="waterBento"><div><img loading="eager" src="Faucet.svg"></img><p>Improve Water Heating Systems</p></div></a>
        <a href="#foam" class="foamBento"><div><img loading="eager" src="Spray.svg"></img><p>Properly Insulate</p></div></a>
        <a href="#window" class="windowBento"><div><img loading="eager" src="Window.svg"></img><p>Use energy efficient windows to prevent heatloss and reduce the need for air-conditioning</p></div></a>
        <a href="#lightBulb" class="lightBulbBento"><div><img loading="eager" src="LightBulb.svg"></img><p>Use energy efficient light bulbs</p></div></a>
        <a href="#solar" class="solarBento"><div><img loading="eager" src="Solar Panel.svg"></img><p>After cutting energy useage renewable energy systems becomes worth it</p></div></a>
      </div>

      <div class="flex">
        <div class="bullets">
        <Bullet id="mech" srcbullet="Green1.svg" src="gears.svg" alt="Groups of gears"><h1>Improve Mechanical Systems</h1><p> Heating and cooling take up approximately 43% of the home utility bill. Upgrading to the most energy efficient heating and cooling systems can cut energy use by up to 50%. This can also be applied to appliances such as washing machines and refrigerators through ENERGY STAR certified appliances.  
</p></Bullet>
        <span></span>
        <Bullet id="water" srcbullet="Green2.svg" src="Faucet.svg" alt="Faucet"><h1>Improve Water Heating Systems</h1><p>Use an energy efficient tank water heater or a tankless water heater. This allows for a greater life-expectancy of the heaters up to approximately 20 years and increased savings in water bills. It is also important to decrease the amount of hot water used, which uses less energy and decreases heating costs.
</p></Bullet>
        <span></span>

        <Bullet id="foam" srcbullet="Green3.svg" src="spray.svg" alt="Foam spray"><h1>Properly Insulate</h1><p>Properly insulating your home is necessary to ensure that heat does not escape from spaces such as the attic, basement, or even ducts. This needs to be done so that air flows in a balanced manner throughout the house. Some insulation materials include fiberglass, rockwool, cellulose, and natural fibers.
</p></Bullet>
        <span></span>

        <Bullet id="window" srcbullet="Green4.svg" src="Window.svg" alt="Window"><h1>Use Energy Efficient Windows</h1><p>Heat loss can be minimized by installing ENERGY STAR certified products and storm windows. These installations can reduce heat loss in your home by 20% to 25%. This reduces the need to use energy consuming products such as air conditioners.</p></Bullet>
        <span></span>

        <Bullet id="lightBulb" srcbullet="Green5.svg" src="LightBulb.svg" alt="Lightbulb"><h1>Use Energy Efficient Light Bulbs</h1><p>Using energy efficient lighting systems such as LED lights allows you to attain the same amount of light for less cost, as they use less energy and last longer. Using ENERGY STAR certified systems allows for even greater energy savings. </p></Bullet>
        <span></span>

        <Bullet id="solar" srcbullet="Green6.svg" src="Solar Panel.svg" alt="Solar Panel"><h1>Renewable Energy Source</h1><p>Installing renewable energy directly to your home is an effective way to minimize energy waste and not harm the environment. One way to do this is through the use of solar panels, which convert solar energy into electricity. Different types of solar technologies include photovoltaic (PV) and concentrating solar power (CSP).
</p></Bullet>
        </div>
      </div>
      </div>
      <Footer />
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
