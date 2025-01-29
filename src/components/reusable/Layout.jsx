import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({children}) => {
  return (
    <section className='layout_wrapper p-0'>
      <Header />

      {children}
      <Footer />
    </section>
  )
}

export default Layout