import React from "react";
import DrawerToggle from "../SideDrawer/DrawerToggle";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation ">
      <div className="toolbar__toggle-button">
        <DrawerToggle click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">Logo</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
