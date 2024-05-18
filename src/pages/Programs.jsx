import React, { useState } from "react";
import "./css/styles.css";
import "./css/programs.css";
import {Nav,Footer} from "./Nav.jsx";
import data from  "./data.json";

export default function Programs() {
  const [search, changeSearch] = useState("");

  function handleInputChange(event) {
    changeSearch(event.target.value);
    console.log(search);
  }
  return (
    <>
      <Nav />
      <h1 class="title">Programs</h1>
      <div className="searchContainer">

        <div className="search">
          <img src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Group%203%20(1).svg?v=1715136160211"></img>
          <input
            type="text"
            name="Search"
            placeholder="search"
            value={search} // Value is controlled by the state
            onChange={handleInputChange} // Call handleInputChange on change
          ></input>
        </div>
        <div className="icons">
          <div className="icon">
            <img alt= "homeBased" src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Group%202%20(1).svg?v=1715129174004"></img>
          </div>
                    <div alt="carBased" className="icon">
            <img src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Group%202%20(1).svg?v=1715129174004"></img>
          </div>
                    <div className="icon">
            <img src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Group%202%20(1).svg?v=1715129174004"></img>
          </div>
        </div>
      </div>
      <List input={search} />
    </>
  );
}

// handle the different articles and stuff
function List(props) {
  const searchData = data.filter((og) => {
    if (props.input === "") {
      return og;
    } else {
      const head = og.Heading.toLowerCase().includes(props.input.toLowerCase());
      const body = og.text.toLowerCase().includes(props.input.toLowerCase());
      let tags = false;
      for (const tag of og.tags) {
        console.log(tag);
        if (tagMatchesInput(tag, props.input)) {
          console.log(tag + "cooolio");
          tags = true;
          break;
        }
      }
      return head || body || tags;
    }
  });

  return (
    <div className="programCards">
      {searchData.map((item) => (
        <div className="programCard" key={item.Heading}>
          <h1>{item.Heading}</h1>
          <p>
            Tags: {item.tags[0]}, {item.tags[1]}
          </p>
          <p>{item.text}</p>
          <a href={"programs/" + item.Heading}>Learn More</a>
        </div>
      ))}
    </div>
  );
}

//check tags
function tagMatchesInput(tag, input) {
  const tagAliases = {
    car: ["automobile", "vroom"],
  };

  tag = tag.toLowerCase();
  input = input.toLowerCase();

  // Check if it matches
  if (tag.includes(input)) {
    return true;
  }

  const aliases = tagAliases[tag];
  if (aliases) {
    for (const i of aliases) {
      if (i.includes(input)) {
        return true;
      }
    }
  }

  return false;
}
