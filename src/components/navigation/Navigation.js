import React from 'react';
import NavigationItem from 'components/navigation/NavigationItem';
import styled from 'styled-components';

const StyledNav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px 55px 25px;
  position: relative;
  z-index: 3;
  position: fixed;
  top: 54px;
  width: 100%;
  background-color: #fff;
  @media only screen and (min-width: 768px) {
    justify-content: space-around;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <StyledNav>
        <NavigationItem name="MAIN!" link="/" />
        <NavigationItem name="STATS" link="/stats" />
        <NavigationItem name="REWARDS" link="/rewards" />
        <NavigationItem name="GRABBOMATS" link="/maps" />
      </StyledNav>
    </nav>
  );
};

export default Navigation;
