import React from 'react';

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Soft Skill" />
    </Container>
  );
};

export default Header;
