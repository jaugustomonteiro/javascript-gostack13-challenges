import React from 'react';

import { Container, Content } from './styles';

import questionImg from '../../assets/question-2.svg';
import newFeature from '../../assets/exchange.svg';
import certificate from '../../assets/certificate.svg';

const Softskill: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Soft Skills</h1>
        <p>
          Soft skills é o termo em ingles utilizado para definir as
          características comportamentais, de caráter subjetivo, que impactam na
          rotina de trabalho.
        </p>
        <a href="https://blog.solides.com.br/entenda-definitivamente-soft-skills">
          https://blog.solides.com.br/entenda-definitivamente-soft-skills/
        </a>
        <div className="feature">
          <p style={{ color: '#fbd214' }}>
            Caracteríscas comportamentais... de impacto subjetivo &#129300;
            &#129300; &#129300; Continuo sem entender, será que está
            relacionando com produtividade e trabalho emocional?
          </p>
          <img src={questionImg} alt="Questions" />
        </div>

        <div className="sub-feature">
          <img src={newFeature} alt="Questions" />
          <div>
            <p>
              O mercado de trabalho está modificando, principalmente por conta
              da incorporação de novas tecnologias. Essas ferramentas trazem
              novas exigências, como o desenvolvimento de das Soft Skills,
              características relacionadas as competências emocionais.
            </p>
            <a href="https://blog.solides.com.br/entenda-definitivamente-soft-skills">
              https://blog.solides.com.br/entenda-definitivamente-soft-skills/
            </a>
          </div>
        </div>

        <div className="sub-feature">
          <div>
            <p>
              A qualificação de uma equipe por competências é cada vez mais
              necessária, a fim de se tornar um verdadeiro diferencial
              competitivo. A maioria das habilidades de uma pessoa está atrelada
              ao seu histórico de vida — pessoal e profissional — e à sua
              estrutura psicológica, essas habilidades recebem o nome de soft
              skills.
            </p>
            <a href="https://blog.solides.com.br/entenda-definitivamente-soft-skills">
              https://blog.solides.com.br/entenda-definitivamente-soft-skills/
            </a>
          </div>
          <img src={certificate} alt="Questions" />
        </div>

        <div className="sub-comment">
          <p>
            Agora estou vendo com mais clareza, uma melhor definição para Soft
            Skill seria Inteligência emocianal, tem ligação direta com a
            personalidade das pessoa: podem ser intrínseca, faz parte da
            essência ou natureza da pessoa, ou, foram adquiridas e desenvolvidas
            com tempo. Vejo que a parte emocional influência muito na definição
            de Soft Skills. Há uma palavra nova que tem ligação direta com tema,
            iremos vê-la no próximo tópico e requer um cuidado especial para
            prossigui e encontrar uma melhor definição para o tema:
          </p>
        </div>
      </Content>
    </Container>
  );
};

export default Softskill;
