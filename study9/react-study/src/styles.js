import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

export const lightTheme = {
  fontColor: '#2c2c2c',
  bgcolor: 'white',
};

export const darkTheme = {
  fontColor: 'white',
  bgcolor: '#2c2c2c',
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
