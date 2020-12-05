import styled from 'styled-components';

export const Container = styled.div`
  background: #303131;
  padding: 100px 0;
`;

export const Content = styled.div`
  max-width: 1100px;
  padding: 0 1.5rem;
  margin: 0 auto;
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

  div {
    display: flex;
    align-items: center;

    p {
      color: #959696;
      font-size: 20px;
      > a {
        text-align: center;
        font-size: 10px;
        text-decoration: none;
        color: #fbd214;
        opacity: 0.6;
        margin-bottom: 100px;
      }
    }

    img {
      height: 350px;
    }
    @media (max-width: 900px) {
      flex-direction: column;
      img {
        margin-top: 50px;
        height: 250px;
      }
    }
  }
`;
