import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: var(--nav-bg-color);
  padding: 1em 0;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius:0 0 10% 10%;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`;

const Logo = styled.a`
  font-size: 1.8em;
  font-weight: bold;
  color: var(--accent1-color);
  text-decoration: none;
`;

const MenuContainer = styled.div`
  display: flex;
  gap: 1.5em;
`;

const Menu = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: var(--main-text-color);
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-bg-color);
  }
`;

const Dropdown = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background-color: var(--nav-bg-color);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75em 1em;
  text-decoration: none;
  color: var(--main-text-color);
  font-size: 0.9em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--accent1-color);
    color: var(--main-bg-color);
  }
`;

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef();

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">EXAMED</Logo>
        <MenuContainer ref={dropdownRef}>
          <Menu>
            <MenuButton onClick={() => toggleMenu('math')}>Математика</MenuButton>
            <Dropdown isOpen={openMenu === 'math'}>
              <DropdownItem to="/math-quiz">Quiz</DropdownItem>
              <DropdownItem to="/math-blogs">Blogs</DropdownItem>
              <DropdownItem to="/math-resources">Resources</DropdownItem>
            </Dropdown>
          </Menu>
          <Menu>
            <MenuButton onClick={() => toggleMenu('russian')}>Русский</MenuButton>
            <Dropdown isOpen={openMenu === 'russian'}>
              <DropdownItem to="/russian-quiz">Quiz</DropdownItem>
              <DropdownItem to="/russian-blogs">Blogs</DropdownItem>
              <DropdownItem to="/russian-resources">Resources</DropdownItem>
            </Dropdown>
          </Menu>
          <Menu>
            <MenuButton onClick={() => toggleMenu('it')}>Информатика</MenuButton>
            <Dropdown isOpen={openMenu === 'it'}>
              <DropdownItem to="/it-quiz">Quiz</DropdownItem>
              <DropdownItem to="/it-blogs">Blogs</DropdownItem>
              <DropdownItem to="/it-resources">Resources</DropdownItem>
            </Dropdown>
          </Menu>
        </MenuContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
