import React from 'react';
import styled from 'styled-components';
import Burguer from './Burguer';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burguer />
    </Nav>
  )
}

export default Navbar;