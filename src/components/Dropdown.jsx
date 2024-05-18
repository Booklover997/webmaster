import { NavLink } from "react-router-dom";
import React, { useState } from "react";
export  function Dropdown(props) {
    const [hover, setExpand] = useState(false);

  return (
    <>
    <div className="dropdown" onMouseEnter={() => setExpand(!hover)} onMouseLeave={() => setExpand(!hover)}>
  {props.children}
    </div>
          {hover && (
            <style>{`.dropdown { transform:none; opacity:1; }`}</style>
          )}
    </>
  );

}

export function DropdownItem(props) {
  return <NavLink LinkTo={props.link}>{props.children}</NavLink>;
}
