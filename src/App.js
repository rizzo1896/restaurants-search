import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './pages/Home/index';
import { Reset } from 'styled-reset';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
