import React from 'react';

import GlobalStyle from '../../styles/global';

import { Container } from './styles';

import Masthead from '../../components/Masthead';
import Header from '../../components/Header';
import Doubt from '../../components/Doubt';
import Softskill from '../../components/Softskill';
import Resilience from '../../components/Resilience';
import Typesoftskills from '../../components/Typesoftskills';
import Mymainskill from '../../components/Mymainskill';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Masthead />
        <Doubt />
        <Softskill />
        <Resilience />
        <Typesoftskills />
        <Mymainskill />
        <Footer />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default Home;
