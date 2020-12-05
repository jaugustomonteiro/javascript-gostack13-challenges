import React from 'react';

import { Container, Content } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <p>Produzindo por Augusto Monteiro</p>
        <a href="https://github.com/jaugustomonteiro">Github</a>
      </Content>
    </Container>
  );
};

export default Footer;
