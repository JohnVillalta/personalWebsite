import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #496e46;
    height: 85px;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0.2rem 31vw;
    z-index: 12;
`;

//below is the properties for the links on the navbar
export const NavLink = styled(Link)` 
    font-size: 110%; 
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #c6e6b8;
        text-shadow: 2px 2px 2px #b38e50;
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #FFF0D7;
    }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  width: 100vw;
  /* white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;