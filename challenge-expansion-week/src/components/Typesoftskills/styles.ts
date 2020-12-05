import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 1100px;
  padding: 0 1.5rem;
  margin: 0 auto;
  padding: 100px 0;

  h1 {
    text-align: center;
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 40px;
    }
  }

  div.grid-skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 0;
    grid-template-areas:
      '. .'
      '. .';
    div {
      height: 300px;
      margin: 10px;
      padding: 20px 30px;

      h3 {
        font-size: 30px;
      }

      border-radius: 16px;
      &:nth-child(1) {
        background: #3ab1fe;
      }
      &:nth-child(2) {
        background: #fdbf3d;
      }
      &:nth-child(3) {
        background: #d046d3;
      }
      &:nth-child(4) {
        background: #1fd454;
      }
      @media (max-width: 900px) {
        h3 {
          font-size: 20px;
        }
        p {
          font-size: 10px;
        }
      }
    }
  }
`;
