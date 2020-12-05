import React from 'react';

import { MdAccessTime } from 'react-icons/md';
import { Container, Content } from './styles';

import timemanagementImg from '../../assets/time-management.svg';
import productivityImg from '../../assets/productivity.svg';

const Mymainskill: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className="preferred-skill">
          <img src={timemanagementImg} alt="Gestão do tempo" />
          <div>
            <h1>Qual Considero mais importante</h1>
            <p>
              Temos muito tempo porém não temos foco, ou podemos ter pouco tempo
              e ainda continuar sem foco. Gestão de tempo significa administrar
              bem o tempo e organiza-lo de forma que nossa vida pessoal e
              profissional caminhem de mãos dadas.
            </p>
          </div>
        </div>

        <div className="time-management">
          <h1>Gestão de Tempo</h1>
          <p>
            Há outras Soft Skill que também são impactantes, mas considero a
            gestão de tempo a mais relevante. Uma boa gerência de tempo pode nos
            torna altamente produtivo. Afinal, quando falta a orientação clara
            do resultado desejado, os colaboradores tendem a dar mais
            importância para as suas ações desordenadas do que realmente
            possuem, pois é natural parecermos produtivos e empenhados.
            Entretanto, gerir o tempo é, muitas vezes, fazer menos para ter
            resultados melhores.
          </p>
        </div>

        <div className="service-management">
          <div>
            <h1>Para quer gerir nosso Tempo</h1>
            <p>
              Adotar boas técnicas de gerenciamento de tempo em sua vida não
              significa espremer o máximo de tarefas que você puder em seu dia.
              Trata-se de otimizar a forma como você trabalha, executando
              tarefas mais simples de forma mais rápida para dedicar mais tempo
              àquelas mais complexas. Com isso, você terá mais tempo para
              descansar, passar junto de quem você gosta, fazer as coisas que
              ama. Não tente trabalhar duro: em vez disso, trabalhe de maneira
              mais inteligente. Abaixo um lista, não é uma regra mais que pode
              te direcinar a melhor gerência de seu tempo.
              <ul>
                <li>
                  <MdAccessTime />
                  Organize o trabalho segundo seus níveis de energia
                </li>
                <li>
                  <MdAccessTime />
                  Planeje seu dia na noite anterior
                </li>
                <li>
                  <MdAccessTime />
                  Comece o dia com o trabalho difícil
                </li>
                <li>
                  <MdAccessTime />
                  Delegue tarefas
                </li>
                <li>
                  <MdAccessTime />
                  Automatize tarefas repetitivas
                </li>
                <li>
                  <MdAccessTime />
                  Defina restrições de tempo
                </li>
                <li>
                  <MdAccessTime />
                  Elimine distrações
                </li>
                <li>
                  <MdAccessTime />
                  Tome decisões rápidas sobre coisas menos importantes
                </li>
              </ul>
            </p>
          </div>
          <img src={productivityImg} alt="Produtividade" />
        </div>
      </Content>
    </Container>
  );
};

export default Mymainskill;
