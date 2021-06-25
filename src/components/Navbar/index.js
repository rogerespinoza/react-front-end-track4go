import React from "react";
import { Nav, NavbarContainer, NavMenu, NavItem, NavLinks } from "./elements";
export default function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Crear usuario</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/users">Usuarios</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}
