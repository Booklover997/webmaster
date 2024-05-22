import "./css/styles.css";
import {Nav, Footer} from "./Nav.jsx";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

//ed306f697e
export default function Home() {
  return (
    <>
      <Nav />
      <div class="pageContent">

      <div className="heroContainer">
        <div className="hero">
          <img alt="Earth" src="/Earth.svg"></img>
          <p className="heroText">
            <span>
              How can you can make a <br></br>
              <Typewriter
                options={{
                  strings: ["Difference", "Change", "Impact"],
                  autoStart: true,
                  loop: true,
                }}
              />
              ?
            </span>
            <br></br>
            <div className="CTAcontainer">
              <a href="/green" className="CTA">
                <span>
                  <div>Learn Now</div>{" "}
                  <img
                    alt="arrow"
                    src="https://cdn.glitch.global/2a9ebc67-d40c-4fbd-8f0d-de01dd8f3afd/arrow.svg?v=1714799335617"
                  ></img>{" "}
                </span>
              </a>
            </div>
          </p>
        </div>
        <div className="wave1">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="statement">
         <div className="right"><h1>Time is running Out!</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod nisl eros, vitae iaculis massa condimentum eget. Vestibulum felis massa, hendrerit vel tristique nec, hendrerit eu diam. Quisque placerat feugiat tincidunt. Sed commodo feugiat rutrum. Nunc eu orci at sapien pretium interdum. Cras feugiat eleifend ante, malesuada lacinia odio interdum sit amet. Praesent faucibus pulvinar ultrices. Praesent laoreet elit ultrices turpis maximus, quis accumsan ipsum laoreet. Sed at ligula lectus. Morbi in interdum eros. Vestibulum rhoncus ex malesuada ullamcorper venenatis.</p></div>
        <div className="left"><img alt="Clock on fire" src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Slice%201%20(2).svg?v=1715020172749"></img></div>

      </div>
<div class="wave2">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="quoteContainer">
        <h1 className="quote">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <span className="text">
            For in the true nature of things, if we rightly consider, every{" "}
            <span className="green">green</span> tree is far more glorious than if
            it were made of gold and silver.
          </span>
          <FontAwesomeIcon icon={faQuoteRight} />
        </h1>
        <h3> - Martin Luther King Jr.</h3>
      </div>

      <div className="cardContainer">
<div className="wave3">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
        <div className="cardFlex">
          <div className="card">
            <img
              src="https://cdn.glitch.global/2a9ebc67-d40c-4fbd-8f0d-de01dd8f3afd/EnergySlice.svg?v=1714860951226"
              alt="Energy"
            ></img>
            <p>Statistic Statistic Statistic Statistic</p>
            <div className="underline">
              <a href="/programs">Learn More</a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Vector%20(1).svg?v=1715206045012"
              alt="Leaf"
            ></img>
            <p>Statistic Statistic Statistic Statistic</p>
            <div className="underline">
              <a href="/programs">Learn More</a>
            </div>
          </div>
          <div className="card">
            <img src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/LightBulb.svg?v=1714956778576" alt="Lightbulb"></img>
            <p>Statistic Statistic Statistic Statistic</p>
            <div className="underline">
              <a href="/programs">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
    </>
  );
}
