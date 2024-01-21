import React from 'react'
import { Box } from '@mui/material'
import { NavLink as Link } from 'react-router-dom';
import logo from '../../src/assets/PureHousekeepingRectangle_WhFu.png'
import styled from '@emotion/styled'

import MenuIcon from '@mui/icons-material/Menu';

export const Nav = styled.nav`
    background: #012233;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #f0f;
  }
`;

export const Bars = styled(MenuIcon)`
  display: none;
  color: #fff;


  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    top: 0;
    right: 0;
    transform: translate(-100%, 90%);
    font-size: 1.8rem;
    cursor: pointer;
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
  background: #f0f;
  padding: 10px 22px;
  color: #fff;
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
    color: #012233;
  }
`;
const Topbar = () => {
  return (
    <Box className='w-full fixed z-50'>
      <Nav>
        <NavLink to="/">
          <img alt='logo' className='max-w-[250px] block m-auto' src={logo} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about-us" >
            About
          </NavLink>
          <NavLink to="/services/" >
            Services
          </NavLink>
          {/* <NavLink to="/careers/" >
            Careers
          </NavLink> */}
          <NavLink to="/faq/" >
            FAQ
          </NavLink>
          <NavLink to="/contact-us/" >
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink >
            Estimate
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </Box >
  )
}

export default Topbar