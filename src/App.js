import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
// import { StylesProvider } from '@mui/styles';

import Login from '../src/components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    // <BrowserRouter basename={'/panel'}>
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Routes>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />

              {/* <Route exact path={`${process.env.PUBLIC_URL}/*`} component={NotFound} /> */}
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
