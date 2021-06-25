import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #efefef;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #a9a9a9;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80px;
`;


export const NavMenu = styled.ul`

  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #ff3b3f;
  }

`;

export const NavLinks = styled(Link)`
  color: #a9a9a9;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #ff3b3f
  }
`;
