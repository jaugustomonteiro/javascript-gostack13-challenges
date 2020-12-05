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

  > p {
    text-align: center;
    color: #959696;
    font-size: 20px;
  }
  > a {
    display: block;
    text-align: center;
    font-size: 10px;
    text-decoration: none;
    color: #fbd214;
    opacity: 0.6;
    margin-bottom: 100px;
  }

  > div.feature {
    display: flex;
    padding: 0 1.5rem;
    align-items: center;
    margin-bottom: 100px;

    p {
      padding-right: 100px;
      text-transform: uppercase;
      font-size: 30px;
      opacity: 0.6;
    }

    img {
      height: 350px;
    }
    @media (max-width: 900px) {
      p {
        padding-right: 0;
        font-size: 20px;
      }
      img {
        height: 200px;
      }
    }
  }

  > div.sub-feature {
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    div {
      padding: 50px;
      p {
        font-weight: 300;
        justify-content: center;
        color: #959696;
        font-style: italic;
      }
      a {
        font-size: 10px;
        text-decoration: none;
        color: #fbd214;
        opacity: 0.6;
        margin-bottom: 100px;
      }
    }

    > img {
      height: 350px;
    }
    @media (max-width: 900px) {
      p {
        padding-right: 0;
      }
      img {
        height: 100px;
      }
    }
  }

  > div.sub-comment {
    padding: 0 50px;
    p {
      line-height: 40px;
      letter-spacing: 1.5px;
    }
  }
`;
