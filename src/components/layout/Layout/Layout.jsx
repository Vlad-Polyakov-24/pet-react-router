import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className='app'>
      <Header/>
      <main className='main'>{props.children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
