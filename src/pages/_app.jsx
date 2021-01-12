import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

_app.propTypes = {

}

export default _app

