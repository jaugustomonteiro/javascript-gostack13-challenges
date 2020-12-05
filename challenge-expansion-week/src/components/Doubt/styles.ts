import styled from 'styled-components';

import doubtImg from '../../assets/doubt.svg';

export const Container = styled.div`
  background: #303131;
  padding: 100px 0;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  > div:nth-child(1) {
    display: flex;
    flex: 1;

    h1 {
      line-height: 50px;
      font-size: 40px;
      text-align: right;
      margin-right: 50px;
    }

    div {
      flex: 1;
      background: url(${doubtImg}) no-repeat center right;
      background-size: contain;
      min-width: 400px;
      height: 214px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  > div:nth-child(2) {
    flex: 1;
    margin-left: 20px;

    p {
      line-height: 35px;
      margin: 20px 0;

      &:nth-child(2) {
        font-weight: 600;
        font-size: 30px;
        color: #fdbf3d;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    > div:nth-child(1) {
      h1 {
        text-align: center;
        margin-right: 0;
      }
    }
  }
`;
