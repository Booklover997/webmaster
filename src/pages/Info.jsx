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
    <div>
      {result ? (
        <div>
          <h2>{result.Heading}</h2>
          <p>{result.text}</p>
        </div>
      ) : (
        <div>Program not found</div>
      )}
    </div>
    <Footer></Footer>
    </>
  );
};
