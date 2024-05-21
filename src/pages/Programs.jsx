import React, { useState } from "react";
import {Nav,Footer} from "./Nav.jsx";
import data from  "./data.json";
import { useLocation } from "react-router-dom";
import "./css/styles.css";
import "./css/programs.css";

export default function Programs() {
  // check if parameter in url is present
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get("search") || "";
  const [search, changeSearch] = useState(state);

  function handleInputChange(event) {
    changeSearch(event.target.value);
  }
  return (
    <>
      <Nav />
      <div class="pageContent">

      <h1 class="title">Programs</h1>
      <div className="searchContainer">

        <div className="search">
          <img alt="Search Icon" src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Group%203%20(1).svg?v=1715136160211"></img>
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
            <img alt= "Home Based" src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Group%202%20(1).svg?v=1715129174004"></img>
          </div>
                    <div alt="carBased" className="icon">
            <img alt="Car Based" src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Group%202%20(1).svg?v=1715129174004"></img>
          </div>
                    <div className="icon">
            <img alt="Green" src="https://cdn.glitch.global/9a9dd750-ad57-43b6-af2a-df259480aa6d/Group%202%20(1).svg?v=1715129174004"></img>
          </div>
        </div>
      </div>
      <List input={search} />
      <Footer/>
      </div>
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
    <div className="programCardContainer">
    <div className="programCards">
      {searchData.map((item) => (
        <div className="programCard" key={item.Heading}>
          <h1>{item.Heading}</h1>
          <p>
            Tags: {item.tags.map((tag) => (
          <a href={`../programs?search=${tag}`} className="tag proTag" key={tag}>{tag}<div className="learnMore">See more programs about {tag}s!</div></a>
        ))}
          </p>
          <p>{item.text}</p>
          <a className="link" href={"programs/" + item.Heading}>Learn More</a>
        </div>
      ))}
    </div>
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
