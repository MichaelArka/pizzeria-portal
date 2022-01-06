import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Login from '../src/components/views/Login/Login';
import Dashboard from './components/views/Dashboard/Dashboard';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL}/Tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/Waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/Kitchen`} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/Login'} component={Login} />

          {/* <Route exact path={`${process.env.PUBLIC_URL}/*`} component={NotFound} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
