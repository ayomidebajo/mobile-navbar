import React from "react";

const DrawerToggle = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
    <div className="toggle-button__line"></div>
  </button>
);

export default DrawerToggle;
