import React from 'react';

import { Container, Content } from './styles';

import resilienceImg from '../../assets/resilience.svg';

const Resilience: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Resilência!!!</h1>
        <div>
          <p>
            A palavra resiliência vem do latim: Resilire, que significa “voltar
            atrás”. Está associada à capacidade que cada pessoa tem de lidar com
            seus próprios problemas, de sobreviver e superar momentos difíceis,
            diante de situações adversas e não ceder à pressão,
            independentemente da situação.
            <br />
            <a href="https://blog.solides.com.br/entenda-definitivamente-soft-skills">
              https://blog.solides.com.br/entenda-definitivamente-soft-skills/
            </a>
          </p>
          <img src={resilienceImg} alt="Resilience" />
        </div>
      </Content>
    </Container>
  );
};

export default Resilience;
