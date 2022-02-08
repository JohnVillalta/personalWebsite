import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #c7ba8b;
    height: 85px;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0.2rem calc((100vw - 1000px) / 2);
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
        color: #8A6A35;
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
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #5F4A28;
  padding: 10px 22px;
  color: #FFF;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #7F602E;
  }
`;