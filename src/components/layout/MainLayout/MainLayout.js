import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const MainLayout = ({ children }) => (
  <div className='MainLayout'>
    <AppBar>
      <Toolbar disableGutters>
        <Container>
          <PageNav />
        </Container>
      </Toolbar>
    </AppBar>
    <Toolbar />
    <Container>
      {children}
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
