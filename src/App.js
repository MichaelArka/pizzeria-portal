import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter } from 'react-router-dom';

// import Login from '../src/components/views/Login';
// import Dashboard from './components/views/Dashboard';
// import Tables from './components/views/Tables';
// import Waiter from './components/views/Waiter';
// import Kitchen from './components/views/Kitchen';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        {/* <Switch> */}
        {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} /> */}
        {/* <Route exact path={`${process.env.PUBLIC_URL}/Tables`} component={Tables} />
        <Route exact path={`${process.env.PUBLIC_URL}/Waiter`} component={Waiter} />
        <Route exact path={`${process.env.PUBLIC_URL}/Kitchen`} component={Kitchen} /> */}
        {/* <Route exact path={`${process.env.PUBLIC_URL}/*`} component={NotFound} /> */}
        {/* <Route exact path={process.env.PUBLIC_URL + '/Login'} component={Login} /> */}
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React lalalalaasdasdasdsadasdsadsadsadsdsdsadsdsadasas
            </a>
          </header>
        </div>
        {/* </Switch> */}
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
