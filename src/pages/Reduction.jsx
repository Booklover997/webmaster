import "./css/styles.css";
import {Nav} from "./Nav.jsx";
import Typewriter from "typewriter-effect";

export default function Reduction() {
  return (
    <>
      <Nav />
      <div class="heroContainer">
        <div class="hero">
          <img src="https://cdn.glitch.global/2a9ebc67-d40c-4fbd-8f0d-de01dd8f3afd/Earth.svg?v=1714777355917"></img>
          <p class="heroText">
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
            <div class="CTAcontainer">
              <button class="CTA">
                <span>
                  <div>Learn fdsfdsffffffffff</div>{" "}
                  <img
                    alt="earth"
                    src="https://cdn.glitch.global/2a9ebc67-d40c-4fbd-8f0d-de01dd8f3afd/arrow.svg?v=1714799335617"
                  ></img>{" "}
                </span>
              </button>
            </div>
          </p>
        </div>
        <div class="custom-shape-divider-top-1714858846">
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

      <div class="cardContainer">
        <div class="cardFlex">
          <div class="card">
            <img src="https://cdn.glitch.global/2a9ebc67-d40c-4fbd-8f0d-de01dd8f3afd/EnergySlice.svg?v=1714860951226"></img>
            <p>Statistic Statistic Statistic Statistic</p>
            <div class="underline"><a>Learn More</a></div>
          </div>
          
          <div class="card">
            <img src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Leaf.svg?v=1715058961226"></img>
          </div>
          <div class="card">
            <img src="https://cdn.glitch.global/2a9ebc67-d40c-4fbd-8f0d-de01dd8f3afd/arrow.svg?v=1714799335617"></img>
          </div>
        </div>
      </div>
    </>
  );
}
