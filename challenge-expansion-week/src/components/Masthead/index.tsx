import React, { useState } from 'react';

import Modal from '@bdenzer/react-modal';

import { Container } from './styles';

import softSkillanner from '../../assets/softskill-banner.svg';

const Masthead: React.FC = () => {
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState('');

  function openModal() {
    setShow(true);
    setSrc('https://www.youtube.com/embed/qrB94YucxFw');
  }

  function closeModal() {
    setShow(false);
    setSrc('');
  }

  return (
    <>
      <Modal
        closeModal={closeModal}
        shouldShowModal={show}
        title="Saiba mais sobre Soft Skill"
        customStyle={{
          animationTime: 400,
          modalHeader: {
            backgroundColor: '#322A04',
          },

          modalTitle: {
            color: '#fff',
          },
          closeButtonText: {
            color: '#fff',
          },
          hoveredButtonText: {
            fontWeight: 'bold',
          },
          modalBody: {
            backgroundColor: '#303131',
            padding: 0,
            margin: 0,
          },
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          style={{ width: '100%', height: 400, margin: 0, padding: 0 }}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>

      <Container>
        <div>
          <h1>Soft Skill</h1>
          <p>O que é, quais são e qual considero mais relevante</p>
          <button onClick={openModal}>O que é Soft Skill e Hard Skill?</button>
        </div>
        <div>
          <img src={softSkillanner} alt="softskill" />
        </div>
      </Container>
    </>
  );
};

export default Masthead;
