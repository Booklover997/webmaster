import "./css/nav.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown, DropdownItem } from "../components/Dropdown.jsx";
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <ul>
        <NavItem link="/" display="Home"></NavItem>
        <NavItem link="/reduction" display="Reduction"></NavItem>
        <NavItem link="/programs" display="Programs"></NavItem>
        <NavItem link="#" display="Info">
          <Dropdown>
            <DropdownItem link="#">DropdownItem1</DropdownItem>
            <DropdownItem link="#">DropdownItem2</DropdownItem>
            <DropdownItem link="#">DropdownItem3</DropdownItem>
          </Dropdown>
        </NavItem>
      </ul>
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
      <NavLink to={props.link} onMouseEnter={() => setExpand(!expanded)} onMouseLeave={() => setExpand(!expanded)}>
        {props.display}
      </NavLink>
      {expanded &&props.children&& (
        <style>{`.dropdown { transform:none; opacity:1; }`}</style>
      )}
      {props.children}
    </li>
  );
}
