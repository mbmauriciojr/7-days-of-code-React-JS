import styled from 'styled-components';

const Body = styled.div`
  background-color: #ffe29a;
  padding: 16px;
  margin-top 16px;
  position: relative;

  @media(min-width: 920px) {
    background-color: transparent;
    margin-top: 155px;
  }

  &:after {
    content: "";
    display: block;
    width: 787px;
    heigth: 975px;
    background-image: url('/images/hero-image.png');
    position: absolute;
    --baseDistance: -287px;
    top: calc(var(--baseDistance) + 50px);
    rigth: 0;
    z-index: -1;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 585px;
`;

const TextContainer = styled.div`
  max-width: 481px;
  margin-bottom: 32px;
`;

const Title = styled.section`
  h1 {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 24px;
  }

  h1 strong {
    font-family: Elsie Swash Caps;
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0em;
    text-align: left;
  }

  @media(min-width: 920px) {
    h1 strong {
      font-size: 82px;
    }
  }
`;

const Text = styled.section`
  p {
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 16px;
  }
`;

const Button = styled.button`
  background: #FFCB47;
  border-radius: 3px;
  border: 2px solid #F1C232;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export {
  Button,
  Body,
  Container,
  TextContainer,
  Title,
  Text,
};
