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
              <div className='infoHeader'><a href="../programs" className='back'> <img src = "/back.svg" alt="back"/>Back to Home</a>
      <h2 className='infoTitle'>{result.Heading}</h2>
      </div>
        <div>
          {result.tags.map((tag) => (
          <a href={`../programs?search=${tag}`} className="tag" key={tag}>{tag}<div className="learnMore">See more programs about {tag}!</div></a>
        ))}
          <p>{result.text}</p>
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
