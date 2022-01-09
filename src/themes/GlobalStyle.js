import { createGlobalStyle } from 'styled-components';
import { typography } from './index';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sailec-Medium';
    src: url('/assets/fonts/Sailec-Medium.eot');
    src: url('/assets/fonts/Sailec-Medium.eot?#iefix') format('embedded-opentype'),
         url('/assets/fonts/Sailec-Medium.woff2') format('woff2'),
         url('/assets/fonts/Sailec-Medium.woff') format('woff'),
         url('/assets/fonts/Sailec-Medium.ttf')  format('truetype'),
         url('/assets/fonts/Sailec-Medium.svg#Sailec-Medium') format('svg');
}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${typography.fonts.base};
  };
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
`;

export default GlobalStyle;
