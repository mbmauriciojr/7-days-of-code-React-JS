import React from 'react';

import Button from './styles';

function AssinaturaNewsLetter() {
  return (
    <form action="/">
      <input type="email" placeholder="Insira o seu email" />
      <Button type="button">
        Assinar newsletter
      </Button>
    </form>
  );
}

export default AssinaturaNewsLetter;
