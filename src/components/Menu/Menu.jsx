import React from 'react';
import { Link } from 'react-router-dom';

import { Header, NavMenu } from './styles';

function Menu() {
  return (
    <Header>
      <div>
        <img alt="Logotipo Casa Verde" src="/images/logo.svg" />
      </div>
      <NavMenu>
        <Link to="/">Como fazer</Link>
        /
        <Link to="/ofertas">Ofertas</Link>
        /
        <Link to="/depoimentos">Depoimentos</Link>
        /
        <Link to="/videos">Vídeos</Link>
        /
        <Link to="/meu-carinho">Meu Carrinho</Link>
      </NavMenu>
    </Header>
  );
}

export default Menu;
