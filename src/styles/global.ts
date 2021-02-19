import { createGlobalStyle } from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-tabs/style/react-tabs.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
