import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--nav-bg-color);
  padding: 2em;
  text-align: center;
  color: var(--main-text-color);
  position: absolute;
  width: 100%;
  bottom: 0;
  border-radius:10% 10% 0 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 EXAMED. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
