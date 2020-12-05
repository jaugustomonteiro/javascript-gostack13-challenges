import React from 'react';

import { Container, Content } from './styles';

const Doubt: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <div>
            <h1>Será que sou capacitado?</h1>
          </div>
        </div>
        <div>
          <p>
            Tenho um currículum turbinado, sou poligrota, diversos cursos e
            especialidades, capacitado a trabalhar nas áreas que almeijo, mas me
            veio a pergunta...
          </p>
          <p>Como estão minhas Soft Skills?</p>
          <p>
            Tive que parar para pensar, pois esse termo é novo para mim. Afinal,
            o que siginifica, quais as mais importantes, e conhecendo-as, qual
            considero a mais importante. Será qué há um poucos delas dentro de
            mim?
          </p>
        </div>
      </Content>
    </Container>
  );
};

export default Doubt;
