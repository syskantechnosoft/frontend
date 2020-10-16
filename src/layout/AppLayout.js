import React from 'react';
import Footer from './Footer';
import MainContent from './MainContent';
import Navbar from './Navbar';

const AppLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <MainContent>{props.children}</MainContent>
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
