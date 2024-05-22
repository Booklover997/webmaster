import "./css/nav.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown, DropdownItem } from "../components/Dropdown.jsx";
export function Nav() {
  //mobile code
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu(){
    setShowMenu(!showMenu);
  }

  function closeMenuOnMobile(){
      if(window.innerWidth<=1200)
        {
          setShowMenu(false);
        }
  }
  return (
    <nav>
      <ul class={showMenu ? "show" :""}>
        <NavItem onClick={closeMenuOnMobile} link="/" display="Home"></NavItem>
        <NavItem onClick={closeMenuOnMobile} link="/green" display="Going Green"></NavItem>
        
        <NavItem onClick={closeMenuOnMobile} link="/benefits" display="Benefits"></NavItem>
        <NavItem onClick={closeMenuOnMobile} link="/programs" display="Programs"></NavItem>
        <NavItem onClick={closeMenuOnMobile} link="/Documentation" display="Info">
        </NavItem>
      </ul>
      <div class="menu">
        <img onClick={toggleMenu} src="Hamburger.svg" alt="Hamburger" class={showMenu ? "none" :""}></img>
        <img onClick={toggleMenu} src="X.svg" alt="X" class={showMenu ? "" :"none"}></img>
      </div>
      {showMenu && (
            <style>{`@media (max-width:1250px) {.pageContent { filter:blur(3px); overflow-y:hidden; }}`}</style>
          )}
    </nav>
    

  );
}

export function Footer() {
  return (
    <div className="footer">
      <div class="column 1">
        <ul>
          <li>Creators</li>
          <li>Your Mom</li>
          <li>Your Dad</li>
        </ul>
      </div>
      <div class="column 2">
        <ul>
          <li>Learn More</li>
          <li>
            <NavLink link="#">Programs</NavLink>
          </li>
          <li>
            <NavLink link="#">Lifestyle</NavLink>
          </li>
          <li>
            <NavLink link="#">Documentation</NavLink>
          </li>
        </ul>
      </div>
      <div class="column 3">
        <ul>
          <li>Header</li>
          <li>
            <NavLink link="#">Choice 1</NavLink>
          </li>
          <li>
            <NavLink link="#">Choice 2</NavLink>
          </li>
          <li>
            <NavLink link="#">Choice 3</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NavItem(props) {
  const [expanded, setExpand] = useState(false);

  return (
    <li>
      <NavLink  to={props.link} onMouseEnter={() => setExpand(!expanded)} onMouseLeave={() => setExpand(!expanded)}>
        {props.display}
      </NavLink>
      {expanded &&props.children&& (
        <style>{`.dropdown { transform:none; opacity:1; }`}</style>
      )}
      {props.children}
    </li>
  );
}
