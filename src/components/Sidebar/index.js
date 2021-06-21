import React from "react";
import {
  SidebarWrap,
  IconWrap,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isSidebarOpen, toggle }) => {
  return (
    <>
      <SidebarWrap isSidebarOpen={isSidebarOpen}>
        <IconWrap>
          <CloseIcon onClick={toggle} />
        </IconWrap>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Menu
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Reservations
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Events
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            Contact Us
          </SidebarLink>
          <SidebarLink to="/" onClick={toggle}>
            Order Online
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrap>
    </>
  );
};

export default Sidebar;
