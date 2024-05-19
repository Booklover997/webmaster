import React from 'react';
import { useParams } from 'react-router-dom';
import data from "./data.json";
import {Nav, Footer} from "./Nav";
import "./css/programs.css";
export default function Info() {
  const { programHeader } = useParams();
  const result = data.find(item => item.Heading === programHeader);

  return (
    <>
    <Nav></Nav>
    <div class="body">
      {result ? (
        <>
              <div className='infoHeader'><a href="../programs" className='back'> <img src = "/back.svg" alt="back"/>View All</a>
      <h2 className='infoTitle'>{result.Heading}</h2>
      </div>
        <div class="infoGrid">
            <div class="infoText">
          <p>{result.text}</p>
          </div>
          <div class="infoInfo">
            <h3 class="tagHeader">Tags</h3>
          {result.tags.map((tag) => (
          <a href={`../programs?search=${tag}`} className="tag" key={tag}>{tag}<div className="learnMore">See more programs about {tag}s!</div></a>
        ))}
        <h3 className="savingsHeader">Savings</h3>
        <a className="savings">$400</a>
        <h3 className="linkHeader">Learn More</h3>
        {result.learnMore.map((link) => (
          <a href={link[1]} className="link" key={link}>{link[0]}</a>
        ))}
        </div>
        </div>
        </>
      ) : (
        <div>Program not found</div>
      )}
    </div>
    <Footer></Footer>
    </>
  );
};
