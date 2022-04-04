import React from 'react';

import { Button, Body, Container } from './styles';

function AssinaturaNewsLetter() {
  return (
    <Body>
      <Container>
        <section>
          <h1>
            Sua casa com as
            <br />
            <strong>
              melhores
              <br />
              plantas
            </strong>
          </h1>
        </section>
        <section>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar
            a sua casa e torná-lo uma pessoa mais feliz no seu dia
            a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </section>
      </Container>

      <form action="/">
        <input type="email" placeholder="Insira o seu email" />
        <Button type="button">
          Assinar newsletter
        </Button>
      </form>
    </Body>
  );
}

export default AssinaturaNewsLetter;
