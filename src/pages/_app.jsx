/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />

    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.func.isRequired,
};

export default App;
