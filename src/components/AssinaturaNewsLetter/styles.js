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
  height: 75px;
  width: 194px;
  left: 751px;
  top: 597px;
  border-radius: 0px;
  color: #fff;
  width: 100%;
  background-color: #ffcb47;
  padding: 27px;
  box-shadow: 10px 10px 30px 0px #ffcb474d;
  border: 0;

  @media(min-width: 920px) {
    width: initial;
  }
`;

const Form = styled.form`
  input[type="email"] {
    padding: 27px;
    padding-left: 55px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 920px) {
    flex.direction: row;
  }

  input {
    flex: 1;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    background-image: url("/images/icons/icon-mail.svg");
    background-repeat: no-repeat;
    background-position: 16px center;
    outline-color: #ffcb47;
    box-shadow: 10px 10px 30px 0px #0000000f;
    border: 0;
  }

  input:hover {
    box-shadow: 10px 10px 30px 0px #0000002e;
  }

`;

export {
  Button,
  Body,
  Container,
  TextContainer,
  Title,
  Text,
  Form,
  FormGroup,
};
