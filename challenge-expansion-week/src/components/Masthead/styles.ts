import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 1100px;
  padding: 50px 1.5rem;
  height: 100%;
  margin: 0 auto;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 60px;
      font-weight: 600;
    }

    p {
      font-size: 50px;
      font-weight: 400;
      margin-top: 20px;
      line-height: 60px;
      color: #959696;
    }

    button {
      color: #ffffff;
      background: ${shade(0.2, '#fbd214')};
      display: inline;
      text-decoration: none;
      width: fit-content;
      padding: 20px 40px;
      font-size: 20px;
      font-weight: 600;
      border-radius: 8px;
      margin: 30px 0;
      &:hover {
        background: #fbd214;
      }
    }
  }
  div:nth-child(2) {
    padding: 1.5rem;
    img {
      max-height: 450px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    div:nth-child(1) {
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 40px;
      }
    }
    h1,
    p {
      text-align: center;
    }
    button {
      width: 100% !important;
    }
    div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 100% !important;
      }
    }
  }
`;
