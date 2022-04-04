import { createGlobalStyle } from 'styled-components';
import ResetCSS from './ResetCSS';

const GlobalSytle = createGlobalStyle`

${ResetCSS}

body {
  font-family: 'Montserrat', sans-serif;
}

main {
  max-width: 1200px;
  margin: auto;
}

`;

export default GlobalSytle;
