import React from 'react';

import {
  MdLightbulbOutline,
  MdSentimentVerySatisfied,
  MdTransform,
  MdAvTimer,
} from 'react-icons/md';

import { Container, Content } from './styles';

const Typesoftskills: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>
          <span>Algumas das Principais</span>
          <br />
          <span> Soft Skills</span>
        </h1>

        <div className="grid-skills">
          <div>
            <MdLightbulbOutline size={50} />
            <h3>Criatividade</h3>
            <p>
              Capacidade de gerar ideias inovadoras sobre um determinado assunto
              ou situação, ou desenvolver formas criativas para resolver um
              problema. A importância da criatividade e da inovação é uma
              questão mercadológica.
            </p>
          </div>

          <div>
            <MdSentimentVerySatisfied size={50} />
            <h3>Liderança</h3>
            <p>
              A capacidade de inspirar funcionários e motivar equipes a entregar
              resultados, sabendo quando servir de exemplo, quando delegar
              tarefas e como cobrar desempenho sem constranger o time.
            </p>
          </div>

          <div>
            <MdTransform size={50} />
            <h3>Flexibilidade e resiliência</h3>
            <p>
              Estão relacionadas à capacidade de se adaptar e continuar
              produzindo diante das mudanças de cenários, mesmo após
              experiências difíceis e que trouxeram prejuízos, mas também
              lições.
            </p>
          </div>

          <div>
            <MdAvTimer size={50} />
            <h3>Gestão do tempo</h3>
            <p>
              Uma competência que será útil por toda a carreira”. Administrar
              bem o tempo significa aproveitar esse bem tão escasso e definir
              prioridades, contabilizando o tempo ideal a ser investido em cada
              atividade. Essa soft skill está relacionada à organização”.
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Typesoftskills;
