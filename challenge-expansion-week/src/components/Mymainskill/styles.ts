import styled from 'styled-components';

export const Container = styled.div`
  background: #303131;
  padding: 100px 0;
`;

export const Content = styled.div`
  max-width: 1100px;
  padding: 0 1.5rem;
  margin: 0 auto;
  p {
    color: #959696;
  }

  div.preferred-skill {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    h1 {
      font-size: 40px;
      font-weight: 600;
    }
    img {
      height: 350px;
    }
    div {
      padding: 0 50px;
    }
    @media (max-width: 900px) {
      flex-direction: column;
      h1 {
        text-align: center;
        margin: 20px 0;
      }
      div {
        padding: 0px;
      }
    }
  }

  div.time-management {
    h1 {
      font-size: 60px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 50px;
    }
    p {
      margin-bottom: 50px;
    }

    @media (max-width: 900px) {
      h1 {
        font-size: 40px;
      }
    }
  }

  div.service-management {
    display: flex;
    align-items: center;
    div {
      h1 {
        font-size: 40px;
        font-weight: bold;
      }
      p {
        margin: 20px 0;
      }
    }
    ul {
      list-style: none;
      margin-top: 20px;
      li {
        display: flex;
        align-items: center;
        color: #ffffff;
        svg {
          margin-right: 10px;
          fill: #fbd214;
        }
      }
    }

    img {
      height: 300px;
    }
    @media (max-width: 900px) {
      flex-direction: column;
      div {
        h1 {
          text-align: center;
        }
        p {
          margin: 20px 0;
        }
      }
    }
  }
`;
